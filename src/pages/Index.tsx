import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const StudiosSection = lazy(() => import("@/components/StudiosSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const BookingSection = lazy(() => import("@/components/BookingSection"));
const LeadCaptureSection = lazy(() => import("@/components/LeadCaptureSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <HeroSection />
      <CTASection
        headline="Ready to Start Your Podcast?"
        subtext="Record your first episode in a fully equipped studio with professional audio and video setup."
        buttons={[
          { label: "Book Your Session", href: "#booking" },
          { label: "Talk to Our Team", href: "#contact" },
        ]}
      />
      <Suspense fallback={null}>
        <BookingSection />
        <AboutSection />
        <CTASection
          headline="Let's Turn Your Idea Into a Podcast"
          subtext="From recording to editing — we handle everything so you can focus on your content."
          buttons={[
            { label: "Get Started Today", href: "#booking" },
            { label: "See Studio Setup", href: "#studios" },
          ]}
        />
        <BlogSection />
        <CTASection
          headline="Your Podcast Could Look Like This"
          subtext="Join creators already recording high-quality content in our studio."
          buttons={[
            { label: "Book Your Slot", href: "#booking" },
            { label: "Talk to an Engineer", href: "#contact" },
          ]}
        />
        <StudiosSection />
        <CTASection
          headline="Experience Studio-Quality Sound & Video"
          subtext="Our setup is designed for creators who want professional results from day one."
          buttons={[
            { label: "Book a Studio Tour", href: "#booking" },
            { label: "Check Availability", href: "#booking" },
          ]}
        />
        <FeaturesSection />
        <CTASection
          headline="Lock Your Recording Slot Now"
          subtext="Limited slots available — reserve your preferred time before it's gone."
          buttons={[
            { label: "Check Availability", href: "#booking" },
            { label: "Book Now", href: "#booking" },
          ]}
        />
        <ExperienceSection />
        <CTASection
          headline="Join Creators Who Trust Our Studio"
          subtext="From first-time podcasters to professionals — we help you sound your best."
          buttons={[
            { label: "Book Your Session", href: "#booking" },
            { label: "Get Pricing", href: "#contact" },
          ]}
        />
        <LeadCaptureSection />
        <CTASection
          headline="Let's Build Your Podcast Together"
          subtext="Tell us your idea and we'll help you bring it to life."
          buttons={[
            { label: "Get Started", href: "#booking" },
            { label: "Talk to Our Team", href: "#contact" },
          ]}
        />
        <Footer />
        <WhatsAppButton />
      </Suspense>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3"
        style={{ background: "hsla(0, 0%, 100%, 0.9)", backdropFilter: "blur(16px)", borderTop: "1px solid hsl(var(--border) / 0.4)" }}>
        <a href="#booking" className="btn-primary w-full text-center block">Book Now</a>
      </div>
    </div>
  );
};

export default Index;
