import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StudiosSection from "@/components/StudiosSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExperienceSection from "@/components/ExperienceSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StudiosSection />
      <FeaturesSection />
      <ExperienceSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
