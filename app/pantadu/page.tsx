import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingSection from "../sections/BookingSection";

export const metadata = {
  title: "Pantaðu | Bella Italia",
  description: "Sendu okkur fyrirspurn um sérhannaða ferð til Ítalíu.",
};

export default function PantaduPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden grain">
          <div className="absolute inset-0 bg-gradient-to-b from-terracotta via-terracotta-dark to-brown" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl" />

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase animate-fade-up">
              Fyrirspurn
            </span>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream tracking-wide animate-fade-up-delay-1 leading-none">
              PANTAÐU
            </h1>
            <p className="mt-6 text-xl text-cream/70 font-light animate-fade-up-delay-2">
              Byrjaðu að skipuleggja draumaferðina þína
            </p>
          </div>
        </section>

        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
