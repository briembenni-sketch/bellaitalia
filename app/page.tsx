import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import GalleryStrip from "./components/GalleryStrip";
import { site, tours } from "./data/site";
import { ArrowIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./components/Icons";

const featured = tours.filter((t) => ["vatikan", "vespa", "sidecar", "matreidsla"].includes(t.id));

const stats = [
  { value: "10+", label: "ferðir & þjónustur í Róm" },
  { value: "5", label: "héruð með villur" },
  { value: "max 10", label: "manns í hverri leiðsögn" },
  { value: "24/7", label: "til staðar á meðan dvöl stendur" },
];

const why = [
  {
    title: "Gjaldfrjáls þjónusta",
    text: "Að bóka í gegnum okkur tryggir þér gjaldfrjálst alla okkar þjónustu og milligöngu – bæði við bókun og öll plön sem viðkoma ferðinni.",
  },
  {
    title: "Róm með Rómverjum",
    text: "Faglærðir leiðsögumenn, bílstjórar, kokkar og ljósmyndarar sem við þekkjum og treystum. Litlir hópar, betri upplifun.",
  },
  {
    title: "Sniðið að ykkur",
    text: "Fjölskyldur, vinahópar, fyrirtæki eða sérstakt tilefni – við útbúum ferðina allt eftir óskum og erum til staðar allan tímann.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/gallery-01.jpg"
          imageAlt="Trevi gosbrunnurinn í Róm"
          eyebrow="Róm & Villur á Ítalíu"
          title={
            <>
              Ógleymanlegar stundir <br className="hidden md:block" />
              á Ítalíu með Bella Italia
            </>
          }
          text="Villur & hús um alla Ítalíu og öðruvísi ferðir um Róm og nágrenni. Persónuleg þjónusta fyrir einstaklinga og hópa, stóra sem smáa – þar sem hvert augnablik verður að sögu."
          actions={
            <>
              <Link href="/rom" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Skoða Róm <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link href="/villur" className="inline-flex items-center rounded-full glass text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/25 transition-colors">
                Skoða villur
              </Link>
            </>
          }
          scrollTo="#thjonusta"
        />

        {/* ═══════════════ TÖLUR ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-16">
          <RevealOnScroll>
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-ink/10 pl-5">
                  <dd className="font-display text-3xl md:text-4xl font-medium tracking-tight text-forest">{s.value}</dd>
                  <dt className="mt-1 text-sm text-ink/55">{s.label}</dt>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </section>

        {/* ═══════════════ RÓM / VILLUR ═══════════════ */}
        <section id="thjonusta" className="mx-auto max-w-[1400px] px-3 md:px-4 scroll-mt-24">
          <RevealOnScroll>
            <div className="px-3 md:px-6 mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Þjónusta okkar</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
                  Róm & villur á Ítalíu
                </h2>
              </div>
              <p className="text-ink/60 max-w-md md:text-right">
                Borgarferð til Rómar með leiðsögn heimamanna, vika í villu með sundlaug í
                ítalskri sveit – eða hvort tveggja.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              {
                href: "/rom",
                img: "/images/card-rom.jpg",
                alt: "Colosseum í Róm",
                tag: "Borgin eilífa",
                title: "Róm",
                text: "Vatíkanið og Colosseum með leiðsögn, vespuferðir, gönguferðir með Rómverjum, matreiðslunámskeið, flugvallarakstur, gisting og dagsferðir til Napoli, Amalfi og Capri.",
                cta: `${tours.length} ferðir & þjónustur`,
              },
              {
                href: "/villur",
                img: "/images/card-villur.jpg",
                alt: "Villa með sundlaug í ítalskri sveit",
                tag: "Toskana · Umbria · Le Marche · Puglia · Sikiley",
                title: "Villur",
                text: "Villur og hús með sundlaug um alla Ítalíu í öllum verðflokkum. Við finnum réttu eignina fyrir ykkar hóp og öll okkar þjónusta er gjaldfrjáls þegar bókað er í gegnum okkur.",
                cta: "Skoða villur",
              },
            ].map((c) => (
              <RevealOnScroll key={c.href}>
                <Link href={c.href} className="group relative block h-[520px] md:h-[640px] rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <span className="absolute top-5 left-5 rounded-full glass px-4 py-2 text-xs text-white">{c.tag}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 text-white">
                    <h3 className="font-display text-5xl md:text-6xl font-medium tracking-tight">{c.title}</h3>
                    <p className="mt-4 text-white/80 leading-relaxed max-w-md">{c.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 text-sm font-semibold group-hover:bg-sand-light transition-colors">
                      {c.cta} <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════════ VINSÆLAR UPPLIFANIR ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-32">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Vinsælast í Róm</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                  Upplifanir sem gestir mæla með
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
                <Link href={`/rom#${t.id}`} className="group block rounded-3xl bg-white border border-ink/5 overflow-hidden hover:shadow-[0_20px_50px_-20px_rgba(7,21,23,0.25)] transition-shadow duration-500">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={t.image} alt={t.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 rounded-full glass px-3 py-1.5 text-xs text-white">{t.tag}</span>
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
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <RevealOnScroll className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
                  <Image src="/images/gallery-08.jpg" alt="Kvöldverður á verönd í Toskana" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-5 md:-right-8 rounded-3xl bg-white p-4 shadow-xl flex items-center gap-4 border border-ink/5">
                  <Image src="/images/logo.jpg" alt="" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" />
                  <div className="pr-2">
                    <span className="block text-sm font-semibold">Hildur</span>
                    <span className="text-xs text-ink/55">{site.legalName}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="lg:col-span-7">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Um Bella Italia</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Persónuleg þjónusta frá Róm til Toskana
              </h2>
              <div className="mt-6 space-y-4 text-ink/65 leading-relaxed text-[17px]">
                <p>
                  Bella Italia er lítið íslenskt fyrirtæki með rætur í Róm. Hildur skipuleggur
                  ferðir fyrir Íslendinga um Róm og nágrenni og finnur villur og hús um alla
                  Ítalíu – fyrir fjölskyldur, vinahópa, fyrirtæki og sérstök tilefni.
                </p>
                <p>
                  Við vinnum með örfáum traustum samstarfsaðilum og þú færð persónulegar
                  ráðleggingar fyrir ferðina og á meðan henni stendur.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {why.map((w) => (
                  <div key={w.title} className="rounded-3xl bg-mist p-5">
                    <h3 className="font-display text-lg font-medium">{w.title}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{w.text}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════ MYNDARÚLLA ═══════════════ */}
        <section className="pt-24 md:pt-32">
          <GalleryStrip />
        </section>

        {/* ═══════════════ UMSAGNIR ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-3 md:px-4 pt-24 md:pt-32">
          <RevealOnScroll>
            <Testimonials />
          </RevealOnScroll>
        </section>

        {/* ═══════════════ HAFA SAMBAND ═══════════════ */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Hafa samband</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Byrjum að skipuleggja
              </h2>
              <p className="mt-4 text-ink/60 max-w-xl mx-auto">
                Það kostar ekkert að fá tilboð. Sendu okkur línu og við finnum réttu ferðina
                eða eignina fyrir ykkur.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <MailIcon />, title: "Netfang", value: site.email, href: `mailto:${site.email}` },
              { icon: <PhoneIcon />, title: "Sími (Ísland)", value: site.phoneIS, href: `tel:${site.phoneIS.replace(/\s/g, "")}` },
              { icon: <WhatsAppIcon className="w-6 h-6" />, title: "WhatsApp (Ítalía)", value: site.phoneIT, href: site.whatsapp },
            ].map((c) => (
              <RevealOnScroll key={c.title}>
                <a href={c.href} className="group flex items-center gap-4 rounded-3xl bg-white border border-ink/5 p-5 hover:border-forest/30 hover:shadow-[0_20px_50px_-20px_rgba(7,21,23,0.2)] transition-all">
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
