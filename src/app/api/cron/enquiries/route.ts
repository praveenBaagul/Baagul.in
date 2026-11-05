import { NextRequest, NextResponse } from "next/server";
import { getConfig } from "@/lib/enquiries/config";
import { hasBearerToken } from "@/lib/enquiries/http";
import { safeErrorMessage } from "@/lib/enquiries/sanitize";
import { runMaintenance } from "@/lib/enquiries/sequence";

/** Retries undelivered events and closes finished sequences. Requires CRON_SECRET. */
async function handle(req: NextRequest) {
  if (!hasBearerToken(req, getConfig().cronSecret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    return NextResponse.json(await runMaintenance());
  } catch (error) {
    console.error("Enquiry maintenance failed:", safeErrorMessage(error));
    return NextResponse.json({ error: "Maintenance failed" }, { status: 500 });
  }
}

export { handle as GET, handle as POST };
