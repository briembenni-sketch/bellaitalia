import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import GalleryStrip from "./components/GalleryStrip";
import VillaCard from "./components/VillaCard";
import ServiceCard from "./components/ServiceCard";
import { site, tours, villas, villaServices, villaText, destinations, wedding } from "./data/site";
import { ArrowIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./components/Icons";

// Staðreyndir af bellaitalia.is — engar uppspunnar tölur
const facts = [
  { title: "Villur í öllum verðflokkum", text: "Hús með sundlaug um alla Ítalíu – Toskana, Umbria, Le Marche, Puglia og Sikiley." },
  { title: "Gjaldfrjáls þjónusta", text: "Að bóka villu í gegnum okkur tryggir gjaldfrjálsa milligöngu og aðstoð við allt sem viðkemur ferðinni." },
  { title: "Til staðar 24/7", text: "Ráðleggingar fyrir ferðina og aðstoð á meðan dvöl stendur." },
  { title: "Sími á Íslandi og Ítalíu", text: `${site.phoneIS} · ${site.phoneIT} (WhatsApp)` },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
              <Link href="/villur" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Skoða villur <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link href="/villur#fyrirspurn" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Fá tilboð í villu
              </Link>
            </>
          }
          scrollTo="#villur"
        />

        {/* ═══════════════ STAÐREYNDIR ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-10 md:py-16">
          <RevealOnScroll>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
              {facts.map((f) => (
                <li key={f.title} className="border-l-2 border-forest/20 pl-4">
                  <h3 className="font-display text-lg font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink/60 leading-relaxed">{f.text}</p>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </section>

        {/* ═══════════════ 1 · VILLUR ═══════════════ */}
        <section id="villur" className="mx-auto max-w-[1400px] px-5 md:px-10 scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Villur – okkar sérgrein</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
                  Finndu réttu villuna
                </h2>
              </div>
              <p className="text-ink/60 max-w-md md:text-right">
                Hér eru nokkur dæmi um gerðir af húsum sem við bjóðum. Úrvalið er miklu stærra – sendu
                fyrirspurn og við finnum eign sem hentar ykkar hóp.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {villas.map((v) => (
              <RevealOnScroll key={v.id} className="h-full">
                <VillaCard villa={v} />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-mist p-5 md:p-6">
              <p className="text-ink/65 text-[15px] max-w-2xl">{villaText.pricingNote}</p>
              <Link href="/villur" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3.5 text-sm font-semibold hover:bg-forest transition-colors">
                Allar villur & verðhugmyndir <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════ VIÐBÓTARÞJÓNUSTA ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Í kringum villuna</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                  Gerðu dvölina persónulegri
                </h2>
              </div>
              <p className="text-ink/60 max-w-md md:text-right">
                Viðbótarþjónusta sem tengist dvölinni og gerir ferðina sérstæðari – allt bókað í gegnum okkur.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {villaServices.map((s) => (
              <RevealOnScroll key={s.id} className="h-full">
                <ServiceCard service={s} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════════ 2 · RÓM & AÐRAR BORGIR ═══════════════ */}
        <section id="borgir" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Skoðunarferðir & skipulagning</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                  Róm og aðrar borgir
                </h2>
              </div>
              <p className="text-ink/60 max-w-md md:text-right">
                Leiðsögn, miðakaup, einkabílar og aðstoð við að skipuleggja borgarferðina – hvort sem er
                sér eða í sömu ferð og villan.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {destinations.map((d) => (
              <RevealOnScroll key={d.slug}>
                <Link href={d.custom ? `/${d.slug}` : `/borgir/${d.slug}`} className="group relative block aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-ink">
                  <Image src={d.cardImage} alt={d.imageAlt} fill quality={60} sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                  <span className="absolute top-3 left-3 md:top-4 md:left-4 rounded-full tint px-3 py-1.5 text-[11px] md:text-xs text-white">{d.eyebrow}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">{d.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-3 md:line-clamp-4">{d.lead}</p>
                    <span className="mt-3 md:mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                      {d.custom ? `${tours.length} ferðir` : "Skoða"} <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════════ 3 · BRÚÐKAUP ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-2.5 md:px-4 pt-20 md:pt-32">
          <RevealOnScroll>
            <Link href="/brudkaup" className="group relative block rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-ink min-h-[380px] md:min-h-[460px]">
              <Image src={wedding.image} alt={wedding.imageAlt} fill quality={60} sizes="100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/10" />
              <div className="relative z-10 p-6 sm:p-8 md:p-14 flex flex-col justify-end min-h-[380px] md:min-h-[460px] text-white max-w-2xl">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{wedding.eyebrow}</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                  Brúðkaup, stórafmæli og önnur sérstök tilefni
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">{wedding.lead}</p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold w-fit group-hover:bg-sand-light transition-colors">
                  Lesa meira <ArrowIcon className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        </section>

        {/* ═══════════════ UM OKKUR ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <RevealOnScroll className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-mist">
                <Image src="/images/gallery-08.jpg" alt="Kvöldverður á verönd í Toskana" fill quality={60} sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="lg:col-span-7">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Um Bella Italia</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Persónuleg þjónusta fyrir einstaklinga og hópa
              </h2>
              <div className="mt-6 space-y-4 text-ink/65 leading-relaxed text-[16px] md:text-[17px]">
                <p>{villaText.service[0]}</p>
                <p>
                  Í Róm bjóðum við leiðsögn í litlum hópum, vespuferðir, gönguferðir með Rómverjum,
                  matreiðslunámskeið, flugvallarakstur og aðstoð við gistingu – og aðstoðum sömuleiðis
                  við skoðunarferðir í Flórens, Napoli, Amalfi, Pompei og Feneyjum.
                </p>
              </div>
              <div className="mt-7 flex items-center gap-4 rounded-3xl bg-mist p-4 w-fit">
                <Image src="/images/logo.jpg" alt="" width={48} height={48} className="w-12 h-12 rounded-2xl object-cover" />
                <div className="pr-2">
                  <span className="block text-sm font-semibold">Hildur</span>
                  <span className="text-xs text-ink/55">{site.legalName} · {site.email}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════ MYNDARÚLLA ═══════════════ */}
        <section className="pt-20 md:pt-32">
          <GalleryStrip />
        </section>

        {/* ═══════════════ UMSAGNIR ═══════════════ */}
        <section className="pt-20 md:pt-32">
          <Testimonials />
        </section>

        {/* ═══════════════ HAFA SAMBAND ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-32">
          <RevealOnScroll>
            <div className="text-center mb-8 md:mb-10">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Hafa samband</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Það kostar ekkert að fá tilboð
              </h2>
              <p className="mt-4 text-ink/60 max-w-xl mx-auto">
                Sendu okkur fyrirspurn um villu á Ítalíu, borgarferð eða hvort tveggja.
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
                <a href={c.href} className="group flex items-center gap-4 rounded-3xl bg-white border border-ink/5 p-4 md:p-5 hover:border-forest/30 transition-colors">
                  <span className="w-12 h-12 shrink-0 rounded-2xl bg-forest/10 text-forest flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-colors">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-ink/50">{c.title}</span>
                    <span className="block font-medium truncate">{c.value}</span>
                  </span>
                </a>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/villur#fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-forest text-white px-8 py-4 text-sm font-semibold hover:bg-forest-deep transition-colors">
                Fá tilboð í villu <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link href="/fyrirspurn" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-4 text-sm font-medium hover:bg-ink hover:text-white transition-colors">
                Almenn fyrirspurn
              </Link>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink transition-colors">
                <InstagramIcon className="w-4 h-4" /> {site.instagramHandle}
              </a>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
