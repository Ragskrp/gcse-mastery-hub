import { MockExam } from "@/types";
import { SEED_EXAMS_EXTENDED } from "./seed-exams-extended";
import { SEED_EXAMS_FRENCH_EXTENDED } from "./seed-exams-french-extended";
import { SEED_EXAMS_RELIGIOUS_STUDIES_EXTENDED } from "./seed-exams-religious-studies-extended";
import { SEED_EXAMS_GEOGRAPHY_EXTENDED } from "./seed-exams-geography-extended";
import { SEED_EXAMS_COMPUTER_SCIENCE_EXTENDED } from "./seed-exams-computer-science-extended";

export const MOCK_EXAMS: MockExam[] = [
    {
        id: "maths_foundation_paper_1",
        subject: "maths",
        title: "Edexcel Maths Foundation Paper 1 (Non-Calculator)",
        year: "2024",
        duration: 90,
        marks: 80,
        difficulty: "foundation",
        questionCount: 20,
        questions: [
            {
                id: "q1",
                number: "1",
                question: "Work out 3/4 + 1/8",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q2",
                number: "2",
                question: "Simplify 12:18",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q3",
                number: "3",
                question: "Expand 5(2x - 3)",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q4",
                number: "4",
                question: "Angles on a straight line add to...?",
                marks: 1,
                type: "multiple_choice",
                options: ["90°", "180°", "270°", "360°"]
            },
            {
                id: "q5",
                number: "5",
                question: "Work out 25% of £80",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q6",
                number: "6",
                question: "A die is rolled. What is P(rolling a number less than 3)?",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q7",
                number: "7",
                question: "Find the mean of: 3, 5, 7, 9",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q8",
                number: "8",
                question: "Solve x + 7 = 15",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q9",
                number: "9",
                question: "What do angles in a triangle add up to?",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q10",
                number: "10",
                question: "Divide 60 in ratio 2:1",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q11",
                number: "11",
                question: "Write 0.05 as a percentage",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q12",
                number: "12",
                question: "Factorise 6x + 9",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q13",
                number: "13",
                question: "If y = 2x + 1, find y when x = 3",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q14",
                number: "14",
                question: "Calculate the perimeter of a rectangle: length 5cm, width 3cm",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q15",
                number: "15",
                question: "A spinner has equal sections: red, blue, green. Spun twice. P(both red)?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q16",
                number: "16",
                question: "Round 7.483 to 1 decimal place",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q17",
                number: "17",
                question: "Calculate 20% of 150",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q18",
                number: "18",
                question: "Solve 2x = 14",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q19",
                number: "19",
                question: "Find the median of [1, 3, 5, 7, 9]",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q20",
                number: "20",
                question: "What is the range of [2, 4, 6, 8, 10]?",
                marks: 1,
                type: "short_answer"
            }
        ]
    },
    {
        id: "maths_higher_paper_1",
        subject: "maths",
        title: "Edexcel Maths Higher Paper 1 (Non-Calculator)",
        year: "2024",
        duration: 90,
        marks: 80,
        difficulty: "higher",
        questionCount: 22,
        questions: [
            {
                id: "q1",
                number: "1",
                question: "Work out 5/7 ÷ 3/4. Give your answer in its simplest form.",
                marks: 3,
                type: "short_answer"
            },
            {
                id: "q2",
                number: "2",
                question: "Factorise x² - 16",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q3",
                number: "3",
                question: "Expand and simplify (x + 3)(x - 2)",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q4",
                number: "4",
                question: "Evaluate 3⁻²",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q5",
                number: "5",
                question: "Factorise fully: 12x² + 8x",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q6",
                number: "6",
                question: "Solve 2x² = 50",
                marks: 3,
                type: "short_answer"
            },
            {
                id: "q7",
                number: "7",
                question: "The interior angle of a regular polygon is 162°. How many sides does it have?",
                marks: 3,
                type: "short_answer"
            },
            {
                id: "q8",
                number: "8",
                question: "y is directly proportional to x. When y = 10, x = 2. Find y when x = 5",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q9",
                number: "9",
                question: "y is inversely proportional to x. When y = 4, x = 6. Find y when x = 8",
                marks: 3,
                type: "short_answer"
            },
            {
                id: "q10",
                number: "10",
                question: "John and Sarah share £264 in ratio 5:7. How much does Sarah get?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q11",
                number: "11",
                question: "A bag has 4 red and 6 blue balls. Two drawn without replacement. P(both red)?",
                marks: 3,
                type: "short_answer"
            },
            {
                id: "q12",
                number: "12",
                question: "Two dice rolled. P(sum = 10)?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q13",
                number: "13",
                question: "Write √(9/25) as a fraction",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q14",
                number: "14",
                question: "Estimate: √50 + √150 (to 1 d.p.)",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q15",
                number: "15",
                question: "Round 0.00456 to 2 significant figures",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q16",
                number: "16",
                question: "Simplify (√12 + √3)/5",
                marks: 3,
                type: "short_answer"
            },
            {
                id: "q17",
                number: "17",
                question: "Given f(x) = 2x + 3, find f(f(2))",
                marks: 3,
                type: "short_answer"
            },
            {
                id: "q18",
                number: "18",
                question: "Solve simultaneously: 2x + y = 7 and 3x - y = 8",
                marks: 3,
                type: "short_answer"
            },
            {
                id: "q19",
                number: "19",
                question: "Expand (2x - 3)³ (use binomial expansion or multiply)",
                marks: 4,
                type: "short_answer"
            },
            {
                id: "q20",
                number: "20",
                question: "Find the HCF of 48 and 72",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q21",
                number: "21",
                question: "The exterior angle of a regular polygon is 72°. How many sides?",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q22",
                number: "22",
                question: "A map uses scale 1:50,000. A distance is 4cm on map. What's actual distance in km?",
                marks: 2,
                type: "short_answer"
            }
        ]
    },
    {
        id: "maths_foundation_paper_2",
        subject: "maths",
        title: "Edexcel Maths Foundation Paper 2 (Calculator)",
        year: "2024",
        duration: 90,
        marks: 80,
        difficulty: "foundation",
        questionCount: 18,
        questions: [
            {
                id: "q1",
                number: "1",
                question: "Calculate the area of a rectangle: length 12cm, width 8cm",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q2",
                number: "2",
                question: "Work out 24.5 × 3.2",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q3",
                number: "3",
                question: "Calculate 45% of 200",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q4",
                number: "4",
                question: "A pie chart shows Blue = 120°. If 100 items total, how many are blue?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q5",
                number: "5",
                question: "Speed = Distance ÷ Time. Car travels 150 miles in 3 hours. What is speed?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q6",
                number: "6",
                question: "Calculate the circumference of a circle with radius 5cm (use π ≈ 3.14)",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q7",
                number: "7",
                question: "Simple Interest formula: I = PRT/100. P=£500, R=4%, T=3 years. Find I",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q8",
                number: "8",
                question: "A car costs £8,000. It depreciates by 20% per year. What is it worth after 1 year?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q9",
                number: "9",
                question: "Convert 72km/h to m/s",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q10",
                number: "10",
                question: "Volume of a box: length 10cm, width 5cm, height 4cm. Calculate volume",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q11",
                number: "11",
                question: "Recipe uses 3 eggs for 12 people. How many eggs for 20 people?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q12",
                number: "12",
                question: "Population of town increased from 50,000 to 55,000. What's percentage increase?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q13",
                number: "13",
                question: "Density = Mass ÷ Volume. Object: mass 24g, volume 8cm³. Find density",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q14",
                number: "14",
                question: "Pressure = Force ÷ Area. Force 1000N, Area 5m². Calculate pressure",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q15",
                number: "15",
                question: "Exchange rate: £1 = €1.20. How many euros for £50?",
                marks: 1,
                type: "short_answer"
            },
            {
                id: "q16",
                number: "16",
                question: "Best buy: 400g for £2.40 or 600g for £3.50?",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q17",
                number: "17",
                question: "Survey of 200 people: 60 prefer coffee. Estimate in population of 5000",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q18",
                number: "18",
                question: "Compound interest: £2000 at 5% per year for 2 years. Total amount?",
                marks: 2,
                type: "short_answer"
            }
        ]
    },
    {
        id: "science_paper_1",
        subject: "combined_science",
        title: "AQA Combined Science Biology Paper 1",
        year: "2023",
        duration: 75,
        marks: 70,
        difficulty: "foundation",
        questionCount: 15,
        questions: [
            {
                id: "q1",
                number: "1",
                question: "Which organelle controls the activities of the cell?",
                marks: 1,
                type: "multiple_choice",
                options: ["Mitochondria", "Nucleus", "Ribosome", "Cytoplasm"]
            },
            {
                id: "q2",
                number: "2",
                question: "Describe the function of the cell membrane.",
                marks: 2,
                type: "short_answer"
            }
        ]
    },
    {
        id: "english_lit_paper_1",
        subject: "english_literature",
        title: "AQA English Literature Paper 1",
        year: "2022",
        duration: 105,
        marks: 64,
        difficulty: "both",
        questionCount: 2,
        questions: [
            {
                id: "q1",
                number: "1",
                question: "Starting with this extract, explain how Shakespeare presents Macbeth as a violent warrior. Write about: how Shakespeare presents Macbeth in this extract; how Shakespeare presents Macbeth in the play as a whole.",
                marks: 30,
                type: "long_answer"
            }
        ]
    },
    {
        id: "history_paper_1",
        subject: "history",
        title: "AQA History Paper 1: Understanding the Modern World",
        year: "2023",
        duration: 120,
        marks: 84,
        difficulty: "both",
        questionCount: 6,
        questions: [
            {
                id: "q1",
                number: "1",
                question: "How does Interpretation B differ from Interpretation A about the impact of the First World War on Germany? Explain your answer using Interpretations A and B.",
                marks: 4,
                type: "long_answer"
            }
        ]
    },
    {
        id: "cs_paper_1",
        subject: "computer_science",
        title: "OCR Computer Science Paper 1: Computer Systems",
        year: "2022",
        duration: 90,
        marks: 80,
        difficulty: "both",
        questionCount: 10,
        questions: [
            {
                id: "q1",
                number: "1",
                question: "Convert the denary number 53 into 8-bit binary.",
                marks: 2,
                type: "short_answer"
            },
            {
                id: "q2",
                number: "2",
                question: "Explain two reasons why data compression is used.",
                marks: 4,
                type: "short_answer"
            }
        ]
    },
    ...SEED_EXAMS_EXTENDED,
    ...SEED_EXAMS_FRENCH_EXTENDED,
    ...SEED_EXAMS_RELIGIOUS_STUDIES_EXTENDED,
    ...SEED_EXAMS_GEOGRAPHY_EXTENDED,
    ...SEED_EXAMS_COMPUTER_SCIENCE_EXTENDED
];
