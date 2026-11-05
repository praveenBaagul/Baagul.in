import { createHash, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

/** Constant-time bearer check. An unset secret denies everything. */
export function hasBearerToken(request: NextRequest, secret: string | undefined): boolean {
  if (!secret) return false;
  const header = request.headers.get("authorization") ?? "";
  const supplied = header.startsWith("Bearer ") ? header.slice("Bearer ".length) : "";
  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(supplied), digest(secret));
}

/** Client address as reported by the hosting proxy. */
export function clientIp(request: NextRequest): string | null {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip")?.trim() || null;
}
