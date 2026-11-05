import { NextRequest, NextResponse } from "next/server";
import { getConfig } from "@/lib/enquiries/config";
import { hasBearerToken } from "@/lib/enquiries/http";
import { getEnquiryReport } from "@/lib/enquiries/report";

export async function GET(req: NextRequest) {
  if (!hasBearerToken(req, getConfig().adminApiToken)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await getEnquiryReport());
}
