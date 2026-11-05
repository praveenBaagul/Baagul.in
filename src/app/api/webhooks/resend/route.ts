import { NextRequest, NextResponse } from "next/server";
import type { WebhookEventPayload } from "resend";
import { getConfig } from "@/lib/enquiries/config";
import { getResend } from "@/lib/enquiries/resend-client";
import { safeErrorMessage } from "@/lib/enquiries/sanitize";
import { processWebhook } from "@/lib/enquiries/webhook";

export async function POST(req: NextRequest) {
  const { webhookSecret } = getConfig();
  if (!webhookSecret) {
    console.error("RESEND_WEBHOOK_SECRET is not configured.");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  // Resend documents svix-* headers. The Standard Webhooks spelling is the same scheme.
  const id = req.headers.get("svix-id") ?? req.headers.get("webhook-id");
  const timestamp = req.headers.get("svix-timestamp") ?? req.headers.get("webhook-timestamp");
  const signature = req.headers.get("svix-signature") ?? req.headers.get("webhook-signature");
  if (!id || !timestamp || !signature) {
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }

  // The signature covers the exact bytes received, so this must stay unparsed.
  const payload = await req.text();

  let event: WebhookEventPayload;
  try {
    event = getResend().webhooks.verify({
      payload,
      headers: { id, timestamp, signature },
      webhookSecret,
    });
  } catch {
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }

  try {
    const outcome = await processWebhook(id, event);
    // Another instance holds this delivery. A non-2xx makes Resend retry later,
    // which covers that instance dying before it finishes.
    if (outcome === "in_progress") {
      return NextResponse.json({ status: outcome }, { status: 409 });
    }
    return NextResponse.json({ status: outcome }, { status: 200 });
  } catch (error) {
    console.error(`Webhook ${id} (${event.type}) failed:`, safeErrorMessage(error));
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
