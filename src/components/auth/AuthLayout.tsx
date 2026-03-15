import type { ReactNode } from 'react'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { useTranslation } from '../../i18n'
import { navigate } from '../../lib/navigate'

export function AuthLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <div className="flex-1 flex flex-col">
        {/* Top bar: logo + language */}
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/') }}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-text">{t.nav.brand}</span>
          </a>
          <LanguageSwitcher className="text-text-muted hover:text-text px-2 py-1.5 rounded-lg hover:bg-surface" />
        </div>

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>

      {/* Right: Social proof sidebar (hidden on mobile) */}
      <div className="hidden lg:flex w-[480px] bg-gradient-to-br from-primary to-green-700 text-white flex-col justify-center px-12 py-16">
        <h2 className="text-3xl font-bold mb-4">{t.auth.socialProof.headline}</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10">{t.auth.socialProof.subheadline}</p>

        <div className="grid grid-cols-3 gap-4">
          {t.auth.socialProof.stats.map((stat, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
