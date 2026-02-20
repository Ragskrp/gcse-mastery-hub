import { Topic } from "@/types";

export async function getTopicById(topicId: string): Promise<Topic | null> {
    try {
        const response = await fetch(`/content/topics/${topicId}.json`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error("Failed to load topic:", error);
        return null;
    }
}

export async function getAllTopicsMeta(): Promise<Pick<Topic, "id" | "subject" | "topic_title" | "exam_board" | "topic_number" | "tier_level">[]> {
    // In a real static build, we'd generate a manifest.json of all topics.
    // For now, we will fallback to a hardcoded list of metadata ONLY (lightweight).
    // This allows searching/listing without loading full content.
    return TOPIC_MANIFEST;
}

// Lightweight manifest (ID + basic info only)
export const TOPIC_MANIFEST: Pick<Topic, "id" | "subject" | "topic_title" | "exam_board" | "topic_number" | "tier_level">[] = [
    // MATHS
    { id: "edexcel_maths_number_structure", subject: "maths", exam_board: "edexcel", topic_title: "Number: Structure and Calculation", topic_number: "1.1", tier_level: "both" },
    { id: "edexcel_maths_number_fractions", subject: "maths", exam_board: "edexcel", topic_title: "Number: Fractions, Decimals, Percentages", topic_number: "1.2", tier_level: "both" },
    { id: "edexcel_maths_algebra_notation", subject: "maths", exam_board: "edexcel", topic_title: "Algebra: Notation and Equations", topic_number: "2.1", tier_level: "both" },
    { id: "edexcel_maths_algebra_graphs", subject: "maths", exam_board: "edexcel", topic_title: "Algebra: Graphs", topic_number: "2.2", tier_level: "both" },
    { id: "edexcel_maths_ratio", subject: "maths", exam_board: "edexcel", topic_title: "Ratio and Proportion", topic_number: "3.1", tier_level: "both" },
    { id: "edexcel_maths_geometry_angles", subject: "maths", exam_board: "edexcel", topic_title: "Geometry: Angles and Polygons", topic_number: "4.1", tier_level: "both" },
    { id: "edexcel_maths_geometry_measures", subject: "maths", exam_board: "edexcel", topic_title: "Geometry: Measures and Mensuration", topic_number: "4.2", tier_level: "both" },
    { id: "edexcel_maths_probability", subject: "maths", exam_board: "edexcel", topic_title: "Probability", topic_number: "5.1", tier_level: "both" },
    { id: "edexcel_maths_statistics", subject: "maths", exam_board: "edexcel", topic_title: "Statistics", topic_number: "6.1", tier_level: "both" },
    { id: "edexcel_maths_functions_graphs", subject: "maths", exam_board: "edexcel", topic_title: "Functions & Linear Graphs", topic_number: "2.3", tier_level: "both" },
    { id: "edexcel_maths_trigonometry", subject: "maths", exam_board: "edexcel", topic_title: "Trigonometry & Right-Angled Triangles", topic_number: "4.3", tier_level: "higher" },
    { id: "edexcel_maths_circles", subject: "maths", exam_board: "edexcel", topic_title: "Circles: Arcs, Sectors & Theorems", topic_number: "4.4", tier_level: "both" },
    { id: "edexcel_maths_transformations", subject: "maths", exam_board: "edexcel", topic_title: "Transformations", topic_number: "4.5", tier_level: "both" },
    { id: "edexcel_maths_quadratics", subject: "maths", exam_board: "edexcel", topic_title: "Quadratic Equations & Inequalities", topic_number: "2.4", tier_level: "higher" },
    
    // NEW COMPREHENSIVE MATHS TOPICS - Enhanced Curriculum
    { id: "edexcel_maths_powers_indices", subject: "maths", exam_board: "edexcel", topic_title: "Powers, Indices & Standard Form", topic_number: "N1", tier_level: "both" },
    { id: "edexcel_maths_sequences_series", subject: "maths", exam_board: "edexcel", topic_title: "Sequences & Series: Arithmetic & Geometric", topic_number: "A4", tier_level: "higher" },
    { id: "edexcel_maths_polynomials_division", subject: "maths", exam_board: "edexcel", topic_title: "Polynomials & Polynomial Division", topic_number: "A5", tier_level: "higher" },
    { id: "edexcel_maths_vectors_3d", subject: "maths", exam_board: "edexcel", topic_title: "Vectors & 3D Geometry", topic_number: "G5", tier_level: "higher" },
    { id: "edexcel_maths_binomial_poisson", subject: "maths", exam_board: "edexcel", topic_title: "Binomial & Poisson Distributions", topic_number: "S1", tier_level: "higher" },
    { id: "edexcel_maths_differentiation_basics", subject: "maths", exam_board: "edexcel", topic_title: "Differentiation: Rates of Change & Curve Sketching", topic_number: "C1", tier_level: "higher" },
    { id: "edexcel_maths_integration_areas", subject: "maths", exam_board: "edexcel", topic_title: "Integration & Definite Integrals (Areas)", topic_number: "C2", tier_level: "higher" },
    { id: "edexcel_maths_surds_rationalizing", subject: "maths", exam_board: "edexcel", topic_title: "Surds & Rationalising Denominators", topic_number: "A6", tier_level: "both" },
    { id: "edexcel_maths_exponential_logarithms", subject: "maths", exam_board: "edexcel", topic_title: "Exponential & Logarithmic Functions", topic_number: "A7", tier_level: "higher" },
    { id: "edexcel_maths_congruence_similarity", subject: "maths", exam_board: "edexcel", topic_title: "Congruence, Similarity & Proof", topic_number: "G6", tier_level: "both" },
    { id: "edexcel_maths_angles_parallel_lines", subject: "maths", exam_board: "edexcel", topic_title: "Angles & Parallel Lines", topic_number: "G1", tier_level: "foundation" },
    { id: "edexcel_maths_bearings_navigation", subject: "maths", exam_board: "edexcel", topic_title: "Bearings and Navigation", topic_number: "G7", tier_level: "foundation" },
    { id: "edexcel_maths_financial_maths", subject: "maths", exam_board: "edexcel", topic_title: "Financial Mathematics: Interest and Investments", topic_number: "N2", tier_level: "both" },
    { id: "edexcel_maths_data_analysis", subject: "maths", exam_board: "edexcel", topic_title: "Data Analysis and Interpretation", topic_number: "S2", tier_level: "both" },

    // SCIENCE (Biology)
    { id: "aqa_combined_science_bio_cell_biology", subject: "combined_science", exam_board: "aqa", topic_title: "Biology: Cell Biology", topic_number: "B1", tier_level: "both" },
    { id: "aqa_combined_science_bio_organisation", subject: "combined_science", exam_board: "aqa", topic_title: "Biology: Organisation", topic_number: "B2", tier_level: "both" },
    { id: "aqa_combined_science_bio_infection", subject: "combined_science", exam_board: "aqa", topic_title: "Biology: Infection and Response", topic_number: "B3", tier_level: "both" },
    { id: "aqa_combined_science_bio_bioenergetics", subject: "combined_science", exam_board: "aqa", topic_title: "Biology: Bioenergetics", topic_number: "B4", tier_level: "both" },
    { id: "aqa_combined_science_bio_homeostasis", subject: "combined_science", exam_board: "aqa", topic_title: "Biology: Homeostasis and Response", topic_number: "B5", tier_level: "both" },
    { id: "aqa_combined_science_bio_inheritance", subject: "combined_science", exam_board: "aqa", topic_title: "Biology: Inheritance, Variation and Evolution", topic_number: "B6", tier_level: "both" },
    { id: "aqa_combined_science_bio_ecology", subject: "combined_science", exam_board: "aqa", topic_title: "Biology: Ecology", topic_number: "B7", tier_level: "both" },

    // SCIENCE (Chemistry)
    { id: "aqa_combined_science_chem_atomic", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Atomic Structure", topic_number: "C1", tier_level: "both" },
    { id: "aqa_combined_science_chem_bonding", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Bonding and Structure", topic_number: "C2", tier_level: "both" },
    { id: "aqa_combined_science_chem_quantitative", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Quantitative Chemistry", topic_number: "C3", tier_level: "both" },
    { id: "aqa_combined_science_chem_chemical_changes", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Chemical Changes", topic_number: "C4", tier_level: "both" },
    { id: "aqa_combined_science_chem_energy_changes", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Energy Changes", topic_number: "C5", tier_level: "both" },
    { id: "aqa_combined_science_chem_rate_change", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Rate of Chemical Change", topic_number: "C6", tier_level: "both" },
    { id: "aqa_combined_science_chem_organic", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Organic Chemistry", topic_number: "C7", tier_level: "both" },
    { id: "aqa_combined_science_chem_analysis", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Chemical Analysis", topic_number: "C8", tier_level: "both" },
    { id: "aqa_combined_science_chem_atmosphere", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Chemistry of the Atmosphere", topic_number: "C9", tier_level: "both" },
    { id: "aqa_combined_science_chem_resources", subject: "combined_science", exam_board: "aqa", topic_title: "Chemistry: Using Resources", topic_number: "C10", tier_level: "both" },

    // SCIENCE (Physics)
    { id: "aqa_combined_science_phys_energy", subject: "combined_science", exam_board: "aqa", topic_title: "Physics: Energy", topic_number: "P1", tier_level: "both" },
    { id: "aqa_combined_science_phys_electricity", subject: "combined_science", exam_board: "aqa", topic_title: "Physics: Electricity", topic_number: "P2", tier_level: "both" },
    { id: "aqa_combined_science_phys_particle_model", subject: "combined_science", exam_board: "aqa", topic_title: "Physics: Particle Model of Matter", topic_number: "P3", tier_level: "both" },
    { id: "aqa_combined_science_phys_atomic", subject: "combined_science", exam_board: "aqa", topic_title: "Physics: Atomic Structure", topic_number: "P4", tier_level: "both" },
    { id: "aqa_combined_science_phys_forces", subject: "combined_science", exam_board: "aqa", topic_title: "Physics: Forces", topic_number: "P5", tier_level: "both" },
    { id: "aqa_combined_science_phys_waves", subject: "combined_science", exam_board: "aqa", topic_title: "Physics: Waves", topic_number: "P6", tier_level: "both" },
    { id: "aqa_combined_science_phys_magnetism", subject: "combined_science", exam_board: "aqa", topic_title: "Physics: Magnetism and Electromagnetism", topic_number: "P7", tier_level: "both" },

    // ENGLISH LIT
    { id: "aqa_english_literature_lit_shakespeare", subject: "english_literature", exam_board: "aqa", topic_title: "Shakespeare: Macbeth / Romeo & Juliet", topic_number: "1", tier_level: "both" },
    { id: "aqa_english_literature_lit_19th_novel", subject: "english_literature", exam_board: "aqa", topic_title: "19th Century Novel: Jekyll & Hyde", topic_number: "2", tier_level: "both" },
    { id: "aqa_english_literature_lit_modern", subject: "english_literature", exam_board: "aqa", topic_title: "Modern Text: An Inspector Calls", topic_number: "3", tier_level: "both" },
    { id: "aqa_english_literature_lit_poetry_anthology", subject: "english_literature", exam_board: "aqa", topic_title: "Poetry Anthology: Power and Conflict", topic_number: "4", tier_level: "both" },
    { id: "aqa_english_literature_lit_unseen_poetry", subject: "english_literature", exam_board: "aqa", topic_title: "Unseen Poetry", topic_number: "5", tier_level: "both" },

    // ENGLISH LANG
    { id: "aqa_english_language_lang_creative_reading", subject: "english_language", exam_board: "aqa", topic_title: "Paper 1: Creative Reading", topic_number: "1.1", tier_level: "both" },
    { id: "aqa_english_language_lang_creative_writing", subject: "english_language", exam_board: "aqa", topic_title: "Paper 1: Creative Writing", topic_number: "1.2", tier_level: "both" },
    { id: "aqa_english_language_lang_viewpoint_reading", subject: "english_language", exam_board: "aqa", topic_title: "Paper 2: Writers' Viewpoints", topic_number: "2.1", tier_level: "both" },
    { id: "aqa_english_language_lang_viewpoint_writing", subject: "english_language", exam_board: "aqa", topic_title: "Paper 2: Viewpoint Writing", topic_number: "2.2", tier_level: "both" },
    { id: "aqa_english_language_lang_spoken", subject: "english_language", exam_board: "aqa", topic_title: "Spoken Language Endorsement", topic_number: "3", tier_level: "both" },
    { id: "aqa_english_language_media_digital", subject: "english_language", exam_board: "aqa", topic_title: "Media & Digital Communication", topic_number: "4", tier_level: "both" },

    // ENGLISH LIT EXTENDED
    { id: "aqa_english_literature_romantic_poetry", subject: "english_literature", exam_board: "aqa", topic_title: "Romantic Poetry: Wordsworth, Keats & Byron", topic_number: "6", tier_level: "both" },
    { id: "aqa_english_literature_gothic_horror", subject: "english_literature", exam_board: "aqa", topic_title: "Gothic Literature: Darkness & Psychology", topic_number: "7", tier_level: "both" },

    // HISTORY EXTENDED
    { id: "aqa_history_hist_migration_empire", subject: "history", exam_board: "aqa", topic_title: "Migration, Colonialism & Empire", topic_number: "5", tier_level: "both" },

    // BUSINESS EXTENDED
    { id: "aqa_business_bus_innovation", subject: "business", exam_board: "aqa", topic_title: "Innovation & Entrepreneurship", topic_number: "7", tier_level: "both" },

    // SCIENCE EXTENDED
    { id: "aqa_combined_science_bio_human_body", subject: "combined_science", exam_board: "aqa", topic_title: "Human Body Systems", topic_number: "B8", tier_level: "both" },
    { id: "aqa_combined_science_chem_organic_reactions", subject: "combined_science", exam_board: "aqa", topic_title: "Organic Chemistry: Reactions & Mechanisms", topic_number: "C11", tier_level: "higher" },
    { id: "aqa_combined_science_phys_modern", subject: "combined_science", exam_board: "aqa", topic_title: "Modern Physics: Quantum & Nuclear", topic_number: "P8", tier_level: "higher" },

    // HISTORY
    { id: "aqa_history_hist_medicine", subject: "history", exam_board: "aqa", topic_title: "Thematic Study: Medicine Through Time", topic_number: "1", tier_level: "both" },
    { id: "aqa_history_hist_elizabeth", subject: "history", exam_board: "aqa", topic_title: "British Depth Study: Elizabethan England", topic_number: "2", tier_level: "both" },
    { id: "aqa_history_hist_america", subject: "history", exam_board: "aqa", topic_title: "Period Study: America 1920–1973", topic_number: "3", tier_level: "both" },
    { id: "aqa_history_hist_germany", subject: "history", exam_board: "aqa", topic_title: "Modern Depth Study: Germany 1890–1945", topic_number: "4", tier_level: "both" },

    // BUSINESS
    { id: "aqa_business_bus_real_world", subject: "business", exam_board: "aqa", topic_title: "Business in the Real World", topic_number: "1", tier_level: "both" },
    { id: "aqa_business_bus_influences", subject: "business", exam_board: "aqa", topic_title: "Influences on Business", topic_number: "2", tier_level: "both" },
    { id: "aqa_business_bus_operations", subject: "business", exam_board: "aqa", topic_title: "Business Operations", topic_number: "3", tier_level: "both" },
    { id: "aqa_business_bus_hr", subject: "business", exam_board: "aqa", topic_title: "Human Resources", topic_number: "4", tier_level: "both" },
    { id: "aqa_business_bus_marketing", subject: "business", exam_board: "aqa", topic_title: "Marketing", topic_number: "5", tier_level: "both" },
    { id: "aqa_business_bus_finance", subject: "business", exam_board: "aqa", topic_title: "Finance", topic_number: "6", tier_level: "both" },

    // FRENCH
    { id: "aqa_french_fr_people", subject: "french", exam_board: "aqa", topic_title: "People and Lifestyle", topic_number: "1", tier_level: "both" },
    { id: "aqa_french_fr_culture", subject: "french", exam_board: "aqa", topic_title: "Popular Culture", topic_number: "2", tier_level: "both" },
    { id: "aqa_french_fr_world", subject: "french", exam_board: "aqa", topic_title: "Communication and the World", topic_number: "3", tier_level: "both" },
    { id: "aqa_french_culture_francophone_world", subject: "french", exam_board: "aqa", topic_title: "Francophone Culture & Global Communities", topic_number: "4", tier_level: "both" },
    { id: "aqa_french_tech_digital_society", subject: "french", exam_board: "aqa", topic_title: "Technology & Digital Society", topic_number: "5", tier_level: "both" },
    { id: "aqa_french_social_issues_contemporary", subject: "french", exam_board: "aqa", topic_title: "Contemporary Social Issues", topic_number: "6", tier_level: "both" },

    // RELIGIOUS STUDIES
    { id: "aqa_religious_studies_rs_christianity", subject: "religious_studies", exam_board: "aqa", topic_title: "Christianity: Beliefs & Practices", topic_number: "1", tier_level: "both" },
    { id: "aqa_religious_studies_rs_islam", subject: "religious_studies", exam_board: "aqa", topic_title: "Islam: Beliefs & Practices", topic_number: "2", tier_level: "both" },
    { id: "aqa_religious_studies_rs_themes_life", subject: "religious_studies", exam_board: "aqa", topic_title: "Theme: Religion and Life", topic_number: "3", tier_level: "both" },
    { id: "aqa_religious_studies_rs_themes_crime", subject: "religious_studies", exam_board: "aqa", topic_title: "Theme: Crime and Punishment", topic_number: "4", tier_level: "both" },
    { id: "aqa_religious_studies_applied_ethics", subject: "religious_studies", exam_board: "aqa", topic_title: "Applied Ethics: Bioethics & Environment", topic_number: "5", tier_level: "higher" },
    { id: "aqa_religious_studies_interfaith_dialogue", subject: "religious_studies", exam_board: "aqa", topic_title: "Interfaith Dialogue & Pluralism", topic_number: "6", tier_level: "higher" },

    // GEOGRAPHY
    { id: "aqa_geography_geo_natural_hazards", subject: "geography", exam_board: "aqa", topic_title: "Natural Hazards", topic_number: "1.1", tier_level: "both" },
    { id: "aqa_geography_geo_living_world", subject: "geography", exam_board: "aqa", topic_title: "The Living World", topic_number: "1.2", tier_level: "both" },
    { id: "aqa_geography_geo_physical_landscapes", subject: "geography", exam_board: "aqa", topic_title: "Physical Landscapes in the UK", topic_number: "1.3", tier_level: "both" },
    { id: "aqa_geography_geo_urban_issues", subject: "geography", exam_board: "aqa", topic_title: "Urban Issues and Challenges", topic_number: "2.1", tier_level: "both" },
    { id: "aqa_geography_geo_economic_world", subject: "geography", exam_board: "aqa", topic_title: "The Changing Economic World", topic_number: "2.2", tier_level: "both" },
    { id: "aqa_geography_geo_resource_management", subject: "geography", exam_board: "aqa", topic_title: "Resource Management", topic_number: "2.3", tier_level: "both" },
    { id: "aqa_geography_climate_change_impacts", subject: "geography", exam_board: "aqa", topic_title: "Climate Change & Global Warming", topic_number: "1.4", tier_level: "both" },
    { id: "aqa_geography_water_insecurity", subject: "geography", exam_board: "aqa", topic_title: "Water Insecurity & Resource Scarcity", topic_number: "1.5", tier_level: "both" },

    // COMPUTER SCIENCE
    { id: "aqa_computer_science_cs_algorithms", subject: "computer_science", exam_board: "aqa", topic_title: "Algorithms", topic_number: "3.1", tier_level: "both" },
    { id: "aqa_computer_science_cs_programming", subject: "computer_science", exam_board: "aqa", topic_title: "Programming", topic_number: "3.2", tier_level: "both" },
    { id: "aqa_computer_science_cs_data_rep", subject: "computer_science", exam_board: "aqa", topic_title: "Data Representation", topic_number: "3.3", tier_level: "both" },
    { id: "aqa_computer_science_cs_computer_systems", subject: "computer_science", exam_board: "aqa", topic_title: "Computer Systems", topic_number: "3.4", tier_level: "both" },
    { id: "aqa_computer_science_cs_networks", subject: "computer_science", exam_board: "aqa", topic_title: "Computer Networks", topic_number: "3.5", tier_level: "both" },
    { id: "aqa_computer_science_cs_cyber_security", subject: "computer_science", exam_board: "aqa", topic_title: "Cyber Security", topic_number: "3.6", tier_level: "both" },
    { id: "aqa_computer_science_cs_relational_db", subject: "computer_science", exam_board: "aqa", topic_title: "Relational Databases and SQL", topic_number: "3.7", tier_level: "both" },
    { id: "aqa_computer_science_cs_ethics", subject: "computer_science", exam_board: "aqa", topic_title: "Ethical, Legal and Environmental Impacts", topic_number: "3.8", tier_level: "both" },
    { id: "aqa_computer_science_ai_machine_learning", subject: "computer_science", exam_board: "aqa", topic_title: "AI & Machine Learning", topic_number: "3.9", tier_level: "higher" },
    { id: "aqa_computer_science_cybersecurity_cryptography", subject: "computer_science", exam_board: "aqa", topic_title: "Cybersecurity & Cryptography", topic_number: "3.10", tier_level: "higher" },
];

