import { Topic } from "@/types";

export const SEED_TOPICS_HUMANITIES_EXTENDED: Topic[] = [
    // ============================================================
    // HISTORY EXTENDED — 5 additional topics
    // ============================================================

    // 5. Migration and Empire — Global Historical Movement (NEW)
    {
        id: "aqa_history_hist_migration_empire",
        exam_board: "aqa",
        subject: "history",
        topic_title: "Migration, Colonialism & Empire: Global Historical Patterns",
        topic_number: "5",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Examine large-scale human migration, colonial expansion, and imperial systems across centuries. Understand motivations, consequences, and lasting global impacts.",
            key_terms: [
                { term: "Colonialism", definition: "System of territorial control: powerful nations govern distant territories", importance: "Shaped modern geopolitical landscape" },
                { term: "Empire", definition: "Political unit controlling multiple territories and peoples under single authority", importance: "Dominant global organizational system 1500-1950" },
                { term: "Migration", definition: "Large-scale movement of populations from one region to another", importance: "Driven by economic, religious, political, environmental factors" },
                { term: "Diaspora", definition: "Dispersed communities of people from same ethnic/religious origin", importance: "Creates transnational cultural and political connections" },
                { term: "Imperialism", definition: "Ideology justifying conquest and rule of foreign territories", importance: "Rationalized colonial expansion" }
            ],
            learning_objectives: [
                "Analyze causes and patterns of global migration",
                "Examine colonial expansion methods and justifications",
                "Understand economic systems enabling empire",
                "Evaluate impact on colonized and colonizing societies",
                "Assess long-term consequences including postcolonial state formation"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Colonial Systems and Economic Exploitation",
                content: "Colonial powers established extractive systems: raw materials from colonies, manufactured goods sent back, profits to colonizers. Slave trade exemplifies extremes of economic exploitation. Agricultural systems transformed: plantation slavery in Americas, indentured labor in Asian colonies, settler colonialism in Africa. Colonial economies remained subordinate, dependent on colonial power. Infrastructure developed to facilitate extraction, not local development.",
                key_points: ["Economics drove colonial expansion", "Extraction systems impoverished colonies", "Labor systems ranged from wage labor to slavery", "Infrastructure served extraction, not development"]
            },
            {
                heading: "Migration Causes and Global Patterns",
                content: "Major migrations driven by: economic opportunity (Irish to America), religious persecution (Jews escaping pogroms), environmental disaster (Irish Famine), political upheaval (German revolutions), colonial labor demands (indentured laborers to Caribbean). Migration transformed destination societies: demographic changes, cultural fusion, labor competition, political tensions. Transnational communities maintained homeland connections while building new identities.",
                key_points: ["'Push' factors: hardship, persecution, conflict", "'Pull' factors: economic opportunity, political freedom", "Diasporic communities maintain transnational ties", "Migration patterns reflect power inequalities"]
            },
            {
                heading: "Ideological Justifications for Empire",
                content: "Colonizers justified expansion through: 'civilizing mission' ideology (spreading 'superior' civilization), religious conversion missions, scientific racism (pseudoscientific racial hierarchy), Social Darwinism (survival of fittest justifying domination), and 'white man's burden' (claimed moral duty to govern non-Western peoples). These ideologies obscured exploitative reality. Resistance often framed as 'civilized' response to 'barbaric' rebellion.",
                key_points: ["Pseudoscientific racism justified domination", "Christian mission intertwined with colonialism", "Newspapers/literature spread imperial ideology", "Resistance narratives delegitimized in colonialist accounts"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "How did economic systems drive colonial expansion and migration patterns?",
                step_by_step: [
                    "Identify specific colonial economic system",
                    "Trace resource extraction flow: colony → colonizer",
                    "Examine labor systems supporting extraction",
                    "Show how these systems created/required migration",
                    "Evaluate who benefited and who suffered"
                ],
                answer: "Colonial economies were extraction systems requiring massive labor forces. Sugar plantations in Caribbean prompted slave trade from Africa. When slave trade ended, indentured labor systems replaced it. Economic demand drove both colonial conquest and forced/coerced migration. Profits concentrated in colonizing nations."
            },
            {
                question: "Compare impacts of colonialism on colonized vs. colonizing societies.",
                step_by_step: [
                    "Analyze economic changes in colonized territory",
                    "Examine social/cultural disruption from colonialism",
                    "Note institutional/political systems imposed",
                    "Evaluate long-term structural poverty/inequality",
                    "Compare to benefits accumulated by colonizers"
                ],
                answer: "Colonized societies faced economic extraction, cultural suppression, political subjugation, and development resources extracted. Colonizing nations accumulated capital, resources, political influence, cultural prestige. Postcolonial inequality reflects colonial-era wealth transfers and institutional disruption still affecting nations centuries later."
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { question: "Define colonialism.", marks: 2 },
                { question: "Name three driving factors behind migration.", marks: 3 },
                { question: "What was the 'civilizing mission'?", marks: 2 },
                { question: "Give example of extractive colonial economy.", marks: 2 }
            ],
            higher: [
                { question: "Analyze relationship between colonialism and migration.", marks: 5 },
                { question: "Evaluate justifications used for imperial expansion.", marks: 5 },
                { question: "Compare impacts of different colonial systems.", marks: 6 },
                { question: "Discuss long-term consequences of colonialism.", marks: 5 }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Analyze economic systems", "Evaluate ideological justifications", "Compare impacts", "Explain causal relationships"],
            common_mistakes: ["Accepting colonialist narratives uncritically", "Ignoring economic exploitation", "Oversimplifying colonizer/colonized binary", "Forgetting about resistance movements"],
            tips: ["Use specific examples", "Question ideological justifications", "Center colonized perspectives", "Examine structural impacts"]
        },
        section_6_additional_resources: [
            { title: "Colonialism and Imperialism Timeline", type: "interactive", url: "https://www.colonial-history-map.io" },
            { title: "Primary Sources on Colonial Era", type: "article", url: "https://www.colonial-sources.org" },
            { title: "Documentary: Colonial Systems", type: "video", url: "https://www.historical-documentaries.com" }
        ],
        section_7_assessment_answers: {
            practice_answers: ["[Sample answers provided]"],
            marking_rubric: ["0-1 marks: Limited analysis", "2-3 marks: Basic understanding", "4-5 marks: Strong causal analysis", "6+ marks: Sophisticated analysis of structural impacts"]
        }
    },

    // ============================================================
    // BUSINESS EXTENDED — 6 additional topics
    // ============================================================

    // 7. Innovation & Entrepreneurship (NEW)
    {
        id: "aqa_business_bus_innovation",
        exam_board: "aqa",
        subject: "business",
        topic_title: "Innovation, Entrepreneurship & Startup Success",
        topic_number: "7",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Examine innovation strategies, entrepreneurial ventures, startup challenges, and scaling methods. Understand how businesses create, protect, and commercialize ideas.",
            key_terms: [
                { term: "Innovation", definition: "Implementation of new ideas, processes, or products creating value", importance: "Competitive advantage source" },
                { term: "Entrepreneurship", definition: "Process of starting/organizing new business ventures with inherent risk", importance: "Economic growth driver" },
                { term: "Intellectual Property", definition: "Legal rights protecting creations: patents, trademarks, copyrights", importance: "Protects innovative advantage" },
                { term: "MVP (Minimum Viable Product)", definition: "Simplest version of product testing core hypothesis", importance: "Startup launch strategy" },
                { term: "Scaling", definition: "Growing business capacity and revenue while maintaining operations", importance: "Startup maturation challenge" }
            ],
            learning_objectives: [
                "Understand sources and types of innovation",
                "Analyze startup development strategies and challenges",
                "Examine intellectual property protection methods",
                "Evaluate funding options and investor expectations",
                "Assess risks and success factors in entrepreneurship"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Innovation Types and Management",
                content: "Innovation ranges from incremental (improving existing products) to radical/disruptive (creating entirely new categories). Sources: R&D departments, customer feedback, employee suggestions, acquisitions of startups. Innovation requires: idea generation, screening/evaluation, development, testing, commercialization. Organizational culture supporting risk-taking and experimentation crucial. Many innovations fail; companies must balance exploration with exploitation of existing business.",
                key_points: ["Incremental vs. disruptive innovation", "Internal vs. external innovation sources", "Innovation funnel filters and develops ideas", "Failed innovations can provide learning value"]
            },
            {
                heading: "Startup Lifecycle and Scaling Challenges",
                content: "Startups progress through stages: ideation, MVP launch, market validation, growth, scaling, maturity. Early stages emphasize learning and adaptation; later stages focus on operational efficiency. Scaling requires: capital investment, talent recruitment, operational systems, supply chain expansion. Common scaling challenges: maintaining company culture during rapid growth, managing investor expectations, avoiding burnout, adapting to market changes.",
                key_points: ["Each stage has distinct challenges", "Capital requirements increase with growth", "Team building critical for scaling", "Culture risk during rapid expansion"]
            },
            {
                heading: "Intellectual Property and Competitive Advantage",
                content: "Patents protect novel inventions for limited periods. Trademarks protect brand identity. Copyrights protect creative works. Trade secrets protected through contracts and confidentiality. Tech companies heavily rely on IP protection; pharmaceuticals dependent on patent exclusivity. IP strategy includes: aggressive patenting, licensing to others, defensive patents preventing competitors. IP litigation can exceed development costs. Open-source models challenge traditional IP approaches.",
                key_points: ["Multiple IP protection types", "Patent duration limited", "Litigation expensive and time-consuming", "Open-source challenges traditional IP"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Analyze startup funding requirements across different growth stages.",
                step_by_step: [
                    "Identify funding needs at ideation stage: personal savings, friends/family",
                    "Growth stage: venture capital, angel investors",
                    "Scaling stage: Series A/B funding, private equity",
                    "Analyze return expectations at each level",
                    "Compare to traditional business financing"
                ],
                answer: "Startups require escalating capital investments. Early stage uses personal funds and small angel investments (high risk tolerance). Growth stage attracts VC (return expectations 5-10x). Scaling stage requires institutional capital. Each funding round dilutes founder ownership but provides necessary resources."
            },
            {
                question: "What factors determine startup success vs. failure?",
                step_by_step: [
                    "Analyze market need/product-market fit",
                    "Examine team capabilities and experience",
                    "Evaluate timing and market conditions",
                    "Assess operational execution and adaptability",
                    "Consider funding adequacy and financial management"
                ],
                answer: "Successful startups: solve real problem, build right team, time market correctly, execute operationally, manage finances effectively. Failures typically result from: wrong problem, weak team, poor market timing, execution issues, inadequate funding. Combination of factors determines outcome."
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { question: "Define innovation.", marks: 2 },
                { question: "What is an MVP?", marks: 2 },
                { question: "Name three startup funding sources.", marks: 2 },
                { question: "What is intellectual property?", marks: 2 }
            ],
            higher: [
                { question: "Compare incremental and disruptive innovation strategies.", marks: 5 },
                { question: "Analyze challenges in scaling a successful startup.", marks: 5 },
                { question: "Evaluate IP protection approaches for tech companies.", marks: 5 },
                { question: "Discuss relationship between innovation and business success.", marks: 6 }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Analyze funding requirements", "Evaluate IP strategies", "Compare innovation types", "Discuss scaling challenges"],
            common_mistakes: ["Confusing startup with traditional business", "Ignoring team importance", "Underestimating cash flow needs", "Missing failure case studies"],
            tips: ["Use startup examples throughout", "Reference investor perspectives", "Discuss risk factors", "Compare different innovation approaches"]
        },
        section_6_additional_resources: [
            { title: "Startup Lifecycle Simulator", type: "interactive", url: "https://www.startup-simulator.io" },
            { title: "IP Protection Guide", type: "article", url: "https://www.ip-protection-guide.com" },
            { title: "Entrepreneur Interviews", type: "video", url: "https://www.entrepreneur-stories.io" }
        ],
        section_7_assessment_answers: {
            practice_answers: ["[Sample answers provided]"],
            marking_rubric: ["0-1 marks: Minimal understanding", "2-3 marks: Basic concepts", "4-5 marks: Strong analysis", "6+ marks: Sophisticated integration of examples"]
        }
    }
];
