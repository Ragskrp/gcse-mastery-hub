import { Topic } from "@/types";

/**
 * MATHS EXTENDED SET 3
 * Real-world focused topics: Bearings, Finance, Data Analysis
 */

export const SEED_MATHS_EXTENDED_3: Topic[] = [
  {
    id: "edexcel_maths_bearings_navigation",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Bearings and Navigation",
    topic_number: "G7",
    tier_level: "foundation",
    section_1_key_concepts: {
      overview: "Bearings describe direction using angles from North (000-360). Used in navigation, aviation, surveying.",
      key_terms: [
        { term: "Bearing", definition: "Direction measured clockwise from North", importance: "Navigation standard" },
        { term: "Three-Figure Bearing", definition: "Always 3 digits (e.g., 052, 180, 315)", importance: "Standard notation" },
        { term: "Back Bearing", definition: "Opposite direction add or subtract 180", importance: "Return journey" }
      ],
      learning_objectives: [
        "Read and understand three-figure bearings",
        "Solve bearing problems with diagrams",
        "Use bearings in navigation calculations"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Three-Figure Bearings",
        content: "Measured clockwise from North. North=000, East=090, South=180, West=270. Always write 3 digits.",
        diagram_description: "Compass rose showing cardinal directions and angles",
        key_points: ["Clockwise from North", "Always 3 digits", "North=000 or 360"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Back bearing of 050 is?",
        step_by_step: [
          "Add 180 to bearing",
          "050 + 180 = 230"
        ],
        answer: "230"
      }
    ],
    section_4_practice_questions: {
      foundation: [
        { id: "b1f", question: "South bearing in three figures?", type: "short_answer", correct_answer: "180", explanation: "South is opposite North which is 000, so 180 degrees", marks: 1, difficulty: "foundation" }
      ],
      higher: [
        { id: "b1h", question: "Bearing from A to B is 045. Bearing from B to A is?", type: "short_answer", correct_answer: "225", explanation: "Add 180 to find back bearing: 045 + 180 = 225", marks: 1, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [{ word: "Find bearing", meaning: "Give answer in TFB format" }],
      exam_tips: ["Always draw North lines", "Use TFB format"],
      common_mistakes: ["Not using 3-figure format"],
      mark_scheme_notes: ["M1 diagram, A1 accuracy"],
      time_allocation: "1 min per mark"
    },
    section_6_additional_resources: {
      resources: [{ title: "Bearing Calculator", type: "interactive", description: "Calculate bearings" }],
      further_reading: ["Bearing concept in navigation"],
      revision_checklist: ["Three-figure bearing format clear"]
    },
    section_7_assessment_answers: {
      answers: [{ question_id: "b1f", model_answer: "180", mark_breakdown: ["1 mark TFB"] }],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  {
    id: "edexcel_maths_financial_maths",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Financial Mathematics: Interest and Investments",
    topic_number: "N2",
    tier_level: "both",
    section_1_key_concepts: {
      overview: "Financial maths models real money scenarios. Simple and compound interest, loans, investments.",
      key_terms: [
        { term: "Simple Interest", definition: "Interest based on principal only", importance: "Linear growth" },
        { term: "Compound Interest", definition: "Interest earned on interest each period", importance: "Exponential growth" },
        { term: "Principal", definition: "Initial amount invested", importance: "Starting point" },
        { term: "APR", definition: "Annual Percentage Rate", importance: "Standardized measure" }
      ],
      learning_objectives: [
        "Calculate simple and compound interest",
        "Solve real problems with mortgages and savings",
        "Compare investment options"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Simple Versus Compound",
        content: "Simple: fixed amount each year. Compound: previous interest earns interest. A=P(1+r)^n for compound.",
        diagram_description: "Graph comparing linear (simple) vs exponential (compound) growth",
        key_points: ["Simple: arithmet ically increasing", "Compound: exponentially increasing"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "5000 at 4 percent compound for 5 years",
        step_by_step: [
          "A = P(1+r)^n",
          "A = 5000 x 1.04^5",
          "A = 6083.26"
        ],
        answer: "6083.26"
      }
    ],
    section_4_practice_questions: {
      foundation: [
        { id: "f1f", question: "200 at 3 percent simple for 2 years. Interest earned?", type: "short_answer", correct_answer: "12", explanation: "Simple I = PRT/100 = 200 x 3 x 2 / 100 = 12", marks: 2, difficulty: "foundation" }
      ],
      higher: [
        { id: "f1h", question: "Find rate if 500 becomes 595.23 in 3 years compound", type: "calculation", correct_answer: "5.5%", explanation: "595.23 = 500(1+r)^3, solve for r to get 5.5%", marks: 3, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [{ word: "Calculate", meaning: "Use formula to find answer" }],
      exam_tips: ["Identify simple or compound", "Convert percent to decimal"],
      common_mistakes: ["Mixing formulas", "Wrong time units"],
      mark_scheme_notes: ["M1 formula, A1 accuracy"],
      time_allocation: "2 min per mark"
    },
    section_6_additional_resources: {
      resources: [{ title: "Interest Calculator", type: "interactive", description: "Compare options" }],
      further_reading: ["Financial Mathematics textbooks"],
      revision_checklist: ["Formulas clear", "Conversions automatic"]
    },
    section_7_assessment_answers: {
      answers: [{ question_id: "f1f", model_answer: "12", mark_breakdown: ["1 mark formula", "1 mark calculation"] }],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  {
    id: "edexcel_maths_data_analysis",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Data Analysis and Interpretation",
    topic_number: "S2",
    tier_level: "both",
    section_1_key_concepts: {
      overview: "Collecting, organizing, and interpreting data to answer real questions.",
      key_terms: [
        { term: "Population", definition: "Entire group being studied", importance: "Full data set" },
        { term: "Sample", definition: "Subset used for study", importance: "Cost and time efficient" },
        { term: "Correlation", definition: "Relationship between variables", importance: "Cause vs effect" },
        { term: "Bias", definition: "Systematic error affecting results", importance: "Threatenedvalidity" }
      ],
      learning_objectives: [
        "Collect data without bias",
        "Organize and represent data",
        "Calculate statistics correctly",
        "Interpret and draw conclusions"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Sampling and Bias",
        content: "Random samples avoid bias. Non-random methods favor certain outcomes. Sample size matters.",
        diagram_description: "Comparison of biased and unbiased sampling methods",
        key_points: ["Random minimizes bias", "Large samples more reliable"]
      },
      {
        heading: "Correlation Not Causation",
        content: "Correlation shows relationship but not cause and effect. Confounding variables matter.",
        diagram_description: "Examples of correlation without causation",
        key_points: ["Correlation does not prove causation", "Look for confounding factors"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Online survey of 2000 people. 1800 say yes. Valid conclusion about population?",
        step_by_step: [
          "Consider bias: online survey misses non-internet users",
          "Sample may not represent all groups equally",
          "Conclusion may be biased"
        ],
        answer: "Not fully valid due to sampling bias"
      }
    ],
    section_4_practice_questions: {
      foundation: [
        { id: "d1f", question: "Data 10, 12, 15, 18, 20. Find mean", type: "short_answer", correct_answer: "15", explanation: "Mean = (10+12+15+18+20)/5 = 75/5 = 15", marks: 1, difficulty: "foundation" }
      ],
      higher: [
        { id: "d1h", question: "Dataset with outlier: 1,2,3,4,5,100. Why median better than mean?", type: "short_answer", correct_answer: "Median unaffected by outlier", explanation: "Median = 3.5, Mean = 19.17 skewed by 100 outlier", marks: 2, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [{ word: "Interpret", meaning: "Link data to conclusions" }],
      exam_tips: ["Check for bias", "Use appropriate average"],
      common_mistakes: ["Claiming causation", "Using mean with outliers"],
      mark_scheme_notes: ["A1 identify issue, A1 explain"],
      time_allocation: "1-2 min per mark"
    },
    section_6_additional_resources: {
      resources: [{ title: "Data Tool", type: "interactive", description: "Analyze datasets" }],
      further_reading: ["Statistics and Data Analysis"],
      revision_checklist: ["Bias identification clear", "Statistics appropriate"]
    },
    section_7_assessment_answers: {
      answers: [{ question_id: "d1f", model_answer: "15", mark_breakdown: ["1 mark calculation"] }],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export default SEED_MATHS_EXTENDED_3;
