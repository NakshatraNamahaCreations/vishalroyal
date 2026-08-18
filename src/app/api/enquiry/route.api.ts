import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export type EnquiryPayload = {
  name: string;
  phone: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  guests?: string;
  source?: string;
  message?: string;
};

// Only name + phone are mandatory — the popup form is deliberately short.
// The full contact-page form still collects and sends the rest.
const REQUIRED: (keyof EnquiryPayload)[] = ["name", "phone"];

// The static site (Hostinger) and this API (Vercel) live on different
// origins, so responses need CORS headers for the browser to accept them.
// Set ALLOWED_ORIGIN on Vercel to lock this down to the Hostinger domain.
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "*";
const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Gmail SMTP requires an App Password (Google Account → Security →
// 2-Step Verification → App passwords), not the regular account password.
function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD env vars are required");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

const FIELD_LABELS: Record<keyof EnquiryPayload, string> = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  eventType: "Event type",
  eventDate: "Event date",
  guests: "Guests",
  source: "Source",
  message: "Message",
};

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

function renderEmail(body: EnquiryPayload) {
  const rows = (Object.keys(FIELD_LABELS) as (keyof EnquiryPayload)[])
    .map((k) => [FIELD_LABELS[k], body[k]] as const)
    .filter(([, v]) => v && String(v).trim());

  const text = rows.map(([label, v]) => `${label}: ${v}`).join("\n");
  const html = `<table style="border-collapse:collapse;font-family:system-ui,sans-serif">${rows
    .map(
      ([label, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top"><strong>${label}</strong></td><td style="padding:6px 0">${escapeHtml(String(v))}</td></tr>`,
    )
    .join("")}</table>`;
  return { text, html };
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: Request) {
  let body: Partial<EnquiryPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400, headers: corsHeaders },
    );
  }

  const missing = REQUIRED.filter((field) => !String(body[field] ?? "").trim());
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Please fill in: ${missing.join(", ")}.` },
      { status: 400, headers: corsHeaders },
    );
  }

  if (!/^[\d\s+()-]{8,15}$/.test(String(body.phone))) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400, headers: corsHeaders },
    );
  }

  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400, headers: corsHeaders },
    );
  }

  const payload = body as EnquiryPayload;
  const { text, html } = renderEmail(payload);
  const subject = `New enquiry from ${payload.name}${payload.eventType ? ` — ${payload.eventType}` : ""}`;

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Vishal Royal Enquiries" <${process.env.GMAIL_USER}>`,
      to: process.env.ENQUIRY_TO ?? process.env.GMAIL_USER!,
      // Replying in Gmail goes straight back to the customer.
      ...(payload.email ? { replyTo: payload.email } : {}),
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("[enquiry] mail send failed", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Couldn't send your enquiry right now. Please call us directly.",
      },
      { status: 500, headers: corsHeaders },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Thank you! We've received your enquiry and will call you shortly.",
    },
    { headers: corsHeaders },
  );
}
