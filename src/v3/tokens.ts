/**
 * ⚠ GENERATED FILE — DO NOT EDIT BY HAND.
 *
 * Edits go in:
 *   /Users/kelsienguyen/Documents/LRN/shared/persona-tokens/persona-tokens.ts
 *
 * Then run:
 *   bash /Users/kelsienguyen/Documents/LRN/shared/persona-tokens/sync.sh
 *
 * Last sync: 2026-05-20 13:14:42 +0700
 */

/**
 * Learneris persona color tokens — SHARED CANONICAL SOURCE.
 *
 * ┌─ How this file gets used ─────────────────────────────────────────────────┐
 * │                                                                            │
 * │ Two surfaces consume these tokens:                                         │
 * │                                                                            │
 * │   1. `landing/src/v3/tokens.ts` (marketing, Vite + React)                  │
 * │   2. `learneris-app/src/lib/persona/tokens.ts` (product hub, Next.js)      │
 * │                                                                            │
 * │ Both files are VENDORED COPIES of this one. They MUST stay in lockstep so  │
 * │ a persona's color stays consistent across the user's journey               │
 * │ (marketing → signup → hub).                                                │
 * │                                                                            │
 * │ Sync process when editing:                                                 │
 * │   1. Edit THIS file first.                                                 │
 * │   2. `bash /Users/kelsienguyen/Documents/LRN/shared/persona-tokens/sync.sh`│
 * │      (copies into both consumer repos, sets a "do-not-edit" header)        │
 * │   3. Commit the consumer files alongside this one in the same PR.          │
 * │                                                                            │
 * │ ⚠ Don't edit the vendored copies directly. They have a                     │
 * │   "GENERATED FROM …/shared/persona-tokens.ts — do not edit by hand"        │
 * │   header. Edits there get clobbered on the next sync.                      │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 *
 * ── Token semantics ──
 *
 *   accent  — Primary brand tint. Used on buttons, icon strokes, hero gradient stops.
 *   tint    — 8%-alpha fill. Used on card backgrounds, badge fills, hover states.
 *   ring    — 30-35%-alpha. Used on focus rings, soft borders, glow shadows.
 *   text    — Darker variant for on-white text. Use for persona labels on
 *             pale backgrounds; ensures WCAG AA against #fff.
 *
 * Source for the canvas-aligned hex values: `prototype-hub/journey/canvas.html`
 * swim-lane border colors. Don't reinvent — those colors carry the existing
 * mental model from the canvas demo, the analytics, and the design system.
 */

export type Persona = 'hs' | 'gv' | 'ph' | 'pro' | 'b2b'

export interface PersonaToken {
  accent: string
  tint: string
  ring: string
  text: string
}

export const PERSONA_TOKENS: Record<Persona, PersonaToken> = {
  // Học sinh — violet/purple (canvas: #5B3FC5 row border, picker accent #A98FFF)
  hs:  { accent: '#A98FFF', tint: 'rgba(169,143,255,0.10)', ring: 'rgba(169,143,255,0.35)', text: '#5B3FC5' },
  // Giáo viên — amber/orange (canvas: #F59E0B teacher swim-lane)
  gv:  { accent: '#F59E0B', tint: 'rgba(245,158,11,0.10)',  ring: 'rgba(245,158,11,0.35)',  text: '#B45309' },
  // Phụ huynh — emerald (canvas: #10B981 parent swim-lane)
  ph:  { accent: '#10B981', tint: 'rgba(16,185,129,0.10)',  ring: 'rgba(16,185,129,0.35)',  text: '#047857' },
  // Người đi làm — sky blue (canvas: #3B82F6 pro swim-lane)
  pro: { accent: '#3B82F6', tint: 'rgba(59,130,246,0.10)',  ring: 'rgba(59,130,246,0.35)',  text: '#1D4ED8' },
  // B2B / school / org — cyan (canvas: #0EA5E9 B2B swim-lane)
  b2b: { accent: '#0EA5E9', tint: 'rgba(14,165,233,0.10)',  ring: 'rgba(14,165,233,0.35)',  text: '#0369A1' },
}

/**
 * Neutral tokens for the "no persona selected yet" state — used on the
 * marketing hero before the picker fires, or on the hub before persona
 * inference completes. Anchored on the global brand violet (#7C3AED)
 * which is also the Tailwind `primary` token in the hub's globals.css.
 */
export const NEUTRAL_TOKENS: PersonaToken = {
  accent: '#7C3AED',
  tint: 'rgba(124,58,237,0.08)',
  ring: 'rgba(124,58,237,0.30)',
  text: '#5B21B6',
}

/** Convenience helper — pick tokens for an optional persona. */
export function personaTokens(p: Persona | null): PersonaToken {
  return p ? PERSONA_TOKENS[p] : NEUTRAL_TOKENS
}

/**
 * Display-name catalogs. Marketing surface uses these in i18n strings;
 * hub uses these for the persona switcher chip. Keep ordering stable —
 * matches the canvas swim-lane order top-to-bottom (HS → GV → PH → Pro → B2B)
 * so analytics + persona-picker chip orders stay consistent everywhere.
 */
export const PERSONA_LABEL_VI: Record<Persona, string> = {
  hs:  'Học sinh',
  gv:  'Giáo viên',
  ph:  'Phụ huynh',
  pro: 'Người đi làm',
  b2b: 'Trường / Doanh nghiệp',
}

export const PERSONA_LABEL_EN: Record<Persona, string> = {
  hs:  'Student',
  gv:  'Teacher',
  ph:  'Parent',
  pro: 'Professional',
  b2b: 'School / Org',
}

/** Stable ordering — same in the picker, the engagement matrix, and analytics. */
export const PERSONA_ORDER: readonly Persona[] = ['hs', 'gv', 'ph', 'pro', 'b2b'] as const

/**
 * Deep-link slug catalog. Maps a Persona key to the URL slug used on the
 * marketing site (`/v3/teacher`, `/v3/student`, …). Both directions
 * because:
 *   - landing routing needs slug→persona to know which to pre-select
 *   - share-link builders need persona→slug to construct the URL
 *
 * The English-word slugs (not "gv" / "hs") because URLs go to non-VN
 * audiences (paid ads, social shares, press) and English slugs read
 * naturally. Slugs are stable contract — don't rename without a redirect.
 */
export const PERSONA_SLUG: Record<Persona, string> = {
  hs:  'student',
  gv:  'teacher',
  ph:  'parent',
  pro: 'professional',
  b2b: 'school',
}

export const SLUG_TO_PERSONA: Record<string, Persona> = Object.fromEntries(
  Object.entries(PERSONA_SLUG).map(([persona, slug]) => [slug, persona as Persona])
) as Record<string, Persona>
