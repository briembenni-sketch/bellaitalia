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
    const id = setInterval(() => go(1), 10000);
    return () => clearInterval(id);
  }, [paused, go]);

  const t = testimonials[index];

  return (
    <div
      className="relative rounded-[1.5rem] md:rounded-[2.5rem] bg-forest text-white p-6 sm:p-8 md:p-14 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Umsagnir</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium tracking-tight leading-tight">
            Það sem gestir okkar segja
          </h2>
          <p className="mt-3 text-sm text-white/60">{total} umsagnir frá gestum sem ferðuðust með Bella Italia.</p>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between">
          <blockquote key={index} className="animate-fade-in font-display text-lg sm:text-xl md:text-2xl lg:text-[1.6rem] leading-snug font-normal min-h-[7.5rem]">
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <cite className="not-italic font-medium">{t.name}</cite>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 mr-1" role="tablist" aria-label="Umsagnir">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Umsögn ${i + 1}: ${item.name}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-7 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
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
