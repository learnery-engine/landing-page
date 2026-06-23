import { Compass, Wand2, LayoutDashboard, Award, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useV3Translation } from '../i18n'
import { usePersona, type Persona } from '../PersonaContext'
import { personaTokens, PERSONA_TOKENS } from '../tokens'

type SurfaceKey = 'compass' | 'miniApps' | 'class' | 'profile' | 'lumi'

interface SurfaceMeta {
  key: SurfaceKey
  Icon: React.ComponentType<{ className?: string }>
  iconColor: string
  iconBg: string
}

const SURFACES: readonly SurfaceMeta[] = [
  { key: 'compass',  Icon: Compass,         iconColor: '#7C3AED', iconBg: '#EDE9FE' },
  { key: 'miniApps', Icon: Wand2,           iconColor: '#8B5CF6', iconBg: '#EDE9FE' },
  { key: 'class',    Icon: LayoutDashboard, iconColor: '#22C55E', iconBg: '#DCFCE7' },
  { key: 'profile',  Icon: Award,           iconColor: '#F59E0B', iconBg: '#FEF3C7' },
  { key: 'lumi',     Icon: Sparkles,        iconColor: '#EC4899', iconBg: '#FCE7F3' },
] as const

/**
 * Persona × surface intensity map. 1 = primary engagement, 0.5 = secondary,
 * 0 = doesn't touch this surface. Drives the visual emphasis when a persona
 * is active (full color vs muted vs nearly invisible).
 *
 * Derived from canvas.html row analysis + ecosystem memory.
 */
const ENGAGEMENT: Record<Persona, Record<SurfaceKey, 0 | 0.5 | 1>> = {
  hs:  { compass: 1, miniApps: 1, class: 1, profile: 1, lumi: 1 },
  gv:  { compass: 0.5, miniApps: 1, class: 1, profile: 0.5, lumi: 1 },
  ph:  { compass: 0.5, miniApps: 0, class: 0.5, profile: 1, lumi: 1 },
  pro: { compass: 1, miniApps: 0.5, class: 0, profile: 1, lumi: 1 },
  b2b: { compass: 0.5, miniApps: 0.5, class: 0.5, profile: 0.5, lumi: 0.5 },
}

export function SurfaceCanvas() {
  const { v3 } = useV3Translation()
  const { persona } = usePersona()
  const accent = personaTokens(persona)

  return (
    <section
      id="surfaces"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #ffffff 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={v3.surfaces.eyebrow}
          heading={v3.surfaces.heading}
          subhead={v3.surfaces.subhead}
          accent={accent.accent}
        />

        {/* Persona-specific narration */}
        {persona && (
          <PersonaNarration persona={persona} />
        )}

        {/* Grid of 5 surfaces — 3 + 2 layout for desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SURFACES.slice(0, 3).map((s, i) => (
            <SurfaceCard key={s.key} meta={s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 lg:max-w-4xl lg:mx-auto">
          {SURFACES.slice(3, 5).map((s, i) => (
            <SurfaceCard key={s.key} meta={s} index={i + 3} />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          <LegendDot color="#10B981" label={v3.surfaces.legendLive} />
          <LegendDot color="#F59E0B" label={v3.surfaces.legendBeta} />
          <LegendDot color="#94A3B8" label={v3.surfaces.legendVision} />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function SurfaceCard({ meta, index }: { meta: SurfaceMeta; index: number }) {
  const { v3 } = useV3Translation()
  const { persona } = usePersona()
  const prefersReducedMotion = useReducedMotion()
  const surface = v3.surfaces.items[meta.key]

  // Engagement intensity when a persona is active
  const intensity = persona ? ENGAGEMENT[persona][meta.key] : 1
  const tokens = persona ? PERSONA_TOKENS[persona] : null

  // When persona inactive on this surface, dim it slightly without hiding info
  const opacity = intensity === 0 ? 0.4 : intensity === 0.5 ? 0.75 : 1
  const isPrimary = intensity === 1
  const ring = isPrimary && tokens ? tokens.accent : 'rgba(15,23,42,0.08)'
  const shadow =
    isPrimary && tokens
      ? `0 18px 40px -16px ${tokens.ring}`
      : '0 4px 12px -4px rgba(15,23,42,0.06)'

  const status = surface.status ?? 'live'
  const statusColor =
    status === 'live' ? '#10B981' : status === 'beta' ? '#F59E0B' : '#94A3B8'
  const statusLabel =
    status === 'live' ? v3.surfaces.legendLive : status === 'beta' ? v3.surfaces.legendBeta : v3.surfaces.legendVision

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      animate={{ opacity }}
      className="group relative flex flex-col p-6 rounded-2xl bg-white transition-all duration-300"
      style={{
        border: `2px solid ${ring}`,
        boxShadow: shadow,
      }}
    >
      {/* Status badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
        style={{ background: `${statusColor}15`, color: statusColor }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor }} aria-hidden />
        {statusLabel}
      </div>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: meta.iconBg, color: meta.iconColor }}
      >
        <meta.Icon className="w-7 h-7" />
      </div>

      {/* Name + tagline */}
      <h3 className="text-xl font-bold text-text mb-1.5">{surface.name}</h3>
      <p className="text-sm font-medium mb-3" style={{ color: meta.iconColor }}>
        {surface.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed">{surface.description}</p>

      {/* Persona-active accent strip at bottom */}
      {isPrimary && tokens && (
        <motion.div
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl origin-left"
          style={{ background: `linear-gradient(90deg, ${tokens.accent}, ${tokens.text})` }}
          aria-hidden
        />
      )}
    </motion.article>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function PersonaNarration({ persona }: { persona: Persona }) {
  const { v3 } = useV3Translation()
  const tokens = PERSONA_TOKENS[persona]
  const copy = v3.personas[persona]
  const prefersReducedMotion = useReducedMotion()

  // Count how many surfaces this persona engages strongly with
  const primaryCount = Object.values(ENGAGEMENT[persona]).filter((v) => v === 1).length

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 mx-auto max-w-2xl flex items-start gap-3 px-5 py-4 rounded-xl"
      style={{
        background: tokens.tint,
        border: `1px solid ${tokens.ring}`,
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-sm"
        style={{ background: tokens.accent }}
        aria-hidden
      >
        {primaryCount}
      </div>
      <p className="text-sm text-text">
        <strong style={{ color: tokens.text }}>{copy.label}</strong>{' '}
        <span className="text-text-muted">
          chạm vào <strong className="text-text">{primaryCount}</strong> trong 5 bề mặt chính. Cuộn xuống để xem từng cái.
        </span>
      </p>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function SectionHeader({
  eyebrow,
  heading,
  subhead,
  accent,
}: {
  eyebrow: string
  heading: string
  subhead: string
  accent: string
}) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
      >
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: accent }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-extrabold tracking-tight text-text mb-4"
          style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
        >
          {heading}
        </h2>
        <p className="text-lg text-text-muted leading-relaxed">{subhead}</p>
      </motion.div>
    </div>
  )
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-text-muted">
      <span className="w-2 h-2 rounded-full" style={{ background: color }} aria-hidden />
      {label}
    </span>
  )
}
