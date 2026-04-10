import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background gradient simulating Italian golden-hour landscape */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown via-terracotta/60 to-olive/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-brown/70 via-transparent to-brown/40" />

      {/* Warm ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-terracotta/15 blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-cream tracking-wide animate-fade-up leading-none">
          UPPLIFÐU
          <br />
          <span className="text-gold">ÍTALÍU</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-cream/80 font-light tracking-wide animate-fade-up-delay-1">
          Sérhannaðar ferðir til Rómar og Toskana
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Link
            href="/rom"
            className="inline-block px-8 py-4 bg-terracotta text-cream font-medium tracking-widest text-sm uppercase rounded-none hover:bg-terracotta-dark transition-colors duration-300"
          >
            Skoða Ferðir
          </Link>
          <Link
            href="/samband"
            className="inline-block px-8 py-4 border border-cream/40 text-cream font-medium tracking-widest text-sm uppercase rounded-none hover:bg-cream/10 transition-colors duration-300"
          >
            Hafa Samband
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
