import { motion } from "framer-motion";
import coupleCozy from "@/assets/couple-cozy.png";
import coupleFlowers from "@/assets/couple-flowers.png";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-accent/40 animate-float" />
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-blush/50 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-lavender/30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/30 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Images */}
      <div className="flex items-center gap-6 mb-8 md:gap-10">
        <motion.img
          src={coupleCozy}
          alt="Cozy couple illustration"
          className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover shadow-lg border-2 border-blush/30"
          initial={{ opacity: 0, x: -40, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          src={coupleFlowers}
          alt="Couple in flower field illustration"
          className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover shadow-lg border-2 border-lavender/30 mt-8"
          initial={{ opacity: 0, x: 40, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      {/* Title */}
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient mb-4 leading-tight">
          What Kind of <br />Lover Are You?
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-2 font-body max-w-lg mx-auto">
          A psychology-backed quiz to discover your unique love archetype
        </p>
        <p className="text-sm text-muted-foreground/70 mb-8">
          Based on attachment theory, love languages, and the Big Five personality model
        </p>
      </motion.div>

      {/* CTA */}
      <motion.button
        onClick={onStart}
        className="gradient-wine text-wine-foreground font-display text-lg md:text-xl px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Discover Your Type
      </motion.button>

      <motion.p
        className="text-xs text-muted-foreground/50 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        14 questions, about 5 minutes
      </motion.p>
    </div>
  );
};

export default HeroSection;
