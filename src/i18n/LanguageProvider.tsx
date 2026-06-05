import { useState, useEffect, useCallback, type ReactNode } from 'react'
import type { Locale, Translations } from './types'
import { en } from './locales/en'
import { vi } from './locales/vi'
import { LanguageContext } from './context'

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

export function LanguageProvider({ children }: { children: ReactNode }) {
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
