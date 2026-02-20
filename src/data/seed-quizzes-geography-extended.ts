import { Quiz } from "@/types";

export const SEED_QUIZZES_GEOGRAPHY_EXTENDED: Quiz[] = [
  {
    id: "quiz_geography_climate_1",
    title: "Climate Change: Causes & Impacts",
    topic_reference: "aqa_geography_climate_change_impacts",
    subject: "geography",
    exam_board: "aqa",
    questions: [
      { id: "q1", question: "What are the three major greenhouse gases?", type: "short_answer", options: [], correct_answer: "CO2, methane, N2O (nitrous oxide)", explanation: "Fundamental climate science knowledge", marks: 2, difficulty: "foundation" },
      { id: "q2", question: "Name one climate tipping point and its consequences.", type: "short_answer", options: [], correct_answer: "Arctic sea ice collapse, Amazon dieback, permafrost thaw - each accelerates warming", explanation: "Shows understanding of catastrophic climate risks", marks: 3, difficulty: "foundation" },
      { id: "q3", question: "Evaluate how climate impacts differ by region and income level.", type: "short_answer", options: [], correct_answer: "Vulnerable regions (island nations, Sub-Saharan Africa) face existential threats; wealthy nations can adapt. Injustice: those least responsible suffer most.", explanation: "Tests critical analysis of climate justice", marks: 4, difficulty: "higher" }
    ],
    time_limit: 15,
    passing_score: 60,
    total_marks: 9,
    difficulty: "mixed"
  },
  {
    id: "quiz_geography_water_1",
    title: "Water Insecurity & Global Challenges",
    topic_reference: "aqa_geography_water_insecurity",
    subject: "geography",
    exam_board: "aqa",
    questions: [
      { id: "q1", question: "What is water stress?", type: "short_answer", options: [], correct_answer: "Demand exceeds reliable supply; regions cannot meet human and ecosystem needs", explanation: "Key water security concept", marks: 2, difficulty: "foundation" },
      { id: "q2", question: "Explain the Nile transboundary water dispute.", type: "short_answer", options: [], correct_answer: "Egypt (downstream) vs Ethiopia (upstream); dam threatens Egyptian water; reflects power imbalances and lack of international enforcement", explanation: "Tests knowledge of specific water conflict", marks: 3, difficulty: "higher" }
    ],
    time_limit: 15,
    passing_score: 60,
    total_marks: 5,
    difficulty: "mixed"
  }
];
