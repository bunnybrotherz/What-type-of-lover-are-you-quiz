export interface Archetype {
  key: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  howTheyLove: string;
  howToLoveThem: string;
  strengths: string[];
  growthAreas: string[];
  idealDynamic: string;
  bestEnvironment: string;
  advice: {
    communication: string;
    compatiblePartner: string;
    pitfalls: string;
    growth: string;
    datingStrategy: string;
    conflictHandling: string;
  };
}

export const archetypes: Record<string, Archetype> = {
  DC: {
    key: "DC",
    name: "The Devoted Communicator",
    emoji: "💬",
    tagline: "Love is a conversation that never ends.",
    description: "You believe the heart of every great love story is honest, fearless communication. You're the person who sends the long text at 2 AM — not because you're anxious, but because you refuse to let things go unsaid. For you, intimacy is built word by word, vulnerable admission by vulnerable admission.",
    howTheyLove: "Through deep conversations, verbal affirmations, and emotional transparency. You create safety through words and are fiercely committed to understanding your partner's inner world. You'll stay up all night to resolve a misunderstanding because peace matters more than sleep.",
    howToLoveThem: "Speak their language — literally. Tell them how you feel, even when it's messy. They need a partner who's willing to be emotionally articulate and who values dialogue over silence. Never stonewall them; it's their kryptonite.",
    strengths: ["Emotional intelligence", "Active listening", "Conflict resolution", "Creating emotional safety", "Verbal intimacy"],
    growthAreas: ["Over-processing emotions verbally", "Difficulty accepting when silence is the answer", "Can overwhelm quieter partners", "May prioritize talking over doing"],
    idealDynamic: "A slow-burn, deep-connection relationship where both partners prioritize emotional intimacy and honest communication above all else.",
    bestEnvironment: "IRL connections through meaningful social settings — book clubs, therapy groups, deep-dive workshops. Online dating can work if profiles emphasize emotional depth over aesthetics.",
    advice: {
      communication: "Your superpower is words, but remember: sometimes presence speaks louder. Practice sitting in comfortable silence with your partner. Not every feeling needs to be discussed the moment it arises.",
      compatiblePartner: "Look for someone who values emotional depth but also brings groundedness. An Intuitive Empath or Steady Nurturer will match your emotional bandwidth without getting overwhelmed.",
      pitfalls: "You may accidentally make your partner feel interrogated. Not everyone processes emotions verbally or in real-time. Give space for different communication styles.",
      growth: "Develop comfort with ambiguity. Not every relationship moment needs to be analyzed. Sometimes love is felt in the doing, not the discussing.",
      datingStrategy: "Seek environments that foster genuine conversation — skip the loud bars. Coffee dates, walks, cooking classes. Ask deeper questions early; surface-level people will self-select out.",
      conflictHandling: "You're naturally good at this, but watch for a tendency to over-talk during fights. Set a timer: speak for 5 minutes, then truly listen for 5. Resolution comes from understanding, not winning.",
    },
  },
  AR: {
    key: "AR",
    name: "The Adventurous Romantic",
    emoji: "🌍",
    tagline: "Love should feel like the best trip you've ever taken.",
    description: "You fall in love with experiences as much as people. Your ideal relationship is a passport filled with stamps, a camera roll of spontaneous moments, and a partner who says 'yes' before you even finish the question. Routine is your nemesis; novelty is your love language.",
    howTheyLove: "Through shared experiences, spontaneity, and creating unforgettable memories. You show love by planning surprises, initiating adventures, and keeping the relationship feeling fresh and alive.",
    howToLoveThem: "Say yes. Be open to last-minute plans, new experiences, and stepping outside your comfort zone. They need a partner who sees life as an adventure to share, not a schedule to follow.",
    strengths: ["Keeping romance alive", "Spontaneity", "Openness to growth", "Creating lasting memories", "Bringing joy and excitement"],
    growthAreas: ["Avoiding difficult emotions through constant activity", "Struggling with routine responsibilities", "May confuse excitement with compatibility", "Can feel trapped by commitment"],
    idealDynamic: "An adventurous romance filled with travel, new experiences, and mutual growth — where both partners push each other to explore and evolve.",
    bestEnvironment: "Both! IRL through travel groups, outdoor activities, and social events. Online through apps that emphasize adventure and lifestyle compatibility. Bumble and Hinge work well for showcasing your adventurous side.",
    advice: {
      communication: "Share your need for novelty early and often. Frame it positively: 'I love us most when we're exploring something new together.' Avoid making a partner feel like they're boring you.",
      compatiblePartner: "A Playful Spark or Passionate Pursuer will match your energy. Avoid pairing with someone who needs excessive predictability — you'll feel caged, they'll feel destabilized.",
      pitfalls: "Don't use adventure as emotional avoidance. If you only connect through activities, the relationship may lack depth. Practice having deep conversations without any distractions.",
      growth: "Learn to find magic in the mundane. The truest test of your love isn't a sunset in Bali — it's a Tuesday night doing laundry together and still feeling connected.",
      datingStrategy: "Join hiking groups, travel meetups, or co-working spaces abroad. On apps, showcase your adventures but also hint at depth. The right person will love both your passport stamps and your late-night thoughts.",
      conflictHandling: "Your instinct is to 'fix it' by planning something fun. Resist this. Sit with the discomfort, address the issue directly, and then plan something fun as a celebration of resolution.",
    },
  },
  TG: {
    key: "TG",
    name: "The Thoughtful Giver",
    emoji: "🎁",
    tagline: "Love is in the details no one else notices.",
    description: "You express love through carefully considered acts of service and perfectly chosen gestures. You're the partner who remembers that throwaway comment about a childhood snack and surprises them with it six months later. Your love is quiet, deliberate, and devastatingly thoughtful.",
    howTheyLove: "Through anticipating needs, meaningful gestures, and acts of service that show deep attention. You study your partner like a favorite book, learning their preferences, fears, and secret wishes.",
    howToLoveThem: "Notice them noticing you. Acknowledge their efforts explicitly — they rarely ask for recognition but deeply crave it. Reciprocate with your own thoughtful gestures, even small ones.",
    strengths: ["Attentiveness", "Generosity", "Emotional perceptiveness", "Reliability", "Making others feel truly seen"],
    growthAreas: ["Giving to the point of self-depletion", "Keeping score unconsciously", "Difficulty receiving love", "May feel resentful when efforts aren't matched"],
    idealDynamic: "A stable, deeply caring partnership where both partners invest in understanding each other's inner worlds and express love through meaningful, consistent actions.",
    bestEnvironment: "IRL connections where you can demonstrate your attentiveness naturally. Volunteer events, community groups, or friend-of-friend introductions work well. You shine when someone can witness your character over time.",
    advice: {
      communication: "Learn to ask for what you need instead of hoping your partner will intuit it the way you do for them. Say: 'It would mean a lot to me if you...' — be specific.",
      compatiblePartner: "A Devoted Communicator who will verbally appreciate your efforts, or a Quiet Stabilizer who reciprocates through their own steady, caring presence.",
      pitfalls: "You may attract takers. Set boundaries early: giving should feel joyful, not obligatory. If you feel drained, that's data — listen to it.",
      growth: "Practice receiving. Let someone take care of you without immediately reciprocating. Sit in the discomfort of being loved without earning it.",
      datingStrategy: "Quality over quantity. You won't connect through rapid swiping — seek situations where you can get to know someone gradually. Friend groups, recurring classes, or community involvement.",
      conflictHandling: "You tend to withdraw and let resentment simmer. Instead, address things early: 'I felt hurt when...' is better than months of silent scorekeeping.",
    },
  },
  QS: {
    key: "QS",
    name: "The Quiet Stabilizer",
    emoji: "🏡",
    tagline: "Love isn't a firework — it's a hearth.",
    description: "You are the calm in every storm, the steady hand in every crisis. You don't need grand gestures or dramatic declarations; you show love through unwavering presence. Your relationships are built on trust, consistency, and the quiet confidence that you'll always show up.",
    howTheyLove: "Through reliability, creating routines of care, and being the emotional anchor in the relationship. You handle life's logistics so your partner can dream, and your love is expressed in a thousand small, consistent acts.",
    howToLoveThem: "Be consistent. Show up when you say you will. Appreciate the stability they create — don't mistake their calm for a lack of passion. They feel deeply; they just express it quietly.",
    strengths: ["Emotional stability", "Dependability", "Patience", "Creating safe spaces", "Long-term commitment"],
    growthAreas: ["Avoiding emotional vulnerability", "Confusing stability with emotional suppression", "May resist necessary change", "Can become too comfortable with the status quo"],
    idealDynamic: "A stable, committed partnership built on mutual trust, shared domestic life, and deep, quiet intimacy. Slow burn over instant spark.",
    bestEnvironment: "IRL through established social networks, mutual friends, or workplace connections. You need time to reveal your depth, and dating apps can feel superficial. Community involvement and recurring social events work best.",
    advice: {
      communication: "Your partner needs to hear how you feel, even when it seems obvious to you. Saying 'I love this life we've built' means more than you think. Schedule regular check-ins to stay emotionally connected.",
      compatiblePartner: "A Thoughtful Giver or Steady Nurturer will appreciate your stability. A Passionate Pursuer can bring excitement you need, if they respect your pace.",
      pitfalls: "Don't let comfort become complacency. Relationships need occasional novelty. Surprise your partner sometimes — it doesn't have to be big, just unexpected.",
      growth: "Practice emotional risk-taking. Share a fear, a dream, an insecurity. Vulnerability isn't instability — it's the deeper form of the trust you already value.",
      datingStrategy: "You're a long-game player. Focus on building genuine connections over time. Recurring classes, friend groups, and community events let your character speak for itself.",
      conflictHandling: "You avoid conflict, which can lead to eruptions later. Practice addressing small issues in real-time: 'Hey, this bothered me a little' prevents bigger blowups down the road.",
    },
  },
  PP: {
    key: "PP",
    name: "The Passionate Pursuer",
    emoji: "🔥",
    tagline: "Love should take your breath away — or what's the point?",
    description: "You love with intensity. When you're in, you're all in — the grand gestures, the deep eye contact, the 'I need to see you right now' texts. You believe love should be felt viscerally, and you have zero patience for lukewarm affection.",
    howTheyLove: "With intensity, physical affection, and bold emotional declarations. They pursue with single-minded devotion and make their partner feel like the most important person in the world.",
    howToLoveThem: "Match their energy. Don't play it cool — they can smell disinterest from a mile away. Be passionate, be present, and never make them feel like they're 'too much.'",
    strengths: ["Passion", "Courage in love", "Making partners feel desired", "Emotional depth", "Romantic creativity"],
    growthAreas: ["Intensity can become overwhelming", "May struggle when passion naturally settles", "Prone to jealousy", "Can confuse chemistry with compatibility"],
    idealDynamic: "An intense, passionate connection with deep physical and emotional intimacy. They thrive in relationships that feel electric and meaningful, not just comfortable.",
    bestEnvironment: "Both IRL and online — anywhere they can feel an instant spark. Dance classes, music events, passionate hobby groups. On apps, they'll know within minutes if the chemistry is there.",
    advice: {
      communication: "Your passion is a gift, but learn to modulate your intensity. Some partners need a gentler approach. Practice expressing love at different volumes — a whisper can be as powerful as a shout.",
      compatiblePartner: "An Adventurous Romantic or Devoted Communicator can handle your intensity. Avoid pairing with someone emotionally unavailable — it'll trigger your worst patterns.",
      pitfalls: "Don't mistake intensity for intimacy. Real love isn't always fireworks — sometimes it's a quiet Tuesday. Learn to love the calm moments too.",
      growth: "Develop a relationship with solitude. Your capacity for love deepens when you're also comfortable being alone. The best passion comes from wholeness, not neediness.",
      datingStrategy: "Trust your instincts but verify with time. Feel the spark, then give it 3+ dates before deciding. Your chemistry radar is strong; your compatibility radar needs more data points.",
      conflictHandling: "You escalate fast. Before responding to a trigger, take three breaths. Write down your feelings before voicing them. Your passion in conflict needs a productive channel, not a destructive one.",
    },
  },
  IE: {
    key: "IE",
    name: "The Intuitive Empath",
    emoji: "🌙",
    tagline: "I feel what you can't say.",
    description: "You sense emotional shifts like weather changes. Before your partner even knows they're upset, you're already adjusting, soothing, accommodating. Your emotional intelligence is your superpower — and sometimes your burden. You love deeply because you feel deeply.",
    howTheyLove: "Through emotional attunement, deep presence, and anticipating their partner's inner world. They create an almost psychic bond where their partner feels fundamentally understood.",
    howToLoveThem: "Protect their energy. They absorb emotions like a sponge, so create calm spaces together. Be emotionally honest — they'll sense deception instantly. Appreciate their sensitivity as a strength.",
    strengths: ["Emotional intelligence", "Deep empathy", "Creating emotional intimacy", "Intuitive understanding", "Healing presence"],
    growthAreas: ["Absorbing partner's emotions", "Difficulty with boundaries", "Emotional exhaustion", "Losing themselves in others' needs", "People-pleasing"],
    idealDynamic: "A deep, emotionally intimate relationship where both partners value sensitivity and create a safe emotional haven for each other.",
    bestEnvironment: "IRL connections through meaningful, smaller-group settings. One-on-one introductions from trusted friends. They need authenticity, which is hard to find through mass-market dating apps.",
    advice: {
      communication: "Your intuition is powerful, but verify your readings. Ask: 'I'm sensing you might be feeling X — am I right?' This prevents you from projecting and gives your partner agency.",
      compatiblePartner: "A Devoted Communicator or Quiet Stabilizer. You need someone emotionally mature who won't exploit your empathy. Avoid volatile partners who use your sensitivity as an emotional shock absorber.",
      pitfalls: "You may lose yourself in your partner's emotional landscape. Practice asking: 'Is this my feeling or theirs?' Maintain hobbies, friendships, and spaces that are just yours.",
      growth: "Develop healthy selfishness. Your needs matter as much as anyone else's. Practice saying 'I need...' without apologizing. The best version of your empathy comes from a full cup, not an empty one.",
      datingStrategy: "Protect your energy during dating. Limit first dates to 90 minutes. Journal after each date about how you feel versus how you think they felt. Your pattern is to prioritize their experience over yours.",
      conflictHandling: "You tend to absorb blame to keep the peace. Practice holding your ground: 'I understand your perspective, AND here's mine.' Both can be true simultaneously.",
    },
  },
  II: {
    key: "II",
    name: "The Independent Idealist",
    emoji: "✨",
    tagline: "I'd rather be alone than in the wrong love story.",
    description: "You have a crystal-clear vision of what love should be, and you refuse to settle for less. Your independence isn't fear of intimacy — it's a deep respect for it. You know yourself well enough to know exactly what kind of partnership would truly enrich your life.",
    howTheyLove: "By choosing their partner deliberately and fully. When they commit, it's because they've weighed every option and decided you're worth rearranging their carefully curated life for. That's the highest compliment they can give.",
    howToLoveThem: "Respect their autonomy. Never try to merge completely — they need a partner, not a co-dependent. Support their individual pursuits and maintain your own. Give them space; they'll always come back.",
    strengths: ["Self-awareness", "Clear boundaries", "Authenticity", "Choosing relationships intentionally", "Maintaining identity in partnership"],
    growthAreas: ["Perfectionism in partner selection", "Emotional walls disguised as standards", "Difficulty with compromise", "May self-sabotage when things get too close"],
    idealDynamic: "A partnership of equals where both maintain rich individual lives while choosing each other daily. Think 'two whole people building something together,' not 'two halves completing each other.'",
    bestEnvironment: "Organic IRL connections through shared interests and intellectual pursuits. They don't respond well to traditional dating culture. Professional events, creative communities, and passion-driven groups.",
    advice: {
      communication: "Be transparent about your need for independence early. Frame it as a positive: 'I'm looking for a partner who has their own rich life.' This attracts secure partners and filters out the insecure ones.",
      compatiblePartner: "Another Independent Idealist or a Quiet Stabilizer who won't crowd you. Avoid anyone who interprets your independence as rejection — you need someone secure enough to give you space.",
      pitfalls: "Your standards may be a sophisticated defense mechanism. Ask yourself: 'Am I protecting my values or avoiding vulnerability?' There's a fine line between discernment and self-protection.",
      growth: "Practice letting someone in before they've 'earned' it. Vulnerability first, trust later — that's how real intimacy works. Your walls are beautifully constructed, but love requires a door.",
      datingStrategy: "Be patient with the process but honest about your patterns. If you've been single for a long time by choice, examine whether it's truly choice or comfortable avoidance. Try saying yes to a second date with someone who's 'good but not perfect.'",
      conflictHandling: "You withdraw and process internally, which can feel like abandonment to your partner. Communicate your process: 'I need 30 minutes to think about this, then I'll come back and we'll talk.'",
    },
  },
  SN: {
    key: "SN",
    name: "The Steady Nurturer",
    emoji: "🌿",
    tagline: "I'll build you a home inside my heart.",
    description: "You are the embodiment of gentle, steadfast love. Your care is warm, consistent, and deeply nourishing. You create environments where people bloom — your home, your friendships, your relationships all bear the mark of someone who tends to life with patience and devotion.",
    howTheyLove: "Through consistent care, physical comfort, and creating a beautiful shared life. They nurture through cooking, creating cozy spaces, remembering appointments, and being the emotional bedrock of the relationship.",
    howToLoveThem: "Reciprocate their care. Don't take their nurturing for granted — they need to be nurtured too. Plan things for them sometimes. Ask about their day and genuinely listen. Let them rest.",
    strengths: ["Unconditional care", "Creating warmth", "Patience", "Emotional resilience", "Building beautiful daily life"],
    growthAreas: ["Neglecting own needs", "Enabling unhealthy partners", "Difficulty asking for help", "May use caregiving as a way to feel needed"],
    idealDynamic: "A warm, committed partnership where both partners invest in building a beautiful daily life together. Stable, nurturing, and deeply intertwined.",
    bestEnvironment: "IRL through community, friend groups, and activities that allow your caring nature to shine — volunteering, cooking classes, neighborhood events. You connect through demonstrated character, not profiles.",
    advice: {
      communication: "Practice saying 'I need' as often as you say 'Do you need?' Your needs aren't a burden — they're an invitation for your partner to love you back. Start small: 'I'd love it if you made dinner tonight.'",
      compatiblePartner: "A Thoughtful Giver who reciprocates your attentiveness, or a Devoted Communicator who'll make sure your needs are discussed. Avoid partners who only take and never give.",
      pitfalls: "Watch for the 'martyr pattern': giving so much that you burn out, then feeling resentful. Healthy relationships have balanced reciprocity. You deserve to be the one being cared for sometimes.",
      growth: "Develop interests and identities outside of your role as nurturer. You are more than what you provide. Your worth exists independent of your usefulness to others.",
      datingStrategy: "Don't over-invest early. Your instinct is to care immediately, but let people earn your nurturing over time. Date someone for who they are, not for who they could become with your love.",
      conflictHandling: "You avoid conflict by accommodating, which builds resentment over time. Practice respectful disagreement: 'I love you AND I disagree with you on this.' Both things can coexist.",
    },
  },
  PS: {
    key: "PS",
    name: "The Playful Spark",
    emoji: "⚡",
    tagline: "Life's too short for boring love.",
    description: "You bring levity, joy, and electric energy to every relationship you touch. You believe that laughter is the foundation of love, and you're right — you create bonds through shared humor, playful banter, and an irresistible lightness that makes your partner feel alive.",
    howTheyLove: "Through humor, playfulness, spontaneous affection, and keeping the energy alive. They're the partner who leaves funny notes, initiates dance parties in the kitchen, and turns mundane moments into memories.",
    howToLoveThem: "Play with them. Match their energy, laugh at their jokes, and don't try to make everything serious. They need a partner who can be their best friend and lover simultaneously.",
    strengths: ["Bringing joy", "Defusing tension", "Keeping romance playful", "Emotional resilience through humor", "Making life feel exciting"],
    growthAreas: ["Using humor to avoid serious conversations", "Difficulty with deep emotional processing", "May seem emotionally shallow to deeper types", "Can become restless in stable relationships"],
    idealDynamic: "A fun, energetic partnership full of laughter, inside jokes, and mutual delight. The kind of couple that other people want to be around because their joy is contagious.",
    bestEnvironment: "Both IRL and online — anywhere with energy. Social sports leagues, comedy shows, game nights, lively bars. On dating apps, their wit shines through clever bios and playful first messages.",
    advice: {
      communication: "Your humor is a gift, but don't use it as a shield. Practice having one serious conversation per week with your partner. You'll find that vulnerability actually deepens the fun, not kills it.",
      compatiblePartner: "An Adventurous Romantic or Passionate Pursuer will match your energy. A Steady Nurturer can ground you beautifully. Avoid pairing with someone who finds your playfulness immature.",
      pitfalls: "You may avoid depth by keeping things light. When a partner tries to have a serious conversation, resist the urge to deflect with humor. Some moments need your full, unguarded attention.",
      growth: "Develop emotional depth alongside your lightness. The most magnetic version of you is someone who can make someone laugh AND hold them when they cry. That duality is your ultimate superpower.",
      datingStrategy: "Your charm opens doors easily — the challenge is going deeper. On dates, challenge yourself to ask one genuinely vulnerable question. Your playfulness gets the first date; your depth gets the tenth.",
      conflictHandling: "Don't joke your way through fights. When your partner is hurt, they need to know you take it seriously. Try: 'I hear you, and this matters to me' before you lighten the mood.",
    },
  },
  AP: {
    key: "AP",
    name: "The Analytical Protector",
    emoji: "🛡️",
    tagline: "I love with my mind first, then my heart follows.",
    description: "You approach love like a carefully considered decision — not because you're cold, but because you care too much to be careless. You protect yourself and your partner through foresight, planning, and a deep commitment to building something that lasts.",
    howTheyLove: "Through thoughtful planning, problem-solving, and creating security. They research date ideas, remember important details, and show love by preparing for every scenario that might threaten the relationship.",
    howToLoveThem: "Appreciate their thoughtfulness. Don't mistake their analytical nature for a lack of emotion — they feel deeply but express it through action and planning. Be patient with their pace; their love is worth the wait.",
    strengths: ["Strategic thinking in relationships", "Emotional protection", "Long-term planning", "Loyalty", "Seeing potential problems early"],
    growthAreas: ["Over-analyzing feelings", "Difficulty with spontaneity", "May suppress emotions as 'irrational'", "Can seem guarded or distant", "Controlling tendencies when anxious"],
    idealDynamic: "A thoughtful, intellectually stimulating partnership where both partners value security, planning, and building a shared vision for the future.",
    bestEnvironment: "Online dating can work well — they appreciate the ability to evaluate compatibility before meeting. Professional events, intellectual gatherings, and structured social activities also suit their style.",
    advice: {
      communication: "Lead with feelings sometimes, not just analysis. Practice saying 'I feel...' before 'I think...' Your partner needs to experience your emotions, not just your conclusions about them.",
      compatiblePartner: "An Intuitive Empath can help you access your emotional side. A Quiet Stabilizer shares your love of structure. Avoid partners who see your caution as coldness — you need someone who reads deeper.",
      pitfalls: "You may over-plan for problems that don't exist yet. Not every relationship challenge is a puzzle to solve. Sometimes your partner just wants you to feel with them, not fix for them.",
      growth: "Practice spontaneity in small doses. Say yes to an unplanned date. Express a feeling before you've fully analyzed it. The messiness of love isn't a bug — it's the whole experience.",
      datingStrategy: "You're naturally selective, which is a strength. But don't let analysis paralysis keep you from giving people a real chance. Chemistry data requires in-person time, not just profile evaluation.",
      conflictHandling: "You bring logic to fights, which can invalidate your partner's emotions. Try leading with empathy: 'I understand why you feel that way' before offering your analysis of the situation.",
    },
  },
};

export function calculateResult(answers: Record<number, number>): Archetype {
  const scores: Record<string, number> = {};
  const { quizQuestions } = require("./quizQuestions");

  for (const [questionId, optionIndex] of Object.entries(answers)) {
    const question = quizQuestions.find((q: any) => q.id === Number(questionId));
    if (!question) continue;
    const option = question.options[optionIndex];
    if (!option) continue;
    for (const [key, points] of Object.entries(option.scores)) {
      scores[key] = (scores[key] || 0) + (points as number);
    }
  }

  let maxKey = "DC";
  let maxScore = 0;
  for (const [key, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      maxKey = key;
    }
  }

  return archetypes[maxKey];
}
