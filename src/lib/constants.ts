import { SubjectMeta, Badge, ShopItem } from "@/types";

// ==========================================
// SUBJECT METADATA — All 8 GCSE subjects
// ==========================================
export const SUBJECTS: SubjectMeta[] = [
    {
        id: "maths",
        name: "Mathematics",
        board: "edexcel",
        icon: "📐",
        color: "#14b8a6",
        gradient: "from-teal-500 to-cyan-600",
        description: "Edexcel Mathematics — Number, Algebra, Geometry, Trigonometry, Probability & Statistics (14 Topics)",
        topicCount: 14,
    },
    {
        id: "combined_science",
        name: "Combined Science",
        board: "aqa",
        icon: "🔬",
        color: "#10b981",
        gradient: "from-emerald-500 to-teal-600",
        description: "AQA Trilogy — Biology, Chemistry, Physics, Quantum & Modern (27 Topics)",
        topicCount: 27,
    },
    {
        id: "english_literature",
        name: "English Literature",
        board: "aqa",
        icon: "📚",
        color: "#8b5cf6",
        gradient: "from-violet-500 to-purple-600",
        description: "AQA Literature — Shakespeare, Romantic, Gothic, Poetry & More (7 Topics)",
        topicCount: 7,
    },
    {
        id: "english_language",
        name: "English Language",
        board: "aqa",
        icon: "✍️",
        color: "#ec4899",
        gradient: "from-pink-500 to-rose-600",
        description: "AQA Language — Writing, Speaking, Media & Digital (4 Topics)",
        topicCount: 4,
    },
    {
        id: "history",
        name: "History",
        board: "aqa",
        icon: "🏛️",
        color: "#f59e0b",
        gradient: "from-amber-500 to-orange-600",
        description: "AQA History — Medicine, Empires, Revolutions & Colonialism (5 Topics)",
        topicCount: 5,
    },
    {
        id: "business",
        name: "Business",
        board: "aqa",
        icon: "💼",
        color: "#3b82f6",
        gradient: "from-blue-500 to-indigo-600",
        description: "AQA Business — Management, Finance, Innovation & Startups (7 Topics)",
        topicCount: 7,
    },
    {
        id: "french",
        name: "French",
        board: "aqa",
        icon: "🇫🇷",
        color: "#ef4444",
        gradient: "from-red-500 to-rose-600",
        description: "AQA French — Paris, Culture, Digital Society & Social Issues (8 Topics)",
        topicCount: 8,
    },
    {
        id: "religious_studies",
        name: "Religious Studies",
        board: "aqa",
        icon: "🕊️",
        color: "#6366f1",
        gradient: "from-indigo-500 to-violet-600",
        description: "AQA RS — Ethics, Pluralism & Interfaith Dialogue (6 Topics)",
        topicCount: 6,
    },
    {
        id: "geography",
        name: "Geography",
        board: "aqa",
        icon: "🌍",
        color: "#16a34a",
        gradient: "from-green-500 to-emerald-600",
        description: "AQA Geography — Climate Change, Water Insecurity & Sustainability (5 Topics)",
        topicCount: 5,
    },
    {
        id: "computer_science",
        name: "Computer Science",
        board: "aqa",
        icon: "💻",
        color: "#6366f1",
        gradient: "from-indigo-500 to-purple-600",
        description: "Computer Science — AI, Machine Learning, Cybersecurity & Emerging Tech (10 Topics)",
        topicCount: 10,
    },
];

export function getSubjectBySlug(slug: string): SubjectMeta | undefined {
    return SUBJECTS.find((s) => s.id === slug.replace(/-/g, "_"));
}

export function getSubjectsByBoard(board: "aqa" | "edexcel"): SubjectMeta[] {
    return SUBJECTS.filter((s) => s.board === board);
}

