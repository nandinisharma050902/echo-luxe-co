import { ReactNode } from "react";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface CTASectionProps {
  headline: string;
  subtext: string;
  buttons: [CTAButton, CTAButton];
  icon?: ReactNode;
}

const CTASection = ({ headline, subtext, buttons }: CTASectionProps) => {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 xl:px-32 relative">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl px-6 py-12 md:px-16 md:py-16 text-center overflow-hidden animate-fade-in"
          style={{
            background: "hsl(var(--card) / 0.6)",
            backdropFilter: "blur(16px)",
            border: "1px solid hsl(var(--border) / 0.6)",
            boxShadow:
              "0 0 60px hsl(var(--primary) / 0.08), 0 12px 40px hsl(220 20% 4% / 0.15)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120%] h-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--primary) / 0.18), transparent 70%)",
            }}
          />
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground mb-4 relative">
            {headline}
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-2xl mx-auto mb-8 relative">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center relative">
            {buttons.map((b, i) => (
              <a
                key={b.label}
                href={b.href}
                className={`${i === 0 ? "btn-primary" : "btn-outline"} w-full sm:w-auto`}
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;