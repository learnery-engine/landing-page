import { ArrowRight, Sparkles, Clock, Zap } from 'lucide-react'
import { useTranslation } from '../i18n'
import { navigate } from '../lib/navigate'

export function Hero() {
  const { t } = useTranslation()

  const mockupApps = [
    { icon: '\ud83d\udcdd', key: 'quickQuiz' as const, color: 'bg-purple-100 text-purple-700' },
    { icon: '\ud83d\udccb', key: 'lessonPlan' as const, color: 'bg-blue-100 text-blue-700' },
    { icon: '\ud83c\udf93', key: 'lms' as const, color: 'bg-green-100 text-green-700' },
    { icon: '\ud83c\udfae', key: 'interactiveContent' as const, color: 'bg-orange-100 text-orange-700' },
  ]

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-light/60 text-primary-dark text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              {t.hero.heading.before}
              <span className="gradient-text">{t.hero.heading.highlight}</span>
              {t.hero.heading.after}
            </h1>

            <p className="text-lg sm:text-xl text-text-muted leading-relaxed mb-8 max-w-lg">
              {t.hero.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="/signup" onClick={(e) => { e.preventDefault(); navigate('/signup') }}
                className="group bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2">
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features"
                className="border border-gray-200 hover:border-gray-300 text-text font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-surface flex items-center justify-center gap-2">
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span><strong className="text-text">{t.hero.stats.prepTime.value}</strong> {t.hero.stats.prepTime.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span><strong className="text-text">{t.hero.stats.tools.value}</strong> {t.hero.stats.tools.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span><strong className="text-text">{t.hero.stats.free.value}</strong> {t.hero.stats.free.label}</span>
              </div>
            </div>
          </div>

          {/* Right: Product mockup */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="animate-float">
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-3 py-1 text-xs text-gray-400 border border-gray-200">
                      ai.learneris.com
                    </div>
                  </div>
                </div>

                {/* App preview */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <div className="space-y-4">
                    {/* Mini app cards preview */}
                    <div className="grid grid-cols-2 gap-3">
                      {mockupApps.map((app) => (
                        <div key={app.key} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <div className={`w-10 h-10 rounded-lg ${app.color} flex items-center justify-center text-lg mb-2`}>
                            {app.icon}
                          </div>
                          <div className="text-sm font-semibold text-text">{t.hero.mockup[app.key]}</div>
                          <div className="text-xs text-text-muted mt-0.5">{t.hero.mockup.aiPowered}</div>
                        </div>
                      ))}
                    </div>
                    {/* Generating indicator */}
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-text">{t.hero.mockup.generating}</div>
                        <div className="w-2/3 h-1.5 bg-primary/20 rounded-full mt-1.5 overflow-hidden">
                          <div className="w-3/4 h-full bg-primary rounded-full animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-4 py-2.5 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{'\u26a1'}</span>
                <div>
                  <div className="text-xs font-medium text-text">{t.hero.floatingBadges.speed.label}</div>
                  <div className="text-sm font-bold text-primary">{t.hero.floatingBadges.speed.value}</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-4 py-2.5 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{'\ud83c\udfaf'}</span>
                <div>
                  <div className="text-xs font-medium text-text">{t.hero.floatingBadges.curriculum.label}</div>
                  <div className="text-sm font-bold text-accent">{t.hero.floatingBadges.curriculum.value}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
