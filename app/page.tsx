import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import RomeSection from "./sections/RomeSection";
import VillasSection from "./sections/VillasSection";
import WhyUsSection from "./sections/WhyUsSection";
import TestimonialSection from "./sections/TestimonialSection";
import BookingSection from "./sections/BookingSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RomeSection />
        <VillasSection />
        <WhyUsSection />
        <TestimonialSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
