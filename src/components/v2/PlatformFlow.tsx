import { Zap, School, Layers, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '../../i18n'
import { navigate } from '../../lib/navigate'

const iconMap: Record<string, typeof Zap> = {
  zap: Zap,
  school: School,
  layers: Layers,
}

const nodeStyles = [
  { iconBg: 'bg-violet-100 text-violet-600', line: 'from-violet-400', dot: 'bg-violet-400', glow: 'shadow-violet-200' },
  { iconBg: 'bg-primary/10 text-primary', line: 'via-primary', dot: 'bg-primary', glow: 'shadow-primary/20' },
  { iconBg: 'bg-blue-100 text-blue-600', line: 'to-blue-400', dot: 'bg-blue-400', glow: 'shadow-blue-200' },
]

const timelineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const nodeVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
} satisfies import('framer-motion').Variants

export function PlatformFlow() {
  const { t } = useTranslation()

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 bg-surface overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="absolute top-20 left-0 w-[400px] h-[400px] opacity-[0.03]" viewBox="0 0 400 400"><circle cx="50" cy="200" r="200" fill="url(#fg1)" /><defs><radialGradient id="fg1"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="transparent" /></radialGradient></defs></svg>
        <svg className="absolute bottom-20 right-0 w-[400px] h-[400px] opacity-[0.03]" viewBox="0 0 400 400"><circle cx="350" cy="200" r="200" fill="url(#fg2)" /><defs><radialGradient id="fg2"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="transparent" /></radialGradient></defs></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t.v2.platformFlow.heading.before}
            <span className="gradient-text">{t.v2.platformFlow.heading.highlight}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.v2.platformFlow.subheading}
          </p>
        </div>

        {/* ── Timeline Layout (desktop) / Stacked Cards (mobile) ── */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical timeline line (desktop only) */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-300 via-primary/40 to-blue-300 rounded-full" />

          <div className="space-y-6 lg:space-y-10">
            {t.v2.platformFlow.useCases.map((uc, i) => {
              const Icon = iconMap[uc.icon] || Zap
              const style = nodeStyles[i] || nodeStyles[0]
              return (
                <motion.div
                  key={i}
                  variants={nodeVariants}
                  className="relative flex items-start gap-0 lg:gap-8"
                >
                  {/* Timeline node (desktop) */}
                  <div className="hidden lg:flex flex-col items-center shrink-0 w-16">
                    <div className={`w-16 h-16 rounded-2xl ${style.iconBg} flex items-center justify-center shadow-lg ${style.glow} relative z-10`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/40 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                    {/* Mobile icon */}
                    <div className={`lg:hidden w-14 h-14 rounded-2xl ${style.iconBg} flex items-center justify-center mb-5`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold text-text mb-1">{uc.title}</h3>
                    <p className="text-sm font-medium text-text-muted mb-4">{uc.audience}</p>
                    <p className="text-sm text-text-muted leading-relaxed mb-5">{uc.description}</p>

                    {/* Steps as horizontal flow */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
                      {uc.steps.map((step, j) => (
                        <div key={j} className="flex items-center flex-1">
                          <div className="flex items-center gap-2.5 flex-1 min-w-0">
                            <div className={`w-7 h-7 rounded-full ${style.dot} text-white text-xs font-bold flex items-center justify-center shrink-0`}>
                              {j + 1}
                            </div>
                            <span className="text-sm text-text leading-snug">{step}</span>
                          </div>
                          {j < uc.steps.length - 1 && (
                            <ArrowRight className="hidden sm:block w-4 h-4 text-gray-300 mx-3 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Mid-page CTA */}
        <div className="text-center mt-14">
          <a
            href="/signup"
            onClick={(e) => { e.preventDefault(); navigate('/signup') }}
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 text-lg"
          >
            {t.v2.platformFlow.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
