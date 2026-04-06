import { motion } from "framer-motion";
import { Lightbulb, Users, Mic2, Scissors, Send } from "lucide-react";

const services = [
  { icon: Lightbulb, title: "Conceptualization", desc: "We brainstorm and develop your podcast concept from scratch" },
  { icon: Users, title: "Guest Outreach", desc: "We connect you with the right guests for compelling conversations" },
  { icon: Mic2, title: "Recording", desc: "State-of-the-art studio recording with professional equipment" },
  { icon: Scissors, title: "Editing & Post", desc: "Professional editing, mixing, and mastering of your content" },
  { icon: Send, title: "Distribution", desc: "Multi-platform distribution across all major channels" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-coral/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-coral mb-4 font-body">About Us</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
            Full Stack <span className="gradient-text-coral">Podcast</span> Production
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body font-light">
            Looking for a full-stack, result-driven podcast setup? Welcome to Banter Studio — we handle everything so you can focus on your fame.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-coral" />
              </div>
              <h3 className="font-display text-xl mb-2 tracking-wide">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
