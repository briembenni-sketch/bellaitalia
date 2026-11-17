"use server";

import { getContent } from "./lib/content";

export type InquiryField = { label: string; value: string };

export type InquiryInput = {
  name: string;
  /** Netfang gestsins — notað sem reply-to svo Hildur geti svarað beint */
  email: string;
  subject: string;
  /** Heiti formsins, t.d. „Villur“ eða „Róm“ */
  form: string;
  /** Svörin í þeirri röð sem þau birtast í póstinum */
  fields: InquiryField[];
  /** Hunangskrukka: falið svið sem aðeins vélmenni fylla út */
  website?: string;
};

export type InquiryResult =
  | { ok: true }
  /** "unconfigured": engin póstþjónusta stillt · "failed": sending mistókst. Í báðum tilvikum fellur formið aftur á mailto. */
  | { ok: false; reason: "unconfigured" | "invalid" | "failed" };

const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]+$/;
const oneLine = (s: string, max: number) => s.replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Hreinn texti: sama uppsetning og mailto-varaleiðin í forminu. */
function toText(form: string, fields: InquiryField[]) {
  const lines = [`Ný fyrirspurn af bellaitalia.is – ${form}`, ""];
  for (const f of fields) lines.push(`${f.label}:`, f.value, "");
  return lines.join("\n").trim();
}

/**
 * HTML-póstur í sama sniði og Hildur fékk frá gömlu Wix-síðunni: hvítt spjald á gráum grunni,
 * heiti reits í venjulegu letri og svarið feitletrað fyrir neðan. Að auki hnappur til að svara gestinum.
 */
function toHtml(form: string, email: string, subject: string, fields: InquiryField[]) {
  const font = "font-family:Helvetica,Arial,sans-serif";
  const rows = fields
    .map((f) => {
      let value = esc(f.value).replace(/\n/g, "<br>");
      if (f.value === email) value = `<a href="mailto:${esc(email)}" style="color:#125C4C;text-decoration:underline">${esc(email)}</a>`;
      return `<tr><td style="padding:8px 0;${font};font-size:16px;line-height:24px;color:#222222">${esc(f.label)}:<br><strong>${value}</strong></td></tr>`;
    })
    .join("");
  const replyHref = `mailto:${esc(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}`;
  const rule = `<tr><td style="padding:20px 0"><div style="border-bottom:1px solid #b2b2b2;font-size:0;line-height:0">&nbsp;</div></td></tr>`;

  return `<!doctype html>
<html lang="is">
<body style="margin:0;padding:0;background:#f0f0f0">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f0f0">
<tr><td align="center" style="padding:16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff">
<tr><td style="padding:40px 48px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="${font};font-size:13px;line-height:20px;letter-spacing:1.5px;text-transform:uppercase;color:#125C4C;padding-bottom:10px">Bella Italia</td></tr>
<tr><td style="${font};font-size:14px;line-height:21px;color:#222222">Gestur var að senda inn fyrirspurnarformið <strong>${esc(form)}</strong> á <a href="https://www.bellaitalia.is" style="color:#125C4C;text-decoration:none">bellaitalia.is</a></td></tr>
${rule}
<tr><td style="${font};font-size:18px;line-height:23px;color:#222222;padding-bottom:8px">Fyrirspurnin:</td></tr>
${rows}
<tr><td align="center" style="padding:24px 0 4px">
<a href="${replyHref}" style="display:inline-block;background:#125C4C;color:#ffffff;${font};font-size:16px;line-height:19px;text-decoration:none;padding:15px 36px;border-radius:8px">Svara fyrirspurn</a>
</td></tr>
${rule}
<tr><td style="${font};font-size:12px;line-height:18px;color:#757575">Þú getur líka ýtt á „Svara“ í póstforritinu – svarið fer beint á ${esc(email)}.<br>Þessi póstur var sendur sjálfkrafa af bellaitalia.is.</td></tr>
</table>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

/**
 * Sendir fyrirspurn af síðunni í tölvupósti með Resend (https://resend.com).
 * Krefst umhverfisbreytunnar RESEND_API_KEY; INQUIRY_FROM er sendandinn
 * (sjálfgefið prufusendandi Resend, sem skilar aðeins á netfang eiganda Resend-aðgangsins).
 * Viðtakandinn er alltaf netfang síðunnar — aldrei eitthvað sem kemur frá vafranum.
 */
export async function sendInquiry(input: InquiryInput): Promise<InquiryResult> {
  const name = oneLine(String(input?.name ?? ""), 120);
  const email = oneLine(String(input?.email ?? ""), 200);
  const subject = oneLine(String(input?.subject ?? ""), 200);
  const form = oneLine(String(input?.form ?? ""), 60) || "Fyrirspurn";
  const fields = (Array.isArray(input?.fields) ? input.fields : [])
    .slice(0, 30)
    .map((f) => ({ label: oneLine(String(f?.label ?? ""), 200), value: String(f?.value ?? "").trim().slice(0, 4000) }))
    .filter((f) => f.label && f.value);

  // Vélmenni fá „tókst“ án þess að neitt sé sent
  if (String(input?.website ?? "").trim()) return { ok: true };

  if (!name || !EMAIL_RE.test(email) || !subject || fields.length === 0) return { ok: false, reason: "invalid" };

  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, reason: "unconfigured" };

  const to = process.env.INQUIRY_TO ?? getContent().site.email;
  const from = process.env.INQUIRY_FROM ?? "Bella Italia <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text: toText(form, fields),
        html: toHtml(form, email, subject, fields),
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("Fyrirspurn: Resend svaraði", res.status, await res.text());
      return { ok: false, reason: "failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("Fyrirspurn: sending mistókst", err);
    return { ok: false, reason: "failed" };
  }
}
