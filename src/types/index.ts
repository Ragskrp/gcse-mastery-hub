// ==========================================
// GCSE MASTERY HUB — Core Type Definitions
// ==========================================

// ---- Exam Boards & Subjects ----
export type ExamBoard = "aqa" | "edexcel";

export type Subject =
  | "combined_science"
  | "english_literature"
  | "english_language"
  | "history"
  | "business"
  | "french"
  | "religious_studies"
  | "maths"
  | "geography"
  | "computer_science";

export type TierLevel = "foundation" | "higher" | "both";

export interface SubjectMeta {
  id: Subject;
  name: string;
  board: ExamBoard;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  topicCount: number;
}

// ---- 7-Section Topic Structure ----
export interface KeyConcept {
  term: string;
  definition: string;
  importance: string;
}

export interface Section1KeyConcepts {
  overview: string;
  key_terms: KeyConcept[];
  learning_objectives: string[];
}

export interface DetailedExplanation {
  heading: string;
  content: string;
  diagram_description?: string;
  key_points: string[];
}

export interface WorkedExample {
  question: string;
  step_by_step: string[];
  answer: string;
  common_mistakes?: string[];
}

export interface PracticeQuestion {
  id: string;
  question: string;
  type: "mcq" | "short_answer" | "calculation" | "essay" | "drag_drop";
  options?: string[];
  correct_answer: string;
  explanation: string;
  marks: number;
  difficulty: "foundation" | "higher";
}

export interface Section4PracticeQuestions {
  foundation: PracticeQuestion[];
  higher: PracticeQuestion[];
}

export interface ExamGuidance {
  command_words: { word: string; meaning: string }[];
  exam_tips: string[];
  common_mistakes: string[];
  mark_scheme_notes: string[];
  time_allocation: string;
}

export interface AdditionalResource {
  title: string;
  type: "video" | "article" | "worksheet" | "interactive";
  url?: string;
  description: string;
}

export interface Section6AdditionalResources {
  resources: AdditionalResource[];
  further_reading: string[];
  revision_checklist: string[];
}

export interface AssessmentAnswer {
  question_id: string;
  model_answer: string;
  mark_breakdown: string[];
  examiner_tip: string;
}

export interface Section7AssessmentAnswers {
  answers: AssessmentAnswer[];
  grade_boundaries: {
    grade_9: number;
    grade_7: number;
    grade_5: number;
    grade_4: number;
  };
}

// ---- Topic (Full Document) ----
export interface Topic {
  id: string;
  exam_board: ExamBoard;
  subject: Subject;
  topic_title: string;
  topic_number: string;
  tier_level: TierLevel;
  section_1_key_concepts: Section1KeyConcepts;
  section_2_detailed_explanations: DetailedExplanation[];
  section_3_worked_examples: WorkedExample[];
  section_4_practice_questions: Section4PracticeQuestions;
  section_5_exam_guidance: ExamGuidance;
  section_6_additional_resources: Section6AdditionalResources;
  section_7_assessment_answers: Section7AssessmentAnswers;
  view_count: number;
  avg_score: number;
  completion_rate: number;
  created_at: string;
  updated_at: string;
}

// ---- Quiz ----
export interface QuizQuestion {
  id: string;
  question: string;
  type: "mcq" | "short_answer" | "calculation" | "drag_drop";
  options?: string[];
  correct_answer: string;
  explanation: string;
  marks: number;
  difficulty: "foundation" | "higher";
  topic_reference: string;
}

export interface Quiz {
  id: string;
  title: string;
  topic_reference: string;
  subject: Subject;
  exam_board: ExamBoard;
  questions: QuizQuestion[];
  time_limit: number; // minutes
  passing_score: number; // percentage
  total_marks: number;
  difficulty: "foundation" | "higher" | "mixed";
}

export interface QuizAttempt {
  quiz_id: string;
  user_id: string;
  answers: { question_id: string; user_answer: string; correct: boolean }[];
  score: number;
  percentage: number;
  time_taken: number;
  completed_at: string;
}

// ---- User & Gamification ----
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "learning" | "streak" | "quiz" | "social" | "special";
  requirement: string;
  coins_reward: number;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export interface ShopItem {
  id: string;
  name: string;
  type: "theme" | "avatar";
  price: number;
  preview: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  decorations?: string[]; // Array of decoration IDs
  coins: number;
  xp: number;
  level: number;
  theme: string;
  joined_at: string;
}

export interface UserProgress {
  [topicId: string]: {
    completed: boolean;
    score: number;
    timeSpent: number;
    lastAccessed: string;
    sectionsCompleted: number[];
  };
}

export interface UserStreaks {
  currentStreak: number;
  bestStreak: number;
  lastActiveDate: string;
  streakMultiplier: number;
}

export interface UserData {
  uid: string;
  profile: UserProfile;
  progress: UserProgress;
  streaks: UserStreaks;
  badges: string[];
  purchased_items: string[];
  quiz_history: QuizAttempt[];
}

// ---- Leaderboard ----
export interface LeaderboardEntry {
  userId: string;
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  streak: number;
}

// ---- Admin ----
export interface ContentImportResult {
  success: boolean;
  topics_imported: number;
  quizzes_imported: number;
  errors: string[];
  timestamp: string;
}

// ---- Navigation ----
export interface SubjectRoute {
  board: ExamBoard;
  subject: Subject;
  slug: string;
  name: string;
}

// ---- Exams ----
export interface MockExamQuestion {
  id: string;
  number: string; // e.g. "1a"
  question: string;
  marks: number;
  type: "short_answer" | "long_answer" | "multiple_choice";
  options?: string[]; // For multiple choice
}

export interface MockExam {
  id: string;
  subject: Subject;
  title: string;
  year: string;
  duration: number; // minutes
  marks: number;
  difficulty: TierLevel;
  questionCount: number;
  questions: MockExamQuestion[];
}
