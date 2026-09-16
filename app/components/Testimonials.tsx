"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials as defaultTestimonials } from "../data/site";
import { ArrowIcon } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

const INTERVAL = 6000;
const pad = (n: number) => String(n).padStart(2, "0");
const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

type Item = (typeof defaultTestimonials)[number];
type Tone = "light" | "dark";

/**
 * Umsagnir: öll kortin liggja í sama reit, aðeins virka kortið er sýnilegt og skipt er
 * með hreinni útfellingu. Rúllar sjálfkrafa; stoppar þegar bendill er yfir.
 */
export default function Testimonials({ tone = "dark", items }: { tone?: Tone; items?: Item[] }) {
  const dark = tone === "dark";
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

  return (
    <div
      className="mx-auto max-w-[1400px] px-5 md:px-10"
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
      <RevealOnScroll>
        <div className="text-center mb-6 md:mb-8">
          <span className={`text-xs font-medium tracking-[0.2em] uppercase ${dark ? "text-sand" : "text-gold"}`}>Umsagnir</span>
          <h2 className={`mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] ${dark ? "text-white" : ""}`}>
            Það sem gestir okkar segja
          </h2>
          <p className={`mt-4 max-w-md mx-auto ${dark ? "text-white/60" : "text-ink/55"}`}>
            Umsagnir frá gestum sem hafa ferðast með Bella Italia til Rómar og dvalið í villum um alla Ítalíu.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="max-w-2xl mx-auto" aria-roledescription="carousel" aria-label="Umsagnir gesta">
          {/* Öll kortin í sama reit – hæðin fylgir hæsta kortinu svo ekkert hoppar */}
          <div className="grid">
            {list.map((t, i) => {
              const on = i === index;
              return (
                <figure
                  key={`${t.name}-${i}`}
                  aria-hidden={!on}
                  className={`col-start-1 row-start-1 w-full rounded-3xl p-6 sm:p-7 transition-opacity duration-500 ease-out ${
                    on ? "opacity-100" : "opacity-0 pointer-events-none"
                  } ${
                    dark
                      ? "bg-ink-soft/85 backdrop-blur-md border border-white/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"
                      : "bg-white border border-ink/5 shadow-[0_24px_60px_-24px_rgba(7,21,23,0.25)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span aria-hidden className="font-display text-5xl leading-[0.6] text-gold">
                      &ldquo;
                    </span>
                    <span className={`text-xs font-display tabular-nums ${dark ? "text-white/40" : "text-ink/40"}`}>
                      {pad(i + 1)} / {pad(total)}
                    </span>
                  </div>
                  <blockquote className={`mt-5 text-[15px] sm:text-base leading-relaxed ${dark ? "text-white/85" : "text-ink/80"}`}>
                    <p>{t.text}</p>
                  </blockquote>
                  <figcaption className={`mt-6 pt-5 border-t flex items-center gap-3 ${dark ? "border-white/10" : "border-ink/5"}`}>
                    <span
                      aria-hidden
                      className={`w-11 h-11 shrink-0 rounded-full text-sm font-semibold flex items-center justify-center ${
                        dark ? "bg-white/10 text-gold-light" : "bg-forest/10 text-forest"
                      }`}
                    >
                      {initials(t.name)}
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-sm font-semibold ${dark ? "text-white" : "text-ink"}`}>{t.name}</span>
                      <span className={`block text-xs mt-0.5 ${dark ? "text-white/50" : "text-ink/50"}`}>{t.trip}</span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Stýring: fyrri / næsta og tímalínubútar sem fyllast fram að næstu umsögn */}
          <div className="mt-5 md:mt-6 flex justify-center">
            <div
              className={`inline-flex items-center rounded-full p-1.5 border ${
                dark ? "bg-white/10 border-white/10 backdrop-blur-md" : "bg-white border-ink/5 shadow-[0_12px_32px_-14px_rgba(7,21,23,0.25)]"
              }`}
            >
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Fyrri umsögn"
                className={`group w-10 h-10 rounded-full transition-colors flex items-center justify-center ${
                  dark ? "text-white/70 hover:bg-white hover:text-ink" : "text-ink/55 hover:bg-ink hover:text-white"
                }`}
              >
                <ArrowIcon className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <div className="flex items-center gap-1.5 px-3" role="tablist" aria-label="Veldu umsögn">
                {list.map((t, i) => {
                  const on = i === index;
                  const track = dark ? "bg-white/25" : "bg-ink/15";
                  return (
                    <button
                      key={`${t.name}-${i}`}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      aria-label={`Umsögn ${i + 1}: ${t.name}`}
                      onClick={() => setIndex(i)}
                      className="group/seg py-2.5"
                    >
                      <span
                        className={`relative block h-[3px] rounded-full overflow-hidden transition-[width,background-color] duration-300 ${
                          on ? `w-8 ${track}` : `w-3 ${track} ${dark ? "group-hover/seg:bg-white/50" : "group-hover/seg:bg-ink/35"}`
                        }`}
                      >
                        {on && (
                          <span
                            key={`${index}-${running}`}
                            className={`absolute inset-0 rounded-full animate-progress ${dark ? "bg-white" : "bg-ink"}`}
                            style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: running ? "running" : "paused" }}
                          />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Næsta umsögn"
                className={`group w-10 h-10 rounded-full transition-colors flex items-center justify-center ${
                  dark ? "text-white/70 hover:bg-white hover:text-ink" : "text-ink/55 hover:bg-ink hover:text-white"
                }`}
              >
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
