import { createContext } from 'react'
import type { Locale, Translations } from './types'

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

// Shared by the LanguageProvider (writes it) and useTranslation (reads it).
// Lives in its own non-component module so both the provider component and the
// hook can import it without a file ever exporting a component alongside a
// non-component (which would break React Fast Refresh).
export const LanguageContext = createContext<LanguageContextValue | null>(null)
