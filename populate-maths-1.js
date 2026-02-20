
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'content', 'topics');

// Helper to update a topic file with full content
function updateTopic(filename, content) {
    const filePath = path.join(OUTPUT_DIR, filename);
    if (fs.existsSync(filePath)) {
        const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        // Merge existing metadata with new content
        const updated = { ...existing, ...content };
        fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
        console.log(`✅ Updated: ${filename}`);
    } else {
        console.error(`❌ File not found: ${filename}`);
    }
}

// ==========================================
// MATHS CONTENT GENERATION
// ==========================================

const MATHS_CONTENT = [
    {
        id: "edexcel_maths_number_structure.json",
        content: {
            section_1_key_concepts: {
                overview: "Understanding the structure of numbers is fundamental to all of mathematics. This topic covers integers, place value, ordering, and rounding.",
                learning_objectives: [
                    "Order positive and negative integers, decimals and fractions",
                    "Use the symbols =, ≠, <, >, ≤, ≥",
                    "Apply the four operations to integers, decimals and simple fractions",
                    "Understand and use place value",
                    "Round numbers and measures to an appropriate degree of accuracy"
                ],
                key_terms: [
                    { term: "Integer", definition: "A whole number, positive or negative, including zero", importance: "Basic building block of arithmetic" },
                    { term: "Place Value", definition: "The value of a digit depending on its position in a number", importance: "Essential for understanding magnitude and operations" },
                    { term: "Significant Figures", definition: "The digits in a number that contribute to its precision", importance: "Crucial for scientific notation and estimation" }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Integers and Place Value",
                    content: "The value of a digit depends on its position. For example, in 582, the 5 represents 500. Multiplying by 10 moves digits one place to the left; dividing by 10 moves them one place to the right.",
                    key_points: ["Digits: 0-9", "Place values: Use powers of 10", "Negative numbers are less than zero"]
                },
                {
                    heading: "Rounding and Estimation",
                    content: "To round a number, look at the digit to the right of your target place value. If it's 5 or more, round up. Estimation involves rounding numbers to 1 significant figure to check calculations.",
                    key_points: ["Decimals: Count from decimal point", "Sig Figs: Count from first non-zero digit", "Estimation uses ≈ symbol"]
                }
            ],
            section_3_worked_examples: [
                {
                    question: "Round 0.004567 to 2 significant figures.",
                    step_by_step: [
                        "Identify the first non-zero digit (4). This is the 1st significant figure.",
                        "The next digit (5) is the 2nd significant figure.",
                        "Look at the 3rd digit (6). Since 6 ≥ 5, round the 2nd digit up.",
                        "0.0045 becomes 0.0046"
                    ],
                    answer: "0.0046",
                    common_mistakes: ["Counting leading zeros as significant figures"]
                },
                {
                    question: "Estimate the value of (21.4 × 9.8) / 0.49",
                    step_by_step: [
                        "Round each number to 1 significant figure.",
                        "21.4 ≈ 20, 9.8 ≈ 10, 0.49 ≈ 0.5",
                        "Calculate (20 × 10) / 0.5",
                        "200 / 0.5 = 400"
                    ],
                    answer: "400",
                    common_mistakes: ["Using exact calculations instead of rounding first"]
                }
            ],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "Write 4567 correct to the nearest 100.", marks: 1, options: ["4500", "4600", "4560"], correct_answer: "4600", explanation: "The tens digit is 6 (≥ 5), so round the hundreds up.", difficulty: "foundation" },
                    { id: "q2", question: "Calculate -5 + 8", marks: 1, options: ["-3", "3", "13"], correct_answer: "3", explanation: "Start at -5 and move 8 steps up the number line.", difficulty: "foundation" }
                ],
                higher: [
                    { id: "q3", question: "Write 0.000305 in standard form.", marks: 2, options: ["3.05 × 10⁻⁴", "3.05 × 10⁴", "30.5 × 10⁻⁵"], correct_answer: "3.05 × 10⁻⁴", explanation: "Move decimal 4 places right to get number between 1 and 10.", difficulty: "higher" },
                    { id: "q4", question: "Estimate √80", marks: 2, options: ["8.9", "9.1", "8.5"], correct_answer: "8.9", explanation: "√81 = 9, so √80 is slightly less than 9.", difficulty: "higher" }
                ]
            }
        }
    },
    {
        id: "edexcel_maths_number_fractions.json",
        content: {
            section_1_key_concepts: {
                overview: "Fractions, decimals, and percentages are different ways of representing parts of a whole. Being able to convert between them is a key skill.",
                learning_objectives: [
                    "Convert between fractions, decimals and percentages",
                    "Add, subtract, multiply and divide fractions",
                    "Calculate percentage of a quantity",
                    "Increase/decrease by a percentage"
                ],
                key_terms: [
                    { term: "Numerator", definition: "Top number in a fraction", importance: "How many parts you have" },
                    { term: "Denominator", definition: "Bottom number in a fraction", importance: "Total number of parts" },
                    { term: "Reciprocal", definition: "1 divided by the number (flipping a fraction)", importance: "Used in division of fractions" }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Operations with Fractions",
                    content: "To add/subtract, find a common denominator. To multiply, multiply numerators and denominators separately. To divide, flip the second fraction and multiply (KFC: Keep, Flip, Change).",
                    key_points: ["Common denominator for + / -", "Multiply straight across", "Flip second fraction for division"]
                },
                {
                    heading: "Percentage Change",
                    content: "Percentage change = (Difference / Original) × 100. To increase by X%, multiply by (1 + X/100). To decrease by X%, multiply by (1 - X/100).",
                    key_points: ["Multiplier method is efficient", "Original amount is 100%"]
                }
            ],
            section_3_worked_examples: [
                {
                    question: "Calculate 2/3 ÷ 4/5",
                    step_by_step: [
                        "Keep 2/3",
                        "Change ÷ to ×",
                        "Flip 4/5 to 5/4",
                        "2/3 × 5/4 = 10/12",
                        "Simplify: 5/6"
                    ],
                    answer: "5/6",
                    common_mistakes: ["Forgetting to flip the second fraction"]
                },
                {
                    question: "Increase 80 by 15%",
                    step_by_step: [
                        "Method 1: 10% of 80 = 8. 5% = 4. 15% = 12. 80 + 12 = 92.",
                        "Method 2 (Multiplier): 100% + 15% = 115% = 1.15.",
                        "80 × 1.15 = 92."
                    ],
                    answer: "92",
                    common_mistakes: ["Multiplying by 0.15 instead of 1.15"]
                }
            ],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "Write 0.75 as a fraction.", marks: 1, options: ["3/4", "1/4", "4/5"], correct_answer: "3/4", explanation: "75/100 simplifies to 3/4.", difficulty: "foundation" },
                    { id: "q2", question: "Calculate 20% of 50.", marks: 1, options: ["10", "20", "5"], correct_answer: "10", explanation: "10% is 5, so 20% is 10.", difficulty: "foundation" }
                ],
                higher: [
                    { id: "q3", question: "A shirt costs £40. Its price is reduced by 15%. New price?", marks: 3, options: ["£34", "£35", "£6"], correct_answer: "£34", explanation: "15% of 40 is 6. 40 - 6 = 34.", difficulty: "higher" },
                    { id: "q4", question: "Convert 0.333... to a fraction.", marks: 2, options: ["1/3", "3/10", "3/9"], correct_answer: "1/3", explanation: "Steps: x=0.33.., 10x=3.33.., 9x=3, x=3/9=1/3.", difficulty: "higher" }
                ]
            }
        }
    },
    {
        id: "edexcel_maths_algebra_notation.json",
        content: {
            section_1_key_concepts: {
                overview: "Algebra uses symbols (usually letters) to represent unknown numbers. Mastering notation, substitution and solving simple equations is the foundation for all higher-level maths.",
                learning_objectives: [
                    "Use algebraic notation correctly (e.g., ab instead of a × b)",
                    "Substitute numerical values into formulae and expressions",
                    "Understand and use the concepts and vocabulary of expressions, equations, formulae and identities",
                    "Simplify and manipulate algebraic expressions by collecting like terms and expanding brackets"
                ],
                key_terms: [
                    { term: "Expression", definition: "A collection of terms with no equals sign (e.g., 2x + 1)", importance: "Represents a value" },
                    { term: "Equation", definition: "A mathematical statement that two things are equal (e.g., 2x + 1 = 7)", importance: "Can be solved" },
                    { term: "Variable", definition: "A symbol used to represent an unknown number", importance: "Core concept of algebra" }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Simplifying Expressions",
                    content: "You can only add or subtract terms that are 'like'. like terms have the exact same variable part. x and x² are NOT like terms. To multiply terms, multiply numbers and add powers.",
                    key_points: ["Collect like terms", "Multiply numbers, add indices", "Don't mix x and x²"]
                },
                {
                    heading: "Expanding Brackets",
                    content: "Multiply the term outside the bracket by EVERYTHING inside. For double brackets (FOIL): First, Outer, Inner, Last.",
                    key_points: ["Watch out for negative signs!", "Grid method or FOIL for double brackets"]
                }
            ],
            section_3_worked_examples: [
                {
                    question: "Simplify 3a + 2b - a + 5b",
                    step_by_step: [
                        "Identfy like terms: (3a - a) and (2b + 5b)",
                        "3a - a = 2a",
                        "2b + 5b = 7b",
                        "Combine: 2a + 7b"
                    ],
                    answer: "2a + 7b",
                    common_mistakes: ["Adding 'a' and 'b' terms together"]
                },
                {
                    question: "Expand 3(2x - 5)",
                    step_by_step: [
                        "Multiply 3 by 2x = 6x",
                        "Multiply 3 by -5 = -15",
                        "Result: 6x - 15"
                    ],
                    answer: "6x - 15",
                    common_mistakes: ["Forgetting to multiply the second term: 6x - 5"]
                }
            ],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "Simplify y + y + y", marks: 1, options: ["3y", "y³", "3+y"], correct_answer: "3y", explanation: "Adding same terms is multiplication.", difficulty: "foundation" },
                    { id: "q2", question: "If x = 3, what is 2x + 1?", marks: 1, options: ["7", "6", "5"], correct_answer: "7", explanation: "2(3) + 1 = 6 + 1 = 7.", difficulty: "foundation" }
                ],
                higher: [
                    { id: "q3", question: "Expand (x + 3)(x - 4)", marks: 2, options: ["x² - x - 12", "x² + x - 12", "x² - 12"], correct_answer: "x² - x - 12", explanation: "x² - 4x + 3x - 12 = x² - x - 12.", difficulty: "higher" },
                    { id: "q4", question: "Factorise x² - 9", marks: 1, options: ["(x+3)(x-3)", "(x-3)²", "(x-9)(x+1)"], correct_answer: "(x+3)(x-3)", explanation: "Difference of two squares.", difficulty: "higher" }
                ]
            }
        }
    }
];

// Run update
console.log("🚀 Populating Maths Content...");
MATHS_CONTENT.forEach(item => updateTopic(item.id, item.content));
