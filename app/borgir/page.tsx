import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import InquiryForm from "../components/InquiryForm";
import { getContent } from "../lib/content";
import { ArrowIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Róm & aðrar borgir – skoðunarferðir og skipulagning | Bella Italia",
  description:
    "Skoðunarferðir og aðstoð við að skipuleggja ferðina í Róm, Flórens, Napoli, Amalfi, Pompei og Feneyjum. Leiðsögn, miðakaup, einkabílar og transfer.",
};

export default function BorgirPage() {
  const { destinations, tours, site } = getContent();
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/dest-napoli.jpg"
          imageAlt="Napoliflói með Vesúvíus í baksýn"
          title="Róm og aðrar borgir á Ítalíu"
          text="Skoðunarferðir með leiðsögn, miðakaup, einkabílar og aðstoð við að skipuleggja borgarferðina – í Róm, Flórens, Napoli, Amalfi, Pompei og Feneyjum."
          actions={
            <>
              <a href="#borgir" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                Velja borg <ArrowIcon className="w-4 h-4" />
              </a>
              <a href="#fyrirspurn" className="inline-flex items-center rounded-full tint text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors">
                Senda fyrirspurn
              </a>
            </>
          }
          scrollTo="#borgir"
        />

        <section id="borgir" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-28 scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Skoðunarferðir & skipulagning</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Hvert á að fara?</h2>
              </div>
              <p className="text-white/60 max-w-md md:text-right">
                Við vinnum fyrst og fremst með þessa fjóra áfangastaði og setjum saman dagskrá, leiðsögn og miða fyrir ykkur.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {destinations.map((d, i) => (
              <RevealOnScroll key={d.slug} className={i === 0 ? "md:col-span-2" : ""}>
                <Link
                  href={d.custom ? `/${d.slug}` : `/borgir/${d.slug}`}
                  className={`group relative block rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-ink ${i === 0 ? "h-[420px] md:h-[520px]" : "h-[380px] md:h-[460px]"}`}
                >
                  <Image
                    src={d.cardImage}
                    alt={d.imageAlt}
                    fill
                    quality={85}
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <span className="absolute top-4 left-4 md:top-5 md:left-5 rounded-full tint px-3.5 py-1.5 text-xs text-white">{d.eyebrow}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight">{d.title}</h3>
                    <p className="mt-3 text-white/80 text-[15px] md:text-base leading-relaxed max-w-xl">{d.lead}</p>
                    <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 text-sm font-semibold group-hover:bg-sand-light transition-colors">
                      {d.custom ? `Skoða ${tours.length} ferðir í Róm` : `Skoða ${d.name}`} <ArrowIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section id="fyrirspurn" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-32 pb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Skipulagning</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">Ekki viss hvar á að byrja?</h2>
              <p className="mt-4 text-white/60">
                Segðu okkur hvenær þið farið, hve mörg þið eruð og hvað ykkur langar að sjá – við bendum á
                bestu leiðina og setjum saman dagskrá.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 p-5 sm:p-6 md:p-10">
                <InquiryForm variant="almenn" email={site.email} />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
