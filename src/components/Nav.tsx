import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const APP_URL = 'https://ai.learneris.com'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-text">Learneris</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-text-muted hover:text-text transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-text-muted hover:text-text transition-colors">How it Works</a>
            <a href="#testimonials" className="text-sm font-medium text-text-muted hover:text-text transition-colors">Testimonials</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`${APP_URL}/profile?from=profile&tab=login`}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors px-4 py-2">
              Log In
            </a>
            <a href={`${APP_URL}/profile?from=profile&tab=signup`}
              className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25">
              Get Started Free
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 -mr-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-text-muted py-2">Features</a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-text-muted py-2">How it Works</a>
            <a href="#testimonials" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-text-muted py-2">Testimonials</a>
            <hr className="my-2" />
            <a href={`${APP_URL}/profile?from=profile&tab=login`} className="block text-sm font-medium text-text py-2">Log In</a>
            <a href={`${APP_URL}/profile?from=profile&tab=signup`}
              className="block bg-primary text-white text-sm font-semibold px-5 py-3 rounded-xl text-center">
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
