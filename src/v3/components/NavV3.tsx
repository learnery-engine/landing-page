import { useEffect, useState } from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { useTranslation } from '../../i18n'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'
import { useV3Translation } from '../i18n'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'
import { PersonaIcon } from './PersonaIcon'
import { navigate } from '../../lib/navigate'

/**
 * V3 nav — mirrors the V2 nav but points to V3 anchors, exposes the active
 * persona in the bar, and includes a "back to current" escape hatch (since
 * V3 is a preview, not the default yet).
 */
export function NavV3() {
  const { t } = useTranslation()
  const { v3 } = useV3Translation()
  const { persona, setPersona } = usePersona()
  const tokens = personaTokens(persona)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/v3" className="flex items-center gap-2.5" onClick={(e) => { e.preventDefault(); navigate('/v3') }}>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
              style={{ background: tokens.accent }}
            >
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-text">{t.nav.brand}</span>
            <span
              className="hidden sm:inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{ background: tokens.tint, color: tokens.text, border: `1px solid ${tokens.ring}` }}
            >
              {v3.nav.badge}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            <a href="#surfaces" className="text-sm font-medium text-text-muted hover:text-text transition-colors">
              {t.nav.links.features}
            </a>
            <a href="#proof" className="text-sm font-medium text-text-muted hover:text-text transition-colors">
              Proof
            </a>
            <a href="#programs" className="text-sm font-medium text-text-muted hover:text-text transition-colors">
              {t.nav.links.programs}
            </a>
          </div>

          {/* Right side: active persona chip + lang + auth */}
          <div className="hidden lg:flex items-center gap-3">
            {persona && (
              <button
                type="button"
                onClick={() => setPersona(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
                style={{ background: tokens.tint, color: tokens.text, border: `1px solid ${tokens.ring}` }}
                title="Reset persona"
              >
                <PersonaIcon persona={persona} className="w-3.5 h-3.5" />
                <span>{v3.personas[persona].label}</span>
                <X className="w-3 h-3 opacity-60" />
              </button>
            )}
            <LanguageSwitcher className="text-text-muted hover:text-text px-2 py-1.5 rounded-lg hover:bg-surface" />
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate('/') }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-text transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {v3.nav.backToV2}
            </a>
            <a
              href="/signup"
              onClick={(e) => { e.preventDefault(); navigate('/signup') }}
              className="text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-lg"
              style={{ background: tokens.accent, boxShadow: `0 6px 16px -6px ${tokens.ring}` }}
            >
              {t.nav.auth.signup}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {persona && (
              <button
                type="button"
                onClick={() => { setPersona(null); setMobileOpen(false) }}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold"
                style={{ background: tokens.tint, color: tokens.text, border: `1px solid ${tokens.ring}` }}
              >
                <PersonaIcon persona={persona} className="w-3.5 h-3.5" />
                {v3.personas[persona].label} · {v3.hero.reset}
              </button>
            )}
            <a href="#surfaces" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-text-muted py-2">
              {t.nav.links.features}
            </a>
            <a href="#proof" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-text-muted py-2">
              Proof
            </a>
            <a href="#programs" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-text-muted py-2">
              {t.nav.links.programs}
            </a>
            <hr className="my-2" />
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); setMobileOpen(false); navigate('/') }}
              className="block text-sm font-medium text-text-muted py-2"
            >
              ← {v3.nav.backToV2}
            </a>
            <a
              href="/signup"
              onClick={(e) => { e.preventDefault(); setMobileOpen(false); navigate('/signup') }}
              className="block text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
              style={{ background: tokens.accent }}
            >
              {t.nav.auth.signup}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
