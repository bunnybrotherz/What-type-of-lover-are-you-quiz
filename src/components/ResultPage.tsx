import { motion } from "framer-motion";
import { type Archetype } from "@/data/archetypes";
import { archetypeIllustrations } from "@/data/archetypeIllustrations";
import coupleBokeh from "@/assets/couple-bokeh.png";
import coupleWindow from "@/assets/couple-window.png";

interface ResultPageProps {
  archetype: Archetype;
  onRestart: () => void;
}

const Section = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">{title}</h3>
    <div className="text-muted-foreground font-body leading-relaxed text-sm md:text-base">{children}</div>
  </motion.div>
);

const ResultPage = ({ archetype, onRestart }: ResultPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="gradient-hero py-16 md:py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <span className="text-6xl md:text-7xl block mb-4">{archetype.emoji}</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-3">
              {archetype.name}
            </h1>
            {archetypeIllustrations[archetype.key] && (
              <motion.img
                src={archetypeIllustrations[archetype.key]}
                alt={archetype.name}
                className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-xl border-2 border-blush/30 mx-auto my-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            )}
            <p className="text-lg md:text-xl text-muted-foreground italic font-display">
              "{archetype.tagline}"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Section title="Your Lover Profile" delay={0.2}>
          <p>{archetype.description}</p>
        </Section>

        <div className="flex justify-center my-8">
          <motion.img
            src={coupleBokeh}
            alt="Romantic illustration"
            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg border-2 border-blush/30"
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <Section title="How You Love" delay={0.3}>
          <p>{archetype.howTheyLove}</p>
        </Section>

        <Section title="How to Love You" delay={0.35}>
          <p>{archetype.howToLoveThem}</p>
        </Section>

        <Section title="Your Emotional Strengths" delay={0.4}>
          <div className="flex flex-wrap gap-2">
            {archetype.strengths.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-body">
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Growth Areas" delay={0.45}>
          <div className="flex flex-wrap gap-2">
            {archetype.growthAreas.map((g) => (
              <span key={g} className="px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground text-xs font-body">
                {g}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Your Ideal Romantic Dynamic" delay={0.5}>
          <p>{archetype.idealDynamic}</p>
        </Section>

        <Section title="Best Environment to Find Love" delay={0.55}>
          <p>{archetype.bestEnvironment}</p>
        </Section>

        {/* Personalized Advice */}
        <motion.div
          className="mt-12 pt-8 border-t-2 border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.img
              src={coupleWindow}
              alt="Couple by window"
              className="w-20 h-20 rounded-xl object-cover border border-blush/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gradient">
                Your Personalized Advice
              </h2>
              <p className="text-sm text-muted-foreground">Tailored guidance for your lover type</p>
            </div>
          </div>

          <div className="space-y-6">
            <AdviceCard title="💬 Communication" text={archetype.advice.communication} delay={0.7} />
            <AdviceCard title="💕 Compatible Partners" text={archetype.advice.compatiblePartner} delay={0.75} />
            <AdviceCard title="⚠️ Pitfalls to Avoid" text={archetype.advice.pitfalls} delay={0.8} />
            <AdviceCard title="🌱 How to Grow" text={archetype.advice.growth} delay={0.85} />
            <AdviceCard title="📱 Dating Strategy" text={archetype.advice.datingStrategy} delay={0.9} />
            <AdviceCard title="🌊 Handling Conflict" text={archetype.advice.conflictHandling} delay={0.95} />
          </div>
        </motion.div>

        {/* Restart */}
        <motion.div
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <button
            onClick={onRestart}
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-display hover:bg-primary/10 transition-colors"
          >
            Retake the Quiz ✦
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const AdviceCard = ({ title, text, delay }: { title: string; text: string; delay: number }) => (
  <motion.div
    className="p-5 rounded-xl bg-card border border-border"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
  >
    <h4 className="font-display font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground font-body leading-relaxed">{text}</p>
  </motion.div>
);

export default ResultPage;
