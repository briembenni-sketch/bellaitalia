"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./Icons";

export type ShowcaseCity = {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  cta: string;
};

/**
 * Borgir á forsíðu: stór myndarammi til vinstri sýnir valda borg, listi til hægri.
 * Bendill (eða fókus) yfir borg í listanum skiptir myndinni og textanum með mjúkri útfellingu.
 */
export default function CityShowcase({ cities }: { cities: ShowcaseCity[] }) {
  const [active, setActive] = useState(0);
  const current = cities[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-stretch">
      {/* Stóri ramminn */}
      <Link
        href={current.href}
        className="group relative block lg:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden bg-ink-soft aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(340px,50svh,540px)]"
        aria-label={current.cta}
      >
        {cities.map((c, i) => (
          <Image
            key={c.slug}
            src={c.image}
            alt={i === active ? c.imageAlt : ""}
            fill
            quality={85}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className={`object-cover transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0"} ${
              i === active ? "group-hover:scale-[1.03] transition-transform" : ""
            }`}
            aria-hidden={i !== active}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/10" />

        <div key={current.slug} className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10 animate-fade-up">
          <span className="text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-sand">{current.eyebrow}</span>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white">
            {current.title}
          </h3>
          <p className="mt-3 text-white/75 text-[15px] md:text-base leading-relaxed max-w-lg line-clamp-2">{current.lead}</p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 text-sm font-semibold group-hover:bg-sand-light transition-colors">
            {current.cta} <ArrowIcon className="w-4 h-4" />
          </span>
        </div>
      </Link>

      {/* Listi */}
      <ul className="lg:col-span-5 flex flex-col gap-2 lg:h-[clamp(340px,50svh,540px)]" onMouseLeave={() => setActive(0)}>
        {cities.map((c, i) => {
          const on = i === active;
          return (
            <li key={c.slug} className="flex-1 min-h-0">
              <Link
                href={c.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group flex h-full items-center gap-4 rounded-2xl border px-3.5 py-2.5 md:px-4 overflow-hidden transition-colors ${
                  on ? "bg-white/10 border-white/20" : "bg-white/[0.03] border-white/10 hover:bg-white/8 hover:border-white/15"
                }`}
              >
                <span className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl overflow-hidden bg-ink-soft">
                  <Image src={c.image} alt="" fill quality={85} sizes="96px" className="object-cover" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline gap-3">
                    <span className="text-[11px] font-display tabular-nums text-white/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-lg md:text-xl font-medium tracking-tight text-white truncate">{c.title}</span>
                  </span>
                  <span className="mt-0.5 block text-sm text-white/55 leading-snug line-clamp-1">{c.lead}</span>
                </span>
                <ArrowIcon
                  className={`w-5 h-5 shrink-0 transition-all ${on ? "text-white translate-x-0 opacity-100" : "text-white/40 -translate-x-1 opacity-0 lg:opacity-100 lg:translate-x-0"}`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
