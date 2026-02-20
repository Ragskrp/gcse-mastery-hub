import { Quiz } from "@/types";

export const SEED_QUIZZES_EXTENDED: Quiz[] = [
    // ============================================================
    // NEW QUIZZES FOR EXTENDED TOPICS
    // ============================================================

    // ENGLISH LITERATURE — Romantic Poetry Quiz
    {
        id: "quiz_english_lit_romantic_1",
        title: "Romantic Poetry: Wordsworth, Keats & Byron",
        topic_reference: "aqa_english_literature_romantic_poetry",
        subject: "english_literature",
        exam_board: "aqa",
        questions: [
            { id: "qrom1", question: "What is Romanticism?", type: "short_answer", correct_answer: "Literary movement emphasizing emotion, imagination, nature over reason", explanation: "Romanticism prioritized individual feeling and natural beauty", marks: 2, difficulty: "foundation", topic_reference: "aqa_english_literature_romantic_poetry" },
            { id: "qrom2", question: "Which poem by Wordsworth features daffodils?", type: "mcq", options: ["Daffodils/I Wandered Lonely as a Cloud", "The Prelude", "Tintern Abbey", "Lucy Poems"], correct_answer: "Daffodils/I Wandered Lonely as a Cloud", explanation: "Famous Romantic poem contrasting solitude and joy", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_literature_romantic_poetry" },
            { id: "qrom3", question: "What is the theme of Keats' 'To a Nightingale'?", type: "short_answer", correct_answer: "Beauty and mortality; transience of human life vs. eternal song", explanation: "Keats explores conflict between desire for permanence and awareness of death", marks: 2, difficulty: "higher", topic_reference: "aqa_english_literature_romantic_poetry" },
            { id: "qrom4", question: "What is the 'Byronic hero'?", type: "short_answer", correct_answer: "Cynical, passionate outsider questioning society; rebellious and flawed", explanation: "Byron's influence on literature through his distinctive hero archetype", marks: 2, difficulty: "higher", topic_reference: "aqa_english_literature_romantic_poetry" },
            { id: "qrom5", question: "Analyze Wordsworth's use of nature in 'Daffodils'", type: "calculation", correct_answer: "Nature provides spiritual renewal; memory of natural beauty heals soul even in solitude", explanation: "Nature serves as source of joy, comfort, and philosophical insight", marks: 3, difficulty: "higher", topic_reference: "aqa_english_literature_romantic_poetry" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 10, difficulty: "mixed"
    },

    // ENGLISH LITERATURE — Gothic Literature Quiz
    {
        id: "quiz_english_lit_gothic_1",
        title: "Gothic Literature: Horror & Psychology",
        topic_reference: "aqa_english_literature_gothic_horror",
        subject: "english_literature",
        exam_board: "aqa",
        questions: [
            { id: "qgoth1", question: "What are key features of Gothic literature?", type: "short_answer", correct_answer: "Darkness, suspense, supernatural, psychological terror, claustrophobic settings, internal horror", explanation: "Gothic tradition fundamentally about creating atmosphere of dread", marks: 2, difficulty: "foundation", topic_reference: "aqa_english_literature_gothic_horror" },
            { id: "qgoth2", question: "What is the 'doppelgänger' in Gothic tradition?", type: "mcq", options: ["Double or alter ego representing hidden self", "Supernatural ghost", "Evil twin character", "Both A and C"], correct_answer: "Both A and C", explanation: "Doppelgänger shows internal psychological fragmentation externalized", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_literature_gothic_horror" },
            { id: "qgoth3", question: "Why is setting crucial in Gothic literature?", type: "short_answer", correct_answer: "Setting creates atmosphere; reflects character psychology; represents internal horror externally", explanation: "Gothic environments trap characters physically and psychologically", marks: 2, difficulty: "higher", topic_reference: "aqa_english_literature_gothic_horror" },
            { id: "qgoth4", question: "How does Gothic explore repressed desires?", type: "short_answer", correct_answer: "Through supernatural violations of 'natural order'; hidden character motivations; transgression of social norms", explanation: "Gothic makes psychological darkness tangible and threatening", marks: 2, difficulty: "higher", topic_reference: "aqa_english_literature_gothic_horror" },
            { id: "qgoth5", question: "Analyze unreliable narration in Gothic texts", type: "calculation", correct_answer: "Narrator's mental state deteriorates; readers question reality; creates uncertainty about truth of events", explanation: "Unreliable narration intensifies psychological horror for reader", marks: 3, difficulty: "higher", topic_reference: "aqa_english_literature_gothic_horror" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 10, difficulty: "mixed"
    },

    // ENGLISH LANGUAGE — Media & Digital Quiz
    {
        id: "quiz_english_lang_media_1",
        title: "Media & Digital Communication",
        topic_reference: "aqa_english_language_media_digital",
        subject: "english_language",
        exam_board: "aqa",
        questions: [
            { id: "qmed1", question: "What is 'netspeak' or online language?", type: "short_answer", correct_answer: "Modified language conventions in online communication; abbreviations, emojis, rapid-fire exchanges", explanation: "Digital platforms shape language differently from traditional writing", marks: 2, difficulty: "foundation", topic_reference: "aqa_english_language_media_digital" },
            { id: "qmed2", question: "Compare language conventions on Twitter vs. Instagram", type: "mcq", options: ["Both are identical", "Twitter: conversational/rapid; Instagram: visual/narrative", "Instagram: faster; Twitter: slower", "No significant difference"], correct_answer: "Twitter: conversational/rapid; Instagram: visual/narrative", explanation: "Platform constraints and culture shape language use", marks: 2, difficulty: "higher", topic_reference: "aqa_english_language_media_digital" },
            { id: "qmed3", question: "What is multimodal communication?", type: "short_answer", correct_answer: "Combining multiple communication modes: text, image, video, sound", explanation: "Digital communication inherently multimodal unlike traditional writing alone", marks: 1, difficulty: "foundation", topic_reference: "aqa_english_language_media_digital" },
            { id: "qmed4", question: "How do memes communicate meaning?", type: "short_answer", correct_answer: "Image + text + cultural reference combine to create compact communication; humor/social commentary", explanation: "Memes efficient communication exploiting shared cultural knowledge", marks: 2, difficulty: "higher", topic_reference: "aqa_english_language_media_digital" },
            { id: "qmed5", question: "Analyze manipulation techniques in targeted digital advertising", type: "calculation", correct_answer: "Emotional appeals, personalization, algorithmic curation, microtargeting, social proof exploitation", explanation: "Digital advertising increasingly sophisticated in persuasion tactics", marks: 3, difficulty: "higher", topic_reference: "aqa_english_language_media_digital" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 10, difficulty: "mixed"
    },

    // HISTORY — Migration & Empire Quiz
    {
        id: "quiz_history_empire_1",
        title: "Colonialism, Empire & Migration",
        topic_reference: "aqa_history_hist_migration_empire",
        subject: "history",
        exam_board: "aqa",
        questions: [
            { id: "qemp1", question: "Define colonialism", type: "short_answer", correct_answer: "System where powerful nations govern distant territories; territorial control by external power", explanation: "Colonialism fundamentally about extractive control", marks: 2, difficulty: "foundation", topic_reference: "aqa_history_hist_migration_empire" },
            { id: "qemp2", question: "What were 'push' and 'pull' factors in migration?", type: "short_answer", correct_answer: "Push: hardship, persecution, conflict in origin. Pull: opportunity, freedom, resources in destination", explanation: "Migration driven by combination of repulsion and attraction", marks: 2, difficulty: "foundation", topic_reference: "aqa_history_hist_migration_empire" },
            { id: "qemp3", question: "How did colonizers justify imperial expansion?", type: "short_answer", correct_answer: "'Civilizing mission', religious conversion, pseudoscientific racism, Social Darwinism, 'white man's burden'", explanation: "Ideological justifications obscured economic exploitation", marks: 2, difficulty: "higher", topic_reference: "aqa_history_hist_migration_empire" },
            { id: "qemp4", question: "Analyze relationship between colonial economics and slave trade", type: "short_answer", correct_answer: "Slave trade provided labor for colonial extraction; economic demand drove forced migration", explanation: "Economic systems and human trafficking interconnected", marks: 3, difficulty: "higher", topic_reference: "aqa_history_hist_migration_empire" },
            { id: "qemp5", question: "Compare long-term impacts on colonized vs. colonizing societies", type: "calculation", correct_answer: "Colonized: structural poverty, institutional disruption, resource extraction, cultural suppression. Colonizers: accumulated wealth, political power, resources", explanation: "Postcolonial inequality reflects historical wealth transfers", marks: 3, difficulty: "higher", topic_reference: "aqa_history_hist_migration_empire" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 12, difficulty: "mixed"
    },

    // BUSINESS — Innovation & Entrepreneurship Quiz
    {
        id: "quiz_business_innovation_1",
        title: "Innovation, Entrepreneurship & Startups",
        topic_reference: "aqa_business_bus_innovation",
        subject: "business",
        exam_board: "aqa",
        questions: [
            { id: "qinn1", question: "Define innovation", type: "short_answer", correct_answer: "Implementation of new ideas, processes, products creating value", explanation: "Innovation distinguishes competitive advantage", marks: 1, difficulty: "foundation", topic_reference: "aqa_business_bus_innovation" },
            { id: "qinn2", question: "What is an MVP (Minimum Viable Product)?", type: "mcq", options: ["Maximum value product", "Most viable product", "Simplest version testing core hypothesis", "Most valuable at price"], correct_answer: "Simplest version testing core hypothesis", explanation: "MVP enables rapid market validation", marks: 1, difficulty: "foundation", topic_reference: "aqa_business_bus_innovation" },
            { id: "qinn3", question: "Compare incremental vs. disruptive innovation", type: "short_answer", correct_answer: "Incremental: improves existing products. Disruptive: creates entirely new markets/categories", explanation: "Different innovation types require different strategies", marks: 2, difficulty: "higher", topic_reference: "aqa_business_bus_innovation" },
            { id: "qinn4", question: "Analyze startup funding stages and investor expectations", type: "short_answer", correct_answer: "Early: personal/friends&family (higher risk). Growth: venture capital (5-10x returns). Scaling: institutional (stability)", explanation: "Funding requirements and dilution increase with growth stages", marks: 3, difficulty: "higher", topic_reference: "aqa_business_bus_innovation" },
            { id: "qinn5", question: "What factors determine startup success vs. failure?", type: "calculation", correct_answer: "Market need, team capability, timing, execution, funding adequacy, adaptability", explanation: "Multiple factors combine to determine outcome", marks: 3, difficulty: "higher", topic_reference: "aqa_business_bus_innovation" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 10, difficulty: "mixed"
    },

    // SCIENCE — Human Body Systems Quiz
    {
        id: "quiz_science_body_systems_1",
        title: "Human Body Systems: Circulation & Respiration",
        topic_reference: "aqa_combined_science_bio_human_body",
        subject: "combined_science",
        exam_board: "aqa",
        questions: [
            { id: "qbody1", question: "Name the four chambers of the heart", type: "short_answer", correct_answer: "Left atrium, right atrium, left ventricle, right ventricle", explanation: "Heart structure enables efficient blood circulation", marks: 2, difficulty: "foundation", topic_reference: "aqa_combined_science_bio_human_body" },
            { id: "qbody2", question: "What is the role of hemoglobin?", type: "mcq", options: ["Pumps blood", "Carries oxygen in red blood cells", "Filters waste", "Produces antibodies"], correct_answer: "Carries oxygen in red blood cells", explanation: "Hemoglobin-oxygen binding crucial for oxygen transport", marks: 1, difficulty: "foundation", topic_reference: "aqa_combined_science_bio_human_body" },
            { id: "qbody3", question: "How does gas exchange occur in alveoli?", type: "short_answer", correct_answer: "O₂ diffuses from air into blood; CO₂ diffuses from blood into air to exhale", explanation: "Surface area and concentration gradients drive exchange", marks: 2, difficulty: "higher", topic_reference: "aqa_combined_science_bio_human_body" },
            { id: "qbody4", question: "Explain how exercise affects circulatory and respiratory systems", type: "short_answer", correct_answer: "Increased oxygen demand → faster breathing + higher heart rate → more oxygenated blood to muscles", explanation: "Integrated response ensures oxygen supply matches demand", marks: 3, difficulty: "higher", topic_reference: "aqa_combined_science_bio_human_body" },
            { id: "qbody5", question: "How does nervous system enable rapid response to threat?", type: "calculation", correct_answer: "Spinal reflex arc (immediate withdrawal); sympathetic activation (fight/flight); adrenaline release", explanation: "Multiple mechanisms coordinate rapid survival response", marks: 3, difficulty: "higher", topic_reference: "aqa_combined_science_bio_human_body" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 11, difficulty: "mixed"
    },

    // SCIENCE — Organic Chemistry Reactions Quiz
    {
        id: "quiz_science_organic_1",
        title: "Organic Chemistry: Reactions & Mechanisms",
        topic_reference: "aqa_combined_science_chem_organic_reactions",
        subject: "combined_science",
        exam_board: "aqa",
        questions: [
            { id: "qorg1", question: "What determines organic molecule reactivity?", type: "short_answer", correct_answer: "Functional groups; electron-rich/poor regions; bond types (single/double/triple)", explanation: "Functional group recognition predicts reaction patterns", marks: 2, difficulty: "foundation", topic_reference: "aqa_combined_science_chem_organic_reactions" },
            { id: "qorg2", question: "What does a curly arrow represent in mechanism?", type: "mcq", options: ["Electron pair movement", "Single electron movement", "Heat application", "Catalyst addition"], correct_answer: "Electron pair movement", explanation: "Mechanisms show electron movement driving reactions", marks: 1, difficulty: "foundation", topic_reference: "aqa_combined_science_chem_organic_reactions" },
            { id: "qorg3", question: "Define isomers and give example", type: "short_answer", correct_answer: "Molecules with same formula but different atom arrangement; e.g., butane isomers (n-butane vs. isobutane)", explanation: "Isomers have same atoms but different properties", marks: 2, difficulty: "higher", topic_reference: "aqa_combined_science_chem_organic_reactions" },
            { id: "qorg4", question: "Explain carbocation stability order", type: "short_answer", correct_answer: "Tertiary > secondary > primary (alkyl groups stabilize positive charge)", explanation: "Stability determines product selectivity in reactions", marks: 2, difficulty: "higher", topic_reference: "aqa_combined_science_chem_organic_reactions" },
            { id: "qorg5", question: "Plan synthesis route from propene to propanal", type: "calculation", correct_answer: "Propene → hydration → propanol → oxidation → propanal", explanation: "Multi-step synthesis requires functional group transformations", marks: 3, difficulty: "higher", topic_reference: "aqa_combined_science_chem_organic_reactions" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 10, difficulty: "mixed"
    },

    // SCIENCE — Modern Physics Quiz
    {
        id: "quiz_science_modern_physics_1",
        title: "Modern Physics: Quantum, Nuclear & Relativity",
        topic_reference: "aqa_combined_science_phys_modern",
        subject: "combined_science",
        exam_board: "aqa",
        questions: [
            { id: "qphys1", question: "What is a photon?", type: "short_answer", correct_answer: "Discrete packet of electromagnetic energy (light quantum)", explanation: "Photons show light's particle nature", marks: 1, difficulty: "foundation", topic_reference: "aqa_combined_science_phys_modern" },
            { id: "qphys2", question: "Why does frequency matter in photoelectric effect?", type: "short_answer", correct_answer: "Higher frequency → more energy per photon → greater kinetic energy of ejected electrons", explanation: "Contradicts classical wave theory; explains quantum nature", marks: 2, difficulty: "foundation", topic_reference: "aqa_combined_science_phys_modern" },
            { id: "qphys3", question: "Name three types of radioactive decay", type: "mcq", options: ["Alpha, beta, gamma", "Alpha, nuclear, thermal", "Fusion, fission, gamma", "Neutron, proton, alpha"], correct_answer: "Alpha, beta, gamma", explanation: "Three main decay types with different radiation", marks: 1, difficulty: "foundation", topic_reference: "aqa_combined_science_phys_modern" },
            { id: "qphys4", question: "What does E=mc² mean physically?", type: "short_answer", correct_answer: "Small mass converts to enormous energy (c² is huge); explains nuclear energy release", explanation: "Mass-energy equivalence explains nuclear power", marks: 2, difficulty: "higher", topic_reference: "aqa_combined_science_phys_modern" },
            { id: "qphys5", question: "Calculate remaining mass after 3 half-lives starting with 1000g", type: "calculation", correct_answer: "125g remaining (1000 → 500 → 250 → 125)", explanation: "Exponential decay follows half-life formula", marks: 2, difficulty: "higher", topic_reference: "aqa_combined_science_phys_modern" }
        ],
        time_limit: 15, passing_score: 70, total_marks: 8, difficulty: "mixed"
    }
];
