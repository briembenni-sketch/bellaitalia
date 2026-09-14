"use client";

import { useState, type FormEvent } from "react";
import { site, tours, villaRegions } from "../data/site";
import { CheckIcon, WhatsAppIcon } from "./Icons";

type Variant = "rom" | "villur" | "almenn";

type Props = {
  variant: Variant;
  /** Fyrirfram valin ferð (t.d. þegar smellt er á „Bóka“ á korti) */
  defaultTour?: string;
  theme?: "dark" | "light";
  compact?: boolean;
};

const fieldBase =
  "w-full bg-transparent py-3 focus:outline-none transition-colors duration-300 border-b";
const darkField = `${fieldBase} border-cream/15 text-cream placeholder:text-cream/25 focus:border-gold`;
const lightField = `${fieldBase} border-brown/15 text-brown placeholder:text-brown/30 focus:border-terracotta`;

export default function InquiryForm({ variant, defaultTour, theme = "dark", compact = false }: Props) {
  const [sent, setSent] = useState(false);
  const isDark = theme === "dark";
  const field = isDark ? darkField : lightField;
  const label = `text-[11px] tracking-[0.2em] uppercase font-medium ${
    isDark ? "text-cream/40" : "text-brown/50"
  }`;
  const optionCls = isDark ? "bg-[#1C0F0A] text-cream" : "bg-white text-brown";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

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
      <div className={`text-center py-14 ${isDark ? "text-cream" : "text-brown"}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 text-gold mb-6">
          <CheckIcon className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-3xl">Grazie mille!</h3>
        <p className={`mt-3 max-w-md mx-auto leading-relaxed ${isDark ? "text-cream/60" : "text-brown/60"}`}>
          Tölvupóstforritið þitt ætti að hafa opnast með fyrirspurninni. Ef ekki, sendu
          okkur línu beint á{" "}
          <a href={`mailto:${site.email}`} className="text-gold underline underline-offset-4">
            {site.email}
          </a>{" "}
          eða á WhatsApp.
        </p>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3 border border-gold/50 text-gold text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-[#1C0F0A] transition-all"
        >
          <WhatsAppIcon className="w-4 h-4" /> Senda á WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <select id="rom-vidburdur" name="vidburdur" required defaultValue={defaultTour ?? ""} className={`${field} cursor-pointer appearance-none`}>
              <option value="" disabled className={optionCls}>Veldu ferð eða þjónustu…</option>
              {tours.map((t) => (
                <option key={t.id} value={t.title} className={optionCls}>{t.title}</option>
              ))}
              <option value="Annað / sérsniðin ferð" className={optionCls}>Annað / sérsniðin ferð</option>
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
            <select id="villur-svaedi" name="svaedi" required defaultValue="" className={`${field} cursor-pointer appearance-none`}>
              <option value="" disabled className={optionCls}>Veldu svæði…</option>
              {villaRegions.map((r) => (
                <option key={r} value={r} className={optionCls}>{r}</option>
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
            <select id="almenn-ahugi" name="ahugi" required defaultValue="" className={`${field} cursor-pointer appearance-none`}>
              <option value="" disabled className={optionCls}>Veldu…</option>
              <option className={optionCls}>Ferðir og upplifanir í Róm</option>
              <option className={optionCls}>Villa á Ítalíu</option>
              <option className={optionCls}>Róm + villa (samsett ferð)</option>
              <option className={optionCls}>Napoli · Amalfi · Capri</option>
              <option className={optionCls}>Hópferð / sérstakt tilefni</option>
              <option className={optionCls}>Annað</option>
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

      <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="submit"
          className="inline-block px-12 py-4 bg-gold text-[#1C0F0A] text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
        >
          Senda fyrirspurn
        </button>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase ${
            isDark ? "text-cream/50 hover:text-gold" : "text-brown/50 hover:text-terracotta"
          } transition-colors`}
        >
          <WhatsAppIcon className="w-4 h-4" /> eða WhatsApp
        </a>
      </div>
      <p className={`md:col-span-2 text-center text-xs ${isDark ? "text-cream/30" : "text-brown/40"}`}>
        Það kostar ekkert að fá tilboð. Við svörum yfirleitt innan sólarhrings.
      </p>
    </form>
  );
}
