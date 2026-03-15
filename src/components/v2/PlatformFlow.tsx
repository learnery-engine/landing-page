import { Zap, School, Layers, ArrowRight } from 'lucide-react'
import { useTranslation } from '../../i18n'

import { navigate } from '../../lib/navigate'

const iconMap: Record<string, typeof Zap> = {
  zap: Zap,
  school: School,
  layers: Layers,
}

const cardStyles = [
  { iconBg: 'bg-violet-100 text-violet-600', accentBorder: 'border-t-violet-400' },
  { iconBg: 'bg-primary/10 text-primary', accentBorder: 'border-t-primary' },
  { iconBg: 'bg-blue-100 text-blue-600', accentBorder: 'border-t-blue-400' },
]

export function PlatformFlow() {
  const { t } = useTranslation()

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface">
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

        {/* 3 Use-case Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.v2.platformFlow.useCases.map((uc, i) => {
            const Icon = iconMap[uc.icon] || Zap
            const style = cardStyles[i] || cardStyles[0]
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-gray-100 border-t-4 ${style.accentBorder} shadow-lg shadow-gray-100/60 p-6 sm:p-8 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300`}
              >
                {/* Icon + Title */}
                <div className={`w-14 h-14 rounded-2xl ${style.iconBg} flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-text mb-1">{uc.title}</h3>
                <p className="text-sm font-medium text-text-muted mb-4">{uc.audience}</p>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-5">{uc.description}</p>

                {/* Steps */}
                <div className="space-y-3">
                  {uc.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-100 text-text-muted text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {j + 1}
                      </div>
                      <span className="text-sm text-text leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center mt-12">
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
