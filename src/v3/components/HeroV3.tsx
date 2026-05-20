import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { ArrowRight, RotateCcw, Sparkles, ClipboardCheck, FileText, Gamepad2, Wand2 } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useV3Translation } from '../i18n'
import { usePersona, type Persona } from '../PersonaContext'
import { PERSONA_TOKENS, personaTokens, type PersonaToken } from '../tokens'
import { navigate } from '../../lib/navigate'
import { PersonaIcon } from './PersonaIcon'

const PERSONA_ORDER: readonly Persona[] = ['hs', 'gv', 'ph', 'pro', 'b2b'] as const

/**
 * Rotating proof: real categories of student-built apps. Pulled from the
 * 735-prompt-apps reality referenced in the brand thesis. Each entry is
 * deliberately concrete so it reads as evidence, not buzzwords.
 */
const STUDENT_APP_SAMPLES = {
  vi: [
    'máy đếm calo bữa trưa',
    'app dịch từ vựng Anh-Việt',
    'bộ flashcard ôn lịch sử',
    'quiz luyện thi vào 10',
    'app theo dõi thói quen học',
    'AI tóm tắt bài giảng',
    'game học toán lớp 4',
  ],
  en: [
    'lunch calorie counter',
    'Vietnamese vocab translator',
    'history flashcard set',
    'grade-10 entrance quiz',
    'study habit tracker',
    'lecture summariser',
    'grade-4 math game',
  ],
} as const

export function HeroV3() {
  const { v3, locale } = useV3Translation()
  const { persona, setPersona } = usePersona()
  const prefersReducedMotion = useReducedMotion()
  const tokens = personaTokens(persona)

  // Rotating student app proof line — pauses on hover to let users actually read it
  const [proofIndex, advance] = useReducer((i: number) => (i + 1) % STUDENT_APP_SAMPLES[locale].length, 0)
  const [paused, setPaused] = useState(false)
  const samples = STUDENT_APP_SAMPLES[locale]

  useEffect(() => {
    if (paused || prefersReducedMotion) return
    const id = window.setInterval(advance, 2400)
    return () => window.clearInterval(id)
  }, [paused, prefersReducedMotion])

  return (
    <section
      className="relative isolate overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28"
      style={{
        // The whole section's accent shifts with persona — subtle, not loud
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${tokens.tint}, transparent 70%), #ffffff`,
      }}
    >
      <AnimatedMesh accent={tokens.accent} reducedMotion={!!prefersReducedMotion} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
            style={{ background: tokens.tint, color: tokens.text, border: `1px solid ${tokens.ring}` }}
          >
            {v3.hero.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-center font-extrabold tracking-tight text-text mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: 1.05 }}
        >
          <span>{v3.hero.headlineLine1} </span>
          <span
            style={{
              backgroundImage: `linear-gradient(135deg, ${tokens.accent}, ${persona ? PERSONA_TOKENS[persona].text : '#5B21B6'})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {v3.hero.headlineHighlight}
          </span>
          <span> {v3.hero.headlineLine2}</span>
        </motion.h1>

        {/* Subhead — morphs to persona pitch when one is selected */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-10 min-h-[5rem]"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={persona ?? 'default'}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {persona ? v3.personas[persona].pitch : v3.hero.subhead}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Persona picker / persona-active state */}
        <AnimatePresence mode="wait">
          {persona ? (
            <PersonaActiveBlock
              key="active"
              persona={persona}
              onReset={() => setPersona(null)}
            />
          ) : (
            <PersonaPickerBlock key="picker" onPick={setPersona} />
          )}
        </AnimatePresence>

        {/* Animated product mockup — persona-themed browser-chrome with
            mini-app generating preview. Mirrors V2's hero polish (V2's
            Hero.tsx 119-189) but persona-aware. */}
        <div className="mt-14 lg:mt-16 flex justify-center">
          <HeroMockup tokens={tokens} />
        </div>

        {/* Rotating live proof line */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex items-center justify-center gap-2 text-sm text-text-muted"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
          <span>{v3.hero.rotatingProofLabel}</span>
          <span className="relative inline-flex items-baseline overflow-hidden align-baseline" style={{ height: '1.4em' }}>
            <span className="invisible font-bold whitespace-nowrap">{samples[proofIndex]}</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={proofIndex}
                initial={prefersReducedMotion ? false : { y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={prefersReducedMotion ? undefined : { y: '-100%', opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute left-0 top-0 font-bold whitespace-nowrap"
                style={{ color: tokens.text }}
              >
                {samples[proofIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">
            <strong className="text-text">735+</strong> {v3.hero.rotatingProofSuffix.replace(/^\+\s*/, '')}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function PersonaPickerBlock({ onPick }: { onPick: (p: Persona) => void }) {
  const { v3 } = useV3Translation()
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-text-muted uppercase tracking-wider">
          {v3.hero.pickerLabel}
        </span>
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto"
        role="radiogroup"
        aria-label={v3.hero.pickerLabel}
      >
        {PERSONA_ORDER.map((p) => (
          <PersonaCard key={p} persona={p} onPick={onPick} />
        ))}
      </div>
    </motion.div>
  )
}

function PersonaCard({ persona, onPick }: { persona: Persona; onPick: (p: Persona) => void }) {
  const { v3 } = useV3Translation()
  const tokens = PERSONA_TOKENS[persona]
  const copy = v3.personas[persona]
  return (
    <motion.button
      type="button"
      role="radio"
      aria-checked={false}
      onClick={() => onPick(persona)}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className="group relative flex flex-col items-center gap-2 px-4 py-5 rounded-2xl bg-white border-2 transition-all duration-200 focus:outline-none focus-visible:ring-4"
      style={{ borderColor: 'rgba(15,23,42,0.08)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = tokens.accent
        e.currentTarget.style.boxShadow = `0 12px 32px -8px ${tokens.ring}`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(15,23,42,0.08)'
        e.currentTarget.style.boxShadow = 'none'
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 4px ${tokens.ring}`
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ background: tokens.tint, color: tokens.text }}
        aria-hidden
      >
        <PersonaIcon persona={persona} className="w-6 h-6" />
      </div>
      <span className="text-sm font-bold text-text">{copy.label}</span>
      <span className="text-xs text-text-muted italic">"{copy.pronoun}"</span>
    </motion.button>
  )
}

