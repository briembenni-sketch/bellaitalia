"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials as defaultTestimonials } from "../data/site";
import { ArrowIcon } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

const INTERVAL = 7000;
const pad = (n: number) => String(n).padStart(2, "0");

type Item = (typeof defaultTestimonials)[number];

/**
 * Umsagnir í sama anda og forsíðan: ljósmynd í bakgrunni undir dökkum lit, skrautletursfyrirsögn
 * og umsögnin sjálf í stóru letri. Allar umsagnir liggja í sama reit og skipt er með útfellingu.
 * Rúllar sjálfkrafa; stoppar þegar bendill er yfir.
 */
export default function Testimonials({
  items,
  image = "/images/gallery-04.webp",
}: {
  items?: Item[];
  image?: string;
}) {
  const list = items && items.length ? items : defaultTestimonials;
  const total = list.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Sjálfvirkt rúll – byrjar upp á nýtt þegar notandi velur sjálfur (index breytist)
  useEffect(() => {
    if (paused || reduceMotion || total < 2) return;
    const id = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(id);
  }, [paused, reduceMotion, total, go, index]);

  const running = !paused && !reduceMotion;
  const arrowBtn =
    "group w-12 h-12 rounded-full tint text-white flex items-center justify-center hover:bg-white hover:text-ink transition-colors";

  return (
    <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
      <RevealOnScroll>
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-ink-soft"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(-1);
            if (e.key === "ArrowRight") go(1);
          }}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          }}
        >
          <Image src={image} alt="" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-14">
            {/* Fyrirsögn */}
            <div className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Umsagnir</span>
              <h2 className="mt-2 -ml-1 font-script text-5xl sm:text-6xl lg:text-7xl leading-[1.1] pb-1 text-white">
                Gestirnir segja
              </h2>
              <p className="mt-4 text-sm md:text-base font-medium tracking-[0.18em] uppercase text-white/70">
                Frá fólki sem ferðaðist með okkur
              </p>
            </div>

            {/* Umsögn + stýring */}
            <div className="lg:col-span-8 flex flex-col" aria-roledescription="carousel" aria-label="Umsagnir gesta">
              {/* Allar umsagnir í sama reit – hæðin fylgir þeirri lengstu svo ekkert hoppar */}
              <div className="grid">
                {list.map((t, i) => {
                  const on = i === index;
                  return (
                    <figure
                      key={`${t.name}-${i}`}
                      aria-hidden={!on}
                      className={`col-start-1 row-start-1 transition-opacity duration-700 ease-out ${
                        on ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <span aria-hidden className="block font-display text-7xl md:text-8xl leading-[0.5] text-gold">
                        &ldquo;
                      </span>
                      <blockquote className="mt-4 font-display text-xl sm:text-2xl md:text-[1.75rem] font-medium leading-snug tracking-tight text-white text-balance">
                        <p>{t.text}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-gold-light">{t.name}</span>
                        <span className="text-sm text-white/60">{t.trip}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>

              {/* Stýring: fyrri / næsta, tímalínubútar sem fyllast fram að næstu umsögn og teljari */}
              <div className="mt-8 md:mt-10 pt-6 border-t border-white/15 flex items-center gap-4">
                <button type="button" onClick={() => go(-1)} aria-label="Fyrri umsögn" className={arrowBtn}>
                  <ArrowIcon className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Næsta umsögn" className={arrowBtn}>
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="ml-2 hidden sm:flex items-center gap-1.5" role="tablist" aria-label="Veldu umsögn">
                  {list.map((t, i) => {
                    const on = i === index;
                    return (
                      <button
                        key={`${t.name}-${i}`}
                        type="button"
                        role="tab"
                        aria-selected={on}
                        aria-label={`Umsögn ${i + 1}: ${t.name}`}
                        onClick={() => setIndex(i)}
                        className="group/seg py-3"
                      >
                        <span
                          className={`relative block h-[3px] rounded-full overflow-hidden bg-white/25 transition-[width,background-color] duration-300 ${
                            on ? "w-10" : "w-4 group-hover/seg:bg-white/50"
                          }`}
                        >
                          {on && (
                            <span
                              key={`${index}-${running}`}
                              className="absolute inset-0 rounded-full animate-progress bg-gold-light"
                              style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: running ? "running" : "paused" }}
                            />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <span className="ml-auto font-display text-sm tabular-nums text-white/50">
                  {pad(index + 1)} / {pad(total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
