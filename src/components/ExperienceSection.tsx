import { motion } from "framer-motion";
import { Star, CalendarCheck, Film, Sparkles, Send } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Your Session", desc: "Pick your studio, variant, and time slot in seconds." },
  { icon: Film, title: "Show Up & Record", desc: "Walk into a fully prepped, cinematic-grade setup." },
  { icon: Sparkles, title: "Post-Production", desc: "Our team handles editing, color grading & sound mixing." },
  { icon: Send, title: "Publish & Distribute", desc: "Get your content delivered, ready to publish anywhere." },
];

const testimonials = [
  { name: "Arjun Mehta", role: "Tech Podcaster", text: "Banter Studio completely elevated our production quality. The lighting and sound are top-notch!", rating: 5 },
  { name: "Priya Sharma", role: "Brand Strategist", text: "The team handles everything from concept to distribution. A true full-stack studio experience.", rating: 5 },
  { name: "Rohit Kapoor", role: "Content Creator", text: "Six studios with unique vibes — we always find the perfect setup for every episode.", rating: 5 },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 font-body">The Experience</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body font-light">
            From booking to publishing — a seamless four-step journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative card-glass text-center group"
            >
              <div className="text-xs font-bold font-heading absolute top-4 right-4"
                style={{ color: "hsl(var(--primary) / 0.3)" }}>
                0{i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Creator Testimonials</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
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
