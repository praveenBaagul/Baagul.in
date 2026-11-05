import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getConfig } from "@/lib/enquiries/config";
import { hasBearerToken } from "@/lib/enquiries/http";
import { listEnquiries } from "@/lib/enquiries/report";
import { ENQUIRY_STATUSES } from "@/lib/enquiries/types";

const querySchema = z.object({
  status: z.enum(ENQUIRY_STATUSES).optional(),
  limit: z.coerce.number().int().min(1).max(200).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});

export async function GET(req: NextRequest) {
  if (!hasBearerToken(req, getConfig().adminApiToken)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const query = querySchema.safeParse(Object.fromEntries(req.nextUrl.searchParams));
  if (!query.success) {
    return NextResponse.json({ error: "Invalid query", details: query.error.issues }, { status: 400 });
  }
  return NextResponse.json({ enquiries: await listEnquiries(query.data) });
}
