import { Topic } from "@/types";

export const SEED_TOPICS_GEOGRAPHY_EXTENDED: Topic[] = [
  {
    id: "aqa_geography_climate_change_impacts",
    exam_board: "aqa",
    subject: "geography",
    topic_title: "Climate Change: Causes, Impacts & Mitigation",
    topic_number: "4",
    tier_level: "both",
    section_1_key_concepts: {
      overview: "Examine anthropogenic climate change: greenhouse gas emissions, global warming mechanisms, climate impacts on ecosystems and human societies, mitigation and adaptation strategies, international climate governance.",
      key_terms: [
        { term: "Carbon Footprint", definition: "Total greenhouse gases emitted by activity/person/business", importance: "Measure of individual and organizational environmental impact" },
        { term: "Climate Mitigation", definition: "Actions reducing greenhouse gas emissions or removing CO2 from atmosphere", importance: "Essential for limiting warming to 1.5-2°C targets" },
        { term: "Climate Adaptation", definition: "Adjustments to systems to cope with changing climate conditions", importance: "Necessary even with mitigation due to already-locked warming" },
        { term: "Tipping Points", definition: "Thresholds beyond which climate system shifts irreversibly", importance: "Represent risks of catastrophic runaway climate change" }
      ],
      learning_objectives: [
        "Understand causes and mechanisms of climate change",
        "Analyze climate change impacts on different regions and systems",
        "Evaluate mitigation strategies and their effectiveness",
        "Discuss adaptation approaches and challenges",
        "Examine international climate governance and agreements",
        "Assess climate justice dimensions and unequal impacts"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Greenhouse Gas Emissions & Global Warming",
        content: "CO2, methane, nitrous oxide trap heat; human activities increase concentrations: fossil fuel combustion, deforestation, agriculture, industrial processes. Pre-industrial 280 ppm CO2 now 420+ ppm, driving 1.1°C warming. Positive feedbacks amplify: melting ice reduces reflectivity, thawing permafrost releases methane. Impacts: changing precipitation, extreme weather, sea level rise, ecosystem disruption. Global emissions still rising despite renewable energy growth; coal/oil remain dominant energy sources.",
        key_points: [
          "Anthropogenic CO2/GHG emissions warming planet",
          "Positive feedbacks accelerate warming nonlinearly",
          "Different regions warming unevenly (Arctic fastest)",
          "Current trajectory heads toward 2.7°C warming",
          "Mitigation window closing - urgent action needed"
        ]
      },
      {
        heading: "Climate Impacts: Ecological & Social",
        content: "Warming causes ecosystem shifts: poleward/upslope migration, phenological changes (birds breeding earlier), coral bleaching, drought, flooding. Agricultural productivity threatened in some regions while others benefit (complex distribution). Sea level rise threatens island and coastal communities. Health impacts: heat stress, disease expansion, malnutrition. Migration pressures as some regions become uninhabitable. Climate change amplifies inequality: wealthy adapt; poor suffer most from impacts they caused least.",
        key_points: [
          "Ecosystems cannot adapt quickly enough to warming speed",
          "Agricultural productivity changes vary regionally",
          "Low-lying islands and coasts face existential threats",
          "Health systems strained by heat, disease, malnutrition",
          "Climate injustice: impacts fall on vulnerable populations"
        ]
      },
      {
        heading: "Mitigation & Adaptation: Strategies & Challenges",
        content: "Mitigation: renewable energy, efficiency, electrification, reforestation, carbon capture. Challenges: infrastructure lock-in, economic transition, political resistance from fossil fuel interests. Adaptation: sea walls, drought-resistant crops, cooling centers, migration planning. But: some impacts unavoidable (sea level rise committed); adaptation has limits. International frameworks: Paris Agreement (nationally determined contributions), carbon trading, loss and damage finance for vulnerable countries. Implementation gaps: pledges vs. action; developed countries historically responsible but developing countries must transition too.",
        key_points: [
          "Mitigation requires rapid energy system transformation",
          "Adaptation cannot match severe climate change scenarios",
          "Loss and damage fund inadequate for impacts",
          "Wealthier nations must support vulnerable countries",
          "Just transition requires supporting workers in fossil fuel industries"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Analyze how climate change impacts will differ across regions and populations. What makes this unjust?",
        step_by_step: [
          "Identify vulnerable regions: low-lying islands (Maldives, Kiribati), Sub-Saharan Africa (drought), South Asia (monsoons)",
          "Note differential responsibility: high-income countries historically emitted most CO2; developing countries emit little but suffer most",
          "Consider adaptive capacity: wealthy nations can invest in mitigation; poor nations struggle with basic adaptation",
          "Analyze population vulnerability: agriculture-dependent, coastal, lower income communities most exposed",
          "Recognize climate migration triggers: environmental refugees from unstable regions",
          "Evaluate justice: those least responsible for causing climate change suffer most"
        ],
        answer: "Climate change impacts distributed unequally regionally and by population wealth. Vulnerable regions: Small island states face existential threat from sea level rise; Sub-Saharan Africa faces heat, drought, food insecurity; South Asia faces monsoon disruption affecting billions. Wealthy nations (US, Europe, China) historically emitted most cumulative CO2; vulnerable countries (Bangladesh, island nations, African states) contributed minimally. Adaptive capacity gap: wealthy nations invest in renewable energy, adaptation infrastructure, climate-controlled buildings; poor nations lack resources for basic adaptation (drought-resistant seeds, irrigation, cooling). Injustice compounds: those least responsible for emissions suffer disproportionately. Climate migration expected: environmental refugees from unstable regions overwhelming border capacity. Solution requires rich countries reducing emissions aggressively AND providing climate finance to support poor country adaptation. Justice frames climate action not as charity but reparation for historical emissions and current vulnerability."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question: "Name three major greenhouse gases and their sources.",
          type: "short_answer",
          correct_answer: "CO2 (fossil fuels, deforestation), methane (agriculture, permafrost), N2O (agriculture), others acceptable",
          explanation: "Tests basic knowledge of climate change mechanisms.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq2",
          question: "What is a climate tipping point? Give one example.",
          type: "short_answer",
          correct_answer: "Threshold causing irreversible climate shift. Examples: Arctic sea ice collapse, Amazon rainforest dieback, permafrost thaw",
          explanation: "Shows understanding of catastrophic climate risks.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq3",
          question: "Distinguish between climate mitigation and adaptation.",
          type: "short_answer",
          correct_answer: "Mitigation: reduce emissions/remove CO2. Adaptation: adjust to climate changes. Both necessary; adaptation has limits.",
          explanation: "Key distinction in climate response strategies.",
          marks: 2,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question: "Evaluate Paris Agreement effectiveness. What factors limit climate progress?",
          type: "essay",
          correct_answer: "Paris sets goals but implementation inconsistent. Factors limiting: economic interests (fossil fuels), political will, development aspirations of poorer nations, infrastructure lock-in, inadequateFinance for vulnerable countries.",
          explanation: "Tests critical evaluation of international climate governance.",
          marks: 6,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Analyze", meaning: "Break down climate systems into causes/effects; examine relationships" },
        { word: "Evaluate", meaning: "Judge effectiveness; weigh evidence; note limitations and injustices" }
      ],
      exam_tips: [
        "Use specific regional examples showing differential impacts",
        "Consider both human and environmental dimensions",
        "Recognize complexity and trade-offs in solutions",
        "Address justice and equity dimensions"
      ],
      common_mistakes: [
        "Treating climate impacts as uniform globally",
        "Ignoring climate justice dimensions",
        "Presenting solutions as simple or painless"
      ],
      mark_scheme_notes: ["Rewards specific evidence", "Values recognition of complexity and injustice"],
      time_allocation: "15 minutes per 12-mark response"
    },
    section_6_additional_resources: {
      resources: [
        { title: "IPCC Reports", type: "article", url: "https://www.ipcc.ch", description: "Official climate science assessments" },
        { title: "Climate Data Visualizations", type: "interactive", description: "Interactive maps showing regional climate impacts" },
        { title: "Carbon Footprint Calculators", type: "interactive", description: "Calculate personal/household emissions" }
      ],
      further_reading: [
        "Research regional climate impacts in detail for vulnerable areas",
        "Study international climate agreements and implementation gaps",
        "Investigate renewable energy transition challenges"
      ],
      revision_checklist: [
        "Can you explain CO2-climate linkage?", "Do you know regional impact variations?",
        "Can you evaluate mitigation strategies?", "Do you understand climate injustice?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer: "CO2 from fossil fuel combustion and deforestation; methane from livestock and agriculture; nitrous oxide from fertilizers. These trap heat, causing warming."
        }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 60, grade_4: 50 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  {
    id: "aqa_geography_water_insecurity",
    exam_board: "aqa",
    subject: "geography",
    topic_title: "Water Insecurity & Global Water Challenges",
    topic_number: "5",
    tier_level: "both",
    section_1_key_concepts: {
      overview: "Examine global freshwater scarcity, water stress, conflicts over water resources, transboundary water disputes, water pollution, sustainable water management, and connections to climate change.",
      key_terms: [
        { term: "Water Stress", definition: "Demand exceeds reliable supply; regions unable to meet human and ecosystem needs", importance: "Affecting 2+ billion people; expected to worsen" },
        { term: "Transboundary Waters", definition: "Rivers, lakes shared by multiple countries; governance challenges", importance: "Potential conflict source; cooperation essential" },
        { term: "Virtual Water", definition: "Water embedded in traded goods; exporting water through agricultural products", importance: "Water-rich countries export to water-stressed via trade" },
        { term: "Groundwater Depletion", definition: "Extracting water faster than natural recharge; aquifer depletion", importance: "Aquifers took millennia to fill; being drained in decades" }
      ],
      learning_objectives: [
        "Understand causes of global water insecurity",
        "Analyze water stress distribution and inequality",
        "Examine transboundary water governance",
        "Evaluate water use efficiency and sustainability",
        "Discuss water pollution and protection",
        "Consider climate change impacts on water availability"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Water Scarcity & Stress Distribution",
        content: "About 70% fresh water used for agriculture; 2 billion people in high water stress regions. Physical scarcity: insufficient water (arid regions, seasonal variation). Economic scarcity: inadequate infrastructure preventing access (often in low-income countries). Groundwater depletion critical: Ogallala Aquifer (North America), Indus Basin aquifer drops meters annually. Climate change worsens: altered precipitation, earlier snowmelt, increased evaporation. Unequal distribution: wealthy nations often import water-intensive goods; poor countries export water-intensive crops while facing water stress.",
        key_points: [
          "2+ billion people in high water stress regions",
          "Agriculture uses 70% fresh water but contributes to scarcity",
          "Groundwater depletion unsustainable in many regions",
          "Climate change reducing available water in many areas",
          "Water inequality reflects economic inequality"
        ]
      },
      {
        heading: "Transboundary Waters & Cooperation Challenges",
        content: "Major rivers cross borders: Nile (11 countries), Mekong (6), Danube (10). Upstream countries controlling water can disadvantage downstream neighbors. Historical conflicts: Israeli-Palestinian water disputes, Indus Waters Treaty (nuclear powers India-Pakistan), dam disputes (Ethiopia's Grand Renaissance Dam affects Egypt). Cooperation frameworks exist (international treaties, joint management) but implementation inconsistent. Climate change adds pressure: reduced flows threaten agreements premised on historical flows. Water typically cheaper than conflict; incentives for cooperation but political will often lacking.",
        key_points: [
          "Transboundary waters create cooperation/conflict potential",
          "Upstream control creates power imbalances",
          "Historical treaties stressed by climate change",
          "International law on water governance weak",
          "Cooperation requires trust and equitable benefit-sharing"
        ]
      },
      {
        heading: "Water Pollution & Sustainability",
        content: "Pollution reduces usable freshwater: industrial discharge, agricultural runoff (eutrophication), municipal sewage, plastic. Many regions unable to treat wastewater safely - human and environmental health impacted. Groundwater contamination from agriculture (nitrates) and industry harder to reverse than surface water. Circular economy approaches: wastewater treatment, recycling, efficiency improvements. But behavioral changes slow: industrial countries accustomed to abundant cheap water; inefficient irrigation continues; water pricing weak due to political resistance.",
        key_points: [
          "Pollution reduces usable freshwater globally",
          "Wastewater treatment capacity inadequate in many regions",
          "Industrial and agricultural pollution most significant sources",
          "Technology exists for efficiency but political/economic barriers",
          "Water often underpriced, failing to reflect scarcity"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Analyze the Nile River dispute and what it reveals about transboundary water governance challenges.",
        step_by_step: [
          "Nile flows through 11 countries; Egypt historically controlled downstream",
          "Ethiopia's Grand Renaissance Dam threatens Egypt's water supply",
          "Colonial agreement granted Egypt 55% of Nile flow; Ethiopia sees as unjust",
          "Egypt's population growth, development needs require increased water",
          "Climate change reducing flows - existing agreements obsolete",
          "No international mechanism to enforce agreements",
          "Water too essential for compromise; potential conflict"
        ],
        answer: "Nile dispute exemplifies transboundary water governance challenges: historical power imbalances (colonial agreements favored downstream Egypt), upstream development (Ethiopia's dam threatens Egyptian water supply), climate change stress reducing available water, lack of effective international enforcement, and water's existential importance preventing compromise. Ethiopia views dam as development right unfairly denied; Egypt sees as existential threat. No mechanism to enforce agreements or mediate equitably. Reveals weakness of international water law - typically unenforceable, lacks mechanisms for dealing with changed circumstances (climate change), fails to give upstream countries development rights. Solutions require: burden-sharing agreements recognizing all countries' needs, climate adaptation financing, regional cooperation institutions with real power, technology transfer for efficiency."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question: "Define 'water stress' and give two regions experiencing it.",
          type: "short_answer",
          correct_answer: "Demand exceeds reliable supply. Regions: Middle East, North Africa, South Asia, Central Asia, parts of China",
          explanation: "Tests understanding of global water distribution challenges.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq2",
          question: "What is virtual water and why does it matter for water-stressed regions?",
          type: "short_answer",
          correct_answer: "Water embedded in traded goods. Water-rich countries export virtual water to stressed countries through food/goods trade, masking actual resource distribution.",
          explanation: "Shows understanding of hidden water flows in global economy.",
          marks: 3,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question: "Evaluate effectiveness of international agreements for managing transboundary waters.",
          type: "essay",
          correct_answer: "Agreements exist (Nile, Indus, Danube treaties) but often fail to adapt to changed circumstances (climate change); lack enforcement mechanisms; reflect historical power imbalances; new agreements difficult as water scarcity increases urgency. Limited effectiveness.",
          explanation: "Tests critical evaluation of international water governance.",
          marks: 6,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Analyze", meaning: "Examine root causes, impacts, interconnections" },
        { word: "Evaluate", meaning: "Judge effectiveness/sustainability; note limitations" }
      ],
      exam_tips: [
        "Use specific regional examples",
        "Connect to climate change impacts",
        "Consider justice and inequality dimensions"
      ],
      common_mistakes: [
        "Treating water issue as purely technical or environmental",
        "Ignoring political/economic dimensions",
        "Oversimplifying solutions"
      ],
      mark_scheme_notes: ["Rewards specific evidence and interconnection thinking"],
      time_allocation: "15 minutes per 12-mark response"
    },
    section_6_additional_resources: {
      resources: [
        { title: "UN Water Data", type: "article", url: "https://www.unwater.org", description: "Global water statistics and initiatives" },
        { title: "Interactive Water Maps", type: "interactive", description: "Maps showing water stress, scarcity, aquifer status globally" }
      ],
      further_reading: [
        "Research specific transboundary water disputes",
        "Study water management strategies in water-stressed regions",
        "Investigate virtual water flows in global trade"
      ],
      revision_checklist: [
        "Can you explain physical vs economic water scarcity?",
        "Do you know major transboundary water disputes?",
        "Can you evaluate international water governance effectiveness?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer: "Water stress occurs when demand exceeds available reliable water supply. Regions experiencing high stress include: Middle East (Israel-Palestine-Jordan), North Africa (Egypt, Libya, Morocco), South Asia (Pakistan, India), Central Asia (Aral Sea basin), and parts of China."
        }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 60, grade_4: 50 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
