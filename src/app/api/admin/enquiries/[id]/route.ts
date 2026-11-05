import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getConfig } from "@/lib/enquiries/config";
import { hasBearerToken } from "@/lib/enquiries/http";
import { getEnquiryDetail } from "@/lib/enquiries/report";
import { changeEnquiryStatus } from "@/lib/enquiries/sequence";
import { ENQUIRY_STATUSES } from "@/lib/enquiries/types";

interface Context {
  params: Promise<{ id: string }>;
}

const statusChangeSchema = z.object({
  status: z.enum(ENQUIRY_STATUSES),
  /** For example `meeting_booked`, `purchased` or `not_interested`. */
  reason: z
    .string()
    .trim()
    .regex(/^[a-z0-9_]{1,50}$/)
    .optional(),
});

export async function GET(req: NextRequest, { params }: Context) {
  if (!hasBearerToken(req, getConfig().adminApiToken)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const detail = await getEnquiryDetail(id);
  if (!detail) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(detail);
}

/** Updates the status. Statuses that end follow-up stop this customer's sequence. */
export async function PATCH(req: NextRequest, { params }: Context) {
  if (!hasBearerToken(req, getConfig().adminApiToken)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = statusChangeSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", details: parsed.error.issues }, { status: 400 });
  }

  const { id } = await params;
  const enquiry = await changeEnquiryStatus(id, parsed.data.status, {
    actor: "admin_api",
    reason: parsed.data.reason,
  });
  if (!enquiry) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({
    id: enquiry.id,
    status: enquiry.status,
    sequenceStatus: enquiry.sequence_status,
    sequenceReason: enquiry.sequence_reason,
  });
}
