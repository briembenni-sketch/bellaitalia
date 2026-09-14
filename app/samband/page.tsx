import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import { site } from "../data/site";
import { ArrowIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Hafa samband | Bella Italia",
  description:
    "Hafðu samband við Hildi hjá Bella Italia – sími +354 869 4556, WhatsApp +39 338 698 5868, hildur.bellaitalia@gmail.com.",
};

export default function SambandPage() {
  const cards = [
    { icon: <PhoneIcon />, title: "Sími", value: site.phoneIS, sub: "Ísland", href: `tel:${site.phoneIS.replace(/\s/g, "")}` },
    { icon: <MailIcon />, title: "Netfang", value: site.email, sub: "Við svörum yfirleitt innan sólarhrings", href: `mailto:${site.email}` },
    { icon: <WhatsAppIcon className="w-6 h-6" />, title: "WhatsApp sími", value: site.phoneIT, sub: "Ítalía", href: site.whatsapp },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/gallery-03.jpg"
          imageAlt="Þök og kirkjuhvelfingar Rómar"
          title="Hafa samband"
          text="Hér eru allar helstu upplýsingar til þess að hafa samband. Það kostar ekkert að fá tilboð."
          size="short"
        />

        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {cards.map((c) => (
              <RevealOnScroll key={c.title}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block rounded-3xl bg-white border border-ink/5 p-8 h-full hover:border-forest/30 transition-colors"
                >
                  <span className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-colors">
                    {c.icon}
                  </span>
                  <h2 className="mt-6 text-xs text-ink/50">{c.title}</h2>
                  <p className="mt-1 font-display text-2xl font-medium tracking-tight break-all">{c.value}</p>
                  <p className="mt-1 text-sm text-ink/50">{c.sub}</p>
                </a>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-[1.5rem] md:rounded-[2.5rem] bg-ink text-white p-6 sm:p-8 md:p-14 overflow-hidden relative">
              
              <div className="relative lg:col-span-8">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{site.legalName}</span>
                <h2 className="mt-3 font-display text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                  Hildur – Róm & Villur á Ítalíu
                </h2>
                <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
                  Sendu okkur fyrirspurn um ferð til Rómar, villu á Ítalíu eða hvort tveggja. Við
                  sníðum allt að ykkar óskum.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/fyrirspurn" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors">
                    Senda fyrirspurn <ArrowIcon className="w-4 h-4" />
                  </Link>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm hover:bg-white hover:text-ink transition-colors">
                    <InstagramIcon className="w-4 h-4" /> Instagram
                  </a>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm hover:bg-white hover:text-ink transition-colors">
                    <FacebookIcon className="w-4 h-4" /> Facebook
                  </a>
                </div>
              </div>
              <div className="relative lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-[2rem] overflow-hidden ring-1 ring-white/15">
                  <Image src="/images/logo.jpg" alt="Bella Italia merki" fill sizes="240px" className="object-cover" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
