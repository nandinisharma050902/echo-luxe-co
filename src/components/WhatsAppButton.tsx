import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon.svg";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 md:bottom-8 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg group"
      style={{
        background: "#25D366",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-16 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          background: "hsl(var(--foreground))",
          color: "hsl(var(--background))",
        }}
      >
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
