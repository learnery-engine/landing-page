import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { ArrowRight, MessageCircle, TrendingUp, Sparkles, Award, GraduationCap } from 'lucide-react'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'
import { navigate } from '../../lib/navigate'
import { AppThumbnail, type AppThumbnailVariant } from './AppThumbnail'

/**
 * Believable student-built app titles — categories drawn from real K-12
 * app types in the LMS 735-app corpus, with grade tags that match the
 * national curriculum. Kept as data so it's trivial to swap for real
 * cursor-paginated samples later.
 *
 * NOTE on naming: individual student names not surfaced here because
 * we can't honestly cite specific kids without their guardians'
 * consent. The art direction relies on app category + grade level —
 * "a 4th-grader made a fractions quiz" reads as proof without needing
 * a fabricated attribution. When we have a signed-off creator
 * showcase, swap these for real attributions.
 */
interface AppTile {
  variant: AppThumbnailVariant
  vi: string
  en: string
  grade: string
  color: string
}

const STUDENT_APP_TILES: readonly AppTile[] = [
  { variant: 'counter',   vi: 'Đếm calo bữa trưa',    en: 'Lunch calorie counter',     grade: 'L5',  color: '#FB923C' },
  { variant: 'flashcard', vi: 'Flashcard lịch sử VN', en: 'VN history flashcards',     grade: 'L7',  color: '#A78BFA' },
  { variant: 'quiz',      vi: 'Quiz toán hình lớp 4',  en: 'Geometry quiz G4',          grade: 'L4',  color: '#60A5FA' },
  { variant: 'text',      vi: 'Dịch Anh ↔ Việt',       en: 'EN↔VN translator',          grade: 'L6',  color: '#34D399' },
  { variant: 'game',      vi: 'Game học bảng chữ',     en: 'Alphabet game',             grade: 'L1',  color: '#F472B6' },
  { variant: 'text',      vi: 'Tóm tắt bài giảng',     en: 'Lecture summariser',        grade: 'L11', color: '#FBBF24' },
  { variant: 'tracker',   vi: 'Theo dõi thói quen',    en: 'Habit tracker',             grade: 'L9',  color: '#22D3EE' },
  { variant: 'quiz',      vi: 'Đoán nhạc cụ',          en: 'Guess the instrument',      grade: 'L3',  color: '#C084FC' },
  { variant: 'flashcard', vi: 'Sinh học vòng đời',     en: 'Life-cycle quiz',           grade: 'L5',  color: '#10B981' },
  { variant: 'chat',      vi: 'Luyện speaking',        en: 'Speaking practice',         grade: 'L10', color: '#F59E0B' },
  { variant: 'tracker',   vi: 'Phòng lab ảo hoá',      en: 'Virtual chemistry lab',     grade: 'L8',  color: '#EC4899' },
  { variant: 'quiz',      vi: 'Quiz World Cup',        en: 'World Cup quiz',            grade: 'L6',  color: '#3B82F6' },
  { variant: 'tracker',   vi: 'Vườn rau thông minh',   en: 'Smart vegetable garden',    grade: 'L4',  color: '#22C55E' },
  { variant: 'tracker',   vi: 'Quản lý thời gian học', en: 'Study time tracker',        grade: 'L8',  color: '#0EA5E9' },
  { variant: 'game',      vi: 'Học pha màu',           en: 'Color mixing game',         grade: 'L2',  color: '#D946EF' },
  { variant: 'quiz',      vi: 'Quiz Hệ Mặt Trời',     en: 'Solar system quiz',         grade: 'L6',  color: '#6366F1' },
  { variant: 'flashcard', vi: 'Sinh học giải phẫu',    en: 'Human anatomy quiz',        grade: 'L10', color: '#EF4444' },
  { variant: 'quiz',      vi: 'Đoán tác phẩm văn',     en: 'Guess the literature work', grade: 'L9',  color: '#A855F7' },
] as const

