import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-black" style={{ height: "calc(100vh - 100px)", marginTop: "100px" }}>
      {/* Background image slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 } }}
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "flat",
            WebkitTransform: "translate3d(0,0,0)",
            willChange: "opacity, transform",
          }}
        >
          <img
            src={slides[current]}
            alt="Studio"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            loading={current === 0 ? "eager" : "lazy"}
            decoding="async"
            // @ts-expect-error fetchpriority is valid HTML
            fetchpriority={current === 0 ? "high" : "low"}
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-6"
          style={{
            background: "linear-gradient(135deg, hsl(352 98% 63% / 0.2), hsl(211 100% 58% / 0.2))",
            border: "1px solid hsl(352 98% 63% / 0.3)",
            color: "hsl(352, 98%, 75%)",
            backdropFilter: "blur(8px)",
          }}
        >
          Creators. Podcasts. Stories.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-white max-w-5xl"
        >
          Build Your Voice with
          <br />
          <span
            className="neon-glow"
            style={{ color: "hsl(352, 98%, 68%)" }}
          >
            Premium Podcast Studios
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          Professional podcast setups for creators, brands, and storytellers
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a href="#booking" className="btn-primary text-base !px-10 !py-4">
            Book Your Studio
          </a>
        </motion.div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 h-2.5"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
            style={
              i === current
                ? { background: "linear-gradient(135deg, hsl(352 98% 63%), hsl(211 100% 58%))" }
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
