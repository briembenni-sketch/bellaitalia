import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import { site, tours, villas, villaServices, villaText, destinations, wedding } from "./data/site";
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
  return (
    <div className="bg-ink text-white">
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
            src="/images/villa-stone.jpg"
            alt="Steinhús með sundlaug í ítalskri sveit"
            fill
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/95" />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10 pt-32 pb-8 md:pb-12">
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
                    href="/villur#villur"
                    className="group relative block aspect-[4/5] lg:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-ink-soft"
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
                        Fá tilboð <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>

            <p className="mt-5 text-xs md:text-sm text-white/45 max-w-3xl">{villaText.pricingNote}</p>
          </div>
        </section>

        {/* ═══════════════ VIÐBÓTARÞJÓNUSTA – fjórar myndsúlur ═══════════════ */}
        <section className="relative">
          <div className="relative z-10 bg-ink pb-8 lg:absolute lg:inset-x-0 lg:top-0 lg:pointer-events-none lg:bg-transparent lg:bg-gradient-to-b lg:from-ink/85 lg:via-ink/50 lg:to-transparent lg:pb-32">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-12 lg:pt-14">
              <RevealOnScroll>
                <span className={eyebrow}>Í kringum villuna</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white">
                  Gerðu dvölina persónulegri
                </h2>
                <p className="mt-3 text-white/75 max-w-xl text-[15px] md:text-base">
                  Viðbótarþjónusta sem tengist dvölinni og gerir ferðina sérstæðari – allt bókað í gegnum okkur.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink">
            {villaServices.map((s) => (
              <Link
                key={s.id}
                href="/villur#thjonusta"
                className="group relative block min-h-[60svh] lg:min-h-svh overflow-hidden bg-ink-soft"
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  quality={85}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-ink/30" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl xl:text-3xl font-medium tracking-tight leading-tight break-words [hyphens:auto]">{s.title}</h3>
                  <p className="mt-3 text-[14px] md:text-[15px] text-white/75 leading-relaxed max-w-xs">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Lesa meira <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════ 2 · RÓM & AÐRAR BORGIR – myndamósaík ═══════════════ */}
        <section id="borgir" className="relative">
          <div className="relative z-10 bg-ink pb-8 lg:absolute lg:left-0 lg:right-1/2 lg:top-0 lg:pointer-events-none lg:bg-transparent lg:bg-gradient-to-b lg:from-ink/85 lg:via-ink/50 lg:to-transparent lg:pb-32">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-12 lg:pt-14">
              <RevealOnScroll>
                <span className={eyebrow}>Skoðunarferðir & skipulagning</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white">
                  Róm og aðrar borgir
                </h2>
                <p className="mt-3 text-white/75 max-w-xl text-[15px] md:text-base">
                  Leiðsögn, miðakaup, einkabílar og aðstoð við að skipuleggja borgarferðina – sér eða í
                  sömu ferð og villan.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-px bg-ink lg:h-svh lg:min-h-[760px]">
            {destinations.map((d, i) => (
              <Link
                key={d.slug}
                href={d.custom ? `/${d.slug}` : `/borgir/${d.slug}`}
                className={`group relative block overflow-hidden bg-ink-soft ${
                  i === 0 ? "col-span-2 row-span-1 lg:row-span-2 min-h-[70svh] lg:min-h-0" : "min-h-[50svh] lg:min-h-0"
                }`}
              >
                <Image
                  src={d.cardImage}
                  alt={d.imageAlt}
                  fill
                  quality={85}
                  sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-ink/20" />
                <span className="absolute top-4 left-4 md:top-5 md:left-5 rounded-full tint px-3 py-1.5 text-[11px] md:text-xs text-white">
                  {d.eyebrow}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                  <h3 className={`font-display font-medium tracking-tight leading-tight ${i === 0 ? "text-3xl md:text-5xl xl:text-6xl" : "text-xl md:text-3xl"}`}>
                    {d.title}
                  </h3>
                  <p className={`mt-3 text-white/75 leading-relaxed ${i === 0 ? "text-[15px] md:text-base max-w-xl" : "text-sm max-w-sm line-clamp-3"}`}>
                    {d.lead}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                    {d.custom ? `Skoða ${tours.length} ferðir` : `Skoða ${d.name}`}{" "}
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
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
        <section className="relative py-24 md:py-32 overflow-hidden">
          <Image src="/images/gallery-08.jpg" alt="" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="relative z-10">
            <Testimonials tone="dark" />
          </div>
        </section>

        {/* ═══════════════ HAFA SAMBAND ═══════════════ */}
        <section className="relative min-h-svh flex items-center overflow-hidden">
          <Image src="/images/gallery-01.jpg" alt="Trevi gosbrunnurinn í Róm" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
            <RevealOnScroll>
              <div className="text-center mb-10 md:mb-14">
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

              <div className="mt-12 md:mt-16 mx-auto flex items-center gap-4 rounded-3xl bg-white/5 border border-white/10 p-4 w-fit">
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
