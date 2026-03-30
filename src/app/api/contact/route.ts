import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fullName, phone, email, message } = await req.json();

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiUrl = process.env.NEXT_PUBLIC_BROADSHEET_API_URL;
  if (!apiUrl) {
    return NextResponse.json({ error: "API not configured." }, { status: 500 });
  }

  const res = await fetch(`${apiUrl.replace(/\/$/, "")}/v1/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: fullName,
      emailAddress: email,
      phoneNumber: phone || "",
      content: message,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Broadsheet API error:", res.status, detail);
    return NextResponse.json({ error: "Failed to send message.", detail }, { status: res.status });
  }

  return NextResponse.json({ ok: true });
}
