import { useState, useEffect } from 'react'
import './index.css'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SignupPage } from './pages/SignupPage'
import { LoginPage } from './pages/LoginPage'
import { ForgotPasswordPage } from './pages/ForgotPasswordPage'
import { AppV2 } from './AppV2'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '') // e.g. '' or '/learneris-landing'

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Strip the base path so routes stay simple: '/terms', '/privacy', '/'
  const stripped = pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname
  return stripped
}

export default function App() {
  const pathname = usePathname()

  if (pathname === '/terms') return <TermsPage />
  if (pathname === '/privacy') return <PrivacyPage />
  if (pathname === '/signup') return <SignupPage />
  if (pathname === '/login') return <LoginPage />
  if (pathname === '/forgot-password') return <ForgotPasswordPage />
  // v2 is now the default landing page
  return <AppV2 />
}
