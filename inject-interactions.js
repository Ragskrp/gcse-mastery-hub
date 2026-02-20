
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'content', 'topics');
const FILE_PATH = path.join(OUTPUT_DIR, 'edexcel_maths_number_structure.json');

// Get existing deep content
if (fs.existsSync(FILE_PATH)) {
    const topic = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));

    // Inject components into section 2
    topic.section_2_detailed_explanations.splice(1, 0, { type: "component", name: "NumberLine" });

    fs.writeFileSync(FILE_PATH, JSON.stringify(topic, null, 2));
    console.log("✅ Injected NumberLine into Number Structure topic.");
} else {
    console.error("❌ File not found.");
}

const FILE_PATH_FRACTIONS = path.join(OUTPUT_DIR, 'edexcel_maths_number_fractions.json');
if (fs.existsSync(FILE_PATH_FRACTIONS)) {
    const topic = JSON.parse(fs.readFileSync(FILE_PATH_FRACTIONS, 'utf8'));
    topic.section_2_detailed_explanations.push({ type: "component", name: "FractionWall" });
    fs.writeFileSync(FILE_PATH_FRACTIONS, JSON.stringify(topic, null, 2));
    console.log("✅ Injected FractionWall into Fractions topic.");
}
