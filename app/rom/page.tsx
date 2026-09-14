import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";
import TourCard from "../components/TourCard";
import RomInquiry from "../components/RomInquiry";
import Divider from "../components/Divider";
import { tours, site } from "../data/site";

export const metadata: Metadata = {
  title: "Róm – ferðir & upplifanir | Bella Italia",
  description:
    "Vatíkanið og Colosseum með leiðsögn, vespuferðir, gönguferðir með Rómverjum, matreiðslunámskeið, flugvallarakstur, gisting í Róm og ferðir til Napoli, Amalfi og Capri.",
};

const byId = Object.fromEntries(tours.map((t) => [t.id, t]));
const groupA = ["vatikan", "colosseum", "ganga"].map((id) => byId[id]);
const groupB = ["vespa", "sidecar", "golfbill"].map((id) => byId[id]);
const groupC = ["matreidsla", "amalfi", "flugvollur", "gisting"].map((id) => byId[id]);

export default function RomPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grain">
          <Image
            src="/images/hero-rome-street.jpg"
            alt="Gata í Róm með bougainvillea"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />

          <div className="relative z-10 text-center px-6 max-w-5xl pt-24">
            <span className="inline-block text-gold/90 text-xs font-medium tracking-[0.4em] uppercase animate-fade-up">
              Bella Italia · Róm
            </span>
            <h1 className="mt-6 font-serif text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-bold text-cream tracking-[0.04em] animate-fade-up-delay-1 leading-[0.85]">
              RÓM
            </h1>
            <p className="mt-8 text-lg md:text-xl text-cream/70 font-light max-w-2xl mx-auto animate-fade-up-delay-2 leading-relaxed">
              Öðruvísi ferðir um borgina eilífu með Rómverjum – leiðsögn í litlum
              hópum, vespur, matur og allt sem gerir dvölina áhyggjulausa.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
              <a
                href="#ferdir"
                className="inline-block px-10 py-4 bg-gold text-[#1C0F0A] text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
              >
                Skoða ferðir
              </a>
              <a
                href="#fyrirspurn"
                className="inline-block px-10 py-4 border border-cream/40 text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-cream/10 transition-all"
              >
                Senda fyrirspurn
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ FLÝTIVAL ═══════════════════════ */}
        <section className="bg-[#1C0F0A] border-b border-cream/10">
          <div className="mx-auto max-w-7xl px-6 py-5 flex gap-x-6 gap-y-2 flex-wrap justify-center">
            {tours.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="text-[11px] tracking-[0.2em] uppercase text-cream/50 hover:text-gold transition-colors"
              >
                {t.shortTitle}
              </a>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ SKOÐUNARFERÐIR ═══════════════════════ */}
        <section id="ferdir" className="py-24 md:py-32 bg-[#F0E6D3] scroll-mt-16">
          <div className="mx-auto max-w-7xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">Með leiðsögn</span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                  Róm með <span className="text-terracotta italic">Rómverjum</span>
                </h2>
                <p className="mt-6 text-brown/55 max-w-xl mx-auto leading-relaxed">
                  Leiðsögn á ensku í litlum hópum (max 10 manns) frá faglærðum
                  leiðsögumönnum sem vita allt og meira til um sögu Rómaveldis.
                </p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupA.map((t) => (
                <RevealOnScroll key={t.id}>
                  <TourCard tour={t} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════ VESPUR & GOLFBÍLAR ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#F0E6D3]">
          <div className="mx-auto max-w-7xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">Á hjólum</span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                  Vertu eins og <span className="text-terracotta italic">innfæddur</span>
                </h2>
                <p className="mt-6 text-brown/55 max-w-xl mx-auto leading-relaxed">
                  Láttu keyra þig um þröngar götur Rómar á vespu, í hliðarvagni eða á
                  golfbíl – með bílstjóra og leiðsögn.
                </p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupB.map((t) => (
                <RevealOnScroll key={t.id}>
                  <TourCard tour={t} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CTA BANNER ═══════════════════════ */}
        <section className="relative overflow-hidden grain">
          <div className="absolute inset-0 bg-[#8B2500]" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[100px]" />
          <RevealOnScroll>
            <div className="relative z-10 py-20 px-8 text-center">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight">
                Hópur, afmæli eða <span className="text-gold italic">sérstakt tilefni?</span>
              </h3>
              <p className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
                Við útbúum ferðina allt eftir óskum – fyrir stóra sem litla hópa,
                fjölskyldur og fyrirtæki.
              </p>
              <a
                href="#fyrirspurn"
                className="mt-10 inline-block px-12 py-4 border border-cream/40 text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-cream/10 transition-all"
              >
                Fá tilboð
              </a>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════ MATUR, DAGSFERÐIR & ÞJÓNUSTA ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#1C0F0A]">
          <div className="mx-auto max-w-7xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">Meira í boði</span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
                  Matur, dagsferðir <span className="text-gold italic">& þjónusta</span>
                </h2>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groupC.map((t) => (
                <RevealOnScroll key={t.id}>
                  <TourCard tour={t} tall dark />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ FYRIRSPURN ═══════════════════════ */}
        <section id="fyrirspurn" className="py-24 md:py-32 bg-[#0D0905] scroll-mt-16">
          <div className="mx-auto max-w-3xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-10">
                <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">Róm</span>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl text-cream">
                  Senda <span className="text-gold italic">fyrirspurn</span>
                </h2>
                <p className="mt-4 text-cream/50 text-sm">
                  Veldu viðburð og við höfum samband með tilboð og lausa tíma.
                </p>
              </div>
              <RomInquiry />
              <p className="mt-10 text-center text-xs text-cream/40">
                Viltu frekar hringja? {site.phoneIS} (Ísland) · {site.phoneIT} (Ítalía / WhatsApp)
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════ VILLUR CROSS-LINK ═══════════════════════ */}
        <section className="relative py-20 bg-[#F0E6D3]">
          <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">Lengri dvöl?</span>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl text-brown">
                Sameinaðu Róm og viku í <span className="text-terracotta italic">villu í sveitinni</span>
              </h3>
            </div>
            <Link
              href="/villur"
              className="shrink-0 inline-block px-10 py-4 bg-brown text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-brown-light transition-colors"
            >
              Skoða villur
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
