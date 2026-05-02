import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/banter-logo.png";

const Footer = () => {
  return (
    <footer className="section-padding bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Banter Studio" className="h-10 drop-shadow-[0_0_6px_hsla(352,98%,63%,0.3)]" />
              <span className="font-heading text-lg font-bold text-foreground">Banter Studio</span>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Premium podcast & content studios for creators, brands, and visionaries. Build your voice. Amplify your story.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919899180036" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm font-body">
                <Phone className="w-4 h-4 text-primary" /> +91 98991 80036
              </a>
              <a href="mailto:info@bantermarketo.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm font-body">
                <Mail className="w-4 h-4 text-primary" /> info@bantermarketo.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm font-body">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>A-1/106, Sector-8, Rohini, Delhi-110085<br />Near Rohini East & Pitampura Metro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center" style={{ borderTop: "1px solid hsl(var(--border) / 0.4)" }}>
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Banter Studio. All rights reserved. | <a href="https://bantermarketo.com" target="_blank" rel="noopener" className="text-primary hover:underline">bantermarketo.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
