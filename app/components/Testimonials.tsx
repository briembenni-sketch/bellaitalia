"use client";

import { useEffect, useState, useCallback } from "react";
import { testimonials } from "../data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 9000);
    return () => clearInterval(id);
  }, [paused, go]);

  const t = testimonials[index];

  return (
    <div
      className="relative rounded-[2rem] md:rounded-[2.5rem] bg-forest text-white p-8 md:p-14 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-leaf/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-ink/40 blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Umsagnir gesta</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium tracking-tight leading-tight">
            Það sem gestir okkar segja
          </h2>
          <div className="mt-6 flex items-center gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} className="w-5 h-5 text-gold-light" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-white/70">Facebook & Google</span>
          </div>
        </div>

        <div className="lg:col-span-8 min-h-[260px] md:min-h-[220px] flex flex-col justify-between">
          <blockquote key={index} className="animate-fade-in font-display text-xl md:text-2xl lg:text-[1.7rem] leading-snug font-light">
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <cite className="not-italic">
              <span className="block font-medium">{t.name}</span>
              <span className="text-sm text-white/60">Gestur Bella Italia</span>
            </cite>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 mr-2" role="tablist" aria-label="Umsagnir">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Umsögn ${i + 1}: ${item.name}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-7 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Fyrri umsögn"
                className="w-11 h-11 rounded-full border border-white/25 text-white hover:bg-white hover:text-forest transition-colors flex items-center justify-center"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Næsta umsögn"
                className="w-11 h-11 rounded-full border border-white/25 text-white hover:bg-white hover:text-forest transition-colors flex items-center justify-center"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
