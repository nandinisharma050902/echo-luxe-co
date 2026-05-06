import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const StudiosSection = lazy(() => import("@/components/StudiosSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const BookingSection = lazy(() => import("@/components/BookingSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <StudiosSection />
        <ExperienceSection />
        <FeaturesSection />
        {/* Testimonials live inside ExperienceSection */}
        <AboutSection />
        <BookingSection />
        <BlogSection />
        <Footer />
        <WhatsAppButton />
      </Suspense>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3"
        style={{ background: "hsla(0, 0%, 100%, 0.9)", backdropFilter: "blur(16px)", borderTop: "1px solid hsl(var(--border) / 0.4)" }}>
        <a href="#booking" className="btn-primary w-full text-center block">Book Your Studio @ ₹3,999</a>
      </div>
    </div>
  );
};

export default Index;
