import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = {
  title: "Róm | Bella Italia",
  description:
    "Sérhannaðar upplifanir í Róm — skoðunarferðir, vespuferðir, matreiðslunámskeið og fleira.",
};

const experiences = [
  {
    id: "vatikan",
    tag: "SKOÐUNARFERÐ",
    title: "Vatíkan ferð með leiðsögn",
    description:
      "Ferð í Vatíkanið með leiðsögn á ensku. Upplifðu listaverk heimsins á einum stað.",
    details:
      "Innifalið: Vatíkansafnið, Sixtínska Kapellan, Péturskirkjan",
    price: "€135 á mann",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "vespa",
    tag: "UPPLIFUN",
    title: "Vespuferð með bílstjóra",
    description:
      "Vertu eins og innfæddur og láttu keyra þig um Róm á vespu! Rómversku vespu strákarnir sækja ykkur upp á hótel og keyra ykkur um þröngar götur Rómar.",
    details: "2 klst €150  ·  3 klst €180  ·  4 klst €200",
    price: "frá €150",
    image:
      "https://images.unsplash.com/photo-1583266040773-70f0b4df2e60?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "flugvollur",
    tag: "BÍLSTJÓRI",
    title: "Flugvallarakstur",
    description:
      "Við erum með bíla í öllum stærðum og gerðum og sjáum um að koma þér til og frá FCO flugvellinum á einfaldan og öruggan máta.",
    details:
      "Bíll (1-3 manns)  ·  Skutla (4-6 manns)  ·  Stór skutla (6-8 manns)",
    price: "Verð eftir fyrirspurn",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "amalfi",
    tag: "DAGSFERÐ",
    title: "Napoli · Amalfi · Capri",
    description:
      "Dreymir þig um að sjá Amalfi ströndina, sigla til Capri, sjá Pompeii eða skoða Napolí hvort sem er í dagsferð frá Róm eða lengri ferð.",
    details:
      "Dagsferðir eða lengri ferðir  ·  Leiðsögumenn  ·  Bílstjórar  ·  Bátsferðir  ·  Miðakaup",
    price: "Verð eftir fyrirspurn",
    image:
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "golfbill",
    tag: "SKOÐUNARFERÐ",
    title: "Golfbíla ferð með leiðsögn",
    description:
      "Viltu ferðast á þægilegan hátt um borgina og ná að komast yfir sem mest á stuttum tíma með leiðsögumanni. Góð leið til að sjá sem mest af Róm.",
    details: "Tilvalið fyrir þá sem ferðast með börn eða eldra fólk.",
    price: "Verð eftir fyrirspurn",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "colosseum",
    tag: "SKOÐUNARFERÐ",
    title: "Colosseum ferð með leiðsögn",
    description:
      "Ferð í Colosseum með leiðsögn á ensku. Kannaðu glæsilegustu mannvirki rómversku keisaradæmisins.",
    details: "Innifalið: Aðgangur í Colosseum, Roman Forum",
    price: "€110 á mann",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "sidecar",
    tag: "UPPLIFUN",
    title: "Vespu sidecar ferð",
    description:
      "Komdu og uppgötvaðu Róm á öðruvísi og skemmtilegri hátt á vespu í hliðarvagni. Skemmtileg skoðunarferð sem hentar allri fjölskyldunni.",
    details: "Kvöldferð með pizzu: €150",
    price: "€135 á mann",
    image:
      "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "gonguferð",
    tag: "SKOÐUNARFERÐ",
    title: "Gönguferð með leiðsögumanni",
    description:
      "Róm með Rómverjum! Gönguferð með innfæddum um borgina eilífu. Kynnstu borginni eins og heimamaður.",
    details:
      "Besta af Róm  ·  Hjarta Rómar  ·  Gyðingahverfið & Trastevere  ·  Matar & vínferðir",
    price: "Verð eftir fyrirspurn",
    image:
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "gisting",
    tag: "GISTING",
    title: "Gisting í Róm",
    description:
      "Við getum aðstoðað við að finna réttu gistinguna í Róm. Erum með úrval af gistingum í öllum verðflokkum.",
    details: "Hótel  ·  Íbúðir  ·  Flott B&B",
    price: "Verð eftir fyrirspurn",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "matreidslur",
    tag: "MATUR",
    title: "Matreiðslunámskeið",
    description:
      "Viltu læra að elda pizzu eða gera alvöru pasta og gelato í Róm! Áhersla er lögð á ferskt árstíðabundið hráefni. Skemmtileg upplifun fyrir alla fjölskylduna.",
    details: "Pizza · Pasta · Gelato · Árstíðabundið hráefni",
    price: "€150 á mann",
    image:
      "https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&h=600&fit=crop&q=80",
  },
];

