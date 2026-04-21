import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Film, ImageIcon, Scissors } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const studioOptions = [
  "Studio 1 – Leadership Lounge / Think Tank",
  "Studio 2 – Insight Exchange / Vision Room",
  "Studio 3 – Insight Room / Quadcast Room",
  "Studio 4 – Fourth Wall / Mic Lounge",
  "Studio 5 – The Conversa / Talk Corner",
  "Studio 6 – Thinkcast / Insight Table",
];

const addons = [
  { id: "editing", label: "Professional Editing", icon: Scissors },
  { id: "reels", label: "Social Media Reels", icon: Film },
  { id: "thumbnails", label: "Custom Thumbnails", icon: ImageIcon },
];

const BookingSection = () => {
  const [form, setForm] = useState({ studio: "", date: "", time: "", name: "", email: "", phone: "", addons: [] as string[] });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleAddon = (id: string) => {
    setForm((prev) => ({
      ...prev,
      addons: prev.addons.includes(id) ? prev.addons.filter((a) => a !== id) : [...prev.addons, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const addonLabels = form.addons
        .map((id) => addons.find((a) => a.id === id)?.label)
        .filter(Boolean) as string[];

      const { error } = await supabase.functions.invoke("send-booking-email", {
        body: {
          studio: form.studio,
          date: form.date,
          time: form.time,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          addons: addonLabels,
        },
      });
      if (error) throw error;
      toast({ title: "Booking submitted!", description: "We'll get back to you shortly." });
      setForm({ studio: "", date: "", time: "", name: "", email: "", phone: "", addons: [] });
    } catch (err) {
      console.error("Booking error:", err);
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-xl px-4 py-3 font-body text-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <section id="booking" className="section-padding bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 font-body">Reserve Your Spot</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-3">
            Book Your Session
          </h2>
          <p className="text-muted-foreground font-body text-sm">
            100% advance payment required. 18% GST applicable on all bookings.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="card-glass !p-6 md:!p-8 space-y-5"
        >
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">Select Studio</label>
            <select value={form.studio} onChange={(e) => setForm({ ...form, studio: e.target.value })} required
              className={inputClass}
              style={{ background: "hsl(var(--muted) / 0.4)", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border) / 0.5)" }}>
              <option value="">Choose a studio...</option>
              {studioOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">
                <Calendar className="w-3.5 h-3.5 inline mr-1" /> Date
              </label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required
                className={inputClass}
                style={{ background: "hsl(var(--muted) / 0.4)", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border) / 0.5)" }} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">
                <Clock className="w-3.5 h-3.5 inline mr-1" /> Time
              </label>
              <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required
                className={inputClass}
                style={{ background: "hsl(var(--muted) / 0.4)", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border) / 0.5)" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { type: "text", placeholder: "Your Name", key: "name" },
              { type: "email", placeholder: "Email Address", key: "email" },
              { type: "tel", placeholder: "Phone Number", key: "phone" },
            ].map((field) => (
              <input key={field.key} type={field.type} placeholder={field.placeholder}
                value={(form as any)[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} required
                className={inputClass}
                style={{ background: "hsl(var(--muted) / 0.4)", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border) / 0.5)" }} />
            ))}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body font-medium">Add-ons</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {addons.map((addon) => (
                <button key={addon.id} type="button" onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm transition-all duration-200 font-body ${
                    form.addons.includes(addon.id)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{
                    background: form.addons.includes(addon.id) ? "hsl(var(--primary) / 0.1)" : "hsl(var(--muted) / 0.3)",
                    border: `1px solid ${form.addons.includes(addon.id) ? "hsl(var(--primary) / 0.4)" : "hsl(var(--border) / 0.4)"}`,
                    boxShadow: form.addons.includes(addon.id) ? "0 0 15px hsl(var(--primary) / 0.15)" : "none",
                  }}>
                  <addon.icon className="w-4 h-4" />
                  <span>{addon.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Sending..." : "Book Your Slot"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
