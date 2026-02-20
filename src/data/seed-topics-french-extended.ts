import { Topic } from "@/types";

export const SEED_TOPICS_FRENCH_EXTENDED: Topic[] = [
  // ============================================================
  // FRENCH EXTENDED TOPICS
  // ============================================================

  {
    id: "aqa_french_culture_francophone_world",
    exam_board: "aqa",
    subject: "french",
    topic_title: "Francophone Culture & Global Communities",
    topic_number: "4",
    tier_level: "both",
    section_1_key_concepts: {
      overview:
        "Explore diverse French-speaking communities globally, cultural identity, and modern expressions of francophone culture including literature, film, and music.",
      key_terms: [
        {
          term: "Francophonie",
          definition:
            "Community of French-speaking nations and regions worldwide, bound by shared language and cultural heritage.",
          importance: "Central to understanding French influence globally and cultural diversity."
        },
        {
          term: "Cultural Pride",
          definition:
            "Strong connection to cultural identity maintained by francophone communities despite global influences.",
          importance: "Key motivation for cultural preservation and expression in arts."
        },
        {
          term: "Code-switching",
          definition:
            "Alternating between French and local languages in multilingual francophone regions.",
          importance: "Common phenomenon in many francophone communities showing language dynamics."
        },
        {
          term: "Colonial Legacy",
          definition:
            "Historical impact of French colonization on language and culture in former colonies.",
          importance: "Shapes current political, social and cultural relationships globally."
        }
      ],
      learning_objectives: [
        "Understand French-speaking communities beyond France",
        "Explore cultural identity in multicultural francophone contexts",
        "Discuss modern expressions of francophone culture",
        "Analyze relationship between language, identity and power",
        "Explore French cultural influence in arts and media globally"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Geography of Francophone World",
        content:
          "French is official language in 29 countries across Africa, Europe, Americas and Asia-Pacific. Belgium, Switzerland and Canada have significant French-speaking populations. African nations (Senegal, Côte d'Ivoire, Democratic Republic of Congo) represent growing majority of French speakers. Francophone communities maintain French language despite globalization pressures and English dominance.",
        key_points: [
          "French official in 29 countries worldwide",
          "Africa home to rapidly growing French-speaking population",
          "Multilingual countries use French alongside local languages",
          "Francophone organization (OIF) promotes cultural cooperation"
        ]
      },
      {
        heading: "Identity & Language",
        content:
          "For francophone communities, French represents identity, education access, and professional opportunity. Speaking French connects to European heritage and cultural prestige. However, some communities experience tension between French and indigenous languages. Younger generations navigate multilingualism and code-switch between French, local languages and English. Cultural organizations work to maintain French in digital age.",
        key_points: [
          "French identity linked to historical power and prestige",
          "Language choice reflects cultural and political allegiance",
          "Multilingual identity reflects complex colonial histories",
          "Concerns about French preservation against English expansion"
        ]
      },
      {
        heading: "Modern Francophone Culture",
        content:
          "Contemporary francophone culture expressed through diverse media: Algerian rai music and North African rap challenge stereotypes. Francophone literature from Cameroon, Senegal and Quebec offers distinct voices. French cinema remains influential globally. African fashion designers gain international recognition. Social media creates new spaces for francophone expression and networking across borders.",
        key_points: [
          "Music: rap, rai, reggae from francophone regions",
          "Literature: diverse voices from African and Caribbean authors",
          "Film: Quebec, Belgian and African cinema gaining recognition",
          "Fashion and design: emerging African and Caribbean talent"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Analyze role of French language in defining francophone identity across different regions.",
        step_by_step: [
          "Identify francophone regions: Sub-Saharan Africa, North Africa, Caribbean, Belgium, Switzerland, Canada, France",
          "Consider historical context: colonization, migration, trade relationships",
          "Evaluate how French functions: official language vs home language vs lingua franca",
          "Assess identity implications: prestige, opportunity, cultural preservation, power dynamics",
          "Compare experiences: Senegal (former French colony, French official) vs Haiti (former colony, French+Creole)",
          "Conclude on complexity: French both enables and colonizes, unifies and divides"
        ],
        answer:
          "French language serves multiple roles in francophone identity: historically symbol of colonization, now marker of education and opportunity. In Africa, French unites diverse ethnic nations but can marginalize indigenous languages. In multilingual countries (Belgium, Canada), French represents one identity among many, sometimes source of tension. For younger generations, French competes with English for global relevance. Paradoxically, French preservation efforts simultaneously celebrate diversity and reinforce French centrality."
      },
      {
        question: "How do contemporary francophone artists challenge stereotypes about French culture?",
        step_by_step: [
          "Define stereotypes: French = European, sophisticated, classical, white, developed nations",
          "Identify contemporary francophone artists: North African rappers, Cameroonian authors, African designers",
          "Analyze their work: themes, aesthetics, messages",
          "Consider impact: reach, recognition, representation",
          "Evaluate cultural significance: reclaiming narrative, global influence",
          "Connect to broader cultural movements and social change"
        ],
        answer:
          "Contemporary francophone artists challenge stereotypes through authentic expression of African, Caribbean and diaspora experiences. North African rap addresses social inequality and immigration in France. West African authors write in French while centering African perspectives and narratives. African fashion designers gain international platforms previously dominated by European brands. These artists reclaim francophone identity beyond European center, demonstrate cultural vitality in Global South, and influence global perceptions of French language and culture."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question: "Name three countries where French is the official language, outside of France.",
          type: "short_answer",
          correct_answer: "Any three of: Belgium, Switzerland, Canada, Senegal, Cameroon, Congo, Algeria, Morocco, Haiti, Rwanda, Côte d'Ivoire",
          explanation:
            "French is official in 29 countries. Africa has the most (14+). This tests basic geographic knowledge of francophone world.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq2",
          question: "What is meant by 'Francophonie'?",
          type: "short_answer",
          correct_answer:
            "The community of French-speaking countries and peoples worldwide; international organization promoting French language and culture.",
          explanation:
            "Francophonie refers both to the geographic/cultural group and the formal organization (OIF - Organisation Internationale de la Francophonie). Essential concept for understanding global French community.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq3",
          question: "Give two examples of modern francophone cultural expression (music, film, literature).",
          type: "short_answer",
          correct_answer:
            "Two of: North African rap, Algerian rai music, Senegalese literature (Mariama Bâ), Cameroonian film, Belgian film, Quebec cinema, Caribbean reggae, African fashion",
          explanation:
            "Tests knowledge of contemporary francophone culture beyond traditional French stereotypes. Shows cultural diversity within francophone world.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq4",
          question: "What challenges does French language face in the 21st century?",
          type: "short_answer",
          correct_answer:
            "English dominance in technology and business; youth preferring English for social media; digital content overwhelmingly English; economics pushes English learning",
          explanation:
            "Global context shows French no longer hegemonic language. Understanding contemporary linguistic challenges prepares students for cultural discussions.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq5",
          question: "Explain what 'code-switching' means in a multilingual francophone context.",
          type: "short_answer",
          correct_answer:
            "Mixing French with local languages within same conversation; switching between languages depending on context, audience or topic",
          explanation:
            "Code-switching shows real language practice in multilingual societies. Important for understanding how francophone identity is navigated daily.",
          marks: 3,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question:
            "Analyze the colonial legacy's impact on contemporary francophone identity. To what extent does French language represent opportunity vs colonization?",
          type: "essay",
          correct_answer:
            "High-level response would: acknowledge dual nature of French as both legacy of oppression and vehicle for education/opportunity; provide specific examples (Africa, Caribbean); discuss identity tensions; evaluate regional variations; consider power dynamics; reach nuanced conclusion about complexity.",
          explanation:
            "This is higher-tier thinking requiring analysis of power structures, historical context, and contemporary reality. Tests ability to handle contradiction and nuance.",
          marks: 6,
          difficulty: "higher"
        },
        {
          id: "hq2",
          question:
            "Compare identity construction in a multilingual country (Canada/Belgium) vs monolingual francophone nation (Senegal). How does language choice reflect power?",
          type: "essay",
          correct_answer:
            "Should discuss: Canada/Belgium - French as minority/co-official, identity negotiation, potential tension; Senegal - French as official post-colonial, identity assertion, relationship to indigenous languages; both contexts show language reflects historical power relations and contemporary political choices.",
          explanation:
            "Requires comparative analysis across geographic contexts and understanding of political dimensions of language choice.",
          marks: 7,
          difficulty: "higher"
        },
        {
          id: "hq3",
          question:
            "Evaluate role of social media in shaping modern francophone identity. How does digital space differ from traditional cultural institutions?",
          type: "essay",
          correct_answer:
            "Should note: social media democratizes cultural expression (anyone can share); allows real-time community building across borders; challenges language purists; creates new forms of linguistic creativity; competes with English dominance; enables youth voice; differs from institutions which are traditionally state/elite controlled.",
          explanation:
            "Tests understanding of contemporary media landscape and its role in identity formation. Shows cultural studies perspective on modern francophonie.",
          marks: 6,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        {
          word: "Analyze",
          meaning: "Break down francophone identity/culture into components and examine relationships; provide examples; evaluate significance"
        },
        { word: "Compare", meaning: "Show similarities and differences between francophone communities or their cultural expressions" },
        {
          word: "Evaluate",
          meaning: "Make judgments about extent of something (e.g., 'to what extent'); consider evidence for/against; reach conclusions"
        },
        { word: "Discuss", meaning: "Present multiple perspectives on francophone issues; consider different viewpoints; explore complexity" }
      ],
      exam_tips: [
        "Know specific examples of contemporary francophone artists and writers - don't speak in generalities",
        "Understand geographic spread of French - not just France and former colonies matter",
        "Be aware of linguistic complexity - code-switching, diglossia, language policy are real phenomena",
        "Consider power dynamics - language education and prestige are political issues",
        "Prepare to discuss both opportunity and oppression dimensions of French globally"
      ],
      common_mistakes: [
        "Treating 'French culture' as monolithic - francophone culture is diverse",
        "Ignoring African contributions - Africa is now majority of French speakers",
        "Viewing French as uniformly positive or negative - hold complexity",
        "Assuming all French speakers have same identity - varies dramatically",
        "Not knowing contemporary cultural examples - stick to recent examples"
      ],
      mark_scheme_notes: [
        "Markers reward specific, relevant examples - generic statements lose points",
        "Critical thinking valued - show you can evaluate complexity",
        "Accurate geographic and demographic knowledge matters",
        "Understanding power relationships (colonialism, economics) important for higher marks",
        "Sensitive, informed treatment of colonialism and post-colonial relationships"
      ],
      time_allocation: "Allocate time proportional to marks: 1 minute per mark approximately. For 12-mark essay, spend ~12 minutes planning and writing."
    },
    section_6_additional_resources: {
      resources: [
        {
          title: "OIF (Organisation Internationale de la Francophonie) Official Site",
          type: "article",
          url: "https://www.francophonie.org",
          description: "Official information on member states, cultural initiatives, and francophone cooperation programs"
        },
        {
          title: "African Film Database",
          type: "video",
          url: "https://africanfilmawards.com",
          description: "Showcase of contemporary African films, many in French, highlighting new filmmaking voices"
        },
        {
          title: "Senegal Modern Literature Study",
          type: "article",
          description: "Overview of Senegalese francophone literature and authors like Mariama Bâ, Cheikh Hamidou Kane"
        },
        {
          title: "North African Rap Documentary",
          type: "video",
          description: "Documentary on French-language rap from Algeria, Morocco, Tunisia - cultural resistance and social commentary"
        },
        {
          title: "Code-switching in Multilingual Communities",
          type: "article",
          description: "Linguistic analysis of how multilingual speakers navigate languages in daily life"
        }
      ],
      further_reading: [
        "Discuss francophone identity as negotiation between colonial legacy and contemporary agency",
        "Research specific regions: francophone Africa (Senegal, Cameroon), Caribbean, Belgium, Canada, Switzerland",
        "Explore how cultural organizations work to preserve and promote French language globally",
        "Investigate French dominance in international organizations and implications for global communication"
      ],
      revision_checklist: [
        "Can explain what Francophonie is and name major francophone regions/countries?",
        "Do you know contemporary examples of francophone cultural expression across media?",
        "Can you discuss identity construction in multilingual vs. monolingual francophone contexts?",
        "Do you understand colonial legacy's complex impact on francophone identity?",
        "Can you analyze language choice as expression of identity and power?",
        "Do you know how technology/social media shape modern francophonie?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer:
            "Sample answer: Belgium (official), Senegal (official), Cameroon (official). Other correct answers include Switzerland, Canada, Congo, Morocco, Algeria, Haiti, Rwanda, Uganda, etc. Any three countries where French is official language demonstrates geographic knowledge.",
          mark_breakdown: [
            "One correct country: 1 mark",
            "Two correct countries: 2 marks",
            "Three correct countries: 3 marks"
          ],
          examiner_tip:
            "Candidates must demonstrate specific geographic knowledge. Vague references to 'African countries' insufficient. Accept any country from OIF member list."
        },
        {
          question_id: "pq2",
          model_answer:
            "Francophonie refers to the international community of French-speaking countries and peoples worldwide, united by shared French language and cultural heritage. It also refers to the formal international organization (OIF) that promotes French language, culture and cooperation."
        },
        {
          question_id: "hq1",
          model_answer:
            "French language has dual character in francophone identity: historically symbol of colonization and cultural oppression, now represents education opportunity and professional advancement. In sub-Saharan Africa, French was imposed through colonization but now provides access to international opportunity. For individuals in countries like Senegal or Cameroon, French is essential for education and global mobility. However, learning French often meant devaluing indigenous languages and cultures. Contemporary experience: French remains valuable for opportunity but competes with English. Identity tensions exist between French preservation (cultural pride) and indigenous language rights. Regional variation important: Quebec navigates French as minority language, Senegal as post-colonial official language, Belgium as one of multiple official languages. Conclusion: French represents both opportunity and colonization - its meaning depends on context and individual perspective."
        }
      ],
      grade_boundaries: { grade_9: 95, grade_7: 85, grade_5: 70, grade_4: 60 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  {
    id: "aqa_french_tech_digital_society",
    exam_board: "aqa",
    subject: "french",
    topic_title: "Technology & Digital Society in French-Speaking World",
    topic_number: "5",
    tier_level: "both",
    section_1_key_concepts: {
      overview:
        "Explore role of technology in modern French and francophone societies, digital communication, online identity, and relationship between French language and digital innovation. Examine how digital space shapes contemporary culture and society.",
      key_terms: [
        {
          term: "Digitalisation",
          definition: "Process of integrating digital technology into all aspects of society and daily life.",
          importance: "Transforms communication, work, education and cultural expression globally."
        },
        {
          term: "Réseaux sociaux",
          definition: "Social networks and social media platforms where users share content and communicate",
          importance: "Central to modern communication and identity construction especially for youth."
        },
        {
          term: "Cybersécurité",
          definition:
            "Protection of computer systems and data from digital attacks and unauthorized access",
          importance: "Growing concern as digital life expands; raises issues of privacy and security."
        },
        {
          term: "Identité numérique",
          definition: "Digital identity and reputation constructed through online presence and interactions",
          importance: "Increasingly important aspect of identity parallel to physical identity."
        }
      ],
      learning_objectives: [
        "Understand technological changes in francophone societies",
        "Discuss digital communication and social media impacts",
        "Explore online identity and digital citizenship",
        "Analyze language evolution in digital space",
        "Evaluate technology benefits and challenges",
        "Discuss digital divide and accessibility issues"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Digital Transformation in France and Francophone Communities",
        content:
          "France ranks among Europe's leaders in internet usage (90%+) and smartphone adoption. African francophone nations experiencing rapid digital growth - mobile internet primary access method. Digital services transforming government (administration en ligne), education (distance learning) and commerce (e-commerce growth). However, digital divide exists - rural areas, older populations, lower-income communities have less access. France implementing digital skills programs across education system. Concerns about cybersecurity, data privacy, and digital surveillance growing.",
        key_points: [
          "High internet penetration in developed francophone countries",
          "Mobile internet dominant in developing francophone nations",
          "Digital services revolutionizing government and education",
          "Digital divide exists between urban/rural, young/old, rich/poor",
          "Cybersecurity and privacy concerns mounting"
        ]
      },
      {
        heading: "Social Media and Contemporary Communication",
        content:
          "French youth spend average 4+ hours daily on social media. Platforms (Instagram, TikTok, Snapchat) dominant for communication, entertainment, information. Language evolution: text speak, emojis, abbreviations create new forms of digital communication. Concerns about screen time, mental health impacts, especially on adolescents. Social media used for political mobilization, activism (climate, social justice). Misinformation spreads rapidly online. Politicians and institutions adapting to digital communication priorities.",
        key_points: [
          "Social media central to youth communication and identity",
          "Digital language creates new communication forms",
          "Mental health concerns linked to heavy social media use",
          "Activism and political movements leveraging social media",
          "Misinformation and digital literacy challenges"
        ]
      },
      {
        heading: "Online Identity and Digital Citizenship",
        content:
          "Young people construct identities across multiple platforms, often with different personas. Digital footprint permanent - online actions have real consequences. Cyberbullying and harassment issues especially for young people. Questions of digital responsibility and online rights/duties emerge. States implementing digital citizenship education. Privacy concerns mounting - data collection, surveillance, corporate tracking. Generational digital literacy divides create understanding gaps between tech-native youth and adults.",
        key_points: [
          "Multiple online identities and platforms complicate identity formation",
          "Digital permanence affects real-world consequences",
          "Cyberbullying and harassment targeting vulnerable populations",
          "Privacy and surveillance tensions increasing",
          "Digital literacy and responsibility education essential"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question:
          "Analyze relationship between technology adoption and social inequality in francophone communities.",
        step_by_step: [
          "Define digital divide: unequal access to technology and internet across populations",
          "Identify dividing factors: income, geography (urban/rural), age, education, disability",
          "Consider francophone context: variation between developed (France, Belgium, Canada) and developing nations (African countries)",
          "Examine consequences: economic opportunity, education access, social participation affected",
          "Evaluate efforts to bridge divide: government programs, mobile access, affordable data",
          "Conclude on ongoing inequality despite progress"
        ],
        answer:
          "Digital divide reflects and reinforces existing social inequalities in francophone world. In developed countries (France, Belgium, Canada), most citizens have internet access but less affluent experience barriers. In developing francophone countries (Sub-Saharan Africa), access heavily concentrated in urban areas and among educated, wealthy populations. Rural communities and poor struggle for connectivity. Age divides exist - older populations less digitally literate. These inequalities affect employment opportunities (jobs increasingly require digital skills), education access (distance learning benefits tech-connected students), and political participation (digital civic engagement requires access). Efforts to bridge divide through mobile internet expansion, affordable data plans, and digital literacy programs showing some progress but structural inequalities persist."
      },
      {
        question:
          "Discuss how young French speakers' use of social media both enables and challenges traditional French language preservation.",
        step_by_step: [
          "Note French language traditionally regulated by Académie française to maintain purity",
          "Observe youth digital language: text speak, English borrowings (le weekend, checker), emojis replacing words",
          "Consider enabling aspects: social media gives voice to youth, allows creative expression, connects across borders",
          "Point out challenges: language mixing, rapid evolution, difficulty for language authorities to keep pace",
          "Balance: youth creating new cultural forms but potentially destabilizing traditional language",
          "Conclude on evolution being inevitable in digital age"
        ],
        answer:
          "Social media represents both opportunity and challenge for French language. Youth use platforms to express creativity and build community, enabling cultural production beyond traditional institutions. However, digital language mixing (with English, regional languages, emojis) challenges traditional French language purity that authorities like Académie française have protected. Young francophones using English words ('checker' instead of 'vérifier', 'le weekend'), creating abbreviations, and communicating with minimal punctuation/capitalization. While this troubles traditionalists, it demonstrates language's living, evolving nature. Digital space actually enables French language preservation in some ways - francophone communities worldwide can communicate instantly, sharing culture across borders. However, English dominance in tech and business creates pressure on French. Youth navigating digital space likely adopt more English than previous generations, potentially weakening French in global context."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question: "What is meant by the 'digital divide'?",
          type: "short_answer",
          correct_answer:
            "The gap between those with easy access to technology/internet and those without; reflects inequality in income, geographic location, age, education",
          explanation:
            "Key concept for understanding technology's role in perpetuating or reducing social inequality.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq2",
          question:
            "Name three social media platforms commonly used by French youth. What types of content do they share?",
          type: "short_answer",
          correct_answer:
            "Instagram (photos, lifestyle), TikTok (short videos), Snapchat (messages); also acceptable: YouTube, Twitter, BeReal. Content includes daily life, entertainment, social causes.",
          explanation:
            "Tests knowledge of contemporary social media landscape and how young people use platforms for communication.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq3",
          question: "Give two examples of how digital language differs from traditional written French.",
          type: "short_answer",
          correct_answer:
            "Text speak (u for tu, c for c'est), emojis as communication tools, English borrowings (checker, weekend), lowercase writing, abbreviations (lol, omg)",
          explanation:
            "Shows understanding of language evolution in digital contexts and challenges to traditional language norms.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq4",
          question: "What is cyberbullying? Give one example relevant to young French people.",
          type: "short_answer",
          correct_answer:
            "Harassment or bullying occurring online through social media, messaging, etc. Example: spreading rumors on Instagram, targeted negative comments on TikTok, exclusion from online groups",
          explanation:
            "Tests understanding of contemporary social challenges related to technology.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq5",
          question:
            "Explain one privacy concern related to social media and personal data.",
          type: "short_answer",
          correct_answer:
            "Companies collect personal data for marketing; governments can access data; hackers steal information; permanent digital footprint creates long-term vulnerability",
          explanation:
            "Important contemporary issue affecting all social media users.",
          marks: 3,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question:
            "Evaluate the extent to which technology has improved or worsened social inequality in francophone society.",
          type: "essay",
          correct_answer:
            "Strong response would: acknowledge both improvements and worsening; provide specific examples; discuss economic, educational, social dimensions; consider urban/rural, young/old, wealthy/poor divides; recognize technology's potential while noting it reflects existing inequalities; reach nuanced conclusion.",
          explanation:
            "Requires balanced analysis of technology's impact beyond simple positive/negative framing.",
          marks: 6,
          difficulty: "higher"
        },
        {
          id: "hq2",
          question:
            "Discuss tensions between digital innovation and traditional French language preservation represented by Académie française.",
          type: "essay",
          correct_answer:
            "Should address: traditional French emphasis on purity and regulation; digital space enabling rapid language evolution; youth creating new linguistic forms; English influence through technology; irrelevance of traditional authorities in digital contexts; potential language change and eventual adaptation; balance between preservation and vitality.",
          explanation:
            "Tests understanding of cultural/linguistic conservatism vs. inevitable change in digital age.",
          marks: 7,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Evaluate", meaning: "Judge the extent/success of; provide evidence for/against; reach balanced conclusion" },
        {
          word: "Discuss",
          meaning: "Present multiple perspectives; explore tensions/contradictions; show nuanced understanding"
        },
        {
          word: "Analyze",
          meaning: "Break down problems into components; examine relationships; provide specific examples"
        }
      ],
      exam_tips: [
        "Use current examples - digital landscape changes rapidly, so demonstrate up-to-date knowledge",
        "Consider real experiences - reference French youth you might know or research about",
        "Acknowledge paradoxes - technology both connects and isolates, enables and restricts",
        "Think about generational differences - your perspective vastly different from 60-year-old's",
        "Balance critical and positive views - don't just criticize technology or promote it uncritically"
      ],
      common_mistakes: [
        "Treating all young people as tech-native without recognizing digital divide",
        "Ignoring regional differences between developed and developing francophone countries",
        "Viewing technology as purely positive or purely negative",
        "Not recognizing that digital language evolution is normal and inevitable",
        "Exaggerating severity of social media harms without acknowledging positive aspects"
      ],
      mark_scheme_notes: [
        "Rewards specific, contemporary examples over generalizations",
        "Values recognition of complexity and contradiction",
        "Appreciates understanding of both opportunity and challenges",
        "Looks for critical engagement with technology rather than naive embrace or rejection"
      ],
      time_allocation: "Budget time proportional to marks. Reading time useful for processing complex topics."
    },
    section_6_additional_resources: {
      resources: [
        {
          title: "French Ministry of Digital Affairs Reports",
          type: "article",
          url: "https://www.numerique.gouv.fr",
          description: "Official gov information on digital transformation, technology policy in France"
        },
        {
          title: "Social Media Impact Studies",
          type: "article",
          description: "Research on impacts of social media on adolescent mental health and development"
        },
        {
          title: "Digital Literacy Programs in Africa",
          type: "article",
          description: "Initiatives to bridge digital divide in sub-Saharan African francophone countries"
        },
        {
          title: "Language Evolution Documentary",
          type: "video",
          description: "How digital communication is changing how young French people communicate and write"
        }
      ],
      further_reading: [
        "Investigate national digital strategies in different francophone countries",
        "Research cybersecurity concerns and data privacy laws (GDPR, etc.)",
        "Explore role of women in tech in French and francophone societies",
        "Analyze political mobilization through social media in francophone contexts"
      ],
      revision_checklist: [
        "Do you understand what digital divide is and its causes and consequences?",
        "Can you discuss how social media shapes youth communication and identity?",
        "Do you know specific examples of digital language and contemporary platforms?",
        "Can you analyze relationship between technology and social inequality?",
        "Can you discuss tensions between digital innovation and language preservation?",
        "Do you understand cybersecurity, privacy and digital citizenship concerns?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer:
            "The digital divide refers to the gap between people who have easy access to the internet and technology versus those who lack such access. This divide reflects existing inequalities in wealth, geography (urban vs rural), age, education level, and disability status. Those on the wrong side of the divide face disadvantages in employment, education, and social participation."
        },
        {
          question_id: "hq1",
          model_answer:
            "Technology has both improved and worsened social inequality in francophone communities. Improvements: those with access benefit from educational resources, job opportunities, and connectivity. Worsening: those without access fall further behind economically and socially, digital divide reinforces existing inequalities. In France, most citizens have access but poorer regions lag; in African francophone nations, urban wealthy have access while rural poor remain disconnected. Net effect: technology amplifies existing inequalities despite providing opportunities for advancement."
        }
      ],
      grade_boundaries: { grade_9: 95, grade_7: 85, grade_5: 70, grade_4: 60 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  {
    id: "aqa_french_social_issues_contemporary",
    exam_board: "aqa",
    subject: "french",
    topic_title: "Contemporary Social Issues in French Society",
    topic_number: "6",
    tier_level: "both",
    section_1_key_concepts: {
      overview:
        "Examine pressing social issues facing French and francophone societies: immigration and integration, environmental challenges, economic inequality, healthcare access, education equity. Explore how these issues are debated and addressed contemporaneously.",
      key_terms: [
        {
          term: "Intégration",
          definition: "Process of immigrants incorporating into host society while maintaining some cultural identity",
          importance: "Central to French political debates and policy discussions about diversity."
        },
        {
          term: "Changement climatique",
          definition: "Long-term shifts in global climate patterns, primarily caused by human greenhouse gas emissions",
          importance: "Growing concern affecting environmental policy, economics, social justice globally."
        },
        {
          term: "Égalité des chances",
          definition: "Equal opportunity regardless of background, wealth, gender, or other characteristics",
          importance: "Core French republican value; goal against which reality often falls short."
        },
        {
          term: "Manifestations",
          definition: "Public demonstrations and protests expressing disagreement or demanding change",
          importance: "French tradition of protest as democratic expression of grievances."
        }
      ],
      learning_objectives: [
        "Understand key social issues facing French and francophone societies",
        "Analyze complex causes and effects of social problems",
        "Evaluate proposed solutions and policy responses",
        "Understand diverse perspectives and viewpoints on issues",
        "Recognize connections between social issues",
        "Develop informed opinions on contemporary problems"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Immigration and Integration in France",
        content:
          "France received significant immigration from former colonies (Algeria, Maghreb, Sub-Saharan Africa), Eastern Europe, and Asia. Immigration policies debated intensely - some emphasize cultural integration (French values, language), others promote multiculturalism (maintaining cultural identity). Integration challenges: residential segregation in banlieues (suburbs), employment discrimination, educational disparities. Muslim immigration especially politically contentious due to secularism-religion tensions, Islamophobia, and debates about laïcité (separation of state and religion). Both welcome and xenophobic responses evident across society. Successful integration stories alongside discrimination experiences.",
        key_points: [
          "France received significant immigration post-WWII from colonies and beyond",
          "Integration model emphasizes French values and language adoption",
          "Banlieue segregation reflects residential inequality and social marginalization",
          "Employment and education discrimination affects immigrant communities",
          "Muslim immigration particularly politically sensitive in French context",
          "Political spectrum ranges from immigration restriction to multicultural welcome"
        ]
      },
      {
        heading: "Environmental Challenges and Climate Action",
        content:
          "France faces climate change impacts: rising temperatures, changing rainfall patterns, increased extreme weather events. Economic costs rising from environmental damage. Green movement gaining political influence - Green Party (EELV) increasingly prominent. Carbon emission reduction targets set but implementation challenging. Tensions between environmental protection and economic interests. Younger generation especially concerned about climate crisis. Yellow Vest (Gilets Jaunes) protests partly sparked by fuel tax (environmental measure perceived as unfairly burdening poor). France promoting renewable energy but coal phase-out contested by mining regions.",
        key_points: [
          "Climate change poses real threats to French environment and economy",
          "Carbon reduction targets set but difficult to meet",
          "Tensions between environmental protection and economic interests",
          "Generational divide on climate urgency and action",
          "Policy proposals (taxes, restrictions) meet resistance from affected industries/people",
          "Debate over just transition that protects workers while addressing climate"
        ]
      },
      {
        heading: "Economic Inequality and Social Services",
        content:
          "France has welfare state providing healthcare, education, social support - but system strains evident. Economic inequality persistent despite redistribution efforts. Youth unemployment higher than general population, especially in banlieues and among minorities. Precarious employment (temporary contracts, gig work) increasing while stable jobs declining. Healthcare system faces challenges: doctor shortages in rural areas, long wait times, medication access issues. Education inequality persists - students from privileged backgrounds outperform others. Debates about welfare state sustainability as aging population increases costs.",
        key_points: [
          "Welfare state theoretically provides comprehensive social support",
          "In practice, inequality persists and service access varies",
          "Youth unemployment particularly concerning, regional disparities extreme",
          "Precarious employment replacing stable job contracts",
          "Healthcare system strained despite universal coverage",
          "Education serves as both equalizer and reproducer of inequality"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question:
          "Analyze relationship between immigration policy and social integration outcomes in contemporary France.",
        step_by_step: [
          "Define integration: incorporation into society while maintaining identity",
          "Identify French integration model: emphasis on French values, language, assimilation vs multiculturalism",
          "Consider policy levers: language requirements, religious dress restrictions (burqa ban), quotas",
          "Examine outcomes: residential segregation in banlieues suggesting integration failing for some",
          "Recognize resistance: some immigrant communities resist assimilationist pressures as cultural erasure",
          "Note political dimensions: far-right parties oppose immigration, left defends immigrants' rights",
          "Conclude: policy approach alone insufficient - structural barriers (discrimination, poverty) limit integration"
        ],
        answer:
          "French immigration policy emphasizes integration into French society and values - legally required French language learning, republican values over religious/cultural identity. However, integration outcomes mixed and often unsuccessful for certain communities. Structural barriers - employment discrimination, residential segregation, educational disparities - prevent full participation despite policy intentions. Banlieue concentration of immigrants and minorities reflects systemic processes, not just migrant choices. Top-down integration demands can feel like cultural erasure to immigrants maintaining transnational identities. Simultaneously, French society shows both integration successes and persistent hostility. Policy must address structural inequality alongside cultural integration to achieve genuine social cohesion."
      },
      {
        question:
          "Discuss how environmental concerns and economic interests conflict in French contemporary politics.",
        step_by_step: [
          "Identify environmental concerns: climate change, pollution, resource depletion, biodiversity loss",
          "Identify economic concerns: jobs, industrial competitiveness, growth, regional development",
          "Note specific conflicts: coal phase-out (environmental) vs mining region jobs (economic)",
          "Reference Yellow Vests: environmental tax (fuel) perceived as unfairly impacting workers",
          "Recognize generational divide: youth prioritize climate, older workers fear job losses",
          "Discuss political responses: Green Party pushing environmental action, conservative defending business",
          "Evaluate solutions: just transition supporting workers while addressing climate?"
        ],
        answer:
          "France faces tension between environmental protection and economic interests. Coal phase-out necessary for climate goals but threatens mining region jobs and community stability. Fuel taxes raise revenue for green initiatives but burden poor and rural residents spending larger portion of income on transportation. Yellow Vest protests articulated this injustice: environmental solutions designed by comfortable urban elites imposed on economically vulnerable populations. Generational divide evident: young people prioritize climate crisis existential threat; older workers fear losing livelihoods. Political parties divide: Green Party pushes strong environmental measures; conservative parties defend business interests and worker stability. Genuine resolution requires 'just transition' - environmental action coupled with economic support for affected workers/regions. However, such comprehensive approaches politically difficult as it requires upfront investment and sacrifice."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question: "What are banlieues? Why are they mentioned in discussions of immigration in France?",
          type: "short_answer",
          correct_answer:
            "Banlieues are suburbs of French cities characterized by high concentrations of immigrants and minorities, social deprivation, unemployment. Mentioned because they represent segregation and integration challenges.",
          explanation:
            "Understanding geographic dimension of integration debates important for contextualizing social issues.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq2",
          question:
            "Name two environmental concerns facing France. How might addressing these concerns affect the economy?",
          type: "short_answer",
          correct_answer:
            "Climate change, pollution, resource depletion. Addressing requires investment, potentially job losses in fossil fuel industries but job creation in renewables. Economic transition fraught.",
          explanation:
            "Tests understanding of environmental-economic tradeoffs and complexity of policy.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq3",
          question: "Explain what is meant by 'laïcité' and why it's relevant to immigration debates in France.",
          type: "short_answer",
          correct_answer:
            "Laïcité is French principle of secular state - separation of religious and state authority. Relevant to immigration because many French people view it as core French value that immigrants should accept, but some see it as hostile to religious minorities (especially Muslims).",
          explanation:
            "Central to French political culture and understanding of integration debates.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq4",
          question: "What was the Yellow Vest (Gilets Jaunes) movement? What were their concerns?",
          type: "short_answer",
          correct_answer:
            "Mass protest movement beginning 2018 against government policies. Sparked by fuel tax but reflected broader economic concerns - cost of living, inequality, rural/regional neglect, environmental policies seen as burdening ordinary people while benefiting elites.",
          explanation:
            "Major contemporary event showing intersection of economic and environmental concerns.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq5",
          question:
            "Give two examples of how economic inequality manifests in French society.",
          type: "short_answer",
          correct_answer:
            "Youth unemployment higher than general population; residential segregation with poor concentrated in banlieues; educational disparities favoring wealthy backgrounds; precarious employment vs stable jobs; healthcare access varies with location; regional economic disparities",
          explanation:
            "Tests knowledge of how inequality appears across different social dimensions.",
          marks: 3,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question:
            "Evaluate the extent to which France's integration model successfully incorporates immigrants into society. Consider evidence for and against.",
          type: "essay",
          correct_answer:
            "Strong response would: acknowledge theoretical success (legal framework for integration) but note practical failures (segregation, discrimination); provide specific examples of both successful and unsuccessful integration; analyze structural barriers beyond policy; consider different immigrant communities' experiences; reach balanced conclusion recognizing complexity.",
          explanation:
            "Requires evidence-based evaluation considering multiple dimensions and complicated reality.",
          marks: 6,
          difficulty: "higher"
        },
        {
          id: "hq2",
          question:
            "Analyze the Yellow Vest protests as an example of conflict between environmental and economic interests. What does this conflict reveal about contemporary French society?",
          type: "essay",
          correct_answer:
            "Should discuss: environmental policies can harm economically vulnerable; political elites don't adequately address workers' concerns; regional/urban divide in priorities; class dimensions of environmental action; generational differences; tensions between national climate goals and local economic stability. Reveals society divided, environmental policy divorced from social justice.",
          explanation:
            "Encourages critical analysis of how different policy goals conflict and whose interests are prioritized.",
          marks: 7,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        {
          word: "Analyze",
          meaning: "Break down issue into causes/effects; examine relationships between factors; provide evidence"
        },
        {
          word: "Evaluate",
          meaning: "Judge effectiveness/success; weigh evidence for and against; reach reasoned conclusion"
        },
        {
          word: "Discuss",
          meaning: "Present multiple perspectives; explore complexities and contradictions; show nuanced understanding"
        }
      ],
      exam_tips: [
        "Use recent examples - these issues actively debated now, so demonstrate current knowledge",
        "Avoid stereotypes - don't generalize about immigrants, rural people, or environmental advocates",
        "Recognize intersections - issues interconnect (poverty affects environmental exposure, immigration affects integration opportunity)",
        "Acknowledge complexity - rarely simple solutions to complex problems",
        "Show awareness of different viewpoints - don't assume questions have obvious 'correct' answer"
      ],
      common_mistakes: [
        "Taking simplistic positions instead of acknowledging legitimate multiple perspectives",
        "Using dated examples - political contexts and policies constantly evolving",
        "Ignoring structural causes of social problems - focusing only on individual factors",
        "Not recognizing how different groups are differently affected by same policies",
        "Presenting stereotypical views without evidence"
      ],
      mark_scheme_notes: [
        "Rewards evidence-based analysis over opinion-stating",
        "Values recognition of complexity and multiple perspectives",
        "Looks for understanding of structural dimensions, not just individual choices",
        "Appreciates awareness of how issues interconnect"
      ],
      time_allocation: "Take time to plan responses - complex issues benefit from structured thinking before writing."
    },
    section_6_additional_resources: {
      resources: [
        {
          title: "French news outlets",
          type: "article",
          url: "https://www.lemonde.fr, https://www.figaro.fr",
          description: "Major French newspapers covering contemporary political/social issues daily"
        },
        {
          title: "Documentary: 'La Haine' by Mathieu Kassovitz",
          type: "video",
          description: "Film depicting banlieue life, discrimination, tension between communities - classic analysis of French urban issues"
        },
        {
          title: "Yellow Vest Research",
          type: "article",
          description:
            "Academic and journalistic analysis of Yellow Vest movement, its causes, demands, and implications"
        },
        {
          title: "Climate Policy in France",
          type: "article",
          url: "https://www.ecologie.gouv.fr",
          description: "French Ministry of Ecology site detailing environmental policies, targets, and initiatives"
        }
      ],
      further_reading: [
        "Research specific immigration policies and their effects (residency laws, quota systems, religious dress restrictions)",
        "Investigate regional disparities in France - how do north/south, Paris/provinces differ?",
        "Explore generational differences in French political views and social priorities",
        "Analyze media representation of immigrants and minorities - stereotypes vs reality",
        "Research women's experiences in French society - economic participation, education, political representation"
      ],
      revision_checklist: [
        "Can you explain France's integration model and its theoretical goals?",
        "Do you understand how structural barriers limit integration success?",
        "Can you identify major environmental concerns and climate policy debates?",
        "Can you analyze conflicts between environmental and economic interests?",
        "Do you understand regional and generational differences in priorities?",
        "Can you discuss healthcare, education, and economic inequality issues?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer:
            "Banlieues are suburban areas ringing major French cities characterized by high concentrations of immigrant and minority populations, high unemployment, lower incomes and educational attainment. They're mentioned in immigration discussions because they represent residential segregation - evidence that integration has not successfully incorporated immigrants into mainstream French society. The segregation reflects both structural barriers (employment discrimination, housing costs) and choice (maintaining ethnic communities, family networks)."
        },
        {
          question_id: "hq1",
          model_answer:
            "France's integration model - emphasizing French language, republican values, secular society - provides legal framework for incorporating immigrants but faces practical obstacles limiting success. Signs of success: second and third generation immigrants increasingly educated, employed, and socially mobile; many immigrants adopt French identity while maintaining cultural practices. Signs of failure: residential segregation in banlieues; unemployment disproportionately affects immigrant communities despite education; discrimination persists in hiring and housing; some communities feel pressured to erase cultural identity. Structural barriers - employment discrimination, segregation, wealth inequality - exist beyond integration policy. Different communities experience integration differently: some groups primarily by race/ethnicity excluded despite French citizenship; others integrate relatively easily. Conclusion: integration policy alone insufficient; structural inequality and discrimination must be addressed for genuine social cohesion."
        }
      ],
      grade_boundaries: { grade_9: 95, grade_7: 85, grade_5: 70, grade_4: 60 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
