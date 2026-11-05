import { createHash, randomBytes } from "node:crypto";

// C0 and C1 controls, keeping tab, newline and carriage return.
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;
const ID_ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

export function stripControlChars(value: string): string {
  return value.replace(CONTROL_CHARS, "").trim();
}

/** Collapses a value to one line, for use in subjects and similar headers. */
export function singleLine(value: string): string {
  return stripControlChars(value).replace(/\s+/g, " ");
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Makes a submitted name safe to place in an email sent to the submitted address.
 *
 * Templates insert variables with `{{{ }}}`, which must be assumed to be raw, and
 * the form accepts any address. Without this, someone could put markup or a link
 * in the name field and have us deliver it to a third party. Only letters, marks,
 * digits, spaces, apostrophes and hyphens survive, and a dot survives only at the
 * end of a word, so "Dr. Rao" stays readable and "evil.example" does not.
 */
export function sanitizeDisplayName(value: string): string {
  const cleaned = singleLine(value)
    .replace(/\.(?=\S)/g, " ")
    .replace(/[^\p{L}\p{M}\p{N} .'’-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
  return /[\p{L}\p{N}]/u.test(cleaned) ? cleaned : "there";
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

/** Pulls the address out of `Name <a@b.c>` or returns the bare address. */
export function parseAddress(value: string): string {
  const match = value.match(/<([^>]+)>/);
  return normalizeEmail(match ? match[1] : value);
}

/** The form pre-fills "+91", so a bare country code counts as no phone number. */
export function normalizePhone(value: string): string | null {
  const digits = value.replace(/\D/g, "");
  if (!digits || digits === "91") return null;
  return stripControlChars(value);
}

export function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export function generateEnquiryId(): string {
  const id = Array.from(randomBytes(10), (byte) => ID_ALPHABET[byte % 32]).join("");
  return `ENQ-${id}`;
}

/** Error text safe to log or store: Resend keys are removed. */
export function safeErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);
  return message.replace(/re_[A-Za-z0-9_]+/g, "re_***").slice(0, 500);
}
