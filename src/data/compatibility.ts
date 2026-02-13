// Compatibility ratings: "great" | "good" | "neutral" | "challenging"
// Each entry includes a short reason for the pairing.

export type CompatLevel = "great" | "good" | "neutral" | "challenging";

export interface CompatEntry {
  key: string;
  level: CompatLevel;
  reason: string;
}

// For each archetype, compatibility with all OTHER 9 archetypes
export const compatibility: Record<string, CompatEntry[]> = {
  DC: [
    { key: "AR", level: "good", reason: "Your depth grounds their spontaneity" },
    { key: "TG", level: "great", reason: "They show love through action; you through words — perfect balance" },
    { key: "QS", level: "good", reason: "Their stability complements your emotional expressiveness" },
    { key: "PP", level: "great", reason: "Both of you crave intensity and emotional honesty" },
    { key: "IE", level: "great", reason: "Two emotionally fluent souls who truly see each other" },
    { key: "II", level: "neutral", reason: "They need space; you need dialogue — requires patience" },
    { key: "SN", level: "great", reason: "Your words meet their warmth for deep mutual care" },
    { key: "PS", level: "good", reason: "Their lightness balances your depth, if they can get serious" },
    { key: "AP", level: "challenging", reason: "You lead with feelings; they lead with logic — friction zone" },
  ],
  AR: [
    { key: "DC", level: "good", reason: "Their depth adds meaning to your adventures" },
    { key: "TG", level: "neutral", reason: "Different love languages, but mutual respect works" },
    { key: "QS", level: "challenging", reason: "You crave novelty; they crave routine — tough balance" },
    { key: "PP", level: "great", reason: "Two passionate souls chasing the thrill together" },
    { key: "IE", level: "good", reason: "Their intuition helps navigate your spontaneous energy" },
    { key: "II", level: "good", reason: "Both value independence and personal growth" },
    { key: "SN", level: "neutral", reason: "They want home; you want the world — compromise needed" },
    { key: "PS", level: "great", reason: "Adventure + playfulness = an unforgettable duo" },
    { key: "AP", level: "challenging", reason: "Your spontaneity clashes with their need for planning" },
  ],
  TG: [
    { key: "DC", level: "great", reason: "They verbalize what you express through actions" },
    { key: "AR", level: "neutral", reason: "You prefer steady gestures; they prefer wild ones" },
    { key: "QS", level: "great", reason: "Two quiet carers building a beautiful life together" },
    { key: "PP", level: "good", reason: "Your thoughtfulness soothes their intensity" },
    { key: "IE", level: "great", reason: "Both deeply attuned to others' needs" },
    { key: "II", level: "neutral", reason: "They may not reciprocate at your level — be patient" },
    { key: "SN", level: "great", reason: "Mirror souls — both give, both nurture, both flourish" },
    { key: "PS", level: "good", reason: "Your depth grounds their lightness nicely" },
    { key: "AP", level: "good", reason: "Both detail-oriented and deeply loyal" },
  ],
  QS: [
    { key: "DC", level: "good", reason: "They draw out emotions you tend to hold inside" },
    { key: "AR", level: "challenging", reason: "Their need for novelty may unsettle your stability" },
    { key: "TG", level: "great", reason: "Shared values of consistency and quiet devotion" },
    { key: "PP", level: "good", reason: "They bring the spark; you bring the steady flame" },
    { key: "IE", level: "great", reason: "Their sensitivity + your stability = deep safety" },
    { key: "II", level: "good", reason: "Both respect boundaries and personal space" },
    { key: "SN", level: "great", reason: "A domestic dream team — warm, steady, enduring" },
    { key: "PS", level: "neutral", reason: "Their energy can feel chaotic, but also refreshing" },
    { key: "AP", level: "great", reason: "Shared love of structure, planning, and security" },
  ],
  PP: [
    { key: "DC", level: "great", reason: "Both crave emotional intensity and honesty" },
    { key: "AR", level: "great", reason: "Passion meets adventure — electric combination" },
    { key: "TG", level: "good", reason: "Their quiet devotion grounds your fire" },
    { key: "QS", level: "good", reason: "Opposites attract — they calm your storm" },
    { key: "IE", level: "good", reason: "Deep emotional connection, but watch for burnout" },
    { key: "II", level: "challenging", reason: "You pursue; they retreat — a frustrating dance" },
    { key: "SN", level: "good", reason: "Their warmth nurtures your passionate heart" },
    { key: "PS", level: "great", reason: "Two high-energy lovers who never bore each other" },
    { key: "AP", level: "challenging", reason: "Your heat vs their cool analysis — sparks or clashes" },
  ],
  IE: [
    { key: "DC", level: "great", reason: "You both live in the emotional deep end together" },
    { key: "AR", level: "good", reason: "Their adventures give you new emotional landscapes" },
    { key: "TG", level: "great", reason: "Two givers who finally get given to" },
    { key: "QS", level: "great", reason: "Their calm is a sanctuary for your sensitivity" },
    { key: "PP", level: "good", reason: "Intense connection, but protect your energy" },
    { key: "II", level: "neutral", reason: "You feel everything; they analyze everything — different languages" },
    { key: "SN", level: "great", reason: "Mutual nurturing creates a deeply healing bond" },
    { key: "PS", level: "good", reason: "Their joy lifts your spirit when you absorb too much" },
    { key: "AP", level: "good", reason: "Your empathy softens their guard beautifully" },
  ],
  II: [
    { key: "DC", level: "neutral", reason: "Their need to talk may feel like pressure" },
    { key: "AR", level: "good", reason: "Shared love of growth and new experiences" },
    { key: "TG", level: "neutral", reason: "They give a lot — make sure you reciprocate" },
    { key: "QS", level: "good", reason: "Both value space, trust, and slow-building love" },
    { key: "PP", level: "challenging", reason: "Their intensity can feel suffocating to you" },
    { key: "IE", level: "neutral", reason: "They intuit your walls — which can feel invasive or healing" },
    { key: "SN", level: "good", reason: "Their patience gives you room to open up" },
    { key: "PS", level: "good", reason: "Their playfulness disarms your seriousness" },
    { key: "AP", level: "great", reason: "Two thinkers who respect each other's autonomy deeply" },
  ],
  SN: [
    { key: "DC", level: "great", reason: "They give you the words; you give them the warmth" },
    { key: "AR", level: "neutral", reason: "You crave home; they crave horizons — meet in the middle" },
    { key: "TG", level: "great", reason: "A beautiful cycle of mutual care and thoughtfulness" },
    { key: "QS", level: "great", reason: "The coziest, most stable love story imaginable" },
    { key: "PP", level: "good", reason: "You nurture their passion into something sustainable" },
    { key: "IE", level: "great", reason: "Two empaths creating the safest love on earth" },
    { key: "II", level: "good", reason: "Give them space and they'll treasure your care" },
    { key: "PS", level: "good", reason: "You ground them; they bring you unexpected joy" },
    { key: "AP", level: "good", reason: "Shared loyalty and commitment to building together" },
  ],
  PS: [
    { key: "DC", level: "good", reason: "They add depth; you add delight — great mix" },
    { key: "AR", level: "great", reason: "The ultimate fun couple — always laughing, always exploring" },
    { key: "TG", level: "good", reason: "Their thoughtfulness surprises you in the best way" },
    { key: "QS", level: "neutral", reason: "You may find them too calm; they may find you too chaotic" },
    { key: "PP", level: "great", reason: "Fireworks on fireworks — magnetic chemistry" },
    { key: "IE", level: "good", reason: "Your lightness heals their heaviness" },
    { key: "II", level: "good", reason: "Both value freedom and individual expression" },
    { key: "SN", level: "good", reason: "Their warmth gives you a soft place to land" },
    { key: "AP", level: "challenging", reason: "You improvise; they strategize — different rhythms" },
  ],
  AP: [
    { key: "DC", level: "challenging", reason: "Feelings vs logic — you speak different love languages" },
    { key: "AR", level: "challenging", reason: "Their chaos stresses your need for order" },
    { key: "TG", level: "good", reason: "Both attentive and detail-oriented in love" },
    { key: "QS", level: "great", reason: "Shared love of security, plans, and predictability" },
    { key: "PP", level: "challenging", reason: "Their intensity may overwhelm your careful approach" },
    { key: "IE", level: "good", reason: "Their empathy unlocks your emotional side" },
    { key: "II", level: "great", reason: "Intellectual equals who respect each other's boundaries" },
    { key: "SN", level: "good", reason: "Their warmth balances your analytical nature" },
    { key: "PS", level: "challenging", reason: "Their unpredictability rattles your need for control" },
  ],
};

export const compatLevelLabel: Record<CompatLevel, string> = {
  great: "Perfect Match",
  good: "Strong Pair",
  neutral: "Could Work",
  challenging: "Opposites",
};

export const compatLevelColor: Record<CompatLevel, string> = {
  great: "bg-primary/15 border-primary/30 text-primary",
  good: "bg-secondary border-border text-secondary-foreground",
  neutral: "bg-muted border-border text-muted-foreground",
  challenging: "bg-card border-border text-muted-foreground",
};
