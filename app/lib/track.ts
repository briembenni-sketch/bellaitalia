/**
 * Mæling (Google Analytics 4 + Meta Pixel). Hjálparföll sem má kalla hvaðan sem er í vafranum:
 * þau gera ekkert ef mæling er ekki uppsett eða gesturinn hefur ekki samþykkt vafrakökur.
 */

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    fbq?: Fbq & { queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown; callMethod?: (...a: unknown[]) => void };
    _fbq?: unknown;
  }
}

/** Samþykki gestsins geymt í vafranum. */
export const CONSENT_KEY = "bella_consent";
/** Sent á window til að opna vafrakökuborðann aftur (t.d. úr fæti síðunnar). */
export const CONSENT_OPEN_EVENT = "bella:consent-open";
/** Sent á window þegar mæling er uppsett á síðunni, svo fóturinn geti sýnt „Vafrakökur“. */
export const TRACKING_READY_EVENT = "bella:tracking-ready";

export const GA_ID_RE = /^G-[A-Z0-9]{4,20}$/;
export const PIXEL_ID_RE = /^\d{6,20}$/;

/** Fyrirspurn send af síðunni – aðalmarkmiðið (conversion) í auglýsingum. */
export function trackLead(form: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", { form_name: form });
  window.fbq?.("track", "Lead", { content_name: form });
}

/** Gestur smellti á síma, netfang eða WhatsApp. */
export function trackContact(method: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "contact", { method });
  window.fbq?.("track", "Contact", { method });
}
