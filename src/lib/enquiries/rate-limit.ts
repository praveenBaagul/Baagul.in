import { getConfig } from "./config";
import type { Db } from "./db";
import { sha256 } from "./sanitize";

const LIMITS = {
  ip: { hits: 5, windowSeconds: 60 * 60 },
  email: { hits: 3, windowSeconds: 24 * 60 * 60 },
} as const;

export function hashIdentifier(value: string): string {
  return sha256(`${getConfig().rateLimitSalt}:${value}`);
}

async function hit(db: Db, key: string, windowSeconds: number): Promise<number> {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;
  const windowStart = new Date(Math.floor(now / windowMs) * windowMs);

  try {
    const { rows } = await db.query<{ hits: number }>(
      `INSERT INTO rate_limit_counters (key, window_start, hits)
       VALUES ($1, $2, 1)
       ON CONFLICT (key, window_start) DO UPDATE SET hits = rate_limit_counters.hits + 1
       RETURNING hits`,
      [key, windowStart]
    );
    if (rows[0]?.hits !== undefined) return rows[0].hits;
  } catch {
    // MySQL syntax fallback
    await db.query(
      `INSERT INTO rate_limit_counters (\`key\`, window_start, hits)
       VALUES ($1, $2, 1)
       ON DUPLICATE KEY UPDATE hits = hits + 1`,
      [key, windowStart]
    );
    const { rows } = await db.query<{ hits: number }>(
      `SELECT hits FROM rate_limit_counters WHERE \`key\` = $1 AND window_start = $2 LIMIT 1`,
      [key, windowStart]
    );
    return rows[0]?.hits ?? 1;
  }
  return 1;
}

/** Counts this attempt. Returns seconds to wait if a limit is exceeded, otherwise null. */
export async function checkRateLimit(
  db: Db,
  identifiers: { ipHash: string | null; email: string }
): Promise<number | null> {
  if (identifiers.ipHash) {
    const ipHits = await hit(db, `enquiry:ip:${identifiers.ipHash}`, LIMITS.ip.windowSeconds);
    if (ipHits > LIMITS.ip.hits) return LIMITS.ip.windowSeconds;
  }

  const emailHits = await hit(
    db,
    `enquiry:email:${hashIdentifier(identifiers.email)}`,
    LIMITS.email.windowSeconds
  );
  return emailHits > LIMITS.email.hits ? LIMITS.email.windowSeconds : null;
}
