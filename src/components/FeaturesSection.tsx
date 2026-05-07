import { motion } from "framer-motion";
import { Sun, Camera, ShieldCheck, Zap, Share2, Headphones, ArrowRight } from "lucide-react";

const features = [
  { icon: Sun, title: "Cinematic Lighting", desc: "Fully acoustically treated rooms for crystal clear audio" },
  { icon: Camera, title: "Multi-Camera Recording", desc: "Multiple angles captured simultaneously for dynamic content" },
  { icon: ShieldCheck, title: "Soundproof Environment", desc: "Fully acoustically treated rooms for crystal-clear audio" },
  { icon: Zap, title: "Instant Delivery", desc: "Get your raw and edited content delivered within hours" },
  { icon: Share2, title: "Social Optimized", desc: "Outputs formatted for YouTube, Instagram, Spotify & more" },
  { icon: Headphones, title: "Expert Support", desc: "On-site producers and engineers to guide every session" },
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
              className="card-glass group"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="btn-primary group text-base !px-10 !py-4 inline-flex items-center gap-3 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_hsl(var(--primary)/0.45)] active:scale-[0.97] [transition:all_400ms_cubic-bezier(0.22,1,0.36,1)]"
          >
            <span>Book Your Studio</span>
            <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 overflow-hidden backdrop-blur-sm">
              <ArrowRight
                className="w-4 h-4 absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-0 opacity-100 group-hover:translate-x-6 group-hover:opacity-0"
              />
              <ArrowRight
                className="w-4 h-4 absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
