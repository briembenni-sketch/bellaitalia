import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ClosingFooter from "./components/ClosingFooter";
import Hero from "./components/Hero";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import { getContent } from "./lib/content";
import { ArrowIcon } from "./components/Icons";

const btnWhite =
  "inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors";
const btnGlass =
  "inline-flex items-center gap-2 rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors";
const eyebrow = "text-xs font-medium tracking-[0.2em] uppercase text-sand";
const h2 = "mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white";
const pathCard =
  "group relative flex flex-col justify-end h-full min-h-[440px] md:min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden bg-ink-soft";
const pathTitle = "mt-2 font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-none text-white";

// Stutt heiti borganna á forsíðuspjaldinu
const cityLabels: Record<string, string> = {
  "napoli-amalfi-pompei": "Napoli",
};

/**
 * Forsíða (landing): ein heil síða með skýru vali – leið A: villur eða leið B: borgir.
 * Dæmi um villur og viðbótarþjónusta birtast fyrst eftir að villur eru valdar (/villur).
 */
export default function Home() {
  const { destinations, wedding, testimonials } = getContent();
  return (
    <div className="bg-ink text-white">
      <Navbar />
      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <Hero
          image="/images/card-villur.jpg"
          imageAlt="Steinhlaðin villa með sundlaug og útsýni yfir ítalska sveit í ljósaskiptunum"
          title={
            <>
              Villur með sundlaug <br className="hidden md:block" />
              um alla Ítalíu
            </>
          }
          text="Við finnum réttu villuna og sjáum um allt í kringum dvölina – gjaldfrjálst."
          actions={
            <>
              <Link href="/villur" className={btnWhite}>
                Villur <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link href="/borgir" className={btnGlass}>
                Borgir <ArrowIcon className="w-4 h-4" />
              </Link>
            </>
          }
          scrollTo="#leidir"
        />

        {/* ═══════════════ VELDU LEIÐ – A: villur · B: borgir ═══════════════ */}
        <section id="leidir" className="mx-auto w-full max-w-[1600px] px-5 md:px-10 py-16 md:py-24 scroll-mt-16">
          <RevealOnScroll>
            <div className="max-w-2xl mb-8 md:mb-12">
              <span className={eyebrow}>Þjónusta okkar</span>
              <h2 className={h2}>Hvert er ferðinni heitið?</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* A · VILLUR */}
            <RevealOnScroll className="h-full">
              <Link href="/villur" className={pathCard}>
                <Image
                  src="/images/landing-villur.jpg"
                  alt="Loftmynd af toskanskri villu með sundlaug í kvöldsól"
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
                <div className="relative z-10 p-6 md:p-10">
                  <span className={eyebrow}>Okkar sérgrein</span>
                  <h3 className={pathTitle}>Villur</h3>
                  <p className="mt-4 text-sm md:text-base font-medium tracking-[0.18em] uppercase text-white/85">
                    Hús með sundlaug um alla Ítalíu
                  </p>
                  <span className={`mt-6 ${btnWhite}`}>
                    Skoða villur <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>

            {/* B · BORGIR – allt spjaldið leiðir á /borgir, hvert borgarheiti á sína síðu */}
            <RevealOnScroll className="h-full">
              <div className={pathCard}>
                <Image
                  src="/images/card-rom.jpg"
                  alt="Colosseum í Róm"
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
                <Link href="/borgir" aria-label="Skoða borgir" className="absolute inset-0 z-10" />
                <div className="relative z-20 p-6 md:p-10 pointer-events-none">
                  <span className={eyebrow}>Skoðunarferðir & skipulagning</span>
                  <h3 className={pathTitle}>Borgir</h3>
                  <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base font-medium tracking-[0.18em] uppercase text-white/85">
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
                  <span className={`mt-6 ${btnWhite}`}>
                    Skoða borgir <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════ BRÚÐKAUP – lágstemmdur borði ═══════════════ */}
        <section className="mx-auto w-full max-w-[1600px] px-5 md:px-10 pb-16 md:pb-24">
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
