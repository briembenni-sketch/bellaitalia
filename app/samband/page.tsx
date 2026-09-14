import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";
import { site } from "../data/site";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Hafa samband | Bella Italia",
  description:
    "Hafðu samband við Hildi hjá Bella Italia – sími +354 869 4556, WhatsApp +39 338 698 5868, hildur.bellaitalia@gmail.com.",
};

export default function SambandPage() {
  const cards = [
    {
      icon: <PhoneIcon />,
      title: "Sími",
      value: site.phoneIS,
      sub: "Ísland",
      href: `tel:${site.phoneIS.replace(/\s/g, "")}`,
    },
    {
      icon: <MailIcon />,
      title: "Netfang",
      value: site.email,
      sub: "Við svörum yfirleitt innan sólarhrings",
      href: `mailto:${site.email}`,
    },
    {
      icon: <WhatsAppIcon className="w-6 h-6" />,
      title: "WhatsApp sími",
      value: site.phoneIT,
      sub: "Ítalía",
      href: site.whatsapp,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden grain">
          <Image
            src="/images/gallery-03.jpg"
            alt="Þök og kirkjuhvelfingar Rómar"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
          <div className="relative z-10 text-center px-6 max-w-4xl pt-24">
            <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase animate-fade-up">Bella Italia</span>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-8xl font-bold text-cream tracking-wide animate-fade-up-delay-1 leading-none">
              HAFA SAMBAND
            </h1>
            <p className="mt-6 text-lg text-cream/70 font-light animate-fade-up-delay-2">
              Hér eru allar helstu upplýsingar til þess að hafa samband.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[#F0E6D3]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((c) => (
                <RevealOnScroll key={c.title}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block text-center p-10 bg-white/70 hover:bg-white transition-colors border border-transparent hover:border-gold/30 h-full"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta/10 text-terracotta mb-5 group-hover:bg-terracotta group-hover:text-cream transition-colors">
                      {c.icon}
                    </div>
                    <h2 className="text-[11px] tracking-[0.3em] uppercase text-brown/50">{c.title}</h2>
                    <p className="mt-2 font-serif text-2xl text-brown break-all">{c.value}</p>
                    <p className="mt-1 text-xs text-brown/45">{c.sub}</p>
                  </a>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-brown text-cream p-10 md:p-14">
                <div>
                  <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">{site.legalName}</span>
                  <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                    Hildur – <span className="text-gold italic">Róm & Villur á Ítalíu</span>
                  </h2>
                  <p className="mt-5 text-cream/70 leading-relaxed">
                    Sendu okkur fyrirspurn um ferð til Rómar, villu á Ítalíu eða hvort
                    tveggja. Það kostar ekkert að fá tilboð og við sníðum allt að ykkar
                    óskum.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/fyrirspurn"
                      className="inline-block px-8 py-3.5 bg-gold text-[#1C0F0A] text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
                    >
                      Senda fyrirspurn
                    </Link>
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 border border-cream/25 text-cream text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4" /> Instagram
                    </a>
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 border border-cream/25 text-cream text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
                    >
                      <FacebookIcon className="w-4 h-4" /> Facebook
                    </a>
                  </div>
                </div>
                <div className="relative aspect-square max-w-xs mx-auto w-full">
                  <Image src="/images/logo.jpg" alt="Bella Italia merki" fill sizes="320px" className="object-cover ring-1 ring-gold/30" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
