import { BUBBLE_API_URL } from './constants'

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

export const auth = {
  signup(email: string, password: string, name: string) {
    return post<AuthResponse>('signup', { email, password, name })
  },

  login(email: string, password: string) {
    return post<AuthResponse>('login', { email, password })
  },

  googleAuth(email: string, google_token: string, name: string) {
    return post<GoogleAuthResponse>('google-auth', { email, google_token, name })
  },

  resetPassword(email: string) {
    return post<ResetResponse>('reset-password', { email })
  },
}
