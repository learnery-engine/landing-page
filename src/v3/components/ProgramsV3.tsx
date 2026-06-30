import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, Briefcase, Check } from 'lucide-react'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'

/**
 * Two pre-packaged programs (K-12 + University). Persona-aware emphasis:
 * - GV/B2B → K-12 highlighted
 * - Pro → University highlighted
 * - others → neutral, side-by-side
 */
export function ProgramsV3() {
  const { v3 } = useV3Translation()
  const { persona } = usePersona()
  const accent = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()

  // Emphasis logic — push one card forward based on who's looking
  const highlight: 'k12' | 'university' | null =
    persona === 'gv' || persona === 'b2b'
      ? 'k12'
      : persona === 'pro'
      ? 'university'
      : null

  return (
    <section
      id="programs"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: accent.text }}
          >
            {v3.programs.eyebrow}
          </motion.span>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold tracking-tight text-text mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
          >
            {v3.programs.heading}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-muted leading-relaxed"
          >
            {v3.programs.subhead}
          </motion.p>
        </div>

        {/* Two program cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          <ProgramCard
            Icon={BookOpen}
            badge={v3.programs.k12.meta}
            title={v3.programs.k12.title}
            description={v3.programs.k12.description}
            bullets={v3.programs.k12.bullets}
            cta={v3.programs.k12.cta}
            href="#programs"
            gradient="linear-gradient(135deg, #16a34a, #059669)"
            tint="#dcfce7"
            highlighted={highlight === 'k12'}
          />
          <ProgramCard
            Icon={Briefcase}
            badge={v3.programs.university.meta}
            title={v3.programs.university.title}
            description={v3.programs.university.description}
            bullets={v3.programs.university.bullets}
            cta={v3.programs.university.cta}
            href="#programs"
            gradient="linear-gradient(135deg, #7c3aed, #6d28d9)"
            tint="#ede9fe"
            highlighted={highlight === 'university'}
          />
        </div>
      </div>
    </section>
  )
}

function ProgramCard({
  Icon,
  badge,
  title,
  description,
  bullets,
  cta,
  href,
  gradient,
  tint,
  highlighted,
}: {
  Icon: React.ComponentType<{ className?: string }>
  badge: string
  title: string
  description: string
  bullets: string[]
  cta: string
  href: string
  gradient: string
  tint: string
  highlighted: boolean
}) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col p-7 lg:p-9 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1"
      style={{
        border: highlighted ? '2px solid transparent' : '1px solid rgba(15,23,42,0.08)',
        backgroundImage: highlighted
          ? `linear-gradient(white, white), ${gradient}`
          : undefined,
        backgroundOrigin: highlighted ? 'border-box' : undefined,
        backgroundClip: highlighted ? 'padding-box, border-box' : undefined,
        boxShadow: highlighted
          ? '0 30px 60px -30px rgba(15,23,42,0.25)'
          : '0 4px 16px -4px rgba(15,23,42,0.06)',
      }}
    >
      {highlighted && (
        <span
          className="absolute -top-3 left-7 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
          style={{ background: gradient }}
        >
          ★ Phù hợp với bạn
        </span>
      )}

      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: tint }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
          style={{ background: tint, color: '#0f172a' }}
        >
          {badge}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-text mb-2.5 leading-tight">{title}</h3>
      <p className="text-text-muted leading-relaxed mb-5">{description}</p>

      <ul className="space-y-2.5 mb-7">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-text">
            <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#16a34a' }} aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        className="group/cta mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
        style={{ background: gradient }}
      >
        {cta}
        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
      </a>
    </motion.article>
  )
}
