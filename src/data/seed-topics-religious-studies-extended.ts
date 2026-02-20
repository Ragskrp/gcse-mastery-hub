import { Topic } from "@/types";

export const SEED_TOPICS_RELIGIOUS_STUDIES_EXTENDED: Topic[] = [
  {
    id: "aqa_religious_studies_applied_ethics",
    exam_board: "aqa",
    subject: "religious_studies",
    topic_title: "Applied Ethics: Technology, Environment & Bioethics",
    topic_number: "5",
    tier_level: "both",
    section_1_key_concepts: {
      overview:
        "Explore contemporary ethical issues using religious and philosophical frameworks: artificial intelligence and machine learning ethics, environmental stewardship, biomedical ethics (genetic modification, euthanasia), digital privacy. Analyze how different faith traditions address modern dilemmas.",
      key_terms: [
        {
          term: "Bioethics",
          definition:
            "Ethical principles applied to biological and medical research, including genetic modification, organ transplantation, end-of-life care",
          importance: "Rapidly evolving field where religious teachings connect to cutting-edge scientific developments."
        },
        {
          term: "Environmental Stewardship",
          definition:
            "Religious and ethical responsibility to care for creation/environment; concept of humans as caretakers rather than exploiters",
          importance: "Central to environmental ethics across faith traditions; addresses climate change and resource depletion."
        },
        {
          term: "Artificial Intelligence Ethics",
          definition:
            "Moral questions raised by AI development: algorithmic bias, autonomous weapons, data privacy, job displacement, philosophical questions about consciousness",
          importance: "New frontier where religious traditions grapple with novel ethical challenges."
        },
        {
          term: "Virtue Ethics",
          definition:
            "Ethical framework emphasizing personal character and virtues (compassion, honesty, responsibility) rather than rules or consequences",
          importance: "Dominant approach in religious ethics traditions; contrasts with secular utilitarianism and deontology."
        }
      ],
      learning_objectives: [
        "Apply religious ethical frameworks to contemporary issues",
        "Understand different faith approaches to bioethical questions",
        "Analyze environmental ethics from religious perspectives",
        "Evaluate AI and technology ethics through spiritual lens",
        "Discuss tensions between religious values and scientific progress",
        "Develop informed positions on modern ethical dilemmas"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Environmental Ethics & Religious Stewardship",
        content:
          "Abrahamic traditions (Judaism, Christianity, Islam) emphasize creation stewardship responsibility. Dominion over nature understood not as exploitation but as care. Buddhism and Hinduism emphasize interconnectedness of all life, non-violence (ahimsa), cycle of reincarnation creating moral responsibility across species. Indigenous spiritualities center Earth as sacred, living entity deserving respect. Climate change raises ethical urgency - overconsumption, carbon emissions violate stewardship principles across faiths. Rising movement of eco-theology reframes environmental action as spiritual duty. Economic systems based on endless growth and excess consumption questioned by religious ethics emphasizing sustainability and sufficiency. Religious communities increasingly adopt environmental practices: sustainable agriculture, renewable energy,conservation.",
        key_points: [
          "Stewardship concept: humans caretakers of creation, not exploiters",
          "Across faiths: interconnectedness, respect for life, harmony with nature",
          "Climate change represents stewardship failure across traditions",
          "Eco-theology as spiritual response to environmental crisis",
          "Tension between human material needs and planetary limits",
          "Religious practices increasingly align with environmental values"
        ]
      },
      {
        heading: "Bioethics: Genetic Modification, Euthanasia, Organ Transplantation",
        content:
          "Genetic modification (CRISPR, gene editing) raises questions: Is altering God's creation acceptable? Where is line between therapeutic intervention and playing God? Christian perspectives vary - Catholic teaching generally opposes modification of human genome as violating natural law; Protestant views range from caution to cautious approval when addressing disease. Jewish ethics emphasize saving life (pikuach nefesh) potentially supporting therapeutic applications. Islamic tradition cautiously open to medical interventions if intentions pure and benefits outweigh harms. Euthanasia similarly contested: sanctity of life doctrine opposes mercy killing; Buddhist and Hindu concepts of compassion sometimes support relieving suffering. Organ transplantation now widely accepted across faiths as saving lives outweighs bodily integrity. Tensions remain around commodification of body parts, consent requirements, equity in access.",
        key_points: [
          "Genetic modification: tension between science and religious 'playing God' concerns",
          "Euthanasia: sanctity of life vs compassion and suffering relief",
          "Organ transplantation: widely accepted across traditions as life-saving",
          "Justice concerns: unequal access to medical interventions across wealth",
          "Different faiths reach different conclusions on same issues",
          "Emerging bioethical questions as technology advances faster than ethical frameworks"
        ]
      },
      {
        heading: "Artificial Intelligence, Algorithms & Digital Ethics",
        content:
          "AI and algorithms raise novel ethical questions: algorithmic bias affecting criminal justice, loans, hiring decisions; autonomous weapons potentially removing human moral responsibility; data privacy and corporate surveillance; job displacement and economic justice; philosophical questions about consciousness and personhood. Religious perspectives address: Who bears responsibility for algorithmic bias - programmers, companies, government? Does removing human decision-making from warfare violate moral responsibility principles? Mining data and privacy intrusion seen as violating human dignity in many traditions. Rapid technological change creates 'ethics lag' - technology outpaces moral reflection. Tech companies operate with minimal religious or ethical oversight. Intersectional concerns: AI often reflects biases of designers; impacts marginalized communities disproportionately. Religious communities advocating for ethical AI development, corporate accountability, equitable access, protection of human dignity.",
        key_points: [
          "Algorithmic bias reflects and amplifies human prejudices and injustices",
          "Autonomous weapons raise moral responsibility questions",
          "Data mining and surveillance violate privacy and human dignity",
          "Job displacement has economic justice implications",
          "Philosophical questions about personhood and consciousness",
          "Lack of ethical oversight in tech industry development"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question:
          "Analyze how different religious traditions approach genetic modification of humans to prevent serious disease.",
        step_by_step: [
          "Define genetic modification: using CRISPR or other techniques to alter human DNA",
          "Distinguish therapeutic (preventing disease) from enhancement (selecting traits)",
          "Catholic perspective: natural law emphasizes God's design, generally opposed",
          "Protestant perspectives: varied - some support therapeutic interventions, others cautious",
          "Jewish perspective: pikuach nefesh (saving life) principle may support therapeutic use",
          "Islamic perspective: cautious approval if removing illness and intentions pure",
          "Shared concerns: justice (who gets access?), commodification of life",
          "Analyze tensions between disease prevention and artificial enhancement"
        ],
        answer:
          "Christian traditions emphasize sanctity of life and God's creative authority: Catholic teaching opposes genetic modification even for therapy as violating natural law; Protestant denominations vary with some accepting therapeutic use while opposing enhancement. Jewish tradition's pikuach nefesh (saving life takes precedence) principle arguably supports therapeutic modification to prevent serious disease. Islamic ethics similarly allow medical interventions if benefits outweigh harms and intentions pure. Shared concerns across traditions: justice and access (only wealthy populations?), potential commodification of life, risk of enhancement to create 'designer babies'. Tensions also exist between preventing suffering (compassion) vs respecting natural/divine order. Most moderate position: therapeutic genetic modification to prevent serious disease more ethically defensible than enhancement modification. Requires robust ethical oversight and equitable access."
      },
      {
        question:
          "Evaluate the ethical conflict between corporate surveillance through data mining and traditional religious concepts of human dignity.",
        step_by_step: [
          "Define corporate surveillance: data collection on consumers' behavior, preferences, location",
          "Explain human dignity concern: violation of privacy, reduction of person to data points",
          "Christian perspective: imago Dei (created in God's image) requires respect and dignity",
          "Islamic perspective: privacy (aura) as fundamental right, surveillance seen as intrusion",
          "Buddhist perspective: interconnectedness but also individual autonomy in ethical traditions",
          "Consider justice: corporations profit from personal data; consumers lack informed consent",
          "Analyze power dynamics: surveillance enables manipulation",
          "Evaluate current protections: GDPR, data privacy laws inadequate for protecting human dignity"
        ],
        answer:
          "Corporate surveillance fundamentally conflicts with religious conceptions of human dignity prevalent across traditions. Christian theology of imago Dei teaches humans possess inherent dignity as created in God's image - reduction to data points managed for corporate profit violates this dignity. Islamic tradition emphasizes privacy (aura) as fundamental right; unauthorized surveillance seen as intrusion on sacred boundaries. Buddhist ethics while emphasizing interconnectedness also value individual autonomy and freedom from manipulation. Historical injustices: corporations extract value from personal data (mostly from vulnerable populations) without meaningful consent or compensation. Surveillance enables manipulation of behavior for commercial profit, undermining free will. Power imbalance: individuals cannot meaningfully consent to data practices they don't understand; corporations control decisions about data use. Current protections (GDPR, data minimization principles) inadequate for protecting dignity against ongoing harvesting. Religious perspective supports strong data protection, corporate accountability, transparent consent processes, and treating data as extension of personhood deserving protection."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question:
            "Define 'environmental stewardship' and explain why it's important in religious ethics.",
          type: "short_answer",
          correct_answer:
            "Humans as caretakers of creation with responsibility to care for environment rather than exploit. Important because religious traditions teach we're answerable to God/universe for how we treat the Earth.",
          explanation:
            "Core concept in contemporary religious ethics; relevant to climate change and sustainability.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq2",
          question:
            "What is euthanasia and why do religious traditions have different views on it?",
          type: "short_answer",
          correct_answer:
            "Ending deliberately a person's life to relieve suffering. Different views because: sanctity of life doctrine vs compassion to reduce suffering; disagreement on when life becomes too painful.",
          explanation:
            "Important contemporary medical ethics issue where religious perspectives differ significantly.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq3",
          question:
            "Give two examples of ethical questions raised by artificial intelligence development.",
          type: "short_answer",
          correct_answer:
            "Algorithmic bias affecting criminal justice/hiring, autonomous weapons removing human moral choice, data privacy invasion, job displacement effects",
          explanation:
            "Shows understanding of emerging frontier where religious ethics meets technology.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq4",
          question:
            "Explain why genetic modification of humans to prevent disease raises ethical concerns even for those supportive of medical intervention.",
          type: "short_answer",
          correct_answer:
            "Justice concerns (access only to wealthy?), potential for misuse in enhancement, commodification of life, moving toward 'designer babies', uncertainty about long-term effects",
          explanation:
            "Tests understanding that ethical issues are complex with legitimate concerns on multiple sides.",
          marks: 3,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question:
            "Evaluate to what extent religious traditions can adequately address the ethical challenges posed by emerging technology (AI, genetic modification, surveillance).",
          type: "essay",
          correct_answer:
            "Strong responses would: acknowledge that religious wisdom offers valuable frameworks (human dignity, justice, stewardship); note challenges (technology moving faster than theology, inherited teachings from pre-tech era); discuss how traditions are adapting/evolving; recognize both strengths and limitations of religious approaches; consider need for interdisciplinary engagement.",
          explanation:
            "Requires critical evaluation balancing respect for religious contributions with honest assessment of limitations.",
          marks: 7,
          difficulty: "higher"
        },
        {
          id: "hq2",
          question:
            "Analyze the relationship between bioethical issues (euthanasia, genetic modification) and fundamental religious concepts at stake (sanctity of life, human dignity, God's role).",
          type: "essay",
          correct_answer:
            "Should discuss: sanctity of life principle underlying opposition to euthanasia; human dignity concept implying boundaries for genetic modification; theological questions about divine authority vs human co-creation; tensions between preserving life and relieving suffering; how different traditions weigh competing values.",
          explanation:
            "Tests deep understanding of how bioethics connect to core religious beliefs.",
          marks: 7,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Evaluate", meaning: "Judge effectiveness/acceptability; weigh evidence for/against; reach conclusions" },
        {
          word: "Analyze",
          meaning: "Break down concepts into components; examine relationships; provide specific examples"
        },
        {
          word: "Discuss",
          meaning: "Present multiple perspectives; explore tensions/contradictions; show nuanced understanding"
        }
      ],
      exam_tips: [
        "Use specific examples from real bioethical debates not abstract principles",
        "Reference specific religious teachings and texts when possible",
        "Acknowledge that reasonable people within traditions disagree",
        "Don't assume examiner shares your views on controversial issues",
        "Stay respectful of different religious and secular perspectives",
        "Connect contemporary examples to underlying ethical principles"
      ],
      common_mistakes: [
        "Treating religious perspectives as monolithic - traditions contain diverse views",
        "Getting lost in abstract philosophy - ground responses in concrete examples",
        "Not acknowledging legitimate concerns on multiple sides of issues",
        "Ignoring justice and power dimensions of ethical questions",
        "Using outdated examples - demonstrate awareness of current debates"
      ],
      mark_scheme_notes: [
        "Rewards nuanced analysis recognizing legitimate multiple perspectives",
        "Values specific religious and philosophical references",
        "Looks for connection between underlying principles and contemporary applications",
        "Appreciates awareness of evolving nature of religious ethics in response to new challenges"
      ],
      time_allocation: "Complex issues benefit from planning time before writing. Budget 2-3 minutes planning per 10-mark response."
    },
    section_6_additional_resources: {
      resources: [
        {
          title: "Vatican Documents on Bioethics",
          type: "article",
          url: "https://www.vatican.va",
          description: "Official Catholic teaching on genetic modification, euthanasia, organ transplantation"
        },
        {
          title: "Religious Leaders on Climate Change",
          type: "article",
          description:
            "Statements from Islamic, Jewish, Christian, Buddhist leaders on environmental responsibility"
        },
        {
          title: "AI Ethics Organizations",
          type: "article",
          url: "https://futureoflife.org",
          description: "Research on ethical AI development, includes religious perspectives"
        },
        {
          title: "Bioethics Journal",
          type: "article",
          description: "Academic discussions of contemporary medical ethics issues from religious perspectives"
        }
      ],
      further_reading: [
        "Research specific religious teachings on one contemporary ethical issue in depth",
        "Compare two faith traditions' approaches to genetic modification or another bioethical issue",
        "Investigate environmental justice movements led by religious communities",
        "Explore emerging field of AI ethics and religious community involvement"
      ],
      revision_checklist: [
        "Can you explain core religious ethical principles (sanctity of life, human dignity, stewardship)?",
        "Do you know different faith traditions' positions on major bioethical issues?",
        "Can you analyze conflicts between religious values and contemporary pressure?",
        "Can you discuss environmental ethics from religious perspectives?",
        "Do you understand how different traditions prioritize values differently (compassion vs sanctity of life)?",
        "Can you connect underlying principles to specific contemporary ethical dilemmas?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer:
            "Environmental stewardship means understanding humans as caretakers of creation with responsibility to care for the environment rather than exploit it. Important to religious ethics because many faiths teach we're answerable to God or the cosmic order for how we treat Earth. With climate change, stewardship becomes urgent ethical imperative - overconsumption and carbon emissions violate principles held across traditions."
        },
        {
          question_id: "hq1",
          model_answer:
            "Religious traditions offer valuable ethical frameworks grounded in human dignity, justice, and spiritual values - principles that secular approaches sometimes miss. Concepts like stewardship, sanctity of life, and human dignity provide meaning-making resources. However, challenges exist: technology develops faster than theology; inherited teachings from pre-technological era may not directly address novel problems; different traditions reach incompatible conclusions. Solutions require: 1) traditions adapting/evolving responses, 2) interdisciplinary dialogue with scientists and ethicists, 3) humility about limitations. Conclusion: religious ethics invaluable but insufficient alone for navigating technological futures."
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
    id: "aqa_religious_studies_interfaith_dialogue",
    exam_board: "aqa",
    subject: "religious_studies",
    topic_title: "Interfaith Dialogue & Religious Pluralism",
    topic_number: "6",
    tier_level: "both",
    section_1_key_concepts: {
      overview:
        "Explore relationships between different religious traditions: opportunities for cooperation, sources of conflict, theological pluralism debate, interfaith initiatives, and role of religion in diverse societies. Examine both historical tensions and contemporary collaborative efforts.",
      key_terms: [
        {
          term: "Religious Pluralism",
          definition:
            "Belief that multiple religious traditions have validity; different paths to truth; no single religion has monopoly on spiritual truth",
          importance: "Increasingly prevalent worldview in multicultural societies; challenges exclusivist religious claims."
        },
        {
          term: "Interfaith Dialogue",
          definition:
            "Formal and informal conversations between members of different faith traditions aimed at understanding, cooperation, and reducing conflict",
          importance: "Practical approach to building community and addressing religious tensions in diverse societies."
        },
        {
          term: "Theological Exclusivism",
          definition:
            "Belief that one's own religious tradition uniquely possesses truth; other traditions are mistaken or false",
          importance: "Traditional position of many faiths; creates tension with pluralism and coexistence in diverse societies."
        },
        {
          term: "Religious Syncretism",
          definition:
            "Blending elements from different religious traditions into new hybrid forms; fusion of practices and beliefs",
          importance: "Historically common; concerns traditions, raises authenticity questions, also creates new community spaces."
        }
      ],
      learning_objectives: [
        "Understand different theological positions on other religions (exclusivism, inclusivism, pluralism)",
        "Analyze historical and contemporary interfaith conflicts",
        "Explore interfaith cooperation and dialogue initiatives",
        "Examine challenges to coexistence in religiously diverse societies",
        "Discuss theological implications of religious pluralism",
        "Evaluate role of religion in democratic multicultural societies"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Theological Positions on Other Religions",
        content:
          "Exclusivist stance (traditional Christianity, Islam, Judaism): one tradition uniquely possesses religious truth; others mistaken. Justified by revelation claims: God revealed truth uniquely to our tradition. Inclusivist view (modified position): God's truth manifest uniquely in one tradition but elements of truth exist in others; other traditions pointing toward our ultimate truth. Pluralist position (Hick, others): all major traditions equally valid paths to transcendent reality; different cultures and contexts generate different forms; no tradition has monopoly on truth. Each position has theological support: exclusivism from revelation claims; inclusivism balancing truth claims with acknowledgment of insights elsewhere; pluralism from humility about human understanding of transcendent. Tensions arise because switching positions requires significant theological revision. Most believers hold some combination, with position varying by situation.",
        key_points: [
          "Exclusivism: only one tradition true, others false or incomplete",
          "Inclusivism: one tradition primary with aspects of truth elsewhere",
          "Pluralism: multiple valid paths to similar spiritual truths",
          "Positions shape how believers relate to members of other faiths",
          "All three positions have historical support and contemporary adherents",
          "Individual believers may shift positions depending on context"
        ]
      },
      {
        heading: "Interfaith Initiatives & Cooperation",
        content:
          "Growing interfaith movements bringing believers together: Interfaith organizations (Parliament of World's Religions), local interfaith councils, educational programs promoting understanding. Activities: shared worship (sometimes controversial), joint service projects (food banks, poverty relief), educational dialogues, political advocacy on shared values. Successes: increased understanding, reduced prejudice, concrete community improvements, moral authority when united on values. Challenges: theological tensions over authentic representation, unwillingness of some traditionalists to participate (seen as compromising faith), power imbalances (some traditions have more resources/social power), difficulties addressing genuine disagreements. COVID-19 pandemic accelerated online interfaith dialogue, expanding accessibility but also anonymity. Post-secular turn: communities recognizing religion's importance rather than assuming secularization would reduce it.",
        key_points: [
          "Interfaith organizations bringing believers together for dialogue and cooperation",
          "Joint service projects addressing common social concerns",
          "Educational programs reducing prejudice and stereotypes",
          "Challenges: theological reservations, power imbalances, authenticity questions",
          "Growing recognition of religion's ongoing importance in societies"
        ]
      },
      {
        heading: "Challenges to Religious Coexistence",
        content:
          "Competition for resources: majority religions gain political/funding advantages; minorities face discrimination; competition breeds tension rather than cooperation. Historical grievances: crusades, colonization, conversions, land claims create ongoing tensions between communities. Belief-motivated violence: some groups justify violence through religious ideology; extremism challenges moderate believers trying for coexistence. Secularization paradox: secular societies expected to reduce religion but diverse immigration creates multicultural religious societies. Identity politics: religious identity becomes proxy for ethnic/national identity; disputes become entangled with politics. Conversions and proselytization: some traditions emphasize conversion; others see it as threatening; tensions arise. Education challenges: public school teaching about religions sensitive when religious teachings contradict curricula (evolution, sexuality, historical events). Shared space conflicts: where can practices occur without privileging/disadvantaging other groups?",
        key_points: [
          "Competition for resources, political power, cultural influence",
          "Historical traumas shape contemporary intergroup relations",
          "Religious extremism challenges coexistence efforts",
          "Identity and religious affiliation become politically entangled",
          "Conversion missions conflict with pluralism values",
          "Education systems balancing religious recognition with secular knowledge",
          "Practical challenges of shared democratic public space"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question:
          "Analyze relationship between theological exclusivism and possibility of genuine interfaith dialogue.",
        step_by_step: [
          "Define exclusivism: only one tradition has religious truth, others mistaken",
          "Define interfaith dialogue: conversation between different traditions aimed at understanding",
          "Consider logical tension: how can exclusive truth claims coexist with genuine dialogue?",
          "Note that dialogue doesn't require belief agreement - just mutual respect and listening",
          "Recognize some exclusivists participate in dialogue: not mutual truth belief but shared values/concerns",
          "Historical example: Christians and Muslims cooperated despite doctrinal differences",
          "Challenges: exclusivism may make dialogue less genuine (goal to convince other) vs. learning from other",
          "Analyze whether dialogue requires some theological softening"
        ],
        answer:
          "Theological exclusivism - insisting only one tradition possesses religious truth - creates tension with genuine interfaith dialogue characterized by mutual learning and respect. If a believer says 'your tradition is false but let's talk anyway,' dialogue risks being evangelistic conversion attempt rather than mutual understanding. However, dialogue and exclusivism are not completely incompatible: believers can respect persons while disagreeing with beliefs; shared values (justice, compassion) provide cooperation foundation despite different foundations. Historically, Christians and Muslims coexisted and cooperated despite fundamentally incompatible truth claims about Jesus. Key distinction: exclusivism about truth claims vs. respect for individuals. Genuine dialogue more likely with: 1) exclusivism about revelation claims but openness to learning, 2) recognition that dialogue aims understanding not agreement, 3) willingness to find common ground on practical issues. Challenge: some exclusivist approaches inherently see dialogue as stepping stone to conversion; this may undermine genuine dialogue. Conclusion: tension exists but interfaith dialogue possible even among those with exclusive truth claims."
      },
      {
        question:
          "Discuss how religious diversity affects education in democratic multicultural societies.",
        step_by_step: [
          "Identify tension: public schools teach secular knowledge some traditions reject (evolution, sexuality)",
          "Consider multiple perspectives: 1) secular view - education based on evidence not faith, 2) religious view - faith-based knowledge equally valid",
          "Note power dynamics: majority traditions may dominate curriculum representations",
          "Consider religious minorities: do they feel excluded if curriculum contradicts faith?",
          "Practical challenges: teaching comparative religion without seeming to endorse all equally",
          "Debate: should public schools accommodate religious perspectives (prayer times, dietary requirements, curriculum opt-outs)?",
          "Question of parental rights: who decides children's education - parents or state?",
          "International variations: different democracies handle differently (secular France vs. more accommodating UK)"
        ],
        answer:
          "Religious diversity challenges education systems in democracies: secular curriculum (evolution, sexuality education) conflicts with some traditional teachings; minority religious groups question whether representation is fair. Tensions arise around academic freedom vs. religious accommodation. Challenges include: science curriculum evolved through empirical evidence sometimes contradicts religious teachings (Young Earth vs Evolution); values education sometimes conflicts with religious teachings (LGBTQ+ inclusion, gender equality). Solutions attempted: teaching 'scientific literacy' with religious perspectives analyzed as different ways of knowing; comparative religion courses promoting understanding; accommodations for religious practice (prayer spaces, dietary accommodations); curriculum inclusivity ensuring diverse perspectives included. Complications: power dynamics - majority traditions often perceived as normalized; curriculum reflecting particular values (secularism, individualism, gender roles) that benefit some and challenge others; parental concerns about indoctrination into unfamiliar worldviews. Democratic solution requires: respectful engagement, transparent curriculum, accommodation where possible without compromising educational standards, recognition that universal education involves navigating diverse perspectives."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question: "What is the difference between religious exclusivism and pluralism?",
          type: "short_answer",
          correct_answer:
            "Exclusivism: only one tradition has truth, others false. Pluralism: multiple traditions equally valid paths to truth.",
          explanation:
            "Fundamental theological positions shaping how believers relate to other faiths.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq2",
          question:
            "Give two examples of interfaith cooperation or dialogue initiatives in contemporary society.",
          type: "short_answer",
          correct_answer:
            "Parliament of World's Religions, local interfaith councils, joint service projects, educational programs about religions, shared celebration of values",
          explanation:
            "Shows understanding of practical efforts at building interfaith understanding.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq3",
          question:
            "Name two challenges to religious coexistence in multicultural democratic societies.",
          type: "short_answer",
          correct_answer:
            "Competition for resources/political power, historical grievances, conversion conflicts, education tensions, identity politics, extremism",
          explanation:
            "Tests understanding that religious diversity creates genuine tensions.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq4",
          question:
            "Explain what 'religious syncretism' means and why some traditions object to it.",
          type: "short_answer",
          correct_answer:
            "Blending practices/beliefs from different religions. Some traditions object because they want to preserve distinct identity and authentic teachings.",
          explanation:
            "Shows understanding of how traditions maintain identity boundaries.",
          marks: 3,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question:
            "Evaluate to what extent genuine interfaith dialogue and cooperation is possible between traditions holding contradictory truth claims.",
          type: "essay",
          correct_answer:
            "Strong response would: acknowledge tension between exclusive truth claims and dialogue; note that dialogue doesn't require belief agreement; provide examples of historical cooperation despite disagreement; discuss how focusing on shared values creates common ground; evaluate challenges to authenticity.",
          explanation:
            "Tests ability to hold complexity without collapsing into either cynicism or naive optimism.",
          marks: 7,
          difficulty: "higher"
        },
        {
          id: "hq2",
          question:
            "Discuss how religious identity intersects with ethnicity, nationalism, and politics, complicating interfaith relations.",
          type: "essay",
          correct_answer:
            "Should address: religious divisions often aligned with ethnic/national identities making them especially charged; 'clash of civilizations' framing falsely religious divisions as primary; historical grievances tied to colonization, partition, wars; current conflicts (Israel-Palestine, Myanmar Rohingya) reflecting multiple overlapping identities; how political elites mobilize religious identity for political power.",
          explanation:
            "Tests understanding of complex real-world intersections beyond simple religious categories.",
          marks: 7,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Evaluate", meaning: "Judge feasability/value; weigh evidence; reach conclusions" },
        { word: "Discuss", meaning: "Present multiple perspectives; explore tensions; show nuanced understanding" },
        {
          word: "Analyze",
          meaning: "Break down into components; examine relationships; provide specific examples"
        }
      ],
      exam_tips: [
        "Use specific contemporary examples from your knowledge",
        "Acknowledge legitimate tensions without dismissing any perspective",
        "Recognize that reasonable people disagree on these complex topics",
        "Avoid stereotyping any tradition or community",
        "Connect theological positions to practical implications",
        "Show awareness of evolving nature of interfaith relations"
      ],
      common_mistakes: [
        "Over-simplifying complex theological positions",
        "Assuming all interfaith initiatives equally effective",
        "Ignoring power dynamics and historical injustices",
        "Using outdated examples from past interfaith work",
        "Treating religious identity as separate from political/ethnic identity",
        "Being naive about genuine disagreements persisting despite dialogue"
      ],
      mark_scheme_notes: [
        "Rewards nuanced analysis recognizing legitimate competing values",
        "Values specific religious and theological references",
        "Looks for awareness of real-world complexity in application",
        "Appreciates acknowledgment that these challenges lack simple solutions"
      ],
      time_allocation: "Budget planning time for complex questions. These topics reward careful thinking."
    },
    section_6_additional_resources: {
      resources: [
        {
          title: "Parliament of World's Religions",
          type: "article",
          url: "https://parliamentofreligions.org",
          description: "Major interfaith organization; resources on dialogue, cooperation initiatives globally"
        },
        {
          title: "Religious Pluralism Scholarship",
          type: "article",
          description: "John Hick, others on theological pluralism - academic frameworks for understanding multiple paths"
        },
        {
          title: "Case Studies: Interfaith Cooperation",
          type: "article",
          description:
            "Examples from different regions showing successful and unsuccessful interfaith initiatives"
        },
        {
          title: "Religion & Conflict Studies",
          type: "article",
          description:
            "Scholarly analysis of how religion intersects with identity politics, nationalism, conflict"
        }
      ],
      further_reading: [
        "Research specific historical interfaith conflict and cooperation examples (Crusades, modern coexistence)",
        "Study theological positions of different traditions on other religions",
        "Investigate local interfaith initiatives in your community",
        "Analyze specific contemporary conflicts through religious lens",
        "Explore how different democracies handle religious diversity in education"
      ],
      revision_checklist: [
        "Can you explain exclusivism, inclusivism, and pluralism?",
        "Do you know examples of interfaith cooperation and dialogue?",
        "Can you identify challenges to coexistence in diverse societies?",
        "Can you analyze tensions between theological claims and dialogue goals?",
        "Do you understand how identity, ethnicity, nationalism complicate religious relations?",
        "Can you discuss specific case studies of interfaith conflict and cooperation?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer:
            "Exclusivism holds that only one religious tradition possesses religious truth while others are mistaken or incomplete. Pluralism contends that multiple religious traditions are equally valid paths to ultimate truth, each shaped by different cultural contexts and understandings. Exclusivism emphasizes revealed truth uniquely to one tradition; pluralism suggests the transcendent is approached differently across cultures."
        },
        {
          question_id: "hq1",
          model_answer:
            "Tension exists between exclusive truth claims and genuine dialogue, but cooperation is possible: dialogue doesn't require belief agreement, just mutual respect. Historically, Christians and Muslims coexisted despite incompatible truth claims. Key: distinguishing exclusive truth claims (about doctrine) from respect for persons. Genuine dialogue possible when: 1) believers focus on shared values over doctrine, 2) goal is understanding not conversion, 3) willingness to find common ground despite disagreements. Challenge: some exclusivist approaches inherently view others as peoples to convert; this undermines genuine dialogue. Conclusion: tensions real but not insurmountable - respecting persons possible while maintaining truth claims."
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
