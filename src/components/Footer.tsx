import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-coral/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl tracking-widest mb-4">
              BANTER<span className="gradient-text-coral">STUDIO</span>
            </h3>
            <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
              Premium podcast & content studios for creators, brands, and visionaries. Build your voice. Amplify your story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-xl tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Studios", "Features", "Booking"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-muted-foreground hover:text-coral transition-colors text-sm font-body">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-xl tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919899180036" className="flex items-center gap-3 text-muted-foreground hover:text-coral transition-colors text-sm font-body">
                <Phone className="w-4 h-4 text-coral" /> +91 98991 80036
              </a>
              <a href="mailto:hello@bantermarketo.com" className="flex items-center gap-3 text-muted-foreground hover:text-coral transition-colors text-sm font-body">
                <Mail className="w-4 h-4 text-coral" /> hello@bantermarketo.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm font-body">
                <MapPin className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                <span>A-1/106, Sector-8, Rohini, Delhi-110085<br />Near Rohini East & Pitampura Metro</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Banter Studio. All rights reserved. | <a href="https://bantermarketo.com" target="_blank" rel="noopener" className="text-coral hover:underline">bantermarketo.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
