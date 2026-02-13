import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { type Archetype, archetypes } from "@/data/archetypes";
import { archetypeIllustrations } from "@/data/archetypeIllustrations";
import { compatibility, compatLevelLabel, compatLevelColor, type CompatLevel } from "@/data/compatibility";
import ShareResults from "./ShareResults";
import coupleBokeh from "@/assets/couple-bokeh.png";
import coupleWindow from "@/assets/couple-window.png";

interface ResultPageProps {
  archetype: Archetype;
  onRestart: () => void;
}

const anim = (delay: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.4, delay },
});

/** Extract the first sentence from a paragraph */
const firstSentence = (text: string) => {
  const match = text.match(/^(.+?[.!?])\s/);
  return match ? match[1] : text.slice(0, 120) + "…";
};

/** Extract the first N sentences (default 3) from a paragraph */
const firstNSentences = (text: string, n = 3) => {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length <= n) return text.trim();
  return sentences.slice(0, n).join(" ").trim();
};

/** Create a short summary (2 sentences) from the advice object */
const summarizeAdvice = (
  advice: {
    communication: string;
    compatiblePartner: string;
    pitfalls: string;
    growth: string;
    datingStrategy: string;
    conflictHandling: string;
  },
  sentences = 2
) => {
  const combined = [
    advice.communication,
    advice.compatiblePartner,
    advice.pitfalls,
    advice.growth,
    advice.datingStrategy,
    advice.conflictHandling,
  ]
    .filter(Boolean)
    .join(" ");
  return firstNSentences(combined, sentences);
};

/** Grab 2-3 short key phrases from a paragraph */
const keyPhrases = (text: string, count = 3): string[] => {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  return sentences.slice(0, count).map((s) => s.replace(/\.$/, ""));
};

const ResultPage = ({ archetype, onRestart }: ResultPageProps) => {
  const illustration = archetypeIllustrations[archetype.key];
  const [selectedPartner, setSelectedPartner] = useState<Archetype | null>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background" ref={resultsContainerRef}>
      {/* ── Hero ── */}
      <div className="gradient-hero py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-row items-center gap-4">
          {/* Image left */}
          {illustration && (
            <motion.div {...anim(0)} className="flex-shrink-0">
              <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-52 md:h-64 lg:w-64 lg:h-80 rounded-2xl md:rounded-3xl overflow-hidden bg-white/40 dark:bg-black/30 shadow-xl border border-border flex items-center justify-center">
                <img
                  src={illustration}
                  alt={archetype.name}
                  className="w-full h-full object-cover block"
                />
              </div>
            </motion.div>
          )}

          {/* Text right */}
          <motion.div {...anim(0.05)} className="text-center mx-auto md:mx-0">
            <p className="text-sm font-body text-muted-foreground mb-2 tracking-wide uppercase">
              You are…
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
              {archetype.name}
            </h1>
            <motion.p className="text-sm md:text-base text-muted-foreground italic font-display" {...anim(0.1)}>
              "{archetype.tagline}"
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">


        {/* Combined profile + how you love (left column) — profile card removed, merged into left grid column below */}

        {/* Side-by-side: How You Love / How to Love You */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card title="Your Lover Profile" delay={0.35}>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              {firstSentence(archetype.description)} {firstNSentences(archetype.howTheyLove, 2)}
            </p>
          </Card>
          <Card title="How to Love You" delay={0.4}>
            <ul className="space-y-1.5">
              {keyPhrases(archetype.howToLoveThem, 2).map((p, i) => (
                <li key={i} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                  <span className="text-accent mt-0.5">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>



        {/* Best environment */}
        <Card title="Where to Find Love" delay={0.6}>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {firstSentence(archetype.bestEnvironment)}
          </p>
        </Card>



        {/* ── Advice Section ── */}
        <motion.div {...anim(0.7)}>
          <h2 className="text-xl md:text-2xl font-display font-bold text-gradient mb-4">
            Personalized Advice
          </h2>
          <Card title="" delay={0.75}>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              {summarizeAdvice(archetype.advice, 2)}
            </p>
          </Card>
        </motion.div>

        {/* ── Compatibility Section ── */}
        <motion.div className="pt-6 border-t border-border" {...anim(1.05)}>
          <h2 className="text-xl md:text-2xl font-display font-bold text-gradient mb-1">
            Compatibility
          </h2>
          <p className="text-xs text-muted-foreground mb-6">How you pair with every archetype</p>

          {/* Best matches first */}
          {(["great", "challenging"] as CompatLevel[]).map((level) => {
            // Keep up to 2 results for each shown tier: "great" (perfect matches) and "challenging" (opposites)
            const matches = (compatibility[archetype.key] || [])
              .filter((c) => c.level === level)
              .slice(0, 2);
            if (matches.length === 0) return null;
            return (
              <div key={level} className="mb-5">
                <h4 className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  
                  {compatLevelLabel[level]}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {matches.map((match) => {
                    const partner = archetypes[match.key];
                    if (!partner) return null;
                    const partnerImg = archetypeIllustrations[match.key];
                    return (
                      <motion.div
                        key={match.key}
                        className={`flex flex-col items-center p-2 rounded-2xl border ${compatLevelColor[match.level]} cursor-pointer w-full`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedPartner(partner)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedPartner(partner); }}
                      >
                        {partnerImg ? (
                          <div className="w-full h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden bg-white/60 dark:bg-black/30 flex items-center justify-center border border-border">
                            <img src={partnerImg} alt={partner.name} className="w-full h-full object-cover object-center block" loading="lazy" />
                          </div>
                        ) : (
                          <div className="w-full h-40 sm:h-44 md:h-48 rounded-xl bg-muted-foreground/10" />
                        )}

                        <p className="text-sm font-display font-semibold mt-3 text-center">{partner.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Partner modal (click to view) */}
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50" onClick={() => setSelectedPartner(null)} />
            <motion.div
              className="relative bg-card rounded-xl p-6 max-w-lg mx-4 w-full shadow-xl border border-border"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
            >
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-3 right-3 text-muted-foreground"
                aria-label="Close partner"
              >
                ×
              </button>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/60 flex-shrink-0 border border-border">
                  <img src={archetypeIllustrations[selectedPartner.key]} alt={selectedPartner.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold">{selectedPartner.name}</h3>
                  <p className="text-sm italic text-muted-foreground">{selectedPartner.tagline}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{firstSentence(selectedPartner.description)}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Share Results */}
        <ShareResults archetype={archetype} resultsRef={resultsContainerRef} />

        {/* Restart */}
        <motion.div className="text-center pt-10 pb-6" {...anim(1.2)}>
          <button
            onClick={onRestart}
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-display hover:bg-primary/10 transition-colors"
          >
            Retake the Quiz
          </button>
        </motion.div>
      </div>
    </div>
  );
};

/* ── Sub-components ── */

const Card = ({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    className="p-5 rounded-xl bg-card border border-border"
    {...anim(delay)}
  >
    <h3 className="text-base font-display font-semibold text-foreground mb-2">{title}</h3>
    {children}
  </motion.div>
);

const AdviceCard = ({
  icon,
  title,
  text,
  delay,
}: {
  icon: string;
  title: string;
  text: string;
  delay: number;
}) => (
  <motion.div
    className="p-4 rounded-xl bg-card border border-border"
    {...anim(delay)}
  >
    <h4 className="font-display font-semibold text-foreground mb-1.5 text-sm">
      {title}
    </h4>
    <p className="text-xs text-muted-foreground font-body leading-relaxed">{text}</p>
  </motion.div>
);

export default ResultPage;
