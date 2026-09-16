"use client";

import { useState, type FormEvent } from "react";
import { site, tours, villaRegions, villaServices } from "../data/site";
import { CheckIcon, WhatsAppIcon } from "./Icons";

type Variant = "rom" | "villur" | "almenn" | "borg";

type Props = {
  variant: Variant;
  /** Fyrirfram valin ferð (t.d. þegar smellt er á „Bóka“ á korti) */
  defaultTour?: string;
  /** Fyrirfram valinn áhugi í almennu formi */
  defaultInterest?: string;
  /** Fyrir „borg“: nafn borgar og þjónusta sem hægt er að velja */
  destination?: string;
  options?: string[];
  compact?: boolean;
};

export const interestOptions = [
  "Villa á Ítalíu",
  "Villa + borgarferð (samsett ferð)",
  "Róm – ferðir og upplifanir",
  "Flórens",
  "Napoli · Amalfi · Pompei",
  "Feneyjar",
  "Brúðkaup / sérstakt tilefni",
  "Annað",
];

const field =
  "w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-light focus:ring-4 focus:ring-white/10 transition";
const label = "text-sm font-medium text-white/80";
const hint = "text-xs text-white/45";
const pill =
  "cursor-pointer select-none rounded-full border border-white/15 bg-white/8 px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-white/40 peer-checked:bg-white peer-checked:border-white peer-checked:text-ink peer-focus-visible:ring-4 peer-focus-visible:ring-white/20";

