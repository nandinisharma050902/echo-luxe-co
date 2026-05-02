import { motion } from "framer-motion";
import { Star, CalendarCheck, Film, Sparkles, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Your Session",
    desc: "Choose your studio, format, and time slot in seconds with our seamless booking system.",
    detail: "Takes < 2 minutes",
  },
  {
    icon: Film,
    title: "Show Up & Record",
    desc: "Walk into a fully prepared, cinematic setup — just step in and start creating.",
    detail: "Zero setup required",
  },
  {
    icon: Sparkles,
    title: "Post-Production",
    desc: "Our expert team handles editing, color grading, and sound to craft polished content.",
    detail: "Delivered in 48–72 hrs",
  },
  {
    icon: Send,
    title: "Publish & Distribute",
    desc: "Receive ready-to-publish content optimized for all your platforms.",
    detail: "Multi-platform ready",
  },
];

const testimonials = [
  { name: "Arjun Mehta", role: "Tech Podcaster", text: "Banter Studio completely elevated our production quality. The lighting and sound are top-notch!", rating: 5 },
  { name: "Priya Sharma", role: "Brand Strategist", text: "The team handles everything from concept to distribution. A true full-stack studio experience.", rating: 5 },
  { name: "Rohit Kapoor", role: "Content Creator", text: "Six studios with unique vibes — we always find the perfect setup for every episode.", rating: 5 },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Soft premium background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, hsl(var(--primary) / 0.08), transparent 60%), radial-gradient(ellipse at 80% 100%, hsl(var(--primary) / 0.06), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-4 font-body">The Experience</p>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-body font-light leading-relaxed">
            From booking to publishing — a seamless, end-to-end studio experience designed for creators.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mb-24 md:mb-28">
          {/* Connecting progress line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[88px] left-[12%] right-[12%] h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.4), transparent)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="relative h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 md:p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.35)]">
                  {/* Icon */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))",
                      boxShadow: "inset 0 1px 0 hsl(var(--primary) / 0.2)",
                    }}
                  >
                    <step.icon className="w-9 h-9 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Step number */}
                  <div className="font-heading text-xs font-bold tracking-widest text-primary/70 mb-3">
                    STEP 0{i + 1}
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed mb-5">
                    {step.desc}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary/90 font-body px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                    <Sparkles className="w-3 h-3" />
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24 md:mb-28"
        >
          <div
            className="relative overflow-hidden rounded-3xl border border-primary/20 px-6 py-14 md:px-12 md:py-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--background) / 0.6) 60%, hsl(var(--primary) / 0.08))",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.18), transparent 60%)",
              }}
            />
            <div className="relative max-w-2xl mx-auto">
              <h3 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                Ready to Create Something Exceptional?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground font-body font-light mb-8 leading-relaxed">
                Book your studio session today and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto group transition-transform duration-200 hover:scale-[1.03]"
                >
                  Book Your Session
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("studios")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.03]"
                >
                  Explore Studios
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials (unchanged content) */}
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
