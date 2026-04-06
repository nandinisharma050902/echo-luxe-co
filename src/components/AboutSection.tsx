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
    <section id="about" className="section-padding bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 font-body">About Us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Full Stack Podcast Production
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body font-light">
            Looking for a full-stack, result-driven podcast setup? Welcome to Banter Studio — we handle everything so you can focus on your fame.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-glass text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
