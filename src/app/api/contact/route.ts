import { NextRequest, NextResponse } from "next/server";
import { site } from "@/data/site";

export async function POST(req: NextRequest) {
  const { fullName, phone, email, message } = await req.json();

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Forward as a mailto link — replace this block with Resend / Nodemailer / SendGrid when ready
  const body = [
    `Name: ${fullName}`,
    `Phone: ${phone || "—"}`,
    `Email: ${email}`,
    `\nMessage:\n${message}`,
  ].join("\n");

  // Log to console in dev; swap for an email-sending service in production
  console.log("📬 Contact form submission:\n", body);

  // TODO: send to site.contact.email using your preferred email service
  // e.g. Resend: await resend.emails.send({ from: "...", to: site.contact.email, ... })

  return NextResponse.json({ ok: true });
}
