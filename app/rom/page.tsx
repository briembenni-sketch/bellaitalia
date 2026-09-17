import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import TourCard from "../components/TourCard";
import RomInquiry from "../components/RomInquiry";
import { cityDestinations } from "../data/site";
import { getContent } from "../lib/content";
import { ArrowIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Róm – ferðir & upplifanir | Bella Italia",
  description:
    "Vatíkanið og Colosseum með leiðsögn, vespuferðir, gönguferðir með Rómverjum, matreiðslunámskeið, flugvallarakstur, gisting í Róm og ferðir til Napoli, Amalfi og Capri.",
};

const groups = [
  {
    eyebrow: "Með leiðsögn",
    title: "Róm með Rómverjum",
    text: "Leiðsögn á ensku í litlum hópum (max 10 manns) frá faglærðum leiðsögumönnum sem vita allt og meira til um sögu Rómaveldis.",
    ids: ["vatikan", "colosseum", "ganga"],
  },
  {
    eyebrow: "Vespur & golfbílar",
    title: "Vertu eins og innfæddur",
    text: "Láttu keyra þig um þröngar götur Rómar á vespu, í hliðarvagni eða á golfbíl – með bílstjóra og leiðsögn.",
    ids: ["vespa", "sidecar", "golfbill"],
  },
  {
    eyebrow: "Meira í boði",
    title: "Matur, dagsferðir & þjónusta",
    text: "Matreiðslunámskeið, ferðir til Napoli, Amalfi og Capri, flugvallarakstur og gisting í Róm.",
    ids: ["matreidsla", "amalfi", "flugvollur", "gisting"],
  },
];

export default function RomPage() {
  const { tours, site } = getContent();
  const byId = Object.fromEntries(tours.map((t) => [t.id, t]));
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/hero-rome-2.jpg"
          imageAlt="Gata í Róm með bougainvillea"
          title="Öðruvísi ferðir um Róm og nágrenni"
          text="Skoðunarferðir með leiðsögn í litlum hópum, vespuferðir, matreiðslunámskeið, flugvallarakstur og gisting. Þjónusta fyrir einstaklinga og hópa, stóra sem smáa."
          actions={
            <>
              <a href="#ferdir" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Skoða ferðir <ArrowIcon className="w-4 h-4" />
              </a>
              <a href="#fyrirspurn" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Senda fyrirspurn
              </a>
            </>
          }
          scrollTo="#ferdir"
        />

        {/* Flýtival */}
        <section id="ferdir" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-8 md:pt-10 scroll-mt-24">
          <div className="flex gap-x-6 gap-y-3 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap">
            {tours.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="shrink-0 border-b border-white/20 pb-1 text-sm text-white/70 hover:text-white hover:border-white transition-colors"
              >
                {t.shortTitle}
              </a>
            ))}
          </div>
        </section>

        {groups.map((g, gi) => (
          <section key={g.title} className={`mx-auto max-w-[1400px] px-5 md:px-10 ${gi === 0 ? "pt-12 md:pt-20" : "pt-20 md:pt-32"}`}>
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{g.eyebrow}</span>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">{g.title}</h2>
                </div>
                <p className="text-white/60 max-w-md md:text-right">{g.text}</p>
              </div>
            </RevealOnScroll>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${g.ids.length === 4 ? "xl:grid-cols-4" : "lg:grid-cols-3"} gap-4 md:gap-5`}>
              {g.ids.map((id) => (
                <RevealOnScroll key={id} className="h-full">
                  <TourCard tour={byId[id]} />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        ))}

        {/* Hópar */}
        <section className="relative mt-20 md:mt-32 min-h-[70svh] flex items-center overflow-hidden">
          <Image src="/images/rome-pantheon.jpg" alt="Pantheon í Róm við sólarupprás" fill quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/25" />
          <RevealOnScroll className="relative z-10 w-full">
            <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 text-white">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="md:col-span-8">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Hópar & sérstök tilefni</span>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                    Tilvalið fyrir stóra sem litla hópa
                  </h2>
                  <p className="mt-4 text-white/70 max-w-xl">
                    Við getum útbúið ferðina allt eftir óskum – fyrir fjölskyldur, vinahópa og
                    fyrirtæki. Verð fer eftir fjölda þátttakenda, sendið okkur fyrirspurn og við
                    gefum ykkur tilboð.
                  </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <a href="#fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-4 text-sm font-semibold hover:bg-sand-light transition-colors">
                    Fá tilboð <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* Fyrirspurn */}
        <section id="fyrirspurn" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 pb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Róm</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Senda fyrirspurn</h2>
              <p className="mt-4 text-white/60">Veldu viðburð og við höfum samband með tilboð og lausa tíma.</p>
              <p className="mt-6 text-sm text-white/50">
                {site.phoneIS} (Ísland)
                <br />
                {site.phoneIT} (Ítalía / WhatsApp)
                <br />
                {site.email}
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 p-5 sm:p-6 md:p-10">
                <RomInquiry tourOptions={tours.map((t) => t.title)} email={site.email} />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Aðrar borgir */}
        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-10">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Fleiri borgir</span>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.05]">Flórens, Napoli & Feneyjar</h2>
              </div>
              <Link href="/borgir" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white hover:text-ink transition-colors w-fit">
                Allar borgir <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
            {cityDestinations.map((o) => (
              <RevealOnScroll key={o.slug}>
                <Link href={`/borgir/${o.slug}`} className="group relative block aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-ink">
                  <Image src={o.cardImage} alt={o.imageAlt} fill quality={85} sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                  <div className="absolute bottom-0 p-5 text-white">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-sand">{o.eyebrow}</span>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-medium tracking-tight">{o.title}</h3>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-8">
          <RevealOnScroll>
            <div className="rounded-3xl bg-white/8 p-5 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Villur</span>
                <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">
                  Róm og vika í villu á Ítalíu í sömu ferð
                </h3>
              </div>
              <Link href="/villur" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3.5 text-sm font-semibold hover:bg-forest transition-colors w-fit">
                Skoða villur <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
