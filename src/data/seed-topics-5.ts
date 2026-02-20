import { Topic } from "@/types";

export const SEED_TOPICS_PART5: Topic[] = [
    // ========================
    // MATHS (Edexcel) - Ratio, Proportion & Rates of Change
    // ========================
    {
        id: "edexcel_maths_ratio_proportion",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Ratio, Proportion & Rates of Change",
        topic_number: "N2",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Ratios compare quantities. This topic covers simplifying ratios, dividing quantities in a given ratio, direct and inverse proportion, and understanding rates of change like speed and density.",
            key_terms: [
                { term: "Ratio", definition: "A comparison between two quantities (e.g., 2:3)", importance: "Used in scaling, recipes, maps" },
                { term: "Simplify", definition: "Reduce ratio to lowest terms (e.g., 4:6 → 2:3)", importance: "Standard form of ratios" },
                { term: "Proportion", definition: "When two ratios are equal", importance: "Set up equations to solve problems" },
                { term: "Direct Proportion", definition: "When one quantity doubles, so does the other (y = kx)", importance: "Common in real life" },
                { term: "Inverse Proportion", definition: "When one quantity doubles, the other halves (y = k/x)", importance: "Speed × Time = Distance" }
            ],
            learning_objectives: [
                "Simplify ratios and use them to compare quantities",
                "Divide quantities in a given ratio",
                "Understand and use direct proportion",
                "Understand and use inverse proportion",
                "Calculate and work with rates (speed, density, pressure)"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Simplifying Ratios",
                content: "A ratio like 8:12 is simplified by finding the HCF (4) and dividing both parts: 8÷4:12÷4 = 2:3. Ratios can compare any quantities: 4:5 could mean 4 apples to 5 oranges. Always express in simplest form (whole numbers, no decimals).",
                key_points: ["Find HCF of both numbers", "Divide both by HCF", "Result is simplified ratio", "Use colons between parts"]
            },
            {
                heading: "Dividing Quantities in a Ratio",
                content: "If you divide £360 in the ratio 3:5, there are 3+5=8 parts total. One part = £360÷8 = £45. So 3 parts = £45×3 = £135, and 5 parts = £45×5 = £225. Check: £135+£225 = £360 ✓",
                key_points: ["Add ratio parts to get total parts", "Divide quantity by total parts", "Multiply by each ratio part", "Always check sum equals original"]
            },
            {
                heading: "Direct vs Inverse Proportion",
                content: "Direct (y = kx): If x doubles, y doubles. Example: Cost = Price × Quantity. Graph is straight line through origin. Inverse (y = k/x): If x doubles, y halves. Example: Time = Distance ÷ Speed. Graph is a curve.",
                key_points: ["Direct: Straight line through origin", "Inverse: Curve (hyperbola)", "Use k for constant of proportionality"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "John and Sarah share £264 in the ratio 5:7. How much does each get?",
                step_by_step: [
                    "Total parts = 5 + 7 = 12",
                    "Value of one part = £264 ÷ 12 = £22",
                    "John gets 5 parts = £22 × 5 = £110",
                    "Sarah gets 7 parts = £22 × 7 = £154",
                    "Check: £110 + £154 = £264 ✓"
                ],
                answer: "John: £110, Sarah: £154"
            },
            {
                question: "If y is directly proportional to x, and y=12 when x=3, find y when x=8.",
                step_by_step: [
                    "y = kx (direct proportion)",
                    "12 = k × 3 → k = 4",
                    "So y = 4x",
                    "When x = 8: y = 4 × 8 = 32"
                ],
                answer: "y = 32"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mnp1f1", question: "Simplify 12:18", type: "short_answer", correct_answer: "2:3", explanation: "HCF is 6, so 12÷6:18÷6 = 2:3", marks: 1, difficulty: "foundation" },
                { id: "mnp1f2", question: "Divide £60 in the ratio 1:2", type: "short_answer", correct_answer: "£20 and £40", explanation: "3 parts total, £60÷3=£20 per part", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "mnp1h1", question: "y is inversely proportional to x. When x=4, y=5. Find y when x=10", type: "calculation", correct_answer: "2", explanation: "y=k/x, 5=k/4, k=20, so y=20/10=2", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Share", meaning: "Divide in a given ratio" },
                { word: "Simplify", meaning: "Reduce to lowest terms" },
                { word: "Proportional", meaning: "Has a constant relationship" }
            ],
            exam_tips: ["Always simplify ratios to check work", "State the constant of proportionality (k)", "For sharing problems, always check total"],
            common_mistakes: ["Forgetting to add ratio parts first", "Mixing up direct and inverse", "Not simplifying final ratio"],
            mark_scheme_notes: ["M1 for method (finding k or parts), A1 for correct answer"],
            time_allocation: "1 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Ratio Problem Solver", type: "interactive", description: "Practice sharing in ratios" },
                { title: "Proportion Video", type: "video", description: "Direct vs inverse explained" }
            ],
            further_reading: ["Edexcel GCSE Maths Chapter 3 - Ratio & Proportion"],
            revision_checklist: ["I can simplify ratios", "I can divide quantities in a ratio", "I understand direct and inverse proportion"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mnp1f1", model_answer: "2:3", mark_breakdown: ["1 mark for correct simplified ratio"], examiner_tip: "Show HCF calculation if unsure" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // MATHS (Edexcel) - Probability
    // ========================
    {
        id: "edexcel_maths_probability",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Probability",
        topic_number: "S1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Probability measures how likely something is to happen, from 0 (impossible) to 1 (certain). This topic covers calculating probabilities, independent events, and tree diagrams.",
            key_terms: [
                { term: "Probability", definition: "Likelihood of an event occurring (0 to 1)", importance: "Foundation of statistics" },
                { term: "Outcome", definition: "A possible result of an experiment", importance: "Used to calculate probability" },
                { term: "Sample Space", definition: "All possible outcomes", importance: "Denominator of probability calculation" },
                { term: "Independent Events", definition: "Events where one doesn't affect the other", importance: "P(A and B) = P(A) × P(B)" },
                { term: "Relative Frequency", definition: "Experimental probability based on trials", importance: "Approaches theoretical probability with more trials" }
            ],
            learning_objectives: [
                "Calculate theoretical probability as a fraction",
                "Find probability from experimental data",
                "Understand mutually exclusive events",
                "Calculate probability of independent events",
                "Use tree diagrams and Venn diagrams",
                "Find conditional probability"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Basic Probability",
                content: "Probability = (Number of favorable outcomes) / (Total number of outcomes). For a fair die: P(rolling a 3) = 1/6. Probabilities are written as fractions, decimals, or percentages. A probability always lies between 0 and 1. P(not happening) = 1 - P(happening).",
                key_points: ["Count favorable outcomes", "Count total outcomes", "Simplify the fraction", "All probabilities sum to 1"]
            },
            {
                heading: "Independent Events & Tree Diagrams",
                content: "For independent events (coin flip, then die roll): P(A and B) = P(A) × P(B). Tree diagrams show branches for each outcome. Multiply along branches, add across them.",
                key_points: ["Independent: One doesn't affect the other", "Multiply probabilities along path", "Add probabilities for 'or' questions"]
            },
            {
                heading: "Relative Frequency & Experimental Probability",
                content: "Relative Frequency = (Number of times event occurred) / (Total number of trials). If we flip a coin 100 times and get 52 heads, relative frequency = 52/100 = 0.52 (close to theoretical 0.5).",
                key_points: ["Relative frequency changes as trials increase", "Larger sample = closer to theoretical", "Used when theoretical can't be calculated"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "A spinner has red, blue, green equally likely. A coin is flipped. Find P(blue and heads).",
                step_by_step: [
                    "P(blue) = 1/3",
                    "P(heads) = 1/2",
                    "Events are independent",
                    "P(blue and heads) = 1/3 × 1/2 = 1/6"
                ],
                answer: "1/6"
            },
            {
                question: "A bag has 5 red, 3 blue, 2 green balls. Find P(not red).",
                step_by_step: [
                    "Total = 5 + 3 + 2 = 10",
                    "Not red = blue or green = 3 + 2 = 5",
                    "P(not red) = 5/10 = 1/2",
                    "OR: P(not red) = 1 - P(red) = 1 - 5/10 = 5/10 = 1/2"
                ],
                answer: "1/2 or 0.5"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mprob1f1", question: "A die is rolled. What is P(rolling a 2)?", type: "mcq", options: ["1/6", "1/2", "2/6", "5/6"], correct_answer: "1/6", explanation: "One favorable outcome out of six", marks: 1, difficulty: "foundation" },
                { id: "mprob1f2", question: "A coin is flipped twice. Find P(two heads).", type: "short_answer", correct_answer: "1/4", explanation: "P(H) × P(H) = 1/2 × 1/2 = 1/4", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "mprob1h1", question: "A bag has 4 red and 6 blue balls. Two balls are drawn without replacement. Find P(both red).", type: "calculation", correct_answer: "2/15", explanation: "P(1st red) = 4/10, P(2nd red|1st red) = 3/9, so 4/10 × 3/9 = 12/90 = 2/15", marks: 3, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Find the probability", meaning: "Use formula or count outcomes" },
                { word: "Tree diagram", meaning: "Show all possible paths" }
            ],
            exam_tips: ["For 'at least' questions, use 1 - opposite", "Without replacement: denominators change", "Show your work even for simple questions"],
            common_mistakes: ["Forgetting denominators change without replacement", "Multiplying when should add", "Not simplifying fractions"],
            mark_scheme_notes: ["M1 for valid method, A1 for correct probability in simplest form"],
            time_allocation: "1 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Tree Diagram Builder", type: "interactive", description: "Create and solve probability diagrams" },
                { title: "Probability Experiments", type: "interactive", description: "Simulate coin flips and dice rolls" }
            ],
            further_reading: ["Edexcel GCSE Maths Chapter 6 - Probability"],
            revision_checklist: ["I can calculate basic probability", "I can use tree diagrams", "I understand independent events", "I can apply 'without replacement'"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mprob1f1", model_answer: "1/6", mark_breakdown: ["1 mark for correct fraction"], examiner_tip: "Must be simplified" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // MATHS (Edexcel) - Statistics
    // ========================
    {
        id: "edexcel_maths_statistics",
        exam_board: "edexcel",
        subject: "maths",
        topic_title: "Statistics & Data Representation",
        topic_number: "S2",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Statistics involves collecting, representing, and analyzing data. This topic covers averages (mean, median, mode), range, and interpreting data from tables, charts, and graphs.",
            key_terms: [
                { term: "Mean", definition: "Sum of all values ÷ number of values (average)", importance: "Most common measure" },
                { term: "Median", definition: "Middle value when ordered (50th percentile)", importance: "Resistant to outliers" },
                { term: "Mode", definition: "Most frequently occurring value", importance: "Used for categorical data" },
                { term: "Range", definition: "Maximum - Minimum (spread of data)", importance: "Shows variation" },
                { term: "Outlier", definition: "Value unusually far from others", importance: "Affects mean, not median" }
            ],
            learning_objectives: [
                "Calculate mean, median, mode, and range",
                "Interpret frequency tables and grouped data",
                "Understand and draw pie charts, bar charts, histograms",
                "Compare distributions using averages and spread",
                "Understand correlation and read scatter graphs"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Averages (Measures of Central Tendency)",
                content: "Mean: Add all values, divide by count (affected by outliers). Median: Sort values, take middle (n+1)/2 position for n values. Mode: Most frequent value (useful for non-numeric data). For [2, 3, 3, 5, 8]: Mean=4.2, Median=3, Mode=3, Range=6.",
                key_points: ["Mean: Sum ÷ Count", "Median: Middle value", "Mode: Most frequent", "Choose based on data type"]
            },
            {
                heading: "Data Representation",
                content: "Pie Charts: Division into sectors (angles proportional to frequency). Bar Charts: Heights show frequency (works for categories). Histograms: Like bar charts but shows continuous data with no gaps. Frequency Polygon: Line graph connecting midpoints of class intervals.",
                key_points: ["Pie chart angle = (frequency/total) × 360°", "Bar chart x-axis can be labels", "Histogram x-axis is continuous", "Always label axes and include units"]
            },
            {
                heading: "Grouped Data",
                content: "For large datasets, group into classes. Estimate mean using class midpoints. For [0-10, 11-20]: Use midpoints 5 and 15.5 to calculate mean. Cannot find exact median but can estimate.",
                key_points: ["Use midpoint for each class", "Multiply by frequency", "Sum and divide by total frequency"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Find mean, median, mode, and range for: 5, 7, 3, 7, 9, 2, 7",
                step_by_step: [
                    "Mean: (5+7+3+7+9+2+7) ÷ 7 = 40 ÷ 7 = 5.71 (2 dp)",
                    "Median: Sort [2, 3, 5, 7, 7, 7, 9], middle is 4th value = 7",
                    "Mode: 7 appears 3 times = 7",
                    "Range: 9 - 2 = 7"
                ],
                answer: "Mean: 5.71, Median: 7, Mode: 7, Range: 7"
            },
            {
                question: "A pie chart has sectors for: Red 120°, Blue 160°, Green ?. Total is 100 items. How many are green?",
                step_by_step: [
                    "Green angle = 360° - 120° - 160° = 80°",
                    "Green frequency = (80/360) × 100 = 22.22... ≈ 22 items"
                ],
                answer: "Green: 22 items (or 80/360 × 100 items)"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "mstat1f1", question: "What is the median of [2, 5, 3, 8, 1, 9]?", type: "short_answer", correct_answer: "4", explanation: "Sort: [1,2,3,5,8,9], median = (3+5)/2 = 4", marks: 2, difficulty: "foundation" },
                { id: "mstat1f2", question: "Calculate the mean of 10, 20, 30", type: "mcq", options: ["15", "20", "25", "60"], correct_answer: "20", explanation: "(10+20+30)/3 = 60/3 = 20", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "mstat1h1", question: "A pie chart shows 25% red. If there are 200 items total, how many degrees is red?", type: "calculation", correct_answer: "90", explanation: "25% of 360° = 0.25 × 360 = 90°", marks: 2, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [
                { word: "Calculate", meaning: "Show working" },
                { word: "Compare", meaning: "Use averages and range" },
                { word: "Estimate", meaning: "Use grouped data/graph" }
            ],
            exam_tips: ["For grouped data, use class midpoints", "Always state the measure used (mean/median)", "Pie chart angles must add to 360°"],
            common_mistakes: ["Not sorting before finding median (for even numbers)", "Forgetting to divide by number of items for mean", "Using wrong total for pie chart calculations"],
            mark_scheme_notes: ["M1 for correct method, A1 for accuracy"],
            time_allocation: "1 min per mark"
        },
        section_6_additional_resources: {
            resources: [
                { title: "Statistics Calculator", type: "interactive", description: "Calculate mean, median, mode instantly" },
                { title: "Data Representation Tool", type: "interactive", description: "Create pie charts and histograms" }
            ],
            further_reading: ["Edexcel GCSE Maths Chapter 7 - Statistics"],
            revision_checklist: ["I can calculate all averages", "I can draw pie charts", "I can interpret grouped data", "I understand when to use each average"]
        },
        section_7_assessment_answers: {
            answers: [
                { question_id: "mstat1f1", model_answer: "4", mark_breakdown: ["1 mark for sorting", "1 mark for correct median"], examiner_tip: "Always show sorting step" }
            ],
            grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // GEOGRAPHY (AQA) - Coasts
    // ========================
    {
        id: "aqa_geography_coasts",
        exam_board: "aqa",
        subject: "geography",
        topic_title: "Physical Landscapes in the UK: Coasts",
        topic_number: "Paper 1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Coastal landscapes are shaped by waves, weathering, and erosion. This topic covers the processes (Hydraulic Action, Abrasion) and landforms (Spits, Stacks, Headlands).",
            key_terms: [
                { term: "Hydraulic Action", definition: "Power of waves smashing air into cracks", importance: "Primary erosion process" },
                { term: "Abrasion", definition: "Rocks hurling against the cliff like sandpaper", importance: "Smoothes/carves rock" },
                { term: "Longshore Drift", definition: "Movement of sediment along the coast", importance: "Builds beaches/spits" },
                { term: "Swash/Backwash", definition: "Waves moving up/down beach", importance: "Constructive vs Destructive waves" },
                { term: "Headland", definition: "Hard rock sticking out into sea", importance: "Where caves/arches form" }
            ],
            learning_objectives: [
                "Explain the processes of erosion",
                "Describe formation of erosional landforms (Stack)",
                "Describe formation of depositional landforms (Spit)",
                "Evaluate hard vs soft engineering management"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Processes of Erosion",
                content: "1) Hydraulic Action: Air compressed into cracks. 2) Abrasion: Rocks scrape bed. 3) Attrition: Rocks hit each other (become rounder/smaller). 4) Solution: Chemical dissolving (chalk/limestone).",
                key_points: ["Learn the 4 types", "Hydraulic = Water Power", "Abrasion = Sandpaper", "Attrition = Rocks vs Rocks"]
            },
            {
                heading: "Landform Formation: Old Harry Rocks",
                content: "Crack -> Cave (Hydraulic Action widens crack). Cave -> Arch (breaks through headland). Arch -> Stack (roof collapses due to gravity). Stack -> Stump (eroded by waves).",
                key_points: ["Crack-Cave-Arch-Stack-Stump", "Process takes thousands of years", "Happens on headlands"]
            },
            {
                heading: "Coastal Management",
                content: "Hard Engineering: Sea Walls (expensive, ugly, effective), Groynes (stops longshore drift, creates beach). Soft Engineering: Beach Nourishment (adds sand, looks natural), Managed Retreat (let nature take course, cheap but land lost).",
                key_points: ["Hard = Concrete/Structures", "Soft = Working with nature", "Evaluate costs vs benefits"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Explain the formation of a spit (4 marks)",
                step_by_step: [
                    "1. Longshore drift moves sediment along the coast in direction of prevailing wind.",
                    "2. Coastline changes shape (e.g. river mouth).",
                    "3. Sediment is deposited in sheltered water, building a ridge.",
                    "4. Hooked end forms due to wind changes/waves."
                ],
                answer: "Successive diagram or 4 points in sequence"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "gc1f1", question: "What is Attrition?", type: "short_answer", correct_answer: "Rocks hitting each other and becoming smaller/rounder", explanation: "Specific type of erosion involving sediment itself", marks: 2, difficulty: "foundation" }
            ],
            higher: [
                { id: "gc1h1", question: "Evaluate the use of hard engineering to protect coastlines (6 marks)", type: "essay", correct_answer: "Sea wall: protecting towns but very expensive (£5k/m). Groynes: build beach but starve downstream (terminal groyne syndrome). Conclusion: Effective but often ugly/costly.", explanation: "Must include specific examples and pros/cons", marks: 6, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [{ word: "Explain formation", meaning: "Step-by-step process" }, { word: "Evaluate", meaning: "Pros vs Cons + Judgement" }],
            exam_tips: ["Draw diagrams! Even rough ones help explain formation", "Use key terms (Hydraulic Action, etc)"],
            common_mistakes: ["Confusing Swash (up) and Backwash (down)", "Mixing up erosion types"],
            mark_scheme_notes: ["Sequence is key for formation questions"],
            time_allocation: "1 min per mark"
        },
        section_6_additional_resources: {
            resources: [{ title: "Coasts Flyover", type: "video", description: "Drone footage of Holderness Coast" }],
            further_reading: ["CGP Geography Paper 1"],
            revision_checklist: ["I can define erosion types", "I can explain longshore drift", "I can evaluate sea walls"]
        },
        section_7_assessment_answers: {
            answers: [],
            grade_boundaries: { grade_9: 80, grade_7: 65, grade_5: 45, grade_4: 35 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    },

    // ========================
    // COMPUTER SCIENCE (OCR/AQA) - Algorithms
    // ========================
    {
        id: "aqa_cs_algorithms",
        exam_board: "aqa",
        subject: "computer_science",
        topic_title: "Algorithms - Sorting & Searching",
        topic_number: "Paper 1",
        tier_level: "both",
        section_1_key_concepts: {
            overview: "Algorithms are step-by-step instructions to solve a problem. You must know Binary Search, Linear Search, Bubble Sort, Merge Sort, and Insertion Sort.",
            key_terms: [
                { term: "Algorithm", definition: "A sequence of steps to solve a problem", importance: "Core concept of CS" },
                { term: "Decomposition", definition: "Breaking down a problem into smaller parts", importance: "Computational Thinking" },
                { term: "Abstraction", definition: "Removing unnecessary detail", importance: "Focuses on the core problem" },
                { term: "Binary Search", definition: "Divide and conquer search (list MUST be ordered)", importance: "Efficient (O(log n))" },
                { term: "Linear Search", definition: "Checking items one by one", importance: "Simple but slow (O(n))" }
            ],
            learning_objectives: [
                "Perform Linear and Binary searches",
                "Trace Bubble, Merge, and Insertion sorts",
                "Compare efficiency of algorithms",
                "Write pseudocode for simple algorithms"
            ]
        },
        section_2_detailed_explanations: [
            {
                heading: "Search Algorithms",
                content: "Linear Search: Start at index 0, check match. If no, move to index 1. Repeat. Works on ANY list. Slow for big lists. Binary Search: 1) Find middle item. 2) If match, stop. 3) If item < middle, discard right half. 4) If item > middle, discard left half. REPEAT on remaining list. List MUST be sorted. Very fast.",
                key_points: ["Linear = Simple, Slow, Unsorted lists ok", "Binary = Complex, Fast, Must be SORTED"]
            },
            {
                heading: "Sorting Algorithms",
                content: "Bubble Sort: Compare adjacent pairs, swap if wrong order. Repeat passes until no swaps. Slowest. Merge Sort: Split list in half recursively until size 1. Merge back together in order. Fastest (Divide & Conquer). Insertion Sort: Take one item, insert into correct position in sorted part.",
                key_points: ["Bubble = Swapping pairs", "Merge = Splitting and merging", "Insertion = Placing one by one"]
            }
        ],
        section_3_worked_examples: [
            {
                question: "Perform a Bubble Sort on: [5, 2, 8, 1]",
                step_by_step: [
                    "Pass 1:",
                    "Compare 5,2 -> Swap -> [2,5,8,1]",
                    "Compare 5,8 -> Stay -> [2,5,8,1]",
                    "Compare 8,1 -> Swap -> [2,5,1,8]",
                    "Pass 2:",
                    "Compare 2,5 -> Stay",
                    "Compare 5,1 -> Swap -> [2,1,5,8]",
                    "Compare 5,8 -> Stay",
                    "Pass 3:",
                    "Compare 2,1 -> Swap -> [1,2,5,8] -> SORTED"
                ],
                answer: "[1, 2, 5, 8]"
            }
        ],
        section_4_practice_questions: {
            foundation: [
                { id: "cs1f1", question: "Which search needs a sorted list?", type: "mcq", options: ["Linear", "Binary"], correct_answer: "Binary", explanation: "It relies on discarding half based on order", marks: 1, difficulty: "foundation" }
            ],
            higher: [
                { id: "cs1h1", question: "Compare Merge Sort and Bubble Sort efficiency (4 marks)", type: "essay", correct_answer: "Merge sort is much faster for large lists (n log n). Bubble sort is slow (n^2). Merge sort uses more memory.", explanation: "Time complexity vs Space complexity", marks: 4, difficulty: "higher" }
            ]
        },
        section_5_exam_guidance: {
            command_words: [{ word: "Trace", meaning: "Show the state of list at each step" }, { word: "Compare", meaning: "Efficiency/Speed/Memory" }],
            exam_tips: ["Learn the steps for Merge Sort diagram", "Binary search: remember to round midpoint correctly"],
            common_mistakes: ["Trying Binary Search on unsorted list", "Stopping Bubble sort before verifying no swaps"],
            mark_scheme_notes: ["Trace tables must be accurate"],
            time_allocation: "1 mark per min"
        },
        section_6_additional_resources: {
            resources: [{ title: "Sorting Algorithms Visualiser", type: "interactive", description: "Watch bars sort themselves" }],
            further_reading: ["OCR/AQA CS Guide"],
            revision_checklist: ["I can trace Bubble Sort", "I can explain Binary Search", "I can write Pseudocode"]
        },
        section_7_assessment_answers: {
            answers: [],
            grade_boundaries: { grade_9: 80, grade_7: 65, grade_5: 45, grade_4: 35 }
        },
        view_count: 0, avg_score: 0, completion_rate: 0,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }
];
