import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Persona } from './tokens'

/**
 * Persona identity drives every section of /v3. The Persona type itself
 * is the canonical one from `./tokens.ts` (which is vendored from
 * `LRN/shared/persona-tokens/`) so the marketing landing and the product
 * hub agree on what "persona" means. Re-exported here so existing
 * imports `import { Persona } from './PersonaContext'` continue to work.
 *
 * `null` = no choice yet — Hero shows the picker; downstream sections
 * show "everyone" framing.
 */
export type { Persona }

interface PersonaContextValue {
  persona: Persona | null
  setPersona: (p: Persona | null) => void
}

const PersonaCtx = createContext<PersonaContextValue | null>(null)

export const STORAGE_KEY = 'lrn.v3.persona'
const VALID_PERSONAS: readonly Persona[] = ['hs', 'gv', 'ph', 'pro', 'b2b']

export function readInitial(): Persona | null {
  if (typeof window === 'undefined') return null
  // URL hash wins (deep-link friendly: /v3#persona=gv)
  const hash = window.location.hash.match(/persona=([a-z0-9]+)/i)?.[1]?.toLowerCase()
  if (hash && (VALID_PERSONAS as readonly string[]).includes(hash)) return hash as Persona
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && (VALID_PERSONAS as readonly string[]).includes(stored)) return stored as Persona
  } catch {
    // localStorage blocked (private mode, etc.) — fine to ignore
  }
  return null
}

export function PersonaProvider({
  children,
  initialPersona,
}: {
  children: ReactNode
  /**
   * Overrides the on-mount persona. Used by `/v3/<slug>` deep-link routes
   * to pre-select. Takes precedence over hash + localStorage so a paid-ad
   * landing always honors the URL the user clicked, even if they had a
   * different persona stored from a prior visit.
   */
  initialPersona?: Persona | null
}) {
  const [persona, setPersonaState] = useState<Persona | null>(() =>
    initialPersona !== undefined ? initialPersona : readInitial()
  )

  const setPersona = useCallback((next: Persona | null) => {
    setPersonaState(next)
    if (typeof window === 'undefined') return
    try {
      if (next) window.localStorage.setItem(STORAGE_KEY, next)
      else window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }, [])

  // Keep URL hash in sync so shares carry the persona
  useEffect(() => {
    if (typeof window === 'undefined') return
    const target = persona ? `#persona=${persona}` : ''
    if (window.location.hash !== target) {
      // replaceState (not pushState) so we don't pollute history with every change
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${target}`)
    }
  }, [persona])

  const value = useMemo(() => ({ persona, setPersona }), [persona, setPersona])
  return <PersonaCtx.Provider value={value}>{children}</PersonaCtx.Provider>
}

export function usePersona(): PersonaContextValue {
  const ctx = useContext(PersonaCtx)
  if (!ctx) throw new Error('usePersona must be used inside <PersonaProvider>')
  return ctx
}
