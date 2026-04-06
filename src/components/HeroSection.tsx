import { motion } from "framer-motion";
import { Mic2, Headphones, Radio } from "lucide-react";
import logo from "@/assets/banter-logo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(352, 98%, 63%), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(211, 100%, 58%), transparent 70%)" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl pt-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground mb-8 font-body"
        >
          <Mic2 className="w-4 h-4 text-primary" />
          Premium Podcast & Content Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-foreground"
        >
          Build Your Voice.
          <br />
          <span className="text-primary">Amplify Your Story.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          Premium Podcast Studios for Creators, Brands & Visionaries
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#booking" className="btn-primary">Book Studio</a>
          <a href="#studios" className="btn-outline">Explore Setups</a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-border"
        >
          {[
            { icon: Mic2, stat: "6", label: "Unique Studios" },
            { icon: Headphones, stat: "12", label: "Setup Variants" },
            { icon: Radio, stat: "500+", label: "Episodes Recorded" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-heading text-2xl font-bold text-foreground">{item.stat}</p>
                <p className="text-xs text-muted-foreground font-body">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
