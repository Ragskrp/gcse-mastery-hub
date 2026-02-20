import { MockExam } from "@/types";

export const SEED_EXAMS_RELIGIOUS_STUDIES_EXTENDED: MockExam[] = [
  {
    id: "exam_rs_ethics_2024",
    subject: "religious_studies",
    title: "Religious Studies Extended: Applied Ethics",
    year: "2024",
    duration: 90,
    difficulty: "both",
    marks: 60,
    questionCount: 6,
    questions: [
      {
        id: "q1",
        number: "1",
        question:
          "Explain environmental stewardship from at least two religious perspectives. What obligations does this create?",
        marks: 10,
        type: "long_answer"
      },
      {
        id: "q2",
        number: "2",
        question:
          "Analyze different religious traditions' responses to genetic modification. For what purposes is it ethically justified?",
        marks: 12,
        type: "long_answer"
      },
      {
        id: "q3",
        number: "3",
        question:
          "Discuss to what extent religious conceptions of human dignity address ethical concerns raised by AI and data mining.",
        marks: 12,
        type: "long_answer"
      },
      {
        id: "q4",
        number: "4",
        question:
          "Evaluate: Can euthanasia ever be ethically justified from religious perspectives? Consider perspectives from multiple traditions.",
        marks: 12,
        type: "long_answer"
      },
      {
        id: "q5",
        number: "5",
        question:
          "'Religious ethics provides essential frameworks for technology ethics that secular approaches miss.' Evaluate.",
        marks: 10,
        type: "long_answer"
      },
      {
        id: "q6",
        number: "6",
        question:
          "Explain what is meant by 'ethics lag' and discuss how religious communities can respond to rapid technological change.",
        marks: 4,
        type: "short_answer"
      }
    ]
  },

  {
    id: "exam_rs_interfaith_2024",
    subject: "religious_studies",
    title: "Religious Studies Extended: Interfaith & Pluralism",
    year: "2024",
    duration: 90,
    difficulty: "both",
    marks: 60,
    questionCount: 5,
    questions: [
      {
        id: "q1",
        number: "1",
        question:
          "Explain the theological positions of exclusivism, inclusivism and pluralism. Which position most enables interfaith dialogue?",
        marks: 12,
        type: "long_answer"
      },
      {
        id: "q2",
        number: "2",
        question:
          "Analyze at least two interfaith cooperation initiatives. Evaluate their effectiveness in reducing religious tensions.",
        marks: 12,
        type: "long_answer"
      },
      {
        id: "q3",
        number: "3",
        question:
          "Discuss major challenges to religious coexistence in multicultural democracies. How can these challenges be addressed?",
        marks: 12,
        type: "long_answer"
      },
      {
        id: "q4",
        number: "4",
        question:
          "How do factors like historical grievances, nationalism and identity politics complicate interfaith relations? Provide specific examples.",
        marks: 14,
        type: "long_answer"
      },
      {
        id: "q5",
        number: "5",
        question:
          "Assess tensions between teaching about religions in secular public schools and religious traditions' desires to transmit faith.",
        marks: 10,
        type: "long_answer"
      }
    ]
  }
];
