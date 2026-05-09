import { Topic } from "@/types";

export const SEED_TOPICS_MISSING_CORE: Topic[] = [
    {
        id: "aqa_combined_science_chem_atomic",
        exam_board: "aqa",
        subject: "combined_science",
        topic_title: "Chemistry: Atomic Structure",
        topic_number: "C1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "The atom is the fundamental building block of matter. This topic explores the history of the atomic model, the subatomic particles (protons, neutrons, electrons), and how elements are arranged in the Periodic Table.",
            key_terms: [
                { term: "Atom", definition: "The smallest part of an element that can exist", importance: "Basic unit of chemistry" },
                { term: "Isotope", definition: "Atoms of the same element with different numbers of neutrons", importance: "Explains relative atomic mass" },
                { term: "Ion", definition: "An atom that has lost or gained electrons", importance: "Key to understanding bonding" },
                { term: "Mass Number", definition: "The sum of protons and neutrons in a nucleus", importance: "Determines atomic mass" },
                { term: "Electronic Structure", definition: "The arrangement of electrons in shells", importance: "Determines reactivity" }
            ],
            learning_objectives: [
                "Describe the structure of an atom",
                "Calculate subatomic particles from mass and atomic numbers",
                "Explain the development of the atomic model (Dalton to Chadwick)",
                "Write electronic configurations for the first 20 elements",
                "Compare isotopes and calculate relative atomic mass"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "The Structure of the Atom", content: "Atoms consist of a central nucleus containing protons (positive charge) and neutrons (neutral). Electrons (negative charge) orbit the nucleus in specific shells. Protons and neutrons have a relative mass of 1, while electrons have a negligible mass (1/1840). The overall charge of an atom is zero because the number of protons equals the number of electrons.", interactive_type: "atomic", animation_type: "pulse",
                key_points: ["Proton: +1 charge, mass 1", "Neutron: 0 charge, mass 1", "Electron: -1 charge, mass ≈ 0", "Nucleus contains most of the mass"]
            },
            {
                heading: "Development of the Atomic Model", content: "Our understanding of the atom has changed over time. 1. Dalton (solid spheres). 2. Thomson (Plum Pudding model — ball of positive charge with stuck-in electrons). 3. Rutherford (Alpha particle scattering experiment proved a dense positive nucleus). 4. Bohr (Electrons in shells/energy levels). 5. Chadwick (Proved the existence of neutrons).", interactive_type: "atomic", animation_type: "pulse",
                key_points: ["Rutherford's experiment was the turning point", "The model is 'refined' rather than replaced", "Science is based on experimental evidence"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Calculate the number of protons, neutrons, and electrons in a Chlorine-35 atom (Atomic number 17)",
                step_by_step: ["Protons = Atomic number = 17", "Electrons = Protons (in an atom) = 17", "Neutrons = Mass number - Atomic number = 35 - 17 = 18"],
                answer: "p: 17, e: 17, n: 18"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "c1f1", question: "Where are electrons found in an atom?", type: "mcq", options: ["In the nucleus", "In shells orbiting the nucleus", "Inside protons", "Inside neutrons"], correct_answer: "In shells orbiting the nucleus", explanation: "Electrons occupy energy levels or shells outside the nucleus", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "c1h1", question: "A sample of Gallium contains 60% Ga-69 and 40% Ga-71. Calculate the relative atomic mass.", type: "calculation", correct_answer: "69.8", explanation: "(69 * 0.6) + (71 * 0.4) = 41.4 + 28.4 = 69.8", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Describe", "Compare", "Calculate"],
            exam_tips: ["Always use the periodic table provided in the paper", "Don't confuse mass number with atomic number", "Show your working for mass calculations"],
            common_mistakes: ["Thinking electrons have mass 1", "Mixing up Rutherford and Thomson's models"],
            time_allocation: "10 mins"
        },
        section_6_additional_resources: {
            resources: [{ title: "Atomic Build Game", type: "interactive", description: "Build atoms and ions by dragging subatomic particles" }],
            revision_checklist: ["I can draw the electronic structure of sodium", "I know the relative charges of all subatomic particles"]
        },
        section_7_assessment_answers: {
            answers: [],
            grade_boundaries: { grade_9: 85, grade_7: 70, grade_5: 50, grade_4: 40 }
        },
        revision_notes_long: "Mastering Atomic Structure is non-negotiable for GCSE Chemistry. It forms the logic for the entire Periodic Table. For instance, elements in Group 1 have one electron in their outer shell, making them highly reactive. This 'electron-centric' view of chemistry explains why some atoms form covalent bonds while others form ionic ones. When revising, pay special attention to the alpha scattering experiment—this is a classic 6-mark question. You must be able to state that most particles passed through (proving empty space), some were deflected (proving a positive nucleus), and a few bounced back (proving a dense nucleus).",
        expert_tips_detailed: [
            "Remember 'PANIC': Protons Are Noble In Center (Nucleus), Electrons exit (Outer shells).",
            "In higher tier, be ready to explain isotopes in terms of physical vs chemical properties. Isotopes have SAME chemical properties but DIFFERENT physical ones.",
            "Write the number of electrons in brackets like (2, 8, 1) to save time."
        ],
        scientific_context: "Atomic theory has evolved over 2,500 years, from Democritus' 'atomos' to modern quantum mechanics. Today, we use particle accelerators like CERN to probe even smaller 'quarks' inside protons.",
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },
    {
        id: "aqa_combined_science_phys_particle_model",
        exam_board: "aqa",
        subject: "combined_science",
        topic_title: "Physics: Particle Model of Matter",
        topic_number: "P3",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Everything is made of particles. This topic explains how the movement and arrangement of these particles determine the state of matter (solid, liquid, gas) and their properties like density and internal energy.",
            key_terms: [
                { term: "Density", definition: "Mass per unit volume (ρ = m/V)", importance: "Explains why things float or sink" },
                { term: "Specific Latent Heat", definition: "Energy needed to change the state of 1kg of a substance without temperature change", importance: "Key to phase changes" },
                { term: "Internal Energy", definition: "Total kinetic and potential energy of all particles in a system", importance: "The 'true' heat of an object" },
                { term: "Sublimation", definition: "Change from solid directly to gas", importance: "Rare but important phase change" }
            ],
            learning_objectives: [
                "Calculate density for regular and irregular objects",
                "Describe the arrangement of particles in solids, liquids, and gases",
                "Explain heating and cooling curves",
                "Calculate energy changes using Specific Heat Capacity and Latent Heat",
                "Understand gas pressure in terms of particle collisions"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "States of Matter & Particle Arrangement", content: "SOLIDS: Particles in fixed positions, regular lattice, vibrating. LIQUIDS: Particles close but can move over each other, random arrangement. GASES: Particles far apart, moving rapidly in random directions. When you heat a substance, you increase the kinetic energy of its particles.", interactive_type: "atomic", animation_type: "pulse",
                key_points: ["Solids have strongest intermolecular forces", "Gases have zero/negligible forces", "Density is highest in solids (usually)"]
            },
            {
                heading: "Specific Latent Heat vs Specific Heat Capacity", content: "Specific Heat Capacity (c) is the energy to raise temperature of 1kg by 1°C. Specific Latent Heat (L) is the energy to change state of 1kg without temperature change. On a heating curve, the horizontal 'flat' lines represent the change of state where temperature stays constant while latent heat is absorbed.", animation_type: "reveal",
                key_points: ["Formula for temp change: ΔE = m c Δθ", "Formula for state change: E = m L", "Fusion = Solid to Liquid; Vaporisation = Liquid to Gas"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "A block of iron has a mass of 7900kg and a volume of 1m³. Calculate its density.",
                step_by_step: ["Density = Mass / Volume", "Density = 7900 / 1", "Density = 7900 kg/m³"],
                answer: "7900 kg/m³"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "p3f1", question: "Which state of matter has the highest density usually?", type: "mcq", options: ["Solid", "Liquid", "Gas", "Plasma"], correct_answer: "Solid", explanation: "Particles are most closely packed in a solid", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "p3h1", question: "Calculate the energy needed to melt 0.5kg of ice. Specific Latent Heat of fusion = 334,000 J/kg.", type: "calculation", correct_answer: "167,000 J", explanation: "E = m * L = 0.5 * 334,000 = 167,000", marks: 2, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Calculate", "Describe", "Explain"],
            exam_tips: ["Remember the flat parts of heating curves mean state change", "Always state the units (e.g. kg/m³ for density)", "Density of water is 1000 kg/m³—know this as a reference"],
            common_mistakes: ["Using specific heat capacity formula during a state change", "Mixing up fusion and vaporisation"],
            time_allocation: "12 mins"
        },
        section_6_additional_resources: {
            resources: [{ title: "PhET Particle States Lab", type: "interactive", description: "Heat and cool particles to see them change state" }],
            revision_checklist: ["I can use ρ = m/V", "I understand why temperature doesn't rise during melting"]
        },
        section_7_assessment_answers: {
            answers: [],
            grade_boundaries: { grade_9: 88, grade_7: 72, grade_5: 52, grade_4: 42 }
        },
        revision_notes_long: "The Particle Model is the bridge between Chemistry and Physics. It explains the 'macro' behavior of materials through 'micro' particle mechanics. Gas pressure is a particularly vital concept—it is the result of billions of particles colliding with the walls of a container. If you increase temperature, particles move faster and hit the walls harder and more often, increasing pressure. This is a common exam theme. Also, remember the anomaly of water—ice is less dense than liquid water because of its unique crystal structure, which is why icebergs float!",
        expert_tips_detailed: [
            "When describing gas pressure, always use the word 'collisions'.",
            "Units! Density can be g/cm³ or kg/m³. 1 g/cm³ = 1000 kg/m³. Be very careful with this conversion.",
            "Draw particle diagrams with at least 9 circles to show a clear arrangement."
        ],
        scientific_context: "The Brownian Motion experiment (pollen grains in water) was the first physical proof that atoms and molecules actually exist, long before we could see them with microscopes.",
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },
    {
        id: "aqa_english_literature_lit_19th_novel",
        exam_board: "aqa",
        subject: "english_literature",
        topic_title: "19th Century Novel: Jekyll & Hyde",
        topic_number: "2",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Stevenson's classic novella explores the duality of human nature, the conflict between science and religion, and the rigid social expectations of Victorian London. Understanding the historical context is vital for AO3 marks.",
            key_terms: [
                { term: "Duality", definition: "The state of having two parts, often opposites", importance: "The central theme of the novella" },
                { term: "Physiognomy", definition: "The Victorian belief that character is visible in facial features", importance: "Explains the visceral reaction to Hyde" },
                { term: "Atavism", definition: "Reversion to an ancestral or primitive type", importance: "Links to fears of evolution/degeneration" },
                { term: "Repression", definition: "Subduing desires/emotions to fit social norms", importance: "Drives Jekyll's need to create Hyde" }
            ],
            learning_objectives: [
                "Analyse the character of Dr. Jekyll and Mr. Hyde",
                "Explore the theme of duality throughout the text",
                "Evaluate the significance of the Victorian setting (London fog, dark streets)",
                "Identify and analyse Stevenson's use of gothic conventions",
                "Link the text to Victorian fears (Evolution, degeneration, reputation)"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "The Duality of Man", content: "Jekyll believes 'man is not truly one, but truly two'. He creates Hyde to separate his 'lower' desires from his respectable public identity. However, the experiment fails because Hyde—the pure evil—begins to dominate the relationship. Stevenson suggests that by repressing our darker side, we only make it more powerful.", animation_type: "reveal",
                key_points: ["Jekyll = Reputation, Logic, Science", "Hyde = Impulse, Violence, Atavism", "They share a body but not a conscience", "Hyde grows stronger as the novel progresses"]
            },
            {
                heading: "Victorian Context & Fears", content: "Written in 1886, the novel reflects fears following Darwin's 'Origin of Species'. Victorians were terrified that humans could 'devolve' back into animals. Hyde is often described as 'troglodytic' or 'ape-like'. The novel also critiqued the hypocrisy of Victorian gentlemen who maintained perfect public facades while engaging in 'vices' in private.", animation_type: "reveal",
                key_points: ["Fear of scientific overreach", "Urban terror (the labyrinthine city)", "The importance of reputation (Utterson's role)"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "How does Stevenson present Mr. Hyde as a frightening character? (30 marks)",
                step_by_step: [
                    "Intro: Hyde is frightening not just for his violence, but for his 'indescribable' deformity and atavistic nature.",
                    "PEEL 1: The 'trampling' of the girl (Act 1). Use of verb 'trampled calmly' suggests sociopathic lack of empathy.",
                    "PEEL 2: Description of Hyde. Use 'deformity' and 'ape-like fury'. He evokes an immediate, instinctual hatred in others.",
                    "PEEL 3: Context. Hyde represents the primitive 'Id' that Victorians tried to hide. He is the internal monster.",
                    "Conclusion: Hyde is the personification of the evil within Jekyll, making him a psychological threat as well as a physical one."
                ],
                answer: "A structured essay focusing on language analysis and Victorian anxieties."
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "jhf1", question: "Who is the narrator for most of the story?", type: "mcq", options: ["Dr. Jekyll", "Mr. Hyde", "Mr. Utterson", "Dr. Lanyon"], correct_answer: "Mr. Utterson", explanation: "Utterson acts as the detective-like observer through whose eyes we see the events", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "jhh1", question: "Analyse the significance of the door in Chapter 1. How does it symbolise Hyde?", type: "essay", correct_answer: "The door is 'blistered and distained', contrasting with the respectable street. It represents the 'hidden' side of Jekyll's life and the barrier between public and private self.", explanation: "Focus on symbolic architecture and contrast", marks: 10, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Analyse", "Explore", "To what extent"],
            exam_tips: ["Include quotes for Jekyll, Hyde, and Utterson", "Discuss the structure: Why is Jekyll's confession at the very end?", "Mention the weather: The fog represents the lack of clarity and secrets"],
            common_mistakes: ["Only talking about the plot", "Ignoring Utterson", "Forgetting the science vs religion conflict"],
            time_allocation: "45 mins"
        },
        section_6_additional_resources: {
            resources: [{ title: "Map of Victorian London", type: "article", description: "See where Jekyll and Hyde lived to understand the social divide" }],
            revision_checklist: ["I can explain the significance of the name 'Hyde' (Hide)", "I know the 3 narrator perspectives"]
        },
        section_7_assessment_answers: {
            answers: [],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        revision_notes_long: "To reach the top bands in English Literature, you must treat the novel as a 'construct'. Stevenson didn't just write a horror story; he wrote a social critique. The character of Utterson is crucial—he represents the 'ideal' Victorian man (austere, repressed, loyal). By following his perspective, Stevenson makes the revelation of Jekyll's 'sin' even more shocking. Look for the contrast between light and dark throughout the text. The 'well-polished' front of Jekyll's house vs. the 'sinister' back door used by Hyde is a direct architectural metaphor for the human psyche. Also, pay attention to the scientific language—Jekyll's 'tincture' and 'salts' give the gothic horror a grounding in (then) modern science, making it feel dangerously possible to the 19th-century reader.",
        expert_tips_detailed: [
            "Use the word 'microcosm' to describe how the relationship between Jekyll and Hyde reflects the wider Victorian society.",
            "Structural Tip: The novella is an epistolary novel (told through letters/documents). This builds suspense and mimics a legal investigation.",
            "Quotable Gold: 'I saw that sawbones turn sick and white with the desire to kill him' — shows Hyde's power to corrupt even the most rational people."
        ],
        historical_significance: "The novella was so popular that 'Jekyll and Hyde' entered the English language as a phrase for someone with a split personality just months after publication.",
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }
];
