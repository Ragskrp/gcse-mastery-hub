import { Quiz } from "@/types";

export const SEED_QUIZZES_RELIGIOUS_STUDIES_EXTENDED: Quiz[] = [
  {
    id: "quiz_rs_applied_ethics_1",
    title: "Applied Ethics: Technology, Environment & Bioethics",
    topic_reference: "aqa_religious_studies_applied_ethics",
    subject: "religious_studies",
    exam_board: "aqa",
    questions: [
      {
        id: "q1",
        question: "What is environmental stewardship in religious ethics?",
        type: "short_answer",
        options: [],
        correct_answer: "Humans as caretakers of creation with responsibility to care for and preserve the environment.",
        explanation: "Core concept across faith traditions; foundational to religious environmental ethics.",
        marks: 2,
        difficulty: "foundation"
      },
      {
        id: "q2",
        question: "Name two faith traditions' positions on genetic modification to prevent disease.",
        type: "short_answer",
        options: [],
        correct_answer:
          "Christianity (Catholic generally opposed, Protestant varied), Judaism (support through pikuach nefesh), Islam (cautious support if removing illness)",
        explanation: "Tests knowledge of different theological approaches to bioethical modern dilemmas.",
        marks: 3,
        difficulty: "foundation"
      },
      {
        id: "q3",
        question:
          "What ethical concerns does corporate data mining raise from the perspective of human dignity?",
        type: "short_answer",
        options: [],
        correct_answer:
          "Violation of privacy, reduction of persons to data/profit, lack of meaningful consent and control, power imbalances favoring corporations",
        explanation: "Shows understanding of how religious human dignity concepts apply to tech ethics.",
        marks: 3,
        difficulty: "higher"
      },
      {
        id: "q4",
        question:
          "Evaluate: Can religious ethics adequately address emerging technological challenges?",
        type: "short_answer",
        options: [],
        correct_answer:
          "Strengths: offer frameworks (human dignity, justice, stewardship); challenges: technology outpaces theology, inherited teachings pre-date tech. Need interdisciplinary engagement. Partial answer: valuable but not sufficient alone.",
        explanation:
          "Tests critical evaluation balancing respect for religious contributions with honest limitations.",
        marks: 4,
        difficulty: "higher"
      }
    ],
    time_limit: 20,
    passing_score: 60,
    total_marks: 12,
    difficulty: "mixed"
  },

  {
    id: "quiz_rs_interfaith_1",
    title: "Interfaith Dialogue & Religious Pluralism",
    topic_reference: "aqa_religious_studies_interfaith_dialogue",
    subject: "religious_studies",
    exam_board: "aqa",
    questions: [
      {
        id: "q1",
        question:
          "What is the difference between religious exclusivism and pluralism?",
        type: "short_answer",
        options: [],
        correct_answer:
          "Exclusivism: only one tradition has truth. Pluralism: multiple traditions equally valid paths to truth.",
        explanation: "Fundamental theological positions shaping interfaith relations.",
        marks: 2,
        difficulty: "foundation"
      },
      {
        id: "q2",
        question:
          "Give two examples of interfaith cooperation or dialogue initiatives.",
        type: "short_answer",
        options: [],
        correct_answer:
          "Parliament of World's Religions, local interfaith councils, joint service projects, educational programs, shared celebrations",
        explanation: "Tests knowledge of practical interfaith efforts.",
        marks: 2,
        difficulty: "foundation"
      },
      {
        id: "q3",
        question: "Name three challenges to religious coexistence in multicultural societies.",
        type: "short_answer",
        options: [],
        correct_answer:
          "Competition for resources, historical grievances, conversion conflicts, education tensions, identity politics, extremism",
        explanation: "Demonstrates understanding of real-world obstacles to interfaith harmony.",
        marks: 3,
        difficulty: "higher"
      },
      {
        id: "q4",
        question:
          "Analyze: Is genuine interfaith dialogue possible between traditions with contradictory truth claims?",
        type: "short_answer",
        options: [],
        correct_answer:
          "Yes, but tensions exist. Dialogue doesn't require belief agreement, just mutual respect. Shared values provide cooperation foundation. Historical examples show cooperation despite doctrinal disagreement. Challenge: some approaches inherently evangelistic.",
        explanation:
          "Tests critical thinking about complex theological and practical tensions.",
        marks: 4,
        difficulty: "higher"
      }
    ],
    time_limit: 20,
    passing_score: 60,
    total_marks: 11,
    difficulty: "mixed"
  }
];
