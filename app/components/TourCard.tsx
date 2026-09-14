"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Tour } from "../data/site";
import { site } from "../data/site";
import { CheckIcon, ClockIcon, CloseIcon, WhatsAppIcon } from "./Icons";

type Props = { tour: Tour; tall?: boolean; dark?: boolean };

export default function TourCard({ tour, tall = false, dark = false }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        id={tour.id}
        className={`group relative overflow-hidden scroll-mt-28 ${tall ? "h-[480px] md:h-[560px]" : "h-[440px]"}`}
      >
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 transition-all duration-500 group-hover:from-black/95" />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-all duration-500" />

        <div className="absolute top-5 left-5 z-10 flex gap-2">
          <span className="px-3 py-1.5 bg-terracotta text-cream text-[10px] font-medium tracking-[0.2em] uppercase">
            {tour.tag}
          </span>
        </div>
        <div className="absolute top-5 right-5 z-10">
          <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-gold/40 text-gold text-[11px] font-semibold tracking-[0.1em]">
            {tour.priceLabel}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-7 md:p-8">
          <h3 className="font-serif text-3xl md:text-4xl text-white leading-[0.95] drop-shadow-lg">
            {tour.title}
          </h3>
          <p className="mt-3 text-white/70 text-sm leading-relaxed max-w-md line-clamp-3">
            {tour.summary}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {tour.highlights.slice(0, 3).map((h) => (
              <li key={h} className="text-[11px] tracking-wider uppercase text-gold/80 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" /> {h}
              </li>
            ))}
          </ul>
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold group-hover:tracking-[0.25em] transition-all duration-500 inline-flex items-center gap-2"
            >
              Lesa meira
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
            </button>
            <a
              href={`#fyrirspurn`}
              onClick={() => rememberTour(tour.title)}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
            >
              Bóka
            </a>
          </div>
        </div>
      </article>

      {open && <TourModal tour={tour} onClose={() => setOpen(false)} dark={dark} />}
    </>
  );
}

/** Geymir valda ferð svo fyrirspurnarformið geti forvalið hana. */
function rememberTour(title: string) {
  try {
    sessionStorage.setItem("bella-tour", title);
    window.dispatchEvent(new CustomEvent("bella-tour", { detail: title }));
  } catch {
    /* ignore */
  }
}

function TourModal({ tour, onClose }: { tour: Tour; onClose: () => void; dark?: boolean }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const d = tour.details;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-${tour.id}`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full md:max-w-4xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto bg-[#1C0F0A] text-cream shadow-2xl animate-slide-up">
        <button
          type="button"
          onClick={onClose}
          aria-label="Loka"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
        >
          <CloseIcon />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="relative h-56 md:h-auto md:min-h-[520px] md:col-span-2">
            <Image src={tour.image} alt={tour.imageAlt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A] via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          <div className="md:col-span-3 p-7 md:p-10">
            <span className="text-gold text-[11px] font-medium tracking-[0.35em] uppercase">{tour.tag}</span>
            <h2 id={`modal-${tour.id}`} className="mt-2 font-serif text-3xl md:text-4xl leading-tight">
              {tour.title}
            </h2>

            <div className="mt-6 space-y-4 text-cream/70 leading-relaxed">
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold/80">Ferðin</h3>
              {d.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {(d.schedule || d.duration) && (
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {d.schedule && (
                  <div className="border-l border-gold/40 pl-4">
                    <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold/80">Brottför</h3>
                    <ul className="mt-2 space-y-1 text-sm text-cream/80">
                      {d.schedule.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {d.duration && (
                  <div className="border-l border-gold/40 pl-4">
                    <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold/80">Lengd</h3>
                    <p className="mt-2 text-sm text-cream/80 flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-gold" /> {d.duration}
                    </p>
                  </div>
                )}
              </div>
            )}

            {d.stops && (
              <div className="mt-7">
                <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold/80">
                  {d.stops.length > 6 ? `${d.stops.length} skemmtileg stopp um alla Róm` : "Staðir"}
                </h3>
                <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-cream/80">
                  {d.stops.map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="font-serif text-gold/70 w-5 shrink-0 text-right">{i + 1}.</span> {s}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {d.included && (
              <div className="mt-7">
                <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold/80">Innifalið</h3>
                <ul className="mt-3 space-y-2 text-sm text-cream/80">
                  {d.included.map((s) => (
                    <li key={s} className="flex gap-3">
                      <CheckIcon className="w-4 h-4 mt-0.5 text-gold shrink-0" /> <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 border border-gold/25 p-5 bg-black/20">
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold/80">Kostnaður</h3>
              {tour.prices ? (
                <dl className="mt-3 space-y-2">
                  {tour.prices.map((p) => (
                    <div key={p.label} className="flex items-baseline justify-between gap-4 text-sm">
                      <dt className="text-cream/70">{p.label}</dt>
                      <dd className="font-serif text-2xl text-gold">{p.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-3 text-sm text-cream/80">{tour.priceLabel}</p>
              )}
              {d.note && <p className="mt-3 text-xs text-cream/50 leading-relaxed">{d.note}</p>}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#fyrirspurn"
                onClick={() => {
                  rememberTour(tour.title);
                  onClose();
                }}
                className="flex-1 text-center px-8 py-4 bg-gold text-[#1C0F0A] text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
              >
                Hafa samband
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/25 text-cream text-sm font-medium tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
