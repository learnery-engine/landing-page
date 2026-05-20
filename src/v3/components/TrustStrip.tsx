import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'

/**
 * Compact trust band — sits between the dark Proof section and the
 * lighter Programs section. Big tabular numbers + accreditation chips.
 */
export function TrustStrip() {
  const { v3 } = useV3Translation()
  const { persona } = usePersona()
  const accent = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="relative py-16 lg:py-20 border-y"
      style={{
        background: '#fafafa',
        borderColor: 'rgba(15,23,42,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: accent.accent }}
          >
            {v3.trust.eyebrow}
          </span>
        </motion.div>

        {/* Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {v3.trust.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div
                className="text-4xl lg:text-5xl font-extrabold tabular-nums mb-1"
                style={{
                  background: `linear-gradient(135deg, ${accent.accent}, ${accent.text})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {item.value}
              </div>
              <div className="text-sm text-text-muted font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Accreditation chips */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {v3.trust.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border"
              style={{ borderColor: 'rgba(15,23,42,0.08)', color: '#0f172a' }}
            >
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: accent.accent }} aria-hidden />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
