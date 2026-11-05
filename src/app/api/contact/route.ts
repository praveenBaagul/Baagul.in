import { NextRequest, NextResponse } from "next/server";
import { enquirySubmissionSchema } from "@/lib/validations/enquiry";
import { isDatabaseConfigured } from "@/lib/enquiries/db";
import { clientIp } from "@/lib/enquiries/http";
import { notifyAdmin } from "@/lib/enquiries/notifications";
import { isResendConfigured } from "@/lib/enquiries/resend-client";
import { normalizePhone, safeErrorMessage } from "@/lib/enquiries/sanitize";
import { submitEnquiry } from "@/lib/enquiries/submit";

const FAILURE_MESSAGE =
  "We could not save your enquiry. Please try again, or contact us by phone or email directly.";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = enquirySubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.issues },
      { status: 400 }
    );
  }
  const input = parsed.data;

  // Bots get a normal-looking success, so they have no signal to adapt to.
  if (input.website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const notice = {
    enquiryId: null,
    fullName: input.fullName,
    email: input.email,
    phone: normalizePhone(input.phone),
    company: input.company ?? null,
    budget: input.selectedBudget,
    services: input.selectedServices,
    message: input.details,
  };

  // Keeps the form working on a deployment without a database yet: the team
  // still gets the lead, but it is not stored and no follow-up starts.
  if (!isDatabaseConfigured()) {
    console.error("DATABASE_URL is not configured: enquiry was not stored.");
    if (!isResendConfigured()) {
      return NextResponse.json({ success: true, mock: true }, { status: 200 });
    }
    try {
      await notifyAdmin(notice);
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Enquiry notification failed:", safeErrorMessage(error));
      return NextResponse.json({ error: FAILURE_MESSAGE }, { status: 500 });
    }
  }

  try {
    const result = await submitEnquiry(input, { ip: clientIp(req) });

    if (result.kind === "rate_limited") {
      return NextResponse.json(
        { error: "Too many enquiries. Please try again later, or contact us by phone." },
        { status: 429, headers: { "Retry-After": String(result.retryAfterSeconds) } }
      );
    }

    return NextResponse.json({ success: true, enquiryId: result.enquiryId }, { status: 200 });
  } catch (error) {
    console.error("Enquiry submission failed:", safeErrorMessage(error));
    // The customer is told to retry, but the lead still reaches the team.
    if (isResendConfigured()) {
      await notifyAdmin(notice).catch((notifyError) =>
        console.error("Enquiry notification failed:", safeErrorMessage(notifyError))
      );
    }
    return NextResponse.json({ error: FAILURE_MESSAGE }, { status: 500 });
  }
}
