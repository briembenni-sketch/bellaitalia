import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import SnapScroll from "./components/SnapScroll";
import CityShowcase from "./components/CityShowcase";
import { getContent } from "./lib/content";
import { ArrowIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./components/Icons";

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
  const { site, tours, villas, villaServices, villaText, destinations, wedding, testimonials } = getContent();
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
          text="Við finnum réttu villuna fyrir ykkar hóp, útbúum tilboð og sjáum um allt í kringum dvölina – kokk, ljósmyndara, vínsmökkun og akstur. Gjaldfrjálst þegar bókað er í gegnum okkur."
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
                    Hús með sundlaug í Toskana, Umbríu, Le Marche, Puglia og á Sikiley – í öllum
                    verðflokkum. Hér eru dæmi um húsgerðir; úrvalið er miklu stærra og við þrengjum
                    valið fyrir ykkur.
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
                    <span className="absolute top-3 left-3 md:top-4 md:left-4 rounded-full tint px-3 py-1.5 text-[11px] md:text-xs text-white">
                      {v.region}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                      <h3 className="font-display text-xl sm:text-2xl xl:text-[1.75rem] font-medium tracking-tight leading-tight">
                        {v.name}
                      </h3>
                      <p className="mt-2 hidden sm:block lg:hidden xl:block text-sm text-white/70 leading-relaxed line-clamp-2">{v.text}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                        Skoða villu <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>

            <p className="mt-4 text-xs text-white/45 max-w-3xl">{villaText.pricingNote}</p>
          </div>
        </section>

        {/* ═══════════════ VIÐBÓTARÞJÓNUSTA – hrein spjöld ═══════════════ */}
        <section className="relative min-h-svh flex items-center bg-ink">
          <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 pt-28 pb-14 lg:pt-28 lg:pb-12">
            <RevealOnScroll>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-10 mb-8 md:mb-10">
                <div className="max-w-2xl">
                  <span className={eyebrow}>Í kringum villuna</span>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white">
                    Gerðu dvölina persónulegri
                  </h2>
                </div>
                <p className="text-white/60 text-[15px] md:text-base leading-relaxed max-w-md lg:text-right">
                  Viðbótarþjónusta sem tengist dvölinni og gerir ferðina sérstæðari – allt bókað í gegnum okkur.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {villaServices.map((s, i) => (
                <RevealOnScroll key={s.id} className="h-full">
                  <Link href="/villur#thjonusta" className="group flex flex-col h-full">
                    <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-ink-soft">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        quality={85}
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <span className="absolute top-3 left-3 md:top-4 md:left-4 rounded-full tint px-3 py-1.5 text-[11px] md:text-xs text-white tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg sm:text-xl md:text-2xl font-medium tracking-tight leading-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-3">{s.text}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light group-hover:text-white transition-colors">
                      Lesa meira <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ 2 · RÓM & AÐRAR BORGIR – hreinn sýningarrammi ═══════════════ */}
        <section id="borgir" className="relative min-h-svh flex items-center bg-ink scroll-mt-0">
          <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 pt-28 pb-14 lg:pt-28 lg:pb-12">
            <RevealOnScroll>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-10 mb-8 md:mb-10">
                <div className="max-w-2xl">
                  <span className={eyebrow}>Skoðunarferðir & skipulagning</span>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white">
                    Róm og aðrar borgir
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
                  <p className="text-white/60 text-[15px] md:text-base leading-relaxed max-w-md lg:text-right">
                    Leiðsögn, miðakaup, einkabílar og aðstoð við að skipuleggja borgarferðina – sér eða í sömu ferð og villan.
                  </p>
                  <Link href="/borgir" className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white hover:text-ink transition-colors w-fit">
                    Allar borgir <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
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
        <section className="relative min-h-svh flex items-center py-16 lg:py-14 overflow-hidden">
          <Image src="/images/dinner-terrace.jpg" alt="" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="relative z-10 w-full">
            <Testimonials tone="dark" items={testimonials} />
          </div>
        </section>

        {/* ═══════════════ HAFA SAMBAND ═══════════════ */}
        <section className="relative min-h-svh flex items-center overflow-hidden">
          <Image src="/images/gallery-01.jpg" alt="Trevi gosbrunnurinn í Róm" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10 py-24">
            <RevealOnScroll>
              <div className="text-center mb-8 md:mb-10">
                <span className={eyebrow}>Hafa samband</span>
                <h2 className={h2}>Það kostar ekkert að fá tilboð</h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto">
                  Sendu okkur fyrirspurn um villu á Ítalíu, borgarferð eða hvort tveggja. Við svörum
                  yfirleitt innan sólarhrings og erum til staðar 24/7 á meðan dvöl stendur.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { icon: <MailIcon />, title: "Netfang", value: site.email, href: `mailto:${site.email}` },
                { icon: <PhoneIcon />, title: "Sími (Ísland)", value: site.phoneIS, href: `tel:${site.phoneIS.replace(/\s/g, "")}` },
                { icon: <WhatsAppIcon className="w-6 h-6" />, title: "WhatsApp (Ítalía)", value: site.phoneIT, href: site.whatsapp },
              ].map((c) => (
                <RevealOnScroll key={c.title}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md p-4 md:p-5 hover:bg-white hover:text-ink transition-colors"
                  >
                    <span className="w-12 h-12 shrink-0 rounded-2xl bg-white/15 text-white flex items-center justify-center group-hover:bg-forest transition-colors">
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/60 group-hover:text-ink/50">{c.title}</span>
                      <span className="block font-medium truncate">{c.value}</span>
                    </span>
                  </a>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/villur#fyrirspurn" className={btnWhite}>
                  Fá tilboð í villu <ArrowIcon className="w-4 h-4" />
                </Link>
                <Link href="/fyrirspurn" className={btnGlass}>
                  Almenn fyrirspurn
                </Link>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" /> {site.instagramHandle}
                </a>
              </div>

              <div className="mt-8 mx-auto flex items-center gap-4 rounded-3xl bg-white/5 border border-white/10 p-4 w-fit">
                <Image src="/images/logo.jpg" alt="" width={48} height={48} className="w-12 h-12 rounded-2xl object-cover" />
                <div className="pr-2">
                  <span className="block text-sm font-semibold">Hildur</span>
                  <span className="text-xs text-white/55">{site.legalName} · {site.email}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
