import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StudiosSection from "@/components/StudiosSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExperienceSection from "@/components/ExperienceSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Film grain overlay */}
      <div className="grain-overlay" />
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <StudiosSection />
      <FeaturesSection />
      <ExperienceSection />
      <BookingSection />
      <Footer />

      {/* WhatsApp floating button */}
      <WhatsAppButton />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3"
        style={{ background: "hsla(0, 0%, 100%, 0.9)", backdropFilter: "blur(16px)", borderTop: "1px solid hsl(var(--border) / 0.4)" }}>
        <a href="#booking" className="btn-primary w-full text-center block">Book Now</a>
      </div>
    </div>
  );
};

export default Index;
