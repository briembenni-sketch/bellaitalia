"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { testimonials } from "../data/site";
import { ArrowIcon } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

const INTERVAL = 7000;
const SWAP_MS = 700;
const pad = (n: number) => String(n).padStart(2, "0");
const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

type Item = (typeof testimonials)[number];
type Dir = 1 | -1;

function Tape() {
  return (
    <span
      aria-hidden
      className="absolute left-1/2 -top-3.5 w-28 h-8 -translate-x-1/2 -rotate-[4deg] pointer-events-none"
      style={{ filter: "drop-shadow(0 1px 1px rgba(7,21,23,0.18))" }}
    >
      <span className="tape block w-full h-full" />
    </span>
  );
}

function Card({
  t,
  index,
  className = "",
  style,
  ref,
}: {
  t: Item;
  index: number;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}) {
  return (
    <figure
      ref={ref}
      className={`relative w-full rounded-3xl bg-white border border-ink/5 shadow-[0_24px_60px_-24px_rgba(7,21,23,0.25)] p-6 sm:p-8 md:p-10 ${className}`}
      style={style}
    >
      <Tape />
      <div className="flex items-center justify-between">
        <span
          aria-hidden
          className="font-display text-5xl leading-[0.6] text-gold"
        >
          &ldquo;
        </span>
        <span className="text-xs font-display tabular-nums text-ink/40">
          {pad(index + 1)} / {pad(testimonials.length)}
        </span>
      </div>
      <blockquote className="mt-6 text-[15px] sm:text-base md:text-lg leading-relaxed text-ink/80">
        <p>{t.text}</p>
      </blockquote>
      <figcaption className="mt-7 pt-6 border-t border-ink/5 flex items-center gap-3">
        <span
          aria-hidden
          className="w-11 h-11 shrink-0 rounded-full bg-forest/10 text-forest text-sm font-semibold flex items-center justify-center"
        >
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-ink">{t.name}</span>
          <span className="block text-xs text-ink/50 mt-0.5">{t.trip}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const total = testimonials.length;
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<{ index: number; dir: Dir } | null>(
    null,
  );
  const [paused, setPaused] = useState(false);
  const [height, setHeight] = useState<number>();
  const indexRef = useRef(0);
  const touchX = useRef<number | null>(null);
  const activeRef = useRef<HTMLElement>(null);

  const select = useCallback(
    (next: number, dir: Dir) => {
      const current = indexRef.current;
      const target = ((next % total) + total) % total;
      if (target === current) return;
      indexRef.current = target;
      setLeaving({ index: current, dir });
      setIndex(target);
    },
    [total],
  );
  const go = useCallback(
    (dir: Dir) => select(indexRef.current + dir, dir),
    [select],
  );

  // Fjarlægja fráfarandi kort þegar hreyfingunni lýkur
  useEffect(() => {
    if (!leaving) return;
    const id = setTimeout(() => setLeaving(null), SWAP_MS);
    return () => clearTimeout(id);
  }, [leaving]);

  // Hæð umgjarðar fylgir virka kortinu svo hún líði mjúklega milli umsagna
  useLayoutEffect(() => {
    const measure = () => {
      if (activeRef.current) setHeight(activeRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  // Sjálfvirk skipting; endurstillist þegar notandi velur sjálfur
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(id);
  }, [paused, go, index]);

  const dirStyle = (dir: Dir) => ({ "--dir": dir }) as React.CSSProperties;

  return (
    <div
      className="mx-auto max-w-[1400px] px-5 md:px-10 overflow-x-clip"
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
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
            Umsagnir
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
            Það sem gestir okkar segja
          </h2>
          <p className="mt-4 text-ink/55 max-w-md mx-auto">
            Umsagnir frá gestum sem hafa ferðast með Bella Italia til Rómar og
            dvalið í villum um alla Ítalíu.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div
          className="max-w-2xl mx-auto"
          aria-roledescription="carousel"
          aria-label="Umsagnir gesta"
        >
          <div className="relative pt-4">
            {/* Bunki á bak við */}
            <span
              aria-hidden
              className="absolute inset-x-8 top-4 bottom-3 rounded-3xl bg-white/60 border border-ink/5 -translate-y-3"
            />
            <span
              aria-hidden
              className="absolute inset-x-4 top-4 bottom-1 rounded-3xl bg-white/80 border border-ink/5 -translate-y-1.5"
            />

            <div className="relative card-stage" style={{ height }}>
              {leaving && (
                <Card
                  key={`out-${leaving.index}`}
                  t={testimonials[leaving.index]}
                  index={leaving.index}
                  className="absolute inset-x-0 top-0 card-out pointer-events-none"
                  style={dirStyle(leaving.dir)}
                />
              )}
              <Card
                key={`in-${index}`}
                ref={activeRef}
                t={testimonials[index]}
                index={index}
                className={leaving ? "card-in" : ""}
                style={leaving ? dirStyle(leaving.dir) : undefined}
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Fyrri umsögn"
              className="w-12 h-12 rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors flex items-center justify-center"
            >
              <ArrowIcon className="w-4 h-4 rotate-180" />
            </button>
            <div
              className="flex gap-1.5 px-2"
              role="tablist"
              aria-label="Veldu umsögn"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Umsögn ${i + 1}: ${t.name}`}
                  onClick={() => select(i, i > index ? 1 : -1)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-ink"
                      : "w-1.5 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Næsta umsögn"
              className="w-12 h-12 rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors flex items-center justify-center"
            >
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
