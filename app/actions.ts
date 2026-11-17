"use server";

import { getContent } from "./lib/content";

export type InquiryInput = {
  name: string;
  /** Netfang gestsins — notað sem reply-to svo Hildur geti svarað beint */
  email: string;
  subject: string;
  body: string;
  /** Hunangskrukka: falið svið sem aðeins vélmenni fylla út */
  website?: string;
};

export type InquiryResult =
  | { ok: true }
  /** "unconfigured": engin póstþjónusta stillt · "failed": sending mistókst. Í báðum tilvikum fellur formið aftur á mailto. */
  | { ok: false; reason: "unconfigured" | "invalid" | "failed" };

const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]+$/;
const oneLine = (s: string, max: number) => s.replace(/[\r\n\t]+/g, " ").trim().slice(0, max);

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
  const body = String(input?.body ?? "").trim().slice(0, 8000);

  // Vélmenni fá „tókst“ án þess að neitt sé sent
  if (String(input?.website ?? "").trim()) return { ok: true };

  if (!name || !EMAIL_RE.test(email) || !subject || !body) return { ok: false, reason: "invalid" };

  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, reason: "unconfigured" };

  const to = process.env.INQUIRY_TO ?? getContent().site.email;
  const from = process.env.INQUIRY_FROM ?? "Bella Italia <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, text: body }),
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
