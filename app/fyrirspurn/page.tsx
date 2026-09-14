import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden grain">
          <Image
            src="/images/gallery-05.jpg"
            alt="Ponte Vecchio í Flórens"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0D0905]" />
          <div className="relative z-10 text-center px-6 max-w-4xl pt-24">
            <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase animate-fade-up">Fyrirspurn</span>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-8xl font-bold text-cream tracking-wide animate-fade-up-delay-1 leading-none">
              BYRJUM
            </h1>
            <p className="mt-6 text-lg text-cream/70 font-light animate-fade-up-delay-2">
              Segðu okkur frá ferðinni sem þig dreymir um – það kostar ekkert að fá tilboð.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#0D0905]">
          <div className="mx-auto max-w-3xl px-6">
            <RevealOnScroll>
              <InquiryForm variant="almenn" />
              <p className="mt-10 text-center text-xs text-cream/40">
                Eða hringdu: {site.phoneIS} (Ísland) · {site.phoneIT} (Ítalía / WhatsApp)
              </p>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
