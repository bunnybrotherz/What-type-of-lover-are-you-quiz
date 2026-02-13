export interface QuizOption {
  text: string;
  scores: Record<string, number>; // archetype key -> points
}

export interface QuizQuestion {
  id: number;
  category: string;
  categoryLabel: string;
  question: string;
  options: QuizOption[];
}

// Scoring keys map to archetypes:
// DC = Devoted Communicator, AR = Adventurous Romantic, TG = Thoughtful Giver
// QS = Quiet Stabilizer, PP = Passionate Pursuer, IE = Intuitive Empath
// II = Independent Idealist, SN = Steady Nurturer, PS = Playful Spark, AP = Analytical Protector

export const quizQuestions: QuizQuestion[] = [
  // LOVE LANGUAGE
  {
    id: 1,
    category: "love-language",
    categoryLabel: "Love Language",
    question: "It's your partner's birthday. What feels most natural to you?",
    options: [
      { text: "Writing them a heartfelt letter telling them exactly what they mean to you", scores: { DC: 3, IE: 2 } },
      { text: "Planning a surprise weekend trip to somewhere they've always wanted to go", scores: { AR: 3, PS: 2 } },
      { text: "Spending weeks finding the perfect gift that shows you truly know them", scores: { TG: 3, AP: 2 } },
      { text: "Cooking their favorite meal and spending the whole evening together at home", scores: { QS: 3, SN: 2 } },
    ],
  },
  {
    id: 2,
    category: "love-language",
    categoryLabel: "Love Language",
    question: "You're having a terrible day. What would make you feel most loved?",
    options: [
      { text: "My partner saying 'I'm here for you, tell me everything'", scores: { DC: 3, IE: 1 } },
      { text: "Being pulled into a long, tight hug without any words", scores: { PP: 3, SN: 1 } },
      { text: "Coming home to find they've handled all your responsibilities for the day", scores: { TG: 2, QS: 3 } },
      { text: "Receiving a spontaneous 'thinking of you' text with an inside joke", scores: { PS: 3, AR: 1 } },
    ],
  },
  // EXPRESSING LOVE
  {
    id: 3,
    category: "expression",
    categoryLabel: "How You Express Love",
    question: "Your partner is stressed about work. What's your instinct?",
    options: [
      { text: "Sit down and have a deep conversation about what's really bothering them", scores: { DC: 3, IE: 2 } },
      { text: "Suggest you both take a mental health day and do something fun", scores: { AR: 3, PS: 2 } },
      { text: "Quietly take over household tasks so they can focus", scores: { TG: 3, SN: 2 } },
      { text: "Research solutions and present them with a clear action plan", scores: { AP: 3, QS: 1 } },
    ],
  },
  {
    id: 4,
    category: "expression",
    categoryLabel: "How You Express Love",
    question: "How do people usually know you care about them?",
    options: [
      { text: "I tell them — frequently, honestly, and passionately", scores: { DC: 2, PP: 3 } },
      { text: "I remember the small things and act on them without being asked", scores: { TG: 3, IE: 2 } },
      { text: "I make them laugh and keep things light when they need it", scores: { PS: 3, AR: 1 } },
      { text: "I show up consistently, even when it's not exciting or glamorous", scores: { QS: 3, SN: 2 } },
    ],
  },
  // RECEIVING LOVE
  {
    id: 5,
    category: "receiving",
    categoryLabel: "Receiving Love",
    question: "Which relationship moment would replay in your mind for years?",
    options: [
      { text: "A partner who looked you in the eyes and said something so real it shook you", scores: { DC: 3, PP: 2 } },
      { text: "A spontaneous 2 AM adventure that became your favorite memory together", scores: { AR: 3, PS: 2 } },
      { text: "Realizing they quietly fixed something in your life you never even mentioned", scores: { TG: 2, IE: 3 } },
      { text: "A cozy Sunday where you both did nothing but exist peacefully together", scores: { QS: 3, SN: 2 } },
    ],
  },
  {
    id: 6,
    category: "receiving",
    categoryLabel: "Receiving Love",
    question: "What's the biggest relationship red flag for you?",
    options: [
      { text: "A partner who can't articulate their feelings or avoids deep conversations", scores: { DC: 3, AP: 1 } },
      { text: "Someone who's predictable to the point of boring — no spark, no surprises", scores: { AR: 2, PP: 3 } },
      { text: "A person who only thinks about themselves and never notices your needs", scores: { TG: 2, IE: 3 } },
      { text: "Someone who's unreliable or inconsistent — hot and cold behavior", scores: { QS: 3, SN: 2 } },
    ],
  },
  // PERSONALITY
  {
    id: 7,
    category: "personality",
    categoryLabel: "Personality",
    question: "At a party, you're most likely to be...",
    options: [
      { text: "In a deep one-on-one conversation in the corner", scores: { DC: 2, IE: 3 } },
      { text: "The one suggesting the group go on an impromptu adventure", scores: { AR: 3, PS: 2 } },
      { text: "Quietly observing, making sure everyone has what they need", scores: { TG: 2, QS: 2, SN: 2 } },
      { text: "Debating ideas passionately with whoever will engage", scores: { PP: 2, AP: 3 } },
    ],
  },
  {
    id: 8,
    category: "personality",
    categoryLabel: "Personality",
    question: "When you daydream about love, what does it look like?",
    options: [
      { text: "A relationship where you can share your deepest, weirdest thoughts without judgment", scores: { II: 3, IE: 2 } },
      { text: "Traveling the world together, collecting stories and inside jokes", scores: { AR: 3, PS: 1 } },
      { text: "Building a beautiful life together — a home, routines, growing old side by side", scores: { SN: 3, QS: 2 } },
      { text: "An intense, electric connection where you challenge and inspire each other", scores: { PP: 3, AP: 1 } },
    ],
  },
  // ATTACHMENT
  {
    id: 9,
    category: "attachment",
    categoryLabel: "Attachment Style",
    question: "Your partner hasn't texted you back in 6 hours. Your honest first thought?",
    options: [
      { text: "They're probably busy. I'll text again later if I want to chat.", scores: { QS: 2, II: 3 } },
      { text: "I wonder if I said something wrong... let me re-read my last message", scores: { DC: 1, IE: 2, PP: 3 } },
      { text: "I barely noticed — I've been doing my own thing", scores: { II: 3, AP: 2 } },
      { text: "A little uneasy, but I trust them. I'll bring it up casually later.", scores: { SN: 3, TG: 1 } },
    ],
  },
  {
    id: 10,
    category: "attachment",
    categoryLabel: "Attachment Style",
    question: "How do you handle the early stages of a new relationship?",
    options: [
      { text: "I dive in headfirst — if I feel it, I want to explore it fully", scores: { PP: 3, AR: 2 } },
      { text: "I move carefully, watching for consistency before I let my guard down", scores: { AP: 3, QS: 2 } },
      { text: "I let things unfold naturally while staying true to myself", scores: { II: 3, IE: 1 } },
      { text: "I'm warm but cautious — I want to build something real, not rushed", scores: { SN: 3, DC: 1 } },
    ],
  },
  // DATING HISTORY
  {
    id: 11,
    category: "history",
    categoryLabel: "Relationship Experience",
    question: "Looking back at your past relationships, which pattern rings most true?",
    options: [
      { text: "I've been the one who always gives more than I receive", scores: { TG: 3, SN: 2 } },
      { text: "My relationships tend to burn bright and fast", scores: { PP: 3, AR: 2 } },
      { text: "I've often been told I'm hard to read or emotionally distant", scores: { II: 2, AP: 3 } },
      { text: "I attract partners who need emotional support, and I'm good at providing it", scores: { IE: 3, DC: 2 } },
    ],
  },
  {
    id: 12,
    category: "history",
    categoryLabel: "Relationship Experience",
    question: "What's usually the reason your relationships end?",
    options: [
      { text: "We grew apart — we wanted different things", scores: { II: 3, AR: 1 } },
      { text: "Communication broke down and resentment built up", scores: { DC: 2, AP: 2, TG: 2 } },
      { text: "It got too comfortable or routine — the passion faded", scores: { PP: 3, PS: 2 } },
      { text: "I realized I was losing myself trying to make it work", scores: { IE: 2, SN: 2, TG: 2 } },
    ],
  },
  // CONFLICT
  {
    id: 13,
    category: "conflict",
    categoryLabel: "Conflict Style",
    question: "You and your partner disagree on something important. Your move?",
    options: [
      { text: "I want to talk it through right now until we reach understanding", scores: { DC: 3, PP: 2 } },
      { text: "I need space to process before I can have a productive conversation", scores: { II: 3, AP: 2 } },
      { text: "I try to see their perspective first, even if it means setting my feelings aside", scores: { IE: 3, TG: 2 } },
      { text: "I look for a practical compromise that works for both of us", scores: { QS: 2, SN: 3 } },
    ],
  },
  {
    id: 14,
    category: "conflict",
    categoryLabel: "Conflict Style",
    question: "After a big fight, what helps you reconnect?",
    options: [
      { text: "A vulnerable, honest conversation about what really hurt", scores: { DC: 3, IE: 2 } },
      { text: "Physical closeness — a hug, holding hands, just being near each other", scores: { PP: 2, SN: 3 } },
      { text: "Doing something fun together to break the tension and reset", scores: { PS: 3, AR: 2 } },
      { text: "Giving it time — I need to see consistent effort before I fully trust again", scores: { AP: 3, QS: 2 } },
    ],
  },
];

export const categoryOrder = [
  "love-language",
  "expression",
  "receiving",
  "personality",
  "attachment",
  "history",
  "conflict",
];

export const categoryEmojis: Record<string, string> = {
  "love-language": "💕",
  "expression": "🌸",
  "receiving": "🎀",
  "personality": "🦋",
  "attachment": "🔗",
  "history": "📖",
  "conflict": "🌊",
};