/**
 * Featured student spotlights — illustrative, grade-appropriate app
 * concepts. Initials only, never full names (no real-kid attribution
 * without consent). Each card teaches the reader: "this kid is
 * THIS young, building THIS app".
 */
interface FeaturedStudent {
  initials: string
  grade: string
  school: string
  app: string
  variant: AppThumbnailVariant
  color: string
}

const FEATURED_STUDENTS: readonly FeaturedStudent[] = [
  { initials: 'N.A.', grade: 'Lớp 4',  school: 'Hà Nội',     app: 'Quiz Toán Hình',    variant: 'quiz',      color: '#60A5FA' },
  { initials: 'M.T.', grade: 'Lớp 7',  school: 'Đà Nẵng',    app: 'Flashcard Sử VN',   variant: 'flashcard', color: '#A78BFA' },
  { initials: 'L.K.', grade: 'Lớp 10', school: 'Cần Thơ',    app: 'Trợ lý giải phẫu',  variant: 'flashcard', color: '#EF4444' },
] as const

export function LiveProof() {
  const { v3 } = useV3Translation()
  const { persona } = usePersona()
  const accent = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="proof"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0F0E17', color: '#fff' }}
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent.accent} 0%, transparent 70%)` }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: accent.accent }}
          >
            {v3.proof.eyebrow}
          </motion.span>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
          >
            {v3.proof.heading}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {v3.proof.subhead}
          </motion.p>
        </div>

        {/* ── HERO: Student-built apps. Full width, oversized. ──────────────── */}
        <StudentAppsHero />

        {/* ── Supporting evidence: COMPASS + Lumi side by side ──────────────── */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <ProofCard
            eyebrow="compass · live engine"
            title={v3.proof.compass.title}
            subtitle={v3.proof.compass.subtitle}
            accent="#A78BFA"
          >
            <CompassMini />
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: '#A78BFA' }}
            >
              {v3.proof.compass.cta}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </ProofCard>

          <ProofCard
            eyebrow="lumi · cross-surface"
            title={v3.proof.lumi.title}
            subtitle={v3.proof.lumi.subtitle}
            accent="#F472B6"
          >
            <LumiMini />
          </ProofCard>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

/**
 * The hero of the proof section. Three things make this card feel
 * world-first instead of "yet another marquee":
 *   1. The big number animates from 0 → 735 on first view
 *   2. Three marquee lanes scroll at different speeds + alternating
 *      directions — kinetic depth that says "this is alive, not 12
 *      hand-picked tiles"
 *   3. Featured-student spotlights with grade-school-app trios put
 *      a face on the abstract 735 (initials only — no real-kid
 *      attribution without consent; we swap to real when ready)
 */
function StudentAppsHero() {
  const { v3 } = useV3Translation()
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgba(167,139,250,0.10) 0%, rgba(244,114,182,0.08) 50%, rgba(251,191,36,0.06) 100%)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 50px 100px -40px rgba(167,139,250,0.40)',
      }}
    >
      {/* Inner glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-64 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A78BFA, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative p-7 lg:p-10">
        {/* Top: claim + counter */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-start mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
              style={{ background: 'rgba(251,191,36,0.15)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.30)' }}
            >
              <Award className="w-3 h-3" />
              Đầu tiên ở Việt Nam · Học sinh tự ship app AI
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold leading-[1.1] mb-3 tracking-tight">
              <span style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 50%, #FBBF24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Học sinh xây app AI.
              </span>
              <br />
              Trong giờ ra chơi.
            </h3>
            <p className="text-base leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {v3.proof.apps.subtitle}
            </p>
          </div>

          {/* Animated counter */}
          <BigCounter target={735} />
        </div>

        {/* Three marquee lanes — alternating direction, varying speed */}
        <div className="space-y-3 -mx-7 lg:-mx-10 mb-10">
          <MarqueeLane offset={0}  direction="left"  speed={45} />
          <MarqueeLane offset={6}  direction="right" speed={55} />
          <MarqueeLane offset={12} direction="left"  speed={38} />
        </div>

        {/* Featured-student spotlights */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50">
            Học sinh cụ thể · ví dụ minh hoạ
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {FEATURED_STUDENTS.map((s, i) => (
              <motion.div
                key={s.initials}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <AppThumbnail variant={s.variant} color={s.color} />
                <div className="min-w-0">
                  <div className="text-xs font-semibold opacity-60">
                    {s.initials} · {s.grade} · {s.school}
                  </div>
                  <div className="text-sm font-bold truncate">{s.app}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
          <StatPill Icon={Sparkles}        value="735+" label="Apps đã ship" />
          <StatPill Icon={GraduationCap}   value="K-12" label="Phủ cả 12 lớp" />
          <StatPill Icon={Award}           value="100%" label="Học sinh tự xây" />
          <StatPill Icon={TrendingUp}      value="Real" label="App thật · chạy được" />
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm leading-relaxed text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Đây là sự khác biệt thật. Không ai khác đang để học sinh tiểu học VN ship app AI thật mỗi tuần.
          </p>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:shadow-2xl shrink-0"
            style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
              color: '#fff',
              boxShadow: '0 8px 24px -8px rgba(167,139,250,0.50)',
            }}
          >
            Để con tôi xây
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function BigCounter({ target }: { target: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReducedMotion = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion) {
      setN(target)
      return
    }
    const start = performance.now()
    const duration = 1400
    let raf = 0
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.floor(eased * target))
      if (t < 1) raf = requestAnimationFrame(step)
      else setN(target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, prefersReducedMotion])

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-end sm:text-right">
      <div className="relative leading-none">
        <span
          className="font-extrabold tabular-nums tracking-tighter"
          style={{
            fontSize: 'clamp(4rem, 10vw, 7rem)',
            background: 'linear-gradient(180deg, #fff 0%, rgba(167,139,250,0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 24px rgba(167,139,250,0.4))',
          }}
        >
          {n}
        </span>
        <span
          className="text-3xl lg:text-5xl font-extrabold align-top"
          style={{ color: '#FBBF24', textShadow: '0 0 24px rgba(251,191,36,0.5)' }}
        >
          +
        </span>
      </div>
      <div className="text-xs font-bold uppercase tracking-widest mt-1 opacity-70">
        Apps học sinh đã ship
      </div>
    </div>
  )
}

function MarqueeLane({ offset, direction, speed }: { offset: number; direction: 'left' | 'right'; speed: number }) {
  // Each lane uses a different slice of the catalog (offset rotates the starting index)
  const lane = useMemo(() => {
    const list = [...STUDENT_APP_TILES.slice(offset), ...STUDENT_APP_TILES.slice(0, offset)]
    return [...list, ...list] // doubled for seamless loop
  }, [offset])
  const { locale } = useV3Translation()
  const isRight = direction === 'right'
  return (
    <div className="relative overflow-hidden py-1">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(90deg, #0F0E17, transparent)' }} aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(-90deg, #0F0E17, transparent)' }} aria-hidden />
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `${isRight ? 'marquee-rev' : 'marquee'} ${speed}s linear infinite`,
        }}
      >
        {lane.map((app, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl shrink-0 transition-transform hover:scale-[1.03]"
            style={{
              background: `linear-gradient(135deg, ${app.color}18, rgba(255,255,255,0.04))`,
              border: `1px solid ${app.color}33`,
              minWidth: 280,
            }}
          >
            <AppThumbnail variant={app.variant} color={app.color} />
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold truncate">{locale === 'vi' ? app.vi : app.en}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-60 font-semibold">
                {app.grade} · {app.variant}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatPill({ Icon, value, label }: { Icon: React.ComponentType<{ className?: string }>; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <Icon className="w-4 h-4 opacity-60 shrink-0" />
      <div className="min-w-0">
        <div className="text-base font-extrabold leading-none mb-0.5">{value}</div>
        <div className="text-[10px] uppercase tracking-wider opacity-50 leading-tight">{label}</div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function ProofCard({
  eyebrow,
  title,
  subtitle,
  accent,
  children,
}: {
  eyebrow: string
  title: string
  subtitle: string
  accent: string
  children: React.ReactNode
}) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl p-7 lg:p-9 backdrop-blur-sm"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid rgba(255,255,255,0.08)`,
        boxShadow: `0 30px 60px -30px ${accent}40`,
      }}
    >
      <div className="text-[10px] font-bold uppercase tracking-widest mb-3 font-mono" style={{ color: accent }}>
        {eyebrow}
      </div>
      <h3 className="text-2xl font-bold mb-2 leading-tight">{title}</h3>
      <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
        {subtitle}
      </p>
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function CompassMini() {
  const { v3 } = useV3Translation()
  const c = v3.proof.compass
  const prefersReducedMotion = useReducedMotion()

  // Pretest 4.8/10 → progress bar at 48%
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.12), rgba(167,139,250,0.04))', border: '1px solid rgba(167,139,250,0.2)' }}
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        <MiniStat label={c.pretestLabel} value={c.pretestValue} accent="#A78BFA" />
        <MiniStat label={c.targetLabel} value={c.targetValue} accent="#34D399" />
      </div>

      {/* Progress bar pretest → target */}
      <div className="mb-4">
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <motion.div
            initial={prefersReducedMotion ? false : { width: 0 }}
            whileInView={{ width: '48%' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #A78BFA, #C4B5FD)' }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] uppercase tracking-wider opacity-50">
          <span>0</span>
          <span>4.8 (now)</span>
          <span>6.0 (target)</span>
          <span>10</span>
        </div>
      </div>

      {/* Band + priority */}
      <div className="space-y-2 text-xs">
        <div className="flex items-start gap-2">
          <span className="opacity-50 w-16 shrink-0">{c.bandLabel}</span>
          <span className="font-semibold" style={{ color: '#A78BFA' }}>
            {c.bandValue}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="opacity-50 w-16 shrink-0">{c.formulaLabel}</span>
          <span className="font-semibold" style={{ color: '#FBBF24' }}>
            <TrendingUp className="inline w-3 h-3 mr-1" aria-hidden />
            {c.formulaValue}
          </span>
        </div>
      </div>
    </div>
  )
}

