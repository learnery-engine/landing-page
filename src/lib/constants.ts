// Match redirect URL to the API environment (version-test vs live)
export const APP_URL = (import.meta.env.VITE_BUBBLE_API_URL as string)?.includes('version-test')
  ? 'https://ai.learneris.com/version-test'
  : 'https://ai.learneris.com'
export const BUBBLE_API_URL = import.meta.env.VITE_BUBBLE_API_URL as string
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string

export const LOGIN_PATH = '/login'
export const SIGNUP_PATH = '/signup'
export const FORGOT_PASSWORD_PATH = '/forgot-password'
