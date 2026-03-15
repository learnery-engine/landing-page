import { useState, type FormEvent } from 'react'
import { Award, GraduationCap, CheckCircle2, ArrowRight, Bell, ShieldCheck, Send, Check } from 'lucide-react'
import { useTranslation } from '../../i18n'

import { navigate } from '../../lib/navigate'
const WAITLIST_KEY = 'learneris_uni_waitlist'

export function ProgramsV2() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(() => {
    try { return localStorage.getItem(WAITLIST_KEY) === 'true' } catch { return false }
  })

  function handleWaitlist(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    try { localStorage.setItem(WAITLIST_KEY, 'true') } catch { /* noop */ }
    window.open(`mailto:support@learneris.com?subject=${encodeURIComponent('AI University Courses — Waitlist Request')}&body=${encodeURIComponent(`Hi Learneris,\n\nI'd like to join the waitlist for AI University Courses.\n\nEmail: ${email}\n\nThank you!`)}`, '_self')
    setSubmitted(true)
  }

  return (
    <section id="programs" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t.v2.programs.heading.before}
            <span className="gradient-text">{t.v2.programs.heading.highlight}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.v2.programs.subheading}
          </p>
        </div>

        {/* Program Cards — side by side */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* K-12 Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 overflow-hidden flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              {/* Badge row */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t.v2.programs.k12.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
                {t.v2.programs.k12.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {t.v2.programs.k12.subtitle}
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                {t.v2.programs.k12.description}
              </p>

              {/* Info pills */}
              <div className="space-y-2.5 mb-6">
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-text uppercase tracking-wide">{t.v2.programs.k12.certifiedBy}</span>
                  </div>
                  <p className="text-sm font-medium text-text">{t.v2.programs.k12.certifier}</p>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-gray-50 rounded-xl p-3.5">
                    <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1">{t.v2.programs.k12.grades}</div>
                    <p className="text-xs font-medium text-text">{t.v2.programs.k12.gradesValue}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3.5">
                    <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1">{t.v2.programs.k12.domains}</div>
                    <p className="text-xs font-medium text-text">{t.v2.programs.k12.domainsValue}</p>
                  </div>
                </div>
              </div>

              {/* CTA — pushed to bottom */}
              <div className="mt-auto">
                <a href="/signup" onClick={(e) => { e.preventDefault(); navigate('/signup') }}
                  className="group/btn inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25">
                  {t.v2.programs.k12.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* University Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 overflow-hidden flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-violet-400 to-blue-500" />
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              {/* Badge + Icon */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-violet-600" />
                </div>
                <span className="inline-flex items-center gap-1.5 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Bell className="w-3.5 h-3.5" />
                  {t.v2.programs.university.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
                {t.v2.programs.university.title}
              </h3>
              <p className="text-sm text-violet-600 font-medium mb-3">
                {t.v2.programs.university.subtitle}
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                {t.v2.programs.university.description}
              </p>

              {/* Feature list */}
              <div className="space-y-2.5 mb-6">
                {t.v2.programs.university.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Waitlist CTA — pushed to bottom */}
              <div className="mt-auto">
                {submitted ? (
                  <div className="flex items-center gap-3 bg-violet-50 border border-violet-200 rounded-xl px-5 py-3">
                    <div className="w-8 h-8 rounded-full bg-violet-200 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-violet-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-violet-800">{t.v2.programs.university.subscribed}</p>
                      <p className="text-xs text-violet-600">{t.v2.programs.university.subscribedMsg}</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlist} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder={t.v2.programs.university.emailPlaceholder}
                      className="flex-1 min-w-0 text-sm px-4 py-3 border-2 border-violet-200 rounded-xl focus:border-violet-400 focus:outline-none transition-colors placeholder:text-violet-300"
                    />
                    <button
                      type="submit"
                      aria-label="Join waitlist"
                      className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-200 shrink-0">
                      <Send className="w-4 h-4" />
                      <span className="hidden sm:inline text-sm">{t.v2.programs.university.cta}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
