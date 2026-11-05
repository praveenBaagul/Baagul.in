import { Resend } from "resend";
import { getConfig } from "./config";

let override: Resend | undefined;
let client: Resend | undefined;

export function getResend(): Resend {
  if (override) return override;
  if (!client) {
    const { apiKey } = getConfig();
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
    client = new Resend(apiKey);
  }
  return client;
}

export function isResendConfigured(): boolean {
  return Boolean(override) || Boolean(getConfig().apiKey);
}

/** Test seam: replaces the SDK client with a stub. */
export function setResendForTests(stub: Resend | undefined): void {
  override = stub;
}
