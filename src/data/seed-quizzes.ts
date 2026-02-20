import { Quiz } from "@/types";
import { SEED_QUIZZES_EXTENDED } from "./seed-quizzes-extended";
import { SEED_QUIZZES_FRENCH_EXTENDED } from "./seed-quizzes-french-extended";
import { SEED_QUIZZES_RELIGIOUS_STUDIES_EXTENDED } from "./seed-quizzes-religious-studies-extended";
import { SEED_QUIZZES_GEOGRAPHY_EXTENDED } from "./seed-quizzes-geography-extended";
import { SEED_QUIZZES_COMPUTER_SCIENCE_EXTENDED } from "./seed-quizzes-computer-science-extended";

export const SEED_QUIZZES: Quiz[] = [
    // Maths Quiz 1 — Number Structure (Extended)
    {
        id: "quiz_maths_number_1",
        title: "Number Structure & Calculation Quiz — Foundation",
        topic_reference: "edexcel_maths_number_structure",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qm1", question: "What is 3/5 + 1/4?", type: "mcq", options: ["4/9", "17/20", "4/20", "7/10"], correct_answer: "17/20", explanation: "3/5 = 12/20, 1/4 = 5/20, so 12/20 + 5/20 = 17/20", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm2", question: "Evaluate: 2 + 3 × 4 - 1", type: "mcq", options: ["19", "13", "20", "16"], correct_answer: "13", explanation: "BIDMAS: 3×4=12, then 2+12-1=13", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm3", question: "What is the reciprocal of 4?", type: "mcq", options: ["4", "-4", "1/4", "0.4"], correct_answer: "1/4", explanation: "Reciprocal = 1 ÷ the number = 1/4", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm4", question: "Calculate 2/3 × 3/4", type: "short_answer", correct_answer: "1/2", explanation: "2/3 × 3/4 = 6/12 = 1/2", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm5", question: "What is 5² + 3²?", type: "mcq", options: ["34", "64", "16", "25"], correct_answer: "34", explanation: "5²=25, 3²=9, 25+9=34", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm6", question: "Order from smallest to largest: 0.6, 3/5, 7/10", type: "short_answer", correct_answer: "0.6, 3/5, 7/10 (or 3/5=0.6, 7/10)", explanation: "Convert: 3/5=0.6, 0.6=0.6, 7/10=0.7. So: 0.6=3/5 < 7/10", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm7", question: "What is 4 ÷ 2 × 3?", type: "mcq", options: ["2", "4", "6", "12"], correct_answer: "6", explanation: "Left to right: 4÷2=2, then 2×3=6", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm8", question: "Round 4.73 to 1 decimal place", type: "short_answer", correct_answer: "4.7", explanation: "Look at second decimal: 3 < 5, so round down", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm9", question: "Calculate 1/4 - 1/8", type: "short_answer", correct_answer: "1/8", explanation: "1/4 = 2/8, so 2/8 - 1/8 = 1/8", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" },
            { id: "qm10", question: "What is -5 + 3 - (-2)?", type: "mcq", options: ["-4", "0", "1", "-10"], correct_answer: "0", explanation: "-5 + 3 = -2, then -2 - (-2) = -2 + 2 = 0", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_number_structure" }
        ],
        time_limit: 20, passing_score: 70, total_marks: 13, difficulty: "foundation"
    },

    // Maths Quiz 1B — Number Structure (Higher)
    {
        id: "quiz_maths_number_1_higher",
        title: "Number Structure — Higher Tier",
        topic_reference: "edexcel_maths_number_structure",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qmh1", question: "Evaluate 4⁻¹", type: "short_answer", correct_answer: "1/4 or 0.25", explanation: "4⁻¹ = 1/4¹ = 1/4 = 0.25", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh2", question: "Calculate (1/2)³", type: "mcq", options: ["3/2", "1/8", "1/6", "3/8"], correct_answer: "1/8", explanation: "(1/2)³ = 1³/2³ = 1/8", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh3", question: "Evaluate: (5+3) × 2² - 4", type: "short_answer", correct_answer: "28", explanation: "Brackets: 5+3=8. Indices: 2²=4. Multiply: 8×4=32. Subtract: 32-4=28", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh4", question: "Write 0.125 as a fraction in simplest form", type: "short_answer", correct_answer: "1/8", explanation: "0.125 = 125/1000 = 1/8 (divide by 125)", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh5", question: "Calculate: 3⁻² in decimal form", type: "short_answer", correct_answer: "0.111... or 1/9", explanation: "3⁻² = 1/3² = 1/9 ≈ 0.111", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh6", question: "What is 2 + 6 ÷ 2 - 1?", type: "mcq", options: ["4", "6", "3", "5"], correct_answer: "6", explanation: "BIDMAS: 6÷2=3, then 2+3-1=4... wait: 2+3=5, 5-1=4... Let me recalc: 6/2=3, 2+3-1=4", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh7", question: "Round 0.00456 to 2 significant figures", type: "short_answer", correct_answer: "0.0046", explanation: "SF starts from first non-zero digit: 4 and 5 are first two SF", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh8", question: "Write 58,000 in standard form", type: "short_answer", correct_answer: "5.8 × 10⁴", explanation: "Move decimal 4 places left", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh9", question: "Calculate 5 - 2 × (3 + 2)²", type: "short_answer", correct_answer: "-45", explanation: "Brackets: 3+2=5. Indices: 5²=25. Multiply: 2×25=50. Subtract: 5-50=-45", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" },
            { id: "qmh10", question: "What is √(16/25)?", type: "mcq", options: ["4/5", "8/5", "2/5", "16/5"], correct_answer: "4/5", explanation: "√16=4, √25=5, so √(16/25) = 4/5", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_number_structure" }
        ],
        time_limit: 20, passing_score: 70, total_marks: 16, difficulty: "higher"
    },

    // Maths Quiz 2 — Algebra Basics
    {
        id: "quiz_maths_algebra_1",
        title: "Algebra Basics Quiz",
        topic_reference: "edexcel_maths_algebra_basics",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qalg1", question: "Simplify: 2x + 5x", type: "short_answer", correct_answer: "7x", explanation: "Add the coefficients: 2 + 5 = 7", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg2", question: "Simplify: 3x + 2y - x + 4y", type: "short_answer", correct_answer: "2x + 6y", explanation: "x terms: 3x - x = 2x. y terms: 2y + 4y = 6y", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg3", question: "Expand: 3(2x + 5)", type: "short_answer", correct_answer: "6x + 15", explanation: "3 × 2x = 6x, 3 × 5 = 15", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg4", question: "Factorise: 8x + 12", type: "short_answer", correct_answer: "4(2x + 3)", explanation: "HCF of 8 and 12 is 4", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg5", question: "Solve: x + 5 = 12", type: "short_answer", correct_answer: "7", explanation: "x = 12 - 5 = 7", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg6", question: "Solve: 3x = 21", type: "mcq", options: ["7", "18", "24", "3"], correct_answer: "7", explanation: "x = 21 ÷ 3 = 7", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg7", question: "Expand and simplify: (x + 2)(x + 3)", type: "short_answer", correct_answer: "x² + 5x + 6", explanation: "FOIL: x×x=x², x×3+2×x=5x, 2×3=6", marks: 3, difficulty: "higher", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg8", question: "Factorise: x² + 7x + 12", type: "short_answer", correct_answer: "(x + 3)(x + 4)", explanation: "Find two numbers that multiply to 12 and add to 7: 3 and 4", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg9", question: "Factorise: x² - 25", type: "short_answer", correct_answer: "(x + 5)(x - 5) or (x-5)(x+5)", explanation: "Difference of two squares: a² - b² = (a+b)(a-b)", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg10", question: "Solve: 2x + 3 = 11", type: "short_answer", correct_answer: "4", explanation: "2x = 11 - 3 = 8, so x = 4", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg11", question: "If y = 2x + 5, find y when x = 3", type: "short_answer", correct_answer: "11", explanation: "y = 2(3) + 5 = 6 + 5 = 11", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" },
            { id: "qalg12", question: "Expand: -2(x - 3)", type: "short_answer", correct_answer: "-2x + 6", explanation: "-2 × x = -2x, -2 × -3 = +6", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_algebra_basics" }
        ],
        time_limit: 25, passing_score: 70, total_marks: 21, difficulty: "mixed"
    },

    // Maths Quiz 3 — Geometry & Angles
    {
        id: "quiz_maths_geometry_1",
        title: "Geometry & Angles Quiz",
        topic_reference: "edexcel_maths_geometry_angles",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qgeo1", question: "What do angles on a straight line add up to?", type: "short_answer", correct_answer: "180", explanation: "Angles on a straight line sum to 180 degrees", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo2", question: "What do angles around a point add up to?", type: "short_answer", correct_answer: "360", explanation: "Angles around a point sum to 360 degrees", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo3", question: "Find the size of angle x in an equilateral triangle", type: "short_answer", correct_answer: "60", explanation: "180 ÷ 3 = 60 degrees (all angles equal)", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo4", question: "Find angle x. [Parallel lines with transversal, alternate angle marked as 65°]", type: "short_answer", correct_answer: "65", explanation: "Alternate angles are equal when lines are parallel", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo5", question: "What is the sum of interior angles in a quadrilateral?", type: "mcq", options: ["180°", "270°", "360°", "720°"], correct_answer: "360°", explanation: "(4-2) × 180 = 360 degrees", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo6", question: "Calculate one interior angle of a regular pentagon", type: "short_answer", correct_answer: "108", explanation: "Sum = (5-2) × 180 = 540, one angle = 540 ÷ 5 = 108°", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo7", question: "The interior angle of a regular polygon is 162°. How many sides?", type: "calculation", correct_answer: "20", explanation: "Exterior = 180 - 162 = 18°. Number of sides = 360 ÷ 18 = 20", marks: 3, difficulty: "higher", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo8", question: "What are vertically opposite angles?", type: "short_answer", correct_answer: "Equal / the same", explanation: "When two lines cross, the angles opposite each other are equal", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo9", question: "Co-interior angles on parallel lines add to...", type: "short_answer", correct_answer: "180", explanation: "Also called allied or same-side interior angles", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_geometry_angles" },
            { id: "qgeo10", question: "Calculate the exterior angle of a regular hexagon", type: "short_answer", correct_answer: "60", explanation: "360 ÷ 6 = 60 degrees (or: interior = 120, 180-120=60)", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_geometry_angles" }
        ],
        time_limit: 20, passing_score: 70, total_marks: 15, difficulty: "mixed"
    },

    // Maths Quiz 4 — Ratios & Proportion
    {
        id: "quiz_maths_ratio_proportion_1",
        title: "Ratios & Proportion Quiz",
        topic_reference: "edexcel_maths_ratio_proportion",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qratio1", question: "Simplify the ratio 12:18", type: "short_answer", correct_answer: "2:3", explanation: "HCF is 6, so 12÷6:18÷6 = 2:3", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio2", question: "Divide £60 in the ratio 1:2", type: "short_answer", correct_answer: "£20 and £40", explanation: "3 parts total, £60÷3=£20 per part. 1 part=£20, 2 parts=£40", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio3", question: "Share 35 in the ratio 3:4", type: "short_answer", correct_answer: "15 and 20", explanation: "7 parts = 35, so 1 part = 5. 3 parts = 15, 4 parts = 20", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio4", question: "If y is directly proportional to x, and y=10 when x=2, find y when x=5", type: "short_answer", correct_answer: "25", explanation: "y = kx, 10 = 2k, so k=5. When x=5: y=5×5=25", marks: 3, difficulty: "foundation", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio5", question: "If y is inversely proportional to x, and y=5 when x=4, find y when x=10", type: "calculation", correct_answer: "2", explanation: "y = k/x, 5 = k/4, k=20. When x=10: y=20/10=2", marks: 3, difficulty: "higher", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio6", question: "Write the ratio 5:20:10 in simplest form", type: "short_answer", correct_answer: "1:4:2", explanation: "HCF of 5, 20, 10 is 5", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio7", question: "A recipe uses flour and butter in ratio 3:1. If 600g flour is used, how much butter?", type: "short_answer", correct_answer: "200", explanation: "3 parts = 600g, so 1 part = 200g. Butter = 1 part = 200g", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio8", question: "If a car travels 150 miles in 3 hours, what's the speed?", type: "short_answer", correct_answer: "50 mph", explanation: "Speed = Distance ÷ Time = 150 ÷ 3 = 50 mph", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio9", question: "John and Sarah share £264 in ratio 5:7. How much does Sarah get?", type: "short_answer", correct_answer: "154", explanation: "Total parts = 12, one part = £22, Sarah = 7 × £22 = £154", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_ratio_proportion" },
            { id: "qratio10", question: "A map scale is 1:50,000. If a distance is 4cm on the map, what's the actual distance in km?", type: "calculation", correct_answer: "2", explanation: "4cm × 50,000 = 200,000cm = 2km", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_ratio_proportion" }
        ],
        time_limit: 20, passing_score: 70, total_marks: 19, difficulty: "mixed"
    },

    // Maths Quiz 5 — Probability
    {
        id: "quiz_maths_probability_1",
        title: "Probability Quiz",
        topic_reference: "edexcel_maths_probability",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qprob1", question: "A die is rolled. What is P(rolling a 2)?", type: "mcq", options: ["1/6", "1/2", "2/6", "5/6"], correct_answer: "1/6", explanation: "One favorable outcome out of six possible", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_probability" },
            { id: "qprob2", question: "A coin is flipped twice. Find P(two heads)", type: "short_answer", correct_answer: "1/4", explanation: "P(H) × P(H) = 1/2 × 1/2 = 1/4", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_probability" },
            { id: "qprob3", question: "A bag has 5 red and 3 blue balls. What is P(drawing red)?", type: "short_answer", correct_answer: "5/8", explanation: "5 red out of 8 total", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_probability" },
            { id: "qprob4", question: "What is P(not rolling a 6 on a die)?", type: "short_answer", correct_answer: "5/6", explanation: "5 ways to not roll a 6 out of 6 possible", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_probability" },
            { id: "qprob5", question: "A spinner is divided equally into 4 parts (red, blue, green, yellow). What is P(blue)?", type: "mcq", options: ["1/2", "1/4", "1/3", "2/4"], correct_answer: "1/4", explanation: "Equal division into 4 parts", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_probability" },
            { id: "qprob6", question: "A spinner with blue and red equally likely is spun. A coin is flipped. Find P(blue and heads)", type: "short_answer", correct_answer: "1/4", explanation: "1/2 × 1/2 = 1/4 (independent events)", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_probability" },
            { id: "qprob7", question: "A bag has 4 red and 6 blue balls. Two are drawn without replacement. Find P(both red)", type: "calculation", correct_answer: "2/15", explanation: "4/10 × 3/9 = 12/90 = 2/15", marks: 3, difficulty: "higher", topic_reference: "edexcel_maths_probability" },
            { id: "qprob8", question: "In 100 coin flips, heads came up 52 times. What is the relative frequency of heads?", type: "short_answer", correct_answer: "0.52 or 52/100 or 13/25", explanation: "Relative frequency = number of successes / total trials", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_probability" },
            { id: "qprob9", question: "Two dice are rolled. What is P(sum of 7)?", type: "calculation", correct_answer: "1/6", explanation: "6 ways to get 7 out of 36 total: 1/6=6/36", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_probability" },
            { id: "qprob10", question: "A bag has 3 red, 2 blue, 5 green balls. What is P(not blue)?", type: "short_answer", correct_answer: "8/10 or 4/5", explanation: "Not blue = red or green = 3+5 = 8 out of 10", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_probability" }
        ],
        time_limit: 20, passing_score: 70, total_marks: 16, difficulty: "mixed"
    },

    // Maths Quiz 6 — Statistics
    {
        id: "quiz_maths_statistics_1",
        title: "Statistics & Data Handling Quiz",
        topic_reference: "edexcel_maths_statistics",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qstat1", question: "What is the median of [2, 5, 3, 8, 1, 9]?", type: "short_answer", correct_answer: "4", explanation: "Sort: [1,2,3,5,8,9], median = (3+5)/2 = 4", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat2", question: "Calculate the mean of 10, 20, 30", type: "mcq", options: ["15", "20", "25", "60"], correct_answer: "20", explanation: "(10+20+30)/3 = 60/3 = 20", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat3", question: "What is the mode of [2, 3, 3, 5, 3, 8]?", type: "short_answer", correct_answer: "3", explanation: "3 appears most frequently (3 times)", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat4", question: "Find the range of: 12, 4, 8, 15, 3", type: "short_answer", correct_answer: "12", explanation: "Range = Max - Min = 15 - 3 = 12", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat5", question: "A pie chart shows 25% red. If there are 200 items total, how many degrees is red?", type: "calculation", correct_answer: "90", explanation: "25% of 360° = 0.25 × 360 = 90°", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat6", question: "What is the mean of: 5, 7, 3, 7, 9?", type: "short_answer", correct_answer: "6.2", explanation: "(5+7+3+7+9)/5 = 31/5 = 6.2", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat7", question: "Data: 1, 2, 2, 3, 3, 3, 4. What is the median?", type: "short_answer", correct_answer: "3", explanation: "7 values, median is 4th value = 3", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat8", question: "In a pie chart, Blue sector is 120°. What percentage is blue?", type: "short_answer", correct_answer: "33.3% or 33⅓% or 1/3", explanation: "(120/360) × 100 = 33.3%", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat9", question: "Which average is best affected by outliers?", type: "mcq", options: ["Mean", "Median", "Mode", "Range"], correct_answer: "Mean", explanation: "Extreme values pull the mean away from the majority", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_statistics" },
            { id: "qstat10", question: "A grouped frequency table has class 0-10 with frequency 5. What is the class midpoint?", type: "short_answer", correct_answer: "5", explanation: "(0+10)/2 = 5", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_statistics" }
        ],
        time_limit: 20, passing_score: 70, total_marks: 15, difficulty: "mixed"
    },
    // Science Quiz 1
    {
        id: "quiz_science_cells_1",
        title: "Cell Structure & Function Quiz",
        topic_reference: "aqa_science_cell_biology",
        subject: "combined_science",
        exam_board: "aqa",
        questions: [
            { id: "qs1", question: "Where does aerobic respiration take place?", type: "mcq", options: ["Nucleus", "Ribosome", "Mitochondria", "Cell membrane"], correct_answer: "Mitochondria", explanation: "Mitochondria are the site of aerobic respiration", marks: 1, difficulty: "foundation", topic_reference: "aqa_science_cell_biology" },
            { id: "qs2", question: "Which cell structure controls what enters and leaves the cell?", type: "mcq", options: ["Cell wall", "Cytoplasm", "Cell membrane", "Nucleus"], correct_answer: "Cell membrane", explanation: "The cell membrane is semi-permeable", marks: 1, difficulty: "foundation", topic_reference: "aqa_science_cell_biology" },
            { id: "qs3", question: "Do plant cells have mitochondria?", type: "mcq", options: ["Yes", "No", "Only in roots", "Only in leaves"], correct_answer: "Yes", explanation: "Both plant and animal cells have mitochondria — plants still need respiration!", marks: 1, difficulty: "foundation", topic_reference: "aqa_science_cell_biology" },
            { id: "qs4", question: "Name the structures found in plant cells but NOT in animal cells", type: "short_answer", correct_answer: "Cell wall, chloroplasts, permanent vacuole", explanation: "These three structures are unique to plant cells", marks: 3, difficulty: "foundation", topic_reference: "aqa_science_cell_biology" },
            { id: "qs5", question: "What is the function of ribosomes?", type: "mcq", options: ["Energy production", "Protein synthesis", "Water storage", "Photosynthesis"], correct_answer: "Protein synthesis", explanation: "Ribosomes are the site of protein synthesis in both eukaryotic and prokaryotic cells", marks: 1, difficulty: "foundation", topic_reference: "aqa_science_cell_biology" },
            { id: "qs6", question: "A cell image is 40mm. Magnification is ×800. What is the actual size in μm?", type: "calculation", correct_answer: "50", explanation: "A=I÷M = 40÷800 = 0.05mm = 50μm", marks: 3, difficulty: "higher", topic_reference: "aqa_science_cell_biology" },
            { id: "qs7", question: "Which type of cell does NOT have a true nucleus?", type: "mcq", options: ["Animal", "Plant", "Prokaryotic", "Fungal"], correct_answer: "Prokaryotic", explanation: "Prokaryotic cells (bacteria) have no true nucleus — DNA floats freely", marks: 1, difficulty: "foundation", topic_reference: "aqa_science_cell_biology" },
            { id: "qs8", question: "What magnification formula should you use?", type: "mcq", options: ["M = A × I", "M = I ÷ A", "M = A ÷ I", "M = I + A"], correct_answer: "M = I ÷ A", explanation: "Magnification = Image size ÷ Actual size", marks: 1, difficulty: "foundation", topic_reference: "aqa_science_cell_biology" },
            { id: "qs9", question: "What is the approximate size range of eukaryotic cells?", type: "mcq", options: ["0.1-1 μm", "1-5 μm", "10-100 μm", "1-10 mm"], correct_answer: "10-100 μm", explanation: "Eukaryotic cells are typically 10-100μm; prokaryotic cells are smaller at 1-5μm", marks: 1, difficulty: "foundation", topic_reference: "aqa_science_cell_biology" },
            { id: "qs10", question: "What do prokaryotic cells have instead of a nucleus?", type: "short_answer", correct_answer: "A single loop of DNA (and possibly plasmids)", explanation: "Prokaryotic DNA is a single circular loop floating freely in the cytoplasm", marks: 2, difficulty: "higher", topic_reference: "aqa_science_cell_biology" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 15, difficulty: "mixed"
    },
    // English Lit Quiz
    {
        id: "quiz_eng_lit_macbeth_1",
        title: "Macbeth — Lady Macbeth Quiz",
        topic_reference: "aqa_english_lit_macbeth",
        subject: "english_literature",
        exam_board: "aqa",
        questions: [
            { id: "qe1", question: "In which act does Lady Macbeth first appear?", type: "mcq", options: ["Act 1", "Act 2", "Act 3", "Act 4"], correct_answer: "Act 1", explanation: "Lady Macbeth first appears in Act 1, Scene 5, reading Macbeth's letter", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_lit_macbeth" },
            { id: "qe2", question: "What does 'unsex me here' mean?", type: "mcq", options: ["Make me a man", "Remove feminine qualities", "Give me courage", "Make me invisible"], correct_answer: "Remove feminine qualities", explanation: "She asks spirits to strip her of femininity so she can be cruel enough for murder", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_lit_macbeth" },
            { id: "qe3", question: "How does Lady Macbeth manipulate Macbeth?", type: "short_answer", correct_answer: "By questioning his masculinity/manhood", explanation: "She says 'When you durst do it, then you were a man'", marks: 2, difficulty: "foundation", topic_reference: "aqa_english_lit_macbeth" },
            { id: "qe4", question: "What famous line does Lady Macbeth say while sleepwalking?", type: "short_answer", correct_answer: "Out, damned spot!", explanation: "This reveals her guilt over Duncan's murder", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_lit_macbeth" },
            { id: "qe5", question: "'A little water clears us of this deed.' This is an example of:", type: "mcq", options: ["Metaphor", "Dramatic irony", "Simile", "Alliteration"], correct_answer: "Dramatic irony", explanation: "Dramatic irony because later she cannot wash away the 'spot' of guilt", marks: 1, difficulty: "higher", topic_reference: "aqa_english_lit_macbeth" }
        ],
        time_limit: 10, passing_score: 70, total_marks: 6, difficulty: "mixed"
    },
    // Business Quiz
    {
        id: "quiz_business_market_research_1",
        title: "Market Research Quiz",
        topic_reference: "aqa_business_market_research",
        subject: "business",
        exam_board: "aqa",
        questions: [
            { id: "qb1", question: "Which of these is primary research?", type: "mcq", options: ["Reading a news article", "Surveying customers", "Using census data", "Checking competitor websites"], correct_answer: "Surveying customers", explanation: "Surveys collect new, first-hand data = primary research", marks: 1, difficulty: "foundation", topic_reference: "aqa_business_market_research" },
            { id: "qb2", question: "What is qualitative data?", type: "mcq", options: ["Numerical data", "Data about opinions and feelings", "Government statistics", "Sales figures"], correct_answer: "Data about opinions and feelings", explanation: "Qualitative = quality, opinions, reasons (words not numbers)", marks: 1, difficulty: "foundation", topic_reference: "aqa_business_market_research" },
            { id: "qb3", question: "Give one advantage of primary research", type: "short_answer", correct_answer: "Up-to-date / specific to your needs / relevant", explanation: "Primary research is collected for your specific purpose", marks: 1, difficulty: "foundation", topic_reference: "aqa_business_market_research" },
            { id: "qb4", question: "What is market segmentation?", type: "short_answer", correct_answer: "Dividing a market into groups of customers with similar characteristics/needs", explanation: "Segmentation allows targeted marketing to specific groups", marks: 2, difficulty: "foundation", topic_reference: "aqa_business_market_research" },
            { id: "qb5", question: "Which is an example of secondary research?", type: "mcq", options: ["Focus group", "Interview", "Government report", "Questionnaire"], correct_answer: "Government report", explanation: "Government reports are existing data = secondary research", marks: 1, difficulty: "foundation", topic_reference: "aqa_business_market_research" }
        ],
        time_limit: 8, passing_score: 70, total_marks: 6, difficulty: "foundation"
    },
    // French Quiz
    {
        id: "quiz_french_identity_1",
        title: "Identity & Culture — Family Quiz",
        topic_reference: "aqa_french_identity_culture",
        subject: "french",
        exam_board: "aqa",
        questions: [
            { id: "qf1", question: "What does 'ma sœur' mean?", type: "mcq", options: ["My brother", "My sister", "My mother", "My friend"], correct_answer: "My sister", explanation: "sœur = sister, ma = my (feminine)", marks: 1, difficulty: "foundation", topic_reference: "aqa_french_identity_culture" },
            { id: "qf2", question: "Translate: 'Je m'entends bien avec mon père'", type: "short_answer", correct_answer: "I get on well with my father", explanation: "s'entendre bien avec = to get on well with", marks: 2, difficulty: "foundation", topic_reference: "aqa_french_identity_culture" },
            { id: "qf3", question: "Which word means 'kind' (feminine) in French?", type: "mcq", options: ["Gentil", "Gentille", "Gentils", "Gentilles"], correct_answer: "Gentille", explanation: "Adjective agreement: gentil (m) → gentille (f)", marks: 1, difficulty: "foundation", topic_reference: "aqa_french_identity_culture" },
            { id: "qf4", question: "How do you say 'because' in French?", type: "mcq", options: ["Mais", "Cependant", "Parce que", "Donc"], correct_answer: "Parce que", explanation: "Parce que / car = because", marks: 1, difficulty: "foundation", topic_reference: "aqa_french_identity_culture" },
            { id: "qf5", question: "Write 'My best friend is funny' in French", type: "short_answer", correct_answer: "Mon meilleur ami est drôle / Ma meilleure amie est drôle", explanation: "meilleur/meilleure depends on gender of the friend", marks: 2, difficulty: "foundation", topic_reference: "aqa_french_identity_culture" }
        ],
        time_limit: 8, passing_score: 70, total_marks: 7, difficulty: "foundation"
    },
    // History Quiz
    {
        id: "quiz_history_medicine_1",
        title: "Medieval Medicine Quiz",
        topic_reference: "aqa_history_medicine",
        subject: "history",
        exam_board: "aqa",
        questions: [
            { id: "qh1", question: "What were the Four Humours?", type: "mcq", options: ["Earth, Fire, Water, Air", "Blood, Phlegm, Yellow Bile, Black Bile", "Heart, Lungs, Liver, Brain", "Hot, Cold, Wet, Dry"], correct_answer: "Blood, Phlegm, Yellow Bile, Black Bile", explanation: "Ancient theory that these 4 liquids needed to be balanced for health", marks: 1, difficulty: "foundation", topic_reference: "aqa_history_medicine" },
            { id: "qh2", question: "What was miasma?", type: "short_answer", correct_answer: "The belief that disease was caused by bad air/smells", explanation: "Miasma theory was widely held until germ theory replaced it in the 1800s", marks: 2, difficulty: "foundation", topic_reference: "aqa_history_medicine" },
            { id: "qh3", question: "Why did the Church limit medical progress?", type: "short_answer", correct_answer: "The Church promoted Galen's ideas and controlled education. Challenging Galen could be seen as heresy.", explanation: "The Church's support for Galen prevented new discoveries", marks: 3, difficulty: "foundation", topic_reference: "aqa_history_medicine" },
            { id: "qh4", question: "What was the most common medieval treatment?", type: "mcq", options: ["Surgery", "Antibiotics", "Bloodletting", "X-rays"], correct_answer: "Bloodletting", explanation: "Bloodletting was used to 'rebalance' the humours", marks: 1, difficulty: "foundation", topic_reference: "aqa_history_medicine" },
            { id: "qh5", question: "When did the Black Death hit England?", type: "mcq", options: ["1066", "1215", "1348", "1485"], correct_answer: "1348", explanation: "The Black Death reached England in 1348-1349", marks: 1, difficulty: "foundation", topic_reference: "aqa_history_medicine" }
        ],
        time_limit: 10, passing_score: 70, total_marks: 8, difficulty: "foundation"
    },
    // RE Quiz
    {
        id: "quiz_re_christianity_1",
        title: "Christianity Practices Quiz",
        topic_reference: "aqa_re_christianity_practices",
        subject: "religious_studies",
        exam_board: "aqa",
        questions: [
            { id: "qr1", question: "What is liturgical worship?", type: "mcq", options: ["Informal prayer", "Structured, formal worship following a set pattern", "Private Bible reading", "Singing hymns"], correct_answer: "Structured, formal worship following a set pattern", explanation: "Liturgical = set order of service (e.g., Catholic Mass)", marks: 1, difficulty: "foundation", topic_reference: "aqa_re_christianity_practices" },
            { id: "qr2", question: "How many sacraments do Catholics recognise?", type: "mcq", options: ["2", "3", "5", "7"], correct_answer: "7", explanation: "Catholics: 7 sacraments. Most Protestants: 2 (Baptism & Eucharist)", marks: 1, difficulty: "foundation", topic_reference: "aqa_re_christianity_practices" },
            { id: "qr3", question: "What is believers' baptism?", type: "short_answer", correct_answer: "Full immersion baptism for those old enough to make their own decision to follow Christ", explanation: "Practised by Baptist churches — individuals choose to be baptised", marks: 2, difficulty: "foundation", topic_reference: "aqa_re_christianity_practices" },
            { id: "qr4", question: "What is transubstantiation?", type: "short_answer", correct_answer: "The Catholic belief that the bread and wine literally become the body and blood of Christ during the Eucharist", explanation: "This is a key difference between Catholic and Protestant beliefs", marks: 3, difficulty: "higher", topic_reference: "aqa_re_christianity_practices" },
            { id: "qr5", question: "Name one place of Christian pilgrimage", type: "mcq", options: ["Mecca", "Lourdes", "Bodh Gaya", "Varanasi"], correct_answer: "Lourdes", explanation: "Lourdes (France) is a major Christian pilgrimage site where the Virgin Mary is believed to have appeared", marks: 1, difficulty: "foundation", topic_reference: "aqa_re_christianity_practices" }
        ],
        time_limit: 8, passing_score: 70, total_marks: 8, difficulty: "mixed"
    },
    // English Language Quiz
    {
        id: "quiz_eng_lang_paper1_1",
        title: "Paper 1 — Creative Reading & Writing Quiz",
        topic_reference: "aqa_english_lang_paper1",
        subject: "english_language",
        exam_board: "aqa",
        questions: [
            { id: "ql1", question: "How many marks is Q5 (creative writing) worth?", type: "mcq", options: ["20", "30", "40", "50"], correct_answer: "40", explanation: "Q5 is worth 40 marks — the most on the paper (24 content + 16 SPaG)", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_lang_paper1" },
            { id: "ql2", question: "What does 'inference' mean?", type: "mcq", options: ["Copying exact words", "Reading between the lines", "Summarising", "Comparing texts"], correct_answer: "Reading between the lines", explanation: "Inference = understanding implied meaning not directly stated", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_lang_paper1" },
            { id: "ql3", question: "What skill does Q3 test?", type: "mcq", options: ["Language", "Structure", "Comparison", "Creative writing"], correct_answer: "Structure", explanation: "Q3 (8 marks) asks how the writer structures the text for effect", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_lang_paper1" },
            { id: "ql4", question: "'The wind screamed through the trees.' What technique is used?", type: "mcq", options: ["Simile", "Metaphor", "Personification", "Alliteration"], correct_answer: "Personification", explanation: "Personification gives human qualities (screaming) to a non-human thing (wind)", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_lang_paper1" },
            { id: "ql5", question: "What method should you use for language analysis?", type: "short_answer", correct_answer: "What-How-Why (or similar e.g., Point-Evidence-Explain)", explanation: "What does the writer say? How? (technique + quote) Why? (effect on reader)", marks: 2, difficulty: "foundation", topic_reference: "aqa_english_lang_paper1" }
        ],
        time_limit: 8, passing_score: 70, total_marks: 6, difficulty: "foundation"
    },

    // Maths Quiz 7 — Functions & Graphs
    {
        id: "quiz_maths_functions_graphs_1",
        title: "Functions & Linear Graphs Quiz",
        topic_reference: "edexcel_maths_functions_graphs",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qfg1", question: "What is the y-intercept of y = 3x + 5?", type: "short_answer", correct_answer: "5", explanation: "y-intercept is c value when x=0", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_functions_graphs" },
            { id: "qfg2", question: "Find gradient through (0,0) and (2,6)", type: "short_answer", correct_answer: "3", explanation: "Gradient = 6/2 = 3", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_functions_graphs" },
            { id: "qfg3", question: "Equation of line: gradient 2, y-intercept 3", type: "short_answer", correct_answer: "y = 2x + 3", explanation: "y = mx + c with m=2, c=3", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_functions_graphs" },
            { id: "qfg4", question: "Gradient through (3,4) and (-1,12)", type: "calculation", correct_answer: "-2", explanation: "(12-4)/(-1-3) = 8/(-4) = -2", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_functions_graphs" },
            { id: "qfg5", question: "Line parallel to y = 2x + 1 passes (0,5). Equation?", type: "short_answer", correct_answer: "y = 2x + 5", explanation: "Parallel: same gradient, new y-intercept = 5", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_functions_graphs" },
            { id: "qfg6", question: "Gradient of y = 2x + 5?", type: "mcq", options: ["2", "5", "-2", "½"], correct_answer: "2", explanation: "Coefficient of x is gradient", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_functions_graphs" },
            { id: "qfg7", question: "Perpendicular to line gradient 3 has gradient:", type: "short_answer", correct_answer: "-1/3", explanation: "m₁ × m₂ = -1, so -1/3", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_functions_graphs" },
            { id: "qfg8", question: "What does steep gradient show?", type: "short_answer", correct_answer: "Fast rate of change", explanation: "Steeper = greater change", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_functions_graphs" }
        ],
        time_limit: 18, passing_score: 70, total_marks: 12, difficulty: "mixed"
    },

    // Maths Quiz 8 — Trigonometry  
    {
        id: "quiz_maths_trigonometry_1",
        title: "Trigonometry & Right-Angled Triangles Quiz",
        topic_reference: "edexcel_maths_trigonometry",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qtrig1", question: "What does SOH mean in SOHCAHTOA?", type: "short_answer", correct_answer: "Sin = Opposite/Hypotenuse", explanation: "SOH is the first part of mnemonic", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_trigonometry" },
            { id: "qtrig2", question: "Find angle when sin(θ) = 0.5", type: "short_answer", correct_answer: "30°", explanation: "θ = sin⁻¹(0.5) = 30°", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_trigonometry" },
            { id: "qtrig3", question: "Right triangle: opposite=7, hypotenuse=10. Find angle", type: "calculation", correct_answer: "44.4°", explanation: "sin(θ)=7/10, θ=sin⁻¹(0.7)=44.4°", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_trigonometry" },
            { id: "qtrig4", question: "Angle of elevation from point 20m away, height of tree?", type: "short_answer", correct_answer: "Use tan(35°)=height/20, height=20×tan(35°)≈14m", explanation: "tan(angle of elevation) = opposite/adjacent", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_trigonometry" },
            { id: "qtrig5", question: "In right triangle: adjacent=8, hypotenuse=15. Find angle", type: "calculation", correct_answer: "47.2°", explanation: "cos(θ)=8/15, θ=cos⁻¹(8/15)=47.2°", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_trigonometry" },
            { id: "qtrig6", question: "What's hypotenuse? (in right triangle)", type: "mcq", options: ["Longest side", "Shortest side", "Side opposite 90°", "Both A and C"], correct_answer: "Both A and C", explanation: "Hypotenuse is longest AND opposite 90° angle", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_trigonometry" },
            { id: "qtrig7", question: "CAH means?", type: "short_answer", correct_answer: "Cos = Adjacent/Hypotenuse", explanation: "CAH is part 2 of SOHCAHTOA", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_trigonometry" }
        ],
        time_limit: 18, passing_score: 70, total_marks: 11, difficulty: "mixed"
    },

    // Maths Quiz 9 — Circles
    {
        id: "quiz_maths_circles_1",
        title: "Circles: Arcs, Sectors & Theorems Quiz",
        topic_reference: "edexcel_maths_circles",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qcirc1", question: "Circumference of circle radius 4cm?", type: "short_answer", correct_answer: "8π or 25.1cm", explanation: "C = 2πr = 2π(4) = 8π ≈ 25.1cm", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_circles" },
            { id: "qcirc2", question: "Area of circle diameter 10cm?", type: "short_answer", correct_answer: "25π or 78.5cm²", explanation: "r=5, A=πr²=π(25)=25π≈78.5cm²", marks: 2, difficulty: "foundation", topic_reference: "edexcel_maths_circles" },
            { id: "qcirc3", question: "Sector radius 6cm, angle 45°. Area?", type: "calculation", correct_answer: "4.5π or 14.1cm²", explanation: "(45/360)×π×36=4.5π", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_circles" },
            { id: "qcirc4", question: "Arc length: radius 10cm, angle 120°?", type: "short_answer", correct_answer: "20π/3 or 20.9cm", explanation: "(120/360)×2π×10=20π/3", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_circles" },
            { id: "qcirc5", question: "Which is a circle theorem?", type: "mcq", options: ["Angle at center = 2 × angle at circumference", "Angle in semicircle = 90°", "Opposite angles in cyclic quad = 180°", "All of above"], correct_answer: "All of above", explanation: "All three are valid circle theorems", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_circles" },
            { id: "qcirc6", question: "Diameter = ?", type: "short_answer", correct_answer: "2 × radius or 2r", explanation: "Diameter is twice the radius", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_circles" },
            { id: "qcirc7", question: "Sector = Sector area - ? (to find segment)", type: "short_answer", correct_answer: "Triangle area", explanation: "Segment = Sector minus the triangle", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_circles" }
        ],
        time_limit: 18, passing_score: 70, total_marks: 12, difficulty: "mixed"
    },

    // Maths Quiz 10 — Transformations
    {
        id: "quiz_maths_transformations_1",
        title: "Transformations Quiz",
        topic_reference: "edexcel_maths_transformations",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qtransf1", question: "Reflect (3,2) over y-axis", type: "short_answer", correct_answer: "(-3, 2)", explanation: "y-axis reflection: (x,y)→(-x,y)", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_transformations" },
            { id: "qtransf2", question: "Translate point (2,3) by vector (1,4)", type: "short_answer", correct_answer: "(3, 7)", explanation: "(2+1, 3+4) = (3,7)", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_transformations" },
            { id: "qtransf3", question: "Reflect (1,4) over y=x", type: "short_answer", correct_answer: "(4, 1)", explanation: "Over y=x: swap coordinates", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_transformations" },
            { id: "qtransf4", question: "Rotate (1,0) by 90° CCW around origin", type: "short_answer", correct_answer: "(0, 1)", explanation: "90° CCW: (x,y)→(-y,x)=(0,1)", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_transformations" },
            { id: "qtransf5", question: "Enlarge (2, 4) by scale factor 3 from origin", type: "short_answer", correct_answer: "(6, 12)", explanation: "Multiply by 3: (6, 12)", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_transformations" },
            { id: "qtransf6", question: "Enlarge from (1,1), vertex (3,3), scale factor 2", type: "calculation", correct_answer: "(5, 5)", explanation: "From center (1,1): move (2,2), scale by 2 to get (4,4), new point (1+4,1+4)=(5,5)", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_transformations" },
            { id: "qtransf7", question: "Negative scale factor means...", type: "short_answer", correct_answer: "Shape inverted on opposite side of center", explanation: "Scale factor -1 flips the shape", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_transformations" },
            { id: "qtransf8", question: "Area scales by k². If scale factor 2, area ×?", type: "short_answer", correct_answer: "4", explanation: "2² = 4", marks: 1, difficulty: "foundation", topic_reference: "edexcel_maths_transformations" }
        ],
        time_limit: 18, passing_score: 70, total_marks: 10, difficulty: "mixed"
    },

    // Maths Quiz 11 — Quadratics
    {
        id: "quiz_maths_quadratics_1",
        title: "Quadratic Equations Quiz",
        topic_reference: "edexcel_maths_quadratics",
        subject: "maths",
        exam_board: "edexcel",
        questions: [
            { id: "qqd1", question: "Solve x² + 5x + 6 = 0", type: "short_answer", correct_answer: "x = -2 or x = -3", explanation: "(x+2)(x+3)=0", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_quadratics" },
            { id: "qqd2", question: "What is discriminant?", type: "short_answer", correct_answer: "b² - 4ac", explanation: "Determines number of solutions", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_quadratics" },
            { id: "qqd3", question: "If discriminant > 0, how many real solutions?", type: "short_answer", correct_answer: "2 (two)", explanation: "Two distinct real solutions", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_quadratics" },
            { id: "qqd4", question: "Solve 2x² - 5x - 3 = 0 (quadratic formula)", type: "calculation", correct_answer: "x = 3 or x = -0.5", explanation: "a=2, b=-5, c=-3, Δ=49, x=(5±7)/4", marks: 3, difficulty: "higher", topic_reference: "edexcel_maths_quadratics" },
            { id: "qqd5", question: "Complete square: x² + 6x + 7", type: "short_answer", correct_answer: "(x+3)² - 2", explanation: "(x+3)²-9+7=(x+3)²-2", marks: 2, difficulty: "higher", topic_reference: "edexcel_maths_quadratics" },
            { id: "qqd6", question: "Vertex of (x+3)² - 2 is at:", type: "short_answer", correct_answer: "(-3, -2)", explanation: "Completed square form: a(x+p)²+q gives vertex (-p,q)", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_quadratics" },
            { id: "qqd7", question: "If a > 0, parabola opens...", type: "short_answer", correct_answer: "Upward / upwards", explanation: "Positive coefficient means U-shape", marks: 1, difficulty: "higher", topic_reference: "edexcel_maths_quadratics" }
        ],
        time_limit: 20, passing_score: 70, total_marks: 12, difficulty: "higher"
    },
    ...SEED_QUIZZES_EXTENDED,
    ...SEED_QUIZZES_FRENCH_EXTENDED,
    ...SEED_QUIZZES_RELIGIOUS_STUDIES_EXTENDED,
    ...SEED_QUIZZES_GEOGRAPHY_EXTENDED,
    ...SEED_QUIZZES_COMPUTER_SCIENCE_EXTENDED
];
