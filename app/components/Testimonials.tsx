import { testimonials } from "../data/site";
import RevealOnScroll from "./RevealOnScroll";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <RevealOnScroll>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Umsagnir</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
              Það sem gestir okkar segja
            </h2>
          </div>
          <p className="text-ink/55 max-w-sm sm:text-right">
            Umsagnir frá gestum sem hafa ferðast með Bella Italia til Rómar og dvalið í villum um alla Ítalíu.
          </p>
        </div>
      </RevealOnScroll>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5">
        {testimonials.map((t) => (
          <RevealOnScroll key={t.name} className="mb-4 md:mb-5 break-inside-avoid">
            <figure className="rounded-3xl bg-white border border-ink/5 p-6 md:p-7">
              <blockquote className="text-[15px] md:text-base leading-relaxed text-ink/75">
                <p>&ldquo;{t.text}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink/5 flex items-center gap-3">
                <span
                  aria-hidden
                  className="w-10 h-10 shrink-0 rounded-full bg-forest/10 text-forest text-sm font-semibold flex items-center justify-center"
                >
                  {initials(t.name)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-ink/50 mt-0.5">{t.trip}</span>
                </span>
              </figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
