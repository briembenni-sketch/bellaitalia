import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";
import GalleryStrip from "./components/GalleryStrip";
import Divider from "./components/Divider";
import { site, tours } from "./data/site";
import { ArrowIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./components/Icons";

const featured = tours.filter((t) => ["vatikan", "vespa", "sidecar", "matreidsla"].includes(t.id));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-rome-street.jpg"
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-gold/8 blur-[140px]" />

          <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
            <span className="inline-block text-gold/90 text-xs font-medium tracking-[0.5em] uppercase animate-fade-up">
              Bella Italia · Róm & Villur á Ítalíu
            </span>

            <h1 className="mt-8 font-serif text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-bold text-cream tracking-[0.04em] animate-fade-up-delay-1 leading-[0.85]">
              UPPLIFÐU
              <br />
              <span className="text-gold">ÍTALÍU</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-cream/70 font-light max-w-2xl mx-auto animate-fade-up-delay-2 leading-relaxed">
              Villur & hús um alla Ítalíu. Persónuleg þjónusta og öðruvísi ferðir
              um Róm og nágrenni — fyrir einstaklinga og hópa, stóra sem smáa.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center animate-fade-up-delay-3">
              <Link
                href="/rom"
                className="inline-block px-10 py-4 bg-gold text-[#1C0F0A] text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
              >
                Róm
              </Link>
              <Link
                href="/villur"
                className="inline-block px-10 py-4 border border-cream/40 text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-cream/10 transition-all duration-500"
              >
                Villur
              </Link>
            </div>
          </div>

        </section>

        {/* ═══════════════════════ 2. RÓM / VILLUR ═══════════════════════ */}
        <section id="thjonusta" className="bg-[#F0E6D3] scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">
                  Þjónusta okkar
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                  Róm <span className="text-terracotta italic">&</span> Villur á Ítalíu
                </h2>
                <p className="mt-6 text-brown/55 max-w-2xl mx-auto leading-relaxed">
                  Hvort sem þig dreymir um borgarferð til Rómar með leiðsögn heimamanna
                  eða viku í villu með sundlaug í ítalskri sveit – við sníðum ferðina
                  að ykkar óskum.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RevealOnScroll>
                <Link href="/rom" className="block">
                  <article className="group relative h-[520px] md:h-[620px] overflow-hidden">
                    <Image
                      src="/images/card-rom.jpg"
                      alt="Colosseum í Róm"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-all duration-500 group-hover:from-black/90" />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-all duration-500" />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-3 py-1.5 bg-terracotta text-cream text-[10px] font-medium tracking-[0.2em] uppercase">
                        Borgin eilífa
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
                      <h3 className="font-serif text-5xl md:text-6xl text-white leading-[0.9] drop-shadow-lg">RÓM</h3>
                      <p className="mt-4 text-white/75 text-sm md:text-base leading-relaxed max-w-md">
                        Vatíkanið og Colosseum með leiðsögn, vespuferðir, gönguferðir með
                        Rómverjum, matreiðslunámskeið, flugvallarakstur, gisting og
                        dagsferðir til Napoli, Amalfi og Capri.
                      </p>
                      <div className="mt-5 pt-4 border-t border-white/10">
                        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold group-hover:tracking-[0.25em] transition-all duration-500 inline-flex items-center gap-2">
                          Skoða {tours.length} ferðir & þjónustu <ArrowIcon />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </RevealOnScroll>

              <RevealOnScroll>
                <Link href="/villur" className="block">
                  <article className="group relative h-[520px] md:h-[620px] overflow-hidden">
                    <Image
                      src="/images/card-villur.jpg"
                      alt="Villa með sundlaug í ítalskri sveit"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-all duration-500 group-hover:from-black/90" />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-all duration-500" />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-3 py-1.5 bg-terracotta text-cream text-[10px] font-medium tracking-[0.2em] uppercase">
                        Toskana · Umbria · Le Marche · Puglia · Sikiley
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
                      <h3 className="font-serif text-5xl md:text-6xl text-white leading-[0.9] drop-shadow-lg">VILLUR</h3>
                      <p className="mt-4 text-white/75 text-sm md:text-base leading-relaxed max-w-md">
                        Villur og hús með sundlaug um alla Ítalíu í öllum verðflokkum.
                        Við finnum réttu eignina fyrir ykkar hóp – og öll okkar þjónusta
                        er gjaldfrjáls þegar bókað er í gegnum okkur.
                      </p>
                      <div className="mt-5 pt-4 border-t border-white/10">
                        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold group-hover:tracking-[0.25em] transition-all duration-500 inline-flex items-center gap-2">
                          Skoða villur <ArrowIcon />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════ 3. UM BELLA ITALIA ═══════════════════════ */}
        <section className="relative py-24 md:py-32 bg-[#F0E6D3] overflow-hidden">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <RevealOnScroll className="md:col-span-5">
                <div className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/gallery-08.jpg"
                      alt="Kvöldverður á verönd í Toskana"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 -z-0" />
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 overflow-hidden ring-4 ring-[#F0E6D3] hidden sm:block">
                    <Image src="/images/logo.jpg" alt="Bella Italia merki" fill sizes="160px" className="object-cover" />
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="md:col-span-7">
                <div>
                  <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">
                    Um Bella Italia
                  </span>
                  <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                    Persónuleg þjónusta <br />
                    <span className="text-terracotta italic">frá Róm til Toskana</span>
                  </h2>
                  <div className="mt-8 space-y-5 text-brown/65 leading-relaxed">
                    <p>
                      Bella Italia er lítið íslenskt fyrirtæki með rætur í Róm. Hildur
                      skipuleggur ferðir fyrir Íslendinga um Róm og nágrenni og finnur
                      villur og hús um alla Ítalíu – fyrir fjölskyldur, vinahópa,
                      fyrirtæki og sérstök tilefni.
                    </p>
                    <p>
                      Við vinnum með örfáum traustum samstarfsaðilum: faglærðum
                      leiðsögumönnum, bílstjórum, kokkum og ljósmyndurum. Þú færð
                      persónulegar ráðleggingar fyrir ferðina og við erum til staðar
                      allan tímann á meðan henni stendur.
                    </p>
                  </div>

                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-brown/80">
                    {[
                      "Gjaldfrjáls þjónusta þegar bókað er í gegnum okkur",
                      "Litlir hópar – max 10 manns í leiðsögn",
                      "Íslensk þjónusta, ítölsk tengsl",
                      "Til staðar 24/7 á meðan dvöl stendur",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-gold mt-1">◆</span> {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-px bg-gold" />
                    <span className="text-sm text-terracotta tracking-wider italic">
                      Hildur — {site.legalName}
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ 4. VINSÆLAR UPPLIFANIR ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#1C0F0A]">
          <div className="mx-auto max-w-7xl px-6">
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                <div>
                  <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">Vinsælast í Róm</span>
                  <h2 className="mt-4 font-serif text-4xl md:text-5xl text-cream leading-tight">
                    Upplifanir sem gestir <span className="text-gold italic">mæla með</span>
                  </h2>
                </div>
                <Link
                  href="/rom"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors"
                >
                  Allar ferðir <ArrowIcon />
                </Link>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((t) => (
                <RevealOnScroll key={t.id}>
                  <Link href={`/rom#${t.id}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/50 border border-gold/40 text-gold text-[10px] tracking-[0.15em]">
                        {t.priceLabel}
                      </div>
                      <div className="absolute bottom-0 p-5">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80">{t.tag}</span>
                        <h3 className="mt-1 font-serif text-2xl text-white leading-tight">{t.title}</h3>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ 5. MYNDARÚLLA ═══════════════════════ */}
        <section className="py-16 bg-[#1C0F0A] border-t border-cream/5">
          <GalleryStrip />
        </section>

        {/* ═══════════════════════ 6. UMSAGNIR ═══════════════════════ */}
        <section className="relative py-24 md:py-32 bg-[#1C0F0A] overflow-hidden border-t border-cream/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[150px]" />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-6">
                <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">Umsagnir gesta</span>
              </div>
              <Testimonials />
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════ 7. HAFA SAMBAND ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#F0E6D3]">
          <div className="mx-auto max-w-6xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-14">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">Hafa samband</span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-brown leading-tight">
                  Byrjum að <span className="text-terracotta italic">skipuleggja</span>
                </h2>
                <p className="mt-5 text-brown/55 max-w-xl mx-auto">
                  Það kostar ekkert að fá tilboð. Sendu okkur línu og við finnum réttu
                  ferðina eða eignina fyrir ykkur.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <MailIcon />, title: "Netfang", value: site.email, href: `mailto:${site.email}` },
                { icon: <PhoneIcon />, title: "Sími (Ísland)", value: site.phoneIS, href: `tel:${site.phoneIS.replace(/\s/g, "")}` },
                { icon: <WhatsAppIcon className="w-6 h-6" />, title: "WhatsApp (Ítalía)", value: site.phoneIT, href: site.whatsapp },
              ].map((c) => (
                <RevealOnScroll key={c.title}>
                  <a
                    href={c.href}
                    className="group block text-center p-8 bg-white/70 hover:bg-white transition-colors border border-transparent hover:border-gold/30"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta/10 text-terracotta mb-4 group-hover:bg-terracotta group-hover:text-cream transition-colors">
                      {c.icon}
                    </div>
                    <h3 className="text-[11px] tracking-[0.3em] uppercase text-brown/50">{c.title}</h3>
                    <p className="mt-2 font-serif text-xl text-brown">{c.value}</p>
                  </a>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="/fyrirspurn"
                  className="inline-block px-12 py-4 bg-terracotta text-cream text-sm font-bold tracking-[0.2em] uppercase hover:bg-terracotta-dark transition-colors"
                >
                  Senda fyrirspurn
                </Link>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-brown/60 hover:text-terracotta transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" /> {site.instagramHandle}
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
