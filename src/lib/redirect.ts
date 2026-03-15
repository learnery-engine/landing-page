import { APP_URL } from './constants'

export function redirectToApp(token: string) {
  window.location.href = `${APP_URL}?api_token=${encodeURIComponent(token)}`
}
