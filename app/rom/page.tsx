import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import TourCard from "../components/TourCard";
import RomInquiry from "../components/RomInquiry";
import { tours, site } from "../data/site";
import { ArrowIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Róm – ferðir & upplifanir | Bella Italia",
  description:
    "Vatíkanið og Colosseum með leiðsögn, vespuferðir, gönguferðir með Rómverjum, matreiðslunámskeið, flugvallarakstur, gisting í Róm og ferðir til Napoli, Amalfi og Capri.",
};

const byId = Object.fromEntries(tours.map((t) => [t.id, t]));
const groups = [
  {
    eyebrow: "Með leiðsögn",
    title: "Róm með Rómverjum",
    text: "Leiðsögn á ensku í litlum hópum (max 10 manns) frá faglærðum leiðsögumönnum sem vita allt og meira til um sögu Rómaveldis.",
    ids: ["vatikan", "colosseum", "ganga"],
  },
  {
    eyebrow: "Á hjólum",
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
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/hero-rome-street.jpg"
          imageAlt="Gata í Róm með bougainvillea"
          eyebrow="Bella Italia · Róm"
          title={
            <>
              Öðruvísi ferðir um <br className="hidden md:block" />
              borgina eilífu
            </>
          }
          text="Leiðsögn í litlum hópum, vespur, matur og allt sem gerir dvölina í Róm áhyggjulausa – með Rómverjum sem þekkja borgina eins og lófann á sér."
          actions={
            <>
              <a href="#ferdir" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Skoða ferðir <ArrowIcon className="w-4 h-4" />
              </a>
              <a href="#fyrirspurn" className="inline-flex items-center rounded-full glass text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/25 transition-colors">
                Senda fyrirspurn
              </a>
            </>
          }
          scrollTo="#ferdir"
          minHeight="min-h-[86vh]"
        />

        {/* Flýtival */}
        <section id="ferdir" className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 scroll-mt-24">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap [scrollbar-width:none]">
            {tours.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="shrink-0 rounded-full border border-ink/12 bg-white px-4 py-2 text-sm text-ink/75 hover:bg-ink hover:text-white hover:border-ink transition-colors"
              >
                {t.shortTitle}
              </a>
            ))}
          </div>
        </section>

        {groups.map((g, gi) => (
          <section key={g.title} className={`mx-auto max-w-[1400px] px-6 md:px-10 ${gi === 0 ? "pt-14 md:pt-20" : "pt-24 md:pt-32"}`}>
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">{g.eyebrow}</span>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">{g.title}</h2>
                </div>
                <p className="text-ink/60 max-w-md md:text-right">{g.text}</p>
              </div>
            </RevealOnScroll>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${g.ids.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4 md:gap-5`}>
              {g.ids.map((id) => (
                <RevealOnScroll key={id} className="h-full">
                  <TourCard tour={byId[id]} />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="mx-auto max-w-[1400px] px-3 md:px-4 pt-24 md:pt-32">
          <RevealOnScroll>
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] bg-ink text-white p-8 md:p-14 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-forest/50 blur-3xl" />
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Hópar & sérstök tilefni</span>
                  <h2 className="mt-3 font-display text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                    Afmæli, vinahópur eða fyrirtækjaferð?
                  </h2>
                  <p className="mt-4 text-white/70 max-w-xl">
                    Við útbúum ferðina allt eftir óskum – fyrir stóra sem litla hópa, fjölskyldur
                    og fyrirtæki. Endilega sendið okkur fyrirspurn og við gefum ykkur tilboð.
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
        <section id="fyrirspurn" className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-32 pb-24 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Róm</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Senda fyrirspurn</h2>
              <p className="mt-4 text-ink/60">
                Veldu viðburð og við höfum samband með tilboð og lausa tíma.
              </p>
              <p className="mt-6 text-sm text-ink/50">
                Viltu frekar hringja?
                <br />
                {site.phoneIS} (Ísland)
                <br />
                {site.phoneIT} (Ítalía / WhatsApp)
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[2rem] bg-white border border-ink/5 p-6 md:p-10">
                <RomInquiry />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Villur cross-link */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-8">
          <RevealOnScroll>
            <div className="rounded-3xl bg-mist p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Lengri dvöl?</span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-medium tracking-tight">
                  Sameinaðu Róm og viku í villu í sveitinni
                </h3>
              </div>
              <Link href="/villur" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3.5 text-sm font-semibold hover:bg-forest transition-colors">
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
