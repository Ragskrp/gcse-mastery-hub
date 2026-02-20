
import fs from 'fs';
import path from 'path';
import { SEED_TOPICS } from './src/data/seed-topics';
import { SEED_TOPICS_PART2 } from './src/data/seed-topics-2';
import { SEED_TOPICS_PART3 } from './src/data/seed-topics-3';
import { SEED_TOPICS_PART4 } from './src/data/seed-topics-4';
import { SEED_TOPICS_PART5 } from './src/data/seed-topics-5';

const ALL_TOPICS = [
    ...SEED_TOPICS,
    ...SEED_TOPICS_PART2,
    ...SEED_TOPICS_PART3,
    ...SEED_TOPICS_PART4,
    ...SEED_TOPICS_PART5
];

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'content', 'topics');

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log(`🚀 Migrating ${ALL_TOPICS.length} topics to JSON files...`);

ALL_TOPICS.forEach(topic => {
    const filename = `${topic.id}.json`;
    const filePath = path.join(OUTPUT_DIR, filename);

    fs.writeFileSync(filePath, JSON.stringify(topic, null, 2));
    console.log(`✅ Created: ${filename}`);
});

console.log('\n🎉 Migration complete! All topics are now in public/content/topics');
