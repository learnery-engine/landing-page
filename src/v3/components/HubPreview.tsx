import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles, Compass, Wand2, LayoutDashboard, Award, ClipboardCheck, FileText, Gamepad2 } from 'lucide-react'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'
import { navigate } from '../../lib/navigate'

/**
 * "Đăng nhập là vào ngay đây" — a stylized preview of the actual /v3
 * post-login hub, rendered as a static mockup. We can't iframe the real
 * thing because it's auth-gated and lives on a different origin
 * (aiapp.learneris.com), but the mockup uses the same visual vocabulary
 * (card-shadow, surface dock, persona accents) as the real hub —
 * see `learneris-app/src/app/v3/`.
 *
 * Sits between LiveProof and TrustStrip. Closes the conviction loop:
 * marketing surfaces the surfaces, then SHOWS what the product looks
 * like when you actually sign in.
 */
export function HubPreview() {
  const { persona } = usePersona()
  const { v3 } = useV3Translation()
  const tokens = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()

  // Persona-aware copy. Default to teacher-style copy when neutral.
  const personaLabel = persona ? v3.personas[persona].label : v3.personas.gv.label
  const greetingName = persona === 'hs' ? 'em' : persona === 'gv' ? 'cô Lan' : persona === 'ph' ? 'anh Hùng' : 'bạn'

  return (
    <section
      id="hub-preview"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #ffffff 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: tokens.accent }}
          >
            Sau khi đăng nhập
          </motion.span>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold tracking-tight text-text mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
          >
            Đăng nhập là vào{' '}
            <span
              className="v3-grad-clip"
              style={{
                backgroundImage: `linear-gradient(135deg, ${tokens.accent}, ${tokens.text})`,
              }}
            >
              ngay đây
            </span>
            .
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-muted leading-relaxed"
          >
            Không phải tool catalog. Là một bảng điều khiển nhận ra bạn — bạn đang là ai,
            đang quan tâm việc gì, và bề mặt nào liên quan đến bạn.
          </motion.p>
        </div>

        {/* Browser-chrome wrapper */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-5xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          style={{
            background: '#fafaf8',
            boxShadow: `0 40px 80px -30px ${tokens.ring}, 0 20px 40px -20px rgba(15,23,42,0.15)`,
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/80 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-3 sm:mx-4">
              <div className="bg-white rounded-lg px-3 py-1 text-[11px] text-gray-500 border border-gray-200 max-w-md mx-auto truncate">
                aiapp.learneris.com/v3
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: tokens.tint, color: tokens.text }}>
              <Sparkles className="w-2.5 h-2.5" />
              v3
            </span>
          </div>

          {/* Hub content mockup */}
          <div className="grid lg:grid-cols-[180px_1fr]">
            {/* Sidebar mockup */}
            <aside className="hidden lg:flex flex-col gap-2 p-4 border-r border-gray-200 bg-white">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: tokens.accent }}>L</div>
                <span className="text-sm font-bold text-text">Learneris</span>
              </div>
              {[
                { label: 'Trang chủ', active: true },
                { label: 'Tài liệu' },
                { label: 'Lớp học' },
                { label: 'Hồ sơ' },
                { label: 'Lumi', soon: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-gray-600 flex items-center justify-between gap-1"
                  style={item.active ? { background: tokens.tint, color: tokens.text } : undefined}
                >
                  <span>{item.label}</span>
                  {item.soon && (
                    <span className="text-[8px] font-bold uppercase tracking-wide px-1 py-0.5 rounded text-gray-400 bg-gray-100">
                      Sắp ra mắt
                    </span>
                  )}
                </div>
              ))}
            </aside>

            {/* Main content mockup */}
            <main className="p-5 sm:p-7 lg:p-8 bg-[#fafaf8]">
              {/* Greeting + chips */}
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider mb-2"
                  style={{ background: tokens.tint, color: tokens.text, border: `1px solid ${tokens.ring}` }}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  Bản xem trước · v3
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-text mb-1">
                  Xin chào, {greetingName}!
                </h3>
                <p className="text-xs text-text-muted mb-3">
                  {persona ? v3.personas[persona].pitch.slice(0, 80) + '…' : 'Một tài khoản · Năm bề mặt · Cả hệ sinh thái.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Chip value="7" label="Gen tuần này" accent={tokens.accent} />
                  <Chip value="3" label="Lớp đang chấm" accent={tokens.accent} />
                  <Chip value="4" label="App đã ship" accent={tokens.accent} />
                </div>
              </div>

              {/* Surface dock mockup */}
              <div className="mb-6">
                <div className="grid grid-cols-5 gap-2">
                  <MiniSurface Icon={Compass}         name="COMPASS"  accent="#7C3AED" primary={!persona || persona === 'hs' || persona === 'pro'} />
                  <MiniSurface Icon={Wand2}           name="Mini Apps" accent="#8B5CF6" primary={!persona || persona === 'gv' || persona === 'hs'} />
                  <MiniSurface Icon={LayoutDashboard} name="Lớp học"   accent="#22C55E" primary={!persona || persona === 'gv' || persona === 'hs'} />
                  <MiniSurface Icon={Award}           name="Hồ sơ"     accent="#F59E0B" primary={!persona || persona === 'hs' || persona === 'ph' || persona === 'pro'} />
                  <MiniSurface Icon={Sparkles}        name="Lumi"      accent="#EC4899" primary={false} soon />
                </div>
              </div>

              {/* Quick actions mockup */}
              <div className="mb-6">
                <div className="text-xs font-bold text-text mb-2">Bắt đầu nhanh</div>
                <div className="grid grid-cols-3 gap-2">
                  <MiniAction Icon={ClipboardCheck} label="Tạo bài kiểm tra" accent="#7C3AED" />
                  <MiniAction Icon={FileText}       label="Hướng dẫn học tập" accent="#3B82F6" />
                  <MiniAction Icon={Gamepad2}       label="Nội dung tương tác" accent="#14B8A6" />
                </div>
              </div>

              {/* Continue row mockup — richer content per V2-hero polish bar */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold text-text">Tiếp tục</div>
                  <span className="text-[9px] text-text-muted">↗ Tất cả</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { name: 'Quiz Hàm số · 20 câu', date: '2 giờ trước', AppIcon: ClipboardCheck, color: '#7C3AED', status: 'done' as const },
                    { name: 'KHBD Tuần 12 — Toán 12', date: 'Hôm qua',      AppIcon: FileText,       color: '#3B82F6', status: 'done' as const },
                    { name: 'Bài luyện hình học',   date: '3 ngày trước', AppIcon: Gamepad2,      color: '#14B8A6', status: 'done' as const },
                    { name: 'Slide ôn tập THPT',    date: 'Tuần trước',   AppIcon: FileText,       color: '#22C55E', status: 'done' as const },
                  ].map((r) => {
                    const Icon = r.AppIcon
                    return (
                      <div key={r.name} className="bg-white rounded-lg p-2.5 border border-gray-100 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <div
                            className="w-5 h-5 rounded flex items-center justify-center"
                            style={{ background: `${r.color}15`, color: r.color }}
                          >
                            <Icon className="w-3 h-3" />
                          </div>
                          <span className="w-1 h-1 rounded-full bg-emerald-400" aria-hidden />
                        </div>
                        <div className="text-[10px] font-semibold text-gray-700 leading-tight line-clamp-2 min-h-[1.6em]">{r.name}</div>
                        <div className="text-[9px] text-gray-400 mt-auto">{r.date}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Active "Lumi suggestion" beat — gives the mockup a live-product feel
                  Lumi is status:'vision' — framed as a forthcoming teaser,
                  never an active recommendation, so the mockup stays claims-accurate. */}
              <div
                className="rounded-lg p-2.5 flex items-center gap-2 border border-dashed"
                style={{
                  background: tokens.tint,
                  borderColor: tokens.ring,
                }}
              >
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: tokens.accent, color: '#fff' }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] font-bold uppercase tracking-wide px-1 py-0.5 rounded shrink-0" style={{ background: '#fff', color: tokens.text, border: `1px solid ${tokens.ring}` }}>
                      Sắp ra mắt
                    </span>
                    <div className="text-[11px] font-semibold text-text truncate">
                      Lumi sẽ chủ động nhắc lịch ôn cho từng học sinh
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.div>

        {/* Persona caption + CTA */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-text-muted mb-4">
            {persona ? (
              <>Đây là cách hub hiển thị cho <strong className="text-text">{personaLabel}</strong>. Mỗi vai trò thấy bề mặt + nội dung khác nhau.</>
            ) : (
              <>Chọn vai trò ở phần đầu trang để xem hub hiển thị thế nào cho bạn.</>
            )}
          </p>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.text})`,
              boxShadow: `0 6px 20px -6px ${tokens.ring}`,
            }}
          >
            Đăng nhập là thấy ngay
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function Chip({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-gray-200">
      <span className="text-xs font-bold tabular-nums" style={{ color: accent }}>{value}</span>
      <span className="text-[10px] text-gray-500">{label}</span>
    </div>
  )
}

function MiniSurface({ Icon, name, accent, primary, soon }: { Icon: React.ComponentType<{ className?: string }>; name: string; accent: string; primary: boolean; soon?: boolean }) {
  // `soon` surfaces (e.g. Lumi, status:'vision') render muted with a tag so
  // the mockup never implies they're a live, usable part of the hub today.
  const isPrimary = primary && !soon
  return (
    <div
      className="relative bg-white rounded-lg p-2 border text-center transition-all"
      style={{
        borderColor: isPrimary ? accent : 'rgba(15,23,42,0.08)',
        borderWidth: isPrimary ? 2 : 1,
        opacity: soon ? 0.55 : isPrimary ? 1 : 0.5,
      }}
    >
      <div
        className="w-6 h-6 rounded-md mx-auto mb-1 flex items-center justify-center"
        style={{ background: `${accent}15`, color: accent }}
      >
        <Icon className="w-3 h-3" />
      </div>
      <div className="text-[8px] font-semibold text-gray-700 truncate">{name}</div>
      {soon && (
        <div className="text-[7px] font-bold uppercase tracking-wide text-gray-400 leading-none mt-0.5">
          Sắp ra mắt
        </div>
      )}
    </div>
  )
}

function MiniAction({ Icon, label, accent }: { Icon: React.ComponentType<{ className?: string }>; label: string; accent: string }) {
  return (
    <div className="bg-white rounded-lg p-2.5 border border-gray-200 flex items-center gap-2">
      <div
        className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
        style={{ background: `${accent}15`, color: accent }}
      >
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div className="text-[10px] font-semibold text-gray-700 truncate">{label}</div>
    </div>
  )
}
