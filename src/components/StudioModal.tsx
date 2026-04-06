import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState } from "react";
import type { StudioData } from "./StudiosSection";

interface Props {
  studio: StudioData;
  onClose: () => void;
}

const StudioModal = ({ studio, onClose }: Props) => {
  const [activeVariant, setActiveVariant] = useState<1 | 2>(1);
  const current = activeVariant === 1 ? studio.variant1 : studio.variant2;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header image */}
          <div className="relative aspect-video">
            <img
              src={studio.variantsImg}
              alt={studio.name}
              className="w-full h-full object-cover rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-coral mb-2 font-body">{studio.name}</p>
            
            {/* Variant tabs */}
            <div className="flex gap-3 mb-6">
              {[1, 2].map((v) => (
                <button
                  key={v}
                  onClick={() => setActiveVariant(v as 1 | 2)}
                  className={`px-5 py-2 rounded-lg text-sm font-body font-medium transition-all duration-300 ${
                    activeVariant === v
                      ? "bg-coral/20 text-coral border border-coral/30"
                      : "glass-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Variant {v}
                </button>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-2">{current.name}</h2>
            <p className="text-muted-foreground font-body mb-6">Ideal for: {current.ideal}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {studio.features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-sm font-body text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>

            <a href="#booking" onClick={onClose} className="btn-glow-coral inline-block">
              Book This Studio
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StudioModal;
