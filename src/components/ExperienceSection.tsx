import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import img1 from "@/assets/studio1-variants.jpg";
import img2 from "@/assets/studio2-variants.jpg";
import img3 from "@/assets/studio3-variants.jpg";
import img4 from "@/assets/studio4-variants.jpg";
import img5 from "@/assets/studio5-variants.jpg";
import img6 from "@/assets/studio6-variants.jpg";

const behindScenes = [img1, img2, img3, img4, img5, img6];

const testimonials = [
  { name: "Arjun Mehta", role: "Tech Podcaster", text: "Banter Studio completely elevated our production quality. The lighting and sound are top-notch!", rating: 5 },
  { name: "Priya Sharma", role: "Brand Strategist", text: "The team handles everything from concept to distribution. A true full-stack studio experience.", rating: 5 },
  { name: "Rohit Kapoor", role: "Content Creator", text: "Six studios with unique vibes — we always find the perfect setup for every episode.", rating: 5 },
];

const ExperienceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-coral mb-4 font-body">The Experience</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4">
            Behind The <span className="gradient-text-coral">Scenes</span>
          </h2>
        </motion.div>

        {/* Horizontal scroll gallery */}
        <div className="relative mb-20">
          <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-coral/10 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-coral/10 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-8 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {behindScenes.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-80 md:w-96 aspect-video rounded-xl overflow-hidden snap-center"
              >
                <img src={img} alt={`Studio ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl tracking-wide">Creator <span className="gradient-text-coral">Testimonials</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-coral text-coral" />
                ))}
              </div>
              <p className="text-muted-foreground font-body font-light mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-display text-lg tracking-wide">{t.name}</p>
                <p className="text-xs text-muted-foreground font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
