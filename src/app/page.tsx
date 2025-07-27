import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import LogosTicker from "../components/LogosTicker";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LogosTicker />
      <FAQSection />
      <ContactSection />
    </>
  );
}
