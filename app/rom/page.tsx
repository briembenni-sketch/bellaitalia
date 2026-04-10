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
      {/* Gold top border */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gold z-50" />

      <Navbar />
      <main className="grain">
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1920&h=1080&fit=crop&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/8 blur-[120px]" />

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <span className="inline-block text-gold/90 text-xs font-medium tracking-[0.4em] uppercase animate-fade-up">
              Bella Italia · Róm
            </span>

            <h1 className="mt-6 font-serif text-7xl sm:text-8xl md:text-[9rem] lg:text-[12rem] font-bold text-cream tracking-[0.04em] animate-fade-up-delay-1 leading-[0.85]">
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

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-3">
            <span className="text-cream/30 text-[10px] tracking-[0.3em] uppercase">
              Skruna
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent animate-bounce-subtle" />
          </div>
        </section>

        {/* ═══════════════════════ BOOKING FORM (DARK) ═══════════════════════ */}
        <section className="relative -mt-20 z-20 px-6">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl bg-[#1C0F0A] shadow-2xl shadow-black/30">
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
                    Bókaðu upplifun
                  </span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl text-cream">
                    Senda <span className="text-gold italic">fyrirspurn</span>
                  </h2>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nafn"
                      className="text-[11px] tracking-[0.2em] uppercase text-cream/40 font-medium"
                    >
                      Nafn
                    </label>
                    <input
                      id="nafn"
                      name="nafn"
                      type="text"
                      placeholder="Fullt nafn"
                      className="w-full border-b border-cream/15 bg-transparent py-3 text-cream placeholder:text-cream/25 focus:border-gold focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="netfang"
                      className="text-[11px] tracking-[0.2em] uppercase text-cream/40 font-medium"
                    >
                      Netfang
                    </label>
                    <input
                      id="netfang"
                      name="netfang"
                      type="email"
                      placeholder="netfang@dæmi.is"
                      className="w-full border-b border-cream/15 bg-transparent py-3 text-cream placeholder:text-cream/25 focus:border-gold focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label
                      htmlFor="vidburdur"
                      className="text-[11px] tracking-[0.2em] uppercase text-cream/40 font-medium"
                    >
                      Velja viðburð
                    </label>
                    <select
                      id="vidburdur"
                      name="vidburdur"
                      className="w-full border-b border-cream/15 bg-transparent py-3 text-cream focus:border-gold focus:outline-none transition-colors duration-300 cursor-pointer appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#1C0F0A] text-cream">
                        Veldu upplifun...
                      </option>
                      {tourOptions.map((t) => (
                        <option key={t} value={t} className="bg-[#1C0F0A] text-cream">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2 pt-4 text-center">
                    <button
                      type="submit"
                      className="inline-block px-12 py-4 bg-gold text-[#1C0F0A] text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
                    >
                      Senda fyrirspurn
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════ DIAMOND DIVIDER ═══════════════════════ */}
        <DiamondDivider bg="bg-[#F0E6D3]" />

        {/* ═══════════════════════ EXPERIENCES GRID 1 (PARCHMENT) ═══════════════════════ */}
        <section id="upplifanir" className="py-24 md:py-32 bg-[#F0E6D3]">
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

            {/* First row — 2 featured image cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {experiences.slice(0, 2).map((exp) => (
                <RevealOnScroll key={exp.id}>
                  <ImageCard exp={exp} tall />
                </RevealOnScroll>
              ))}
            </div>

            {/* Main grid — 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.slice(2, 5).map((exp) => (
                <RevealOnScroll key={exp.id}>
                  <ImageCard exp={exp} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CTA BANNER (TERRACOTTA) ═══════════════════════ */}
        <section className="relative overflow-hidden grain">
          <div className="absolute inset-0 bg-[#8B2500]" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 blur-[80px]" />

          <RevealOnScroll>
            <div className="relative z-10 py-24 px-8 text-center">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight">
                Finnst þér ekki það sem þú ert{" "}
                <span className="text-gold italic">að leita að?</span>
              </h3>
              <p className="mt-6 text-cream/60 text-lg max-w-lg mx-auto">
                Hildur hjálpar þér að hanna þína draumaferð
              </p>
              <div className="mt-10">
                <Link
                  href="/pantadu"
                  className="inline-block px-12 py-4 border border-cream/30 text-cream text-sm font-medium tracking-[0.2em] uppercase hover:bg-cream/10 transition-all duration-500"
                >
                  Bóka ráðgjöf
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════ DIAMOND DIVIDER ═══════════════════════ */}
        <DiamondDivider bg="bg-[#1C0F0A]" color="text-cream/20" line="bg-cream/10" />

        {/* ═══════════════════════ EXPERIENCES GRID 2 (DARK) ═══════════════════════ */}
        <section className="py-24 md:py-32 bg-[#1C0F0A]">
          <div className="mx-auto max-w-7xl px-6">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">
                  Fleiri upplifanir
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
                  Kannaðu{" "}
                  <span className="text-gold italic">enn meira</span>
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.slice(5, 8).map((exp) => (
                <RevealOnScroll key={exp.id}>
                  <ImageCard exp={exp} />
                </RevealOnScroll>
              ))}
            </div>

            {/* Final 2 cards — wider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {experiences.slice(8).map((exp) => (
                <RevealOnScroll key={exp.id}>
                  <ImageCard exp={exp} tall />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ BOTTOM CTA (NEAR BLACK) ═══════════════════════ */}
        <section className="py-24 bg-[#0D0905]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <RevealOnScroll>
              <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">
                Tilbúin/n?
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-cream">
                Byrjaðu <span className="text-gold italic">ferðalagið</span>
              </h2>
              <p className="mt-6 text-cream/40 max-w-lg mx-auto leading-relaxed">
                Sendu okkur fyrirspurn og við hönnun sérhannaða ferð
                sem passar þínum óskum og draumum.
              </p>
              <div className="mt-10">
                <Link
                  href="/pantadu"
                  className="inline-block px-12 py-4 bg-gold text-[#0D0905] text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
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

/* ─── Diamond Divider ─── */

function DiamondDivider({
  bg = "bg-cream",
  color = "text-brown/15",
  line = "bg-brown/10",
}: {
  bg?: string;
  color?: string;
  line?: string;
}) {
  return (
    <div className={`${bg} flex items-center justify-center py-4`}>
      <div className={`flex-1 h-px ${line} max-w-xs`} />
      <span className={`mx-4 ${color} text-sm`}>&#9670;</span>
      <div className={`flex-1 h-px ${line} max-w-xs`} />
    </div>
  );
}

/* ─── Image Card Component (full-bleed, no white background) ─── */

function ImageCard({
  exp,
  tall = false,
}: {
  exp: (typeof experiences)[number];
  tall?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden cursor-pointer ${
        tall ? "h-[520px]" : "h-[420px]"
      }`}
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${exp.image}')` }}
      />

      {/* Dark gradient overlay — intensifies on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/50" />

      {/* Category tag pill */}
      <span className="absolute top-5 left-5 z-10 px-3 py-1.5 bg-terracotta text-cream text-[10px] font-medium tracking-[0.2em] uppercase">
        {exp.tag}
      </span>

      {/* Price in gold — top right */}
      <span className="absolute top-5 right-5 z-10 font-serif text-lg text-gold font-semibold drop-shadow-lg">
        {exp.price}
      </span>

      {/* Content overlaid on image — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-7">
        <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight drop-shadow-md">
          {exp.title}
        </h3>
        <p className="mt-3 text-sm text-white/70 leading-relaxed line-clamp-2">
          {exp.description}
        </p>
        <p className="mt-2 text-xs text-white/40 leading-relaxed line-clamp-1">
          {exp.details}
        </p>

        <div className="mt-4 pt-4 border-t border-white/10">
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold group-hover:tracking-[0.25em] transition-all duration-500 inline-flex items-center gap-2">
            Lesa meira
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
