import { createContext, useContext, useState, useCallback } from 'react'
import type { Locale, Translations } from './types'
import { en } from './locales/en'
import { vi } from './locales/vi'

export const STORAGE_KEY = 'learneris-lang'
const translations: Record<Locale, Translations> = { en, vi }

export function getInitialLocale(): Locale {
  // 1. localStorage  2. browser language  3. default EN for international visitors
  const stored = localStorage.getItem(STORAGE_KEY)
  const loc: Locale =
    stored === 'en' || stored === 'vi'
      ? stored
      : navigator.language.toLowerCase().startsWith('vi')
        ? 'vi'
        : 'en'
  // Reflect into <html lang> at first render (before paint), not a post-paint effect.
  if (typeof document !== 'undefined') document.documentElement.lang = loc
  return loc
}

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}

export type { Locale, Translations }
