"use client";

import { useEffect, useState } from "react";
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

const INTERVAL = 6000;

/**
 * Borgir á forsíðu: stór myndarammi til vinstri sýnir valda borg, listi til hægri.
 * Borgirnar rúlla sjálfkrafa; bendill eða fókus yfir borg í listanum velur hana og
 * stoppar rúllið á meðan. Skipt er með mjúkri útfellingu.
 */
export default function CityShowcase({ cities }: { cities: ShowcaseCity[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const current = cities[active];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Sjálfvirkt rúll – endurstillist þegar notandi velur sjálfur (active breytist)
  useEffect(() => {
    if (paused || reduceMotion || cities.length < 2) return;
    const id = setInterval(() => setActive((a) => (a + 1) % cities.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused, reduceMotion, cities.length, active]);

  const running = !paused && !reduceMotion;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-stretch"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Stóri ramminn */}
      <Link
        href={current.href}
        className="group relative block lg:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden bg-ink-soft aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(340px,50svh,540px)]"
        aria-label={current.cta}
        aria-live="polite"
      >
        {cities.map((c, i) => (
          <Image
            key={c.slug}
            src={c.image}
            alt={i === active ? c.imageAlt : ""}
            fill
            quality={85}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className={`object-cover transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== active}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />

        <div key={current.slug} className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8 lg:p-9 animate-fade-up">
          <span className="text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-sand">{current.eyebrow}</span>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.05] text-white text-balance">
            {current.title}
          </h3>
          <p className="mt-2.5 text-white/75 text-sm md:text-[15px] leading-relaxed max-w-lg line-clamp-2">{current.lead}</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-2.5 text-sm font-semibold group-hover:bg-sand-light transition-colors">
            {current.cta} <ArrowIcon className="w-4 h-4" />
          </span>
        </div>

        {/* Punktar sem sýna hvar rúllið er */}
        <div className="absolute top-4 right-4 md:top-5 md:right-5 flex items-center gap-1.5" aria-hidden>
          {cities.map((c, i) => (
            <span key={c.slug} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/40"}`} />
          ))}
        </div>
      </Link>

      {/* Listi */}
      <ul className="lg:col-span-5 flex flex-col gap-2 lg:h-[clamp(340px,50svh,540px)]" role="list">
        {cities.map((c, i) => {
          const on = i === active;
          return (
            <li key={c.slug} className="lg:flex-1 lg:min-h-0">
              <Link
                href={c.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group relative flex h-full items-center gap-3.5 md:gap-4 rounded-2xl border px-3.5 py-3 md:px-4 lg:py-2 overflow-hidden transition-colors ${
                  on ? "bg-white/10 border-white/20" : "bg-white/[0.03] border-white/10 hover:bg-white/8 hover:border-white/15"
                }`}
              >
                <span className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl overflow-hidden bg-ink-soft">
                  <Image src={c.image} alt="" fill quality={85} sizes="96px" className="object-cover" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline gap-2.5">
                    <span className="text-[11px] font-display tabular-nums text-white/40 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-base sm:text-lg md:text-xl font-medium tracking-tight leading-tight text-white">{c.title}</span>
                  </span>
                  <span className="mt-0.5 text-[13px] md:text-sm text-white/55 leading-snug line-clamp-1">{c.lead}</span>
                </span>
                <ArrowIcon className={`w-5 h-5 shrink-0 transition-colors ${on ? "text-white" : "text-white/35"}`} />

                {/* Tímalína: fyllist á meðan beðið er eftir næstu borg */}
                {on && (
                  <span className="absolute left-4 right-4 bottom-0 h-[2px] rounded-full bg-white/15 overflow-hidden" aria-hidden>
                    <span
                      key={`${active}-${running}`}
                      className="block h-full bg-white animate-progress"
                      style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: running ? "running" : "paused" }}
                    />
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
