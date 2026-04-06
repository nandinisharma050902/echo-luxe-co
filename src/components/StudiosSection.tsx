import { motion } from "framer-motion";
import { useState } from "react";
import StudioModal from "./StudioModal";

import studio1overview from "@/assets/studio1-overview.jpg";
import studio1variants from "@/assets/studio1-variants.jpg";
import studio2overview from "@/assets/studio2-overview.jpg";
import studio2variants from "@/assets/studio2-variants.jpg";
import studio3overview from "@/assets/studio3-overview.jpg";
import studio3variants from "@/assets/studio3-variants.jpg";
import studio4overview from "@/assets/studio4-overview.jpg";
import studio4variants from "@/assets/studio4-variants.jpg";
import studio5overview from "@/assets/studio5-overview.jpg";
import studio5variants from "@/assets/studio5-variants.jpg";
import studio6overview from "@/assets/studio6-overview.jpg";
import studio6variants from "@/assets/studio6-variants.jpg";

export interface StudioData {
  id: number;
  name: string;
  variant1: { name: string; ideal: string };
  variant2: { name: string; ideal: string };
  overviewImg: string;
  variantsImg: string;
  features: string[];
}

const studios: StudioData[] = [
  {
    id: 1, name: "Studio 1",
    variant1: { name: "The Leadership Lounge", ideal: "Executive interviews & leadership talks" },
    variant2: { name: "The Think Tank", ideal: "Panel discussions & brainstorming sessions" },
    overviewImg: studio1overview, variantsImg: studio1variants,
    features: ["Cinematic lighting", "Dual camera setup", "Soundproof walls", "Premium seating"],
  },
  {
    id: 2, name: "Studio 2",
    variant1: { name: "The Insight Exchange", ideal: "Deep-dive interviews & expert panels" },
    variant2: { name: "The Vision Room", ideal: "Creative sessions & brand storytelling" },
    overviewImg: studio2overview, variantsImg: studio2variants,
    features: ["Multi-camera recording", "LED accent lighting", "Acoustic treatment", "Teleprompter ready"],
  },
  {
    id: 3, name: "Studio 3",
    variant1: { name: "The Insight Room", ideal: "Solo podcasts & intimate conversations" },
    variant2: { name: "The Quadcast Room", ideal: "Group podcasts & roundtable discussions" },
    overviewImg: studio3overview, variantsImg: studio3variants,
    features: ["4-person setup", "Professional mics", "Mood lighting", "Content-ready backdrop"],
  },
  {
    id: 4, name: "Studio 4",
    variant1: { name: "The Fourth Wall", ideal: "Video podcasts & cinematic content" },
    variant2: { name: "The Mic Lounge", ideal: "Audio-first podcasts & voiceovers" },
    overviewImg: studio4overview, variantsImg: studio4variants,
    features: ["Green screen option", "3-point lighting", "Wireless audio", "Instant playback"],
  },
  {
    id: 5, name: "Studio 5",
    variant1: { name: "The Conversa", ideal: "Casual conversations & storytelling" },
    variant2: { name: "The Talk Corner", ideal: "Quick interviews & social media content" },
    overviewImg: studio5overview, variantsImg: studio5variants,
    features: ["Cozy aesthetic", "Ring light setup", "Compact design", "Social-optimized framing"],
  },
  {
    id: 6, name: "Studio 6",
    variant1: { name: "Thinkcast Studio", ideal: "Thought leadership & educational content" },
    variant2: { name: "The Insight Table", ideal: "Business meetings & corporate podcasts" },
    overviewImg: studio6overview, variantsImg: studio6variants,
    features: ["Conference-style", "Dual monitors", "Professional backdrop", "Premium audio"],
  },
];

const StudiosSection = () => {
  const [selected, setSelected] = useState<StudioData | null>(null);

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
            <motion.div
              key={studio.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(studio)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] border border-border"
            >
              <img
                src={studio.overviewImg}
                alt={studio.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1 font-body">{studio.name}</p>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-0.5">{studio.variant1.name}</h3>
                <p className="text-primary-foreground/70 text-sm font-body">{studio.variant2.name}</p>
                <span className="inline-block mt-2 text-xs uppercase tracking-wider text-primary font-body font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  View Setup →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && <StudioModal studio={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default StudiosSection;
