import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import InquiryForm from "../components/InquiryForm";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Senda fyrirspurn | Bella Italia",
  description: "Sendu okkur fyrirspurn um ferð til Rómar, villu á Ítalíu eða sérsniðna ferð. Það kostar ekkert að fá tilboð.",
};

export default function FyrirspurnPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/gallery-05.jpg"
          imageAlt="Ponte Vecchio í Flórens"
          eyebrow="Fyrirspurn"
          title="Byrjum að skipuleggja"
          text="Segðu okkur frá ferðinni sem þig dreymir um – það kostar ekkert að fá tilboð."
          minHeight="min-h-[60vh]"
        />

        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Hvernig virkar þetta?</span>
              <ol className="mt-5 space-y-5">
                {[
                  ["Sendu fyrirspurn", "Segðu okkur hvað þig langar að gera, hvenær og hve mörg þið eruð."],
                  ["Við gerum tilboð", "Hildur svarar með hugmyndum, verðum og lausum tímum – yfirleitt innan sólarhrings."],
                  ["Njóttu Ítalíu", "Við sjáum um skipulagið og erum til staðar á meðan ferðinni stendur."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-forest text-white text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                    <div>
                      <h3 className="font-medium">{t}</h3>
                      <p className="mt-1 text-sm text-ink/60 leading-relaxed">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-ink/50">
                Eða hringdu:
                <br />
                {site.phoneIS} (Ísland)
                <br />
                {site.phoneIT} (Ítalía / WhatsApp)
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[2rem] bg-white border border-ink/5 p-6 md:p-10">
                <InquiryForm variant="almenn" />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
