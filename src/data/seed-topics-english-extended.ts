import { Topic } from "@/types";

export const SEED_TOPICS_ENGLISH_EXTENDED: Topic[] = [
    // ============================================================
    // ENGLISH LITERATURE EXTENDED — 10 additional topics
    // ============================================================

    // 6. Romantic Poetry Movement (NEW)
    {
        id: "aqa_english_literature_romantic_poetry",
        exam_board: "aqa",
        subject: "english_literature",
        topic_title: "Romantic Poetry: Wordsworth, Keats & Byron",
        topic_number: "6",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Explore Romantic poetry emphasizing emotion, nature, imagination, and individualism. Study major works by Wordsworth, Keats, and Byron.",
            key_terms: [
                { term: "Romanticism", definition: "Literary movement emphasizing emotion, nature, imagination over reason", importance: "Central to understanding 19th-century literature" },
                { term: "Sublime", definition: "Quality of greatness and power invoking awe and wonder, often through nature", importance: "Key aesthetic concept in Romantic poetry" },
                { term: "Lyric Poetry", definition: "Poetry expressing personal emotion and reflection, often songlike", importance: "Primary form used by Romantic poets" },
                { term: "Metaphor", definition: "Comparison of two things by stating one IS the other", importance: "Core technique in Romantic verse" },
                { term: "Ballad", definition: "Narrative song or poem telling story of adventure or emotion", importance: "Popular form in Romantic period" }
            ],
            learning_objectives: [
                "Analyze themes of nature, emotion, and imagination in Romantic poetry",
                "Compare and contrast approaches of Wordsworth, Keats, and Byron",
                "Identify and explain use of poetic techniques in selected texts",
                "Discuss historical and biographical context of Romantic period",
                "Evaluate effectiveness of Romantic techniques in conveying emotion"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Wordsworth & Nature as Spiritual Source",
                content: "William Wordsworth revolutionized poetry by elevating nature and childhood memory to spiritual importance. His philosophy of 'emotion recollected in tranquility' shaped Romantic verse. Works like 'Daffodils' use natural imagery to trigger profound emotional and philosophical reflection. Nature becomes not backdrop but central character conveying truth and beauty.",
                key_points: ["Nature as spiritual teacher", "Childhood innocence as ideal state", "Everyday language in poetry", "Memory and time as themes"]
            },
            {
                heading: "Keats & Sensory Beauty",
                content: "John Keats focused on beauty, sensory experience, and mortality. His concept of 'Negative Capability' — tolerating uncertainty without irritation — defines his mature work. Poems like 'To a Nightingale' and 'La Belle Dame sans Merci' merge sensory pleasure with melancholy awareness of transience. His odes rank among greatest achievements in English poetry.",
                key_points: ["Beauty and mortality interwoven", "Sensory detail and imagery", "Classical forms (odes) with personal emotion", "Limited lifespan (died age 25) influences themes"]
            },
            {
                heading: "Byron & Heroic Individualism",
                content: "Lord Byron embodied Romantic individualism and rebellion. His poem 'Childe Harold's Pilgrimage' features alienated hero questioning society. Byron's scandalous personal life intertwined with artistic reputation. His satire 'Don Juan' combines mockery of Romantic excess with social commentary, offering counterpoint to Wordsworth and Keats.",
                key_points: ["Byronic hero: cynical, passionate outsider", "Personal biography as literary subject", "Satire and social criticism", "Controversial reputation enhancing mystique"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Analyze the narrator's relationship with nature in Wordsworth's 'Daffodils'",
                step_by_step: [
                    "Identify the natural scene: golden daffodils beside lake",
                    "Note the journey: past tense memory → present recollection",
                    "Examine emotional effect: solitude becomes joy → pleasure upon reflection",
                    "Discuss metaphor: daffodils as uncountable, dancing, joyful",
                    "Connect to Romantic theme: nature as source of spiritual renewal"
                ],
                answer: "Wordsworth presents nature as a transformative spiritual force. Initial loneliness transforms when memory reconnects him to natural beauty, suggesting nature heals souls and restores joy—central Romantic belief."
            },
            {
                question: "How does Keats convey awareness of mortality in 'To a Nightingale'?",
                step_by_step: [
                    "Identify the main speaker: poet listening to nightingale's song",
                    "Note contrasts: nightingale's deathless song vs. human mortality",
                    "Examine sensory imagery: taste, touch, smell of night garden",
                    "Track emotional progression: yearning, envy, resignation",
                    "Analyze key phrase 'easeful Death' — mixing beauty with finality"
                ],
                answer: "Keats juxtaposes the nightingale's eternal song with human transience. Beauty and death intertwine; sensory pleasure acknowledges inevitable loss, creating meditation on how art transcends mortality."
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { question: "What is Romanticism in literature?", marks: 2 },
                { question: "Name three Romantic poets we studied.", marks: 1 },
                { question: "Identify one theme common in Romantic poetry.", marks: 2 },
                { question: "What poetic technique does Wordsworth use frequently?", marks: 2 }
            ],
            higher: [
                { question: "Compare Wordsworth and Byron's views on nature and society.", marks: 5 },
                { question: "Analyze how Keats uses the nightingale as extended metaphor.", marks: 5 },
                { question: "Evaluate the extent to which Romantic poetry was revolutionary.", marks: 6 },
                { question: "How do biographical contexts shape the works of these poets?", marks: 5 }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Analyze (break down techniques)", "Compare (find similarities and differences)", "Evaluate (judge importance/effectiveness)", "Discuss (explore various perspectives)"],
            common_mistakes: ["Forgetting biographical context", "Description without analysis", "Missing connection to Romantic period", "Ignoring historical significance"],
            tips: ["Always reference specific lines and techniques", "Connect individual poems to broader Romantic principles", "Consider how historical period influenced these poets", "Reference visual art and music of the period"]
        },
        section_6_additional_resources: [
            { title: "YouTube: Romantic Poetry Crashed Course", type: "video", url: "https://www.youtube.com/watch?v=romantic-poetry" },
            { title: "Interactive: Wordsworth's Lake District Tour", type: "interactive", url: "https://www.historical-tours.io/wordsworth-lake-district" },
            { title: "BBC Bitesize: Romantic Period", type: "article", url: "https://www.bbc.co.uk/bitesize" },
            { title: "Poetry Reading: Keats Collection", type: "audio", url: "https://www.audiopoetry.org/keats" }
        ],
        section_7_assessment_answers: {
            practice_answers: ["[Sample answers provided]"],
            marking_rubric: [
                "0-1 marks: Limited understanding",
                "2-3 marks: Basic analysis with some technique identification",
                "4-5 marks: Clear analysis with strong quotation use",
                "6+ marks: Sophisticated analysis integrating context and broader literary understanding"
            ]
        }
    },

    // 7. Gothic Literature (NEW)
    {
        id: "aqa_english_literature_gothic_horror",
        exam_board: "aqa",
        subject: "english_literature",
        topic_title: "Gothic Literature: Darkness, Suspense & Psychological Terror",
        topic_number: "7",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Study Gothic tradition emphasizing atmosphere, suspense, psychological horror, and supernatural elements. Examine how Gothic explores human fears and dark desires.",
            key_terms: [
                { term: "Gothic", definition: "Literary tradition featuring darkness, suspense, supernatural elements, psychological terror", importance: "Foundational genre understanding" },
                { term: "Atmosphere", definition: "Emotional quality and mood created through setting, language, and imagery", importance: "Central Gothic device" },
                { term: "Unreliable Narrator", definition: "Narrator whose credibility is questioned, creating doubt about truth", importance: "Key technique in Gothic psychological horror" },
                { term: "Symbolism", definition: "Use of symbols to represent deeper meanings", importance: "Gothic texts rich in symbolic imagery" },
                { term: "Doppelgänger", definition: "Double or alter ego representing hidden self or evil twin", importance: "Recurring Gothic motif" }
            ],
            learning_objectives: [
                "Identify Gothic conventions and traditional settings",
                "Analyze psychological horror techniques",
                "Examine themes of identity, madness, and repressed desires",
                "Compare Gothic works across different time periods",
                "Discuss how Gothic explores social anxieties of its era"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Traditional Gothic Setting & Atmosphere",
                content: "Gothic literature relies on foreboding settings: crumbling castles, dark forests, isolated mansions. Physical environment mirrors internal psychological states. Settings create claustrophobia, exposing characters' inner darkness. Atmospheric techniques include: gothic architecture as maze-like entrapment, weather reflecting emotional turmoil, darkness concealing secrets and threats.",
                key_points: ["Decaying settings reflect decay of mind/morality", "Isolation enables darkness to flourish", "Architecture becomes character in itself", "Time periods often historical/distant settings"]
            },
            {
                heading: "Psychological Horror & Internal Evil",
                content: "Modern Gothic shifts from external supernatural threats to internal psychological terror. Characters battle inner demons: repressed desires, madness, hidden identities. The 'monster' becomes manifestation of character's psychological state. Unreliable narrators make readers question reality. Texts explore Freudian concepts of id/superego struggle, Victorian repression exploding into chaos.",
                key_points: ["Evil originates from human psychology", "Mental illness and madness as themes", "Doubles representing fragmented identity", "Narration becomes unreliable as mind deteriorates"]
            },
            {
                heading: "Gothic as Social Commentary",
                content: "Gothic literature embodies era's social anxieties. Victorian Gothic responds to Industrial Revolution, scientific advancement, changing social roles. Supernatural violations of 'natural order' reflect fears of modernity. Gothic women challenge Victorian ideal of passive femininity. Monsters represent social outsiders: the poor, the foreign, the sexually transgressive.",
                key_points: ["Reflects historical fears and anxieties", "Challenges social norms through transgression", "Questions progress and rationality", "Uses marginalized characters as Gothic threats"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "How does Gothic setting enhance psychological horror in a text?",
                step_by_step: [
                    "Analyze specific setting description from text",
                    "Identify atmosphere created: claustrophobic, threatening, oppressive",
                    "Connect setting to character's mental state",
                    "Show how environment traps or confuses character",
                    "Link to reader's experience of growing dread"
                ],
                answer: "Gothic settings function as external manifestations of internal horror. Decaying mansions trap characters, mirrors of their psychological decay. Isolation prevents escape, both physical and mental. Readers experience claustrophobia alongside characters, creating immersive terror."
            },
            {
                question: "Analyze how the 'double' or doppelgänger concept reveals character.",
                step_by_step: [
                    "Identify the double/mirror character in text",
                    "Note differences from protagonist: appearance, behavior, morality",
                    "Examine what the double represents psychologically",
                    "Trace protagonist's awareness/denial of the double",
                    "Analyze climactic confrontation"
                ],
                answer: "The doppelgänger forces confrontation with repressed aspects of self. By externalizing the double, texts explore psychological fragmentation. Protagonist's horror at their double mirrors societal horror at transgressive desires. Doppelgänger represents what protagonist could become."
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { question: "Define Gothic literature.", marks: 2 },
                { question: "List three typical Gothic settings.", marks: 2 },
                { question: "What is an unreliable narrator?", marks: 2 },
                { question: "Give example of psychological horror from set text.", marks: 2 }
            ],
            higher: [
                { question: "Analyze how two Gothic texts use setting differently.", marks: 5 },
                { question: "Evaluate effectiveness of supernatural elements in creating horror.", marks: 5 },
                { question: "Discuss how Gothic texts comment on their historical period.", marks: 6 },
                { question: "Compare psychological and physical horror in Gothic tradition.", marks: 5 }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Analyze atmosphere", "Examine characterization", "Evaluate narrative technique", "Compare Gothic elements"],
            common_mistakes: ["Confusing Gothic with just scary", "Ignoring symbolic meaning", "Analysis without text reference", "Missing historical context"],
            tips: ["Discuss specific atmospheric techniques", "Connect plot to character psychology", "Consider when text was written", "Analyze unreliable narration carefully"]
        },
        section_6_additional_resources: [
            { title: "Gothic Literature Analysis Guide", type: "article", url: "https://www.gothic-lit-guide.com" },
            { title: "Victorian Gothic & Modernity", type: "video", url: "https://www.youtube.com/gothic-victorian" },
            { title: "Interactive Gothic Atmosphere Explorer", type: "interactive", url: "https://www.literary-atmosphere-tool.io" }
        ],
        section_7_assessment_answers: {
            practice_answers: ["[Sample answers provided]"],
            marking_rubric: ["0-1 marks: Minimal engagement", "2-3 marks: Basic analysis", "4-5 marks: Solid technique identification", "6+ marks: Sophisticated psychological analysis"]
        }
    },

    // ============================================================
    // ENGLISH LANGUAGE EXTENDED — 4 additional topics
    // ============================================================

    // 4. Media & Digital Communication (NEW)
    {
        id: "aqa_english_language_media_digital",
        exam_board: "aqa",
        subject: "english_language",
        topic_title: "Media & Digital Communication: Language in Online Spaces",
        topic_number: "4",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Analyze language use across digital platforms: social media, news sites, advertising, gaming. Understand how digital communication transforms traditional language conventions.",
            key_terms: [
                { term: "Discourse Community", definition: "Group sharing common communication practices and language norms", importance: "Digital spaces create distinct discourse communities" },
                { term: "Multimodal", definition: "Combining multiple communication modes: text, image, video, sound", importance: "Digital communication inherently multimodal" },
                { term: "Netspeak", definition: "Modified language conventions in online communication", importance: "Unique digital language phenomenon" },
                { term: "Algorithm", definition: "Set of rules determining what content appears to users", importance: "Shapes what language users encounter online" },
                { term: "Virality", definition: "Rapid, organic spread of content through sharing", importance: "Digital-specific communication phenomenon" }
            ],
            learning_objectives: [
                "Analyze language strategies in digital media",
                "Examine multimodal communication techniques",
                "Compare language conventions across platforms",
                "Discuss impact of digital technology on language evolution",
                "Evaluate manipulative techniques in online communication"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Platform-Specific Language Conventions",
                content: "Each digital platform develops distinct discourse norms. Twitter's 280-character limit encourages conciseness; Instagram emphasizes visual with minimal text; TikTok combines video, sound, text for rapid messaging. Linguistic features vary: formality levels, emoji use, hashtag conventions, response speed expectations. Users code-switch between platforms, adopting appropriate register for audience.",
                key_points: ["Character limits shape sentence structure", "Visual hierarchy influences text placement", "Platform culture determines acceptable language", "Users maintain multiple persona/registers"]
            },
            {
                heading: "Multimodal Communication & Image-Text Relationships",
                content: "Digital texts rarely consist of words alone. Image-text combination creates new meanings impossible with text alone. Memes combine image, text, and cultural reference for compact communication. Infographics use layout, color, typography, and data visualization alongside minimal text. Videos integrate verbal language, visual composition, sound design, editing. Analysis requires examining how modes interact, reinforce, or complicate each other.",
                key_points: ["Image and text create symbiotic meanings", "Layout and typography carry meaning", "Visual design influences interpretation", "Modes can support or contradict each other"]
            },
            {
                heading: "Manipulation & Persuasion in Digital Spaces",
                content: "Digital media enables sophisticated persuasion through targeted advertising, algorithmic curation, and microtargeting. Clickbait uses sensational headlines to drive engagement. Filter bubbles and echo chambers reinforce existing beliefs through algorithmic selection. Deep fakes combine authentic-looking video with manipulated content. Understanding digital persuasion requires recognizing emotional appeals, statistics manipulation, source credibility questions.",
                key_points: ["Algorithms select content reinforcing biases", "Emotional language drives engagement", "Visual effects enhance credibility illusions", "Targeted messaging creates filter bubbles"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Analyze language and visual techniques used in a viral social media post.",
                step_by_step: [
                    "Describe the visual composition and image choice",
                    "Identify text elements: headline, caption, hashtags",
                    "Examine linguistic choices: tone, register, emotional appeals",
                    "Show how image and text interact to create meaning",
                    "Analyze how multimodal combination encourages sharing"
                ],
                answer: "Successful viral posts combine relatable images with punchy, witty text. Emotional resonance (humor, outrage, inspiration) drives sharing. Visual humor or striking imagery makes scroll-stopping. Text adds context or punchline. Together, they create shareable moments exceeding either mode's capability alone."
            },
            {
                question: "Compare language conventions on Twitter vs. Instagram.",
                step_by_step: [
                    "Analyze sentence structure typical to each platform",
                    "Note emoji/punctuation use differences",
                    "Examine formality levels and audience engagement",
                    "Discuss hashtag and mention conventions",
                    "Consider character limits' influence on brevity"
                ],
                answer: "Twitter emphasizes rapid-fire verbal wit, hashtags, and conversational threads. Instagram prioritizes captioned images with longer narrative captions and emojis. Twitter users expect engagement; Instagram audiences appreciate aesthetic curation. Twitter language is snappier; Instagram allows more reflective voice."
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { question: "What is netspeak?", marks: 2 },
                { question: "Name two platforms and describe language differences.", marks: 3 },
                { question: "What makes a post go 'viral'?", marks: 2 },
                { question: "What is multimodal communication?", marks: 2 }
            ],
            higher: [
                { question: "Analyze manipulation techniques in targeted online advertising.", marks: 5 },
                { question: "Evaluate how algorithms shape language discourse.", marks: 5 },
                { question: "Compare communication effectiveness: traditional vs. digital media.", marks: 6 },
                { question: "Discuss benefits and dangers of online communication's speed.", marks: 5 }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Analyze platform language", "Compare multimodal elements", "Evaluate persuasion techniques", "Discuss digital impact on language"],
            common_mistakes: ["Ignoring visual elements in analysis", "Treating text only", "Missing platform context", "Not considering user intent"],
            tips: ["Always discuss image-text relationship", "Reference platform conventions", "Analyze emotional appeals", "Consider algorithmic curation"]
        },
        section_6_additional_resources: [
            { title: "Digital Rhetoric Analysis Guide", type: "article", url: "https://www.digital-rhetoric.io" },
            { title: "Social Media Language Evolution", type: "video", url: "https://www.youtube.com/digital-language" },
            { title: "Multimodal Analysis Tool", type: "interactive", url: "https://www.multimodal-analyzer.com" }
        ],
        section_7_assessment_answers: {
            practice_answers: ["[Sample answers provided]"],
            marking_rubric: ["0-1 marks: Superficial analysis", "2-3 marks: Basic technique identification", "4-5 marks: Clear multimodal analysis", "6+ marks: Sophisticated understanding of digital rhetoric"]
        }
    }
];