export default function InquiryForm({
  variant,
  defaultTour,
  defaultInterest,
  destination,
  options = [],
  compact = false,
}: Props) {
  const [sent, setSent] = useState(false);
  const [regionError, setRegionError] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const getAll = (k: string) => data.getAll(k).map(String).filter(Boolean);

    const lines: string[] = [];
    const subjectParts: string[] = ["Fyrirspurn frá bellaitalia.is"];

    lines.push(`Nafn: ${get("nafn")}`);
    lines.push(`Netfang: ${get("netfang")}`);
    if (get("simi")) lines.push(`Sími: ${get("simi")}`);

    if (variant === "rom") {
      lines.push(`Ferð / viðburður: ${get("vidburdur")}`);
      if (get("dagsetning")) lines.push(`Dagsetning: ${get("dagsetning")}`);
      if (get("fjoldi")) lines.push(`Fjöldi: ${get("fjoldi")}`);
      subjectParts.push("Róm", get("vidburdur"));
    }

    if (variant === "villur") {
      const regions = getAll("svaedi");
      if (regions.length === 0) {
        setRegionError(true);
        document.getElementById("villur-svaedi")?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      lines.push(`Dagsetningar / vikur: ${get("dagsetningar")}`);
      lines.push(`Fullorðnir: ${get("fullordnir")}`);
      lines.push(`Börn 2–17 ára: ${get("born")}`);
      lines.push(`Börn undir 2 ára: ${get("born2")}`);
      lines.push(`Svæði: ${regions.join(", ")}`);
      const extras = getAll("thjonusta");
      if (extras.length) lines.push(`Viðbótarþjónusta: ${extras.join(", ")}`);
      if (get("verdhugmynd")) lines.push(`Verðhugmynd fyrir vikudvöl: ${get("verdhugmynd")}`);
      subjectParts.push("Villa", regions.join(" / "));
    }

    if (variant === "borg") {
      lines.push(`Borg: ${destination ?? ""}`);
      lines.push(`Þjónusta: ${get("thjonusta")}`);
      if (get("dagsetning")) lines.push(`Dagsetningar: ${get("dagsetning")}`);
      if (get("fjoldi")) lines.push(`Fjöldi: ${get("fjoldi")}`);
      subjectParts.push(destination ?? "Borg", get("thjonusta"));
    }

    if (variant === "almenn") {
      lines.push(`Áhugi: ${get("ahugi")}`);
      if (get("dagsetning")) lines.push(`Hvenær: ${get("dagsetning")}`);
      if (get("fjoldi")) lines.push(`Fjöldi: ${get("fjoldi")}`);
      subjectParts.push(get("ahugi"));
    }

    if (get("skilabod")) lines.push("", "Skilaboð:", get("skilabod"));

    const subject = encodeURIComponent(subjectParts.filter(Boolean).join(" · "));
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-leaf/20 text-leaf mb-6">
          <CheckIcon className="w-7 h-7" />
        </div>
        <h3 className="font-display text-3xl font-medium tracking-tight">Takk fyrir!</h3>
        <p className="mt-3 max-w-md mx-auto leading-relaxed text-white/60">
          Tölvupóstforritið þitt ætti að hafa opnast með fyrirspurninni. Ef ekki, sendu okkur
          línu beint á{" "}
          <a href={`mailto:${site.email}`} className="text-gold-light underline underline-offset-4">
            {site.email}
          </a>{" "}
          eða á WhatsApp.
        </p>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest text-white px-7 py-3.5 text-sm font-semibold hover:bg-forest-deep transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" /> Senda á WhatsApp
        </a>
      </div>
    );
  }

  const id = (k: string) => `${variant}-${k}`;

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5" noValidate={false}>
      <div className="flex flex-col gap-2">
        <label htmlFor={id("nafn")} className={label}>Nafn *</label>
        <input id={id("nafn")} name="nafn" type="text" required autoComplete="name" placeholder="Fullt nafn" className={field} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={id("netfang")} className={label}>Netfang *</label>
        <input id={id("netfang")} name="netfang" type="email" required autoComplete="email" placeholder="netfang@daemi.is" className={field} />
      </div>

      {/* ───────────── RÓM ───────────── */}
      {variant === "rom" && (
        <>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="rom-vidburdur" className={label}>Velja viðburð *</label>
            <select id="rom-vidburdur" name="vidburdur" required defaultValue={defaultTour ?? ""} className={`${field} cursor-pointer`}>
              <option value="" disabled>Veldu ferð eða þjónustu…</option>
              {tours.map((t) => (
                <option key={t.id} value={t.title}>{t.title}</option>
              ))}
              <option value="Annað / sérsniðin ferð">Annað / sérsniðin ferð</option>
            </select>
          </div>
          {!compact && (
            <>
              <div className="flex flex-col gap-2">
                <label htmlFor="rom-dagsetning" className={label}>Dagsetning (ef vitað)</label>
                <input id="rom-dagsetning" name="dagsetning" type="text" placeholder="t.d. 12.–15. maí" className={field} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="rom-fjoldi" className={label}>Fjöldi í hóp</label>
                <input id="rom-fjoldi" name="fjoldi" type="text" placeholder="t.d. 2 fullorðnir, 2 börn" className={field} />
              </div>
            </>
          )}
        </>
      )}

      {/* ───────────── VILLUR ───────────── */}
      {variant === "villur" && (
        <>
          <div className="flex flex-col gap-2">
            <label htmlFor="villur-simi" className={label}>Símanúmer</label>
            <input id="villur-simi" name="simi" type="tel" autoComplete="tel" placeholder="t.d. 869 4556" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="villur-dagsetningar" className={label}>Dagsetningar / vikur *</label>
            <input id="villur-dagsetningar" name="dagsetningar" type="text" required placeholder="t.d. 5.–12. júlí 2026" className={field} />
          </div>

          <fieldset className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-3xl bg-white/5 border border-white/10 p-4 sm:p-5">
            <legend className="sr-only">Fjöldi í hóp</legend>
            <div className="flex flex-col gap-2">
              <label htmlFor="villur-fullordnir" className={label}>Fullorðnir *</label>
              <input id="villur-fullordnir" name="fullordnir" type="number" inputMode="numeric" min={1} max={40} required placeholder="t.d. 6" className={`${field} bg-white/10`} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="villur-born" className={label}>Börn 2–17 ára *</label>
              <input id="villur-born" name="born" type="number" inputMode="numeric" min={0} max={40} required placeholder="0" className={`${field} bg-white/10`} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="villur-born2" className={label}>Börn undir 2 ára *</label>
              <input id="villur-born2" name="born2" type="number" inputMode="numeric" min={0} max={20} required placeholder="0" className={`${field} bg-white/10`} />
              <span className={hint}>Skrifið 0 ef engin. Börn undir 2 ára þurfa oftast ekki eigið rúm.</span>
            </div>
          </fieldset>

          <div id="villur-svaedi" className="flex flex-col gap-3 md:col-span-2 scroll-mt-32">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className={label}>Hvaða svæði? * <span className="font-normal text-white/45">(hakaðu við eitt eða fleiri)</span></span>
              {regionError && <span className="text-sm font-medium text-red-400">Veldu að minnsta kosti eitt svæði</span>}
            </div>
            <div className={`flex flex-wrap gap-2 ${regionError ? "rounded-2xl ring-2 ring-red-400/60 p-2 -m-2" : ""}`}>
              {villaRegions.map((r) => (
                <label key={r} className="relative">
                  <input type="checkbox" name="svaedi" value={r} className="peer sr-only" onChange={() => setRegionError(false)} />
                  <span className={`inline-flex ${pill}`}>{r}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:col-span-2">
            <span className={label}>Áhugi á viðbótarþjónustu <span className="font-normal text-white/45">(valfrjálst)</span></span>
            <div className="flex flex-wrap gap-2">
              {villaServices.map((s) => (
                <label key={s.id} className="relative">
                  <input type="checkbox" name="thjonusta" value={s.title} className="peer sr-only" />
                  <span className={`inline-flex ${pill}`}>{s.title}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="villur-verd" className={label}>Verðhugmynd fyrir vikudvöl</label>
            <input id="villur-verd" name="verdhugmynd" type="text" placeholder="t.d. €3.000 – €4.000" className={field} />
          </div>
        </>
      )}

      {/* ───────────── BORG (Flórens, Feneyjar, Napoli…) ───────────── */}
      {variant === "borg" && (
        <>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="borg-thjonusta" className={label}>Hvað hefur þú áhuga á í {destination}? *</label>
            <select id="borg-thjonusta" name="thjonusta" required defaultValue="" className={`${field} cursor-pointer`}>
              <option value="" disabled>Veldu þjónustu…</option>
              {options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
              <option value="Heildarskipulagning dvalar">Heildarskipulagning dvalar</option>
              <option value="Annað">Annað</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="borg-dagsetning" className={label}>Dagsetningar</label>
            <input id="borg-dagsetning" name="dagsetning" type="text" placeholder="t.d. 3.–6. október" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="borg-fjoldi" className={label}>Fjöldi í hóp</label>
            <input id="borg-fjoldi" name="fjoldi" type="text" placeholder="t.d. 2 fullorðnir, 2 börn" className={field} />
          </div>
        </>
      )}

      {/* ───────────── ALMENN ───────────── */}
      {variant === "almenn" && (
        <>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="almenn-ahugi" className={label}>Hvað hefur þú áhuga á? *</label>
            <select id="almenn-ahugi" name="ahugi" required defaultValue={defaultInterest ?? ""} className={`${field} cursor-pointer`}>
              <option value="" disabled>Veldu…</option>
              {interestOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="almenn-dagsetning" className={label}>Hvenær?</label>
            <input id="almenn-dagsetning" name="dagsetning" type="text" placeholder="t.d. júní 2026" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="almenn-fjoldi" className={label}>Fjöldi í hóp</label>
            <input id="almenn-fjoldi" name="fjoldi" type="text" placeholder="t.d. 4 fullorðnir, 2 börn" className={field} />
          </div>
        </>
      )}

      {!compact && (
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor={id("skilabod")} className={label}>Skilaboð</label>
          <textarea id={id("skilabod")} name="skilabod" rows={4} placeholder="Segðu okkur aðeins frá ferðinni sem þig dreymir um…" className={`${field} resize-y`} />
        </div>
      )}

      <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-forest text-white px-8 py-4 text-sm font-semibold hover:bg-forest-deep transition-colors w-full sm:w-auto"
        >
          Senda fyrirspurn
        </button>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-medium text-white hover:bg-white hover:text-ink transition-colors w-full sm:w-auto"
        >
          <WhatsAppIcon className="w-4 h-4" /> eða WhatsApp
        </a>
        <p className="sm:ml-auto text-xs text-white/45 text-center sm:text-right">
          Það kostar ekkert að fá tilboð.
          <br className="hidden sm:block" /> Við svörum yfirleitt innan sólarhrings.
        </p>
      </div>
    </form>
  );
}
