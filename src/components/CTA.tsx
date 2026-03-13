import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from '../i18n'

const APP_URL = 'https://ai.learneris.com'

export function CTA() {
  const { t } = useTranslation()

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          {t.cta.badge}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          {t.cta.heading}
        </h2>

        <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
          {t.cta.body}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`${APP_URL}/profile?from=profile&tab=login`}
            className="group bg-white text-primary-dark font-bold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-black/20 flex items-center justify-center gap-2 text-lg">
            {t.cta.ctaPrimary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="mailto:support@learneris.com"
            className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
            {t.cta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
