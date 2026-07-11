export const BUBBLE_API_URL = import.meta.env.VITE_BUBBLE_API_URL as string
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string
export const TRACKING_URL = import.meta.env.VITE_TRACKING_URL as string
// Next.js app (aiapp.learneris.com). When set, post-auth redirects go to its
// /api/auth/set-token bridge instead of the Bubble magic login_url.
export const AIAPP_URL = import.meta.env.VITE_AIAPP_URL as string

export const LOGIN_PATH = '/login'
export const SIGNUP_PATH = '/signup'
export const FORGOT_PASSWORD_PATH = '/forgot-password'
