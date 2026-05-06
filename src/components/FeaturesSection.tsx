import { motion } from "framer-motion";
import { Sun, Camera, ShieldCheck, Zap, Share2 } from "lucide-react";

const features = [
  { icon: Sun, title: "Cinematic Lighting", desc: "Fully acoustically treated rooms for crystal clear audio" },
  { icon: Camera, title: "Multi-Camera Recording", desc: "Multiple angles captured simultaneously for dynamic content" },
  { icon: ShieldCheck, title: "Soundproof Environment", desc: "Fully acoustically treated rooms for crystal-clear audio" },
  { icon: Zap, title: "Instant Delivery", desc: "Get your raw and edited content delivered within hours" },
  { icon: Share2, title: "Social Optimized", desc: "Outputs formatted for YouTube, Instagram, Spotify & more" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 font-body">Premium Features</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`card-glass group ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