const tourOptions = experiences.map((e) => e.title);

export default function RomPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
          {/* Background layers */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1920&h=1080&fit=crop&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/80 via-brown/50 to-brown/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/40 via-transparent to-brown/40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/8 blur-[120px]" />

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <span className="inline-block text-gold/90 text-xs font-medium tracking-[0.4em] uppercase animate-fade-up">
              Bella Italia · Róm
            </span>

            <h1 className="mt-6 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold text-cream tracking-[0.04em] animate-fade-up-delay-1 leading-[0.9]">
              UPPLIFÐU RÓM
            </h1>

            <p className="mt-8 text-lg md:text-xl text-cream/60 font-light max-w-2xl mx-auto animate-fade-up-delay-2 leading-relaxed">
              Sérhannaðar upplifanir í borginni eilífu
            </p>

            <div className="mt-12 animate-fade-up-delay-3">
              <a
                href="#upplifanir"
                className="inline-block px-10 py-4 border border-gold/40 text-gold text-sm font-medium tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-500"
              >
                Skoða upplifanir
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-3">
            <span className="text-cream/30 text-[10px] tracking-[0.3em] uppercase">
              Skruna
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent animate-bounce-subtle" />
          </div>
        </section>

        {/* ═══════════════════════ BOOKING FORM ═══════════════════════ */}
        <section className="relative -mt-20 z-20 px-6">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl bg-white/95 backdrop-blur-sm shadow-2xl shadow-brown/10">
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <span className="text-terracotta text-xs font-medium tracking-[0.3em] uppercase">
                    Bókaðu upplifun
                  </span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl text-brown">
                    Senda <span className="text-terracotta italic">fyrirspurn</span>
                  </h2>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nafn"
                      className="text-[11px] tracking-[0.2em] uppercase text-brown/50 font-medium"
                    >
                      Nafn
                    </label>
                    <input
                      id="nafn"
                      name="nafn"
                      type="text"
                      placeholder="Fullt nafn"
                      className="w-full border-b border-brown/15 bg-transparent py-3 text-brown placeholder:text-brown/25 focus:border-terracotta focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="netfang"
                      className="text-[11px] tracking-[0.2em] uppercase text-brown/50 font-medium"
                    >
                      Netfang
                    </label>
                    <input
                      id="netfang"
                      name="netfang"
                      type="email"
                      placeholder="netfang@dæmi.is"
                      className="w-full border-b border-brown/15 bg-transparent py-3 text-brown placeholder:text-brown/25 focus:border-terracotta focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label
                      htmlFor="vidburdur"
                      className="text-[11px] tracking-[0.2em] uppercase text-brown/50 font-medium"
                    >
                      Velja viðburð
                    </label>
                    <select
                      id="vidburdur"
                      name="vidburdur"
                      className="w-full border-b border-brown/15 bg-transparent py-3 text-brown focus:border-terracotta focus:outline-none transition-colors duration-300 cursor-pointer appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Veldu upplifun...
                      </option>
                      {tourOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2 pt-4 text-center">
                    <button
                      type="submit"
                      className="inline-block px-12 py-4 bg-terracotta text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-terracotta-dark transition-colors duration-300"
                    >
                      Senda fyrirspurn
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════ EXPERIENCES GRID ═══════════════════════ */}
        <section id="upplifanir" className="py-24 md:py-32 bg-cream">
          <div className="mx-auto max-w-7xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">
                  Sérhannaðar upplifanir
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                  Upplifanir í{" "}
                  <span className="text-terracotta italic">borginni eilífu</span>
                </h2>
                <p className="mt-6 text-brown/50 max-w-xl mx-auto leading-relaxed">
                  Við bjóðum upp á vandaðar og persónulegar upplifanir sem gera
                  dvölina í Róm ógleymanlega.
                </p>
              </div>
            </RevealOnScroll>

            {/* First row — 2 featured cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {experiences.slice(0, 2).map((exp) => (
                <RevealOnScroll key={exp.id}>
                  <article className="group relative overflow-hidden bg-white h-[520px] flex flex-col">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${exp.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <span className="absolute top-5 left-5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-medium tracking-[0.2em] text-brown uppercase">
                        {exp.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-7">
                      <h3 className="font-serif text-2xl text-brown group-hover:text-terracotta transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="mt-3 text-sm text-brown/55 leading-relaxed flex-1">
                        {exp.description}
                      </p>
                      <p className="mt-2 text-xs text-brown/40 leading-relaxed">
                        {exp.details}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-brown/8 pt-5">
                        <span className="font-serif text-lg text-gold font-semibold">
                          {exp.price}
                        </span>
                        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-terracotta group-hover:tracking-[0.25em] transition-all duration-500">
                          Lesa meira →
                        </span>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>

            {/* Main grid — remaining 8 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.slice(2, 5).map((exp) => (
                <RevealOnScroll key={exp.id}>
                  <ExperienceCard exp={exp} />
                </RevealOnScroll>
              ))}
            </div>

            {/* ═══════ CTA BANNER (between grid sections) ═══════ */}
            <RevealOnScroll>
              <div className="my-16 relative overflow-hidden grain">
                <div className="absolute inset-0 bg-gradient-to-r from-brown via-brown-light to-brown" />
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/8 blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-terracotta/10 blur-[80px]" />

                <div className="relative z-10 py-20 px-8 text-center">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight">
                    Finnst þér ekki það sem þú ert{" "}
                    <span className="text-gold italic">að leita að?</span>
                  </h3>
                  <p className="mt-6 text-cream/50 text-lg max-w-lg mx-auto">
                    Hildur hjálpar þér að hanna þína draumaferð
                  </p>
                  <div className="mt-10">
                    <Link
                      href="/pantadu"
                      className="inline-block px-12 py-4 border border-gold/40 text-gold text-sm font-medium tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-500"
                    >
                      Bóka ráðgjöf
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Second half of grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.slice(5, 8).map((exp) => (
                <RevealOnScroll key={exp.id}>
                  <ExperienceCard exp={exp} />
                </RevealOnScroll>
              ))}
            </div>

            {/* Final 2 cards — wider layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {experiences.slice(8).map((exp) => (
                <RevealOnScroll key={exp.id}>
                  <article className="group relative overflow-hidden bg-white h-[520px] flex flex-col">
                    <div className="relative h-72 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${exp.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <span className="absolute top-5 left-5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-medium tracking-[0.2em] text-brown uppercase">
                        {exp.tag}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 p-7">
                      <h3 className="font-serif text-2xl text-brown group-hover:text-terracotta transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="mt-3 text-sm text-brown/55 leading-relaxed flex-1">
                        {exp.description}
                      </p>
                      <p className="mt-2 text-xs text-brown/40 leading-relaxed">
                        {exp.details}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-brown/8 pt-5">
                        <span className="font-serif text-lg text-gold font-semibold">
                          {exp.price}
                        </span>
                        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-terracotta group-hover:tracking-[0.25em] transition-all duration-500">
                          Lesa meira →
                        </span>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ BOTTOM CTA ═══════════════════════ */}
        <section className="py-24 bg-cream-light">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <RevealOnScroll>
              <span className="text-terracotta text-xs font-medium tracking-[0.4em] uppercase">
                Tilbúin/n?
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-brown">
                Byrjaðu <span className="text-terracotta italic">ferðalagið</span>
              </h2>
              <p className="mt-6 text-brown/50 max-w-lg mx-auto leading-relaxed">
                Sendu okkur fyrirspurn og við hönnun sérhannaða ferð
                sem passar þínum óskum og draumum.
              </p>
              <div className="mt-10">
                <Link
                  href="/pantadu"
                  className="inline-block px-12 py-4 bg-terracotta text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-terracotta-dark transition-colors duration-300"
                >
                  Senda fyrirspurn
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ─── Experience Card Component ─── */

function ExperienceCard({
  exp,
}: {
  exp: (typeof experiences)[number];
}) {
  return (
    <article className="group relative overflow-hidden bg-white h-[480px] flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${exp.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-medium tracking-[0.2em] text-brown uppercase">
          {exp.tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-xl text-brown group-hover:text-terracotta transition-colors duration-300">
          {exp.title}
        </h3>
        <p className="mt-2 text-sm text-brown/55 leading-relaxed flex-1 line-clamp-3">
          {exp.description}
        </p>
        <p className="mt-1.5 text-xs text-brown/40 leading-relaxed line-clamp-2">
          {exp.details}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-brown/8 pt-4">
          <span className="font-serif text-lg text-gold font-semibold">
            {exp.price}
          </span>
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-terracotta group-hover:tracking-[0.25em] transition-all duration-500">
            Lesa meira →
          </span>
        </div>
      </div>
    </article>
  );
}
