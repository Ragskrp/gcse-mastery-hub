import { Topic } from "@/types";
import SEED_MATHS_COMPREHENSIVE from "./seed-topics-maths-comprehensive";
import SEED_MATHS_EXTENDED_2 from "./seed-topics-maths-extended-2";
import SEED_MATHS_EXTENDED_3 from "./seed-topics-maths-extended-3";

/**
 * COMBINED MATHS CURRICULUM
 * All comprehensive, engaging, real-world focused topics
 * 18+ topics across all tiers and topics areas
 */

// Original seed content (keep existing topics for backwards compatibility)
export const SEED_MATHS_EXTENDED_BASE: Topic[] = [
    // ========================
    // MATHS (Edexcel) - Functions & Graphs
    // ========================
    {
        id: "edexcel_maths_functions_graphs",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Functions & Linear Graphs",
        topic_number: "A2",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Functions describe relationships between variables. This topic covers notation, plotting linear graphs, and interpreting graphs. Understanding functions is essential for coordinate geometry.",
            key_terms: [
                { term: "Function", definition: "A relationship where each input (x) has exactly one output (y)", importance: "Core concept of algebra" },
                { term: "Gradient", definition: "The slope of a line (rise/run)", importance: "Determines how steep the line is" },
                { term: "y-intercept", definition: "Where the line crosses the y-axis (when x=0)", importance: "Starting point of the line" },
                { term: "Linear", definition: "A straight-line relationship (degree 1)", importance: "Simplest type of function" },
                { term: "Gradient-Intercept Form", definition: "y = mx + c (m=gradient, c=intercept)", importance: "Standard form for writing equations" }
            ],
            learning_objectives: [
                "Understand function notation f(x)",
                "Plot linear graphs from equations",
                "Calculate gradient from two points",
                "Write equations of straight lines",
                "Identify parallel and perpendicular lines",
                "Solve simultaneous equations graphically"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Function Notation & Gradient",
                content: "y = mx + c where m is gradient and c is y-intercept. Gradient = rise/run = (y₂-y₁)/(x₂-x₁). Positive gradient slopes up (left to right), negative slopes down. Parallel lines have same gradient. Perpendicular gradients multiply to -1.",
                diagram_description: "Graph showing line with gradient triangle marked (rise and run), positive and negative slope examples, parallel and perpendicular lines comparison",
                key_points: ["Gradient = rise/run", "y-intercept is where x=0", "Parallel lines: same gradient", "Perpendicular: m₁ × m₂ = -1"]
            },
            {
                heading: "Plotting Linear Graphs",
                content: "Two methods: 1) Table of values - pick x values, calculate y using equation, plot points. 2) Using gradient & intercept - start at c on y-axis, use gradient to find other points. Always use a ruler and extend line across graph.",
                diagram_description: "Coordinate grid showing plotted points, line drawn through them, gradient triangle marked, showing how to extend line",
                key_points: ["Plot at least 3 points", "Use ruler for straight line", "Extend line to show it continues", "Label axes clearly"]
            },
            {
                heading: "Interpreting Graphs",
                content: "Gradients tell stories: steep = fast change, shallow = slow change. Zero gradient = horizontal (constant). Undefined (vertical) lines are not functions. Real-world: gradient = rate of change (speed, temperature change, etc).",
                diagram_description: "Four graphs showing zero gradient, positive gradient, negative gradient, steep vs shallow examples with real-world labels (Distance-Time graphs)",
                key_points: ["Steeper gradient = faster change", "Flat line = no change", "Horizontal = constant value", "Reading graphs: find points then interpret meaning"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Find the gradient of the line through (2, 5) and (6, 13). Write the equation of the line.",
                step_by_step: [
                    "Gradient = (13-5)/(6-2) = 8/4 = 2",
                    "Using y = mx + c: 5 = 2(2) + c",
                    "5 = 4 + c, so c = 1",
                    "Equation: y = 2x + 1"
                ],
                answer: "Gradient = 2, Equation: y = 2x + 1"
            },
            {
                question: "Plot y = -x + 4 on a coordinate grid",
                step_by_step: [
                    "y-intercept: when x=0, y=4. Plot point (0,4)",
                    "Gradient is -1 (negative = slopes down)",
                    "From (0,4), go right 1, down 1 to (1,3)",
                    "From (1,3), go right 1, down 1 to (2,2)",
                    "Continue pattern and draw line through points"
                ],
                answer: "Line passes through (0,4), (1,3), (2,2), (4,0) with negative slope",
                common_mistakes: ["Forgetting that negative gradient slopes downwards", "Only plotting 2 points (need at least 3)", "Not using ruler for straight line"]
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mfg1f1", question: "What is the y-intercept of y = 3x + 5?", type: "short_answer", correct_answer: "5", explanation: "y-intercept is c value when x=0", marks: 1, difficulty: "foundation" },
                { id: "mfg1f2", question: "Find the gradient of line through (0,0) and (2,6)", type: "short_answer", correct_answer: "3", explanation: "Gradient = 6/2 = 3", marks: 1, difficulty: "foundation" },
                { id: "mfg1f3", question: "Write equation of line with gradient 2 and y-intercept 3", type: "short_answer", correct_answer: "y = 2x + 3", explanation: "y = mx + c with m=2, c=3", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "mfg1h1", question: "Find gradient of line through (3,4) and (-1,12)", type: "short_answer", correct_answer: "-2", explanation: "(12-4)/(-1-3) = 8/(-4) = -2", marks: 2, difficulty: "higher" },
                { id: "mfg1h2", question: "Line parallel to y = 2x + 1 passes through (0,5). Write its equation", type: "short_answer", correct_answer: "y = 2x + 5", explanation: "Parallel lines have same gradient, y-intercept = 5", marks: 2, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Plot", meaning: "Draw points and line on grid" },
                { word: "Find gradient", meaning: "Calculate slope using formula or two points" },
                { word: "Sketch", meaning: "Draw roughly showing key features" }
            ],
            exam_tips: ["Always use a ruler when drawing lines", "Label key points clearly", "Check gradient sign (positive/negative slopes)", "Extend line to show it continues"],
            common_mistakes: ["Confusing m and c in y=mx+c", "Wrong formula for gradient", "Forgetting to label axes", "Only plotting 2 points"],
            mark_scheme_notes: ["M1 for correct method, A1 for accuracy", "Graph marks: correct points (P), straight line (L), extended (E)"],
            time_allocation: "1 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Desmos Graphing Tool", type: "interactive", url: "https://desmos.com", description: "Plot and explore linear graphs interactively" },
                { title: "Gradient Video", type: "video", description: "Visual explanation of gradient and slope" },
                { title: "Graph Plotting Practice", type: "interactive", description: "Practice plotting points and finding equations" }
            ],
            further_reading: ["Edexcel GCSE Maths Chapter 4 - Functions & Graphs"],
            revision_checklist: ["I can calculate gradient from two points", "I can write y=mx+c equations", "I can plot accurate graphs", "I understand parallel and perpendicular lines"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mfg1f1", model_answer: "5", mark_breakdown: ["1 mark for identifying y-intercept"], examiner_tip: "c value is the y-intercept" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // MATHS (Edexcel) - Trigonometry
    // ========================
    {
        id: "edexcel_maths_trigonometry",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Trigonometry & Right-Angled Triangles",
        topic_number: "G2",
        tier_level: "higher",
        section_1_key_concepts: {
            overview: "Trigonometry uses ratios to find sides and angles in right-angled triangles. Key ratios: sine, cosine, tangent. Applications: surveying, navigation, engineering.",
            key_terms: [
                { term: "Sine (sin)", definition: "Opposite/Hypotenuse", importance: "Ratio for finding sides/angles" },
                { term: "Cosine (cos)", definition: "Adjacent/Hypotenuse", importance: "Alternative ratio" },
                { term: "Tangent (tan)", definition: "Opposite/Adjacent", importance: "Ratio without hypotenuse" },
                { term: "Hypotenuse", definition: "Longest side opposite right angle", importance: "Reference side" },
                { term: "SOHCAHTOA", definition: "Mnemonic for trigonometric ratios", importance: "Easy to remember" }
            ],
            learning_objectives: [
                "Identify opposite, adjacent, hypotenuse in right triangles",
                "Use sin, cos, tan to find missing sides",
                "Use inverse functions (sin⁻¹, cos⁻¹, tan⁻¹) to find angles",
                "Solve real-world problems using trigonometry",
                "Understand angles of elevation and depression"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "SOHCAHTOA & The Ratios",
                content: "In a right-angled triangle: SOH = Sin(θ) = Opposite/Hypotenuse. CAH = Cos(θ) = Adjacent/Hypotenuse. TOA = Tan(θ) = Opposite/Adjacent. Always label sides relative to the angle you're using.",
                diagram_description: "Right-angled triangle with labeled sides (opposite, adjacent, hypotenuse), angle θ marked, SOHCAHTOA formula shown with color-coded sides",
                key_points: ["Label sides relative to angle θ", "Hypotenuse is always opposite right angle", "Choose ratio based on which sides you know", "Use calculator in degree mode"]
            },
            {
                heading: "Finding Sides & Angles",
                content: "Finding sides: Use sin/cos/tan (depending on what you know) and rearrange. Finding angles: Use inverse functions sin⁻¹, cos⁻¹, tan⁻¹. Example: If sin(θ)=0.5, then θ=sin⁻¹(0.5)=30°.",
                diagram_description: "Side-by-side examples: triangle with known side asking to find unknown, step-by-step formula rearrangement shown",
                key_points: ["Rearrange formula to find unknown", "Use inverse functions (shift+trig on calculator)", "Check angle is reasonable (0-90° for acute angles)", "Answer has correct units (degrees for angles, cm/m for lengths)"]
            },
            {
                heading: "Angles of Elevation & Depression",
                content: "Angle of elevation: angle up from horizontal. Angle of depression: angle down from horizontal. These angles are always equal (alternate angles). Draw the right triangle carefully with horizontal line.",
                diagram_description: "Observer looking up at building (angle of elevation marked), observer looking down from cliff (angle of depression marked), showing they're equal",
                key_points: ["Elevation is upward from horizontal", "Depression is downward from horizontal", "Both measured from horizontal line", "Angles equal by alternate angle theorem"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "In a right triangle, the hypotenuse is 10cm and angle θ = 35°. Find the opposite side.",
                step_by_step: [
                    "Label: Hypotenuse = 10cm, Opposite = ?, Angle = 35°",
                    "Choose ratio: sin(θ) = Opposite/Hypotenuse",
                    "Substitute: sin(35°) = Opposite/10",
                    "Rearrange: Opposite = 10 × sin(35°)",
                    "Calculate: Opposite = 10 × 0.574 = 5.74cm"
                ],
                answer: "5.74cm"
            },
            {
                question: "A ladder leans against a wall. The ladder is 5m long and makes angle 60° with ground. How high up wall does ladder reach?",
                step_by_step: [
                    "Draw diagram: ladder is hypotenuse (5m), height is opposite, angle = 60°",
                    "Use sin: sin(60°) = Height/5",
                    "Height = 5 × sin(60°) = 5 × 0.866 = 4.33m"
                ],
                answer: "4.33m",
                common_mistakes: ["Confusing opposite and adjacent", "Using wrong angle", "Calculator not in degree mode"]
            }
        ],
        section_4_practice_questions: {
            foundation: [],
            higher: [
                { id: "mtrig1h1", question: "In right triangle, opposite=7, hypotenuse=10. Find angle", type: "calculation", correct_answer: "44.4°", explanation: "sin(θ)=7/10, θ=sin⁻¹(0.7)=44.4°", marks: 2, difficulty: "higher" },
                { id: "mtrig1h2", question: "From point A, angle of elevation to top of tree = 35°. Point A is 20m from tree base. Find height", type: "calculation", correct_answer: "14.0m", explanation: "tan(35°)=height/20, height=20×tan(35°)=14.0m", marks: 3, difficulty: "higher" },
                { id: "mtrig1h3", question: "Find all angles in triangle with sides 3, 4, 5", type: "short_answer", correct_answer: "90°, 53.1°, 36.9°", explanation: "Use inverse trig: one is 90° (right angle), sin⁻¹(3/5)=36.9°, cos⁻¹(3/5)=53.1°", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Calculate", meaning: "Use trigonometry, show working" },
                { word: "Find", meaning: "Determine using appropriate ratio" }
            ],
            exam_tips: ["Always draw and label the triangle", "State which ratio you're using (SOHCAHTOA)", "Check calculator is in DEGREE mode", "Give answers to appropriate precision"],
            common_mistakes: ["Calculator in radian mode", "Wrong ratio chosen", "Forgetting to rearrange formula", "Measuring angles from wrong reference line"],
            mark_scheme_notes: ["M1 for correct ratio/formula, M1 for substitution, A1 for accuracy"],
            time_allocation: "1-2 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "SOHCAHTOA Song", type: "video", description: "Memorable song to remember trigonometric ratios" },
                { title: "Trigonometry Calculator", type: "interactive", description: "Input values to find sides or angles" },
                { title: "Real-World Trigonometry", type: "article", description: "Applications in surveying, engineering, navigation" }
            ],
            further_reading: ["Edexcel GCSE Maths Higher Chapter 8 - Trigonometry"],
            revision_checklist: ["I know SOHCAHTOA", "I can identify opposite, adjacent, hypotenuse", "I can find sides using trig", "I can find angles using inverse trig"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mtrig1h1", model_answer: "44.4°", mark_breakdown: ["1 mark for ratio selection", "1 mark for correct calculation"], examiner_tip: "Show SOHCAHTOA selection" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // MATHS (Edexcel) - Circles
    // ========================
    {
        id: "edexcel_maths_circles",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Circles: Arcs, Sectors & Theorems",
        topic_number: "G3",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Circles have special properties. This topic covers terminology (radius, diameter, arc, sector, chord), calculations (area, circumference, arc length), and circle theorems.",
            key_terms: [
                { term: "Radius", definition: "Distance from center to edge (r)", importance: "Base measurement" },
                { term: "Diameter", definition: "Straight line through center (d = 2r)", importance: "Longest chord" },
                { term: "Arc", definition: "Part of the circumference", importance: "Segment of circle outline" },
                { term: "Sector", definition: "Pie-slice shaped region (angle + two radii)", importance: "Used in calculations" },
                { term: "Chord", definition: "Straight line joining two points on circle", importance: "Used in theorems" }
            ],
            learning_objectives: [
                "Calculate circumference and area of circles",
                "Find arc length and sector area",
                "Apply circle theorems (angles, tangents, etc)",
                "Solve problems with circular segments",
                "Use circle properties in proofs"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Circumference & Area",
                content: "Circumference = 2πr or πd. Area = πr². Always use exact answers with π unless asked to round. For arcs & sectors: Arc length = (θ/360°) × 2πr. Sector area = (θ/360°) × πr².",
                diagram_description: "Circle with radius marked, diameter shown, circumference labeled; separate diagram showing sector with angle θ, arc length formula illustrated",
                key_points: ["C = 2πr (circumference)", "A = πr² (area)", "Arc length = (θ/360) × 2πr", "Sector area = (θ/360) × πr²"]
            },
            {
                heading: "Circle Theorems",
                content: "1) Angle at center is twice angle at circumference. 2) Angle in semicircle is 90°. 3) Opposite angles in cyclic quadrilateral sum to 180°. 4) Tangent perpendicular to radius. 5) Angles in same segment are equal.",
                diagram_description: "Six separate diagrams showing each theorem: angle at center vs circumference, right angle in semicircle, cyclic quadrilateral, tangent perpendicular to radius, angles in same segment",
                key_points: ["Memorize all 5 theorems", "Draw diagrams to visualize", "Theorems apply to ANY circle", "Use for angle proofs"]
            },
            {
                heading: "Segments & Compound Areas",
                content: "Segment = sector minus triangle. Compound shapes: may need to add/subtract circles or parts of circles. Always identify all the shapes involved.",
                diagram_description: "Circle with sector highlighted, triangle in center marked, segment shown (sector minus triangle); compound shape example with overlapping circles",
                key_points: ["Segment = Sector - Triangle", "Use decomposition for complex shapes", "May need Pythagoras or trig to find components"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Find the area of a sector with radius 5cm and angle 60°",
                step_by_step: [
                    "Sector area = (θ/360) × πr²",
                    "= (60/360) × π × 5²",
                    "= (1/6) × π × 25",
                    "= 25π/6 cm² (exact)",
                    "≈ 13.1 cm² (to 1 d.p.)"
                ],
                answer: "25π/6 cm² or 13.1 cm²"
            },
            {
                question: "A circle has radius 8cm. A chord is at distance 3cm from center. Find the chord length.",
                step_by_step: [
                    "Draw perpendicular from center to chord (creates right angle)",
                    "Forms right triangle: radius 8cm (hypotenuse), perpendicular distance 3cm",
                    "Use Pythagoras to find half-chord: a² + 3² = 8²",
                    "a² = 64 - 9 = 55, so a = √55",
                    "Full chord = 2√55 ≈ 14.8cm"
                ],
                answer: "2√55 cm or 14.8 cm"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mc1f1", question: "Find circumference of circle with radius 4cm", type: "short_answer", correct_answer: "8π or 25.1", explanation: "C = 2πr = 2π(4) = 8π ≈ 25.1cm", marks: 2, difficulty: "foundation" },
                { id: "mc1f2", question: "Find area of circle with diameter 10cm", type: "short_answer", correct_answer: "25π or 78.5", explanation: "r=5, A=πr²=π(25)=25π≈78.5cm²", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "mc1h1", question: "Sector: radius 6cm, angle 45°. Find sector area", type: "short_answer", correct_answer: "4.5π or 14.1", explanation: "(45/360)×π×36=4.5π", marks: 2, difficulty: "higher" },
                { id: "mc1h2", question: "Circle has radius 10cm. Angle at center 120°. Find arc length", type: "calculation", correct_answer: "20π/3 or 20.9", explanation: "(120/360)×2π×10=(1/3)×20π=20π/3", marks: 2, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Calculate", meaning: "Find exact or approximate value" },
                { word: "Prove", meaning: "Use circle theorems to justify" }
            ],
            exam_tips: ["Give exact answers with π when possible", "Draw circles for theorems", "State which theorem you're using", "Check angle is in degrees (not radians)"],
            common_mistakes: ["Confusing radius and diameter", "Using diameter instead of radius in formulas", "Forgetting to divide sector by 360", "Not showing π in exact answers"],
            mark_scheme_notes: ["M1 for formula, A1 for accuracy", "Theorem proofs: 1 mark per reason given"],
            time_allocation: "1-2 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Circle Theorems Poster", type: "article", description: "Visual summary of all 5 theorems" },
                { title: "Interactive Circle", type: "interactive", description: "Drag to change radius, watch formulas update" },
                { title: "Arc & Sector Tool", type: "interactive", description: "Calculate and visualize arcs and sectors" }
            ],
            further_reading: ["Edexcel GCSE Maths Chapter 9 - Circles"],
            revision_checklist: ["I know circumference and area formulas", "I can calculate arc length and sector area", "I know all 5 circle theorems", "I can apply theorems in proofs"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mc1f1", model_answer: "8π cm or 25.1cm", mark_breakdown: ["1 mark for formula", "1 mark for substitution"], examiner_tip: "State exact and approximate answers" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // MATHS (Edexcel) - Transformations
    // ========================
    {
        id: "edexcel_maths_transformations",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Transformations: Reflections, Rotations, Translations, Enlargements",
        topic_number: "G4",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Transformations move or resize shapes. Four types: reflection (mirror), rotation (turn), translation (slide), enlargement (resize). Understanding transformations is key to exploring symmetry.",
            key_terms: [
                { term: "Reflection", definition: "Mirror image across a mirror line", importance: "Preserves shape and size" },
                { term: "Rotation", definition: "Turn around a fixed center point", importance: "Preserves shape and size" },
                { term: "Translation", definition: "Slide in a direction (vector)", importance: "Preserves shape and size" },
                { term: "Enlargement", definition: "Resize with scale factor from center", importance: "Changes size, not shape (similar)" },
                { term: "Scale Factor", definition: "Ratio of enlargement (e.g., 2 = double size)", importance: "Determines new dimensions" }
            ],
            learning_objectives: [
                "Perform reflections over lines (x-axis, y-axis, y=x, etc)",
                "Perform rotations (90°, 180°, 270° around center)",
                "Perform translations using vector notation",
                "Perform enlargements with positive and negative scale factors",
                "Describe transformations in full"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Reflection",
                content: "Reflect shape across mirror line. Common lines: x-axis (y→-y), y-axis (x→-x), y=x (swap x and y), y=-x (swap and negate). Each point equidistant from mirror line on opposite side. Use grid to count distance from mirror.",
                diagram_description: "Four separate coordinate grids showing: reflection over x-axis, reflection over y-axis, reflection over y=x, reflection over y=-x with original and reflected shapes",
                key_points: ["Mirror line bisects perpendicular", "Each point same distance on other side", "Shape and size unchanged", "Orientation reversed (mirror image)"]
            },
            {
                heading: "Rotation",
                content: "Rotate shape around center point. Specify: angle (90°, 180°, 270°), direction (clockwise/counter-clockwise), center. 90° CCW: (x,y)→(-y,x). 180°: (x,y)→(-x,-y). 270° CCW: (x,y)→(y,-x).",
                diagram_description: "Coordinate grid showing triangle rotated 90° CCW around origin, 180° around origin, 270° around origin, 90° around different center point",
                key_points: ["State angle, direction, center", "Shape and size unchanged", "Use tracing paper or formulas", "Check with compass if center off-grid"]
            },
            {
                heading: "Translation & Enlargement",
                content: "Translation: move by vector (a, b) = right a, up b. Enlargement: scale by factor k from center. If k>1, shape gets bigger. If 0<k<1, shape gets smaller. If k<0, shape on opposite side of center AND inverted.",
                diagram_description: "Coordinate grid showing translation by vector (3,2), separate grid showing enlargement scale factor 2 from origin, scale factor -1 from origin",
                key_points: ["Translation: vector describes movement", "Enlargement k=2 means all dimensions × 2", "Negative scale factor: inverts", "Area scales by k², volume by k³"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Reflect triangle ABC with A(1,2), B(3,2), C(2,4) over the line y=x",
                step_by_step: [
                    "Reflection over y=x: swap x and y coordinates",
                    "A(1,2) → A'(2,1)",
                    "B(3,2) → B'(2,3)",
                    "C(2,4) → C'(4,2)",
                    "Plot new triangle A'B'C'"
                ],
                answer: "A'(2,1), B'(2,3), C'(4,2)"
            },
            {
                question: "Enlarge rectangle with vertices at (0,0), (2,0), (2,1), (0,1) by scale factor 3 from origin",
                step_by_step: [
                    "Scale factor 3 from origin (0,0): multiply each coordinate by 3",
                    "(0,0) × 3 = (0,0)",
                    "(2,0) × 3 = (6,0)",
                    "(2,1) × 3 = (6,3)",
                    "(0,1) × 3 = (0,3)",
                    "New rectangle: (0,0), (6,0), (6,3), (0,3)"
                ],
                answer: "(0,0), (6,0), (6,3), (0,3)",
                common_mistakes: ["Forgetting to specify center of rotation", "Confusing reflection line", "Not multiplying all coordinates by scale factor"]
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mtr1f1", question: "Reflect point (3,2) over y-axis", type: "short_answer", correct_answer: "(-3,2)", explanation: "y-axis reflection: (x,y)→(-x,y)", marks: 1, difficulty: "foundation" },
                { id: "mtr1f2", question: "Translate point (2,3) by vector (1,4)", type: "short_answer", correct_answer: "(3,7)", explanation: "(2+1, 3+4) = (3,7)", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "mtr1h1", question: "Enlarge triangle by scale factor 2 from (1,1). If one vertex is at (3,3), find new position", type: "calculation", correct_answer: "(5,5)", explanation: "From center (1,1): move (3-1,3-1)=(2,2), scale by 2 to get (4,4), new point (1+4,1+4)=(5,5)", marks: 2, difficulty: "higher" },
                { id: "mtr1h2", question: "After enlargement by scale factor -1 from origin, area changed by what factor?", type: "short_answer", correct_answer: "1 (unchanged in magnitude, shape inverted)", explanation: "Area scales by k²=(-1)²=1, but orientation reversed", marks: 2, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Reflect", meaning: "Mirror across given line" },
                { word: "Rotate", meaning: "Turn by given angle around center" },
                { word: "Translate", meaning: "Move by given vector" },
                { word: "Enlarge", meaning: "Scale by given factor from center" }
            ],
            exam_tips: ["Always state center point for rotation/enlargement", "Draw grid when possible", "Use tracing paper to check rotations", "State mirror line clearly"],
            common_mistakes: ["Omitting center point in description", "Wrong scale factor sign", "Miscounting grid squares", "Forgetting to draw image"],
            mark_scheme_notes: ["A1 for correct description (angle, direction, center)", "A1 for accuracy of image"],
            time_allocation: "1-2 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Transformation Simulator", type: "interactive", description: "Click to apply transformations and see results" },
                { title: "Symmetry Exploration", type: "interactive", description: "Discover rotational and reflective symmetry" },
                { title: "Transformation Guide", type: "article", description: "Visual guide to all four types" }
            ],
            further_reading: ["Edexcel GCSE Maths Chapter 10 - Transformations"],
            revision_checklist: ["I can reflect over standard lines", "I can rotate around any center", "I understand scale factors", "I can describe transformations fully"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mtr1f1", model_answer: "(-3,2)", mark_breakdown: ["1 mark for correct coordinates"], examiner_tip: "y-axis reflection negates x-coordinate" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // MATHS (Edexcel) - Quadratic Equations & Inequalities
    // ========================
    {
        id: "edexcel_maths_quadratics",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Quadratic Equations & Inequalities",
        topic_number: "A3",
        tier_level: "higher",
        section_1_key_concepts: {
            overview: "Quadratic equations have degree 2 (x² term). Solving methods: factorising, quadratic formula, completing square. Quadratic graphs are parabolas (U-shaped). Solutions are x-intercepts.",
            key_terms: [
                { term: "Quadratic", definition: "Polynomial with highest degree 2 (ax² + bx + c)", importance: "Most common non-linear equation" },
                { term: "Discriminant", definition: "b² - 4ac (determines number of solutions)", importance: ">0: two solutions, =0: one, <0: no real solutions" },
                { term: "Completing the Square", definition: "Rearranging to form (x+p)² + q", importance: "Useful for finding vertex of parabola" },
                { term: "Quadratic Formula", definition: "x = (-b ± √(b²-4ac)) / 2a", importance: "Solves any quadratic" },
                { term: "Roots/Zeros", definition: "x-values where y=0 (solutions)", importance: "x-intercepts of parabola" }
            ],
            learning_objectives: [
                "Solve quadratic equations by factorising",
                "Solve quadratic equations using quadratic formula",
                "Complete the square to find turning point",
                "Sketch quadratic graphs identifying key features",
                "Solve quadratic inequalities"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Factorising & Solutions",
                content: "For ax²+bx+c=0, find two numbers that multiply to ac and add to b. Rewrite bx using those numbers, then factor. If (x+p)(x+q)=0, then x=-p or x=-q. Always check by expanding.",
                diagram_description: "Step-by-step factorisation process shown on grid, parabola with x-intercepts marked as solutions",
                key_points: ["Find factors of ac that sum to b", "Rewrite middle term", "Factor by grouping", "Set each factor to zero"]
            },
            {
                heading: "Quadratic Formula & Discriminant",
                content: "x = (-b ± √(b²-4ac)) / 2a. Discriminant Δ = b² - 4ac. If Δ>0: two real solutions. If Δ=0: one repeated solution (touches x-axis). If Δ<0: no real solutions (no x-intercepts).",
                diagram_description: "Three parabolas: one crossing x-axis twice (Δ>0), one touching once (Δ=0), one not touching (Δ<0)",
                key_points: ["Always identify a, b, c correctly", "Discriminant tells number of solutions", "Use calculator carefully with ± symbol", "Check solutions in original equation"]
            },
            {
                heading: "Completing the Square & Graphing",
                content: "Rearrange ax²+bx+c to form a(x+p)²+q. Vertex is at (-p, q). Parabola opens up if a>0, down if a<0. Axis of symmetry: x=-b/2a.",
                diagram_description: "Parabola with vertex marked, axis of symmetry drawn, showing how to read turning point from completed square form",
                key_points: ["Completed square form: a(x+p)² + q", "Vertex: (-p, q)", "Minimum/maximum at vertex", "Axis of symmetry: vertical line through vertex"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Solve x² + 5x + 6 = 0 by factorising",
                step_by_step: [
                    "Find factors of 6 that add to 5: 2 and 3",
                    "(x + 2)(x + 3) = 0",
                    "Either x + 2 = 0 or x + 3 = 0",
                    "So x = -2 or x = -3",
                    "Check: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓"
                ],
                answer: "x = -2 or x = -3"
            },
            {
                question: "Solve 2x² - 5x - 3 = 0 using quadratic formula",
                step_by_step: [
                    "a=2, b=-5, c=-3",
                    "Δ = (-5)² - 4(2)(-3) = 25 + 24 = 49",
                    "x = (5 ± √49) / 4 = (5 ± 7) / 4",
                    "x = 12/4 = 3 or x = -2/4 = -0.5",
                    "Check: 2(3)² - 5(3) - 3 = 18 - 15 - 3 = 0 ✓"
                ],
                answer: "x = 3 or x = -0.5"
            }
        ],
        section_4_practice_questions: {
            foundation: [],
            higher: [
                { id: "mq1h1", question: "Solve x² - 4x - 5 = 0 by factorising", type: "short_answer", correct_answer: "x = 5 or x = -1", explanation: "(x-5)(x+1)=0", marks: 2, difficulty: "higher" },
                { id: "mq1h2", question: "Use quadratic formula to solve 3x² - x - 2 = 0", type: "calculation", correct_answer: "x = 1 or x = -2/3", explanation: "Δ=1+24=25, x=(1±5)/6", marks: 3, difficulty: "higher" },
                { id: "mq1h3", question: "Complete the square for x² + 6x + 7. Find vertex", type: "short_answer", correct_answer: "(x+3)² - 2. Vertex (-3, -2)", explanation: "(x+3)²-9+7=(x+3)²-2", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Solve", meaning: "Find all x values that satisfy equation" },
                { word: "Complete the square", meaning: "Rewrite in form a(x+p)² + q" }
            ],
            exam_tips: ["Check discriminant to anticipate number of solutions", "Verify solutions in original equation", "Show all working in quadratic formula", "Give exact answers unless asked otherwise"],
            common_mistakes: ["Wrong formula for discriminant", "Sign errors with b in formula", "Only giving one solution when two exist", "Not simplifying final answers"],
            mark_scheme_notes: ["M1 for method, M1 for substitution/work, A1 for accuracy", "Two solutions needed for full marks (unless repeated root)"],
            time_allocation: "2-3 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Quadratic Calculator", type: "interactive", description: "Input coefficients to solve immediately" },
                { title: "Parabola Explorer", type: "interactive", description: "Adjust a, b, c and see graph change" },
                { title: "Complete the Square Tool", type: "interactive", description: "Step-by-step completion of square" }
            ],
            further_reading: ["Edexcel GCSE Maths Higher Chapter 5 - Quadratics"],
            revision_checklist: ["I can solve by factorising", "I can use quadratic formula", "I can complete the square", "I understand discriminant"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mq1h1", model_answer: "x = 5 or x = -1", mark_breakdown: ["1 mark for factorisation", "1 mark for both solutions"], examiner_tip: "Check with discriminant first" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }
];

/**
 * COMBINED AND EXPORTED: All comprehensive Maths topics
 * Merges base topics with extended comprehensive sets
 */
export const SEED_MATHS_EXTENDED: Topic[] = [
    ...SEED_MATHS_EXTENDED_BASE,
    ...SEED_MATHS_COMPREHENSIVE,
    ...SEED_MATHS_EXTENDED_2,
    ...SEED_MATHS_EXTENDED_3
];

export default SEED_MATHS_EXTENDED;
