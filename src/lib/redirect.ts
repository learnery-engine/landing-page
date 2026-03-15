import { APP_URL } from './constants'

export function redirectToApp(token: string) {
  window.location.href = `${APP_URL}/profile?api_token=${token}`
}
