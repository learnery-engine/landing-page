import { Globe } from 'lucide-react'
import { useTranslation } from '../i18n'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useTranslation()
  const toggle = () => setLocale(locale === 'vi' ? 'en' : 'vi')

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${className}`}
      aria-label={locale === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
    >
      <Globe className="w-4 h-4" />
      <span>{locale === 'vi' ? 'EN' : 'VI'}</span>
    </button>
  )
}
