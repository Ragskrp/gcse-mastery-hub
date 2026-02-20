import { MockExam } from "@/types";

export const SEED_EXAMS_FRENCH_EXTENDED: MockExam[] = [
  {
    id: "exam_french_speaking_extended_2024",
    subject: "french",
    title: "French Extended: Speaking & Listening - Francophonie & Culture",
    year: "2024",
    duration: 45,
    marks: 40,
    difficulty: "both",
    questionCount: 8,
    questions: [
      {
        id: "q1",
        number: "1",
        question:
          "Describe the Francophone world. Where else besides France do people speak French? What challenges do these communities face?",
        marks: 5,
        type: "long_answer"
      },
      {
        id: "q2",
        number: "2",
        question:
          "Tell us about a contemporary French artist, musician or film maker and their impact on global francophone culture.",
        marks: 5,
        type: "long_answer"
      },
      {
        id: "q3",
        number: "3",
        question: "How has social media and digital technology changed how young French people communicate?",
        marks: 5,
        type: "long_answer"
      },
      {
        id: "q4",
        number: "4",
        question:
          "Discuss an environmental or social issue currently facing French or francophone society. What are different perspectives on this issue?",
        marks: 5,
        type: "long_answer"
      },
      {
        id: "q5",
        number: "5",
        question: "[Listening comprehension] Understand and summarize interview about francophone migration. (6 min audio)",
        marks: 5,
        type: "short_answer"
      },
      {
        id: "q6",
        number: "6",
        question:
          "[Listening comprehension] Answer detailed questions about podcast on French environmental policy. (5 min audio)",
        marks: 5,
        type: "short_answer"
      },
      {
        id: "q7",
        number: "7",
        question: "[Speaking] Spontaneous conversation about digital technology's role in society for 2 minutes.",
        marks: 3,
        type: "long_answer"
      },
      {
        id: "q8",
        number: "8",
        question: "[Speaking] Prepared presentation on francophone culture or social issue, then answer examiner questions for 3 minutes.",
        marks: 2,
        type: "long_answer"
      }
    ]
  },

  {
    id: "exam_french_writing_extended_2024",
    subject: "french",
    title: "French Extended: Writing - Digital Age & Social Issues",
    year: "2024",
    duration: 60,
    marks: 50,
    difficulty: "both",
    questionCount: 5,
    questions: [
      {
        id: "q1",
        number: "1",
        question:
          "Write a letter to your local government expressing concerns about an environmental issue. Suggest solutions. (200 words)",
        marks: 12,
        type: "long_answer"
      },
      {
        id: "q2",
        number: "2",
        question:
          "Essay: 'Digital technology has improved life for francophone youth.' To what extent do you agree? (250 words)",
        marks: 15,
        type: "long_answer"
      },
      {
        id: "q3",
        number: "3",
        question:
          "Write an article for a French magazine about contemporary francophone culture and its global influence. (200 words)",
        marks: 12,
        type: "long_answer"
      },
      {
        id: "q4",
        number: "4",
        question:
          "Respond to online post about immigration and integration in France. Present balanced perspective. (180 words)",
        marks: 8,
        type: "long_answer"
      },
      {
        id: "q5",
        number: "5",
        question:
          "Grammar & vocabulary test. Correct 10 sentences containing common errors; conjugate verbs; use correct register. (50 marks total)",
        marks: 3,
        type: "short_answer"
      }
    ]
  }
];
