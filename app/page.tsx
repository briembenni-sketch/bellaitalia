import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import GalleryStrip from "./components/GalleryStrip";
import { site, tours, villaText } from "./data/site";
import { ArrowIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./components/Icons";

const featured = tours.filter((t) => ["vatikan", "vespa", "sidecar", "matreidsla"].includes(t.id));

// Staðreyndir af bellaitalia.is — engar uppspunnar tölur
const facts = [
  { title: "Litlir hópar", text: "Leiðsögn á ensku í hópum með max 10 manns." },
  { title: "Gjaldfrjáls þjónusta", text: "Að bóka villu í gegnum okkur tryggir gjaldfrjálsa milligöngu og aðstoð." },
  { title: "Til staðar 24/7", text: "Ráðleggingar fyrir ferðina og aðstoð á meðan dvöl stendur." },
  { title: "Sími á Íslandi og Ítalíu", text: `${site.phoneIS} · ${site.phoneIT} (WhatsApp)` },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/gallery-01.jpg"
          imageAlt="Trevi gosbrunnurinn í Róm"
          title={
            <>
              Ferðir um Róm og villur <br className="hidden md:block" />
              um alla Ítalíu
            </>
          }
          text="Villur & hús um alla Ítalíu. Persónuleg þjónusta og öðruvísi ferðir um Róm og nágrenni – fyrir einstaklinga og hópa, stóra sem smáa."
          actions={
            <>
              <Link href="/rom" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Róm <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link href="/villur" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Villur
              </Link>
            </>
          }
          scrollTo="#thjonusta"
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

        {/* ═══════════════ RÓM / VILLUR ═══════════════ */}
        <section id="thjonusta" className="mx-auto max-w-[1400px] px-2.5 md:px-4 scroll-mt-24">
          <RevealOnScroll>
            <div className="px-2.5 md:px-6 mb-6 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Þjónusta</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
                  Róm & villur á Ítalíu
                </h2>
              </div>
              <p className="text-ink/60 max-w-md md:text-right">
                Borgarferð til Rómar með leiðsögn, vika í villu með sundlaug – eða hvort tveggja.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4">
            {[
              {
                href: "/rom",
                img: "/images/card-rom.jpg",
                alt: "Colosseum í Róm",
                tag: "Róm & nágrenni",
                title: "Róm",
                text: "Vatíkanið og Colosseum með leiðsögn, vespuferðir, gönguferðir, matreiðslunámskeið, flugvallarakstur, gisting og ferðir til Napoli, Amalfi og Capri.",
                cta: `Skoða ${tours.length} ferðir`,
              },
              {
                href: "/villur",
                img: "/images/card-villur.jpg",
                alt: "Villa með sundlaug í ítalskri sveit",
                tag: "Toskana · Umbria · Le Marche · Puglia · Sikiley",
                title: "Villur",
                text: "Villur og hús með sundlaug um alla Ítalíu í öllum verðflokkum. Við finnum réttu eignina fyrir ykkar hóp og útbúum tilboð – gjaldfrjálst.",
                cta: "Skoða villur",
              },
            ].map((c) => (
              <RevealOnScroll key={c.href}>
                <Link href={c.href} className="group relative block h-[440px] sm:h-[520px] md:h-[600px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-ink">
                  <Image src={c.img} alt={c.alt} fill quality={60} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <span className="absolute top-4 left-4 md:top-5 md:left-5 rounded-full tint px-3.5 py-1.5 text-xs text-white">{c.tag}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <h3 className="font-display text-4xl md:text-6xl font-medium tracking-tight">{c.title}</h3>
                    <p className="mt-3 md:mt-4 text-white/80 text-[15px] md:text-base leading-relaxed max-w-md">{c.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 text-sm font-semibold group-hover:bg-sand-light transition-colors">
                      {c.cta} <ArrowIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════════ VINSÆLAR UPPLIFANIR ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Róm</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                  Vinsælar ferðir
                </h2>
              </div>
              <Link href="/rom" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium hover:bg-ink hover:text-white transition-colors w-fit">
                Allar ferðir <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {featured.map((t) => (
              <RevealOnScroll key={t.id}>
                <Link href={`/rom#${t.id}`} className="group block rounded-3xl bg-white border border-ink/5 overflow-hidden hover:border-ink/15 transition-colors">
                  <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                    <Image src={t.image} alt={t.imageAlt} fill quality={60} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <span className="absolute top-4 left-4 rounded-full tint px-3 py-1.5 text-xs text-white">{t.tag}</span>
                    <span className="absolute top-4 right-4 rounded-full bg-white text-ink px-3 py-1.5 text-xs font-semibold">{t.priceLabel}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-medium tracking-tight leading-tight">{t.title}</h3>
                    <p className="mt-2 text-sm text-ink/55 line-clamp-2">{t.summary}</p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
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
                  Í Róm bjóðum við leiðsögn í litlum hópum, vespuferðir, gönguferðir með
                  Rómverjum, matreiðslunámskeið, flugvallarakstur og aðstoð við gistingu.
                  Við getum líka pantað bíla hvar sem er á Ítalíu fyrir einstaklinga sem og hópa.
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
                Sendu okkur fyrirspurn um ferð til Rómar, villu á Ítalíu eða hvort tveggja.
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
              <Link href="/fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-forest text-white px-8 py-4 text-sm font-semibold hover:bg-forest-deep transition-colors">
                Senda fyrirspurn <ArrowIcon className="w-4 h-4" />
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
