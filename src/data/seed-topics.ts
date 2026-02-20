import { Topic } from "@/types";

export const SEED_TOPICS: Topic[] = [
    // 1. Edexcel Maths N1 — Structure and Calculation
    {
        id: "edexcel_maths_number_structure",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Structure and Calculation",
        topic_number: "N1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "This topic covers the fundamental number structures including integers, decimals, fractions, and place value. You will learn how to perform calculations efficiently and understand the relationships between different number representations.",
            key_terms: [
                { term: "Integer", definition: "A whole number (positive, negative, or zero)", importance: "Foundation of all number work" },
                { term: "Place Value", definition: "The value of a digit based on its position in a number", importance: "Essential for understanding number magnitude" },
                { term: "BIDMAS", definition: "Brackets, Indices, Division, Multiplication, Addition, Subtraction — the order of operations", importance: "Ensures calculations are performed correctly" },
                { term: "Reciprocal", definition: "1 divided by the number (e.g., reciprocal of 5 is 1/5)", importance: "Used in division of fractions" },
                { term: "Factor", definition: "A number that divides exactly into another number", importance: "Key to simplification and HCF" }
            ],
            learning_objectives: [
                "Order positive and negative integers, decimals and fractions",
                "Apply the four operations to integers, decimals and fractions",
                "Use BIDMAS to carry out calculations",
                "Understand and use place value for decimals",
                "Calculate with roots and integer indices"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Place Value and Ordering",
                content: "Every digit in a number has a place value. In the number 3,456.78, the 3 is in the thousands column, 4 in hundreds, 5 in tens, 6 in ones, 7 in tenths, and 8 in hundredths. To compare decimals, align decimal points and compare digit by digit from left to right.",
                key_points: ["Digits to the left of the decimal point are whole numbers", "Each place is 10× the place to its right", "Use inequality symbols: < means less than, > means greater than"]
            },
            {
                heading: "Order of Operations (BIDMAS)",
                content: "BIDMAS tells us the order: Brackets first, then Indices (powers/roots), then Division and Multiplication (left to right), finally Addition and Subtraction (left to right). For example: 3 + 4 × 2 = 3 + 8 = 11, NOT 14.",
                key_points: ["Always work brackets first", "Multiplication and division have equal priority", "Work left to right for operations of equal priority"]
            },
            {
                heading: "Operations with Fractions",
                content: "To add/subtract fractions, find a common denominator. To multiply, multiply numerators and denominators. To divide, multiply by the reciprocal. Always simplify your answer.",
                key_points: ["Common denominator needed for +/-", "Multiply: top × top, bottom × bottom", "Divide: flip second fraction and multiply", "Always simplify to lowest terms"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Calculate: 3/4 + 2/5",
                step_by_step: ["Find LCD of 4 and 5 = 20", "3/4 = 15/20", "2/5 = 8/20", "15/20 + 8/20 = 23/20", "= 1 3/20"],
                answer: "1 3/20",
                common_mistakes: ["Adding numerators and denominators separately (3+2)/(4+5)", "Forgetting to simplify"]
            },
            {
                question: "Evaluate: 2³ + 4 × (7 - 3)",
                step_by_step: ["Brackets first: 7 - 3 = 4", "Indices: 2³ = 8", "Multiplication: 4 × 4 = 16", "Addition: 8 + 16 = 24"],
                answer: "24"
            },
            {
                question: "Write 0.375 as a fraction in its simplest form",
                step_by_step: ["0.375 = 375/1000", "Divide both by 125", "375 ÷ 125 = 3", "1000 ÷ 125 = 8"],
                answer: "3/8"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mn1f1", question: "Calculate 5/6 - 1/3", type: "short_answer", correct_answer: "1/2", explanation: "1/3 = 2/6, so 5/6 - 2/6 = 3/6 = 1/2", marks: 2, difficulty: "foundation" },
                { id: "mn1f2", question: "Evaluate 3 + 2 × 5", type: "mcq", options: ["25", "13", "10", "15"], correct_answer: "13", explanation: "BIDMAS: 2 × 5 = 10 first, then 3 + 10 = 13", marks: 1, difficulty: "foundation" },
                { id: "mn1f3", question: "Put in order: 0.35, 1/3, 0.3", type: "short_answer", correct_answer: "0.3, 1/3, 0.35", explanation: "1/3 ≈ 0.333..., so order is 0.3 < 0.333... < 0.35", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "mn1h1", question: "Evaluate 2⁻³", type: "short_answer", correct_answer: "1/8", explanation: "2⁻³ = 1/2³ = 1/8", marks: 2, difficulty: "higher" },
                { id: "mn1h2", question: "Calculate (2/3)² × 9/4", type: "short_answer", correct_answer: "1", explanation: "(2/3)² = 4/9, then 4/9 × 9/4 = 36/36 = 1", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Calculate", meaning: "Work out the answer showing your working" },
                { word: "Evaluate", meaning: "Find the numerical value of an expression" },
                { word: "Simplify", meaning: "Reduce to the simplest form" }
            ],
            exam_tips: ["Always show your working — method marks are available", "Check your calculator is in the correct mode", "Estimate your answer first to check it's reasonable"],
            common_mistakes: ["Forgetting BIDMAS order", "Not finding common denominator for fractions", "Confusing negative indices"],
            mark_scheme_notes: ["M marks for method, A marks for accuracy", "Unsimplified fractions may lose final mark"],
            time_allocation: "Spend about 1 minute per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "BIDMAS Interactive Practice", type: "interactive", description: "Practice order of operations with instant feedback" },
                { title: "Fraction Operations Video", type: "video", description: "Step-by-step guide to adding, subtracting, multiplying and dividing fractions" }
            ],
            further_reading: ["Edexcel GCSE Maths Higher Student Book — Chapter 1", "CGP Edexcel GCSE Maths Revision Guide — Number section"],
            revision_checklist: ["I can order decimals and fractions", "I can use BIDMAS correctly", "I can add, subtract, multiply and divide fractions", "I can work with negative and fractional indices"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mn1f1", model_answer: "5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2", mark_breakdown: ["M1 for common denominator", "A1 for correct simplified answer"], examiner_tip: "Always show the common denominator step" },
                { question_id: "mn1h1", model_answer: "2⁻³ = 1/2³ = 1/8 = 0.125", mark_breakdown: ["M1 for recognising negative index means reciprocal", "A1 for 1/8"], examiner_tip: "Negative indices = reciprocal, not negative number" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // 2. AQA Combined Science — Cell Biology
    {
        id: "aqa_science_cell_biology",
        exam_board: "aqa",
        subject: "combined_science",
        topic_title: "Cell Structure and Function",
        topic_number: "B2.1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Cells are the basic building blocks of all living organisms. This topic covers the structure and function of eukaryotic and prokaryotic cells, and how to use microscopy to observe them.",
            key_terms: [
                { term: "Eukaryotic cell", definition: "A cell with a nucleus and membrane-bound organelles (e.g., animal and plant cells)", importance: "Most complex organisms are eukaryotes" },
                { term: "Prokaryotic cell", definition: "A simpler cell without a true nucleus (e.g., bacteria)", importance: "Understanding differences between cell types" },
                { term: "Mitochondria", definition: "The organelle where aerobic respiration takes place", importance: "Provides energy (ATP) for the cell" },
                { term: "Ribosome", definition: "The site of protein synthesis in the cell", importance: "Makes all proteins the cell needs" },
                { term: "Cell membrane", definition: "A semi-permeable barrier controlling what enters and leaves the cell", importance: "Controls substance movement" }
            ],
            learning_objectives: [
                "Describe the structure of eukaryotic and prokaryotic cells",
                "Explain the function of each organelle",
                "Use a microscope and calculate magnification",
                "Compare animal, plant, and bacterial cells",
                "Understand the scale of cells and units of measurement"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Animal and Plant Cells",
                content: "Both animal and plant cells are eukaryotic. They share: nucleus (contains DNA), cell membrane, cytoplasm, mitochondria, and ribosomes. Plant cells additionally have: cell wall (cellulose), permanent vacuole (filled with cell sap), and chloroplasts (for photosynthesis).",
                key_points: ["Both types have nucleus, membrane, cytoplasm, mitochondria, ribosomes", "Plant cells also have cell wall, vacuole, chloroplasts", "Not all plant cells have chloroplasts (e.g., root cells)"]
            },
            {
                heading: "Prokaryotic Cells (Bacteria)",
                content: "Prokaryotic cells are much smaller (1-5 μm vs 10-100 μm) and simpler. They have: cell membrane, cytoplasm, ribosomes (smaller), cell wall, and a single DNA loop (not enclosed in a nucleus). Some have plasmids (small rings of extra DNA) and flagella (tail for movement).",
                key_points: ["No true nucleus — DNA floats freely", "Much smaller than eukaryotic cells", "May have plasmids and flagella", "Cell wall is NOT made of cellulose"]
            },
            {
                heading: "Microscopy and Magnification",
                content: "Magnification = Image size ÷ Actual size. Light microscopes magnify up to ×1500 with a resolution of 200nm. Electron microscopes magnify up to ×2,000,000 with resolution of 0.2nm. Units: 1mm = 1000μm, 1μm = 1000nm.",
                key_points: ["Formula: M = I ÷ A (magnification = image ÷ actual)", "Light microscopes use light; electron microscopes use electrons", "Electron microscopes reveal sub-cellular detail", "Always convert units before calculating"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "A cell is 0.05mm long. Under a microscope, it appears 25mm. What is the magnification?",
                step_by_step: ["Write the formula: M = I ÷ A", "Image size (I) = 25mm", "Actual size (A) = 0.05mm", "M = 25 ÷ 0.05 = ×500"],
                answer: "×500",
                common_mistakes: ["Forgetting to use the same units", "Dividing actual by image instead"]
            },
            {
                question: "Convert 50 micrometres to millimetres",
                step_by_step: ["1mm = 1000μm", "50μm ÷ 1000 = 0.05mm"],
                answer: "0.05mm"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "cb1f1", question: "Which organelle controls what enters and leaves the cell?", type: "mcq", options: ["Nucleus", "Cell membrane", "Cell wall", "Cytoplasm"], correct_answer: "Cell membrane", explanation: "The cell membrane is semi-permeable and controls substance movement", marks: 1, difficulty: "foundation" },
                { id: "cb1f2", question: "Name two organelles found in plant cells but NOT in animal cells", type: "short_answer", correct_answer: "Cell wall and chloroplasts (or permanent vacuole)", explanation: "Plant cells have cell wall, chloroplasts, and a permanent vacuole that animal cells lack", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "cb1h1", question: "An image of a cell is 30mm. The magnification is ×600. Calculate the actual size in μm.", type: "calculation", correct_answer: "50μm", explanation: "A = I ÷ M = 30 ÷ 600 = 0.05mm = 50μm", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Describe", meaning: "Give an account of the main features" },
                { word: "Compare", meaning: "Identify similarities and differences" },
                { word: "Calculate", meaning: "Work out using numbers — show working" }
            ],
            exam_tips: ["Always state units in magnification questions", "Draw and label diagrams clearly", "When comparing cells, use a table format"],
            common_mistakes: ["Saying plant cells don't have mitochondria (they do!)", "Confusing cell wall and cell membrane", "Unit conversion errors"],
            mark_scheme_notes: ["1 mark per correct identification", "Calculation marks: M1 for formula, M1 for substitution, A1 for answer with units"],
            time_allocation: "6-mark questions: spend 8-10 minutes"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Virtual Microscope", type: "interactive", description: "Explore cells under different magnifications" },
                { title: "Cell Structure Animation", type: "video", description: "3D animation showing organelle functions" }
            ],
            further_reading: ["AQA GCSE Biology Student Book — Chapter 1", "CGP AQA Science Revision Guide"],
            revision_checklist: ["I can label animal and plant cell diagrams", "I can describe the function of each organelle", "I can calculate magnification", "I can compare eukaryotic and prokaryotic cells"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "cb1f1", model_answer: "Cell membrane — it is semi-permeable and controls the passage of substances into and out of the cell", mark_breakdown: ["1 mark for identifying cell membrane"], examiner_tip: "Don't confuse with cell wall which provides structural support" }
            ],
            grade_boundaries: { grade_9: 92, grade_7: 76, grade_5: 56, grade_4: 46 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // 3. AQA English Literature — Macbeth
    {
        id: "aqa_english_lit_macbeth",
        exam_board: "aqa",
        subject: "english_literature",
        topic_title: "Macbeth — Lady Macbeth",
        topic_number: "Shakespeare",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Lady Macbeth is one of Shakespeare's most complex characters. She drives the plot through her ambition, manipulation, and eventual guilt. Understanding her character arc is essential for exam success.",
            key_terms: [
                { term: "Ambition", definition: "A strong desire to achieve something, often power", importance: "Lady Macbeth's defining trait that drives the plot" },
                { term: "Gender roles", definition: "Expectations of behaviour based on being male or female", importance: "Lady Macbeth challenges Jacobean gender norms" },
                { term: "Guilt", definition: "A feeling of responsibility for wrongdoing", importance: "Drives Lady Macbeth's descent into madness" },
                { term: "Soliloquy", definition: "A speech where a character speaks their thoughts aloud, alone on stage", importance: "Reveals Lady Macbeth's true feelings" },
                { term: "Patriarchal", definition: "A society ruled and dominated by men", importance: "Context for Lady Macbeth's subversive behaviour" }
            ],
            learning_objectives: [
                "Analyse Lady Macbeth's character development across the play",
                "Explore how Shakespeare uses language to present her ambition",
                "Understand the significance of gender roles in Jacobean England",
                "Analyse key quotations and their effects",
                "Write a structured analytical essay response"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Lady Macbeth's Introduction (Act 1, Scene 5)",
                content: "Lady Macbeth first appears reading Macbeth's letter about the witches' prophecy. She immediately begins planning Duncan's murder, calling on spirits to 'unsex me here' — asking to be stripped of feminine qualities. She calls Macbeth 'too full o' th' milk of human kindness', suggesting he is too gentle for murder. This establishes her as ambitious, manipulative, and willing to reject her femininity for power.",
                key_points: ["'Unsex me here' — rejects femininity, links to gender theme", "'Fill me from the crown to the toe top-full of direst cruelty' — wants to be unnaturally cruel", "She is the driving force behind the murder plot", "Shakespeare uses imperative verbs showing her control"]
            },
            {
                heading: "The Murder and Manipulation (Act 1, Scene 7 & Act 2)",
                content: "When Macbeth hesitates, Lady Macbeth questions his masculinity: 'When you durst do it, then you were a man.' She is practical — she plans the details, drugs the guards, and is frustrated when Macbeth brings the daggers back. She says 'A little water clears us of this deed' — showing her initial lack of guilt. Her strength here contrasts with her later breakdown.",
                key_points: ["Manipulates through questioning his manhood", "'Look like th' innocent flower, but be the serpent under't' — deception motif", "She is pragmatic and composed during the murder", "Dramatic irony: 'a little water' foreshadows her obsessive handwashing later"]
            },
            {
                heading: "Lady Macbeth's Decline (Act 5, Scene 1)",
                content: "By Act 5, Lady Macbeth is sleepwalking, obsessively washing her hands: 'Out, damned spot!' The doctor says she needs a priest, not a physician — suggesting her illness is spiritual guilt. She speaks in prose (not verse), reflecting her mental disintegration. Her death (reported offstage) symbolises how guilt destroys those who pursue power through evil.",
                key_points: ["'Out, damned spot!' — guilt has consumed her", "Handwashing = trying to cleanse guilt (contrast with Act 2)", "Prose instead of verse = breakdown of order and control", "Her offstage death may suggest she is no longer important to Macbeth"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "How does Shakespeare present Lady Macbeth as a powerful woman? (30 marks)",
                step_by_step: [
                    "Introduction: Lady Macbeth is presented as powerful through her ambition, manipulation of Macbeth, and rejection of gender norms — though this power ultimately destroys her.",
                    "Paragraph 1 (Act 1.5): 'Unsex me here' — imperative verb 'unsex' shows she commands supernatural forces. The word suggests power requires rejecting femininity, reflecting Jacobean views that women should be passive.",
                    "Paragraph 2 (Act 1.7): She manipulates Macbeth by questioning his masculinity — 'When you durst do it, then you were a man.' The conditional 'when...then' makes his manhood dependent on murder. Shakespeare shows her psychological power over him.",
                    "Paragraph 3 (Act 5.1): However, her power is ultimately an illusion. 'Out, damned spot!' — the exclamatory cry shows guilt has overwhelmed her. The adjective 'damned' suggests she recognises her own damnation. Shakespeare's message: unnatural power leads to destruction.",
                    "Conclusion: Lady Macbeth's arc — from commanding spirits to being commanded by guilt — serves as a warning about the corrupting nature of unchecked ambition."
                ],
                answer: "A structured essay following Point-Evidence-Explanation-Link (PEEL) structure with contextual understanding"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "lm1f1", question: "What does Lady Macbeth mean by 'unsex me here'?", type: "short_answer", correct_answer: "She is asking to be stripped of her feminine qualities so she can be cruel enough to help murder the king", explanation: "The imperative 'unsex' shows her desire to reject femininity, which she sees as a weakness preventing her from acting ruthlessly", marks: 4, difficulty: "foundation" },
                { id: "lm1f2", question: "Which act does Lady Macbeth's famous sleepwalking scene occur in?", type: "mcq", options: ["Act 2", "Act 3", "Act 4", "Act 5"], correct_answer: "Act 5", explanation: "The sleepwalking scene (Act 5, Scene 1) shows her guilt-ridden mental breakdown", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "lm1h1", question: "How does Shakespeare use the motif of blood to track Lady Macbeth's psychological journey?", type: "essay", correct_answer: "Blood represents guilt throughout. In Act 2 she dismisses it ('a little water'), but by Act 5 she cannot wash it away ('Out, damned spot!'). This contrast shows guilt is inescapable.", explanation: "Track the blood motif across the play to show character development", marks: 8, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "How does Shakespeare present...", meaning: "Analyse language, structure, and form — include writer's methods" },
                { word: "To what extent...", meaning: "Argue a position with evidence — consider both sides" }
            ],
            exam_tips: ["Use the extract AND the wider play", "Include context but embed it naturally", "Aim for 3 detailed paragraphs, not 5 brief ones", "Use literary terminology: metaphor, imperative, semantic field"],
            common_mistakes: ["Only writing about the extract, ignoring rest of play", "Retelling the story instead of analysing language", "Not including context about Jacobean England"],
            mark_scheme_notes: ["AO1: Response to task (12 marks)", "AO2: Language/structure analysis (12 marks)", "AO3: Context (6 marks)", "Top band requires 'perceptive, detailed analysis'"],
            time_allocation: "55 minutes for the Shakespeare question (including 15 min planning)"
        },
        section_6_additional_resources: {
            resources: [
                { title: "RSC Lady Macbeth Performance", type: "video", description: "Professional performance clips showing different interpretations" },
                { title: "Quotation Flash Cards", type: "interactive", description: "Key Lady Macbeth quotations with analysis" }
            ],
            further_reading: ["AQA English Literature Anthology", "York Notes on Macbeth"],
            revision_checklist: ["I can analyse 5+ key Lady Macbeth quotations", "I understand her character arc from power to guilt", "I can discuss gender roles in Jacobean context", "I can write a PEEL paragraph with embedded quotations"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "lm1f1", model_answer: "Lady Macbeth asks to be 'unsex[ed]' — stripped of feminine qualities like compassion and nurturing. In Jacobean England, women were expected to be gentle and submissive. By rejecting these traits, she seeks the cruelty needed to pursue power. The imperative verb commands the spirits, showing her determination.", mark_breakdown: ["1 mark: identifies meaning (stripped of femininity)", "1 mark: explains purpose (to be cruel)", "1 mark: language analysis (imperative)", "1 mark: context (Jacobean gender roles)"], examiner_tip: "Always link language analysis to the writer's purpose" }
            ],
            grade_boundaries: { grade_9: 88, grade_7: 72, grade_5: 52, grade_4: 42 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }
];
