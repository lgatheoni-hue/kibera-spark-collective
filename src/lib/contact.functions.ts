import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  organization: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().email().max(254),
  reason: z.string().trim().min(1).max(80),
  message: z.string().trim().min(1).max(4000),
});

const RECIPIENT = "info@wimage-kenya.org";

function base64UrlEncode(input: string): string {
  // Handle unicode safely
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildRawEmail(data: {
  name: string;
  organization: string;
  email: string;
  reason: string;
  message: string;
}): string {
  const subject = `[WMAGE website] ${data.reason} — ${data.name}`;
  const textBody = [
    `New message from the WMAGE website contact form`,
    ``,
    `Name: ${data.name}`,
    `Organization: ${data.organization || "—"}`,
    `Email: ${data.email}`,
    `Reason: ${data.reason}`,
    ``,
    `Message:`,
    data.message,
  ].join("\r\n");

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;color:#111">
  <h2 style="color:#6d28d9;margin:0 0 12px">New message from the WMAGE website</h2>
  <p style="margin:0 0 16px;color:#555">Submitted via the contact form.</p>
  <table style="border-collapse:collapse;width:100%;font-size:14px">
    <tr><td style="padding:6px 8px;background:#f5f3ff;width:140px"><b>Name</b></td><td style="padding:6px 8px">${escapeHtml(data.name)}</td></tr>
    <tr><td style="padding:6px 8px;background:#f5f3ff"><b>Organization</b></td><td style="padding:6px 8px">${escapeHtml(data.organization || "—")}</td></tr>
    <tr><td style="padding:6px 8px;background:#f5f3ff"><b>Email</b></td><td style="padding:6px 8px"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
    <tr><td style="padding:6px 8px;background:#f5f3ff"><b>Reason</b></td><td style="padding:6px 8px">${escapeHtml(data.reason)}</td></tr>
  </table>
  <h3 style="margin:20px 0 8px;color:#111">Message</h3>
  <div style="white-space:pre-wrap;padding:12px;border-left:3px solid #6d28d9;background:#fafafa">${escapeHtml(data.message)}</div>
</div>`.trim();

  // Encode subject as RFC 2047 to safely include unicode/special chars
  const encodedSubject = `=?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`;
  const boundary = `wmage_${Date.now().toString(36)}`;

  const raw = [
    `To: ${RECIPIENT}`,
    `Reply-To: ${data.name} <${data.email}>`,
    `Subject: ${encodedSubject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    ``,
    `--${boundary}`,
    `Content-Type: text/plain; charset="UTF-8"`,
    `Content-Transfer-Encoding: 8bit`,
    ``,
    textBody,
    ``,
    `--${boundary}`,
    `Content-Type: text/html; charset="UTF-8"`,
    `Content-Transfer-Encoding: 8bit`,
    ``,
    htmlBody,
    ``,
    `--${boundary}--`,
    ``,
  ].join("\r\n");

  return base64UrlEncode(raw);
}

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    // 1) Save to database first so nothing is lost even if email delivery fails
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error: dbError } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      organization: data.organization || null,
      email: data.email,
      reason: data.reason,
      message: data.message,
    });
    if (dbError) {
      console.error("[contact] insert failed", dbError);
      throw new Error("Could not save your message. Please try again.");
    }

    // 2) Send email via Gmail through the Lovable connector gateway
    const lovableKey = process.env.LOVABLE_API_KEY;
    const gmailKey = process.env.GOOGLE_MAIL_API_KEY;
    if (!lovableKey || !gmailKey) {
      console.error("[contact] missing gateway credentials");
      // Message is safely stored; surface a soft success so users aren't blocked
      return { ok: true, emailed: false };
    }

    try {
      const raw = buildRawEmail({
        name: data.name,
        organization: data.organization || "",
        email: data.email,
        reason: data.reason,
        message: data.message,
      });

      const res = await fetch(
        "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": gmailKey,
          },
          body: JSON.stringify({ raw }),
        },
      );

      if (!res.ok) {
        const body = await res.text();
        console.error(`[contact] gmail send failed [${res.status}]: ${body}`);
        return { ok: true, emailed: false };
      }
    } catch (err) {
      console.error("[contact] gmail send threw", err);
      return { ok: true, emailed: false };
    }

    return { ok: true, emailed: true };
  });