// ==========================================
// BADGES — 25 achievement badges
// ==========================================
export const BADGES: Badge[] = [
    { id: "first_login", name: "Welcome Aboard!", description: "Log in for the first time", icon: "🎉", category: "special", requirement: "Log in once", coins_reward: 25, rarity: "common" },
    { id: "first_topic", name: "Curious Mind", description: "Complete your first topic", icon: "🧠", category: "learning", requirement: "Complete 1 topic", coins_reward: 10, rarity: "common" },
    { id: "five_topics", name: "Knowledge Seeker", description: "Complete 5 topics", icon: "📖", category: "learning", requirement: "Complete 5 topics", coins_reward: 50, rarity: "common" },
    { id: "ten_topics", name: "Bookworm", description: "Complete 10 topics", icon: "📚", category: "learning", requirement: "Complete 10 topics", coins_reward: 100, rarity: "rare" },
    { id: "twenty_five_topics", name: "Scholar", description: "Complete 25 topics", icon: "🎓", category: "learning", requirement: "Complete 25 topics", coins_reward: 250, rarity: "epic" },
    { id: "fifty_topics", name: "Master Scholar", description: "Complete 50 topics", icon: "👨‍🎓", category: "learning", requirement: "Complete 50 topics", coins_reward: 500, rarity: "legendary" },
    { id: "first_quiz", name: "Quiz Taker", description: "Complete your first quiz", icon: "❓", category: "quiz", requirement: "Complete 1 quiz", coins_reward: 10, rarity: "common" },
    { id: "quiz_ace", name: "Quiz Ace", description: "Score 90%+ on a quiz", icon: "⭐", category: "quiz", requirement: "Score 90%+ on any quiz", coins_reward: 50, rarity: "rare" },
    { id: "perfect_score", name: "Perfectionist", description: "Score 100% on a quiz", icon: "💯", category: "quiz", requirement: "Score 100%", coins_reward: 200, rarity: "epic" },
    { id: "ten_quizzes", name: "Quiz Master", description: "Complete 10 quizzes", icon: "🏆", category: "quiz", requirement: "Complete 10 quizzes", coins_reward: 100, rarity: "rare" },
    { id: "streak_3", name: "Getting Started", description: "3-day streak", icon: "🔥", category: "streak", requirement: "3-day streak", coins_reward: 15, rarity: "common" },
    { id: "streak_7", name: "On Fire!", description: "7-day streak", icon: "🔥", category: "streak", requirement: "7-day streak", coins_reward: 50, rarity: "rare" },
    { id: "streak_14", name: "Unstoppable", description: "14-day streak", icon: "💥", category: "streak", requirement: "14-day streak", coins_reward: 150, rarity: "epic" },
    { id: "streak_30", name: "Legendary Streak", description: "30-day streak", icon: "👑", category: "streak", requirement: "30-day streak", coins_reward: 500, rarity: "legendary" },
    { id: "science_starter", name: "Lab Rat", description: "Complete a Science topic", icon: "🧪", category: "learning", requirement: "Complete 1 Science topic", coins_reward: 15, rarity: "common" },
    { id: "maths_starter", name: "Number Cruncher", description: "Complete a Maths topic", icon: "🔢", category: "learning", requirement: "Complete 1 Maths topic", coins_reward: 15, rarity: "common" },
    { id: "english_starter", name: "Wordsmith", description: "Complete an English topic", icon: "✒️", category: "learning", requirement: "Complete 1 English topic", coins_reward: 15, rarity: "common" },
    { id: "history_starter", name: "Time Traveller", description: "Complete a History topic", icon: "⏳", category: "learning", requirement: "Complete 1 History topic", coins_reward: 15, rarity: "common" },
    { id: "business_starter", name: "Entrepreneur", description: "Complete a Business topic", icon: "📊", category: "learning", requirement: "Complete 1 Business topic", coins_reward: 15, rarity: "common" },
    { id: "french_starter", name: "Francophone", description: "Complete a French topic", icon: "🥐", category: "learning", requirement: "Complete 1 French topic", coins_reward: 15, rarity: "common" },
    { id: "re_starter", name: "Deep Thinker", description: "Complete an RE topic", icon: "🕯️", category: "learning", requirement: "Complete 1 RE topic", coins_reward: 15, rarity: "common" },
    { id: "all_subjects", name: "Renaissance Student", description: "Complete a topic in every subject", icon: "🌟", category: "special", requirement: "1 topic in each of 8 subjects", coins_reward: 300, rarity: "epic" },
    { id: "speed_demon", name: "Speed Demon", description: "Complete a quiz in under 2 minutes", icon: "⚡", category: "quiz", requirement: "Under 2 min quiz", coins_reward: 75, rarity: "rare" },
    { id: "night_owl", name: "Night Owl", description: "Study after 10 PM", icon: "🦉", category: "special", requirement: "Login after 10 PM", coins_reward: 10, rarity: "common" },
    { id: "early_bird", name: "Early Bird", description: "Study before 7 AM", icon: "🐦", category: "special", requirement: "Login before 7 AM", coins_reward: 10, rarity: "common" },
];

