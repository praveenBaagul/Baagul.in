import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { newsletterSchema } from "@/lib/validations/enquiry";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side Zod validation
    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        {
          success: true,
          mock: true,
          message: "Subscribed! (Note: RESEND_API_KEY not set, email dispatch skipped).",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "support@baagul.in";
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 540px; margin: 0 auto; padding: 24px; border: 2px solid #121a4a; border-radius: 12px; background-color: #faf9f6;">
        <div style="margin-bottom: 16px; border-bottom: 2px solid #121a4a; padding-bottom: 8px;">
          <span style="background-color: #f4a261; color: #121a4a; font-weight: bold; font-size: 11px; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">
            Newsletter Lead
          </span>
          <h2 style="color: #121a4a; margin: 10px 0 0 0;">New Subscription: The Growth Letter</h2>
        </div>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          A new reader just subscribed to <em>The Growth Letter</em> weekly dispatch from the home page CTA.
        </p>
        <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin: 16px 0;">
          <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold; display: block; margin-bottom: 4px;">Subscriber Email</span>
          <a href="mailto:${email}" style="color: #121a4a; font-size: 16px; font-weight: bold; text-decoration: none;">${email}</a>
        </div>
        <div style="font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
          Baagul Digital Strategy Desk • Bangalore, India
        </div>
      </div>
    `;

    // Deliver notification to agency owner
    let result = await resend.emails.send({
      from: `Baagul Dispatch <${senderEmail}>`,
      to: [receiverEmail],
      replyTo: email,
      subject: `New Newsletter Subscriber: ${email}`,
      html: emailHtml,
    });

    // Test mode fallback to registered Resend account
    if (
      result.error &&
      result.error.message?.includes("You can only send testing emails to your own email address")
    ) {
      console.warn(
        `Resend in test mode: Cannot send newsletter notice to ${receiverEmail}. Falling back to praveen@baagul.com`
      );
      result = await resend.emails.send({
        from: `Baagul Dispatch <${senderEmail}>`,
        to: ["praveen@baagul.com"],
        replyTo: email,
        subject: `[TEST FALLBACK] New Newsletter Subscriber: ${email}`,
        html: emailHtml,
      });
    }

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Failed to process subscription through Resend", details: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
