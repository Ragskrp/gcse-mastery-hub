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
                heading: "Colonial Systems and Economic Exploitation", content: "Colonial powers established extractive systems: raw materials from colonies, manufactured goods sent back, profits to colonizers. Slave trade exemplifies extremes of economic exploitation. Agricultural systems transformed: plantation slavery in Americas, indentured labor in Asian colonies, settler colonialism in Africa. Colonial economies remained subordinate, dependent on colonial power. Infrastructure developed to facilitate extraction, not local development.", animation_type: "reveal",
                key_points: ["Economics drove colonial expansion", "Extraction systems impoverished colonies", "Labor systems ranged from wage labor to slavery", "Infrastructure served extraction, not development"]
            },
            {
                heading: "Migration Causes and Global Patterns", content: "Major migrations driven by: economic opportunity (Irish to America), religious persecution (Jews escaping pogroms), environmental disaster (Irish Famine), political upheaval (German revolutions), colonial labor demands (indentured laborers to Caribbean). Migration transformed destination societies: demographic changes, cultural fusion, labor competition, political tensions. Transnational communities maintained homeland connections while building new identities.", animation_type: "reveal",
                key_points: ["'Push' factors: hardship, persecution, conflict", "'Pull' factors: economic opportunity, political freedom", "Diasporic communities maintain transnational ties", "Migration patterns reflect power inequalities"]
            },
            {
                heading: "Ideological Justifications for Empire", content: "Colonizers justified expansion through: 'civilizing mission' ideology (spreading 'superior' civilization), religious conversion missions, scientific racism (pseudoscientific racial hierarchy), Social Darwinism (survival of fittest justifying domination), and 'white man's burden' (claimed moral duty to govern non-Western peoples). These ideologies obscured exploitative reality. Resistance often framed as 'civilized' response to 'barbaric' rebellion.", animation_type: "reveal",
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
                { id: "cm_f1", question: "Define colonialism.", type: "short_answer", correct_answer: "Policy of acquiring control over another country", explanation: "Includes occupying it with settlers and exploiting it economically.", marks: 2, difficulty: "foundation" },
                { id: "cm_f2", question: "Name three driving factors behind migration.", type: "short_answer", correct_answer: "War, famine, economic opportunity", explanation: "Push and pull factors.", marks: 3, difficulty: "foundation" },
                { id: "cm_f3", question: "What was the 'civilizing mission'?", type: "short_answer", correct_answer: "Justification for colonialism based on supposed superiority", explanation: "Used to justify European rule.", marks: 2, difficulty: "foundation" },
                { id: "cm_f4", question: "Give example of extractive colonial economy.", type: "short_answer", correct_answer: "Mining, plantations", explanation: "Resources sent to the colonizer.", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "cm_h1", question: "Analyze relationship between colonialism and migration.", type: "essay", correct_answer: "Various", explanation: "Forced vs voluntary movement.", marks: 5, difficulty: "higher" },
                { id: "cm_h2", question: "Evaluate justifications used for imperial expansion.", type: "essay", correct_answer: "Various", explanation: "Economic, political, religious.", marks: 5, difficulty: "higher" },
                { id: "cm_h3", question: "Compare impacts of different colonial systems.", type: "essay", correct_answer: "Various", explanation: "Direct vs indirect rule.", marks: 6, difficulty: "higher" },
                { id: "cm_h4", question: "Discuss long-term consequences of colonialism.", type: "essay", correct_answer: "Various", explanation: "Economic and political legacy.", marks: 5, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Analyze economic systems", "Evaluate ideological justifications", "Compare impacts", "Explain causal relationships"],
            common_mistakes: ["Accepting colonialist narratives uncritically", "Ignoring economic exploitation", "Oversimplifying colonizer/colonized binary", "Forgetting about resistance movements"],
            exam_tips: ["Use specific examples", "Question ideological justifications", "Center colonized perspectives", "Examine structural impacts"]
        },
        section_6_additional_resources: {
            resources: [
                { title: "Colonialism and Imperialism Timeline", type: "interactive", url: "https://www.colonial-history-map.io", description: "Interactive timeline." },
                { title: "Primary Sources on Colonial Era", type: "article", url: "https://www.colonial-sources.org", description: "Source documents." },
                { title: "Documentary: Colonial Systems", type: "video", url: "https://www.historical-documentaries.com", description: "Documentary film." }
            ]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "cm_f1", model_answer: "Colonialism is the policy of acquiring control over another country.", mark_breakdown: ["1 mark for definition"], examiner_tip: "Focus on control." }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 },
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
                heading: "Innovation Types and Management", content: "Innovation ranges from incremental (improving existing products) to radical/disruptive (creating entirely new categories). Sources: R&D departments, customer feedback, employee suggestions, acquisitions of startups. Innovation requires: idea generation, screening/evaluation, development, testing, commercialization. Organizational culture supporting risk-taking and experimentation crucial. Many innovations fail; companies must balance exploration with exploitation of existing business.", animation_type: "reveal",
                key_points: ["Incremental vs. disruptive innovation", "Internal vs. external innovation sources", "Innovation funnel filters and develops ideas", "Failed innovations can provide learning value"]
            },
            {
                heading: "Startup Lifecycle and Scaling Challenges", content: "Startups progress through stages: ideation, MVP launch, market validation, growth, scaling, maturity. Early stages emphasize learning and adaptation; later stages focus on operational efficiency. Scaling requires: capital investment, talent recruitment, operational systems, supply chain expansion. Common scaling challenges: maintaining company culture during rapid growth, managing investor expectations, avoiding burnout, adapting to market changes.", animation_type: "reveal",
                key_points: ["Each stage has distinct challenges", "Capital requirements increase with growth", "Team building critical for scaling", "Culture risk during rapid expansion"]
            },
            {
                heading: "Intellectual Property and Competitive Advantage", content: "Patents protect novel inventions for limited periods. Trademarks protect brand identity. Copyrights protect creative works. Trade secrets protected through contracts and confidentiality. Tech companies heavily rely on IP protection; pharmaceuticals dependent on patent exclusivity. IP strategy includes: aggressive patenting, licensing to others, defensive patents preventing competitors. IP litigation can exceed development costs. Open-source models challenge traditional IP approaches.", animation_type: "reveal",
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
                { id: "in_f1", question: "Define innovation.", type: "short_answer", correct_answer: "Implementing new ideas", explanation: "Can be products or processes.", marks: 2, difficulty: "foundation" },
                { id: "in_f2", question: "What is an MVP?", type: "short_answer", correct_answer: "Minimum Viable Product", explanation: "Used to test market demand.", marks: 2, difficulty: "foundation" },
                { id: "in_f3", question: "Name three startup funding sources.", type: "short_answer", correct_answer: "Angel investors, VC, crowdfunding", explanation: "Ways to raise capital.", marks: 2, difficulty: "foundation" },
                { id: "in_f4", question: "What is intellectual property?", type: "short_answer", correct_answer: "Creations of the mind", explanation: "Includes patents and trademarks.", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "in_h1", question: "Compare incremental and disruptive innovation strategies.", type: "essay", correct_answer: "Various", explanation: "Small improvements vs market shifts.", marks: 5, difficulty: "higher" },
                { id: "in_h2", question: "Analyze challenges in scaling a successful startup.", type: "essay", correct_answer: "Various", explanation: "Hiring, infrastructure, funding.", marks: 5, difficulty: "higher" },
                { id: "in_h3", question: "Evaluate IP protection approaches for tech companies.", type: "essay", correct_answer: "Various", explanation: "Patents vs speed to market.", marks: 5, difficulty: "higher" },
                { id: "in_h4", question: "Discuss relationship between innovation and business success.", type: "essay", correct_answer: "Various", explanation: "Staying competitive.", marks: 6, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: ["Analyze funding requirements", "Evaluate IP strategies", "Compare innovation types", "Discuss scaling challenges"],
            common_mistakes: ["Confusing startup with traditional business", "Ignoring team importance", "Underestimating cash flow needs", "Missing failure case studies"],
            exam_tips: ["Use startup examples throughout", "Reference investor perspectives", "Discuss risk factors", "Compare different innovation approaches"]
        },
        section_6_additional_resources: {
            resources: [
                { title: "Startup Lifecycle Simulator", type: "interactive", url: "https://www.startup-simulator.io", description: "Business simulator." },
                { title: "IP Protection Guide", type: "article", url: "https://www.ip-protection-guide.com", description: "Legal guide." },
                { title: "Entrepreneur Interviews", type: "video", url: "https://www.entrepreneur-stories.io", description: "Interviews." }
            ]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "in_f1", model_answer: "Innovation is the implementation of new ideas.", mark_breakdown: ["1 mark for definition"], examiner_tip: "Focus on implementation." }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 },
            practice_answers: ["[Sample answers provided]"],
            marking_rubric: ["0-1 marks: Minimal understanding", "2-3 marks: Basic concepts", "4-5 marks: Strong analysis", "6+ marks: Sophisticated integration of examples"]
        }
    }
];
