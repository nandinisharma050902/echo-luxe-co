import { motion } from "framer-motion";
import { Sun, Camera, ShieldCheck, Zap, Share2 } from "lucide-react";

const features = [
  { icon: Sun, title: "Cinematic Lighting", desc: "Professional-grade lighting rigs designed for stunning on-camera visuals" },
  { icon: Camera, title: "Multi-Camera Recording", desc: "Multiple angles captured simultaneously for dynamic content" },
  { icon: ShieldCheck, title: "Soundproof Environment", desc: "Fully acoustically treated rooms for crystal-clear audio" },
  { icon: Zap, title: "Instant Delivery", desc: "Get your raw and edited content delivered within hours" },
  { icon: Share2, title: "Social Optimized", desc: "Outputs formatted for YouTube, Instagram, Spotify & more" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coral/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-coral mb-4 font-body">Premium Features</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4">
            Why Choose <span className="gradient-text-coral">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass-card-hover p-8 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-coral/10 flex items-center justify-center">
                <f.icon className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
