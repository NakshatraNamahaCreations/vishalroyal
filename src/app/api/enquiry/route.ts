import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  let body: Partial<EnquiryPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED.filter((field) => !String(body[field] ?? "").trim());
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Please fill in: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  if (!/^[\d\s+()-]{8,15}$/.test(String(body.phone))) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // TODO: wire this to however you want to receive enquiries — e.g. Resend/Nodemailer
  // for email, a Google Sheet, or your CRM. For now it's logged server-side so the
  // form is fully functional out of the box.
  console.log("[enquiry]", {
    receivedAt: new Date().toISOString(),
    ...body,
  });

  return NextResponse.json({
    ok: true,
    message: "Thank you! We've received your enquiry and will call you shortly.",
  });
}
