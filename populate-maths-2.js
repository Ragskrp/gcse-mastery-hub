
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
// MATHS CONTINUED (Geometry, Stats, etc.)
// ==========================================

const MATHS_CONTENT = [
    {
        id: "edexcel_maths_geometry_angles.json",
        content: {
            section_1_key_concepts: {
                overview: "Geometry is the study of shapes, sizes, and relative positions of figures. This topic covers the properties of angles, parallel lines, triangles and polygons.",
                learning_objectives: [
                    "Recall and use properties of angles at a point, on a straight line, and vertically opposite",
                    "Understand and use alternate, corresponding and co-interior angles on parallel lines",
                    "Derive and use the sum of angles in a triangle and a quadrilateral",
                    "Calculate interior and exterior angles of polygons"
                ],
                key_terms: [
                    { term: "Perpendicular", definition: "Lines meeting at 90 degrees", importance: "Defines right angles" },
                    { term: "Parallel", definition: "Lines that never meet and are always the same distance apart", importance: "Angle rules rely on this" },
                    { term: "Polygon", definition: "A 2D shape with straight sides", importance: "Includes triangles, squares, pentagons etc." }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Angle Facts",
                    content: "Angles on a straight line add to 180°. Angles around a point add to 360°. Vertically opposite angles are equal.",
                    key_points: ["Straight line = 180°", "Full turn = 360°", "Vertically opposite = Equal"]
                },
                {
                    heading: "Parallel Lines",
                    content: "When a line (transversal) crosses parallel lines: Corresponding angles (F-shape) are equal. Alternate angles (Z-shape) are equal. Co-interior angles (C-shape) add to 180°.",
                    key_points: ["F = Equal", "Z = Equal", "C = 180°"]
                }
            ],
            section_3_worked_examples: [
                {
                    question: "Find the size of angle x in an isosceles triangle with two angles of 70°.",
                    step_by_step: [
                        "Angles in a triangle add to 180°.",
                        "Method 1: Two equal angles are 70°. 180 - 70 - 70 = 40°. x = 40°.",
                        "Method 2: One angle is 70°, so the other two are equal. (180 - 70) / 2 = 55°. x = 55°.",
                        "Usually the question specifies 'base angles' or provides a diagram."
                    ],
                    answer: "40° or 55° depending on diagram",
                    common_mistakes: ["Assuming all triangles are isosceles"]
                }
            ],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "Angles on a straight line add up to...", marks: 1, options: ["180°", "360°", "90°"], correct_answer: "180°", explanation: "Half turn.", difficulty: "foundation" },
                    { id: "q2", question: "What is the sum of angles in a quadrilateral?", marks: 1, options: ["360°", "180°", "540°"], correct_answer: "360°", explanation: "Any quadrilateral can be split into two triangles.", difficulty: "foundation" }
                ],
                higher: [
                    { id: "q3", question: "The exterior angle of a regular polygon is 45°. How many sides does it have?", marks: 2, options: ["8", "10", "12"], correct_answer: "8", explanation: "360 ÷ 45 = 8 sides.", difficulty: "higher" },
                    { id: "q4", question: "Find x if alternate angles are 2x + 10 and 70.", marks: 2, options: ["30", "40", "60"], correct_answer: "30", explanation: "Alternate angles are equal. 2x + 10 = 70. 2x = 60. x = 30.", difficulty: "higher" }
                ]
            }
        }
    },
    {
        id: "edexcel_maths_algebra_graphs.json",
        content: {
            section_1_key_concepts: {
                overview: "Graphs allow us to visualise algebraic relationships. This topic covers plotting coordinates, straight line graphs (y=mx+c), and interpreting real-life graphs.",
                learning_objectives: [
                    "Plot coordinates in all four quadrants",
                    "Recognise, sketch and interpret graphs of linear functions",
                    "Use the form y = mx + c to identify parallel lines",
                    "Find the equation of a line through two points"
                ],
                key_terms: [
                    { term: "Gradient", definition: "The steepness of a line (m)", importance: "Rise over run" },
                    { term: "Y-intercept", definition: "Where the line crosses the y-axis (c)", importance: "Starting value" },
                    { term: "Origin", definition: "The point (0,0)", importance: "Intersection of axes" }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Linear Graphs (y = mx + c)",
                    content: "This is the equation of a straight line. 'm' is the gradient (steepness). 'c' is the y-intercept (where it cuts the y-axis). Positive 'm' goes uphill, negative 'm' goes downhill.",
                    key_points: ["m = change in y / change in x", "Parallel lines have the same gradient"]
                }
            ],
            section_3_worked_examples: [],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "What is the gradient of y = 3x + 2?", marks: 1, options: ["3", "2", "3x"], correct_answer: "3", explanation: "In y=mx+c, m is the coefficient of x.", difficulty: "foundation" }
                ],
                higher: []
            }
        }
    },
    {
        id: "edexcel_maths_probability.json",
        content: {
            section_1_key_concepts: {
                overview: "Probability is the maths of chance and uncertainty. Essential for statistics and decision making.",
                learning_objectives: [
                    "Understand probability scale from 0 to 1",
                    "Calculate theoretical probabilities",
                    "Use tree diagrams for combined events"
                ],
                key_terms: [
                    { term: "Event", definition: "Something that happens (e.g. flipping a coin)", importance: "Outcome" },
                    { term: "Mutually Exclusive", definition: "Events that cannot happen at the same time", importance: "Probabilities add to 1" }
                ]
            },
            section_2_detailed_explanations: [
                {
                    heading: "Calculating Probability",
                    content: "P(Event) = Number of successful outcomes / Total number of possible outcomes. Probabilities can be fractions, decimals or percentages.",
                    key_points: ["Total probability = 1", "P(Not A) = 1 - P(A)"]
                }
            ],
            section_3_worked_examples: [
                {
                    question: "A bag has 3 red and 7 blue balls. P(Red)?",
                    step_by_step: ["Total balls = 3 + 7 = 10", "Red balls = 3", "P(Red) = 3/10"],
                    answer: "3/10 or 0.3",
                    common_mistakes: ["Using ratios (3:7) instead of fractions"]
                }
            ],
            section_4_practice_questions: {
                foundation: [
                    { id: "q1", question: "Probability of rolling a 7 on a dice?", marks: 1, options: ["0", "1/6", "1/7"], correct_answer: "0", explanation: "Impossible event.", difficulty: "foundation" }
                ],
                higher: []
            }
        }
    }
];

// Run update
console.log("🚀 Populating Maths Part 2...");
MATHS_CONTENT.forEach(item => updateTopic(item.id, item.content));

// We also want to update the manifest descriptions perhaps?
// But for now, content is key.
