import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens, PERSONA_TOKENS } from '../tokens'
import { navigate } from '../../lib/navigate'

/**
 * Final CTA. When a persona is selected, mirror their CTA copy so the
 * action verb matches what they saw in the hero — closes the loop.
 */
export function CtaV3() {
  const { v3 } = useV3Translation()
  const { persona } = usePersona()
  const accent = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()

  const headline = persona ? v3.personas[persona].pitch : v3.cta.headlineDefault
  const subhead = persona ? '' : v3.cta.subheadDefault
  const primaryLabel = persona ? v3.personas[persona].cta : v3.cta.primary
  const secondaryLabel = persona ? v3.personas[persona].ctaSecondary : v3.cta.secondary

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: persona
          ? `linear-gradient(135deg, ${PERSONA_TOKENS[persona].accent}, ${PERSONA_TOKENS[persona].text})`
          : 'linear-gradient(135deg, #7c3aed, #db2777)',
      }}
    >
      {/* Decorative noise/grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="inline-block text-xs font-bold uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm"
        >
          {v3.cta.eyebrow}
        </motion.span>
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-extrabold tracking-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15 }}
        >
          {headline}
        </motion.h2>
        {subhead && (
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed mb-10 opacity-90 max-w-2xl mx-auto"
          >
            {subhead}
          </motion.p>
        )}

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-all hover:shadow-2xl hover:scale-[1.02]"
            style={{ background: '#fff', color: accent.text }}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-colors border-2 border-white/30 text-white hover:bg-white/10"
          >
            {secondaryLabel}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
