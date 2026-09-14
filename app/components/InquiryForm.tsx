"use client";

import { useState, type FormEvent } from "react";
import { site, tours, villaRegions } from "../data/site";
import { CheckIcon, WhatsAppIcon } from "./Icons";

type Variant = "rom" | "villur" | "almenn";

type Props = {
  variant: Variant;
  /** Fyrirfram valin ferð (t.d. þegar smellt er á „Bóka“ á korti) */
  defaultTour?: string;
  compact?: boolean;
};

const field =
  "w-full rounded-2xl border border-ink/10 bg-mist px-4 py-3.5 text-ink placeholder:text-ink/35 focus:outline-none focus:border-forest focus:ring-4 focus:ring-forest/10 transition";
const label = "text-sm font-medium text-ink/80";

export default function InquiryForm({ variant, defaultTour, compact = false }: Props) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines: string[] = [];
    const subjectParts: string[] = ["Fyrirspurn frá bellaitalia.is"];

    lines.push(`Nafn: ${get("nafn")}`);
    lines.push(`Netfang: ${get("netfang")}`);

    if (variant === "rom") {
      lines.push(`Ferð / viðburður: ${get("vidburdur")}`);
      if (get("dagsetning")) lines.push(`Dagsetning: ${get("dagsetning")}`);
      if (get("fjoldi")) lines.push(`Fjöldi: ${get("fjoldi")}`);
      subjectParts.push("Róm", get("vidburdur"));
    }

    if (variant === "villur") {
      lines.push(`Dagsetningar / vikur: ${get("dagsetningar")}`);
      lines.push(`Fullorðnir og börn (aldur): ${get("hopur")}`);
      lines.push(`Svæði: ${get("svaedi")}`);
      if (get("verdhugmynd")) lines.push(`Verðhugmynd fyrir vikudvöl: ${get("verdhugmynd")}`);
      subjectParts.push("Villa", get("svaedi"));
    }

    if (variant === "almenn") {
      lines.push(`Áhugi: ${get("ahugi")}`);
      if (get("dagsetning")) lines.push(`Hvenær: ${get("dagsetning")}`);
      if (get("fjoldi")) lines.push(`Fjöldi: ${get("fjoldi")}`);
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
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-leaf/15 text-forest mb-6">
          <CheckIcon className="w-7 h-7" />
        </div>
        <h3 className="font-display text-3xl font-medium tracking-tight">Takk fyrir!</h3>
        <p className="mt-3 max-w-md mx-auto leading-relaxed text-ink/60">
          Tölvupóstforritið þitt ætti að hafa opnast með fyrirspurninni. Ef ekki, sendu okkur
          línu beint á{" "}
          <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-4">
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

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={`${variant}-nafn`} className={label}>Nafn *</label>
        <input id={`${variant}-nafn`} name="nafn" type="text" required autoComplete="name" placeholder="Fullt nafn" className={field} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${variant}-netfang`} className={label}>Netfang *</label>
        <input id={`${variant}-netfang`} name="netfang" type="email" required autoComplete="email" placeholder="netfang@daemi.is" className={field} />
      </div>

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

      {variant === "villur" && (
        <>
          <div className="flex flex-col gap-2">
            <label htmlFor="villur-dagsetningar" className={label}>Hvaða dagsetningar / vikur eruð þið að skoða? *</label>
            <input id="villur-dagsetningar" name="dagsetningar" type="text" required placeholder="t.d. 5.–12. júlí 2026" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="villur-hopur" className={label}>Hvað eru margir fullorðnir og börn (aldur)? *</label>
            <input id="villur-hopur" name="hopur" type="text" required placeholder="t.d. 6 fullorðnir, 3 börn (4, 8, 12)" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="villur-svaedi" className={label}>Hvaða svæði? *</label>
            <select id="villur-svaedi" name="svaedi" required defaultValue="" className={`${field} cursor-pointer`}>
              <option value="" disabled>Veldu svæði…</option>
              {villaRegions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="villur-verd" className={label}>Verðhugmynd fyrir vikudvöl</label>
            <input id="villur-verd" name="verdhugmynd" type="text" placeholder="t.d. €3.000 – €4.000" className={field} />
          </div>
        </>
      )}

      {variant === "almenn" && (
        <>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="almenn-ahugi" className={label}>Hvað hefur þú áhuga á? *</label>
            <select id="almenn-ahugi" name="ahugi" required defaultValue="" className={`${field} cursor-pointer`}>
              <option value="" disabled>Veldu…</option>
              <option>Ferðir og upplifanir í Róm</option>
              <option>Villa á Ítalíu</option>
              <option>Róm + villa (samsett ferð)</option>
              <option>Napoli · Amalfi · Capri</option>
              <option>Hópferð / sérstakt tilefni</option>
              <option>Annað</option>
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
          <label htmlFor={`${variant}-skilabod`} className={label}>Skilaboð</label>
          <textarea id={`${variant}-skilabod`} name="skilabod" rows={4} placeholder="Segðu okkur aðeins frá ferðinni sem þig dreymir um…" className={`${field} resize-y`} />
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
          className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-4 text-sm font-medium text-ink hover:bg-ink hover:text-white transition-colors w-full sm:w-auto"
        >
          <WhatsAppIcon className="w-4 h-4" /> eða WhatsApp
        </a>
        <p className="sm:ml-auto text-xs text-ink/45 text-center sm:text-right">
          Það kostar ekkert að fá tilboð.
          <br className="hidden sm:block" /> Við svörum yfirleitt innan sólarhrings.
        </p>
      </div>
    </form>
  );
}
