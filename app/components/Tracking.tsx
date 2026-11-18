"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { CONSENT_KEY, CONSENT_OPEN_EVENT, PIXEL_ID_RE, TRACKING_READY_EVENT, trackContact } from "../lib/track";

/*
 * Vercel Web Analytics (engar vafrakökur, alltaf virkt) og Meta Pixel (auðkennið kemur úr /admin, „Mæling“).
 * Ekkert er sótt frá Meta fyrr en gesturinn hefur samþykkt vafrakökur (krafa á EES-svæðinu) –
 * þangað til birtist lítill borði neðst á síðunni. Án Pixels er enginn borði.
 */

/** null = gesturinn hefur ekki valið · undefined = ekki vitað enn (á þjóninum) */
type Consent = "granted" | "denied" | null;

const CONSENT_CHANGE_EVENT = "bella:consent-change";
/** Varaleið ef vafrinn leyfir ekki localStorage (einkagluggi) */
let memoryConsent: Consent = null;

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : memoryConsent;
  } catch {
    return memoryConsent;
  }
}

function subscribeConsent(onChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function loadScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function startPixel(id: string) {
  if (window.fbq) return;
  type Q = NonNullable<Window["fbq"]>;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue!.push(args);
  } as Q;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = window._fbq ?? fbq;
  loadScript("https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", id);
  // Pixelinn telur sjálfur flettingar innan síðunnar eftir þetta
  fbq("track", "PageView");
}

export default function Tracking({ pixelId }: { pixelId: string }) {
  const pixel = PIXEL_ID_RE.test(pixelId) ? pixelId : "";
  // Stjórnborðið er ekki mælt og sýnir engan borða
  const inAdmin = usePathname().startsWith("/admin");
  const enabled = Boolean(pixel) && !inAdmin;

  // Val gestsins er lesið úr vafranum (ekki til á þjóninum, þar er það „óþekkt“)
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => undefined);
  const [reopened, setReopened] = useState(false);
  const open = reopened || consent === null;

  // Leyfa fætinum að opna borðann aftur
  useEffect(() => {
    if (!enabled) return;
    const reopen = () => setReopened(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    document.documentElement.dataset.tracking = "on";
    window.dispatchEvent(new Event(TRACKING_READY_EVENT));
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, [enabled]);

  // Ræsa mælingu þegar samþykki liggur fyrir
  useEffect(() => {
    if (!enabled || consent !== "granted") return;
    startPixel(pixel);
  }, [enabled, consent, pixel]);

  // Smellir á síma, netfang og WhatsApp
  useEffect(() => {
    if (inAdmin) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      const href = a?.getAttribute("href") ?? "";
      if (href.startsWith("https://wa.me/")) trackContact("whatsapp");
      else if (href.startsWith("tel:")) trackContact("phone");
      else if (href.startsWith("mailto:")) trackContact("email");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [inAdmin]);

  const choose = (value: "granted" | "denied") => {
    const revoked = consent === "granted" && value === "denied";
    memoryConsent = value;
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* einkagluggi – valið gildir þá bara út þessa heimsókn */
    }
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setReopened(false);
    // Skriptur sem þegar eru hlaðnar hætta ekki fyrr en síðan er sótt aftur
    if (revoked) window.location.reload();
  };

  // Stjórnborðið er ekki talið með í heimsóknum
  const analytics = <Analytics beforeSend={(e) => (new URL(e.url).pathname.startsWith("/admin") ? null : e)} />;

  if (!enabled || !open) return analytics;

  return (
    <>
      {analytics}
      <div
        role="dialog"
        aria-label="Vafrakökur"
        className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl border border-white/15 bg-ink-soft/95 backdrop-blur p-4 sm:p-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
      >
        <p className="text-sm leading-relaxed text-white/80">
          Við notum vafrakökur til að mæla umferð og sjá hvaða auglýsingar skila sér. Engar slíkar kökur eru
          settar nema þú samþykkir.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-sand-light transition-colors"
          >
            Samþykkja
          </button>
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Hafna
          </button>
        </div>
      </div>
    </>
  );
}
