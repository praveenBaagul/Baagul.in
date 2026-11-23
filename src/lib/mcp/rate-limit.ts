/**
 * Per-client request limit for the MCP endpoint, held in memory.
 *
 * The endpoint serves public, read-only data, so this only has to stop one
 * client from hammering the server. Counters live in this process: on a host
 * that runs several instances each one counts on its own, which is acceptable
 * here. A tool that writes data must use the database-backed limiter in
 * lib/enquiries/rate-limit.ts instead.
 */

export const MCP_RATE_LIMIT = { requests: 60, windowSeconds: 60 } as const;

const MAX_TRACKED_CLIENTS = 10_000;

interface Counter {
  windowStart: number;
  hits: number;
}

const counters = new Map<string, Counter>();

function prune(now: number, windowMs: number) {
  for (const [key, counter] of counters) {
    if (now - counter.windowStart >= windowMs) counters.delete(key);
  }
  // Still full after dropping expired windows: start over rather than grow without bound.
  if (counters.size >= MAX_TRACKED_CLIENTS) counters.clear();
}

/** Counts this request. Returns seconds to wait if the client is over the limit, otherwise null. */
export function checkMcpRateLimit(clientKey: string, now: number = Date.now()): number | null {
  const windowMs = MCP_RATE_LIMIT.windowSeconds * 1000;
  let counter = counters.get(clientKey);

  if (!counter || now - counter.windowStart >= windowMs) {
    if (counters.size >= MAX_TRACKED_CLIENTS) prune(now, windowMs);
    counter = { windowStart: now, hits: 0 };
    counters.set(clientKey, counter);
  }

  counter.hits += 1;
  if (counter.hits <= MCP_RATE_LIMIT.requests) return null;
  return Math.max(1, Math.ceil((counter.windowStart + windowMs - now) / 1000));
}

export function resetMcpRateLimitForTests() {
  counters.clear();
}
