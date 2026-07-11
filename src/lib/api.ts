import { AIAPP_URL, BUBBLE_API_URL, TRACKING_URL } from './constants'

interface AuthResponse {
  status: string
  response: {
    login_url: string
    token?: string
    user_id?: string
    expires?: number
  }
}

interface GoogleAuthResponse {
  status: string
  response: {
    login_url: string
    token?: string
    user_id?: string
  }
}

interface ResetResponse {
  status: string
  response: {
    status: string
  }
}

async function post<T>(endpoint: string, body: Record<string, string>): Promise<T> {
  const res = await fetch(`${BUBBLE_API_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || err.body?.message || `Request failed (${res.status})`)
  }
  return res.json()
}

// "Stay" destination: the Bubble magic login_url — logs the user into
// ai.learneris.com as before.
export function bubbleLoginUrl(response: { login_url: string }, next?: string): string {
  const loginUrl = new URL(response.login_url)
  if (next) loginUrl.searchParams.set('next', next)
  return loginUrl.toString()
}

// "Move" destination: the Next.js app's set-token bridge
// (GET {AIAPP_URL}/api/auth/set-token?uid=&token=&redirect=) — it verifies the
// uid+token pair against Bubble, binds them into httpOnly cookies on the
// aiapp domain, then redirects to `redirect` (internal path only).
//
// Returns null when the bridge isn't available: AIAPP_URL unset, or the
// workflow didn't return token/user_id (e.g. google-auth without move=yes).
export function aiappBridgeUrl(
  response: { token?: string; user_id?: string },
  next?: string,
): string | null {
  if (!AIAPP_URL || !response.token || !response.user_id) return null
  const url = new URL('/api/auth/set-token', AIAPP_URL)
  url.searchParams.set('uid', response.user_id)
  url.searchParams.set('token', response.token)
  // set-token only accepts internal paths; anything else falls back to /
  if (next && next.startsWith('/') && !next.startsWith('//')) {
    url.searchParams.set('redirect', next)
  }
  return url.toString()
}

export function trackLogin(email: string, method: 'email' | 'google') {
  if (!TRACKING_URL) return
  const body = JSON.stringify({ email, method, userAgent: navigator.userAgent })
  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      `${TRACKING_URL}/admin/api/track/login`,
      new Blob([body], { type: 'application/json' }),
    )
  } else {
    fetch(`${TRACKING_URL}/admin/api/track/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {})
  }
}

export const auth = {
  signup(email: string, password: string, name: string) {
    return post<AuthResponse>('signup', { email, password, name })
  },

  login(email: string, password: string) {
    return post<AuthResponse>('login', { email, password })
  },

  // move=true asks the workflow to also log the user in (temp-password trick)
  // so the response carries token/user_id for the aiapp bridge. The user must
  // have opted in via MigrationChoiceModal — it may reset an existing password.
  googleAuth(email: string, google_token: string, name: string, move = false) {
    return post<GoogleAuthResponse>('google-auth', {
      email,
      google_token,
      name,
      move: move ? 'yes' : 'no',
    })
  },

  resetPassword(email: string) {
    return post<ResetResponse>('reset-password', { email })
  },
}
