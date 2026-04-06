import { motion } from "framer-motion";
import { Mic2, Headphones, Radio } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, hsl(352, 98%, 63%), transparent 60%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, hsl(211, 100%, 58%), transparent 60%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(280, 80%, 60%), transparent 60%)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm mb-8 font-body gradient-border"
          style={{
            background: "hsl(var(--muted) / 0.5)",
            backdropFilter: "blur(8px)",
            color: "hsl(var(--muted-foreground))",
          }}
        >
          <Mic2 className="w-4 h-4 text-primary" />
          Premium Podcast & Content Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-foreground"
        >
          Build Your Voice.
          <br />
          <span className="neon-glow" style={{ color: "hsl(var(--primary))" }}>
            Amplify Your Story.
          </span>
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
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-8"
          style={{ borderTop: "1px solid hsl(var(--border) / 0.5)" }}
        >
          {[
            { icon: Mic2, stat: "6", label: "Unique Studios" },
            { icon: Headphones, stat: "12", label: "Setup Variants" },
            { icon: Radio, stat: "500+", label: "Episodes Recorded" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                style={{ background: "hsl(var(--muted) / 0.6)" }}>
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
