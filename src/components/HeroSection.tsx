import { motion } from "framer-motion";
import coupleCozy from "@/assets/couple-cozy.png";
import coupleFlowers from "@/assets/couple-flowers.png";
import { archetypeIllustrations } from "@/data/archetypeIllustrations";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  const archetypeKeys = Object.keys(archetypeIllustrations);

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-accent/40 animate-float" />
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-blush/50 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-lavender/30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/30 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Images Grid - All 10 Archetypes - 5 Top, 5 Below */}
      <div className="relative w-full h-64 md:h-72 mb-8 max-w-5xl">
        {archetypeKeys.map((key, index) => {
          const seed = key.charCodeAt(0);
          const isTopRow = index < 5;
          const positionInRow = isTopRow ? index : index - 5;
          
          // Position horizontally across the row
          const randomX = (positionInRow * 20) + ((seed * 73) % 4) - 2;
          // Position vertically (top row at 40%, bottom row at 60%)
          const randomY = isTopRow ? 40 : 60;
          const randomRotation = ((seed * 157 + index * 103) % 20) - 10;
          
          return (
            <motion.img
              key={key}
              src={archetypeIllustrations[key]}
              alt={`Archetype ${key}`}
              className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg object-cover object-center shadow-md border border-border hover:shadow-lg transition-shadow"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                transform: `translateY(-50%)`,
              }}
              initial={{ opacity: 0, scale: 0.5, rotate: randomRotation - 10 }}
              animate={{ opacity: 1, scale: 1, rotate: randomRotation }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              whileHover={{ scale: 1.1, rotate: randomRotation + 5 }}
            />
          );
        })}
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
