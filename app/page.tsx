import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ClosingFooter from "./components/ClosingFooter";
import Hero from "./components/Hero";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import SnapScroll from "./components/SnapScroll";
import CityShowcase from "./components/CityShowcase";
import { getContent } from "./lib/content";
import { ArrowIcon } from "./components/Icons";

const btnWhite =
  "inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors";
const btnGlass =
  "inline-flex items-center gap-2 rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors";
const eyebrow = "text-xs font-medium tracking-[0.2em] uppercase text-sand";
const h2 = "mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white";

/**
 * Forsíða (landing): dökk, myndir í fullri skjástærð í hverjum hluta og sem minnst af hvítu.
 */
export default function Home() {
  const { tours, villas, villaServices, destinations, wedding, testimonials } = getContent();
  return (
    <div className="bg-ink text-white">
      <SnapScroll />
      <Navbar />
      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <Hero
          image="/images/hero-villa.jpg"
          imageAlt="Villa með sundlaug og sýprusviðum í Toskana"
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
                Skoða villur <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link href="/villur#fyrirspurn" className={btnGlass}>
                Fá tilboð í villu
              </Link>
            </>
          }
          scrollTo="#villur"
        />

        {/* ═══════════════ 1 · VILLUR ═══════════════ */}
        <section id="villur" className="relative min-h-svh flex flex-col justify-end overflow-hidden scroll-mt-0">
          <Image
            src="/images/landing-villur.jpg"
            alt="Loftmynd af toskanskri villu með sundlaug í kvöldsól"
            fill
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/95" />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10 pt-28 pb-5 md:pb-7">
            <RevealOnScroll>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <span className={eyebrow}>Villur – okkar sérgrein</span>
                  <h2 className={h2}>Finndu réttu villuna</h2>
                  <p className="mt-4 text-white/80 text-[15px] md:text-lg leading-relaxed max-w-xl">
                    Dæmi um húsgerðir – úrvalið er miklu stærra.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link href="/villur" className={btnWhite}>
                    Allar villur <ArrowIcon className="w-4 h-4" />
                  </Link>
                  <Link href="/villur#fyrirspurn" className={btnGlass}>
                    Fá tilboð
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <div className="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4">
              {villas.map((v) => (
                <RevealOnScroll key={v.id} className="h-full">
                  <Link
                    href={`/villur#${v.id}`}
                    className="group relative block aspect-[4/5] lg:aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-ink-soft"
                  >
                    <Image
                      src={v.image}
                      alt={v.imageAlt}
                      fill
                      quality={85}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                    <span className="absolute top-4 left-4 md:top-5 md:left-5 text-[11px] font-medium tracking-[0.22em] uppercase text-white label-on-image">
                      {v.region}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                      <h3 className="font-display text-xl sm:text-2xl xl:text-[1.75rem] font-medium tracking-tight leading-tight">
                        {v.name}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                        Skoða villu <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ VIÐBÓTARÞJÓNUSTA – hrein spjöld ═══════════════ */}
        <section className="relative min-h-svh flex flex-col justify-center-safe bg-ink">
          <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 pt-28 pb-14 lg:pt-28 lg:pb-12">
            <RevealOnScroll>
              <div className="max-w-2xl mb-8 md:mb-10">
                <span className={eyebrow}>Í kringum villuna</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white">
                  Gerðu dvölina persónulegri
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {villaServices.map((s, i) => (
                <RevealOnScroll key={s.id} className="h-full">
                  <Link href={`/villur?thjonusta=${s.id}#fyrirspurn`} className="group flex flex-col h-full">
                    <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[clamp(200px,34svh,380px)] rounded-2xl md:rounded-3xl overflow-hidden bg-ink-soft">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        quality={85}
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <span className="absolute top-4 left-4 md:top-5 md:left-5 font-display text-sm text-white/90 tabular-nums label-on-image">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg sm:text-xl md:text-2xl font-medium tracking-tight leading-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-4">{s.text}</p>
                    <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light group-hover:text-white transition-colors">
                      Fá tilboð <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ 2 · RÓM & AÐRAR BORGIR – hreinn sýningarrammi ═══════════════ */}
        <section id="borgir" className="relative min-h-svh flex flex-col justify-center-safe bg-ink scroll-mt-0">
          <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 pt-28 pb-14 lg:pt-28 lg:pb-12">
            <RevealOnScroll>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-10 mb-8 md:mb-10">
                <div className="max-w-2xl">
                  <span className={eyebrow}>Skoðunarferðir & skipulagning</span>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white">
                    Róm og aðrar borgir
                  </h2>
                </div>
                <Link href="/borgir" className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white hover:text-ink transition-colors w-fit">
                  Allar borgir <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <CityShowcase
                cities={destinations.map((d) => ({
                  slug: d.slug,
                  href: d.custom ? `/${d.slug}` : `/borgir/${d.slug}`,
                  eyebrow: d.eyebrow,
                  title: d.title,
                  lead: d.lead,
                  image: d.cardImage,
                  imageAlt: d.imageAlt,
                  cta: d.custom ? `Skoða ${tours.length} ferðir í Róm` : `Skoða ${d.name}`,
                }))}
              />
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════ 3 · BRÚÐKAUP ═══════════════ */}
        <section className="relative min-h-[85svh] md:min-h-svh flex items-end overflow-hidden">
          <Image src={wedding.image} alt={wedding.imageAlt} fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/25" />
          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10 pt-32 pb-10 md:pb-16">
            <RevealOnScroll>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
                <div className="lg:col-span-7">
                  <span className={eyebrow}>{wedding.eyebrow}</span>
                  <h2 className={h2}>Brúðkaup, stórafmæli og önnur sérstök tilefni</h2>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <p className="text-white/80 text-[15px] md:text-lg leading-relaxed max-w-md">{wedding.lead}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/brudkaup" className={btnWhite}>
                      Lesa meira <ArrowIcon className="w-4 h-4" />
                    </Link>
                    <Link href="/brudkaup#fyrirspurn" className={btnGlass}>
                      Segja frá tilefninu
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════ UMSAGNIR ═══════════════ */}
        <section className="relative min-h-svh flex flex-col justify-center-safe py-16 lg:py-14 overflow-hidden">
          <Image src="/images/dinner-terrace.jpg" alt="" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="relative z-10 w-full">
            <Testimonials tone="dark" items={testimonials} />
          </div>
        </section>
      </main>
      <ClosingFooter />
    </div>
  );
}
