import { Topic } from "@/types";

export const SEED_TOPICS_SCIENCES_EXTENDED: Topic[] = [
    // ============================================================
    // SCIENCE EXTENDED — 8 additional science topics
    // ============================================================

    // 1. Advanced Biology - Human Body Systems (NEW)
    {
        id: "aqa_combined_science_bio_human_body",
        exam_board: "aqa",
        subject: "combined_science",
        topic_title: "Human Body Systems: Circulatory, Respiratory & Nervous",
        topic_number: "B8",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Comprehensive study of human body's integrated systems: how they function, interact, and maintain homeostasis. Deep dive into circulation, gas exchange, and neural communication.",
            key_terms: [
                { term: "Physiology", definition: "Study of how living organisms and body systems function", importance: "Understanding body mechanisms" },
                { term: "Homeostasis", definition: "Maintaining stable internal environment despite external changes", importance: "Body's fundamental regulatory principle" },
                { term: "Circulatory System", definition: "Network of heart, blood vessels, blood transporting oxygen and nutrients", importance: "Delivers essential materials to all cells" },
                { term: "Neuron", definition: "Individual nerve cell transmitting electrical signals", importance: "Basic unit of nervous system" },
                { term: "Synapse", definition: "Junction between two neurons where neurotransmitters transfer signals", importance: "Enables neural communication" }
            ],
            learning_objectives: [
                "Understand anatomy and physiology of human systems",
                "Explain how systems communicate and coordinate",
                "Analyze responses to environmental stimuli",
                "Evaluate factors maintaining homeostasis",
                "Compare healthy vs. diseased system function"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Circulatory System: Transport and Regulation",
                content: "Heart pumps oxygenated blood through arteries to body tissues; deoxygenated blood returns via veins. Capillaries enable exchange between blood and tissue cells. Blood pressure varies by vessel type: high in arteries (withstanding pump force), low in capillaries (enabling exchange), variable in veins (aided by muscle contractions). Heart rate and blood vessel diameter adjust to meet changing oxygen demands. Exercise increases cardiac output; stress triggers 'fight or flight' cardiovascular response.",
                key_points: ["Systolic/diastolic pressure measurements", "Vessel structure reflects function", "Blood flow controlled by multiple mechanisms", "Lifestyle factors affect cardiovascular health"]
            },
            {
                heading: "Respiratory-Circulatory Integration: Gas Exchange",
                content: "Lungs enable oxygen uptake and CO2 removal. Breathing mechanics: diaphragm contracts (inhalation), intercostal muscles assist in deep breathing. Alveoli maximize surface area for gas exchange. Hemoglobin in red blood cells carries oxygen; oxygen level signals breathing rate adjustment. Tissue cells generate CO2 (metabolic waste) which diffuses into blood and returns to lungs. Partial pressure gradients drive gas movement across membranes.",
                key_points: ["Surface area maximization", "Diffusion gradient mechanics", "Hemoglobin-oxygen interaction", "Breathing rate regulation"]
            },
            {
                heading: "Nervous System: Rapid Communication and Control",
                content: "Central nervous system (brain + spinal cord) processes information; peripheral nervous system (nerves) connects to body. Sensory neurons transmit information to CNS; motor neurons send commands to muscles/glands. Synaptic transmission: neurotransmitters cross synapse, binding to receptors on receiving neuron. Some neurotransmitters excite (increase firing likelihood); others inhibit. Complex behaviors emerge from billions of neurons each making thousands of connections.",
                key_points: ["Reflex arcs bypass brain for speed", "Synaptic plasticity enables learning", "Neurotransmitter imbalance causes diseases", "Neural communication electrical + chemical"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Explain how circulatory and respiratory systems work together to deliver oxygen to muscles during exercise.",
                step_by_step: [
                    "Describe increased oxygen demand during muscle activity",
                    "Explain how exercise increases breathing rate and heart rate",
                    "Outline oxygen transport: lungs → blood → muscles",
                    "Show CO2 reverse pathway",
                    "Analyze feedback mechanisms maintaining adequate supply"
                ],
                answer: "Exercise creates oxygen demand; chemoreceptors detect increased CO2 and lower blood pH, signaling brain to increase breathing. Sympathetic nervous system increases heart rate. More oxygen-rich blood reaches muscles. Muscles extract more oxygen from blood. CO2 generated returns to lungs for expulsion. Integrated response ensures oxygen delivery matches demand."
            },
            {
                question: "How does the nervous system enable rapid responses to environmental threats?",
                step_by_step: [
                    "Describe sensory input detection",
                    "Explain rapid spinal reflex arc bypassing brain",
                    "Outline simultaneous brain processing of threat",
                    "Describe sympathetic nervous system activation",
                    "Analyze 'fight or flight' physiological response"
                ],
                answer: "Sensory neurons detect threat instantly. Spinal reflex arc enables rapid response (withdraw from danger) without brain delay. Simultaneously, sensory information reaches brain for conscious processing. Sympathetic nervous system triggers: heart rate increase, blood pressure rise, blood diversion to muscles, adrenaline release. Coordinated response maximizes survival chances."
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { question: "Label the heart chambers and major blood vessels.", marks: 3 },
                { question: "Describe one complete cycle of blood circulation.", marks: 3 },
                { question: "Explain how gas exchange occurs in alveoli.", marks: 3 },
                { question: "What is a synapse?", marks: 2 }
            ],
            higher: [
                { question: "Analyze how exercise affects integrated cardiovascular and respiratory function.", marks: 5 },
                { question: "Evaluate factors determining neural signal transmission speed.", marks: 4 },
                { question: "Compare sympathetic vs. parasympathetic nervous system effects.", marks: 5 },
                { question: "Discuss how system dysfunction leads to disease.", marks: 6 }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Label diagrams", "Explain integration", "Analyze feedback", "Evaluate homeostatic mechanisms"],
            common_mistakes: ["Confusing arteries/veins", "Missing integration aspects", "Incomplete pathway descriptions", "Ignoring feedback mechanisms"],
            tips: ["Draw and label key diagrams", "Show system interactions", "Include feedback loops", "Use metric units for measurements"]
        },
        section_6_additional_resources: [
            { title: "Interactive Human Body System Explorer", type: "interactive", url: "https://www.human-body-explorer.io" },
            { title: "3D Circulatory System Animation", type: "video", url: "https://www.youtube.com/human-systems" },
            { title: "ECG and Heart Physiology", type: "interactive", url: "https://www.cardiac-physiology.com" }
        ],
        section_7_assessment_answers: {
            practice_answers: ["[Sample answers provided]"],
            marking_rubric: ["0-1 marks: Significant gaps", "2-3 marks: Basic understanding", "4-5 marks: Good integration", "6+ marks: Excellent system analysis"]
        }
    },

    // 2. Advanced Chemistry - Organic Reactions (NEW)
    {
        id: "aqa_combined_science_chem_organic_reactions",
        exam_board: "aqa",
        subject: "combined_science",
        topic_title: "Organic Chemistry: Reactions, Synthesis & Mechanisms",
        topic_number: "C11",
        tier_level: "higher",
        section_1_key_concepts: {
            overview: "Advanced organic chemistry covering reaction mechanisms, synthesis strategies, and how structure determines reactivity. Understanding carbon's amazing bonding versatility.",
            key_terms: [
                { term: "Functional Group", definition: "Specific arrangement of atoms that determines molecule's chemical behavior", importance: "Predicts reaction patterns" },
                { term: "Mechanism", definition: "Step-by-step process by which reaction occurs with intermediate structures", importance: "Explains why reactions happen" },
                { term: "Isomer", definition: "Molecules with same molecular formula but different atom arrangement", importance: "Different isomers have different properties" },
                { term: "Addition Reaction", definition: "Atoms add to carbon-carbon double bonds", importance: "Common organic reaction type" },
                { term: "Substitution Reaction", definition: "One atom/group replaces another in molecule", importance: "Enables synthesis of diverse compounds" }
            ],
            learning_objectives: [
                "Understand how functional groups determine reactivity",
                "Explain reaction mechanisms at molecular level",
                "Predict products from functional group reactivity",
                "Analyze isomers and properties",
                "Evaluate synthetic routes for target molecules"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Functional Groups and Reaction Types",
                content: "Functional groups are specific atom arrangements determining how molecule reacts. Alkenes (C=C) undergo addition reactions. Alcohols (OH group) can oxidize to aldehydes/ketones or form esters. Carboxylic acids (COOH) react with alcohols forming esters. Halogenoalkanes (C-X bonds) undergo substitution. Each functional group has characteristic reactivity patterns. Recognition of functional groups enables prediction of reaction products.",
                key_points: ["Functional groups determine chemistry", "Same functional group = similar reactions", "Different functional groups = different reactivity", "Position of functional group affects reactivity"]
            },
            {
                heading: "Reaction Mechanisms: Understanding the Process",
                content: "Reactions don't occur in one step; they proceed through intermediate stages. Mechanisms show: bond breaking/formation, electron movement, intermediate structures, rate-determining steps. Curly arrows indicate electron movement: double arrows = electron pair movement; half arrows = single electron movement. Understanding mechanisms enables predicting reaction conditions, controlling selectivity, and explaining observed products.",
                key_points: ["Mechanisms require electron movement arrows", "Intermediates are reactive species", "Rate-determining step controls overall speed", "Conditions affect which mechanism operates"]
            },
            {
                heading: "Synthesis Strategy and Retrosynthesis",
                content: "Complex molecules synthesized by sequences of simpler reactions. Retrosynthesis: work backward from target molecule identifying precursors. Each disconnection represents a known reaction. Building forward from available starting materials uses retrosynthetic analysis to plan route. Consideration: available reagents, reaction selectivity (which bond reacts?), protecting groups (temporarily blocking reactive sites), and yield optimization.",
                key_points: ["Retrosynthesis works backward", "Selectivity crucial", "Convergent synthesis more efficient than linear", "Protecting groups enable complex synthesis"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Show mechanism for addition of HBr to propene and explain Markovnikov's rule.",
                step_by_step: [
                    "Draw propene structure with electron density",
                    "Show H+ attacking electron-rich double bond",
                    "Form carbocation intermediate",
                    "Show Br- attacking carbocation",
                    "Identify product as 2-bromopropane"
                ],
                answer: "Propene's π electrons attract H+, forming carbocation. Secondary carbocation (more stable) forms at carbon with more alkyl groups. Br- attacks carbocation. Markovnikov's rule: H adds to carbon with more hydrogens; Br adds to carbon with more alkyl groups. Product: 2-bromopropane predominates."
            },
            {
                question: "Plan synthesis of ethyl ethanoate from ethene.",
                step_by_step: [
                    "Identify starting material: ethene",
                    "Identify target: ethyl ethanoate (ester)",
                    "Work backward: ester requires alcohol + carboxylic acid",
                    "Route: Ethene → ethanol (by hydration) → acetaldehyde (oxidize) → acetic acid (oxidize) + ethanol (from hydration) → ethyl ester (esterification)"
                ],
                answer: "Ethene hydrated to ethanol. Ethanol oxidized to acetic acid. Acetic acid reacted with ethanol in presence of H2SO4 catalyst and heat, producing ethyl ethanoate. Multiple steps required due to functional group transformations needed."
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { question: "Define functional group.", marks: 2 },
                { question: "Name three common functional groups.", marks: 2 },
                { question: "What do curly arrows represent in mechanisms?", marks: 2 },
                { question: "Give example of addition reaction.", marks: 2 }
            ],
            higher: [
                { question: "Show mechanism for bromination of benzene.", marks: 5 },
                { question: "Analyze why some carbocations more stable than others.", marks: 4 },
                { question: "Plan two-step synthesis for target molecule.", marks: 6 },
                { question: "Explain how reaction conditions affect selectivity.", marks: 5 }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Show mechanism", "Explain selectivity", "Plan synthesis", "Predict product"],
            common_mistakes: ["Incorrect electron movement", "Missing intermediates", "Wrong carbocation stability", "Incomplete mechanisms"],
            tips: ["Always show curly arrows", "Include all intermediates", "Consider stability", "Think retrosynthetically"]
        },
        section_6_additional_resources: [
            { title: "Organic Reaction Mechanism Visualizer", type: "interactive", url: "https://www.organic-mechanisms.io" },
            { title: "Synthesis Problem Database", type: "interactive", url: "https://www.synthesis-practice.com" },
            { title: "Functional Group Properties Chart", type: "article", url: "https://www.functional-groups-guide.io" }
        ],
        section_7_assessment_answers: {
            practice_answers: ["[Sample answers provided]"],
            marking_rubric: ["0-1 marks: Incomplete mechanism", "2-3 marks: Basic mechanism shown", "4-5 marks: Clear mechanism with intermediates", "6+ marks: Complete mechanism with explanation"]
        }
    }
];
