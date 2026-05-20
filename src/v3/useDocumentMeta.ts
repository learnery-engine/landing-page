import { useEffect } from 'react'
import { usePersona } from './PersonaContext'
import { useV3Translation } from './i18n'

/**
 * Sync the document <title> + meta description with the active persona.
 *
 * Why a runtime hook on a static-prerendered site?
 *   - Prerender bakes ONE meta-set per HTML file (good for SEO / OG previews
 *     when the link is shared cold). The 5 persona deep-link routes each get
 *     their own prerendered file with the right baked meta — see
 *     `scripts/prerender-routes.js`.
 *   - But the user can change persona DURING the session (Hero picker, nav
 *     chip dismissal). When that happens we want the document title to
 *     follow so tab-switching, browser-history previews, and screen-readers
 *     stay accurate. This hook handles that runtime case.
 *
 * Cleanup: restores the original title on unmount — keeps non-/v3 routes
 * (the AppV2 marketing page) untouched.
 */
export function useDocumentMeta() {
  const { persona } = usePersona()
  const { v3, locale } = useV3Translation()

  useEffect(() => {
    if (typeof document === 'undefined') return
    const previousTitle = document.title
    const descMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDesc = descMeta?.content ?? ''

    const baseBrand = 'Learneris'
    const tagline = locale === 'vi' ? 'Học · Xây · Lớn cùng AI' : 'Learn · Build · Grow with AI'

    if (persona) {
      const personaLabel = v3.personas[persona].label
      const pitch = v3.personas[persona].pitch
      document.title = `${baseBrand} cho ${personaLabel} — ${tagline}`
      if (descMeta) descMeta.content = pitch
    } else {
      document.title = `${baseBrand} — ${tagline}`
      if (descMeta) descMeta.content = v3.hero.subhead
    }

    return () => {
      document.title = previousTitle
      if (descMeta) descMeta.content = previousDesc
    }
  }, [persona, v3, locale])
}
