import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'

// Routes that must return HTTP 200 (e.g. legal pages required for
// Google OAuth verification, link previews, search indexing). For each
// route, write a real index.html so the host serves it as 200 instead
// of falling through to the 404 fallback.
//
// V3 = persona-first preview landing. Prerendered so /v3 returns 200
// for sharing on Zalo/Slack/etc.; pulled when V3 is promoted to default.
const plainRoutes = ['privacy', 'terms', 'v3']

for (const route of plainRoutes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(join(dist, 'index.html'), join(dir, 'index.html'))
  console.log(`prerendered: /${route}/index.html`)
}

// ── Persona deep-link routes ────────────────────────────────────────────────
//
// /v3/<slug> — each generates its own HTML file with persona-specific
// <title> + meta description baked in, so cold link previews
// (Zalo, Facebook, Twitter, search) carry the right copy for that persona's
// landing page. Runtime React still updates the title when the user
// switches persona via the picker (see `useDocumentMeta.ts`).
//
// Slug catalog mirrors `SLUG_TO_PERSONA` in shared/persona-tokens — keep in
// sync if a new persona slug is added. The flatness of this list is
// deliberate (vs. importing the TS module) so the prerender step has no
// build-time dep on the consumer app.
const v3PersonaRoutes = [
  {
    slug: 'student',
    title: 'Learneris cho Học sinh — Học · Xây · Lớn cùng AI',
    description: 'Lumi đồng hành 24/7 · Xây app AI đầu đời · Hồ sơ năng lực số. Một tài khoản, năm bề mặt.',
  },
  {
    slug: 'teacher',
    title: 'Learneris cho Giáo viên — 13+ công cụ AI ra đề/giáo án',
    description: 'Ra đề kiểm tra, KHBD, slide trong 30 giây. Lớp học AI tự chấm. Bản đồ năng lực lớp.',
  },
  {
    slug: 'parent',
    title: 'Learneris cho Phụ huynh — Theo dõi con đơn giản qua Zalo',
    description: 'Bảng theo dõi con tuần · Lumi gửi báo cáo qua Zalo · Hồ sơ năng lực con. Không cần hỏi con.',
  },
  {
    slug: 'professional',
    title: 'Learneris cho Người đi làm — COMPASS lộ trình cá nhân',
    description: 'TOEIC, IELTS, EMI, chuyển nghề. Chẩn đoán + lộ trình thích nghi + đo đếm mỗi tuần.',
  },
  {
    slug: 'school',
    title: 'Learneris cho Trường — Triển khai AI Literacy chuẩn UNESCO + VNIES',
    description: 'Dashboard hiệu trưởng → Sở GD → Bộ GD. Chương trình K-12 đã thẩm định, triển khai trong tuần.',
  },
]

const baseIndex = readFileSync(join(dist, 'index.html'), 'utf8')

for (const { slug, title, description } of v3PersonaRoutes) {
  const dir = join(dist, 'v3', slug)
  mkdirSync(dir, { recursive: true })
  const baked = bakeMeta(baseIndex, title, description)
  writeFileSync(join(dir, 'index.html'), baked)
  console.log(`prerendered: /v3/${slug}/index.html  (persona-baked)`)
}

// SPA fallback for everything else (still 404 status, but renders).
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
console.log('wrote: 404.html')

/**
 * Rewrite the <title> and <meta name="description"> in an index.html
 * string. We use a regex pass (rather than parsing) because the input
 * is a small, well-known shape under our control — see index.html.
 */
function bakeMeta(html, title, description) {
  const escapedTitle = escapeHtml(title)
  const escapedDesc = escapeHtml(description)
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escapedTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapedDesc}" />`
    )
}

function escapeHtml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
