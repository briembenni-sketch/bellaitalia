"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Tour } from "../data/site";
import { site } from "../data/site";
import { ArrowIcon, CheckIcon, ClockIcon, CloseIcon, WhatsAppIcon } from "./Icons";

type Props = { tour: Tour; tall?: boolean };

export default function TourCard({ tour, tall = false }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        id={tour.id}
        className="group relative flex flex-col rounded-3xl bg-white border border-ink/5 overflow-hidden scroll-mt-28 shadow-[0_1px_2px_rgba(7,21,23,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(7,21,23,0.25)] transition-shadow duration-500 h-full"
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`relative block w-full overflow-hidden text-left ${tall ? "aspect-[4/3]" : "aspect-[4/3]"}`}
          aria-label={`Lesa meira um ${tour.title}`}
        >
          <Image
            src={tour.image}
            alt={tour.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          <span className="absolute top-4 left-4 rounded-full glass px-3 py-1.5 text-xs text-white">
            {tour.tag}
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-white text-ink px-3 py-1.5 text-xs font-semibold">
            {tour.priceLabel}
          </span>
        </button>

        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-display text-2xl font-medium tracking-tight leading-tight">{tour.title}</h3>
          <p className="mt-3 text-[15px] text-ink/60 leading-relaxed line-clamp-3">{tour.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tour.highlights.slice(0, 3).map((h) => (
              <li key={h} className="rounded-full bg-mist px-3 py-1 text-xs text-ink/70">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-deep transition-colors"
            >
              Lesa meira <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="#fyrirspurn"
              onClick={() => rememberTour(tour.title)}
              className="inline-flex items-center rounded-full border border-ink/15 px-4 py-2 text-sm font-medium hover:bg-ink hover:text-white transition-colors"
            >
              Bóka
            </a>
          </div>
        </div>
      </article>

      {open && <TourModal tour={tour} onClose={() => setOpen(false)} />}
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

function TourModal({ tour, onClose }: { tour: Tour; onClose: () => void }) {
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
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full md:max-w-4xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto bg-paper text-ink rounded-t-[2rem] md:rounded-[2rem] shadow-2xl animate-slide-up">
        <button
          type="button"
          onClick={onClose}
          aria-label="Loka"
          className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full glass-dark text-white hover:bg-white hover:text-ink transition-colors flex items-center justify-center"
        >
          <CloseIcon />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="relative h-60 md:h-auto md:min-h-[540px] md:col-span-2">
            <Image src={tour.image} alt={tour.imageAlt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent md:bg-none" />
            <span className="absolute top-4 left-4 rounded-full glass px-3 py-1.5 text-xs text-white">{tour.tag}</span>
          </div>

          <div className="md:col-span-3 p-7 md:p-10">
            <h2 id={`modal-${tour.id}`} className="font-display text-3xl md:text-4xl font-medium tracking-tight leading-tight pr-10">
              {tour.title}
            </h2>

            <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
              {d.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {(d.schedule || d.duration) && (
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {d.schedule && (
                  <div className="rounded-2xl bg-mist p-4">
                    <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-ink/50">Brottför</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      {d.schedule.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {d.duration && (
                  <div className="rounded-2xl bg-mist p-4">
                    <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-ink/50">Lengd</h3>
                    <p className="mt-2 text-sm flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-forest" /> {d.duration}
                    </p>
                  </div>
                )}
              </div>
            )}

            {d.stops && (
              <div className="mt-7">
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-ink/50">
                  {d.stops.length > 6 ? `${d.stops.length} skemmtileg stopp um alla Róm` : "Staðir"}
                </h3>
                <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                  {d.stops.map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="text-forest font-semibold w-5 shrink-0 text-right">{i + 1}.</span> {s}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {d.included && (
              <div className="mt-7">
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-ink/50">Innifalið</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {d.included.map((s) => (
                    <li key={s} className="flex gap-3">
                      <CheckIcon className="w-4 h-4 mt-0.5 text-leaf shrink-0" /> <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 rounded-2xl bg-ink text-white p-5">
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-sand">Kostnaður</h3>
              {tour.prices ? (
                <dl className="mt-3 space-y-2">
                  {tour.prices.map((p) => (
                    <div key={p.label} className="flex items-baseline justify-between gap-4 text-sm">
                      <dt className="text-white/70">{p.label}</dt>
                      <dd className="font-display text-2xl font-medium">{p.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-3 text-sm">{tour.priceLabel}</p>
              )}
              {d.note && <p className="mt-3 text-xs text-white/55 leading-relaxed">{d.note}</p>}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#fyrirspurn"
                onClick={() => {
                  rememberTour(tour.title);
                  onClose();
                }}
                className="flex-1 inline-flex items-center justify-center rounded-full bg-forest text-white px-8 py-4 text-sm font-semibold hover:bg-forest-deep transition-colors"
              >
                Bóka þessa ferð
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-8 py-4 text-sm font-medium hover:bg-ink hover:text-white transition-colors"
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
