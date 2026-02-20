import { MockExam } from "@/types";

export const SEED_EXAMS_EXTENDED: MockExam[] = [
  {
    id: "exam_maths_higher_2024_extended",
    subject: "maths",
    title: "Extended Maths Paper: Functions, Trigonometry & Quadratics (Higher)",
    year: "2024",
    duration: 90,
    marks: 60,
    difficulty: "higher",
    questionCount: 18,
    questions: [
      { id: "q1", number: "1", question: "Find the equation of the line passing through (2, 5) and (4, 11). Show your working.", marks: 3, type: "short_answer" },
      { id: "q2", number: "2", question: "A line has equation 2x + 3y = 12. Find the gradient and y-intercept. Show all steps.", marks: 3, type: "short_answer" },
      { id: "q3", number: "3", question: "Line A has gradient 3. Find the gradient of the line perpendicular to A.", marks: 2, type: "short_answer" },
      { id: "q4", number: "4", question: "Sketch y = (x + 2)² - 3. Mark the vertex and axis of symmetry.", marks: 3, type: "long_answer" },
      { id: "q5", number: "5", question: "Find the intersection points of y = x² and y = 2x + 3. Show your working.", marks: 4, type: "short_answer" },
      { id: "q6", number: "6", question: "A function has domain {-2, -1, 0, 1, 2} and f(x) = x² + 1. Find the range.", marks: 2, type: "short_answer" },
      { id: "q7", number: "7", question: "In a right-angled triangle: opposite = 5cm, hypotenuse = 13cm. Calculate the angle. Give your answer to 1 d.p.", marks: 3, type: "short_answer" },
      { id: "q8", number: "8", question: "Find the hypotenuse in a right triangle where: adjacent = 8cm, angle = 35°. Show your working.", marks: 3, type: "long_answer" },
      { id: "q9", number: "9", question: "A person stands 20m away from the base of a tree. The angle of elevation to the top is 40°. Calculate the height of the tree.", marks: 3, type: "long_answer" },
      { id: "q10", number: "10", question: "Two angles in a triangle are 35° and 90°. Calculate the third angle.", marks: 2, type: "short_answer" },
      { id: "q11", number: "11", question: "In a right-angled triangle, the hypotenuse is 15cm and one leg is 9cm. Find the other leg using Pythagoras' theorem.", marks: 4, type: "long_answer" },
      { id: "q12", number: "12", question: "In a right triangle with a 60° angle and hypotenuse 2cm, prove that the shortest side = 1cm. Justify your answer.", marks: 3, type: "long_answer" },
      { id: "q13", number: "13", question: "Solve x² - 7x + 12 = 0. Factorise or use the formula.", marks: 2, type: "short_answer" },
      { id: "q14", number: "14", question: "Use the quadratic formula to solve 3x² + 2x - 1 = 0. Show all working.", marks: 4, type: "long_answer" },
      { id: "q15", number: "15", question: "Complete the square for 2x² - 8x + 5. Express in the form a(x + p)² + q.", marks: 3, type: "short_answer" },
      { id: "q16", number: "16", question: "Find the discriminant of x² + 4x + 5 = 0. How many real solutions does this equation have?", marks: 3, type: "short_answer" },
      { id: "q17", number: "17", question: "Solve the inequality x² - 5x - 14 > 0. Show your working including the critical values.", marks: 4, type: "short_answer" },
      { id: "q18", number: "18", question: "Sketch y = -2x² + 4x + 1. Show the vertex coordinates, y-intercept, and direction of opening.", marks: 3, type: "long_answer" }
    ]
  },

  {
    id: "exam_science_modern_physics_2024",
    subject: "combined_science",
    title: "Science Extended: Modern Physics & Nuclear (Higher)",
    year: "2024",
    duration: 90,
    marks: 60,
    difficulty: "higher",
    questionCount: 15,
    questions: [
      { id: "q1", number: "1", question: "Explain why classical physics cannot explain the photoelectric effect. Reference intensity vs frequency.", marks: 4, type: "long_answer" },
      { id: "q2", number: "2", question: "Calculate the photon energy for light with frequency 5×10¹⁴ Hz. (Planck constant h = 6.63×10⁻³⁴ J·s)", marks: 3, type: "short_answer" },
      { id: "q3", number: "3", question: "Define stopping potential and explain how it relates to maximum kinetic energy of photoelectrons.", marks: 4, type: "long_answer" },
      { id: "q4", number: "4", question: "Explain why red light cannot eject electrons but violet light can from the same metal surface.", marks: 4, type: "short_answer" },
      { id: "q5", number: "5", question: "Describe and compare alpha, beta and gamma decay. Include details on particles/radiation emitted and mass numbers.", marks: 6, type: "long_answer" },
      { id: "q6", number: "6", question: "A sample has initial activity 3000 counts/min. After 30 years (equivalent to 3 half-lives), calculate the remaining activity.", marks: 4, type: "long_answer" },
      { id: "q7", number: "7", question: "Write nuclear equations for (a) U-238 alpha decay and (b) C-14 beta decay.", marks: 4, type: "short_answer" },
      { id: "q8", number: "8", question: "Why is background radiation important when measuring radioactivity? How should it be accounted for?", marks: 3, type: "short_answer" },
      { id: "q9", number: "9", question: "Discuss different methods for detecting alpha, beta and gamma radiation. Comment on suitability for each type.", marks: 3, type: "long_answer" },
      { id: "q10", number: "10", question: "Explain the key differences between nuclear fission and nuclear fusion reactions.", marks: 4, type: "short_answer" },
      { id: "q11", number: "11", question: "Calculate the energy released when 0.1 kg of mass is converted to energy using E=mc². (c = 3×10⁸ m/s)", marks: 3, type: "long_answer" },
      { id: "q12", number: "12", question: "Explain why nuclear reactions release far more energy per unit mass than chemical reactions.", marks: 4, type: "long_answer" },
      { id: "q13", number: "13", question: "Evaluate the advantages and disadvantages of nuclear power as an energy source for electricity generation.", marks: 5, type: "long_answer" },
      { id: "q14", number: "14", question: "Why is fusion preferable to fission as a future energy source? Discuss technological challenges.", marks: 4, type: "long_answer" },
      { id: "q15", number: "15", question: "Explain wave-particle duality using two different experimental phenomena as evidence.", marks: 5, type: "long_answer" }
    ]
  },

  {
    id: "exam_history_colonialism_extended_2024",
    subject: "history",
    title: "History Extended: Colonialism & Empire",
    year: "2024",
    duration: 105,
    marks: 90,
    difficulty: "both",
    questionCount: 8,
    questions: [
      { id: "q1", number: "1", question: "[Primary source provided] What does this source reveal about motivations for colonial expansion? Consider provenance and language.", marks: 8, type: "long_answer" },
      { id: "q2", number: "2", question: "Compare two primary sources. How do they differ in their interpretations of colonial resistance?", marks: 12, type: "long_answer" },
      { id: "q3", number: "3", question: "Using historical evidence, evaluate: Was colonialism primarily driven by economic motivations?", marks: 10, type: "long_answer" },
      { id: "q4", number: "4", question: "[Essay] 'Economic factors were more important than ideology in driving colonial expansion.' Evaluate this statement. Include specific examples.", marks: 30, type: "long_answer" },
      { id: "q5", number: "5", question: "Analyze major migration patterns between 1500-1950. What were the primary causes?", marks: 10, type: "long_answer" },
      { id: "q6", number: "6", question: "To what extent did colonialism reshape global migration patterns and create lasting diaspora communities?", marks: 12, type: "long_answer" },
      { id: "q7", number: "7", question: "Examine long-term impacts of the colonial period on modern global inequalities. Justify your analysis.", marks: 8, type: "long_answer" },
      { id: "q8", number: "8", question: "Compare colonial experiences in two different regions. What similarities and differences existed?", marks: 10, type: "long_answer" }
    ]
  },

  {
    id: "exam_english_lit_poetry_extended_2024",
    subject: "english_literature",
    title: "English Literature: Poetry & Gothic Analysis",
    year: "2024",
    duration: 105,
    marks: 60,
    difficulty: "both",
    questionCount: 5,
    questions: [
      { id: "q1", number: "1", question: "[Poetry essay] Analyze how Wordsworth uses nature imagery in 'Daffodils' to convey emotional and spiritual significance. Use quotations.", marks: 12, type: "long_answer" },
      { id: "q2", number: "2", question: "Compare Keats' and Byron's different attitudes towards beauty and mortality. How does this reflect Romantic ideology?", marks: 8, type: "long_answer" },
      { id: "q3", number: "3", question: "[Gothic literature essay] Analyze how Gothic setting functions as more than decoration—it creates psychological horror. Use specific textual evidence.", marks: 12, type: "long_answer" },
      { id: "q4", number: "4", question: "[Unseen poetry] Analyze the language and structure of the provided poem. Discuss how these create meaning and affect the reader.", marks: 20, type: "long_answer" },
      { id: "q5", number: "5", question: "How does narrator unreliability function as a Gothic technique? Discuss with specific textual examples.", marks: 8, type: "long_answer" }
    ]
  }
];
