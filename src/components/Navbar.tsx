import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/banter-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Studios", href: "#studios" },
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Book", href: "#booking" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-2"
          : "py-4"
      }`}
      style={{
        background: scrolled
          ? "hsla(0, 0%, 100%, 0.85)"
          : "hsla(0, 0%, 100%, 0.4)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid hsla(220, 14%, 16%, 0.6)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="Banter Studio"
            className="h-10 md:h-14 transition-all duration-300 drop-shadow-[0_0_8px_hsla(352,98%,63%,0.3)]"
            whileHover={{ scale: 1.08 }}
          />
          <span className="font-heading text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Banter Studio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a href="#booking" className="btn-primary text-xs !px-6 !py-2.5">
            Book Now
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 rounded-xl overflow-hidden"
            style={{
              background: "hsla(220, 18%, 10%, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid hsla(220, 14%, 16%, 0.6)",
            }}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#booking" onClick={() => setMobileOpen(false)} className="btn-primary text-xs text-center !py-2.5 mt-2">Book Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
