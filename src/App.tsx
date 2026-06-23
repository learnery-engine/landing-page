import { lazy, Suspense, useMemo, useState, useEffect } from 'react'
import './index.css'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SignupPage } from './pages/SignupPage'
import { LoginPage } from './pages/LoginPage'
import { ForgotPasswordPage } from './pages/ForgotPasswordPage'
import { AppV2 } from './AppV2'
import { SLUG_TO_PERSONA, type Persona } from './v3/tokens'
import { resolveBucket, tagBucketForTelemetry } from './lib/bucket'

// V3 — persona-first, surface-aware landing. Lazy-loaded to keep
// the production V2 path bundle untouched in cost & cache.
const AppV3 = lazy(() => import('./v3/AppV3').then((m) => ({ default: m.AppV3 })))

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '') // e.g. '' or '/learneris-landing'

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Strip the base path so routes stay simple: '/terms', '/privacy', '/'.
  // Also strip a trailing slash so prerendered routes served as folders
  // (e.g. /privacy/index.html → URL /privacy/) match the same way as /privacy.
  const stripped = pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname
  const normalised = stripped.length > 1 ? stripped.replace(/\/$/, '') : stripped
  return normalised
}

export default function App() {
  const pathname = usePathname()

  if (pathname === '/terms') return <TermsPage />
  if (pathname === '/privacy') return <PrivacyPage />
  if (pathname === '/signup') return <SignupPage />
  if (pathname === '/login') return <LoginPage />
  if (pathname === '/forgot-password') return <ForgotPasswordPage />

  // V3 routes:
  //   /v3                  → neutral hero (persona picker visible)
  //   /v3/<slug>           → persona deep-link (picker pre-resolved)
  // Unknown slugs fall through to the neutral /v3 so paid-ad typos don't 404.
  const v3Match = matchV3Route(pathname)
  if (v3Match) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <AppV3 initialPersona={v3Match.persona} />
      </Suspense>
    )
  }

  // Root path "/" honors the V2/V3 bucket — see `lib/bucket.ts`.
  // Memoised so the random coin-flip on first visit doesn't re-fire on
  // every render (which would also clobber the cookie set).
  const bucket = useBucketDecision(pathname)
  if (bucket === 'v3') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <AppV3 />
      </Suspense>
    )
  }
  return <AppV2 />
}

/**
 * Compute the V2/V3 bucket once on mount + memoise. Also tags the bucket
 * onto Sentry so error reports + perf attribute to the right variant.
 */
function useBucketDecision(pathname: string) {
  const bucket = useMemo(
    () => resolveBucket(pathname, typeof window !== 'undefined' ? window.location.search : ''),
    [pathname]
  )
  useEffect(() => {
    tagBucketForTelemetry(bucket)
  }, [bucket])
  return bucket
}

/**
 * Returns the persona for a /v3-prefixed pathname, or null for the
 * bare /v3 route. Returns undefined if the path isn't a V3 route at
 * all — caller falls through to AppV2.
 */
function matchV3Route(pathname: string): { persona: Persona | null } | undefined {
  if (pathname === '/v3') return { persona: null }
  const m = pathname.match(/^\/v3\/([a-z]+)$/i)
  if (!m) return undefined
  const slug = m[1].toLowerCase()
  return { persona: SLUG_TO_PERSONA[slug] ?? null }
}
