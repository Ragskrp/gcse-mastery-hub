import { Topic } from "@/types";

/**
 * EXTENDED MATHS TOPICS SET 2
 * Additional 15+ topics covering missing foundation & higher material
 * Focus on engagement, real-world applications, and student interest
 */

export const SEED_MATHS_EXTENDED_2: Topic[] = [
  // ========================
  // ALGEBRA ADVANCED
  // ========================

  {
    id: "edexcel_maths_surds_rationalizing",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Surds & Rationalising Denominators",
    topic_number: "A6",
    tier_level: "both",
    section_1_key_concepts: {
      overview: "Surds are irrational roots (like √2, √5). Simplifying surds and rationalising denominators produces exact answers, important for proof and precision. Used in engineering, physics for exact calculations.",
      key_terms: [
        { term: "Surd", definition: "Irrational root that cannot simplify to rational number (e.g., √3, ³√7)", importance: "Exact values" },
        { term: "Rationalise", definition: "Remove surds from denominator of fraction", importance: "Standard form" },
        { term: "Conjugate", definition: "For a+b√c, conjugate is a-b√c", importance: "Multiply to eliminate surds" },
        { term: "Simplify Surd", definition: "Factor out perfect squares (e.g., √18 = 3√2)", importance: "Simplest form" },
        { term: "Exact Answer", definition: "Leave as surd instead of decimal approximation", importance: "Mathematical precision" }
      ],
      learning_objectives: [
        "Simplify surds by factoring perfect squares",
        "Add and subtract like surds",
        "Multiply and divide surds",
        "Rationalise denominators (single and binomial)",
        "Prove statements using surds"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Simplifying Surds",
        content: "Look for perfect square factors. √18 = √(9 × 2) = √9 × √2 = 3√2. √50 = √(25 × 2) = 5√2. √72 = √(36 × 2) = 6√2. Always extract all perfect squares. Combine like surds: 2√3 + 4√3 = 6√3 (only when number under root is same).",
        diagram_description: "Factor tree showing √18 breaking into √9 × √2, then to 3√2. Multiple examples of simplification. Visual showing like surds combine, unlike surds don't.",
        key_points: ["Find largest perfect square factor", "Extract it outside root", "Leave remainder under root", "Combine like surds only"]
      },
      {
        heading: "Rationalising Denominators",
        content: "Single surd: multiply by √a/√a. Example: 1/√2 = 1/√2 × √2/√2 = √2/2. Binomial: multiply by conjugate. Example: 1/(2+√3) = (2-√3)/((2+√3)(2-√3)) = (2-√3)/(4-3) = 2-√3.",
        diagram_description: "Step by step shown: 1/√2 → multiply by √2/√2 → √2/2 with denominators highlighted. Binomial example with (a+b)(a-b) = a² - b² law shown.",
        key_points: ["Multiply by 1 (in form of √a/√a or conjugate/conjugate)", "(a+b)(a-b) = a² - b² removes surds", "Result has rational denominator"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Simplify √72",
        step_by_step: [
          "Find perfect square factors: 72 = 36 × 2",
          "√72 = √(36 × 2) = √36 × √2 = 6√2"
        ],
        answer: "6√2"
      },
      {
        question: "Rationalise 3/(2+√5)",
        step_by_step: [
          "Multiply by conjugate (2-√5)/(2-√5)",
          "Numerator: 3(2-√5) = 6 - 3√5",
          "Denominator: (2+√5)(2-√5) = 4 - 5 = -1",
          "Result: (6 - 3√5)/(-1) = -6 + 3√5 or 3√5 - 6"
        ],
        answer: "3√5 - 6"
      }
    ],
    section_4_practice_questions: {
      foundation: [
        { id: "msr1f1", question: "Simplify √20", type: "short_answer", correct_answer: "2√5", explanation: "20 = 4 × 5, so √20 = 2√5", marks: 1, difficulty: "foundation" },
        { id: "msr1f2", question: "Rationalise 2/√3", type: "short_answer", correct_answer: "2√3/3", explanation: "Multiply by √3/√3: 2√3/3", marks: 2, difficulty: "foundation" }
      ],
      higher: [
        { id: "msr1h1", question: "Simplify 3√12 + 2√27", type: "short_answer", correct_answer: "12√3", explanation: "3√12 = 3×2√3 = 6√3, 2√27 = 2×3√3 = 6√3, total 12√3", marks: 2, difficulty: "higher" },
        { id: "msr1h2", question: "Rationalise 1/(3-√2)", type: "calculation", correct_answer: "(3+√2)/7", explanation: "Multiply by (3+√2)/(3+√2), denominator becomes 9-2=7", marks: 2, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Simplify", meaning: "Extract perfect squares and combine like terms" },
        { word: "Rationalise", meaning: "Remove surds from denominator" }
      ],
      exam_tips: ["Always give exact surd form unless asked for decimal", "Check all perfect squares extracted", "Conjugate for binomials"],
      common_mistakes: ["Not extracting all perfect squares", "Forgetting to multiply numerator and denominator by same thing", "Sign errors with binomial conjugate"],
      mark_scheme_notes: ["A1 for simplified form", "Rationalise: M1 method, A1 accuracy"],
      time_allocation: "1-2 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Surd Simplifier Tool", type: "interactive", description: "Enter surd, see step-by-step simplification" },
        { title: "Rationalisation Practice", type: "interactive", description: "Guided practice with feedback" }
      ],
      real_world_applications: [
        "Engineering: precise measurements avoid rounding errors",
        "Physics: constants like √(g/L) in pendulum formulas",
        "Construction: diagonal lengths using Pythagoras (exact calculations)"
      ],
      revision_checklist: ["I can simplify all surds", "Rationalisation steps clear", "Can combine like and unlike surds appropriately"]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "msr1f1", model_answer: "2√5", mark_breakdown: ["1 mark for correct simplification"], examiner_tip: "√4 × √5 = 2√5" }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  {
    id: "edexcel_maths_exponential_logarithms",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Exponential & Logarithmic Functions",
    topic_number: "A7",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Exponential functions (y = aˣ) model growth/decay (bacteria, compound interest, radioactive decay). Logarithms are inverse (y = logₐ(x)). Natural log ln(x) = log_e(x) is especially important.",
      key_terms: [
        { term: "Exponential Function", definition: "y = aˣ or y = Aeᵏˣ", importance: "Models growth/decay" },
        { term: "Logarithm", definition: "If aˣ = b, then x = logₐ(b)", importance: "Inverse of exponential" },
        { term: "Natural Logarithm", definition: "ln(x) = logₑ(x) where e ≈ 2.718", importance: "Most important base for calculus" },
        { term: "Log Laws", definition: "log(ab) = log(a) + log(b), log(a/b) = log(a) - log(b), log(aⁿ) = n×log(a)", importance: "Simplify expressions" },
        { term: "Asymptote", definition: "Line that curve approaches but never touches", importance: "Describes behavior" }
      ],
      learning_objectives: [
        "Graph exponential and logarithmic functions",
        "Solve exponential equations using logarithms",
        "Apply log laws to simplify expressions",
        "Model real problems (population, cooling, investments)",
        "Understand inverse relationship between exp and log"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Exponential Functions & Growth",
        content: "y = Aeᵏˣ: A is initial value, k determines growth rate. If k > 0, exponential growth (curve goes up). If k < 0, exponential decay (curve goes down, approaches 0). Horizontal asymptote at y = 0. Base e ≈ 2.718 is special; eˣ has derivative = itself. Compound interest: A = P(1+r)ⁿ uses exponential growth.",
        diagram_description: "Two curves: one growing exponentially (k>0), one decaying (k<0), both approaching asymptote. Labeled with A (y-intercept) and asymptote y=0. Real-world examples: bacteria count over hours, radioactive material half-life.",
        key_points: ["A is initial amount", "k > 0 = growth, k < 0 = decay", "y = 0 is horizontal asymptote", "Compound interest is exponential"]
      },
      {
        heading: "Logarithms & Solving Exponentials",
        content: "If 2ˣ = 8, then x = log₂(8) = 3. Natural log: if eˣ = 5, then x = ln(5). Log laws: log(ab) = log(a) + log(b), log(aⁿ) = n·log(a), log(a/b) = log(a) - log(b). Change of base: logₐ(b) = ln(b)/ln(a).",
        diagram_description: "Exponential and logarithmic curves shown as reflections across y=x line. Log laws with color-coded examples. Calculator showing ln and log₁₀ keys.",
        key_points: ["Logarithm is inverse of exponential", "aˣ = b ⟹ x = logₐ(b)", "Use ln for natural logarithm", "Log laws simplify complex expressions"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Solve 2ˣ = 16",
        step_by_step: [
          "Take logarithm of both sides: log(2ˣ) = log(16)",
          "Apply log law: x·log(2) = log(16)",
          "x = log(16) / log(2) = 4 (can verify: 2⁴ = 16)"
        ],
        answer: "x = 4"
      },
      {
        question: "Radioactive decay: half-life is 5 years. How much remains after 15 years if starting with 100g?",
        step_by_step: [
          "Half-life formula: A = A₀(1/2)^(t/T) where T = half-life",
          "A = 100 × (1/2)^(15/5) = 100 × (1/2)³ = 100 × 1/8 = 12.5g"
        ],
        answer: "12.5g"
      }
    ],
    section_4_practice_questions: {
      foundation: [],
      higher: [
        { id: "mel1h1", question: "Solve 3ˣ = 27", type: "short_answer", correct_answer: "3", explanation: "3ˣ = 3³, so x = 3", marks: 1, difficulty: "higher" },
        { id: "mel1h2", question: "Solve eˣ = 10 (leave answer in exact form)", type: "short_answer", correct_answer: "ln(10) or log_e(10)", explanation: "x = ln(10)", marks: 1, difficulty: "higher" },
        { id: "mel1h3", question: "Simplify lg(100) + lg(x) - lg(10)", type: "short_answer", correct_answer: "lg(10x)", explanation: "= lg(100x/10) = lg(10x)", marks: 2, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Solve", meaning: "Use logarithms to find exponent" },
        { word: "Simplify", meaning: "Apply log laws to combine/reduce" }
      ],
      exam_tips: ["Take log of both sides to solve exponentials", "Use natural log ln unless base specified", "Check your answer by substituting back", "Exact form uses ln, approximate uses calculator"],
      common_mistakes: ["Using log without specifying base", "Sign errors in log laws", "Forgetting to divide by log(base) when solving", "Confusing log₁₀ and ln"],
      mark_scheme_notes: ["M1 method, A1 accuracy", "Exact answers: leave as ln() or log()"],
      time_allocation: "2 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Exponential & Log Grapher", type: "interactive", description: "Plot curves and adjust parameters" },
        { title: "Logarithm Calculator", type: "interactive", description: "Practice conversions and laws" },
        { title: "Real-World Decay Model", type: "visualization", description: "See exponential decay in carbon dating, drug metabolism" }
      ],
      real_world_applications: [
        "Finance: compound interest formulas",
        "Medicine: drug concentration over time (half-life calculations)",
        "Archaeology: carbon-14 dating (exponential decay model)",
        "Biology: population growth and carrying capacity"
      ],
      revision_checklist: ["I can graph exponentials and logarithms", "Solving exponentials using logs is clear", "Log laws automatic", "Can model real-world scenarios"]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mel1h1", model_answer: "3", mark_breakdown: ["1 mark for solving correctly"], examiner_tip: "3³ = 27, so x = 3" }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // ========================
  // GEOMETRY ADVANCED
  // ========================

  {
    id: "edexcel_maths_congruence_similarity",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Congruence, Similarity & Proof",
    topic_number: "G6",
    tier_level: "both",
    section_1_key_concepts: {
      overview: "Congruent shapes are identical (same size, shape). Similar shapes have same shape but different size (scaled). Understanding these enables proofs, scaling calculations, and architectural design.",
      key_terms: [
        { term: "Congruent", definition: "Identical shape and size (can be rotated/reflected)", importance: "Exact copies" },
        { term: "Similar", definition: "Same shape, different size (ratio of sides constant)", importance: "Scaled versions" },
        { term: "Scale Factor", definition: "Ratio between corresponding sides of similar shapes", importance: "Controls resizing" },
        { term: "Congruence Test", definition: "SSS, SAS, ASA, RHS—ways to prove two triangles match", importance: "Geometric proof" },
        { term: "Areas Ratio", definition: "If linear scale factor is k, area factor is k²", importance: "Scaling relationships" }
      ],
      learning_objectives: [
        "Identify congruent and similar shapes",
        "Use congruence tests (SSS, SAS, ASA, RHS) to prove congruence",
        "Calculate missing sides/angles using similarity",
        "Find area ratios from linear scale factors",
        "Use similarity in real problems (map scales, model building)"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Congruence Tests & Proof",
        content: "SSS (side-side-side): all three sides match → congruent. SAS (side-angle-side): two sides and included angle match → congruent. ASA (angle-side-angle): two angles and included side match → congruent. RHS (right-angle-hyp-side): right angle, hypotenuse, and one other side match (for right triangles) → congruent. AAS also works.",
        diagram_description: "Four side-by-side sets of triangles showing SSS, SAS, ASA, RHS tests with matching parts highlighted in color. Statement and conclusion for each.",
        key_points: ["SSS, SAS, ASA, RHS are sufficient to prove congruence", "AAA and ASS are NOT sufficient", "for right triangles, RHS is quickest", "Used for rigorous geometric proofs"]
      },
      {
        heading: "Similarity & Scale Factors",
        content: "Similar triangles: corresponding angles equal, corresponding sides in same ratio (scale factor). If scale factor is k, then all lengths scale by k, areas scale by k², volumes scale by k³. Example: if scale factor 2, then twice as long, four times area.",
        diagram_description: "Two similar triangles with ratios marked. Side a matches side 2a (scale factor 2). Area changes from A to 4A. Separate volume example if relevant.",
        key_points: ["Corresponding angles equal", "Corresponding sides in constant ratio k", "Area ratio = k²", "Volume ratio = k³"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Prove triangles ABC and DEF are congruent: AB = DE = 5cm, ∠BAC = ∠EDF = 40°, AC = DF = 6cm",
        step_by_step: [
          "Given: AB = DE, ∠BAC = ∠EDF, AC = DF",
          "This matches SAS (side-angle-side): two sides and included angle",
          "Therefore, triangle ABC ≅ triangle DEF (by SAS)"
        ],
        answer: "Congruent by SAS"
      },
      {
        question: "Triangle PQR is similar to XYZ with scale factor 3. If PQ = 4cm, find XY.",
        step_by_step: [
          "Scale factor k = 3 (PQR is 3 times bigger than XYZ)",
          "So XY = PQ/3 = 4/3 cm (or XY is smaller)",
          "Alternatively: if XYZ is larger, XY = 3 × 4 = 12cm (depends on which is original)"
        ],
        answer: "XY = 4/3 cm (if PQR is larger) OR XY = 12cm (if XYZ is larger; depends on problem intent)"
      }
    ],
    section_4_practice_questions: {
      foundation: [
        { id: "mcs1f1", question: "Are two squares with side 3cm and 3cm congruent or similar?", type: "short_answer", correct_answer: "Both (congruent implies similar)", explanation: "Congruent: same size. Also similar with k=1", marks: 1, difficulty: "foundation" },
        { id: "mcs1f2", question: "Two similar triangles have scale factor 2. If first has area 10cm², what's the second's area?", type: "short_answer", correct_answer: "40cm²", explanation: "Area scales by k² = 4, so 10 × 4 = 40", marks: 1, difficulty: "foundation" }
      ],
      higher: [
        { id: "mcs1h1", question: "Prove congruence using SSS or SAS: Triangle has sides 3, 4, 5. Another has 3, 4, 5. Are they congruent?", type: "short_answer", correct_answer: "Yes (by SSS)", explanation: "All three sides match", marks: 1, difficulty: "higher" },
        { id: "mcs1h2", question: "Similar rectangles: first is 6×4. Second has length 9. Find width of second", type: "calculation", correct_answer: "6", explanation: "Scale factor = 9/6 = 1.5, width = 4 × 1.5 = 6", marks: 2, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Prove congruent", meaning: "Use one of SSS, SAS, ASA, RHS, AAS" },
        { word: "Prove similar", meaning: "Show all angles equal or all sides in same ratio" }
      ],
      exam_tips: ["State which test you're using", "Mark equal sides/angles clearly", "Check correspondences in similarity", "Use scale factor for calculations"],
      common_mistakes: ["Using AAA (not sufficient for congruence)", "Forgetting included angle in SAS", "Confusing which ratio is scale factor", "Not showing full working"],
      mark_scheme_notes: ["M1 identify test, A1 correct application", "Similarity: must show angle equality OR side ratio"],
      time_allocation: "2-3 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Congruence Test Checker", type: "interactive", description: "Input triangle data, get congruence test result" },
        { title: "Similarity Explorer", type: "interactive", description: "Drag vertices and watch scale factor update" }
      ],
      real_world_applications: [
        "Architecture: scaled blueprints use similarity",
        "Map making: scale models represent real landscapes",
        "Photography: enlargement/reduction via similarity",
        "Engineering: prototype testing with scaled models"
      ],
      revision_checklist: [
        "I know SSS, SAS, ASA, RHS tests",
        "Can identify similar vs congruent",
        "Scale factor calculations automatic",
        "Area ratio = k² is clear"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mcs1f1", model_answer: "Both", mark_breakdown: ["1 mark for understanding congruence implies similarity"], examiner_tip: "Congruent ⟹ similar, but not vice versa" }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // ========================
  // MORE FOUNDATION TOPICS
  // ========================

  {
    id: "edexcel_maths_angles_parallel_lines",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Angles & Parallel Lines",
    topic_number: "G1",
    tier_level: "foundation",
    section_1_key_concepts: {
      overview: "Understanding angles (acute, right, obtuse, reflex) and angle relationships with parallel lines (corresponding, alternate, co-interior) is foundation for all geometry. Based on angle sum properties.",
      key_terms: [
        { term: "Acute Angle", definition: "0° < angle < 90°", importance: "Sharp angle" },
        { term: "Right Angle", definition: "Exactly 90°", importance: "Perpendicular" },
        { term: "Obtuse Angle", definition: "90° < angle < 180°", importance: "Wide angle" },
        { term: "Reflex Angle", definition: "180° < angle < 360°", importance: "More than straight line" },
        { term: "Corresponding Angles", definition: "Same position at parallel line intersections (equal)", importance: "Parallel line test" }
      ],
      learning_objectives: [
        "Classify angles by size",
        "Find missing angles using angle sum (triangle, quadrilateral, straight line)",
        "Apply parallel line rules (corresponding, alternate, co-interior)",
        "Identify angle relationships in diagrams",
        "Use angles in geometric proofs"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Angle Classification & Relationships",
        content: "Angles on straight line sum to 180°. Angles at a point sum to 360°. Angles in triangle sum to 180°. Angles in quadrilateral sum to 360°. Vertically opposite angles are equal. These are the foundation relationships.",
        diagram_description: "Visual showing angle types (acute, right, obtuse, reflex) with examples. Straight line showing angles summing to 180°. Point showing angles summing to 360°. Triangle and quad angle sums marked.",
        key_points: ["Straight line = 180°", "Full turn = 360°", "Triangle = 180°", "Quadrilateral = 360°"]
      },
      {
        heading: "Parallel Lines & Transversals",
        content: "When transversal crosses parallel lines: Corresponding angles equal (same position at each intersection). Alternate angles equal (opposite sides of transversal, between parallels). Co-interior angles sum to 180° (same side of transversal, between parallels). Converse also true: if angles match, lines are parallel.",
        diagram_description: "Ramp showing two parallel lines crossed by transversal. All corresponding angles marked same color (equal). All alternate angles marked different color (also equal). Co-interior angles sum to 180° shown.",
        key_points: [
          "Corresponding: same position → equal",
          "Alternate: opposite sides → equal",
          "Co-interior: same side → sum 180°",
          "Patterns help identify angle types"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Lines are parallel. If one corresponding angle is 65°, find all angles at each intersection",
        step_by_step: [
          "Corresponding angle = 65°",
          "All corresponding angles = 65°",
          "Vertically opposite = 65°",
          "Angles on straight line: 180° - 65° = 115°",
          "At each intersection: 65°, 115°, 65°, 115° (going around)"
        ],
        answer: "At each intersection: 65°, 115°, 65°, 115°"
      }
    ],
    section_4_practice_questions: {
      foundation: [
        { id: "mgp1f1", question: "Two angles on straight line. One is 70°. What's the other?", type: "short_answer", correct_answer: "110°", explanation: "Angles on line sum to 180°, so 180° - 70° = 110°", marks: 1, difficulty: "foundation" },
        { id: "mgp1f2", question: "Triangle has angles 50° and 60°. Find third angle", type: "short_answer", correct_answer: "70°", explanation: "Triangle angles sum to 180°, so 180° - 50° - 60° = 70°", marks: 1, difficulty: "foundation" },
        { id: "mgp1f3", question: "Parallel lines with transversal. One angle is 40°. What's alternate angle?", type: "short_answer", correct_answer: "40°", explanation: "Alternate angles equal when lines parallel", marks: 1, difficulty: "foundation" }
      ],
      higher: [
        { id: "mgp1h1", question: "Trapezoid with parallel sides. Two co-interior angles are 80° and x°. Find x", type: "short_answer", correct_answer: "100°", explanation: "Co-interior angles sum to 180°, so x = 180° - 80° = 100°", marks: 2, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Find angle", meaning: "Use angle sum properties or parallel line rules" },
        { word: "Give reason", meaning: "State which property (corresponding, etc.)" }
      ],
      exam_tips: ["Always give reason for each angle", "Mark equal angles clearly", "Identify parallel lines first", "Use angle sum properties"],
      common_mistakes: ["Confusing angle types", "Forgetting angle sum rules", "Misidentifying corresponding/alternate", "Not giving reasons"],
      mark_scheme_notes: ["A1 for angle, A1 for reason"],
      time_allocation: "1 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Angle Identifier App", type: "interactive", description: "Click angles in diagram to identify type" },
        { title: "Parallel Line Explorer", type: "interactive", description: "Adjust transversal angle and see all angles update" }
      ],
      real_world_applications: [
        "Architecture: right angles in buildings (perpendicular walls)",
        "Road design: parallel lanes, calculating exit angles",
        "Art: vanishing points using parallel line perspective"
      ],
      revision_checklist: [
        "I know angle classifications",
        "Angle sum rules automatic",
        "Parallel line angle relationships clear",
        "Can identify and name angle types in diagrams"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mgp1f1", model_answer: "110°", mark_breakdown: ["1 mark for sum to 180°"], examiner_tip: "Angles on straight line = 180°" }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export default SEED_MATHS_EXTENDED_2;
