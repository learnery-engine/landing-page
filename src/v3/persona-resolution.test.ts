import { describe, it, expect, beforeEach, vi } from 'vitest'
import { SLUG_TO_PERSONA, PERSONA_ORDER } from './tokens'
import { readInitial, STORAGE_KEY as PERSONA_KEY } from './PersonaContext'
import { getInitialLocale, STORAGE_KEY as LANG_KEY } from '../i18n'

// The V3 branch's whole point is persona deep-links + locale-aware bucketing.
// These lock the resolution + fallback logic so a refactor can't silently break
// /v3/<slug>, the hash/localStorage precedence, or the VI/EN default.

describe('SLUG_TO_PERSONA — deep-link slug → persona', () => {
  it('maps every slug to a valid persona', () => {
    for (const p of Object.values(SLUG_TO_PERSONA)) expect(PERSONA_ORDER).toContain(p)
  })
  it('covers all five personas exactly once', () => {
    expect(new Set(Object.values(SLUG_TO_PERSONA))).toEqual(new Set(PERSONA_ORDER))
  })
  it('has unique slugs (no two personas share a slug)', () => {
    const slugs = Object.keys(SLUG_TO_PERSONA)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('readInitial — persona resolution (hash > localStorage > none)', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.location.hash = ''
  })
  it('returns null when nothing is set', () => {
    expect(readInitial()).toBeNull()
  })
  it('reads a valid persona from localStorage', () => {
    window.localStorage.setItem(PERSONA_KEY, 'gv')
    expect(readInitial()).toBe('gv')
  })
  it('lets the URL hash win over localStorage', () => {
    window.localStorage.setItem(PERSONA_KEY, 'gv')
    window.location.hash = '#persona=hs'
    expect(readInitial()).toBe('hs')
  })
  it('ignores invalid persona values in hash and storage', () => {
    window.location.hash = '#persona=nope'
    window.localStorage.setItem(PERSONA_KEY, 'alsonope')
    expect(readInitial()).toBeNull()
  })
})

describe('getInitialLocale — locale fallback (stored > vi-browser > en)', () => {
  beforeEach(() => window.localStorage.clear())
  it('honors a stored locale', () => {
    window.localStorage.setItem(LANG_KEY, 'vi')
    expect(getInitialLocale()).toBe('vi')
  })
  it('falls back to vi for a vi-* browser', () => {
    vi.stubGlobal('navigator', { language: 'vi-VN' })
    expect(getInitialLocale()).toBe('vi')
    vi.unstubAllGlobals()
  })
  it('defaults to en for a non-vi browser', () => {
    vi.stubGlobal('navigator', { language: 'en-US' })
    expect(getInitialLocale()).toBe('en')
    vi.unstubAllGlobals()
  })
})
