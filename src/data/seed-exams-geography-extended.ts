import { MockExam } from "@/types";

export const SEED_EXAMS_GEOGRAPHY_EXTENDED: MockExam[] = [
  {
    id: "exam_geography_climate_water_2024",
    subject: "geography",
    title: "Geography Extended: Climate & Water Challenges",
    year: "2024",
    duration: 90,
    marks: 60,
    difficulty: "both",
    questionCount: 6,
    questions: [
      { id: "q1", number: "1", question: "Explain causes of anthropogenic climate change and major greenhouse gases involved.", marks: 8, type: "short_answer" },
      { id: "q2", number: "2", question: "Analyze climate impacts on different regions. Why are some more vulnerable than others?", marks: 10, type: "long_answer" },
      { id: "q3", number: "3", question: "Evaluate effectiveness of renewable energy transition as climate mitigation strategy.", marks: 8, type: "long_answer" },
      { id: "q4", number: "4", question: "Discuss causes and impacts of global water scarcity. Which regions most affected?", marks: 10, type: "long_answer" },
      { id: "q5", number: "5", question: "Analyze a specific transboundary water dispute (e.g., Nile). What triggers conflicts?", marks: 10, type: "long_answer" },
      { id: "q6", number: "6", question: "Evaluate sustainability of current global water management approaches.", marks: 4, type: "short_answer" }
    ]
  }
];