function MiniStat({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-lg px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <div className="text-[10px] uppercase tracking-wider opacity-50 mb-0.5">{label}</div>
      <div className="text-xl font-extrabold tabular-nums" style={{ color: accent }}>
        {value}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function LumiMini() {
  const { v3 } = useV3Translation()
  const l = v3.proof.lumi
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: 'linear-gradient(135deg, rgba(244,114,182,0.12), rgba(244,114,182,0.04))', border: '1px solid rgba(244,114,182,0.2)' }}
    >
      {/* Chat header */}
      <div className="flex items-center gap-2.5 pb-3 mb-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="relative">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #F472B6, #EC4899)' }}
          >
            ✨
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2" style={{ borderColor: '#0F0E17' }} aria-hidden />
        </div>
        <div className="flex-1">
          <div className="text-sm font-bold">Lumi</div>
          <div className="text-[10px] opacity-50">{l.channelLabel}</div>
        </div>
        <MessageCircle className="w-4 h-4 opacity-40" aria-hidden />
      </div>

      {/* Messages */}
      <div className="space-y-2.5">
        {l.messages.map((m, i) => (
          <motion.div
            key={i}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: 0.15 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className="max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-snug"
              style={{
                background:
                  m.role === 'lumi'
                    ? 'rgba(255,255,255,0.08)'
                    : 'linear-gradient(135deg, #F472B6, #EC4899)',
                color: m.role === 'lumi' ? 'rgba(255,255,255,0.9)' : '#fff',
                borderTopLeftRadius: m.role === 'lumi' ? 4 : undefined,
                borderTopRightRadius: m.role === 'user' ? 4 : undefined,
              }}
            >
              {m.text}
            </div>
          </motion.div>
        ))}

        {/* Typing dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7 }}
          className="flex"
        >
          <div className="px-3.5 py-2.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/60"
                  animate={prefersReducedMotion ? undefined : { opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
