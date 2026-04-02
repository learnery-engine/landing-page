import { ArrowLeft } from 'lucide-react'
import { useTranslation } from '../i18n'
import { LanguageSwitcher } from './LanguageSwitcher'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

interface LegalPageProps {
  title: string
  effectiveDate: string
  children: React.ReactNode
}

export function LegalPage({ title, effectiveDate, children }: LegalPageProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-surface-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center justify-between mb-6">
            <a href={`${BASE}/`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.legal.backToHome}
            </a>
            <LanguageSwitcher className="text-gray-400 hover:text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">{title}</h1>
          <p className="text-gray-400 text-sm">{effectiveDate}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-gray max-w-none
          prose-headings:text-text prose-headings:font-bold
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
          prose-p:text-text-muted prose-p:leading-relaxed
          prose-li:text-text-muted prose-li:leading-relaxed
          prose-strong:text-text prose-strong:font-semibold
          prose-hr:border-gray-100 prose-hr:my-8
        ">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-text-muted">
            &copy; 2023&ndash;{new Date().getFullYear()} {t.legal.copyright}
          </div>
          <a href="mailto:support@learneris.com" className="text-sm text-text-muted hover:text-text transition-colors">
            support@learneris.com
          </a>
        </div>
      </footer>
    </div>
  )
}
