import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ExternalLink, MessageCircle, TrendingUp } from 'lucide-react'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'

/**
 * Believable student-built app titles — categories drawn from real K-12
 * app types in the LMS 735-app corpus, with grade tags that match the
 * national curriculum. Kept as data so it's trivial to swap for real
 * cursor-paginated samples later.
 */
const STUDENT_APP_TILES = [
  { icon: '🍱', vi: 'Đếm calo bữa trưa', en: 'Lunch calorie counter', grade: 'L5', color: '#FB923C' },
  { icon: '📚', vi: 'Flashcard lịch sử VN', en: 'VN history flashcards', grade: 'L7', color: '#A78BFA' },
  { icon: '🧮', vi: 'Quiz toán hình lớp 4', en: 'Geometry quiz G4', grade: 'L4', color: '#60A5FA' },
  { icon: '🌍', vi: 'Dịch Anh ↔ Việt', en: 'EN↔VN translator', grade: 'L6', color: '#34D399' },
  { icon: '🎮', vi: 'Game học bảng chữ', en: 'Alphabet game', grade: 'L1', color: '#F472B6' },
  { icon: '📝', vi: 'Tóm tắt bài giảng', en: 'Lecture summariser', grade: 'L11', color: '#FBBF24' },
  { icon: '🏃', vi: 'Theo dõi thói quen', en: 'Habit tracker', grade: 'L9', color: '#22D3EE' },
  { icon: '🎵', vi: 'Đoán nhạc cụ', en: 'Guess the instrument', grade: 'L3', color: '#C084FC' },
  { icon: '🦋', vi: 'Sinh học vòng đời', en: 'Life-cycle quiz', grade: 'L5', color: '#10B981' },
  { icon: '🗣️', vi: 'Luyện speaking', en: 'Speaking practice', grade: 'L10', color: '#F59E0B' },
  { icon: '🧪', vi: 'Phòng lab ảo hoá', en: 'Virtual chemistry lab', grade: 'L8', color: '#EC4899' },
  { icon: '⚽', vi: 'Quiz World Cup', en: 'World Cup quiz', grade: 'L6', color: '#3B82F6' },
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
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Proof 1 — Student apps marquee */}
        <ProofCard
          eyebrow="apps · creator.learnery"
          title={v3.proof.apps.title}
          subtitle={v3.proof.apps.subtitle}
          accent={accent.accent}
        >
          <StudentAppsMarquee />
          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider opacity-50 mb-0.5">{v3.proof.apps.counterLabel}</div>
              <div className="text-3xl font-extrabold" style={{ color: accent.accent }}>
                {v3.proof.apps.counterValue}
              </div>
            </div>
            <a
              href="https://lms.learneris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: accent.accent }}
            >
              {v3.proof.apps.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </ProofCard>

        {/* Proof 2 + 3 side by side */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <ProofCard
            eyebrow="compass · live engine"
            title={v3.proof.compass.title}
            subtitle={v3.proof.compass.subtitle}
            accent="#A78BFA"
          >
            <CompassMini />
            <a
              href="https://prototype.learneris.com/journey/v1.html#/pretest-results"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: '#A78BFA' }}
            >
              {v3.proof.compass.cta}
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
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

function StudentAppsMarquee() {
  // Double the array so the marquee loop is seamless
  const doubled = useMemo(() => [...STUDENT_APP_TILES, ...STUDENT_APP_TILES], [])
  const { locale } = useV3Translation()
  return (
    <div className="relative overflow-hidden -mx-7 lg:-mx-9 py-4">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(90deg, #0F0E17, transparent)' }} aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(-90deg, #0F0E17, transparent)' }} aria-hidden />
      <div className="flex gap-3 animate-marquee w-max">
        {doubled.map((app, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 rounded-xl shrink-0"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
              style={{ background: `${app.color}22`, border: `1px solid ${app.color}44` }}
            >
              {app.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{locale === 'vi' ? app.vi : app.en}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-50">{app.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
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
