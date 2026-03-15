const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function navigate(path: string) {
  window.history.pushState(null, '', `${BASE}${path}`)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
