import { useState, useEffect } from 'react'
import './index.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Stats } from './components/Stats'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'

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

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
