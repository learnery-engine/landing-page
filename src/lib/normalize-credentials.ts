/**
 * Credential input normalization.
 *
 * Our users overwhelmingly type with a Vietnamese IME (Unikey/Telex) or an
 * on-screen touch keyboard, either of which can silently emit a character that
 * LOOKS identical to ASCII but carries a different Unicode code point — most
 * notably a full-width "＠" (U+FF20) instead of "@" (U+0040). Credentials are
 * also routinely shared over chat and pasted in, dragging along a trailing
 * space, a non-breaking space, or a zero-width character.
 *
 * Any of these makes a credential that looks perfectly correct on screen fail
 * to match — with no hint to the user as to why (observed in production: a
 * customer locked out for ~45 min while the on-screen text read correctly).
 *
 * Normalizing on the way in removes those invisible / look-alike differences so
 * they can't lock a user out of an otherwise-correct credential.
 */

// Invisible Unicode "format" characters (general category Cf): the zero-width
// space / joiners (U+200B–U+200D), word-joiner (U+2060), BOM/ZWNBSP (U+FEFF),
// soft hyphen, bidi marks, and similar. None is ever a legitimate part of a
// typed credential — they only ride in via copy-paste — so we strip the whole
// category outright.
const INVISIBLE = /\p{Cf}/gu

/**
 * Normalize an email address for login / signup / password-reset.
 *
 * An email is not a secret and is matched case-insensitively by the backend, so
 * we can fully canonicalize it:
 *  - `NFKC` folds look-alikes to ASCII (full-width "＠" → "@", full-width
 *    digits / letters → ASCII), which is the exact failure mode an IME causes;
 *  - invisible format characters from a paste are stripped;
 *  - surrounding whitespace is trimmed;
 *  - case is lowered, which also undoes touch-keyboard auto-capitalization
 *    (e.g. "Hoccungai123@…" → "hoccungai123@…").
 */
export function normalizeEmail(raw: string): string {
  return raw.normalize('NFKC').replace(INVISIBLE, '').trim().toLowerCase()
}

/**
 * Normalize a password for login / signup.
 *
 * Conservative by design, aligned with RFC 8265 (PRECIS "OpaqueString"
 * profile): a password is opaque, so we only remove what is unambiguously
 * accidental and leave every other code point exactly as typed —
 *  - strip invisible format characters (paste junk);
 *  - trim surrounding whitespace, which `String.prototype.trim()` defines to
 *    include the non-breaking space and other Unicode spaces, so a pasted
 *    leading / trailing space (never intentional) is removed;
 *  - apply `NFC` so accented characters compare canonically.
 *
 * We deliberately do NOT apply `NFKC` (no width-folding) to a password: unlike
 * an email it is code-point-sensitive, and silently folding it could change a
 * deliberately-chosen password or fail to match one already stored. The rare
 * "full-width character baked into a password" case is resolved operationally
 * (reset to a clean ASCII password) rather than by mutating every user's
 * password on the client.
 */
export function normalizePassword(raw: string): string {
  return raw.replace(INVISIBLE, '').trim().normalize('NFC')
}
