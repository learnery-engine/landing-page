/**
 * V2 / V3 bucketing for the landing root path.
 *
 * Decision precedence (highest wins):
 *   1. Query param `?lrn=v2` or `?lrn=v3` — QA + campaign-link override.
 *      Also persists the choice for return visits.
 *   2. Path `/v3*` → always v3 (the deep-link routes are explicit opt-in).
 *      Path `/v2` (if added later) → always v2.
 *   3. Cookie `lrn_v3_bucket` from a prior visit — sticky assignment so a
 *      user never sees the homepage flip between variants mid-funnel.
 *   4. Random assignment based on `VITE_V3_ROLLOUT_PCT` (default 0).
 *
 * Why client-side: this is a Vite SPA on Azure Static Web Apps. The HTML
 * is the same for every visitor; the variant decision happens in React
 * at App.tsx mount. Setting the rollout % at build time (env var baked
 * into the bundle) is the simplest knob — change it, rebuild, ship.
 *
 * Anti-flicker: `resolveBucket` is synchronous and runs in `App()`'s
 * very first render, so the user never sees V2 briefly before V3 takes
 * over (or vice versa).
 */

export type Bucket = 'v2' | 'v3'

const COOKIE_NAME = 'lrn_v3_bucket'
const COOKIE_TTL_DAYS = 30
const QUERY_PARAM = 'lrn'

/**
 * Read the env-baked rollout percentage. Clamped to [0, 100].
 * 0 means "no random users on V3" — the default; share /v3 links cold or
 * set `?lrn=v3` campaign URLs until ready to ramp.
 */
function rolloutPct(): number {
  const raw = import.meta.env.VITE_V3_ROLLOUT_PCT
  const n = typeof raw === 'string' ? parseInt(raw, 10) : 0
  if (Number.isNaN(n)) return 0
  return Math.max(0, Math.min(100, n))
}

export function resolveBucket(pathname: string, search: string): Bucket {
  // 1. Query param wins (QA + campaign links)
  const forced = readForceParam(search)
  if (forced) {
    setBucketCookie(forced)
    return forced
  }

  // 2. Path forces — explicit /v3 routes always render V3
  if (pathname === '/v3' || pathname.startsWith('/v3/')) return 'v3'

  // 3. Sticky cookie from a prior visit
  const sticky = readBucketCookie()
  if (sticky) return sticky

  // 4. Random assignment, percentage-gated
  const pct = rolloutPct()
  const bucket: Bucket = Math.random() * 100 < pct ? 'v3' : 'v2'
  setBucketCookie(bucket)
  return bucket
}

function readForceParam(search: string): Bucket | null {
  const params = new URLSearchParams(search)
  const v = params.get(QUERY_PARAM)?.toLowerCase()
  if (v === 'v2' || v === 'v3') return v
  return null
}

function readBucketCookie(): Bucket | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=(v2|v3)`))
  return m ? (m[1] as Bucket) : null
}

function setBucketCookie(bucket: Bucket): void {
  if (typeof document === 'undefined') return
  const expires = new Date(Date.now() + COOKIE_TTL_DAYS * 24 * 60 * 60 * 1000).toUTCString()
  const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:'
  const secureFlag = isSecure ? '; Secure' : ''
  document.cookie = `${COOKIE_NAME}=${bucket}; Path=/; Expires=${expires}; SameSite=Lax${secureFlag}`
}

/**
 * Surface the bucket to telemetry. Best-effort: if Sentry isn't loaded
 * yet (it's lazy), we no-op rather than block first paint. Call once
 * the bucket is decided.
 */
export function tagBucketForTelemetry(bucket: Bucket): void {
  if (typeof window === 'undefined') return
  // Sentry — only tag if it's already on the page (it loads async)
  const Sentry = (window as unknown as { Sentry?: { setTag?: (k: string, v: string) => void } }).Sentry
  Sentry?.setTag?.('landing_bucket', bucket)
  // Custom analytics — landing already pings VITE_TRACKING_URL.
  // Future: send an explicit bucket-assignment ping the first time it's set.
}
