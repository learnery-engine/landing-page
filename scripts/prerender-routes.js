import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'

// Routes that must return HTTP 200 (e.g. legal pages required for
// Google OAuth verification, link previews, search indexing). For each
// route, write a real index.html so the host serves it as 200 instead
// of falling through to the 404 fallback.
const prerenderRoutes = ['privacy', 'terms']

for (const route of prerenderRoutes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(join(dist, 'index.html'), join(dir, 'index.html'))
  console.log(`prerendered: /${route}/index.html`)
}

// SPA fallback for everything else (still 404 status, but renders).
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
console.log('wrote: 404.html')
