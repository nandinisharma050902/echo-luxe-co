import { motion } from "framer-motion";
import { useState } from "react";

import studio1v1 from "@/assets/studio1-v1.png";
import studio1v2 from "@/assets/studio1-v2.png";
import studio2v1 from "@/assets/studio2-v1.png";
import studio2v2 from "@/assets/studio2-v2.png";
import studio3v1 from "@/assets/studio3-v1.png";
import studio3v2 from "@/assets/studio3-v2.png";
import studio4v1 from "@/assets/studio4-v1.png";
import studio4v2 from "@/assets/studio4-v2.png";
import studio5v1 from "@/assets/studio5-v1.png";
import studio5v2 from "@/assets/studio5-v2.png";
import studio6v1 from "@/assets/studio6-v1.png";
import studio6v2 from "@/assets/studio6-v2.png";

export interface StudioVariant {
  name: string;
  ideal: string;
  image: string;
}

export interface StudioData {
  id: number;
  name: string;
  variant1: StudioVariant;
  variant2: StudioVariant;
  features: string[];
}

const studios: StudioData[] = [
  {
    id: 1,
    name: "Studio 1",
    variant1: { name: "The Leadership Lounge", ideal: "Executive interviews & leadership talks", image: studio1v1 },
    variant2: { name: "The Think Tank", ideal: "Panel discussions & brainstorming sessions", image: studio1v2 },
    features: ["Cinematic lighting", "Dual camera setup", "Soundproof walls", "Premium seating"],
  },
  {
    id: 2,
    name: "Studio 2",
    variant1: { name: "The Insight Exchange", ideal: "Deep-dive interviews & expert panels", image: studio2v1 },
    variant2: { name: "The Vision Room", ideal: "Creative sessions & brand storytelling", image: studio2v2 },
    features: ["Multi-camera recording", "LED accent lighting", "Acoustic treatment", "Teleprompter ready"],
  },
  {
    id: 3,
    name: "Studio 3",
    variant1: { name: "The Insight Room", ideal: "Solo podcasts & intimate conversations", image: studio3v1 },
    variant2: { name: "The Quadcast Room", ideal: "Group podcasts & roundtable discussions", image: studio3v2 },
    features: ["4-person setup", "Professional mics", "Mood lighting", "Content-ready backdrop"],
  },
  {
    id: 4,
    name: "Studio 4",
    variant1: { name: "The Fourth Wall", ideal: "Cinematic interviews & storytelling", image: studio4v1 },
    variant2: { name: "The Mic Lounge", ideal: "Casual podcast conversations & guest features", image: studio4v2 },
    features: ["Blue-tone ambiance", "Designer furniture", "Professional mics", "Cozy setting"],
  },
  {
    id: 5,
    name: "Studio 5",
    variant1: { name: "The Conversa", ideal: "One-on-one deep conversations", image: studio5v1 },
    variant2: { name: "The Talk Corner", ideal: "Vibrant discussions & debate formats", image: studio5v2 },
    features: ["Elegant seating", "Warm lighting", "Acoustic panels", "Botanical accents"],
  },
  {
    id: 6,
    name: "Studio 6",
    variant1: { name: "Thinkcast Studio", ideal: "Thought leadership & executive recording", image: studio6v1 },
    variant2: { name: "The Insight Table", ideal: "Expert roundtables & knowledge sharing", image: studio6v2 },
    features: ["Wood-paneled backdrop", "Leather seating", "Dual mic setup", "Premium aesthetics"],
  },
];

const StudioCard = ({ studio, index }: { studio: StudioData; index: number }) => {
  const [activeVariant, setActiveVariant] = useState<1 | 2>(1);
  const current = activeVariant === 1 ? studio.variant1 : studio.variant2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl border border-border overflow-hidden bg-card"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={current.image}
          alt={current.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 font-body">
          {studio.name}
        </p>

        <div className="flex gap-2 mb-4">
          {[1, 2].map((v) => (
            <button
              key={v}
              onClick={() => setActiveVariant(v as 1 | 2)}
              className={`px-4 py-1.5 rounded-lg text-sm font-body font-medium transition-all duration-200 ${
                activeVariant === v
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {v === 1 ? studio.variant1.name : studio.variant2.name}
            </button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground font-body">
          Ideal for: {current.ideal}
        </p>

        <a
          href="#booking"
          className="inline-block mt-4 text-xs uppercase tracking-wider text-primary font-body font-semibold hover:translate-x-1 transition-transform duration-300"
        >
          Book This Studio →
        </a>
      </div>
    </motion.div>
  );
};

const StudiosSection = () => {
  return (
    <section id="studios" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 font-body">Our Spaces</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Studio Showcase
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body font-light">
            Six unique studios, each with two distinct variants tailored for different content styles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studios.map((studio, i) => (
            <StudioCard key={studio.id} studio={studio} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudiosSection;
