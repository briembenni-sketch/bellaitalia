"use client";

import { useEffect, useState, useCallback } from "react";
import { testimonials } from "../data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 9000);
    return () => clearInterval(id);
  }, [paused, go]);

  const t = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl text-center min-h-[300px] md:min-h-[260px] flex flex-col justify-center">
        <span
          aria-hidden="true"
          className="font-serif text-[8rem] md:text-[11rem] text-gold/15 leading-none select-none block -mb-16 md:-mb-24"
        >
          &ldquo;
        </span>
        <blockquote
          key={index}
          className="animate-fade-in font-serif text-xl md:text-2xl lg:text-3xl text-cream leading-relaxed italic px-2"
        >
          {t.text}
        </blockquote>
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="w-16 h-px bg-gold/50" />
          <cite className="not-italic text-gold text-sm tracking-[0.3em] uppercase">
            {t.name}
          </cite>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Fyrri umsögn"
          className="w-11 h-11 rounded-full border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
        >
          &larr;
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Umsagnir">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Umsögn ${i + 1}: ${item.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-gold" : "w-2 bg-cream/25 hover:bg-cream/50"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Næsta umsögn"
          className="w-11 h-11 rounded-full border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
