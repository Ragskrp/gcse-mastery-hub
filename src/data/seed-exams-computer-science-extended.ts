import { MockExam } from "@/types";

export const SEED_EXAMS_COMPUTER_SCIENCE_EXTENDED: MockExam[] = [
  {
    id: "exam_cs_ai_machine_learning_2024",
    subject: "computer_science",
    title: "Computer Science Extended: AI & Machine Learning",
    year: "2024",
    duration: 90,
    marks: 60,
    difficulty: "higher",
    questionCount: 6,
    questions: [
      { id: "q1", number: "1", question: "Explain differences between supervised and unsupervised learning. Provide examples of each.", marks: 8, type: "short_answer" },
      { id: "q2", number: "2", question: "What is overfitting? Explain how it occurs in machine learning and methods to prevent it.", marks: 10, type: "long_answer" },
      { id: "q3", number: "3", question: "Analyze concept of algorithmic bias. Why does it occur and what are societal consequences?", marks: 10, type: "long_answer" },
      { id: "q4", number: "4", question: "Describe neural networks and how they process information through layers. Why use deep learning?", marks: 10, type: "long_answer" },
      { id: "q5", number: "5", question: "Evaluate ethical considerations in AI deployment across healthcare, criminal justice, and education.", marks: 10, type: "long_answer" },
      { id: "q6", number: "6", question: "What is reinforcement learning? Give practical application example.", marks: 2, type: "short_answer" }
    ]
  },
  {
    id: "exam_cs_cybersecurity_cryptography_2024",
    subject: "computer_science",
    title: "Computer Science Extended: Cybersecurity & Cryptography",
    year: "2024",
    duration: 90,
    marks: 60,
    difficulty: "higher",
    questionCount: 6,
    questions: [
      { id: "q1", number: "1", question: "Classify major cybersecurity threats (malware, phishing, ransomware). How does each compromise systems?", marks: 8, type: "short_answer" },
      { id: "q2", number: "2", question: "Explain social engineering attacks. Why are they effective despite technical security measures?", marks: 10, type: "long_answer" },
      { id: "q3", number: "3", question: "Distinguish between symmetric and asymmetric encryption. When would each be used?", marks: 10, type: "long_answer" },
      { id: "q4", number: "4", question: "Describe public key infrastructure (PKI). How do digital certificates enable secure communication?", marks: 10, type: "long_answer" },
      { id: "q5", number: "5", question: "Analyze organizational cybersecurity defense strategies. What is defense-in-depth approach?", marks: 10, type: "long_answer" },
      { id: "q6", number: "6", question: "What is role of cryptography in blockchain technology?", marks: 2, type: "short_answer" }
    ]
  }
];
