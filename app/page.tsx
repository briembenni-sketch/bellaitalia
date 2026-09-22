import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ClosingFooter from "./components/ClosingFooter";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import { getContent } from "./lib/content";
import { ArrowIcon } from "./components/Icons";

const btnWhite =
  "inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors";
const btnGlass =
  "inline-flex items-center gap-2 rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors";
const eyebrow = "text-xs font-medium tracking-[0.2em] uppercase text-sand";
const panel = "group relative flex flex-col justify-end min-h-[50svh] md:min-h-svh overflow-hidden bg-ink-soft";
const panelTitle =
  "mt-3 font-display text-[3.5rem] sm:text-7xl lg:text-8xl xl:text-[7.5rem] font-medium tracking-tight leading-none text-white";
const panelSub = "mt-4 text-sm md:text-base font-medium tracking-[0.18em] uppercase text-white/85";

// Stutt heiti borganna á forsíðunni
const cityLabels: Record<string, string> = {
  "napoli-amalfi-pompei": "Napoli",
};

/**
 * Forsíða (landing): skjárinn skiptist í tvennt – aðeins tveir möguleikar í byrjun,
 * leið A: villur eða leið B: borgir. Dæmi um villur og viðbótarþjónusta birtast
 * fyrst eftir að villur eru valdar (/villur).
 */
export default function Home() {
  const { destinations, wedding, testimonials } = getContent();
  return (
    <div className="bg-ink text-white">
      <Navbar />
      <main>
        <h1 className="sr-only">Bella Italia – villur með sundlaug og borgarferðir á Ítalíu</h1>

        {/* ═══════════════ TVÍSKIPTUR SKJÁR – A: villur · B: borgir ═══════════════ */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {/* A · VILLUR */}
          <Link href="/villur" className={panel}>
            <Image
              src="/images/card-villur.jpg"
              alt="Steinhlaðin villa með sundlaug og útsýni yfir ítalska sveit í ljósaskiptunum"
              fill
              preload
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/20" />
            <div className="relative z-10 p-6 sm:p-10 lg:p-14 pt-28 animate-fade-up-delay-1">
              <span className={eyebrow}>Leið A · Okkar sérgrein</span>
              <h2 className={panelTitle}>Villur</h2>
              <p className={panelSub}>Hús með sundlaug um alla Ítalíu</p>
              <span className={`mt-7 ${btnWhite}`}>
                Skoða villur <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          {/* B · BORGIR – allur helmingurinn leiðir á /borgir, hvert borgarheiti á sína síðu */}
          <div className={`${panel} md:border-l border-ink`}>
            <Image
              src="/images/card-rom.jpg"
              alt="Colosseum í Róm"
              fill
              preload
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/20" />
            <Link href="/borgir" aria-label="Skoða borgir" className="absolute inset-0 z-10" />
            <div className="relative z-20 p-6 sm:p-10 lg:p-14 pt-28 pointer-events-none animate-fade-up-delay-2">
              <span className={eyebrow}>Leið B · Skoðunarferðir & skipulagning</span>
              <h2 className={panelTitle}>Borgir</h2>
              <ul className={`${panelSub} flex flex-wrap items-center gap-x-3 gap-y-1`}>
                {destinations.map((d, i) => (
                  <li key={d.slug} className="flex items-center gap-x-3">
                    {i > 0 && <span className="text-white/40" aria-hidden>–</span>}
                    <Link
                      href={d.custom ? `/${d.slug}` : `/borgir/${d.slug}`}
                      className="pointer-events-auto hover:text-gold-light transition-colors"
                    >
                      {cityLabels[d.slug] ?? d.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <span className={`mt-7 ${btnWhite}`}>
                Skoða borgir <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════ BRÚÐKAUP – lágstemmdur borði ═══════════════ */}
        <section className="mx-auto w-full max-w-[1600px] px-5 md:px-10 py-16 md:py-24">
          <RevealOnScroll>
            <Link
              href="/brudkaup"
              className="group relative flex items-end min-h-[300px] md:min-h-[360px] rounded-2xl md:rounded-3xl overflow-hidden bg-ink-soft"
            >
              <Image
                src={wedding.image}
                alt={wedding.imageAlt}
                fill
                quality={85}
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/15" />
              <div className="relative z-10 w-full p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
                <div className="max-w-2xl">
                  <span className={eyebrow}>{wedding.eyebrow}</span>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.1] text-white">
                    Brúðkaup, stórafmæli og önnur sérstök tilefni
                  </h2>
                </div>
                <span className={`shrink-0 w-fit ${btnGlass}`}>
                  Lesa meira <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        </section>

        {/* ═══════════════ UMSAGNIR ═══════════════ */}
        <section className="pb-16 md:pb-24">
          <Testimonials tone="dark" items={testimonials} />
        </section>
      </main>
      <ClosingFooter />
    </div>
  );
}
