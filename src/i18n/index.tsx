import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { Locale, Translations } from './types'
import { en } from './locales/en'
import { vi } from './locales/vi'

const STORAGE_KEY = 'learneris-lang'
const translations: Record<Locale, Translations> = { en, vi }

function getInitialLocale(): Locale {
  // 1. Check localStorage
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'vi') return stored
  // 2. Check browser language
  if (navigator.language.toLowerCase().startsWith('vi')) return 'vi'
  // 3. Default to English for international visitors
  return 'en'
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

  useEffect(() => {
    document.documentElement.lang = locale
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
