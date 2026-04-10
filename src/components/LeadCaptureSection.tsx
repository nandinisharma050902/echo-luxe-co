import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", phone: "", message: "" };

const LeadCaptureSection = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (form.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (form.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Enter a valid phone number";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Save lead to database
      const { error: dbError } = await supabase.from("leads").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      });

      if (dbError) throw dbError;

      // Send email notification
      await supabase.functions.invoke("send-lead-email", {
        body: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        },
      });

      setIsSubmitted(true);
      setForm(initialForm);
      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3 font-body text-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30";
  const inputStyle = {
    background: "hsl(var(--muted) / 0.4)",
    color: "hsl(var(--foreground))",
    border: "1px solid hsl(var(--border) / 0.5)",
  };

  // Success state
  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-background relative">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-muted-foreground font-body text-base mb-8">
              Your message has been received. Our team will reach out to you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 font-body">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-3">
            Let's Connect
          </h2>
          <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
            Have a question or want to learn more about our studios? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="card-glass !p-6 md:!p-8 space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={inputClass}
              style={inputStyle}
              maxLength={100}
            />
            {errors.name && (
              <p className="text-xs text-destructive mt-1 font-body">{errors.name}</p>
            )}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
                style={inputStyle}
                maxLength={255}
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1 font-body">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass}
                style={inputStyle}
                maxLength={20}
              />
              {errors.phone && (
                <p className="text-xs text-destructive mt-1 font-body">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-body font-medium">
              Your Message
            </label>
            <textarea
              placeholder="Tell us about your project or inquiry..."
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
              className={`${inputClass} resize-none`}
              style={inputStyle}
              maxLength={1000}
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1 font-body">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full text-center flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
