import { Topic } from "@/types";

export const SEED_TOPICS_PART4: Topic[] = [
    // ========================
    // MATHS (Edexcel) - Geometry & Statistics
    // ========================
    {
        id: "edexcel_maths_geometry_angles",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Angles and Polygons",
        topic_number: "G1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Geometry involves the properties of shapes and angles. This topic covers angle rules, parallel lines, and properties of polygons.",
            key_terms: [
                { term: "Polygon", definition: "A 2D shape with straight sides", importance: "Basic geometric figure" },
                { term: "Interior Angle", definition: "Angle inside a shape", importance: "Formula: (n-2) × 180" },
                { term: "Exterior Angle", definition: "Angle formed by extending a side", importance: "Sum is always 360°" },
                { term: "Parallel Lines", definition: "Lines that never meet (marked with arrows)", importance: "Create specific angle rules" },
                { term: "Transversal", definition: "A line cutting across parallel lines", importance: "Creates alternate/corresponding angles" }
            ],
            learning_objectives: [
                "Apply basic angle rules (on a line, around a point)",
                "Calculate angles in parallel lines (alternate, corresponding)",
                "Calculate sum of interior angles of polygons",
                "Find exterior angles of regular polygons",
                "Solve multi-step geometric problems"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Basic Angle Rules",
                content: "Angles on a straight line add to 180°. Angles around a point add to 360°. Vertically opposite angles are equal. Angles in a triangle add to 180°. Angles in a quadrilateral add to 360°.",
                key_points: ["Line = 180°", "Point = 360°", "Triangle = 180°", "Quadrilateral = 360°", "Vertically opposite = Equal"]
            },
            {
                heading: "Parallel Lines",
                content: "When a transversal crosses parallel lines: 1) Alternate angles (Z-shape) are EQUAL. 2) Corresponding angles (F-shape) are EQUAL. 3) Co-interior angles (C-shape) ADD to 180°.",
                key_points: ["Alternate (Z) are equal", "Corresponding (F) are equal", "Co-interior (C) add to 180", "Look for the arrows to identify parallel lines"]
            },
            {
                heading: "Polygons",
                content: "Sum of interior angles = (n-2) × 180, where n is number of sides. Exterior angles always sum to 360°. For a REGULAR polygon, one exterior angle = 360 ÷ n. One interior angle = 180 - exterior angle.",
                key_points: ["Sum Interior = (n-2)×180", "Sum Exterior = 360", "Exterior = 360/n (regular)", "Interior + Exterior = 180"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Calculate the size of one interior angle of a regular decagon (10 sides).",
                step_by_step: [
                    "Method 1 (Exterior Angle):",
                    "Exterior angle = 360 ÷ n = 360 ÷ 10 = 36°",
                    "Interior angle = 180 - Exterior = 180 - 36 = 144°",
                    "Method 2 (Sum Formula):",
                    "Sum = (10-2) × 180 = 8 × 180 = 1440°",
                    "One angle = 1440 ÷ 10 = 144°"
                ],
                answer: "144°"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mg1f1", question: "What do angles on a straight line add up to?", type: "short_answer", correct_answer: "180", explanation: "Angles on a straight line sum to 180 degrees", marks: 1, difficulty: "foundation" },
                { id: "mg1f2", question: "Find the size of angle x in an equilateral triangle", type: "short_answer", correct_answer: "60", explanation: "180 ÷ 3 = 60", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "mg1h1", question: "The interior angle of a regular polygon is 162°. How many sides does it have?", type: "calculation", correct_answer: "20", explanation: "Exterior = 180 - 162 = 18°. n = 360 ÷ 18 = 20 sides.", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Calculate", meaning: "Work out the value" },
                { word: "Give reasons", meaning: "State the geometric rule used (e.g. 'angles on a line sum to 180')" }
            ],
            exam_tips: ["Always state the reason if asked (e.g. 'alternate angles are equal')", "Don't assume lines are parallel unless marked", "Check if the polygon is REGULAR"],
            common_mistakes: ["Confusing alternate and corresponding angles", "Thinking exterior angles add to different amounts for different shapes (always 360!)"],
            mark_scheme_notes: ["Reasoning marks require strict vocabulary (e.g. 'vertically opposite', not 'opposite')"],
            time_allocation: "1 min per mark"
        },
        section_6_additional_resources: {
            resources: [{ title: "Angle Chase Game", type: "interactive", description: "Solve complex geometric puzzles" }],
            further_reading: ["Edexcel GCSE Maths Geometry Section"],
            revision_checklist: ["I know basic angle rules", "I can identify parallel line angles", "I can calculate polygon angles"]
        },
        section_7_assessment_answers: {
            answers: [],
            grade_boundaries: { grade_9: 85, grade_7: 70, grade_5: 50, grade_4: 40 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // SCIENCE (AQA) - Forces
    // ========================
    {
        id: "aqa_science_forces",
        exam_board: "aqa",
        subject: "combined_science",
        topic_title: "Forces and Motion",
        topic_number: "P5",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Forces cause objects to move, change speed, or change shape. This topic covers vectors, Newton's Laws, and motion graphs.",
            key_terms: [
                { term: "Vector", definition: "Measurement with magnitude AND direction", importance: "Force, Velocity, Displacement" },
                { term: "Scalar", definition: "Measurement with magnitude only", importance: "Speed, Distance, Mass" },
                { term: "Resultant Force", definition: "The single force that has the same effect as all forces acting on an object", importance: "Determines motion (Newton's 2nd Law)" },
                { term: "Acceleration", definition: "Rate of change of velocity", importance: "a = (v-u)/t" },
                { term: "Terminal Velocity", definition: "Constant max speed reached when forces are balanced", importance: "Falling objects" }
            ],
            learning_objectives: [
                "Distinguish between scalar and vector quantities",
                "Calculate resultant forces",
                "Apply Newton's Three Laws of Motion",
                "Interpret Distance-Time and Velocity-Time graphs",
                "Calculate work done (W = Fs)"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Scalars vs Vectors",
                content: "Scalars have size only (Speed, Distance, Mass, Energy, Time). Vectors have size AND direction (Velocity, Displacement, Weight, Force, Acceleration). We represent vectors with arrows.",
                key_points: ["Speed is scalar, Velocity is vector", "Mass is scalar, Weight is vector", "Vectors can be added/subtracted"]
            },
            {
                heading: "Newton's Laws",
                content: "1) If resultant force is zero, object remains stationary or moves at constant velocity. 2) F = ma (Force = mass × acceleration). 3) Every action has an equal and opposite reaction.",
                key_points: ["Balanced forces = constant speed (or still)", "Unbalanced forces = acceleration", "F=ma is the key formula"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "A car of mass 1000kg accelerates at 2m/s². Calculate the resultant force.",
                step_by_step: ["Formula: F = ma", "Substitute: F = 1000 × 2", "Calculate: 2000", "Unit: Newtons (N)"],
                answer: "2000N"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "spf1", question: "Is velocity a scalar or a vector?", type: "mcq", options: ["Scalar", "Vector"], correct_answer: "Vector", explanation: "It has direction", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "sph1", question: "Explain terminal velocity of a skydiver (6 marks)", type: "essay", correct_answer: "Weight acts down; Air resistance acts up. Initially Weight > Air resistance -> accelerates. As speed increases, air resistance increases. Eventually Air resistance = Weight. Resultant force = 0. Constant speed reached.", explanation: "Steps: Acceleration -> Resistance Increases -> Forces Balance -> Constant Speed", marks: 6, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [{ word: "Calculate", meaning: "Use formula" }, { word: "Describe motion", meaning: "Constant speed / accelerating / stationary" }],
            exam_tips: ["Remember units (N, m/s, m/s²)", "Gradient of Distance-Time graph = Speed", "Area under Velocity-Time graph = Distance"],
            common_mistakes: ["Confusing mass (kg) and weight (N)", "Thinking constant speed means 'force is constant' (Force is ZERO)"],
            mark_scheme_notes: ["Show substitution into formula for method marks"],
            time_allocation: "1 min per mark"
        },
        section_6_additional_resources: {
            resources: [{ title: "Forces Simulation", type: "interactive", description: "Experiment with F=ma" }],
            further_reading: ["CGP Physics Section 5"],
            revision_checklist: ["I can define Newton's laws", "I can read motion graphs", "I know vector vs scalar"]
        },
        section_7_assessment_answers: {
            answers: [],
            grade_boundaries: { grade_9: 80, grade_7: 65, grade_5: 45, grade_4: 35 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // HISTORY (AQA) - Elizabethan England
    // ========================
    {
        id: "aqa_history_elizabeth",
        exam_board: "aqa",
        subject: "history",
        topic_title: "Elizabethan England - Early Problems",
        topic_number: "2",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Elizabeth I faced massive challenges when she became Queen in 1558: Religion, Marriage, Foreign threats (Spain/France/Scotland), and Legitimacy.",
            key_terms: [
                { term: "Legitimacy", definition: "Legal right to rule", importance: "Catholics thought she was illegitimate" },
                { term: "Puritans", definition: "Extreme Protestants", importance: "Wanted to purify the church" },
                { term: "Mary Queen of Scots", definition: "Elizabeth's Catholic cousin", importance: "Main threat to the throne" },
                { term: "Religious Settlement", definition: "The 'Middle Way' (1559)", importance: "Attempt to please both sides" },
                { term: "Privy Council", definition: "Queen's advisors", importance: "Helped run the country" }
            ],
            learning_objectives: [
                "Describe Elizabeth's problems in 1558",
                "Explain the Religious Settlement",
                "Evaluate the threat of Mary Queen of Scots",
                "Analyse relations with Spain"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Problems in 1558",
                content: "1) Religion: Country divided between Catholic/Protestant. 2) Legitimacy: Catholics didn't recognise Henry VIII's marriage to Anne Boleyn. 3) Gender: Many thought a woman couldn't rule. 4) Money: Crown was in debt. 5) France/Scotland: Auld Alliance threat.",
                key_points: ["Divided religion", "Gender prejudice", "Debt", "Foreign threats"]
            },
            {
                heading: "The Religious Settlement (1559)",
                content: "Act of Supremacy (Liz = Governor, not Head). Act of Uniformity (New Prayer Book, services in English, some Catholic decorations kept). Goal: A 'Middle Way' to avoid civil war. Result: Generally worked, but angered extremes (Puritans and hardline Catholics).",
                key_points: ["Middle Way", "Governor vs Head", "English Bible", "Compromise"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Explain two consequences of the Religious Settlement (8 marks)",
                step_by_step: [
                    "Consequence 1: Relative peace/Stability. It satisfied the majority of moderate people.",
                    "Consequence 2: Opposition from extremists. The Papal Bull (1570) excommunicated her, and Puritans began challenging her authority in Parliament."
                ],
                answer: "Two developed paragraphs (Point-Evidence-Explain)"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "he1f1", question: "What year was the Religious Settlement?", type: "short_answer", correct_answer: "1559", explanation: "One year after she became Queen", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "he1h1", question: "Write an account of the plot against Elizabeth involving Mary Queen of Scots (8 marks)", type: "essay", correct_answer: "Focus on Babington Plot / Throckmorton Plot", explanation: "Chronological account showing cause and consequence", marks: 8, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [{ word: "Write an account", meaning: "Narrative story (Chronological) + Analysis" }, { word: "How convincing", meaning: "Evaluate interpretation using own knowledge" }],
            exam_tips: ["Know the dates of the plots", "Distinguish between Puritans and Catholics"],
            common_mistakes: ["Confusing Mary I (Bloody Mary) with Mary Queen of Scots"],
            mark_scheme_notes: ["Specific detail gets top marks"],
            time_allocation: "10-15 mins per question"
        },
        section_6_additional_resources: {
            resources: [{ title: "Elizabethan Portrait Analysis", type: "article", description: "How she used image for power" }],
            further_reading: ["AQA History Elizabethan Age"],
            revision_checklist: ["I can list 1558 problems", "I describe the Settlement", "I know why MQS was a threat"]
        },
        section_7_assessment_answers: {
            answers: [],
            grade_boundaries: { grade_9: 80, grade_7: 65, grade_5: 45, grade_4: 35 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }
];