// ==========================================
// SHOP ITEMS — Themes & Avatars
// ==========================================
export const SHOP_ITEMS: ShopItem[] = [
    // Themes (8)
    { id: "theme_ocean", name: "Ocean Breeze", type: "theme", price: 500, preview: "🌊", description: "Cool blue gradient theme", rarity: "common" },
    { id: "theme_sunset", name: "Sunset Glow", type: "theme", price: 500, preview: "🌅", description: "Warm orange & pink theme", rarity: "common" },
    { id: "theme_forest", name: "Forest Green", type: "theme", price: 750, preview: "🌲", description: "Natural green theme", rarity: "rare" },
    { id: "theme_galaxy", name: "Galaxy", type: "theme", price: 1000, preview: "🌌", description: "Deep space purple theme", rarity: "rare" },
    { id: "theme_neon", name: "Neon Nights", type: "theme", price: 1500, preview: "💜", description: "Cyberpunk neon theme", rarity: "epic" },
    { id: "theme_aurora", name: "Aurora Borealis", type: "theme", price: 1500, preview: "✨", description: "Northern lights gradient", rarity: "epic" },
    { id: "theme_golden", name: "Royal Gold", type: "theme", price: 2000, preview: "👑", description: "Luxurious gold & black", rarity: "legendary" },
    { id: "theme_rainbow", name: "Rainbow", type: "theme", price: 2000, preview: "🌈", description: "Full spectrum of color", rarity: "legendary" },
    // Avatars (12)
    { id: "avatar_cat", name: "Professor Whiskers", type: "avatar", price: 300, preview: "🐱", description: "A scholarly cat", rarity: "common" },
    { id: "avatar_dog", name: "Study Buddy", type: "avatar", price: 300, preview: "🐕", description: "Your loyal study companion", rarity: "common" },
    { id: "avatar_owl", name: "Wise Owl", type: "avatar", price: 500, preview: "🦉", description: "The wisest of scholars", rarity: "common" },
    { id: "avatar_fox", name: "Clever Fox", type: "avatar", price: 500, preview: "🦊", description: "Cunning and quick", rarity: "rare" },
    { id: "avatar_panda", name: "Zen Panda", type: "avatar", price: 750, preview: "🐼", description: "Calm and focused", rarity: "rare" },
    { id: "avatar_lion", name: "Brave Lion", type: "avatar", price: 750, preview: "🦁", description: "Fearless learner", rarity: "rare" },
    { id: "avatar_dragon", name: "Knowledge Dragon", type: "avatar", price: 1000, preview: "🐉", description: "Ancient wisdom", rarity: "epic" },
    { id: "avatar_unicorn", name: "Unicorn Scholar", type: "avatar", price: 1000, preview: "🦄", description: "Magical learning powers", rarity: "epic" },
    { id: "avatar_phoenix", name: "Phoenix Rising", type: "avatar", price: 1500, preview: "🔥", description: "Reborn through knowledge", rarity: "epic" },
    { id: "avatar_astronaut", name: "Space Explorer", type: "avatar", price: 1500, preview: "👨‍🚀", description: "Reaching for the stars", rarity: "epic" },
    { id: "avatar_robot", name: "AI Learner", type: "avatar", price: 2000, preview: "🤖", description: "The ultimate study machine", rarity: "legendary" },
    { id: "avatar_crown", name: "The Crown", type: "avatar", price: 2000, preview: "👑", description: "For the absolute best", rarity: "legendary" },
];
