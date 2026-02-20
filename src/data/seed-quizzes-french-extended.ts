import { Quiz } from "@/types";

export const SEED_QUIZZES_FRENCH_EXTENDED: Quiz[] = [
  {
    id: "quiz_french_francophone_1",
    title: "Francophone Culture & Global Communities",
    topic_reference: "aqa_french_culture_francophone_world",
    subject: "french",
    exam_board: "aqa",
    questions: [
      {
        id: "q1",
        question: "What is Francophonie? Select the best definition.",
        type: "mcq",
        options: [
          "The French monarchy during the 17th century",
          "The international community of French-speaking countries and cultures unified by French language",
          "A political party supporting French colonial expansion",
          "The academic institution that regulates French language"
        ],
        correct_answer:
          "The international community of French-speaking countries and cultures unified by French language",
        explanation:
          "Francophonie refers to both the geographic/cultural community of French speakers and the formal international organization (OIF) promoting French language and cooperation.",
        marks: 2,
        difficulty: "foundation",
        topic_reference: "aqa_french_culture_francophone_world"
      },
      {
        id: "q2",
        question: "Name two major francophone regions outside of Europe.",
        type: "short_answer",
        options: [],
        correct_answer: "Sub-Saharan Africa and Caribbean. (Accept: North Africa, Southeast Asia, Pacific Islands)",
        explanation:
          "Shows understanding of global reach of francophone world. Africa represents majority of current and future French speakers.",
        marks: 2,
        difficulty: "foundation",
        topic_reference: "aqa_french_culture_francophone_world"
      },
      {
        id: "q3",
        question: "What does 'code-switching' mean in multilingual contexts?",
        type: "mcq",
        options: [
          "Switching to English when French speaker is tired",
          "Alternating between French and local languages within same conversation",
          "Official government policy on language use",
          "Personal preference to avoid learning new languages"
        ],
        correct_answer: "Alternating between French and local languages within same conversation",
        explanation:
          "Code-switching reflects multilingual reality in many francophone communities, showing how language use varies by context and audience.",
        marks: 2,
        difficulty: "higher",
        topic_reference: "aqa_french_culture_francophone_world"
      },
      {
        id: "q4",
        question: "How does contemporary African hip-hop challenge stereotypes about francophone culture?",
        type: "short_answer",
        options: [],
        correct_answer:
          "By demonstrating that French is spoken in African cities and used for modern artistic expression; shows cultural vibrancy beyond European centers; brings African perspectives into global French-language culture",
        explanation:
          "Shows understanding of how contemporary artists are reshaping what francophone culture means globally.",
        marks: 3,
        difficulty: "higher",
        topic_reference: "aqa_french_culture_francophone_world"
      },
      {
        id: "q5",
        question: "Discuss the colonial legacy's complicated relationship to contemporary francophone identity.",
        type: "short_answer",
        options: [],
        correct_answer:
          "French imposed through colonization (oppressive), but now provides education/professional opportunity. Creates tension: resource but reminder of domination. Different experiences by region.",
        explanation:
          "Tests nuanced understanding of how historical trauma and contemporary opportunity coexist in francophone communities.",
        marks: 3,
        difficulty: "higher",
        topic_reference: "aqa_french_culture_francophone_world"
      }
    ],
    time_limit: 25,
    passing_score: 60,
    total_marks: 12,
    difficulty: "mixed"
  },

  {
    id: "quiz_french_tech_1",
    title: "Technology & Digital Society in French-Speaking World",
    topic_reference: "aqa_french_tech_digital_society",
    subject: "french",
    exam_board: "aqa",
    questions: [
      {
        id: "q1",
        question: "What is the 'digital divide'?",
        type: "short_answer",
        options: [],
        correct_answer:
          "Gap between those with easy access to technology/internet and those without; reflects inequality in income, location, age, education",
        explanation:
          "Key concept understanding technology's role in perpetuating or reducing social inequality.",
        marks: 2,
        difficulty: "foundation",
        topic_reference: "aqa_french_tech_digital_society"
      },
      {
        id: "q2",
        question: "Which social media platforms are most popular with French teenagers?",
        type: "short_answer",
        options: [],
        correct_answer:
          "Instagram (photos/lifestyle), TikTok (short videos), Snapchat (messaging). Also: YouTube, BeReal, Twitter",
        explanation:
          "Tests knowledge of contemporary platforms and how young people use them for communication and self-presentation.",
        marks: 2,
        difficulty: "foundation",
        topic_reference: "aqa_french_tech_digital_society"
      },
      {
        id: "q3",
        question: "Describe how language evolves in digital and text contexts among young French speakers.",
        type: "short_answer",
        options: [],
        correct_answer:
          "Text speak (u=tu, c=c'est), emojis as communication, English borrowings (checker, weekend), lowercase writing, rapid abbreviations (lol, omg)",
        explanation:
          "Shows understanding of language evolution in digital contexts and challenges this poses to traditional French language guardians.",
        marks: 2,
        difficulty: "foundation",
        topic_reference: "aqa_french_tech_digital_society"
      },
      {
        id: "q4",
        question: "What are the main privacy and security concerns related to social media?",
        type: "mcq",
        options: [
          "Only problem is wasting time on social media",
          "Companies collect personal data for marketing purposes; permanent online footprint; government/hacker access risks",
          "Social media is completely safe and secure",
          "Privacy only matters for criminals"
        ],
        correct_answer:
          "Companies collect personal data for marketing purposes; permanent online footprint; government/hacker access risks",
        explanation:
          "Contemporary issue affecting all social media users - data collection, surveillance, long-term vulnerability.",
        marks: 2,
        difficulty: "higher",
        topic_reference: "aqa_french_tech_digital_society"
      },
      {
        id: "q5",
        question: "Analyze the tension between protecting French language and acknowledging digital linguistic evolution.",
        type: "short_answer",
        options: [],
        correct_answer:
          "Academie francaise wants to preserve 'pure' French; youth creating new digital forms (abbreviations, English borrowings). Youth language challenges traditional rules but keeps French living/evolving. Creates generation gap in language attitudes.",
        explanation:
          "Tests understanding of cultural conservatism vs inevitable language change in digital age.",
        marks: 3,
        difficulty: "higher",
        topic_reference: "aqa_french_tech_digital_society"
      }
    ],
    time_limit: 25,
    passing_score: 60,
    total_marks: 11,
    difficulty: "mixed"
  },

  {
    id: "quiz_french_social_1",
    title: "Contemporary Social Issues in French Society",
    topic_reference: "aqa_french_social_issues_contemporary",
    subject: "french",
    exam_board: "aqa",
    questions: [
      {
        id: "q1",
        question: "What are banlieues, and why are they significant in discussions of integration?",
        type: "short_answer",
        options: [],
        correct_answer:
          "Suburban areas with high immigrant and minority populations, high unemployment and poverty. Represent residential segregation and integration challenges.",
        explanation:
          "Understanding geographic dimension of integration debates and social inequality.",
        marks: 2,
        difficulty: "foundation",
        topic_reference: "aqa_french_social_issues_contemporary"
      },
      {
        id: "q2",
        question: "Name two environmental challenges currently facing France.",
        type: "short_answer",
        options: [],
        correct_answer:
          "Climate change, pollution, resource depletion, extreme weather, rising temperatures. Any two acceptable.",
        explanation: "Tests knowledge of contemporary environmental challenges in France.",
        marks: 2,
        difficulty: "foundation",
        topic_reference: "aqa_french_social_issues_contemporary"
      },
      {
        id: "q3",
        question: "Explain the concept of 'laicite' and why it's controversial in contemporary France.",
        type: "short_answer",
        options: [],
        correct_answer:
          "French principle of secular state - separation of religious and state authority. Controversial because seen by some as core French value immigrants must accept, by others as hostile to religious minorities (especially Muslims)",
        explanation:
          "Central to French political culture and understanding integration/religious diversity tensions.",
        marks: 3,
        difficulty: "higher",
        topic_reference: "aqa_french_social_issues_contemporary"
      },
      {
        id: "q4",
        question: "What sparked the Yellow Vests (Gilets Jaunes) protests, and what broader issues did they represent?",
        type: "short_answer",
        options: [],
        correct_answer:
          "Sparked by fuel tax; reflected broader concerns: cost of living, inequality, rural neglect, environmental policies perceived as unfairly burdening ordinary people",
        explanation:
          "Major contemporary event showing intersection of economic, environmental and class concerns.",
        marks: 3,
        difficulty: "higher",
        topic_reference: "aqa_french_social_issues_contemporary"
      },
      {
        id: "q5",
        question: "Discuss the tension between environmental policy goals and economic impacts on working-class communities.",
        type: "short_answer",
        options: [],
        correct_answer:
          "Environmental policies (fuel taxes, fossil fuel phase-out) necessary for climate but harm economically vulnerable people. Yellow Vests showed this injustice. Reveals need for 'just transition' - environmental action WITH economic support for affected workers/regions.",
        explanation:
          "Tests ability to analyze how policy goals conflict and whose interests are prioritized - class analysis.",
        marks: 3,
        difficulty: "higher",
        topic_reference: "aqa_french_social_issues_contemporary"
      }
    ],
    time_limit: 25,
    passing_score: 60,
    total_marks: 13,
    difficulty: "mixed"
  }
];
