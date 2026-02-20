
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'content', 'topics');
const FILE_PATH = path.join(OUTPUT_DIR, 'edexcel_maths_algebra_notation.json');

const DEEP_CONTENT = {
    id: "edexcel_maths_algebra_notation",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Algebra: Notation and Equations",
    topic_number: "2.1",
    tier_level: "both",
    section_1_key_concepts: {
        overview: "Algebra is the language of mathematics. It uses symbols (variables) to represent unknown values. Solving equations is about finding the value of these unknowns. This unit covers simplifying expressions, substitution, and solving linear equations.",
        learning_objectives: [
            "Use and interpret algebraic notation (e.g. ab instead of a × b)",
            "Substitute numerical values into formulae and expressions",
            "Collect like terms to simplify expressions",
            "Expand single and double brackets",
            "Factorise linear and quadratic expressions",
            "Solve linear equations with unknowns on one or both sides"
        ],
        key_terms: [
            { term: "Variable", definition: "A letter used to represent an unknown number (e.g. x, y, n).", importance: "The 'building block' of algebra." },
            { term: "Expression", definition: "A collection of terms with NO equals sign (e.g. 2x + 5).", importance: "Cannot be solved, only simplified." },
            { term: "Equation", definition: "Two expressions linked by an equals sign (e.g. 2x + 5 = 15).", importance: "Can be solved to find x." },
            { term: "Like Terms", definition: "Terms that have the same variable and power (e.g. 3x and 5x).", importance: "Only like terms can be added/subtracted." },
            { term: "Coefficient", definition: "The number in front of a variable (e.g. In 3x, the coefficient is 3).", importance: "Tells you how many x's you have." }
        ]
    },
    section_2_detailed_explanations: [
        {
            heading: "1. Basic Rules of Algebra",
            content: "Algebraic notation saves space.\n\nMultiplication is hidden:\n• a × b = ab\n• 3 × y = 3y\n• x × x = x² (squared, not 2x)\n\nDivision is written as a fraction:\n• a ÷ b = a/b\n\nCoefficient Rules:\n• Write the number first (3a, not a3)\n• 1x is just written as x.",
            key_points: ["3a means 3 multiplied by a", "x² means x multiplied by x", "Only add/subtract LIKE terms (e.g. 3x + 2x = 5x, but 3x + 2y cannot be simplified)"]
        },
        {
            heading: "2. Solving One-Step, Two-Step Equations",
            content: "An equation is like a balance scale. Whatever you do to one side, you MUST do to the other to keep it balanced. \n\nGoal: Get x on its own (isolate x).\n\nMethod:\n1. Undo Addition/Subtraction first (Inverse operations).\n2. Undo Multiplication/Division last.\n\nExample: 2x + 4 = 12\nStep 1: Subtract 4 from both sides → 2x = 8\nStep 2: Divide by 2 → x = 4",
            key_points: ["Always do the INVERSE operation.", "+ becomes -", "× becomes ÷"]
        },
        {
            type: "component",
            name: "EquationSolver"
        },
        {
            heading: "3. Expanding Brackets",
            content: "Expanding means multiplying out. Multiply the term outside by EVERYTHING inside.\n\nSingle Bracket: 3(x + 5)\n• 3 × x = 3x\n• 3 × 5 = 15\n• Answer: 3x + 15\n\nDouble Brackets (FOIL): (x + 3)(x + 2)\n• First: x × x = x²\n• Outer: x × 2 = 2x\n• Inner: 3 × x = 3x\n• Last: 3 × 2 = 6\n• Simplify: x² + 5x + 6",
            key_points: ["Watch out for negative signs! -3(x - 2) expands to -3x + 6 (because neg x neg = pos)."]
        }
    ],
    section_3_worked_examples: [
        {
            question: "Solve 5x - 3 = 17",
            step_by_step: [
                "1. Identify the 'problem': -3 is in the way.",
                "2. Add 3 to both sides to remove it.",
                "   5x = 17 + 3",
                "   5x = 20",
                "3. Divide by 5 to isolate x.",
                "   x = 20 / 5",
                "   x = 4"
            ],
            answer: "x = 4",
            common_mistakes: ["Subtracting 3 instead of adding (getting 14)", "Dividing 5 by 20 (getting 0.25)"]
        },
        {
            question: "Solve 3(2x + 1) = 21",
            step_by_step: [
                "Method 1: Expand first",
                "1. Expand bracket: 6x + 3 = 21",
                "2. Subtract 3: 6x = 18",
                "3. Divide by 6: x = 3",
                "Method 2: Divide first",
                "1. Divide by 3: 2x + 1 = 7",
                "2. Subtract 1: 2x = 6",
                "3. Divide by 2: x = 3"
            ],
            answer: "x = 3",
            common_mistakes: ["Expanding incorrectly as 6x + 1 (forgetting to multiply the 1 by 3)"]
        },
        {
            question: "Expand and Simplify (x + 4)(x - 5)",
            step_by_step: [
                "1. Multiply First: x × x = x²",
                "2. Multiply Outer: x × -5 = -5x",
                "3. Multiply Inner: 4 × x = 4x",
                "4. Multiply Last: 4 × -5 = -20",
                "5. Collect terms: -5x + 4x = -x",
                "6. Final: x² - x - 20"
            ],
            answer: "x² - x - 20",
            common_mistakes: ["Ignoring the negative sign on the 5", "Adding the numbers at the end incorrectly (-5 + 4 is -1, not 9)"]
        }
    ],
    section_4_practice_questions: {
        foundation: [
            { id: "f1", question: "Simplify 3x + 2y - x + 5y", marks: 2, options: ["2x + 7y", "4x + 7y", "2x + 3y", "10xy"], correct_answer: "2x + 7y", explanation: "3x - x = 2x. 2y + 5y = 7y.", difficulty: "foundation" },
            { id: "f2", question: "If a = 3 and b = 5, calculate 2a + b", marks: 1, options: ["11", "8", "16", "30"], correct_answer: "11", explanation: "2(3) + 5 = 6 + 5 = 11.", difficulty: "foundation" },
            { id: "f3", question: "Solve x + 7 = 19", marks: 1, options: ["12", "26", "13", "7"], correct_answer: "12", explanation: "Subtract 7 from 19.", difficulty: "foundation" },
            { id: "f4", question: "Expand 4(x + 3)", marks: 1, options: ["4x + 12", "4x + 3", "4x + 7", "x+12"], correct_answer: "4x + 12", explanation: "Multiply both terms by 4.", difficulty: "foundation" }
        ],
        higher: [
            { id: "h1", question: "Solve 3x + 4 = x + 12", marks: 3, options: ["4", "8", "2", "3"], correct_answer: "4", explanation: "Subtract x: 2x + 4 = 12. Subtract 4: 2x = 8. Divide by 2: x = 4.", difficulty: "higher" },
            { id: "h2", question: "Factorise fully 6x² + 9x", marks: 2, options: ["3x(2x + 3)", "3(2x² + 3x)", "x(6x + 9)", "3x(2x + 1)"], correct_answer: "3x(2x + 3)", explanation: "HCF is 3x. 3x(2x) = 6x², 3x(3) = 9x.", difficulty: "higher" },
            { id: "h3", question: "Make x the subject: y = 2x - 5", marks: 2, options: ["x = (y+5)/2", "x = y+5-2", "x = (y-5)/2", "x = y/2 + 5"], correct_answer: "x = (y+5)/2", explanation: "Add 5 to y: y+5 = 2x. Divide by 2.", difficulty: "higher" },
            { id: "h4", question: "Expand (2x + 3)(3x - 1)", marks: 2, options: ["6x² + 7x - 3", "6x² + 11x - 3", "6x² - 3", "5x + 2"], correct_answer: "6x² + 7x - 3", explanation: "6x² - 2x + 9x - 3 = 6x² + 7x - 3.", difficulty: "higher" }
        ]
    },
    section_5_exam_guidance: {
        common_mistakes: [
            "Collecting unlike terms (e.g. thinking 3x + 2 is 5x). It stops at 3x + 2.",
            "Forgetting to multiply the SECOND term when expanding brackets (e.g. 3(x+4) becoming 3x + 4).",
            "Sign errors when multiplying negatives (e.g. -2 x -3 = +6).",
            "Dropping the equations structure: keep equals signs aligned vertically."
        ],
        exam_tips: [
            "Check your answer by substituting it back into the original equation (e.g. If you think x=4, puts 4 back in. Does 2(4)+4 = 12? Yes).",
            "Write 'LHS' (Left Hand Side) and 'RHS' (Right Hand Side) if it helps keep track.",
            "For 'Make x the subject', treat y like a number and just move things away from x."
        ],
        command_words: [
            { word: "Solve", meaning: "Find the numerical value of the letter (x = ?)." },
            { word: "Simplify", meaning: "Collect like terms (make the expression shorter)." },
            { word: "Expand", meaning: "Multiply out brackets." },
            { word: "Factorise", meaning: "Put brackets back in (inverse of expand)." }
        ],
        time_allocation: "1 hour"
    },
    section_6_additional_resources: {
        resources: [
            { title: "BBC Bitesize - Algebra", type: "article", description: "Clear guides on simplifying and solving." },
            { title: "CorbettMaths - Solving Equations", type: "video", description: "Video walkthrough of solving linear equations." }
        ],
        revision_checklist: [
            "I can simplify 3a + 2b - a.",
            "I can solve 2x + 5 = 15.",
            "I can expand 3(x + 5).",
            "I can expand (x + 2)(x + 3).",
            "I can factorise 6x + 9."
        ]
    },
    section_7_assessment_answers: {
        answers: [
            {
                model_answer: "Q: Solve 3(x - 2) = 12\n\nMethod 1:\n3x - 6 = 12 (Expand)\n3x = 18 (Add 6)\nx = 6 (Divide by 3)\n\nAnswer: x = 6",
                mark_breakdown: ["1 mark for expansion or division first step", "1 mark for correct answer"],
                examiner_tip: "Either expanding first OR dividing first is acceptable."
            }
        ],
        grade_boundaries: {
            grade_4: "Basic Solving",
            grade_6: "Quadratics",
            grade_8: "Algebraic Fractions"
        }
    }
};

fs.writeFileSync(FILE_PATH, JSON.stringify(DEEP_CONTENT, null, 2));
console.log("✅ Deep content update complete for: Algebra Notation");
