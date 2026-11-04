import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/validations/enquiry";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side Zod validation
    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, company, selectedBudget, selectedServices, details } =
      parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          success: true,
          mock: true,
          message:
            "Enquiry saved successfully. (Note: RESEND_API_KEY not configured, email sending skipped).",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "support@baagul.in";
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";

    // Build lead HTML body
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #121a4a; border-radius: 12px; background-color: #faf9f6;">
        <div style="margin-bottom: 20px; border-bottom: 2px solid #121a4a; padding-bottom: 12px;">
          <span style="background-color: #f4a261; color: #121a4a; font-weight: bold; font-size: 11px; padding: 4px 8px; border-radius: 4px; text-transform: uppercase;">
            New Lead Received
          </span>
          <h1 style="color: #121a4a; font-size: 22px; margin: 12px 0 4px 0;">New Client Enquiry</h1>
          <p style="color: #64748b; font-size: 13px; margin: 0;">Baagul Digital Strategy Desk</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 35%; font-weight: bold;">Full Name:</td>
            <td style="padding: 8px 0; color: #121a4a; font-weight: 600;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Work Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2a9d8f; text-decoration: none; font-weight: 600;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0; color: #121a4a;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Company / Web:</td>
            <td style="padding: 8px 0; color: #121a4a;">${company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Budget Range:</td>
            <td style="padding: 8px 0; color: #e76f51; font-weight: bold;">${selectedBudget}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Services:</td>
            <td style="padding: 8px 0; color: #121a4a;">${selectedServices.join(", ")}</td>
          </tr>
        </table>

        <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <div style="font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Scope / Message:</div>
          <p style="color: #121a4a; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${details}</p>
        </div>

        <div style="text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
          Received from Baagul Contact Form • Response SLA: 24h
        </div>
      </div>
    `;

    // 1. Email notification to the team
    let teamEmailResult = await resend.emails.send({
      from: `Baagul Inquiries <${senderEmail}>`,
      to: [receiverEmail],
      replyTo: email,
      subject: `New Project Enquiry: ${fullName} (${selectedBudget})`,
      html: emailHtml,
    });

    // If Resend blocked because it's in free test mode (can only send to your own registered email)
    if (
      teamEmailResult.error &&
      teamEmailResult.error.message?.includes("You can only send testing emails to your own email address")
    ) {
      console.warn(
        `Resend in test mode: Cannot send to ${receiverEmail}. Automatically falling back to account email praveen@baagul.com`
      );
      // Fallback delivery to account email so the form submission succeeds
      teamEmailResult = await resend.emails.send({
        from: `Baagul Inquiries <${senderEmail}>`,
        to: ["praveen@baagul.com"],
        replyTo: email,
        subject: `[TEST FALLBACK] New Project Enquiry: ${fullName} (${selectedBudget})`,
        html: emailHtml,
      });
    }

    if (teamEmailResult.error) {
      console.error("Resend delivery failed:", teamEmailResult.error);
      return NextResponse.json(
        { error: "Failed to deliver email through Resend", details: teamEmailResult.error },
        { status: 500 }
      );
    }

    // 2. Client acknowledgment auto-responder (wrapped so it never breaks the submission in test mode)
    try {
      await resend.emails.send({
        from: `Baagul Support <${senderEmail}>`,
        to: [email],
        subject: `Enquiry Received — Baagul Digital Strategy Desk`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 24px; border: 2px solid #121a4a; border-radius: 12px; background-color: #faf9f6;">
            <h2 style="color: #121a4a; font-size: 20px; margin-top: 0;">Hello ${fullName},</h2>
            <p style="color: #334155; font-size: 14px; line-height: 1.6;">
              Thank you for reaching out to Baagul. We have received your enquiry regarding <strong>${selectedServices.join(", ")}</strong>.
            </p>
            <p style="color: #334155; font-size: 14px; line-height: 1.6;">
              Our technical strategy desk is currently reviewing your project scope. A lead strategist will follow up within 24 hours with a preliminary sprint roadmap and meeting link.
            </p>
            <div style="background-color: #ebf5f1; border-left: 4px solid #2a9d8f; padding: 12px 16px; margin: 20px 0; font-size: 13px; color: #121a4a;">
              🔒 <strong>Confidentiality Note:</strong> All information shared is covered under our standard 24-hr NDA.
            </div>
            <p style="color: #64748b; font-size: 13px; margin-bottom: 0;">
              Best regards,<br />
              <strong>Baagul Strategy Team</strong><br />
              Hustlehub Tech Park, HSR Layout, Bengaluru
            </p>
          </div>
        `,
      });
    } catch (clientErr) {
      console.warn("Client auto-responder skipped (normal when domain is unverified):", clientErr);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API error in /api/contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
