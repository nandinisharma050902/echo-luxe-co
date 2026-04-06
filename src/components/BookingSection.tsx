import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Film, ImageIcon, Scissors } from "lucide-react";

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

  const toggleAddon = (id: string) => {
    setForm((prev) => ({
      ...prev,
      addons: prev.addons.includes(id) ? prev.addons.filter((a) => a !== id) : [...prev.addons, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking submitted! We'll get back to you shortly.");
  };

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground";

  return (
    <section id="booking" className="section-padding bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-sm space-y-5"
        >
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">Select Studio</label>
            <select value={form.studio} onChange={(e) => setForm({ ...form, studio: e.target.value })} required className={inputClass}>
              <option value="">Choose a studio...</option>
              {studioOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">
                <Calendar className="w-3.5 h-3.5 inline mr-1" /> Date
              </label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required className={inputClass} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">
                <Clock className="w-3.5 h-3.5 inline mr-1" /> Time
              </label>
              <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className={inputClass} />
            <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputClass} />
            <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className={inputClass} />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body font-medium">Add-ons</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {addons.map((addon) => (
                <button key={addon.id} type="button" onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg border text-sm transition-all duration-200 font-body ${
                    form.addons.includes(addon.id)
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  }`}>
                  <addon.icon className="w-4 h-4" />
                  <span>{addon.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-primary w-full text-center">Book Your Slot</button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