function PersonaActiveBlock({ persona, onReset }: { persona: Persona; onReset: () => void }) {
  const { v3 } = useV3Translation()
  const tokens = PERSONA_TOKENS[persona]
  const copy = v3.personas[persona]
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="max-w-3xl mx-auto"
    >
      {/* Persona chip + reset */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold"
          style={{ background: tokens.tint, color: tokens.text, border: `1px solid ${tokens.ring}` }}
        >
          <PersonaIcon persona={persona} className="w-4 h-4" />
          {copy.label}
        </span>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-text-muted hover:text-text hover:bg-gray-100 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {v3.hero.reset}
        </button>
      </div>

      {/* Three surface highlights for this persona */}
      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {copy.surfaces.map((s, i) => (
          <motion.div
            key={s}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.07 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border text-sm font-medium text-text"
            style={{ borderColor: tokens.ring }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: tokens.accent }}
              aria-hidden
            />
            {s}
          </motion.div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all hover:shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.text})`,
            boxShadow: `0 6px 20px -6px ${tokens.ring}`,
          }}
        >
          {copy.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <a
          href="#surfaces"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-colors border-2 hover:bg-gray-50"
          style={{ borderColor: tokens.ring, color: tokens.text }}
        >
          {copy.ctaSecondary}
        </a>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

/**
 * Animated background mesh — two slowly-drifting gradient blobs that pick up
 * the persona accent colour. Disabled when prefers-reduced-motion.
 */
function AnimatedMesh({ accent, reducedMotion }: { accent: string; reducedMotion: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null)
  // Memoise the keyframes so framer doesn't restart on every re-render
  const motionProps = useMemo(
    () => ({
      blob1: { x: ['-10%', '10%', '-10%'], y: ['-5%', '5%', '-5%'] },
      blob2: { x: ['12%', '-8%', '12%'], y: ['10%', '0%', '10%'] },
    }),
    []
  )
  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        className="absolute w-[55rem] h-[55rem] rounded-full blur-3xl opacity-20"
        style={{ background: `radial-gradient(circle at center, ${accent}, transparent 65%)`, top: '-20%', left: '-15%' }}
        animate={reducedMotion ? undefined : motionProps.blob1}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[45rem] h-[45rem] rounded-full blur-3xl opacity-15"
        style={{ background: `radial-gradient(circle at center, ${accent}, transparent 65%)`, top: '5%', right: '-20%' }}
        animate={reducedMotion ? undefined : motionProps.blob2}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Subtle dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

/**
 * Browser-chrome product mockup. Mirrors V2's hero polish (V2 Hero.tsx
 * lines 120–189): bezel + window dots + URL bar + 4-card mini-app preview
 * + "AI generating" indicator + 2 floating badges around the frame.
 *
 * Persona-themed: URL bar accent, mini-app card tints, badge colors all
 * shift with the active persona. Stays neutral-violet when no persona.
 */
function HeroMockup({ tokens }: { tokens: PersonaToken }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-[600px]"
    >
      {/* Float container so the frame gently bobs */}
      <div className={prefersReducedMotion ? '' : 'animate-float'}>
        <div
          className="relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden"
          style={{
            boxShadow:
              `0 50px 100px -30px ${tokens.ring}, 0 30px 60px -30px rgba(15,23,42,0.18)`,
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/80 border-b border-gray-100">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div
                className="bg-white rounded-lg px-3 py-1 text-[11px] border flex items-center gap-1.5"
                style={{ borderColor: tokens.ring, color: tokens.text }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: tokens.accent }} />
                aiapp.learneris.com
              </div>
            </div>
          </div>

          {/* App preview body */}
          <div className="p-5 sm:p-6 bg-gradient-to-br from-gray-50/40 to-white">
            <MockupAppGrid tokens={tokens} />
            <MockupGenerating tokens={tokens} />
          </div>
        </div>
      </div>

      {/* Floating badges around the frame */}
      <FloatingBadge
        position="top-right"
        icon="⚡"
        label="Tốc độ"
        value="30 giây"
        tone="accent"
        tokens={tokens}
        delay="1s"
      />
      <FloatingBadge
        position="bottom-left"
        icon="🎯"
        label="Chuẩn"
        value="GDPT 2018"
        tone="text"
        tokens={tokens}
        delay="2s"
      />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

const MOCKUP_APPS = [
  { key: 'quiz',     label: 'Bài kiểm tra', Icon: ClipboardCheck, accent: '#7C3AED' },
  { key: 'lesson',   label: 'Giáo án',       Icon: FileText,       accent: '#3B82F6' },
  { key: 'slides',   label: 'Slides',         Icon: Wand2,          accent: '#10B981' },
  { key: 'inter',    label: 'Tương tác',     Icon: Gamepad2,       accent: '#F59E0B' },
] as const

function MockupAppGrid({ tokens }: { tokens: PersonaToken }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      {MOCKUP_APPS.map((app, i) => {
        const Icon = app.Icon
        return (
          <motion.div
            key={app.key}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
              style={{ background: `${app.accent}15`, color: app.accent }}
            >
              <Icon className="w-4 h-4" strokeWidth={2.25} />
            </div>
            <div className="text-sm font-semibold text-text leading-tight">{app.label}</div>
            <div className="text-[10px] text-text-muted mt-0.5 truncate" style={{ color: tokens.text, opacity: 0.6 }}>
              AI-powered
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function MockupGenerating({ tokens }: { tokens: PersonaToken }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.95 }}
      className="rounded-xl p-3.5 flex items-center gap-3 border"
      style={{
        background: tokens.tint,
        borderColor: tokens.ring,
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: tokens.accent }}
      >
        <Sparkles className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-text">AI đang soạn quiz về hàm số…</div>
        <div className="mt-1.5 h-1 rounded-full overflow-hidden" style={{ background: `${tokens.accent}22` }}>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: ['0%', '70%', '85%', '92%'] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: 'loop', ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${tokens.accent}, ${tokens.text})` }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function FloatingBadge({
  position,
  icon,
  label,
  value,
  tone,
  tokens,
  delay,
}: {
  position: 'top-right' | 'bottom-left'
  icon: string
  label: string
  value: string
  tone: 'accent' | 'text'
  tokens: PersonaToken
  delay: string
}) {
  const prefersReducedMotion = useReducedMotion()
  const posClasses =
    position === 'top-right' ? '-top-4 -right-4 sm:-top-5 sm:-right-6' : '-bottom-3 -left-3 sm:-bottom-4 sm:-left-6'
  const valueColor = tone === 'accent' ? tokens.accent : tokens.text
  return (
    <div
      className={`absolute ${posClasses} bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-3.5 sm:px-4 py-2 sm:py-2.5 ${prefersReducedMotion ? '' : 'animate-float'}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl" aria-hidden>
          {icon}
        </span>
        <div>
          <div className="text-[10px] sm:text-xs font-medium text-text-muted">{label}</div>
          <div className="text-xs sm:text-sm font-bold" style={{ color: valueColor }}>
            {value}
          </div>
        </div>
      </div>
    </div>
  )
}
