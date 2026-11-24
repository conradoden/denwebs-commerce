import { NextResponse } from "next/server";
import { site } from "@/content/site";

const REQUIRED = ["firstName", "lastName", "email", "company", "website", "message"];

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans don't.
  if (data.company_fax) {
    return NextResponse.json({ ok: true }); // silent accept, no email sent
  }

  for (const field of REQUIRED) {
    const v = data[field];
    if (typeof v !== "string" || !v.trim()) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  const email = String(data.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Delivery: wire Resend / Formspree / HubSpot here when credentials land.
  // Set RESEND_API_KEY + CONTACT_TO to enable Resend; otherwise the
  // submission is logged server-side (visible in hosting logs).
  if (process.env.RESEND_API_KEY) {
    const to = process.env.CONTACT_TO ?? site.email;
    const body = Object.entries(data)
      .filter(([k, v]) => k !== "company_fax" && v)
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
      .join("\n");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Denwebs Site <noreply@${new URL(site.url).hostname}>`,
        to,
        subject: `[Denwebs] ${data.auditMode === "true" ? "Audit request" : "Project inquiry"} — ${data.company}`,
        text: body,
        reply_to: email,
      }),
    });
    if (!res.ok) {
      console.error("Resend delivery failed", await res.text());
      return NextResponse.json({ error: "Delivery failed. Email us directly." }, { status: 502 });
    }
  } else {
    console.log("[contact submission]", JSON.stringify(data));
  }

  return NextResponse.json({ ok: true });
}
