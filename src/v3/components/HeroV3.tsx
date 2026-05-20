import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useV3Translation } from '../i18n'
import { usePersona, type Persona } from '../PersonaContext'
import { PERSONA_TOKENS, personaTokens } from '../tokens'
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
              background: `linear-gradient(135deg, ${tokens.accent}, ${persona ? PERSONA_TOKENS[persona].text : '#5B21B6'})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
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
