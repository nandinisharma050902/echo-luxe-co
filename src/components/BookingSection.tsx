import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Film, ImageIcon, Scissors } from "lucide-react";

const studios = [
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

  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-coral/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue/5 blur-[100px]" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-coral mb-4 font-body">Reserve Your Spot</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4">
            Book Your <span className="gradient-text-coral">Session</span>
          </h2>
          <p className="text-muted-foreground font-body font-light">
            100% advance payment required. 18% GST applicable on all bookings.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-6 md:p-10 space-y-6"
        >
          {/* Studio selection */}
          <div>
            <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2 font-body">Select Studio</label>
            <select
              value={form.studio}
              onChange={(e) => setForm({ ...form, studio: e.target.value })}
              required
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
            >
              <option value="">Choose a studio...</option>
              {studios.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2 font-body">
                <Calendar className="w-4 h-4 inline mr-1" /> Date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2 font-body">
                <Clock className="w-4 h-4 inline mr-1" /> Time
              </label>
              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
              />
            </div>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
            />
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-3 font-body">Add-ons</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {addons.map((addon) => (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
                    form.addons.includes(addon.id)
                      ? "border-coral/50 bg-coral/10 text-coral"
                      : "border-border bg-muted text-muted-foreground hover:border-border hover:bg-muted"
                  }`}
                >
                  <addon.icon className="w-5 h-5" />
                  <span className="text-sm font-body">{addon.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-glow-coral w-full text-center">
            Book Your Slot
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
