import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/banter-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Studios", href: "#studios", hasDropdown: true },
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Book", href: "#booking" },
];

const studioItems = [
  { label: "Studio 1", href: "#studio-1" },
  { label: "Studio 2", href: "#studio-2" },
  { label: "Studio 3", href: "#studio-3" },
  { label: "Studio 4", href: "#studio-4" },
  { label: "Studio 5", href: "#studio-5" },
  { label: "Studio 6", href: "#studio-6" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [studiosOpen, setStudiosOpen] = useState(false);
  const [mobileStudiosOpen, setMobileStudiosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStudiosOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStudioClick = (href: string) => {
    setStudiosOpen(false);
    setMobileOpen(false);
    setMobileStudiosOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
      style={{
        background: "hsla(0, 0%, 100%, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid hsla(220, 13%, 91%, 0.6)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="#hero" className="flex items-center group">
          <motion.img
            src={logo}
            alt="Banter Studio"
            className="h-14 md:h-16 lg:h-[72px] w-auto"
            whileHover={{ scale: 1.04 }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setStudiosOpen(!studiosOpen)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors duration-300 text-muted-foreground hover:text-primary"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${studiosOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {studiosOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-48 rounded-xl overflow-hidden shadow-lg"
                      style={{
                        background: "hsla(0, 0%, 100%, 0.95)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid hsla(220, 13%, 91%, 0.6)",
                      }}
                    >
                      <div className="py-2">
                        {studioItems.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handleStudioClick(item.href)}
                            className="w-full text-left px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/60 transition-colors duration-200"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-muted-foreground hover:text-primary"
              >
                {link.label}
              </a>
            )
          )}
          <a href="#booking" className="btn-primary text-xs !px-6 !py-2.5">
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 rounded-xl overflow-hidden"
            style={{
              background: "hsla(0, 0%, 100%, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid hsla(220, 13%, 91%, 0.6)",
            }}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileStudiosOpen(!mobileStudiosOpen)}
                      className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${mobileStudiosOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileStudiosOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 flex flex-col gap-2">
                            {studioItems.map((item) => (
                              <button
                                key={item.label}
                                onClick={() => handleStudioClick(item.href)}
                                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-xs text-center !py-2.5 mt-2"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
