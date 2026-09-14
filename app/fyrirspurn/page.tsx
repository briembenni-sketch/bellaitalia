import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import InquiryForm from "../components/InquiryForm";
import { site } from "../data/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Senda fyrirspurn | Bella Italia",
  description: "Sendu okkur fyrirspurn um ferð til Rómar, villu á Ítalíu eða sérsniðna ferð. Það kostar ekkert að fá tilboð.",
};

export default function FyrirspurnPage() {
  const contacts = [
    { icon: <MailIcon className="w-5 h-5" />, label: "Netfang", value: site.email, href: `mailto:${site.email}` },
    { icon: <PhoneIcon className="w-5 h-5" />, label: "Sími (Ísland)", value: site.phoneIS, href: `tel:${site.phoneIS.replace(/\s/g, "")}` },
    { icon: <WhatsAppIcon className="w-5 h-5" />, label: "WhatsApp (Ítalía)", value: site.phoneIT, href: site.whatsapp },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/gallery-05.jpg"
          imageAlt="Ponte Vecchio í Flórens"
          eyebrow="Fyrirspurn"
          title="Senda fyrirspurn"
          text="Segðu okkur hvað þig langar að gera, hvenær og hve mörg þið eruð. Það kostar ekkert að fá tilboð."
          size="short"
        />

        <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-12 md:pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <RevealOnScroll className="lg:col-span-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Eða hafðu samband beint</span>
              <ul className="mt-5 space-y-3">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} className="group flex items-center gap-4 rounded-2xl bg-white border border-ink/5 p-4 hover:border-forest/30 transition-colors">
                      <span className="w-11 h-11 shrink-0 rounded-xl bg-forest/10 text-forest flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-colors">
                        {c.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-ink/50">{c.label}</span>
                        <span className="block font-medium truncate">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-8">
              <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white border border-ink/5 p-5 sm:p-6 md:p-10">
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
