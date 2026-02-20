
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'content', 'topics');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function createTopic(id, subject, board, title, number, tier = "both") {
    return {
        id: `${board}_${subject}_${id}`,
        exam_board: board,
        subject: subject,
        topic_title: title,
        topic_number: number,
        tier_level: tier,
        section_1_key_concepts: {
            overview: "This topic covers essential concepts for your GCSE exams.",
            learning_objectives: ["Understand key definitions", "Apply concepts to exam questions"],
            key_terms: [{ term: "Concept", definition: "A general idea or understanding of something", importance: "Fundamental to this topic" }]
        },
        section_2_detailed_explanations: [],
        section_3_worked_examples: [],
        section_4_practice_questions: { foundation: [], higher: [] },
        section_5_exam_guidance: {
            common_mistakes: [],
            exam_tips: [],
            command_words: [],
            time_allocation: "15 mins"
        },
        section_6_additional_resources: { resources: [], revision_checklist: [] },
        section_7_assessment_answers: { answers: [], grade_boundaries: {} }
    };
}

const TOPICS = [
    // --- MATHS (Edexcel) 6 Areas ---
    createTopic("number_structure", "maths", "edexcel", "Number: Structure and Calculation", "1.1"),
    createTopic("number_fractions", "maths", "edexcel", "Number: Fractions, Decimals, Percentages", "1.2"),
    createTopic("algebra_notation", "maths", "edexcel", "Algebra: Notation and Equations", "2.1"),
    createTopic("algebra_graphs", "maths", "edexcel", "Algebra: Graphs", "2.2"),
    createTopic("ratio", "maths", "edexcel", "Ratio and Proportion", "3.1"),
    createTopic("geometry_angles", "maths", "edexcel", "Geometry: Angles and Polygons", "4.1"),
    createTopic("geometry_measures", "maths", "edexcel", "Geometry: Measures and Mensuration", "4.2"),
    createTopic("probability", "maths", "edexcel", "Probability", "5.1"),
    createTopic("statistics", "maths", "edexcel", "Statistics", "6.1"),

    // --- SCIENCE (AQA) - Biology ---
    createTopic("bio_cell_biology", "combined_science", "aqa", "Biology: Cell Biology", "B1"),
    createTopic("bio_organisation", "combined_science", "aqa", "Biology: Organisation", "B2"),
    createTopic("bio_infection", "combined_science", "aqa", "Biology: Infection and Response", "B3"),
    createTopic("bio_bioenergetics", "combined_science", "aqa", "Biology: Bioenergetics", "B4"),
    createTopic("bio_homeostasis", "combined_science", "aqa", "Biology: Homeostasis and Response", "B5"),
    createTopic("bio_inheritance", "combined_science", "aqa", "Biology: Inheritance, Variation and Evolution", "B6"),
    createTopic("bio_ecology", "combined_science", "aqa", "Biology: Ecology", "B7"),

    // --- SCIENCE (AQA) - Chemistry ---
    createTopic("chem_atomic", "combined_science", "aqa", "Chemistry: Atomic Structure", "C1"),
    createTopic("chem_bonding", "combined_science", "aqa", "Chemistry: Bonding and Structure", "C2"),
    createTopic("chem_quantitative", "combined_science", "aqa", "Chemistry: Quantitative Chemistry", "C3"),
    createTopic("chem_chemical_changes", "combined_science", "aqa", "Chemistry: Chemical Changes", "C4"),
    createTopic("chem_energy_changes", "combined_science", "aqa", "Chemistry: Energy Changes", "C5"),
    createTopic("chem_rate_change", "combined_science", "aqa", "Chemistry: Rate of Chemical Change", "C6"),
    createTopic("chem_organic", "combined_science", "aqa", "Chemistry: Organic Chemistry", "C7"),
    createTopic("chem_analysis", "combined_science", "aqa", "Chemistry: Chemical Analysis", "C8"),
    createTopic("chem_atmosphere", "combined_science", "aqa", "Chemistry: Chemistry of the Atmosphere", "C9"),
    createTopic("chem_resources", "combined_science", "aqa", "Chemistry: Using Resources", "C10"),

    // --- SCIENCE (AQA) - Physics ---
    createTopic("phys_energy", "combined_science", "aqa", "Physics: Energy", "P1"),
    createTopic("phys_electricity", "combined_science", "aqa", "Physics: Electricity", "P2"),
    createTopic("phys_particle_model", "combined_science", "aqa", "Physics: Particle Model of Matter", "P3"),
    createTopic("phys_atomic", "combined_science", "aqa", "Physics: Atomic Structure", "P4"),
    createTopic("phys_forces", "combined_science", "aqa", "Physics: Forces", "P5"),
    createTopic("phys_waves", "combined_science", "aqa", "Physics: Waves", "P6"),
    createTopic("phys_magnetism", "combined_science", "aqa", "Physics: Magnetism and Electromagnetism", "P7"),

    // --- ENGLISH LIT (AQA) ---
    createTopic("lit_shakespeare", "english_literature", "aqa", "Shakespeare: Macbeth / Romeo & Juliet", "1"),
    createTopic("lit_19th_novel", "english_literature", "aqa", "19th Century Novel: Jekyll & Hyde / Christmas Carol", "2"),
    createTopic("lit_modern", "english_literature", "aqa", "Modern Text: An Inspector Calls", "3"),
    createTopic("lit_poetry_anthology", "english_literature", "aqa", "Poetry Anthology: Power and Conflict", "4"),
    createTopic("lit_unseen_poetry", "english_literature", "aqa", "Unseen Poetry", "5"),

    // --- ENGLISH LANG (AQA) ---
    createTopic("lang_creative_reading", "english_language", "aqa", "Paper 1: Creative Reading", "1.1"),
    createTopic("lang_creative_writing", "english_language", "aqa", "Paper 1: Creative Writing", "1.2"),
    createTopic("lang_viewpoint_reading", "english_language", "aqa", "Paper 2: Writers' Viewpoints", "2.1"),
    createTopic("lang_viewpoint_writing", "english_language", "aqa", "Paper 2: Viewpoint Writing", "2.2"),
    createTopic("lang_spoken", "english_language", "aqa", "Spoken Language Endorsement", "3"),

    // --- HISTORY (AQA) ---
    createTopic("hist_medicine", "history", "aqa", "Thematic Study: Medicine Through Time", "1"),
    createTopic("hist_elizabeth", "history", "aqa", "British Depth Study: Elizabethan England", "2"),
    createTopic("hist_america", "history", "aqa", "Period Study: America 1920–1973", "3"),
    createTopic("hist_germany", "history", "aqa", "Modern Depth Study: Germany 1890–1945", "4"),

    // --- BUSINESS (AQA) ---
    createTopic("bus_real_world", "business", "aqa", "Business in the Real World", "1"),
    createTopic("bus_influences", "business", "aqa", "Influences on Business", "2"),
    createTopic("bus_operations", "business", "aqa", "Business Operations", "3"),
    createTopic("bus_hr", "business", "aqa", "Human Resources", "4"),
    createTopic("bus_marketing", "business", "aqa", "Marketing", "5"),
    createTopic("bus_finance", "business", "aqa", "Finance", "6"),

    // --- FRENCH (AQA) ---
    createTopic("fr_people", "french", "aqa", "Theme 1: People and Lifestyle", "1"),
    createTopic("fr_culture", "french", "aqa", "Theme 2: Popular Culture", "2"),
    createTopic("fr_world", "french", "aqa", "Theme 3: Communication and the World", "3"),

    // --- RELIGIOUS STUDIES (AQA) ---
    createTopic("rs_christianity", "religious_studies", "aqa", "Beliefs and Practices: Christianity", "1"),
    createTopic("rs_islam", "religious_studies", "aqa", "Beliefs and Practices: Islam", "2"),
    createTopic("rs_themes_life", "religious_studies", "aqa", "Theme: Religion and Life", "3"),
    createTopic("rs_themes_crime", "religious_studies", "aqa", "Theme: Crime and Punishment", "4"),
    createTopic("rs_themes_human_rights", "religious_studies", "aqa", "Theme: Human Rights", "5"),
    createTopic("rs_themes_god", "religious_studies", "aqa", "Theme: Existence of God", "6"),

    // --- GEOGRAPHY (AQA) --- 
    createTopic("geo_natural_hazards", "geography", "aqa", "Paper 1: The Challenge of Natural Hazards", "1.1"),
    createTopic("geo_living_world", "geography", "aqa", "Paper 1: The Living World", "1.2"),
    createTopic("geo_physical_landscapes", "geography", "aqa", "Paper 1: Physical Landscapes in the UK", "1.3"),
    createTopic("geo_urban_issues", "geography", "aqa", "Paper 2: Urban Issues and Challenges", "2.1"),
    createTopic("geo_economic_world", "geography", "aqa", "Paper 2: The Changing Economic World", "2.2"),
    createTopic("geo_resource_management", "geography", "aqa", "Paper 2: The Challenge of Resource Management", "2.3"),

    // --- COMPUTER SCIENCE (AQA) ---
    createTopic("cs_algorithms", "computer_science", "aqa", "Algorithms", "3.1"),
    createTopic("cs_programming", "computer_science", "aqa", "Programming", "3.2"),
    createTopic("cs_data_rep", "computer_science", "aqa", "Data Representation", "3.3"),
    createTopic("cs_computer_systems", "computer_science", "aqa", "Computer Systems", "3.4"),
    createTopic("cs_networks", "computer_science", "aqa", "Computer Networks", "3.5"),
    createTopic("cs_cyber_security", "computer_science", "aqa", "Cyber Security", "3.6"),
    createTopic("cs_relational_db", "computer_science", "aqa", "Relational Databases and SQL", "3.7"),
    createTopic("cs_ethics", "computer_science", "aqa", "Ethical, Legal and Environmental Impacts", "3.8"),
];

console.log(`🚀 Generating ${TOPICS.length} skeleton topics...`);

TOPICS.forEach(topic => {
    const filename = `${topic.id}.json`;
    const filePath = path.join(OUTPUT_DIR, filename);

    // Only write if file doesn't exist (preserve existing work)
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(topic, null, 2));
        console.log(`✅ Created: ${filename}`);
    } else {
        console.log(`⏭️ Skipped: ${filename} (Already exists)`);
    }
});

console.log('\n🎉 Syllabus Generation Complete!');
