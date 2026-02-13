import { motion } from "framer-motion";
import { type Archetype, archetypes } from "@/data/archetypes";
import { archetypeIllustrations } from "@/data/archetypeIllustrations";
import { compatibility, compatLevelLabel, compatLevelColor, type CompatLevel } from "@/data/compatibility";
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

/** Grab 2-3 short key phrases from a paragraph */
const keyPhrases = (text: string, count = 3): string[] => {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  return sentences.slice(0, count).map((s) => s.replace(/\.$/, ""));
};

const ResultPage = ({ archetype, onRestart }: ResultPageProps) => {
  const illustration = archetypeIllustrations[archetype.key];

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <div className="gradient-hero py-14 md:py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <motion.div {...anim(0)}>
            <p className="text-sm font-body text-muted-foreground mb-2 tracking-wide uppercase">
              You are…
            </p>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-2">
              {archetype.name}
            </h1>
          </motion.div>

          {illustration && (
            <motion.img
              src={illustration}
              alt={archetype.name}
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover shadow-xl border-2 border-blush/30 mx-auto my-5"
              {...anim(0.15)}
            />
          )}

          <motion.p
            className="text-base md:text-lg text-muted-foreground italic font-display"
            {...anim(0.2)}
          >
            "{archetype.tagline}"
          </motion.p>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="max-w-lg mx-auto px-4 py-10 space-y-6">
        {/* Quick trait chips */}
        <motion.div className="flex flex-wrap justify-center gap-2" {...anim(0.25)}>
          {archetype.strengths.slice(0, 3).map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-body"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* Profile card */}
        <Card title="Your Lover Profile" delay={0.3}>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {firstSentence(archetype.description)}
          </p>
        </Card>

        {/* Side-by-side: How You Love / How to Love You */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card title="How You Love" delay={0.35}>
            <ul className="space-y-1.5">
              {keyPhrases(archetype.howTheyLove, 2).map((p, i) => (
                <li key={i} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                  <span className="text-accent mt-0.5">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
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

        {/* Strengths & Growth side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card title="Strengths" delay={0.45}>
            <ul className="space-y-1">
              {archetype.strengths.map((s) => (
                <li key={s} className="text-sm text-muted-foreground font-body">
                  {s}
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Growth Areas" delay={0.5}>
            <ul className="space-y-1">
              {archetype.growthAreas.map((g) => (
                <li key={g} className="text-sm text-muted-foreground font-body">
                  {g}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Romantic dynamic */}
        <Card title="Ideal Dynamic" delay={0.55}>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {firstSentence(archetype.idealDynamic)}
          </p>
        </Card>

        {/* Best environment */}
        <Card title="Where to Find Love" delay={0.6}>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {firstSentence(archetype.bestEnvironment)}
          </p>
        </Card>

        {/* Decorative image divider */}
        <motion.div className="flex justify-center py-2" {...anim(0.65)}>
          <img
            src={coupleBokeh}
            alt=""
            className="w-32 h-32 rounded-2xl object-cover shadow-md border border-blush/20 -rotate-2"
          />
        </motion.div>

        {/* ── Advice Section ── */}
        <motion.div {...anim(0.7)}>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={coupleWindow}
              alt=""
              className="w-14 h-14 rounded-xl object-cover border border-blush/30"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-gradient">
                Personalized Advice
              </h2>
              <p className="text-xs text-muted-foreground">Tailored to your type</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AdviceCard icon="" title="Communication" text={firstSentence(archetype.advice.communication)} delay={0.75} />
          <AdviceCard icon="" title="Compatible Partners" text={firstSentence(archetype.advice.compatiblePartner)} delay={0.8} />
          <AdviceCard icon="" title="Pitfalls" text={firstSentence(archetype.advice.pitfalls)} delay={0.85} />
          <AdviceCard icon="" title="Growth" text={firstSentence(archetype.advice.growth)} delay={0.9} />
          <AdviceCard icon="" title="Dating Strategy" text={firstSentence(archetype.advice.datingStrategy)} delay={0.95} />
          <AdviceCard icon="" title="Conflict" text={firstSentence(archetype.advice.conflictHandling)} delay={1.0} />
        </div>

        {/* ── Compatibility Section ── */}
        <motion.div className="mt-10 pt-8 border-t-2 border-border" {...anim(1.05)}>
          <h2 className="text-xl md:text-2xl font-display font-bold text-gradient mb-1">
            Compatibility
          </h2>
          <p className="text-xs text-muted-foreground mb-6">How you pair with every archetype</p>

          {/* Best matches first */}
          {(["great", "good", "neutral", "challenging"] as CompatLevel[]).map((level) => {
            const matches = (compatibility[archetype.key] || []).filter((c) => c.level === level);
            if (matches.length === 0) return null;
            return (
              <div key={level} className="mb-5">
                <h4 className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  
                  {compatLevelLabel[level]}
                </h4>
                <div className="space-y-2">
                  {matches.map((match) => {
                    const partner = archetypes[match.key];
                    if (!partner) return null;
                    const partnerImg = archetypeIllustrations[match.key];
                    return (
                      <motion.div
                        key={match.key}
                        className={`flex items-center gap-3 p-3 rounded-xl border ${compatLevelColor[match.level]}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {partnerImg && (
                          <img
                            src={partnerImg}
                            alt={partner.name}
                            className="w-10 h-10 rounded-lg object-cover border border-border flex-shrink-0"
                          />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-display font-semibold truncate">
                            {partner.name}
                          </p>
                          <p className="text-xs text-muted-foreground font-body leading-snug">
                            {match.reason}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>

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
