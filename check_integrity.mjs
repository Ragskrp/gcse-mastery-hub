
import { TOPIC_MANIFEST } from './src/lib/content';
import { SEED_TOPICS } from './src/data/seed-topics';
import { SEED_TOPICS_PART2 } from './src/data/seed-topics-2';
import { SEED_TOPICS_PART3 } from './src/data/seed-topics-3';
import { SEED_TOPICS_PART4 } from './src/data/seed-topics-4';
import { SEED_TOPICS_PART5 } from './src/data/seed-topics-5';
import { SEED_TOPICS_COMPUTER_SCIENCE_EXTENDED } from './src/data/seed-topics-computer-science-extended';
import { SEED_TOPICS_ENGLISH_EXTENDED } from './src/data/seed-topics-english-extended';
import { SEED_TOPICS_FRENCH_EXTENDED } from './src/data/seed-topics-french-extended';
import { SEED_TOPICS_GEOGRAPHY_EXTENDED } from './src/data/seed-topics-geography-extended';
import { SEED_TOPICS_HUMANITIES_EXTENDED } from './src/data/seed-topics-humanities-extended';
import { SEED_TOPICS_RELIGIOUS_STUDIES_EXTENDED } from './src/data/seed-topics-religious-studies-extended';
import { SEED_TOPICS_SCIENCES_EXTENDED } from './src/data/seed-topics-sciences-extended';
import { SEED_MATHS_COMPREHENSIVE } from './src/data/seed-topics-maths-comprehensive';
import { SEED_MATHS_EXTENDED_2 } from './src/data/seed-topics-maths-extended-2';
import { SEED_MATHS_EXTENDED_3 } from './src/data/seed-topics-maths-extended-3';
import { SEED_MATHS_EXTENDED } from './src/data/seed-topics-maths-extended';
import { SEED_TOPICS_MISSING_CORE } from './src/data/seed-topics-missing-core';
import { SEED_TOPICS_FINAL_POPULATION } from './src/data/seed-topics-final-population';

const ALL_SEED_TOPICS = [
    ...SEED_TOPICS, ...SEED_TOPICS_PART2, ...SEED_TOPICS_PART3, ...SEED_TOPICS_PART4, ...SEED_TOPICS_PART5,
    ...SEED_TOPICS_COMPUTER_SCIENCE_EXTENDED, ...SEED_TOPICS_ENGLISH_EXTENDED, ...SEED_TOPICS_FRENCH_EXTENDED,
    ...SEED_TOPICS_GEOGRAPHY_EXTENDED, ...SEED_TOPICS_HUMANITIES_EXTENDED, ...SEED_TOPICS_RELIGIOUS_STUDIES_EXTENDED,
    ...SEED_TOPICS_SCIENCES_EXTENDED, ...SEED_MATHS_COMPREHENSIVE, ...SEED_MATHS_EXTENDED_2,
    ...SEED_MATHS_EXTENDED_3, ...SEED_MATHS_EXTENDED, ...SEED_TOPICS_MISSING_CORE, ...SEED_TOPICS_FINAL_POPULATION
];

const seedIds = new Set(ALL_SEED_TOPICS.map(t => t.id));
const manifestIds = TOPIC_MANIFEST.map(t => t.id);

console.log("Checking for missing IDs in seeds...");
let missingCount = 0;
for (const id of manifestIds) {
    if (!seedIds.has(id)) {
        console.log(`Missing seed for manifest ID: ${id}`);
        missingCount++;
    }
}
console.log(`Total missing: ${missingCount}`);

console.log("\nChecking for duplicates in manifest...");
const seenManifestIds = new Set();
for (const id of manifestIds) {
    if (seenManifestIds.has(id)) {
        console.log(`Duplicate ID in manifest: ${id}`);
    }
    seenManifestIds.add(id);
}
