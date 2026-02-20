
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'content', 'topics');

function updateTopic(filename, content) {
    const filePath = path.join(OUTPUT_DIR, filename);
    if (fs.existsSync(filePath)) {
        const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const updated = { ...existing, ...content };
        fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
        console.log(`✅ Updated: ${filename}`);
    } else {
        console.error(`❌ File not found: ${filename}`);
    }
}

const MATHS_CONTENT_3 = [
    {
        id: "edexcel_maths_ratio.json",
        content: {
            section_1_key_concepts: {
                overview: "Ratio and proportion are used to compare quantities. This topic includes sharing in a given ratio, scale factors, and direct/inverse proportion.",
                learning_objectives: [
                    "Simplify ratios to their simplest form n:1",
                    "Divide a quantity in a given ratio",
                    "Solve problems involving direct proportion using the unitary method"
                ],
                key_terms: [
                    { term: "Ratio", definition: "A comparison of two amounts", importance: "Part-to-part" },
                    { term: "Proportion", definition: "Relationship between two variables", importance: "Scaling" }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Sharing in a Ratio",
                    content: "To share an amount in a ratio (e.g. 3:2), add the parts (3+2=5). Divide the total amount by the total parts to find the value of 1 part. Multiply by the ratio parts.",
                    key_points: ["Add parts", "Divide total", "Multiply ratio"]
                }
            ],
            section_3_worked_examples: [
                {
                    question: "Share £50 in the ratio 2:3",
                    step_by_step: ["Total parts = 2 + 3 = 5", "50 / 5 = 10", "2 parts = 2 x 10 = £20", "3 parts = 3 x 10 = £30"],
                    answer: "£20 and £30",
                    common_mistakes: ["Dividing by 2 or 3 instead of 5"]
                }
            ],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "Simplify 10:4", marks: 1, options: ["5:2", "2:5", "2:1"], correct_answer: "5:2", explanation: "Divide both by 2.", difficulty: "foundation" },
                    { id: "q2", question: "Divide 20 in 1:4", marks: 1, options: ["5, 15", "4, 16", "2, 18"], correct_answer: "4, 16", explanation: "1+4=5. 20/5=4. 1x4=4, 4x4=16.", difficulty: "foundation" }
                ],
                higher: []
            }
        }
    },
    {
        id: "edexcel_maths_geometry_measures.json",
        content: {
            section_1_key_concepts: {
                overview: "Measures involve converting units, calculating area and volume, and scale drawings. Accuracy in formulae is key.",
                learning_objectives: [
                    "Convert metric units of length, mass and capacity",
                    "Calculate perimeter and area of rectangles, triangles and compound shapes",
                    "Calculate volume of cubes and cuboids"
                ],
                key_terms: [
                    { term: "Area", definition: "Use squared units (cm²)", importance: "2D space" },
                    { term: "Volume", definition: "Use cubed units (cm³)", importance: "3D space" }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Area Formulae",
                    content: "Rectangle: l × w. Triangle: ½ × b × h. Parallelogram: b × h (perpendicular height). Trapezium: ½(a+b)h.",
                    key_points: ["Triangle is HALF base x height", "Use perpendicular height"]
                }
            ],
            section_3_worked_examples: [],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "Area of a triangle with base 4cm and height 3cm?", marks: 1, options: ["12cm²", "6cm²", "7cm²"], correct_answer: "6cm²", explanation: "0.5 x 4 x 3 = 6.", difficulty: "foundation" }
                ],
                higher: []
            }
        }
    },
    {
        id: "edexcel_maths_statistics.json",
        content: {
            section_1_key_concepts: {
                overview: "Statistics involves collecting, analysing and interpreting data. Averages (mean, median, mode) and range are fundamental tools.",
                learning_objectives: [
                    "Calculate mean, median, mode and range",
                    "Interpret simple charts and graphs",
                    "Understand correlation and lines of best fit"
                ],
                key_terms: [
                    { term: "Mean", definition: "Average (sum / count)", importance: "Central tendency" },
                    { term: "Median", definition: "Middle value when ordered", importance: "Middle" },
                    { term: "Mode", definition: "Most common value", importance: "Common" }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Averages",
                    content: "Mean: Add all numbers, divide by how many. Median: Order numbers, find middle. Mode: Most frequent. Range: Highest - Lowest (measure of spread).",
                    key_points: ["Order data first for median", "Range is NOT an average"]
                }
            ],
            section_3_worked_examples: [
                {
                    question: "Find the median of 3, 1, 4, 1, 5",
                    step_by_step: ["Order them: 1, 1, 3, 4, 5", "Middle number is 3"],
                    answer: "3",
                    common_mistakes: ["Not ordering the numbers first"]
                }
            ],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "The mode of 2, 2, 3, 5?", marks: 1, options: ["2", "3", "5"], correct_answer: "2", explanation: "Most common.", difficulty: "foundation" }
                ],
                higher: []
            }
        }
    }
];

console.log("🚀 Populating Maths Part 3 (Final)...");
MATHS_CONTENT_3.forEach(item => updateTopic(item.id, item.content));
