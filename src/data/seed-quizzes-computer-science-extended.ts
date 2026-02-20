import { Quiz } from "@/types";

export const SEED_QUIZZES_COMPUTER_SCIENCE_EXTENDED: Quiz[] = [
  {
    id: "quiz_cs_ai_ml_1",
    title: "Artificial Intelligence & Machine Learning",
    topic_reference: "aqa_computer_science_ai_machine_learning",
    subject: "computer_science",
    exam_board: "aqa",
    questions: [
      { id: "q1", question: "Distinguish supervised from unsupervised machine learning.", type: "short_answer", options: [], correct_answer: "Supervised: trained on labeled data for prediction. Unsupervised: finds patterns in unlabeled data", explanation: "Fundamental ML distinction", marks: 2, difficulty: "foundation" },
      { id: "q2", question: "What is overfitting?", type: "short_answer", options: [], correct_answer: "Model memorizing training data rather than learning generalizable patterns; performs poorly on new data", explanation: "Common practical ML problem", marks: 2, difficulty: "foundation" },
      { id: "q3", question: "Analyze how algorithmic bias in training data causes discriminatory AI systems.", type: "short_answer", options: [], correct_answer: "Historical bias in data (e.g., biased criminal records, underrepresented groups) → model learns and perpetuates discrimination → real-world harms in hiring, lending, criminal justice", explanation: "Tests critical understanding of AI ethics", marks: 4, difficulty: "higher" }
    ],
    time_limit: 20,
    passing_score: 60,
    total_marks: 8,
    difficulty: "mixed"
  },
  {
    id: "quiz_cs_cybersecurity_1",
    title: "Cybersecurity & Cryptography",
    topic_reference: "aqa_computer_science_cybersecurity_cryptography",
    subject: "computer_science",
    exam_board: "aqa",
    questions: [
      { id: "q1", question: "Explain symmetric encryption vs asymmetric encryption.", type: "short_answer", options: [], correct_answer: "Symmetric: same key for encryption/decryption (fast). Asymmetric: different keys (public/private) solves key distribution", explanation: "Fundamental cryptography", marks: 3, difficulty: "foundation" },
      { id: "q2", question: "Why is social engineering often more effective than technical attacks?", type: "short_answer", options: [], correct_answer: "Technical defenses strong but human psychology exploitable; phishing, pretexting bypass defenses through trust manipulation", explanation: "Tests understanding of human vulnerability", marks: 3, difficulty: "higher" }
    ],
    time_limit: 15,
    passing_score: 60,
    total_marks: 6,
    difficulty: "mixed"
  }
];
