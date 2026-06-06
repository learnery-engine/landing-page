import { useContext } from 'react'
import { LanguageContext } from './context'

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}

export type { Locale, Translations } from './types'

// LanguageProvider is exported from ./LanguageProvider (a component-only module)
// rather than re-exported here: a barrel that exposes both the provider
// component and this hook would re-introduce the Fast Refresh lint error.
