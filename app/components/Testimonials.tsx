"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "../data/site";
import { ArrowIcon } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

const INTERVAL = 9000;
const pad = (n: number) => String(n).padStart(2, "0");

/** Leturstærð eftir lengd svo langar og stuttar umsagnir taki svipað pláss. */
const quoteSize = (len: number) =>
  len > 420
    ? "text-xl sm:text-2xl md:text-[1.8rem] md:leading-[1.3]"
    : len > 260
      ? "text-2xl sm:text-[1.7rem] md:text-[2.15rem] md:leading-[1.22]"
      : "text-2xl sm:text-3xl md:text-[2.5rem] md:leading-[1.2]";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const total = testimonials.length;

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + total) % total), [total]);

  // Sjálfvirk skipting. index er í deps svo tíminn endurstillist þegar notandi velur sjálfur.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(id);
  }, [paused, go, index]);

  const active = testimonials[index];

  return (
    <section
      aria-label="Umsagnir gesta"
      className="relative bg-forest-deep text-white overflow-hidden"
      style={{ backgroundImage: "radial-gradient(70rem 40rem at 90% -10%, rgba(18,92,76,0.85), transparent 60%)" }}
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
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28 lg:py-36">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            {/* Vinstri: fyrirsögn + nafnalisti sem leiðsögn */}
            <div className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold-light">Umsagnir</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Gestir okkar hafa orðið
              </h2>

              <div className="hidden lg:flex lg:flex-col mt-12" role="tablist" aria-label="Veldu umsögn">
                {testimonials.map((t, i) => {
                  const on = i === index;
                  return (
                    <button
                      key={t.name}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setIndex(i)}
                      className={`text-left border-l-2 pl-5 py-3 transition-colors duration-300 ${
                        on ? "border-gold-light text-white" : "border-white/10 text-white/40 hover:text-white/80"
                      }`}
                    >
                      <span className="block text-sm font-medium">{t.name}</span>
                      <span className={`block text-xs mt-0.5 transition-colors ${on ? "text-white/55" : "text-white/25"}`}>
                        {t.trip}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hægri: tilvitnun */}
            <div className="lg:col-span-8 flex flex-col">
              <span
                aria-hidden
                className="font-display text-[6rem] md:text-[8rem] leading-[0.7] text-gold-light/80 select-none mb-4 md:mb-6"
              >
                &ldquo;
              </span>

              <div className="grid">
                {testimonials.map((t, i) => {
                  const on = i === index;
                  return (
                    <blockquote
                      key={t.name}
                      aria-hidden={!on}
                      className={`col-start-1 row-start-1 transition-[opacity,transform] ease-out ${
                        on
                          ? "opacity-100 translate-y-0 duration-700 delay-150"
                          : "opacity-0 translate-y-3 duration-300 pointer-events-none"
                      }`}
                    >
                      <p className={`font-display leading-[1.28] tracking-tight text-white/95 ${quoteSize(t.text.length)}`}>
                        {t.text}
                      </p>
                      <footer className="mt-8 md:mt-10">
                        <span className="block font-medium">{t.name}</span>
                        <span className="block text-sm text-white/50 mt-1">{t.trip}</span>
                      </footer>
                    </blockquote>
                  );
                })}
              </div>

              {/* Stýring */}
              <div className="mt-10 md:mt-14 flex items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <span className="font-display text-sm tabular-nums text-white/45" aria-live="polite">
                    <span className="text-white">{pad(index + 1)}</span> / {pad(total)}
                  </span>
                  <span className="relative block h-px w-24 md:w-44 bg-white/15 overflow-hidden" aria-hidden>
                    <span
                      key={index}
                      className="absolute inset-y-0 left-0 w-full bg-gold-light animate-progress"
                      style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: paused ? "paused" : "running" }}
                    />
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label={`Fyrri umsögn (núverandi: ${active.name})`}
                    className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-forest-deep hover:border-white transition-colors flex items-center justify-center"
                  >
                    <ArrowIcon className="w-4 h-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Næsta umsögn"
                    className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-forest-deep hover:border-white transition-colors flex items-center justify-center"
                  >
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
