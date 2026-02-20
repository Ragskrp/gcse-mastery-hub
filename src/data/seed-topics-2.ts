import { Topic } from "@/types";

export const SEED_TOPICS_PART2: Topic[] = [
    // 4. AQA Business — Market Research
    {
        id: "aqa_business_market_research",
        exam_board: "aqa",
        subject: "business",
        topic_title: "Market Research",
        topic_number: "1.2",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Market research is the process of gathering information about consumers, competitors, and market trends. Businesses use this data to make informed decisions and reduce risk.",
            key_terms: [
                { term: "Primary research", definition: "Data collected first-hand for a specific purpose (e.g., surveys, interviews)", importance: "Provides up-to-date, relevant data" },
                { term: "Secondary research", definition: "Data that already exists, collected by someone else (e.g., government reports, internet)", importance: "Cheaper and quicker to obtain" },
                { term: "Qualitative data", definition: "Data based on opinions, feelings, and reasons — usually in words", importance: "Helps understand WHY customers behave a certain way" },
                { term: "Quantitative data", definition: "Data that can be measured and expressed as numbers/statistics", importance: "Easy to analyse and compare" },
                { term: "Market segmentation", definition: "Dividing a market into groups of customers with similar needs", importance: "Allows targeted marketing" }
            ],
            learning_objectives: [
                "Explain the purpose of market research",
                "Distinguish between primary and secondary research",
                "Evaluate different market research methods",
                "Understand qualitative vs quantitative data",
                "Explain market segmentation and its benefits"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Why Businesses Conduct Market Research",
                content: "Market research helps businesses: identify customer needs and wants, spot gaps in the market, reduce the risk of product failure, understand competitor strategies, and make informed decisions about pricing, promotion, and distribution. Without it, businesses are essentially guessing.",
                key_points: ["Reduces risk of failure", "Identifies customer needs before launch", "Helps with pricing and promotion decisions", "Keeps business aware of competitors"]
            },
            {
                heading: "Primary vs Secondary Research",
                content: "Primary research (field research) involves collecting new data: surveys, questionnaires, interviews, focus groups, observations. It is specific to your needs but expensive and time-consuming. Secondary research (desk research) uses existing data: websites, newspapers, government statistics, market reports. It is cheaper but may be outdated or not specific enough.",
                key_points: ["Primary = new data, specific, expensive, time-consuming", "Secondary = existing data, cheaper, quicker, may be outdated", "Best approach: use both together", "Primary methods: surveys, interviews, focus groups, observation"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Evaluate the use of online surveys as a method of primary market research for a new clothing brand (6 marks)",
                step_by_step: [
                    "Point 1 (Advantage): Online surveys can reach a large number of people quickly and cheaply compared to face-to-face interviews.",
                    "Development: This is important for a new clothing brand with a limited budget, as they can gather lots of quantitative data on fashion preferences without high costs.",
                    "Point 2 (Disadvantage): However, responses may be superficial — customers might not explain WHY they prefer certain styles.",
                    "Development: This means the brand may miss important qualitative insights that a focus group would provide.",
                    "Judgement: Overall, online surveys are a useful starting point but should be combined with smaller focus groups to gather both quantitative and qualitative data."
                ],
                answer: "Balanced evaluation with advantages, disadvantages, and a justified judgement"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mr1f1", question: "Which of these is an example of primary research?", type: "mcq", options: ["Reading a newspaper article", "Conducting a survey", "Using government statistics", "Checking a competitor's website"], correct_answer: "Conducting a survey", explanation: "A survey collects new data first-hand, making it primary research", marks: 1, difficulty: "foundation" },
                { id: "mr1f2", question: "Give one advantage and one disadvantage of secondary research", type: "short_answer", correct_answer: "Advantage: Cheaper/quicker. Disadvantage: May be outdated/not specific", explanation: "Secondary research uses existing data — fast but potentially irrelevant", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "mr1h1", question: "Justify which type of market research a startup restaurant should prioritise", type: "essay", correct_answer: "Primary research (local area surveys, taste tests) because the restaurant needs specific local data about dining preferences, dietary requirements, and price sensitivity that secondary data cannot provide", explanation: "Higher-level questions require justified decisions", marks: 6, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Evaluate", meaning: "Consider advantages and disadvantages, then make a judgement" },
                { word: "Justify", meaning: "Give reasons for your decision — explain WHY" }
            ],
            exam_tips: ["Use business terminology", "Always apply to the context given", "For 6-mark questions, give both sides then judge"],
            common_mistakes: ["Being too generic — always link to the specific business", "Not making a final judgement in evaluate questions"],
            mark_scheme_notes: ["Knowledge marks (1-2), Application marks (1-2), Analysis/Evaluation marks (1-2)"],
            time_allocation: "About 1.5 minutes per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Market Research Case Studies", type: "article", description: "Real examples of successful market research" }
            ],
            further_reading: ["AQA GCSE Business Textbook — Chapter 2"],
            revision_checklist: ["I can explain primary vs secondary research", "I can evaluate research methods", "I understand qualitative vs quantitative data"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mr1f1", model_answer: "Conducting a survey is primary research because you are collecting data first-hand for a specific purpose.", mark_breakdown: ["1 mark for correct identification"], examiner_tip: "Primary = you collect it yourself, Secondary = it already exists" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 74, grade_5: 54, grade_4: 44 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // 5. AQA French — Identity & Culture
    {
        id: "aqa_french_identity_culture",
        exam_board: "aqa",
        subject: "french",
        topic_title: "Identity and Culture — Me, My Family & Friends",
        topic_number: "Theme 1.1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "This topic covers how to describe yourself, your family, and relationships in French. You'll learn key vocabulary, grammar structures, and cultural context for AQA Theme 1.",
            key_terms: [
                { term: "La famille", definition: "Family", importance: "Core vocabulary for speaking and writing" },
                { term: "Les loisirs", definition: "Hobbies/leisure activities", importance: "Common topic in speaking exam" },
                { term: "Les adjectifs", definition: "Adjectives — words that describe nouns", importance: "Must agree in gender and number in French" },
                { term: "Le présent", definition: "Present tense", importance: "Most commonly tested tense" },
                { term: "Le passé composé", definition: "Past tense (perfect)", importance: "Needed for higher marks" }
            ],
            learning_objectives: [
                "Describe yourself and family members in French",
                "Use adjective agreements correctly",
                "Form and use present and past tenses",
                "Discuss relationships and what makes a good friend",
                "Use opinions and justifications (car/parce que)"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Describing Family Members",
                content: "Key vocabulary: mon père (my father), ma mère (my mother), mon frère (my brother), ma sœur (my sister), mes grands-parents (my grandparents). To describe people: Il/Elle est + adjective. Example: Ma mère est gentille et travailleuse (My mother is kind and hardworking). Remember adjective agreements: add -e for feminine, -s for plural.",
                key_points: ["mon/ma/mes = my (masc/fem/plural)", "Adjectives agree with gender: gentil → gentille", "Use 'Il est...' for he, 'Elle est...' for she", "Family members are core vocabulary for all papers"]
            },
            {
                heading: "Talking About Relationships",
                content: "Je m'entends bien avec... (I get on well with...). On se dispute parfois (We argue sometimes). Mon meilleur ami est... (My best friend is...). Un bon ami doit être fidèle, honnête et compréhensif (A good friend should be loyal, honest and understanding).",
                key_points: ["s'entendre bien/mal avec = get on well/badly with", "Use connectives: cependant (however), de plus (moreover)", "Give opinions: à mon avis, je pense que, je crois que", "Use justifications with car/parce que (because)"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Translate into French: 'I get on well with my sister because she is funny and kind.'",
                step_by_step: [
                    "I get on well with = Je m'entends bien avec",
                    "my sister = ma sœur",
                    "because = parce que / car",
                    "she is = elle est",
                    "funny = drôle (same for masc/fem)",
                    "and = et",
                    "kind = gentille (feminine because sister)"
                ],
                answer: "Je m'entends bien avec ma sœur parce qu'elle est drôle et gentille.",
                common_mistakes: ["Forgetting adjective agreement (gentil instead of gentille)", "Using 'avec ma soeur car elle est' — parce que + elle = parce qu'elle"]
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "fr1f1", question: "What does 'Je m'entends bien avec mon frère' mean?", type: "mcq", options: ["I argue with my brother", "I get on well with my brother", "I live with my brother", "I look like my brother"], correct_answer: "I get on well with my brother", explanation: "s'entendre bien avec = to get on well with", marks: 1, difficulty: "foundation" },
                { id: "fr1f2", question: "Write a sentence describing your best friend in French", type: "short_answer", correct_answer: "Mon meilleur ami est drôle et intelligent (or similar correct sentence)", explanation: "Must include correct adjective agreement and structure", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "fr1h1", question: "Write 40 words in French about your relationship with a family member. Include two tenses.", type: "essay", correct_answer: "A paragraph using present and past/future tense with opinions and justifications", explanation: "For higher marks, use multiple tenses and complex opinions", marks: 8, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Translate", meaning: "Convert accurately between English and French" },
                { word: "Write approximately 90/150 words", meaning: "Foundation 90 words, Higher 150 words — quality matters more than quantity" }
            ],
            exam_tips: ["Use three tenses for top marks", "Always justify opinions with parce que/car", "Check adjective agreements before submitting", "Learn set phrases for each topic"],
            common_mistakes: ["Wrong adjective agreement", "Using only present tense", "Direct translation from English word order"],
            mark_scheme_notes: ["Content (what you say), Quality of Language (accuracy), Range (variety of vocab and structures)"],
            time_allocation: "Translation: 10 min, Writing: 25 min per question"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Adjective Agreement Practice", type: "interactive", description: "Drag-and-drop adjective matching game" },
                { title: "French Family Vocabulary Audio", type: "video", description: "Listen and repeat pronunciation guide" }
            ],
            further_reading: ["AQA GCSE French Textbook — Theme 1"],
            revision_checklist: ["I can describe family members with correct adjective agreements", "I can use present and past tenses", "I can give and justify opinions in French", "I know key relationship vocabulary"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "fr1f1", model_answer: "'I get on well with my brother' — s'entendre bien avec means to get along well with someone", mark_breakdown: ["1 mark for correct translation"], examiner_tip: "Learn reflexive verbs as set phrases" }
            ],
            grade_boundaries: { grade_9: 88, grade_7: 72, grade_5: 52, grade_4: 42 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // 6. AQA History — Medicine Through Time
    {
        id: "aqa_history_medicine",
        exam_board: "aqa",
        subject: "history",
        topic_title: "Medicine Through Time — Medieval Medicine",
        topic_number: "1.1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Medieval medicine (c.1250-1500) was dominated by the Church, Galen's ideas, and supernatural beliefs. Understanding why progress was limited is key to exam success.",
            key_terms: [
                { term: "Theory of the Four Humours", definition: "Ancient belief that the body contained four liquids (blood, phlegm, yellow bile, black bile) that needed to be balanced", importance: "Dominated medical thinking for over 1000 years" },
                { term: "Miasma", definition: "The belief that disease was caused by bad air or smells", importance: "Led to some useful public health measures but was wrong" },
                { term: "Galen", definition: "Ancient Roman physician whose ideas about anatomy were followed for centuries", importance: "His work was promoted by the Church and rarely questioned" },
                { term: "Barber-surgeon", definition: "A person who performed minor surgeries and bloodletting as well as cutting hair", importance: "Shows the limited training of medieval 'surgeons'" },
                { term: "The Black Death", definition: "A plague pandemic (1348-1349) that killed 30-60% of Europe's population", importance: "Key event showing limitations of medieval medicine" }
            ],
            learning_objectives: [
                "Explain medieval beliefs about the cause of disease",
                "Describe common medieval treatments",
                "Assess the role of the Church in medical progress",
                "Evaluate why there was limited progress in medieval medicine",
                "Analyse the impact of the Black Death"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Medieval Beliefs About Disease",
                content: "Medieval people believed disease was caused by: 1) An imbalance of the Four Humours (from Hippocrates and Galen), 2) Miasma — bad smells and corrupt air, 3) God's punishment for sin, 4) Alignment of planets and stars. Because they didn't know about germs, treatments were often ineffective. The Church controlled education and promoted Galen's ideas, discouraging new thinking.",
                key_points: ["Four Humours: blood, phlegm, yellow bile, black bile", "Church promoted Galen = limited challenge to old ideas", "Supernatural beliefs (God, astrology) were common", "No understanding of germs until 19th century"]
            },
            {
                heading: "Medieval Treatments",
                content: "Common treatments included: bloodletting (removing blood to 'rebalance humours'), purging (vomiting/laxatives), herbal remedies, prayer and pilgrimage, and flagellation (whipping to seek God's forgiveness). While some herbal remedies had genuine medicinal properties, most treatments were based on flawed theories.",
                key_points: ["Bloodletting — most common treatment", "Herbal remedies — some actually worked!", "Prayer/pilgrimage — reflects supernatural beliefs", "Leeches used to remove 'excess blood'"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Explain why there was limited progress in medieval medicine (8 marks)",
                step_by_step: [
                    "Factor 1 — The Church: The Church controlled education and promoted Galen's ideas as they matched the belief in God's design. Anyone who challenged Galen could be accused of heresy. This meant new ideas were suppressed.",
                    "Factor 2 — Communication: With no printing press until 1440, new ideas spread slowly. Most people were illiterate, so knowledge stayed with a small elite.",
                    "Factor 3 — War and Instability: Constant wars meant resources went to fighting, not medical research. Libraries and manuscripts were destroyed.",
                    "Link: These factors combined to create an environment where old ideas were preserved rather than challenged."
                ],
                answer: "Multi-factor explanation showing how the Church, communication, and social conditions limited progress"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "hm1f1", question: "What were the Four Humours?", type: "short_answer", correct_answer: "Blood, phlegm, yellow bile, and black bile", explanation: "The Four Humours were believed to be four liquids in the body that needed to be balanced for good health", marks: 2, difficulty: "foundation" },
                { id: "hm1f2", question: "What was miasma?", type: "mcq", options: ["A type of medicine", "Bad air believed to cause disease", "A medieval hospital", "A type of surgery"], correct_answer: "Bad air believed to cause disease", explanation: "Miasma theory = disease caused by bad smells/corrupt air", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "hm1h1", question: "How far do you agree that the Church was the main reason for limited medical progress in medieval England? (16 marks)", type: "essay", correct_answer: "Balanced argument considering Church influence vs other factors (lack of technology, war, education) with a substantiated judgement", explanation: "16-mark questions require sustained argument with multiple factors and a final judgement", marks: 16, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Explain", meaning: "Give reasons WHY — show cause and consequence" },
                { word: "How far do you agree", meaning: "Argue both sides, then give a justified conclusion" }
            ],
            exam_tips: ["Always use specific dates and examples", "Structure: Point → Evidence → Explanation", "For 16-mark questions: intro, 3 paragraphs, conclusion"],
            common_mistakes: ["Being descriptive instead of analytical", "Forgetting to reach a conclusion in 'How far' questions"],
            mark_scheme_notes: ["Simple statement = Level 1 (1-4)", "Supported explanation = Level 2 (5-8)", "Complex explanation with links = Level 3 (9-12)", "Sustained judgement = Level 4 (13-16)"],
            time_allocation: "16-mark question: 20-25 minutes"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Medieval Medicine Timeline", type: "interactive", description: "Interactive timeline of key events in medieval medicine" }
            ],
            further_reading: ["AQA History GCSE Textbook — Medicine Through Time"],
            revision_checklist: ["I can explain the Four Humours theory", "I can describe common medieval treatments", "I can evaluate the role of the Church", "I can write a 16-mark essay with a judgement"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "hm1f1", model_answer: "The Four Humours were blood, phlegm, yellow bile, and black bile. Medieval doctors believed these four liquids needed to be balanced for good health.", mark_breakdown: ["1 mark for naming at least 3 humours", "1 mark for explaining they needed to be balanced"], examiner_tip: "You must name all four for full marks" }
            ],
            grade_boundaries: { grade_9: 88, grade_7: 70, grade_5: 50, grade_4: 40 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // 7. AQA RE — Christianity Practices
    {
        id: "aqa_re_christianity_practices",
        exam_board: "aqa",
        subject: "religious_studies",
        topic_title: "Christianity — Practices",
        topic_number: "2.1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "This topic covers the key practices of Christianity including worship, prayer, sacraments, and the role of the Church in the local community and worldwide.",
            key_terms: [
                { term: "Liturgical worship", definition: "A formal, structured form of worship following a set pattern", importance: "Used in Catholic and Anglican churches" },
                { term: "Sacrament", definition: "A holy ritual through which believers receive God's grace", importance: "Catholics recognise 7; Protestants usually 2" },
                { term: "Baptism", definition: "A sacrament of initiation into the Christian faith using water", importance: "Practised by almost all Christian denominations" },
                { term: "Eucharist", definition: "A sacrament remembering the Last Supper — bread and wine represent Christ's body and blood", importance: "Central act of worship for most Christians" },
                { term: "Pilgrimage", definition: "A journey to a holy place for spiritual reasons", importance: "e.g., Lourdes, Jerusalem, Iona" }
            ],
            learning_objectives: [
                "Describe different forms of Christian worship",
                "Explain the significance of sacraments",
                "Compare infant and believers' baptism",
                "Analyse the role of the Church in the community",
                "Evaluate the importance of prayer and pilgrimage"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Forms of Worship",
                content: "Liturgical worship follows a set order of service (e.g., Catholic Mass). Non-liturgical worship is more informal and spontaneous (e.g., Quaker meetings). Private worship is individual prayer and Bible study at home. Each form helps Christians connect with God differently.",
                key_points: ["Liturgical = formal, structured, set prayers", "Non-liturgical = informal, spontaneous, charismatic", "Private = individual prayer, meditation, Bible reading", "All forms aim to worship and communicate with God"]
            },
            {
                heading: "Sacraments: Baptism and Eucharist",
                content: "Baptism: Infant baptism (Catholic, Anglican) welcomes babies into the Church — parents and godparents make promises. Believers' baptism (Baptist) is full immersion for those old enough to choose. Eucharist: Catholics believe bread and wine literally become Christ's body and blood (transubstantiation). Protestants see it as symbolic remembrance.",
                key_points: ["Infant baptism = promises made on child's behalf", "Believers' baptism = personal choice, full immersion", "Transubstantiation = Catholic belief in literal change", "Protestants = symbolic remembrance of Last Supper"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "'Prayer is the most important Christian practice.' Evaluate this statement (12 marks)",
                step_by_step: [
                    "Agree: Prayer is direct communication with God. Jesus taught the Lord's Prayer (Matthew 6:9-13), showing its importance. Many Christians pray daily — it strengthens their relationship with God.",
                    "Agree: Prayer brings comfort in difficult times. Philippians 4:6 — 'Do not be anxious about anything, but in every situation, by prayer... present your requests to God.'",
                    "Disagree: Some Christians would argue worship is more important as it involves community. Hebrews 10:25 — 'Not giving up meeting together.'",
                    "Disagree: Others might say charity work (agape love) is the most important practice — 'Faith without deeds is dead' (James 2:26).",
                    "Conclusion: While prayer is fundamental, many Christians would argue it is most effective when combined with worship and action."
                ],
                answer: "Balanced evaluation using scripture and different Christian viewpoints"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "re1f1", question: "What is a sacrament?", type: "short_answer", correct_answer: "A holy ritual through which believers receive God's grace", explanation: "Sacraments are sacred acts instituted by Jesus", marks: 2, difficulty: "foundation" },
                { id: "re1f2", question: "Which type of baptism involves full immersion in water?", type: "mcq", options: ["Infant baptism", "Believers' baptism", "Confirmation", "Christening"], correct_answer: "Believers' baptism", explanation: "Believers' baptism (e.g., Baptist churches) involves adults choosing to be fully immersed", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "re1h1", question: "'The Eucharist is the most important sacrament.' Evaluate this statement with reference to Christianity (12 marks)", type: "essay", correct_answer: "Balanced argument considering Catholic vs Protestant views, with scripture references and a justified conclusion", explanation: "Must include multiple viewpoints and use theological terminology", marks: 12, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Evaluate", meaning: "Consider different viewpoints, use evidence, make a judgement" },
                { word: "Explain two ways", meaning: "Give two developed points with reasoning" }
            ],
            exam_tips: ["Always use scripture references", "Show understanding of different denominations", "Use 'Some Christians believe... while others...'", "Link practices to beliefs"],
            common_mistakes: ["Not referring to specific Christian denominations", "Giving opinions without backing them with scripture"],
            mark_scheme_notes: ["2-mark: simple point x2", "4-mark: developed point x2", "5-mark: explain with example + development", "12-mark: evaluation with 2+ viewpoints and conclusion"],
            time_allocation: "12-mark question: 15 minutes"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Christian Worship Comparison", type: "article", description: "Comparing worship across denominations" }
            ],
            further_reading: ["AQA Religious Studies Textbook — Christianity"],
            revision_checklist: ["I can describe 3 forms of worship", "I can compare infant and believers' baptism", "I can explain the Eucharist with denomination differences", "I can evaluate using scripture"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "re1f1", model_answer: "A sacrament is a holy ritual or ceremony through which Christians believe they receive God's grace. Catholics recognise 7 sacraments while most Protestants recognise 2 (Baptism and Eucharist).", mark_breakdown: ["1 mark for definition", "1 mark for development/example"], examiner_tip: "Always mention denomination differences where relevant" }
            ],
            grade_boundaries: { grade_9: 86, grade_7: 70, grade_5: 50, grade_4: 40 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // 8. AQA English Language — Paper 1 Explorations
    {
        id: "aqa_english_lang_paper1",
        exam_board: "aqa",
        subject: "english_language",
        topic_title: "Paper 1 — Explorations in Creative Reading and Writing",
        topic_number: "Paper 1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "AQA English Language Paper 1 tests your ability to read and analyse a fiction extract, then write your own creative piece. It's worth 50% of the English Language GCSE.",
            key_terms: [
                { term: "Inference", definition: "Reading between the lines to understand implied meaning", importance: "Essential for Q2 and Q3" },
                { term: "Structural features", definition: "How a writer organises their text (e.g., shifts in focus, contrast, repetition)", importance: "Tested in Q3 (8 marks)" },
                { term: "Language analysis", definition: "Examining the effects of specific words, phrases, and techniques", importance: "Core skill for Q2 (8 marks) and Q4 (20 marks)" },
                { term: "Narrative perspective", definition: "The viewpoint from which a story is told (first person, third person, etc.)", importance: "Affects how the reader experiences the text" },
                { term: "Extended metaphor", definition: "A metaphor that continues throughout a paragraph or text", importance: "Impressive technique for Q5 creative writing" }
            ],
            learning_objectives: [
                "Identify and interpret explicit and implicit information (Q1-Q2)",
                "Analyse how writers use structure for effect (Q3)",
                "Evaluate critically with appropriate terminology (Q4)",
                "Write a creative piece with varied vocabulary and techniques (Q5)"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Question Breakdown",
                content: "Q1 (4 marks, 5 min): List 4 things about a topic from a specific section. Q2 (8 marks, 10 min): How does the writer use language to describe/present X? Q3 (8 marks, 10 min): How does the writer structure the text? Q4 (20 marks, 20 min): To what extent do you agree with the statement? Q5 (40 marks, 45 min): Creative writing — either a description or narrative.",
                key_points: ["Q1: Simple retrieval — find 4 facts", "Q2: Language analysis — use word-level detail", "Q3: Structure — beginning, middle, end, shifts", "Q4: Evaluation — agree/disagree with evidence", "Q5: Creative writing — plan and craft carefully"]
            },
            {
                heading: "Language Analysis Technique (Q2 and Q4)",
                content: "Use the 'What-How-Why' method. WHAT does the writer say? HOW do they say it (technique + quotation)? WHY — what effect does this have on the reader? Example: The writer describes the forest as a 'cathedral of shadows' (metaphor). The noun 'cathedral' suggests grandeur and reverence, while 'shadows' creates an unsettling contrast, making the reader feel both awe and unease.",
                key_points: ["Always quote single words or short phrases", "Name the technique (metaphor, simile, personification etc.)", "Explain the EFFECT on the reader's feelings", "Use the connotations of individual words"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Analyse how the writer uses language: 'The sea clawed at the rocks, hungry and relentless, swallowing everything in its path.'",
                step_by_step: [
                    "Identify technique: Personification — the sea is given human/animal qualities ('clawed', 'hungry', 'swallowing')",
                    "Analyse word: 'Clawed' has connotations of an animal attacking its prey, suggesting the sea is violent and dangerous",
                    "Analyse word: 'Hungry' personifies the sea as insatiable — it will never be satisfied, creating a sense of threat",
                    "Effect: The cumulative effect of these violent verbs creates a sense of the sea as a powerful, unstoppable predatory force, making the reader feel fear and powerlessness"
                ],
                answer: "Detailed language analysis using What-How-Why, with word-level analysis and reader response"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "el1f1", question: "What is inference?", type: "mcq", options: ["Copying from the text", "Reading between the lines", "Summarising the text", "Finding facts"], correct_answer: "Reading between the lines", explanation: "Inference means understanding what is implied but not directly stated", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "el1h1", question: "Analyse how the writer uses language to create tension in the following extract (8 marks)", type: "essay", correct_answer: "At least 2 detailed language analysis paragraphs using What-How-Why with specific quotations and effects", explanation: "Must identify techniques, quote precisely, and explain effects on the reader", marks: 8, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "How does the writer use language", meaning: "Identify techniques, quote, and analyse effects" },
                { word: "To what extent do you agree", meaning: "Give a balanced response with evidence from the text" }
            ],
            exam_tips: ["Time management is crucial — stick to suggested times", "For Q5, plan for 5 minutes before writing", "Use varied sentence lengths for effect", "Short sentences = tension. Long sentences = description."],
            common_mistakes: ["Feature-spotting without analysis (just naming the technique)", "Quoting entire sentences instead of key words", "Running out of time on Q5"],
            mark_scheme_notes: ["Q5: Content & Organisation (24 marks) + Technical Accuracy (16 marks)", "SPaG matters in Q5!"],
            time_allocation: "Total paper: 1 hour 45 minutes"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Language Analysis Practice Papers", type: "worksheet", description: "Practice extracts with model answers" }
            ],
            further_reading: ["AQA English Language Revision Guide"],
            revision_checklist: ["I can identify and analyse language techniques", "I can discuss structural features", "I can write a creative piece with varied techniques", "I manage my time effectively across the paper"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "el1f1", model_answer: "Inference means reading between the lines — understanding what a writer implies without directly stating it.", mark_breakdown: ["1 mark for correct definition"], examiner_tip: "Inference is tested throughout the paper, not just in one question" }
            ],
            grade_boundaries: { grade_9: 86, grade_7: 68, grade_5: 50, grade_4: 40 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }
];
