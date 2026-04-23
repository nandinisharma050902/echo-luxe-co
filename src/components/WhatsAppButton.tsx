import whatsappIcon from "@/assets/whatsapp-icon.svg";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919911098231"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-8 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg group transition-transform duration-200 hover:scale-110 active:scale-95 animate-fade-in"
      style={{
        background: "#25D366",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" width={28} height={28} className="w-7 h-7" />
      <span
        className="absolute right-16 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          background: "hsl(var(--foreground))",
          color: "hsl(var(--background))",
        }}
      >
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
