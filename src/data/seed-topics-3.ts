import { Topic } from "@/types";

export const SEED_TOPICS_PART3: Topic[] = [
    // ========================
    // MATHS (Edexcel)
    // ========================
    {
        id: "edexcel_maths_algebra_basics",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Algebraic Expressions",
        topic_number: "A1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Algebra uses letters to represent numbers. This topic covers simplifying expressions, expanding brackets, and factorising — essential skills for solving equations.",
            key_terms: [
                { term: "Variable", definition: "A letter representing an unknown number (e.g., x, y)", importance: "The basis of algebra" },
                { term: "Term", definition: "A single part of an expression (e.g., 3x)", importance: "Building block of expressions" },
                { term: "Expression", definition: "A collection of terms with no equals sign (e.g., 2x + 5)", importance: "Distinct from an equation" },
                { term: "Coefficient", definition: "The number in front of a variable (e.g., 5 in 5x)", importance: "Determines the value of the term" },
                { term: "Like terms", definition: "Terms with the same variable and power (e.g., 2x and 5x)", importance: "Only like terms can be added/subtracted" }
            ],
            learning_objectives: [
                "Simplify expressions by collecting like terms",
                "Multiply terms using laws of indices",
                "Expand single and double brackets",
                "Factorise linear and quadratic expressions",
                "Substitute values into expressions"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Collecting Like Terms",
                content: "You can only add or subtract terms that have exactly the same variables with the same powers. For example, 2x + 3x = 5x, but 2x + 3y cannot be simplified. Watch out for signs! 5x - 2x = 3x.",
                key_points: ["x + x = 2x", "x × x = x²", "Only add terms with matching letters/powers", "Sign belongs to the term it proceeds"]
            },
            {
                heading: "Expanding Brackets",
                content: "To expand a single bracket, multiply the term outside by everything inside: 3(x + 4) = 3x + 12. For double brackets (FOIL method): (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.",
                key_points: ["Single bracket: Multiply outside term by ALL inside terms", "Double bracket: FOIL (First, Outside, Inside, Last)", "Simplify after expanding double brackets"]
            },
            {
                heading: "Factorising",
                content: "Factorising is the opposite of expanding — putting into brackets. Find the highest common factor (HCF) of numbers and letters. Example: 6x + 9 = 3(2x + 3). For quadratics like x² + 5x + 6, find two numbers that multiply to 6 and add to 5 (2 and 3) → (x + 2)(x + 3).",
                key_points: ["Look for HCF of numbers first", "Check for common letters", "Quadratics: Multiply to end number, add to middle number", "Always check by expanding"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Expand and simplify: 3(2x - 1) - 2(x + 4)",
                step_by_step: [
                    "Expand first bracket: 3 × 2x = 6x, 3 × -1 = -3 → 6x - 3",
                    "Expand second bracket: -2 × x = -2x, -2 × 4 = -8 → -2x - 8",
                    "Combine: 6x - 3 - 2x - 8",
                    "Collect like terms: (6x - 2x) + (-3 - 8)",
                    "Result: 4x - 11"
                ],
                answer: "4x - 11",
                common_mistakes: ["Multiplying -2 × 4 incorrectly as +8 (sign error)", "Forgetting to multiply the second term inside the bracket"]
            },
            {
                question: "Factorise fully: 12x²y + 8xy",
                step_by_step: [
                    "HCF of 12 and 8 is 4",
                    "Common letters: x and y are in both",
                    "Factor out 4xy",
                    "Inside bracket: 12x²y ÷ 4xy = 3x",
                    "Inside bracket: 8xy ÷ 4xy = 2",
                    "Result: 4xy(3x + 2)"
                ],
                answer: "4xy(3x + 2)"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "ma1f1", question: "Simplify 3x + 4y - x + 2y", type: "short_answer", correct_answer: "2x + 6y", explanation: "3x - x = 2x, 4y + 2y = 6y", marks: 2, difficulty: "foundation" },
                { id: "ma1f2", question: "Expand 5(x - 3)", type: "short_answer", correct_answer: "5x - 15", explanation: "5 × x = 5x, 5 × -3 = -15", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "ma1h1", question: "Factorise x² - 9", type: "short_answer", correct_answer: "(x + 3)(x - 3)", explanation: "Difference of two squares", marks: 1, difficulty: "higher" },
                { id: "ma1h2", question: "Expand and simplify (2x + 3)(x - 5)", type: "short_answer", correct_answer: "2x² - 7x - 15", explanation: "2x² - 10x + 3x - 15 = 2x² - 7x - 15", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Simplify", meaning: "Collect like terms or cancel down fractions" },
                { word: "Expand", meaning: "Multiply out brackets" },
                { word: "Factorise", meaning: "Put into brackets" }
            ],
            exam_tips: ["Check signs carefully when expanding negatives", "For quadratics, check signs of factors", "Difference of squares: a² - b² = (a+b)(a-b)"],
            common_mistakes: ["Thinking (x+3)² = x² + 9 (it is x² + 6x + 9)", "Sign errors with negative numbers", "Not factorising fully (e.g. 2(2x+4) instead of 4(x+2))"],
            mark_scheme_notes: ["M1 for expansion method", "A1 for correct simplified final answer", "Factorisation must be full for full marks"],
            time_allocation: "1 minute per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Algebra Tiles Interactive", type: "interactive", description: "Visualise expanding and factorising" },
                { title: "Quadratic Factorisation Video", type: "video", description: "Guide to splitting the middle term" }
            ],
            further_reading: ["Edexcel GCSE Maths Higher - Chapter 2"],
            revision_checklist: ["I can expand double brackets", "I can factorise quadratics", "I can simplify algebraic fractions", "I know the difference of two squares"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "ma1f1", model_answer: "2x + 6y", mark_breakdown: ["1 mark for 2x", "1 mark for 6y"], examiner_tip: "underline like terms to avoid missing them" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // SCIENCE (AQA Combined) - Atomic Structure
    // ========================
    {
        id: "aqa_science_atomic_structure",
        exam_board: "aqa",
        subject: "combined_science",
        topic_title: "Atomic Structure & Periodic Table",
        topic_number: "C1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Everything is made of atoms. This topic covers the history of the atom, subatomic particles (protons, neutrons, electrons), isotopes, and how the periodic table is organised.",
            key_terms: [
                { term: "Atom", definition: "Smallest part of an element that can exist", importance: "Building block of matter" },
                { term: "Isotope", definition: "Atoms of the same element with different numbers of neutrons", importance: "Affects atomic mass but not chemical properties" },
                { term: "Ion", definition: "An atom that has lost or gained electrons (charged)", importance: "Basis of ionic bonding" },
                { term: "Atomic Number", definition: "Number of protons in nucleus", importance: "Defines the element" },
                { term: "Mass Number", definition: "Total protons + neutrons", importance: "Used to calculate neutrons" }
            ],
            learning_objectives: [
                "Describe the structure of an atom",
                "Calculate protons, neutrons, and electrons",
                "Explain the history of the atomic model",
                "Describe the arrangement of the periodic table",
                "Explain trends in Group 1 and Group 7"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Structure of the Atom",
                content: "Atoms have a central nucleus containing protons (positive) and neutrons (neutral). Electrons (negative) orbit the nucleus in shells. Atoms are neutral because protons = electrons. Radius is ~0.1nm (1x10⁻¹⁰m).",
                key_points: ["Proton: Mass 1, Charge +1", "Neutron: Mass 1, Charge 0", "Electron: Mass very small (~1/2000), Charge -1", "Nucleus contains almost all the mass"]
            },
            {
                heading: "History of the Atom",
                content: "The model changed over time: 1) Dalton (Solid spheres), 2) JJ Thomson (Plum Pudding - ball of positive charge with electrons stuck in), 3) Rutherford (Alpha scattering - discovered nucleus), 4) Bohr (Electron shells), 5) Chadwick (Neutrons).",
                key_points: ["Plum Pudding was disproved by Alpha Scattering", "Rutherford showed atom is mostly empty space", "Bohr added shells/energy levels"]
            },
            {
                heading: "The Periodic Table",
                content: "Arranged by atomic number. Groups (columns) = electrons in outer shell. Periods (rows) = number of shells. Group 1 (Alkali metals) get MORE reactive down the group. Group 7 (Halogens) get LESS reactive down the group. Group 0 (Noble gases) are unreactive (full outer shell).",
                key_points: ["Mendeleev left gaps for undiscovered elements", "Metals on left, non-metals on right", "Elements in same grep have similar properties"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Describe the structure of a Sodium atom (Mass 23, Atomic No 11)",
                step_by_step: [
                    "Protons = Atomic Number = 11",
                    "Electrons = Protons = 11",
                    "Neutrons = Mass - Atomic No = 23 - 11 = 12",
                    "Electronic structure: 2 in first shell, 8 in second, 1 in third (2,8,1)",
                    "Groups: It is in Group 1 because 1 electron in outer shell"
                ],
                answer: "11 protons, 12 neutrons, 11 electrons (2,8,1)"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "sc1f1", question: "What is the charge of a proton?", type: "mcq", options: ["+1", "-1", "0", "+2"], correct_answer: "+1", explanation: "Protons are positive (+1), Electrons are negative (-1)", marks: 1, difficulty: "foundation" },
                { id: "sc1f2", question: "Why are Noble Gases unreactive?", type: "short_answer", correct_answer: "They have a full outer shell of electrons", explanation: "Stable configuration requires no loss/gain of electrons", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "sc1h1", question: "Explain why Group 1 metals get more reactive down the group (4 marks)", type: "essay", correct_answer: "Atoms get larger / more shells; Outer electron is further from nucleus; Weaker attraction from nucleus; Electron is lost more easily", explanation: "Shielding effect and distance from nucleus", marks: 4, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Describe", meaning: "State features clearly" },
                { word: "Explain", meaning: "Give scientific reasons (using 'because')" }
            ],
            exam_tips: ["Learn the charge/mass table for particles", "Remember Group 1 gets MORE reactive down, Group 7 LESS", "Always mention 'electrostatic attraction' in explaining reactivity"],
            common_mistakes: ["Confusing mass number and atomic number", "Forgetting neutrons have no charge", "Thinking electrons orbit in random paths (they are in shells)"],
            mark_scheme_notes: ["Specific scientific terminology is required for 'Explain' questions"],
            time_allocation: "1 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Build an Atom Sim", type: "interactive", description: "Add protons/neutrons to see element changes" },
                { title: "Alkali Metals Demo", type: "video", description: "Reactions of Li, Na, K with water" }
            ],
            further_reading: ["CGP Combined Science - Chemistry Section 1"],
            revision_checklist: ["I can draw electronic structures (e.g. 2,8,1)", "I know the history of the atom", "I can explain trends in Group 1 and 7"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "sc1h1", model_answer: "As you go down Group 1, atoms get larger with more shells. The outer electron is further from the nucleus, so the electrostatic attraction is weaker. This means the electron is lost more easily.", mark_breakdown: ["1 mark: size increases", "1 mark: distance increases", "1 mark: attraction decreases", "1 mark: easier to lose electron"], examiner_tip: "Use the word 'shielding' for extra credit" }
            ],
            grade_boundaries: { grade_9: 85, grade_7: 70, grade_5: 50, grade_4: 40 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // ENGLISH LIT (AQA) - An Inspector Calls
    // ========================
    {
        id: "aqa_english_lit_aic",
        exam_board: "aqa",
        subject: "english_literature",
        topic_title: "An Inspector Calls — Responsibility",
        topic_number: "Modern Texts",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "JB Priestley's play is a critique of 1912 capitalism and a call for social responsibility. Inspect Goole interrogates the Birling family about the suicide of Eva Smith to show that 'we are members of one body'.",
            key_terms: [
                { term: "Socialism", definition: "Political system valuing community/equality", importance: "Priestley's preferred ideology" },
                { term: "Capitalism", definition: "System valuing individual profit/business", importance: "represented by Mr Birling" },
                { term: "Responsibility", definition: "Duty to care for others", importance: "Central theme of the play" },
                { term: "Dramatic Irony", definition: "Audience knows what characters don't", importance: "Used to undermine Mr Birling" },
                { term: "Patriarchy", definition: "Male dominated society", importance: "Context for Eva Smith's struggles" }
            ],
            learning_objectives: [
                "Analyse the character of Inspector Goole",
                "Explore the theme of Social Responsibility",
                "Understand the context of 1912 vs 1945",
                "Analyse the generational divide (Young vs Old)",
                "Evaluate Mr Birling as a symbol of capitalism"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "The Inspector's Role",
                content: "Goole is not a normal police inspector; he is a moral force (possibly supernatural). His name 'Goole' sounds like 'Ghoul'. He controls the pace, interrupts characters, and acts as Priestley's mouthpiece. His final speech warns of 'fire and blood and anguish' if society doesn't change.",
                key_points: ["Mouthpiece for Priestley", "Omniscient (all-knowing)", "Moral teacher", "Catalyst for change"]
            },
            {
                heading: "Social Responsibility",
                content: "The play argues that we are all responsible for each other. The Birlings represent different failures of responsibility: Mr Birling (employer), Sheila (jealousy), Gerald (exploitation), Mrs Birling (charity refusal), Eric (abuse). Sheila and Eric accept responsibility; the parents do not.",
                key_points: ["'We are members of one body'", "Chain of events theory", "Contrast between generations", "Eva Smith represents the working class"]
            },
            {
                heading: "Context: 1912 vs 1945",
                content: "Written in 1945 (end of WWII, rise of Labour/Welfare State) but set in 1912 (Edwardian era, rigid class system, pre-WWI). Priestley uses dramatic irony (e.g. Birling saying the Titanic is 'unsinkable') to make the 1912 capitalist views look foolish to a 1945 audience.",
                key_points: ["Audience knows wars/Titanic happened", "Birling looks foolish/arrogant", "Call for post-war social change", "Class system critique"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "How does Priestley present the theme of responsibility? (30 marks)",
                step_by_step: [
                    "Intro: Priestley uses the play to criticise capitalist individualism and promote socialist collective responsibility.",
                    "Para 1: Mr Birling ('community and all that nonsense') — rejects responsibility, symbolises uncaring capitalism.",
                    "Para 2: The Inspector ('members of one body') — acts as the moral center, teaching that actions have consequences.",
                    "Para 3: The Younger Generation (Sheila/Eric) — they accept guilt ('I'm ashamed of it'), offering hope for the future.",
                    "Conclusion: The play is a warning that refusing responsibility leads to conflict ('fire and blood')."
                ],
                answer: "Essay contrasting characters' attitudes towards responsibility"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "aicf1", question: "Who says the Titanic is 'unsinkable, absolutely unsinkable'?", type: "mcq", options: ["Eric", "Gerald", "Mr Birling", "The Inspector"], correct_answer: "Mr Birling", explanation: "Shows his arrogance and lack of foresight", marks: 1, difficulty: "foundation" },
                { id: "aicf2", question: "What happens to Eva Smith?", type: "short_answer", correct_answer: "She commits suicide by drinking disinfectant", explanation: "The suicide triggers the investigation", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "aich1", question: "How does Priestley use the character of Mrs Birling to critique class prejudice? (30 marks)", type: "essay", correct_answer: "Analysis of her arrogance, refusal of charity, and 'girls of that class' comment", explanation: "Focus on social class and her static character arc", marks: 30, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "How does Priestley present...", meaning: "Analyse methods (language, structure, dramatic devices)" }
            ],
            exam_tips: ["Don't treat characters as real people; they are constructs/symbols", "Always link to Priestley's message/purpose", "Embed context (1912/1945)"],
            common_mistakes: ["Retelling the plot", "Ignoring the Inspector's final speech", "Forgetting the 'play' aspect (lights, exits/entrances)"],
            mark_scheme_notes: ["AO1: Response (12)", "AO2: Methods (12)", "AO3: Context (6)"],
            time_allocation: "45 minutes"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Inspector Calls BBC Adaptation", type: "video", description: "Clip of the final speech" },
                { title: "Character Quotes Quiz", type: "interactive", description: "Match quote to character" }
            ],
            further_reading: ["York Notes: An Inspector Calls"],
            revision_checklist: ["I can define Dramatic Irony", "I know the 7 deadly sins links", "I can analyse Mr Birling vs The Inspector"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "aicf1", model_answer: "Mr Birling says this. It is dramatic irony because the audience knows the Titanic sinks. This makes Birling seem foolish and untrustworthy.", mark_breakdown: ["1 mark: Mr Birling", "1 mark: dramatic irony explanation"], examiner_tip: "Use the term 'dramatic irony'" }
            ],
            grade_boundaries: { grade_9: 88, grade_7: 72, grade_5: 52, grade_4: 42 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }
];
