import { describe, expect, it } from 'vitest'
import { normalizeEmail, normalizePassword } from './normalize-credentials'

// Built with String.fromCodePoint so the test source stays free of the very
// invisible / look-alike characters under test.
const FW_AT = String.fromCodePoint(0xff20) // ＠ full-width commercial at
const ZWSP = String.fromCodePoint(0x200b) // zero-width space
const NBSP = String.fromCodePoint(0x00a0) // non-breaking space
const SOFT_HYPHEN = String.fromCodePoint(0x00ad) // category Cf, invisible
const COMB_ACUTE = String.fromCodePoint(0x0301) // combining acute accent
const E_ACUTE = String.fromCodePoint(0x00e9) // é, precomposed

describe('normalizeEmail', () => {
  it('trims surrounding whitespace', () => {
    expect(normalizeEmail('hoccungai123@gmail.com ')).toBe('hoccungai123@gmail.com')
  })
  it('folds a full-width ＠ to ASCII @ (the IME failure mode)', () => {
    expect(normalizeEmail('hoccungai123' + FW_AT + 'gmail.com')).toBe('hoccungai123@gmail.com')
  })
  it('lowercases, undoing touch-keyboard auto-capitalization', () => {
    expect(normalizeEmail('Hoccungai123@Gmail.Com')).toBe('hoccungai123@gmail.com')
  })
  it('strips zero-width characters from a paste', () => {
    expect(normalizeEmail('hoccungai123@gm' + ZWSP + 'ail.com')).toBe('hoccungai123@gmail.com')
  })
  it('trims a trailing non-breaking space', () => {
    expect(normalizeEmail('hoccungai123@gmail.com' + NBSP)).toBe('hoccungai123@gmail.com')
  })
  it('leaves an already-clean address unchanged', () => {
    expect(normalizeEmail('hoccungai123@gmail.com')).toBe('hoccungai123@gmail.com')
  })
})

describe('normalizePassword', () => {
  it('trims a trailing space (the production lock-out)', () => {
    expect(normalizePassword('hoccungai123@gmail.com ')).toBe('hoccungai123@gmail.com')
  })
  it('trims a leading space', () => {
    expect(normalizePassword(' hoccungai123@gmail.com')).toBe('hoccungai123@gmail.com')
  })
  it('trims a trailing non-breaking space', () => {
    expect(normalizePassword('learneris2026' + NBSP)).toBe('learneris2026')
  })
  it('strips a zero-width character', () => {
    expect(normalizePassword('sec' + ZWSP + 'ret')).toBe('secret')
  })
  it('strips an invisible soft hyphen (category Cf)', () => {
    expect(normalizePassword('pa' + SOFT_HYPHEN + 'ss')).toBe('pass')
  })
  it('leaves a plain ASCII password unchanged', () => {
    expect(normalizePassword('learneris2026')).toBe('learneris2026')
  })
  it('preserves case and interior real spaces', () => {
    expect(normalizePassword('Two Words ')).toBe('Two Words')
  })
  it('does NOT width-fold — a password stays opaque (RFC 8265)', () => {
    expect(normalizePassword('abc' + FW_AT + '123')).toBe('abc' + FW_AT + '123')
  })
  it('applies NFC so decomposed accents compare canonically', () => {
    expect(normalizePassword('cafe' + COMB_ACUTE)).toBe('caf' + E_ACUTE)
  })
})
