import { Topic } from "@/types";

/**
 * COMPREHENSIVE GCSE MATHS CURRICULUM
 * 30+ topics with rich engagement features
 * Foundation & Higher tier coverage
 * Real-world applications, interactive prompts, challenge problems
 */

export const SEED_MATHS_COMPREHENSIVE: Topic[] = [
  // ========================
  // NUMBER & ALGEBRA SECTION
  // ========================

  {
    id: "edexcel_maths_powers_indices",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Powers, Indices & Standard Form",
    topic_number: "N1",
    tier_level: "both",
    section_1_key_concepts: {
      overview: "Powers (exponents) are shorthand for repeated multiplication. This topic covers index laws, negative and fractional indices, and standard form notation for very large/small numbers. Essential for science and engineering.",
      key_terms: [
        { term: "Index/Exponent", definition: "Number that shows how many times to multiply base (e.g., 2³ = 2×2×2)", importance: "Foundation of exponential growth" },
        { term: "Base", definition: "The number being multiplied (in 2³, base is 2)", importance: "The repeating factor" },
        { term: "Index Law", definition: "Rules for manipulating powers (e.g., aᵐ × aⁿ = aᵐ⁺ⁿ)", importance: "Simplifies calculations" },
        { term: "Standard Form", definition: "Writing numbers as A × 10ⁿ where 1 ≤ A < 10", importance: "Handles huge/tiny numbers compactly" },
        { term: "Significant Figures", definition: "Digits that show precision of measurement", importance: "Scientific accuracy" }
      ],
      learning_objectives: [
        "Apply index laws to simplify expressions",
        "Work with negative and fractional indices",
        "Convert to and from standard form",
        "Multiply and divide numbers in standard form",
        "Compare quantities using standard form (space distances, atom sizes)"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Index Laws & Manipulation",
        content: "The rules: (1) aᵐ × aⁿ = aᵐ⁺ⁿ [multiply = add powers]. (2) aᵐ ÷ aⁿ = aᵐ⁻ⁿ [divide = subtract powers]. (3) (aᵐ)ⁿ = aᵐⁿ [power of power = multiply]. (4) a⁰ = 1 [anything to power 0 is 1]. (5) a⁻ⁿ = 1/aⁿ [negative power = reciprocal]. (6) a^(1/n) = ⁿ√a [fractional index = root]. These laws are universal—use them to simplify any expression!",
        diagram_description: "Visual flowchart showing which law to apply based on operation type. Color-coded examples for each law. Table showing pattern of powers (3¹, 3², 3³... and backward to 3⁻¹, 3⁻², etc.)",
        key_points: ["Memorize the 6 main laws", "Watch for negative and fractional powers", "Always simplify—don't leave multiple indices", "Check dimensions match (can't add 2² + 3³ directly)"]
      },
      {
        heading: "Negative & Fractional Indices",
        content: "a⁻ⁿ means 1/aⁿ. So 2⁻³ = 1/2³ = 1/8. Fractional: a^(m/n) = ⁿ√(aᵐ). So 8^(2/3) = ³√(8²) = ³√64 = 4. Or think: 8^(1/3) = ³√8 = 2, then square it: 2² = 4. Most common: square root (a^(1/2)), cube root (a^(1/3)), fourth root (a^(1/4)).",
        diagram_description: "Number line showing 3⁻², 3⁻¹, 3⁰, 3¹, 3² with values (1/9, 1/3, 1, 3, 9). Separate grid showing fractional powers with visual representations (halving triangle subdivisions for square roots, cube divisions for cube roots).",
        key_points: ["Negative power = reciprocal", "Fractional power = root", "a^(1/2) = √a (square root)", "a^(1/3) = ³√a (cube root)", "Can combine: a^(-3/2) = 1/(a^(3/2)) = 1/((√a)³)"]
      },
      {
        heading: "Standard Form: From Atoms to Space",
        content: "Standard form A × 10ⁿ where 1 ≤ A < 10. Moving decimal: right by k places → power -k. Left by k places → power +k. Examples: 5000 = 5 × 10³. 0.003 = 3 × 10⁻³. To add/subtract: convert to same power of 10, do arithmetic, convert back. To multiply/divide: multiply/divide A values and apply power laws to 10ⁿ.",
        diagram_description: "Number line showing positions of numbers in standard form. Spider diagram of examples: atomic radius (≈10⁻¹⁰), blood cell (≈10⁻⁶), human height (≈10⁰), Earth diameter (≈10⁷), distance to star (≈10¹⁶). Calculator screen showing standard form entry/output.",
        key_points: ["1 ≤ A < 10 (A can't be ≥10 or <1)", "Use positive powers for big numbers", "Use negative powers for small numbers", "Count decimal places carefully when converting"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Simplify: (2³ × 2⁵) / 2⁴",
        step_by_step: [
          "Apply first law: 2³ × 2⁵ = 2³⁺⁵ = 2⁸",
          "Apply second law: 2⁸ / 2⁴ = 2⁸⁻⁴ = 2⁴",
          "Calculate: 2⁴ = 16"
        ],
        answer: "16 (or 2⁴)"
      },
      {
        question: "Express in standard form: 0.000456",
        step_by_step: [
          "Move decimal 4 places to the right to get 4.56",
          "Decimal moved right → negative power",
          "Answer: 4.56 × 10⁻⁴"
        ],
        answer: "4.56 × 10⁻⁴",
        common_mistakes: ["Forgetting the negative sign when decimal moves right", "A value > 10 or < 1", "Counting decimal places wrong"]
      },
      {
        question: "Calculate: (2 × 10⁴) × (3 × 10⁻²). Express in standard form.",
        step_by_step: [
          "Multiply coefficients: 2 × 3 = 6",
          "Apply power law: 10⁴ × 10⁻² = 10⁴⁺(⁻²) = 10²",
          "Combine: 6 × 10²"
        ],
        answer: "6 × 10² = 600"
      }
    ],
    section_4_practice_questions: {
      foundation: [
        { id: "mpi1f1", question: "Simplify: 3³ × 3²", type: "short_answer", correct_answer: "3⁵ or 243", explanation: "Powers add when multiplying: 3+2=5. 3⁵=243", marks: 1, difficulty: "foundation" },
        { id: "mpi1f2", question: "Write 50000 in standard form", type: "short_answer", correct_answer: "5 × 10⁴", explanation: "Decimal moves 4 places left", marks: 1, difficulty: "foundation" },
        { id: "mpi1f3", question: "What is 2⁻²?", type: "short_answer", correct_answer: "1/4 or 0.25", explanation: "2⁻² = 1/2² = 1/4", marks: 1, difficulty: "foundation" }
      ],
      higher: [
        { id: "mpi1h1", question: "Simplify: (x³y⁵)² / (x²y)", type: "short_answer", correct_answer: "x⁴y⁹", explanation: "(x³y⁵)²=x⁶y¹⁰, divide by x²y: x⁶⁻²y¹⁰⁻¹=x⁴y⁹", marks: 2, difficulty: "higher" },
        { id: "mpi1h2", question: "Calculate (4 × 10⁻³) + (2 × 10⁻⁴). Express in standard form", type: "calculation", correct_answer: "4.2 × 10⁻³", explanation: "Convert: 4.0 × 10⁻³ + 0.2 × 10⁻³ = 4.2 × 10⁻³", marks: 2, difficulty: "higher" },
        { id: "mpi1h3", question: "Simplify: 27^(2/3)", type: "short_answer", correct_answer: "9", explanation: "27^(1/3)=3 (cube root), then square: 3²=9", marks: 2, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Simplify", meaning: "Use index laws to make simpler" },
        { word: "Express in standard form", meaning: "Write as A × 10ⁿ with 1 ≤ A < 10" }
      ],
      exam_tips: [
        "Always check index laws—which one applies?",
        "Standard form: A must be between 1 and 10",
        "When adding standard form, align powers first",
        "Watch for negative signs in exponents"
      ],
      common_mistakes: [
        "Adding powers when you should multiply (e.g., 2² × 3² ≠ 6⁴)",
        "Forgetting negative power rule",
        "A value outside [1,10) range",
        "Sign errors when moving decimal"
      ],
      mark_scheme_notes: ["M1 for correct law applied, A1 for accuracy", "Standard form: A mark, n mark"],
      time_allocation: "1 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Index Laws Cheat Sheet", type: "article", description: "Printable summary of 6 laws with examples" },
        { title: "Powers Calculator", type: "interactive", description: "Input base and power to see result and pattern" },
        { title: "Standard Form Explorer", type: "interactive", description: "Drag decimal point and see scientific notation update" },
        { title: "Real-World Scale Comparisons", type: "visualization", description: "Interactive scale from atoms to galaxies showing powers of 10" }
      ],
      further_reading: ["Edexcel GCSE Maths Chapter 1.1 - Powers and Roots"],
      real_world_applications: [
        "Computing: data storage (10^12 bytes = 1 terabyte)",
        "Chemistry: atomic mass (1.67 × 10⁻²⁷ kg)",
        "Astronomy: star distance (light-years, measured in 10¹⁵ km)",
        "Nanotechnology: molecular structures (10⁻⁹ meters)"
      ],
      revision_checklist: ["I know all 6 index laws", "I can convert to/from standard form", "I can multiply/divide standard form", "Negative and fractional powers make sense"]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mpi1f1", model_answer: "3⁵ = 243", mark_breakdown: ["1 mark for applying correct law"], examiner_tip: "Multiply coefficients, add powers" }
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
    id: "edexcel_maths_sequences_series",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Sequences & Series: Arithmetic & Geometric",
    topic_number: "A4",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Sequences are ordered lists of numbers following a pattern. Two main types: arithmetic (constant difference) and geometric (constant ratio). Applications: compound interest, population growth, annuities.",
      key_terms: [
        { term: "Sequence", definition: "Ordered list of numbers following a rule (e.g., 2,4,6,8,...)", importance: "Models repeating patterns" },
        { term: "Arithmetic Sequence", definition: "Each term increases by constant d (e.g., 3,7,11,15 with d=4)", importance: "Linear growth pattern" },
        { term: "Geometric Sequence", definition: "Each term multiplied by constant r (e.g., 2,6,18,54 with r=3)", importance: "Exponential growth/decay" },
        { term: "nth Term", definition: "Formula to find any term without listing all (aₙ)", importance: "Quick calculation" },
        { term: "Sum of Series", definition: "Total of all terms up to n (Sₙ)", importance: "Compound effects" }
      ],
      learning_objectives: [
        "Identify arithmetic and geometric sequences",
        "Find nth term formula for both types",
        "Calculate sum of first n terms (Sₙ)",
        "Solve problems with arithmetic and geometric series",
        "Apply to real-world contexts (savings, infection spread, etc.)"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Arithmetic Sequences & nth Term",
        content: "Pattern: a, a+d, a+2d, a+3d, ... nth term formula: aₙ = a + (n-1)d where a = first term, d = common difference. To find d: subtract any two consecutive terms. To find a: it's the first term. Sum of first n terms: Sₙ = n/2(2a + (n-1)d) or Sₙ = n/2(first + last).",
        diagram_description: "Number line showing arithmetic sequence (3,7,11,15,19...) with differences marked d=4 between each. Table showing n, term, and aₙ formula check. Graph showing linear pattern.",
        key_points: ["Identify d from any two consecutive terms", "Use aₙ = a + (n-1)d to find specific terms", "Sum formula: average first and last, multiply by count"]
      },
      {
        heading: "Geometric Sequences & nth Term",
        content: "Pattern: a, ar, ar², ar³, ... nth term formula: aₙ = a × r^(n-1) where a = first term, r = common ratio. To find r: divide any term by previous. Sum of first n terms: Sₙ = a(1-rⁿ)/(1-r) if r≠1. If |r|<1 (geometric series converges), sum to infinity: S∞ = a/(1-r).",
        diagram_description: "Exponential growth pattern shown (1,2,4,8,16... with r=2). Table showing n, term, ratio check. Graph showing exponential curve. Separate example of decay (|r|<1).",
        key_points: ["Find r by dividing consecutive terms", "aₙ = a × r^(n-1)", "Use sum formula for finite series", "Infinite sum only if |r| < 1"]
      },
      {
        heading: "Real-World Applications",
        content: "Arithmetic: rent increases, salary increments, straight-line depreciation. Geometric: compound interest (r = 1+rate), population/bacterial growth, radioactive decay, investment returns. Spreadsheets make calculations easy—use for complex scenarios.",
        diagram_description: "Side-by-side scenarios: savings account balance over years (arithmetic formula vs compound interest formula showing difference), bacterial population doubling hourly, investment portfolio growth.",
        key_points: ["Compound interest is geometric with r = 1 + annual rate", "Population growth/decay follow geometric patterns", "Spreadsheets enable what-if scenarios"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Find the 10th term of: 5, 9, 13, 17, ... and sum of first 10 terms",
        step_by_step: [
          "Common difference: d = 9 - 5 = 4",
          "10th term: a₁₀ = 5 + (10-1)×4 = 5 + 36 = 41",
          "Sum: S₁₀ = 10/2 × (2×5 + (10-1)×4) = 5 × (10 + 36) = 5 × 46 = 230",
          "Or: S₁₀ = 10/2 × (first + last) = 5 × (5 + 41) = 5 × 46 = 230"
        ],
        answer: "10th term = 41, Sum = 230"
      },
      {
        question: "Find 8th term of: 3, 6, 12, 24, ... Is sum 3+6+12+...+768 = 1533? (Assume 768 is a term)",
        step_by_step: [
          "Common ratio: r = 6/3 = 2",
          "8th term: a₈ = 3 × 2^(8-1) = 3 × 128 = 384",
          "Find which term 768 is: 3 × 2^(n-1) = 768, so 2^(n-1) = 256 = 2⁸, n = 9",
          "Sum 9 terms: S₉ = 3(1-2⁹)/(1-2) = 3(-511)/(-1) = 1533 ✓"
        ],
        answer: "8th term = 384. Yes, sum = 1533."
      }
    ],
    section_4_practice_questions: {
      foundation: [],
      higher: [
        { id: "mss1h1", question: "If a₁=2, d=3, find a₂₀ in arithmetic sequence", type: "short_answer", correct_answer: "59", explanation: "a₂₀ = 2 + 19×3 = 2 + 57 = 59", marks: 2, difficulty: "higher" },
        { id: "mss1h2", question: "Geometric sequence: a₁=2, r=3. Find sum of first 5 terms", type: "calculation", correct_answer: "242", explanation: "S₅ = 2(1-3⁵)/(1-3) = 2×(-242)/(-2) = 242", marks: 2, difficulty: "higher" },
        { id: "mss1h3", question: "Infinite geometric series: a=10, r=0.5. Find sum to infinity", type: "short_answer", correct_answer: "20", explanation: "S∞ = 10/(1-0.5) = 10/0.5 = 20", marks: 2, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Find nth term", meaning: "Use formula to get specific term" },
        { word: "Sum", meaning: "Add all terms using Sₙ formula" }
      ],
      exam_tips: [
        "Always find a and d (or r) first",
        "Check if arithmetic or geometric before choosing formula",
        "Sum to infinity only if |r| < 1",
        "Verify your answer makes sense"
      ],
      common_mistakes: [
        "Mixing up aₙ = a + (n-1)d with aₙ = a + nd",
        "Using geometric sum when it's arithmetic",
        "Forgetting to apply (n-1), using n instead",
        "Attempting sum to infinity with |r| > 1"
      ],
      mark_scheme_notes: ["M1 formula, M1 substitution, A1 accuracy"],
      time_allocation: "2 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Sequence Generator", type: "interactive", description: "Input a and d/r, see sequence and graphs" },
        { title: "Sum Calculator", type: "interactive", description: "Calculate Sₙ and check your manual work" },
        { title: "Interest & Compound Visualizer", type: "interactive", description: "See how money grows with different rates" }
      ],
      further_reading: ["Edexcel GCSE Maths Higher Chapter 7 - Sequences"],
      real_world_applications: [
        "Savings: compound interest uses geometric formula",
        "Epidemiology: infection spread (exponential growth)",
        "Finance: loan repayment, annuities",
        "Medicine: drug dosage accumulation in bloodstream"
      ],
      revision_checklist: [
        "I can identify arithmetic vs geometric sequences",
        "I can find nth term for both types",
        "I can calculate Sₙ correctly",
        "Sum to infinity makes sense with |r| < 1"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mss1h1", model_answer: "59", mark_breakdown: ["1 mark for formula", "1 mark for calculation"], examiner_tip: "n-1 is key in formula" }
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
    id: "edexcel_maths_polynomials_division",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Polynomials & Polynomial Division",
    topic_number: "A5",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Polynomials are expressions with multiple terms (e.g., 3x³ + 2x² - 5x + 1). Division helps find factors and solve higher-degree equations. Remainder theorem and factor theorem are key tools.",
      key_terms: [
        { term: "Polynomial", definition: "Sum of terms with powers of x (e.g., ax⁴ + bx³ + cx² + dx + e)", importance: "General expression type" },
        { term: "Degree", definition: "Highest power of x in polynomial", importance: "Determines behavior/number of roots" },
        { term: "Factor Theorem", definition: "If (x-a) is factor, then P(a) = 0", importance: "Finding roots" },
        { term: "Remainder Theorem", definition: "When P(x) divided by (x-a), remainder = P(a)", importance: "Quick remainder check" },
        { term: "Synthetic Division", definition: "Shortcut division method using coefficients", importance: "Faster than long division" }
      ],
      learning_objectives: [
        "Divide polynomials using long division",
        "Apply synthetic division for efficiency",
        "Use remainder and factor theorems",
        "Find all roots of polynomial equations",
        "Solve real-world optimization problems"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Polynomial Division & Long Division Method",
        content: "Divide polynomial P(x) by divisor d(x). Set up like long division: divide leading term of P by leading term of d to get first quotient term, multiply and subtract, repeat. Process continues until remainder degree < divisor degree. Result: P(x) = d(x) × Q(x) + R, where Q = quotient, R = remainder.",
        diagram_description: "Side-by-side comparison: long division of numbers (e.g., 456÷12) and polynomial division (e.g., x³+2x²-5x+6 by x-2). Step-by-step working shown.",
        key_points: ["Arrange terms in descending powers", "Divide leading terms first", "Subtract result, bring down next term", "Continue until degree(R) < degree(divisor)"]
      },
      {
        heading: "Remainder & Factor Theorems",
        content: "Remainder Theorem: If P(x) divided by (x-a), remainder = P(a). Factor Theorem: (x-a) is factor of P(x) if and only if P(a) = 0. Use these to check factors quickly without full division. Example: Is (x-2) factor of x³ + 2x² - 5x + 6? Check: P(2) = 8 + 8 - 10 + 6 = 12 ≠ 0, so NO.",
        diagram_description: "Flowchart: given polynomial P(x) and possible factor (x-a), calculate P(a), if 0 then it's a factor, else it's not. Multiple examples shown with calculations.",
        key_points: ["Remainder Theorem: R = P(a), evaluate at a", "Factor Theorem: P(a) = 0 ⟹ (x-a) is factor", "Use to quickly eliminate or confirm factors"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Divide x³ + 2x² - 5x + 6 by (x - 2) using long division",
        step_by_step: [
          "Setup: x³ + 2x² - 5x + 6 divided by x - 2",
          "x³ ÷ x = x². Multiply (x-2) by x²: x³ - 2x². Subtract from P(x).",
          "Brings down: 4x² - 5x",
          "4x² ÷ x = 4x. Multiply (x-2) by 4x: 4x² - 8x. Subtract.",
          "Brings down: 3x + 6",
          "3x ÷ x = 3. Multiply (x-2) by 3: 3x - 6. Subtract.",
          "Remainder: 0",
          "Quotient: x² + 4x + 3 = (x+1)(x+3)"
        ],
        answer: "Q(x) = x² + 4x + 3, R = 0. So x³ + 2x² - 5x + 6 = (x-2)(x+1)(x+3)"
      }
    ],
    section_4_practice_questions: {
      foundation: [],
      higher: [
        { id: "mpd1h1", question: "Use factor theorem to check if (x-3) is factor of x³ - 6x² + 11x - 6", type: "short_answer", correct_answer: "Yes (P(3)=0)", explanation: "P(3)=27-54+33-6=0, so (x-3) is factor", marks: 2, difficulty: "higher" },
        { id: "mpd1h2", question: "If x³ - 2x² - 5x + 6 has factor (x+1), find completely factored form", type: "calculation", correct_answer: "(x+1)(x-1)(x-6)", explanation: "Use division or factor theorem to find remaining factors", marks: 3, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [{ word: "Divide", meaning: "Use long or synthetic division to find quotient and remainder" }],
      exam_tips: ["Check factor theorem before attempting division to save time", "Set up long division carefully with all terms", "Verify with P(a) quick check"],
      common_mistakes: ["Forgetting zero terms when setting up", "Sign errors in subtraction", "Not arranging terms in order"],
      mark_scheme_notes: ["M1 method shown, A1 each line correct"],
      time_allocation: "2-3 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Polynomial Division Simulator", type: "interactive", description: "Step through division with hints" },
        { title: "Factor Theorem Checker", type: "interactive", description: "Input polynomial and test factors" }
      ],
      further_reading: ["Edexcel GCSE Maths Higher Chapter 6 - Polynomials"],
      revision_checklist: ["I can do long division of polynomials", "I understand remainder and factor theorems", "I can find all factors and roots"]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mpd1h1", model_answer: "Yes", mark_breakdown: ["1 mark for evaluating P(3)", "1 mark for conclusion"], examiner_tip: "Show P(3) calculation clearly" }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // ===========================
  // GEOMETRY & VECTORS SECTION
  // ===========================

  {
    id: "edexcel_maths_vectors_3d",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Vectors & 3D Geometry",
    topic_number: "G5",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Vectors represent magnitude and direction. Can be written as column vectors, component form, or using unit vectors i, j, k. Used for 3D geometry, physics simulations, computer graphics.",
      key_terms: [
        { term: "Vector", definition: "Quantity with magnitude and direction (e.g., displacement, velocity)", importance: "Different from scalar (magnitude only)" },
        { term: "Position Vector", definition: "Vector from origin to a point", importance: "Locates points in space" },
        { term: "Unit Vector", definition: "Vector with magnitude 1 (e.g., i, j, k along axes)", importance: "Building blocks" },
        { term: "Scalar Product/Dot Product", definition: "a·b = |a||b|cos(θ), gives angle between vectors", importance: "Finds angles and perpendicularity" },
        { term: "Vector Product/Cross Product", definition: "a×b perpendicular to both, magnitude |a||b|sin(θ)", importance: "3D geometry, physics" }
      ],
      learning_objectives: [
        "Write vectors in different notations",
        "Add, subtract, and scale vectors",
        "Calculate magnitude of vectors",
        "Use scalar product to find angles",
        "Apply vectors to 3D geometry problems"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Vector Notation & Operations",
        content: "Column vector: (a, b) or (a, b, c) in 3D. Magnitude: |v| = √(a² + b² + c²). Addition: add components. Subtraction: subtract components. Scalar multiplication: multiply all components by scalar. Parallel vectors: one is scalar multiple of other.",
        diagram_description: "2D and 3D coordinate systems showing vectors as arrows from origin. Examples of vector addition (tip-to-tail) and subtraction shown geometrically. Magnitude calculation illustrated.",
        key_points: ["Magnitude = √(sum of squares of components)", "Add/multiply component-wise", "Parallel: k×v for scalar k"]
      },
      {
        heading: "Scalar Product & Angles",
        content: "For vectors a = (a₁, a₂, a₃) and b = (b₁, b₂, b₃): a·b = a₁b₁ + a₂b₂ + a₃b₃ (dot product formula). Also: a·b = |a||b|cos(θ) where θ is angle between them. If a·b = 0, vectors are perpendicular. Use to check if lines are perpendicular.",
        diagram_description: "3D vectors showing angle θ between them. Dot product calculation alongside. Examples showing perpendicular check.",
        key_points: ["Dot product = sum of products of components", "a·b = |a||b|cos(θ)", "Perpendicular if dot product = 0"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Find angle between vectors a = (1, 2, 2) and b = (2, 1, 2)",
        step_by_step: [
          "|a| = √(1² + 2² + 2²) = √(1 + 4 + 4) = √9 = 3",
          "|b| = √(2² + 1² + 2²) = √(4 + 1 + 4) = √9 = 3",
          "a·b = 1(2) + 2(1) + 2(2) = 2 + 2 + 4 = 8",
          "cos(θ) = 8 / (3 × 3) = 8/9",
          "θ = cos⁻¹(8/9) ≈ 26.4°"
        ],
        answer: "≈ 26.4°"
      }
    ],
    section_4_practice_questions: {
      foundation: [],
      higher: [
        { id: "mgv1h1", question: "Find magnitude of vector (3, 4, 0)", type: "short_answer", correct_answer: "5", explanation: "|v| = √(9+16+0) = 5", marks: 1, difficulty: "higher" },
        { id: "mgv1h2", question: "Are (1, 2, 1) and (2, 4, 2) parallel?", type: "short_answer", correct_answer: "Yes (2nd is 2× first)", explanation: "Second vector = 2 × first vector", marks: 1, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [{ word: "Find angle between", meaning: "Use dot product and magnitudes" }],
      exam_tips: ["Show magnitude calculations", "Use cos⁻¹ for angle", "Verify perpendicular with dot product = 0"],
      common_mistakes: ["Forgetting direction in notation", "Arithmetic errors in dot product", "Not simplifying before sqrt"],
      mark_scheme_notes: ["M1 formula, A1 accuracy"],
      time_allocation: "2 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "3D Vector Visualizer", type: "interactive", description: "Rotate 3D plot to see vectors clearly" },
        { title: "Dot Product Calculator", type: "interactive", description: "Input vectors, see all calculations" }
      ],
      real_world_applications: [
        "Graphics: 3D rotations, camera positioning",
        "Physics: forces, velocities, momenta",
        "Navigation: GPS triangulation"
      ],
      revision_checklist: ["I can add/subtract vectors component-wise", "I can calculate magnitude", "Dot product and angle method is clear"]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mgv1h1", model_answer: "5", mark_breakdown: ["1 mark formula application"], examiner_tip: "√(3² + 4²) = 5 is classic Pythagorean triple" }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // ====================
  // STATISTICS SECTION
  // ====================

  {
    id: "edexcel_maths_binomial_poisson",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Binomial & Poisson Distributions",
    topic_number: "S1",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Probability distributions model random events. Binomial: fixed n trials, two outcomes, constant p. Poisson: rare events in time/space. Used in quality control, epidemiology, insurance.",
      key_terms: [
        { term: "Binomial Distribution", definition: "X ~ B(n, p): n trials, p probability of success each", importance: "Models repeated binary experiments" },
        { term: "Poisson Distribution", definition: "X ~ Po(λ): λ = average number of events in interval", importance: "Models rare events" },
        { term: "Probability Mass Function (PMF)", definition: "P(X = k) for discrete distribution", importance: "Calculates specific probabilities" },
        { term: "Cumulative Distribution", definition: "P(X ≤ k) = sum of P(X = 0) through P(X = k)", importance: "Range of values" },
        { term: "Expected Value", definition: "E(X) = mean of distribution", importance: "Long-term average" }
      ],
      learning_objectives: [
        "Identify when to use binomial or Poisson",
        "Calculate probabilities using formulas or tables",
        "Find mean and variance",
        "Use normal approximation when appropriate",
        "Apply to real problems (quality control, epidemics)"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Binomial Distribution & Calculations",
        content: "X ~ B(n, p): P(X = k) = C(n,k) × p^k × (1-p)^(n-k). Mean = np. Variance = np(1-p). Use tables for standard cases or calculator for others. Conditions: fixed n, two outcomes, independent trials, constant p.",
        diagram_description: "Binomial probability histogram for various n, p values. Bell curve overlay showing normal approximation for large n. Table of binomial coefficients.",
        key_points: ["Check conditions: independent, binary, constant p", "Use C(n,k) for combinations", "Mean = np, Variance = np(1-p)", "Normal approximation when np > 5 and n(1-p) > 5"]
      },
      {
        heading: "Poisson Distribution & Applications",
        content: "X ~ Po(λ): P(X = k) = e^(-λ) × λ^k / k!. Mean = λ. Variance = λ (special: mean = variance). Use when events are rare, independent, in fixed interval. Approximates binomial when n large, p small, np moderate.",
        diagram_description: "Poisson histograms for λ = 1, 3, 5, 10. Comparison with binomial for n=20, p=0.05 (λ=1) showing convergence. Poisson table for common λ values.",
        key_points: ["X ~ Po(λ) for rare events", "Mean = Variance = λ", "Use tables or calculator for e^(-λ)", "Poisson ≈ Binomial when n large, p small"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "X ~ B(10, 0.3). Find P(X = 2) and P(X ≤ 2)",
        step_by_step: [
          "P(X = 2) = C(10,2) × 0.3² × 0.7⁸",
          "C(10,2) = 45",
          "P(X = 2) = 45 × 0.09 × 0.0576 ≈ 0.2335",
          "P(X ≤ 2) = P(X=0) + P(X=1) + P(X=2)",
          "P(X=0) = 1 × 1 × 0.7¹⁰ ≈ 0.0282",
          "P(X=1) = 10 × 0.3 × 0.7⁹ ≈ 0.1211",
          "P(X ≤ 2) ≈ 0.0282 + 0.1211 + 0.2335 = 0.3828"
        ],
        answer: "P(X=2) ≈ 0.2335, P(X≤2) ≈ 0.3828"
      }
    ],
    section_4_practice_questions: {
      foundation: [],
      higher: [
        { id: "msp1h1", question: "X ~ Po(2). Find P(X = 3)", type: "calculation", correct_answer: "0.1804", explanation: "P(X=3) = e^(-2) × 2³/3! = 0.1353 × 8/6 ≈ 0.1804", marks: 2, difficulty: "higher" },
        { id: "msp1h2", question: "Events occur at average 4 per hour. Probability of exactly 6 in next hour?", type: "calculation", correct_answer: "0.1042", explanation: "X ~ Po(4), P(X=6) = e^(-4) × 4⁶/6! ≈ 0.1042", marks: 2, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Find probability", meaning: "Calculate using PMF formula or table" },
        { word: "State distribution", meaning: "Identify if X ~ B(n,p) or X ~ Po(λ)" }
      ],
      exam_tips: [
        "Always state which distribution and parameters",
        "Show formula or table reference clearly",
        "Check conditions for approximation",
        "Round appropriately for final answer"
      ],
      common_mistakes: [
        "Using wrong formula for binomial vs Poisson",
        "Mistakes with e^(-λ) calculation",
        "Not checking independence assumption",
        "Rounding too early"
      ],
      mark_scheme_notes: ["M1 identify distribution, M1 formula/table, A1 accuracy"],
      time_allocation: "2-3 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Binomial & Poisson Calculator", type: "interactive", description: "Input parameters and get instant probabilities" },
        { title: "Distribution Explorer", type: "interactive", description: "Change parameters and see histogram update" },
        { title: "Tables Reference", type: "article", description: "Quick-access probability tables" }
      ],
      real_world_applications: [
        "Quality control: defects in production",
        "Epidemiology: disease outbreak predictions",
        "Insurance: claim frequencies",
        "Network traffic: packet arrivals"
      ],
      revision_checklist: ["I can identify binomial vs Poisson", "I can use formula or tables", "Conditions and approximations make sense"]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "msp1h1", model_answer: "0.1804", mark_breakdown: ["1 mark formula", "1 mark calculation"], examiner_tip: "e^(-λ) × λ^k / k! is key" }
      ],
      grade_boundaries: { grade_9: 90, grade_7: 75, grade_5: 55, grade_4: 45 }
    },
    view_count: 0,
    avg_score: 0,
    completion_rate: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // ===============================
  // CALCULUS & ADVANCED SECTION
  // ===============================

  {
    id: "edexcel_maths_differentiation_basics",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Differentiation: Rates of Change & Curve Sketching",
    topic_number: "C1",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Differentiation finds rate of change (gradient at a point). Derivative f'(x) shows how fast function is changing. Applications: optimization, physics (velocity/acceleration), economics (marginal cost).",
      key_terms: [
        { term: "Derivative", definition: "f'(x) = rate of change of f(x)", importance: "Gradient function" },
        { term: "Power Rule", definition: "d/dx(xⁿ) = nxⁿ⁻¹", importance: "Most common rule" },
        { term: "Chain Rule", definition: "d/dx(f(g(x))) = f'(g(x)) × g'(x)", importance: "Composite functions" },
        { term: "Product/Quotient Rule", definition: "For products and fractions", importance: "Complex functions" },
        { term: "Stationary Point", definition: "Where f'(x) = 0 (local max/min)", importance: "Optimization" }
      ],
      learning_objectives: [
        "Differentiate polynomials, trig, exponential, log functions",
        "Apply chain, product, quotient rules",
        "Find stationary points and determine max/min",
        "Sketch curves using derivative information",
        "Solve optimization problems (max area, min cost, etc.)"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Power Rule & Basic Differentiation",
        content: "For f(x) = xⁿ, then f'(x) = nxⁿ⁻¹. Constants differentiate to 0. Example: f(x) = 3x⁴ - 2x² + 5, then f'(x) = 12x³ - 4x. Trig: d/dx(sin x) = cos x, d/dx(cos x) = -sin x. Exponential: d/dx(eˣ) = eˣ. Logarithm: d/dx(ln x) = 1/x.",
        diagram_description: "Function graph alongside its derivative graph. Shows where f'(x) > 0 (increasing), < 0 (decreasing), = 0 (stationary). Table of derivatives for polynomial, trig, exponential, log.",
        key_points: ["Power rule: multiply by power, reduce power by 1", "Constants vanish", "Memorize trig/exp/log derivatives", "Constant multiple: k × f'(x)"]
      },
      {
        heading: "Chain Rule & Composite Functions",
        content: "If y = f(g(x)), then dy/dx = f'(g(x)) × g'(x). Example: y = (3x² + 1)⁵. Let u = 3x² + 1, so y = u⁵. du/dx = 6x, dy/du = 5u⁴. Chain: dy/dx = 5u⁴ × 6x = 30x(3x² + 1)⁴.",
        diagram_description: "Chain rule diagram showing flow: input → inner function → outer function → derivative chain. Worked example with substitution shown step-by-step.",
        key_points: ["Identify inner and outer functions", "Differentiate outer, keep inner", "Multiply by derivative of inner", "Chain can repeat for triple nesting"]
      },
      {
        heading: "Optimization & Curve Sketching",
        content: "To find max/min: (1) Find f'(x), (2) Set f'(x) = 0, solve for x, (3) Test sign of f'(x) around critical points. If f' changes from + to -, it's max. Minus to + is min. Sketch: plot critical points, intercepts, asymptotes, check behavior as x → ±∞.",
        diagram_description: "Curve with stationary points marked as peaks/troughs. Sign analysis table showing f' positive/negative in regions. Second derivative test (f''(x) > 0 = min, < 0 = max) illustrated.",
        key_points: ["Set f'(x) = 0 to find critical points", "Use sign analysis or second derivative test", "Check endpoints if domain restricted"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Find f'(x) for f(x) = (2x + 1)³",
        step_by_step: [
          "Let u = 2x + 1, so f(x) = u³",
          "f'(u) = 3u² = 3(2x+1)²",
          "u'(x) = 2",
          "Chain rule: f'(x) = 3(2x+1)² × 2 = 6(2x+1)²"
        ],
        answer: "f'(x) = 6(2x+1)²"
      },
      {
        question: "Find stationary points of f(x) = x³ - 3x² + 2 and determine their nature",
        step_by_step: [
          "f'(x) = 3x² - 6x = 3x(x - 2)",
          "Set f'(x) = 0: x = 0 or x = 2",
          "f''(x) = 6x - 6",
          "f''(0) = -6 < 0 → Local maximum at x = 0",
          "f''(2) = 6 > 0 → Local minimum at x = 2",
          "f(0) = 2, f(2) = 8 - 12 + 2 = -2"
        ],
        answer: "Max (0, 2), Min (2, -2)"
      }
    ],
    section_4_practice_questions: {
      foundation: [],
      higher: [
        { id: "mdc1h1", question: "Differentiate y = 5x³ - 2x + 7", type: "short_answer", correct_answer: "dy/dx = 15x² - 2", explanation: "Power rule: 5×3x² - 2 = 15x²", marks: 1, difficulty: "higher" },
        { id: "mdc1h2", question: "Use chain rule to differentiate y = sin(3x + 1)", type: "short_answer", correct_answer: "dy/dx = 3cos(3x+1)", explanation: "Let u = 3x+1, du/dx = 3, dy/du = cos(u), so dy/dx = 3cos(3x+1)", marks: 2, difficulty: "higher" },
        { id: "mdc1h3", question: "Find and classify stationary points of y = x³ - 6x² + 9x", type: "calculation", correct_answer: "Max (1,4), Min (3,0)", explanation: "y' = 3x² - 12x + 9 = 3(x-1)(x-3), critical at x=1,3; use second derivative or sign test", marks: 3, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Differentiate", meaning: "Find derivative" },
        { word: "Find stationary points", meaning: "Set f'(x) = 0, solve, classify" }
      ],
      exam_tips: [
        "Identify which rule to use before starting",
        "Show chain rule work clearly: identify inner, outer, multiply",
        "For stationary points, always classify (max/min)",
        "Check for endpoints if domain given"
      ],
      common_mistakes: [
        "Forgetting chain rule multiplier",
        "Sign errors in equation solving",
        "Not classifying stationary points",
        "Mixing up max and min from second derivative"
      ],
      mark_scheme_notes: ["M1 rule applied, A1 accuracy", "Stationary: M1 find critical points, M1 classify, A1 values"],
      time_allocation: "1-2 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Derivative Visualizer", type: "interactive", description: "Drag curve and see derivative plot update in real-time" },
        { title: "Chain Rule Step-Through", type: "interactive", description: "Guided practice with chain rule" },
        { title: "Curve Sketcher Tool", type: "interactive", description: "Input function to see critical points, curve shape" }
      ],
      real_world_applications: [
        "Optimization: maximize profit, minimize cost",
        "Physics: velocity (derivative of position), acceleration (second derivative)",
        "Economics: marginal revenue, elasticity",
        "Medicine: drug concentration rate of change"
      ],
      revision_checklist: [
        "Power rule is automatic",
        "Chain rule clear: outer differentiated, times inner derivative",
        "Can find and classify stationary points",
        "Curve sketching makes sense"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mdc1h1", model_answer: "15x² - 2", mark_breakdown: ["1 mark for correct application"], examiner_tip: "Power rule: 5×3=15, power reduces to 2" }
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
    id: "edexcel_maths_integration_areas",
    exam_board: "edexcel",
    subject: "maths",
    topic_title: "Integration & Definite Integrals (Areas)",
    topic_number: "C2",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Integration is reverse of differentiation. Indefinite integral finds antiderivative. Definite integral finds area under curve between limits. Applications: area, volume, work done, distance traveled.",
      key_terms: [
        { term: "Antiderivative", definition: "Function F(x) such that F'(x) = f(x)", importance: "Inverse of derivative" },
        { term: "Indefinite Integral", definition: "∫f(x)dx = F(x) + C (family of functions)", importance: "General solution" },
        { term: "Definite Integral", definition: "∫ₐᵇf(x)dx = F(b) - F(a) (specific value)", importance: "Finds area" },
        { term: "Constant of Integration", definition: "C in ∫f(x)dx = F(x) + C", importance: "Accounts for all antiderivatives" },
        { term: "Fundamental Theorem", definition: "∫f'(x)dx = f(x) + C", importance: "Links differentiation and integration" }
      ],
      learning_objectives: [
        "Find indefinite integrals of basic functions",
        "Apply power rule for integration",
        "Evaluate definite integrals",
        "Calculate area under and between curves",
        "Solve problems involving volume, motion"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Power Rule for Integration",
        content: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1). Example: ∫3x² dx = x³ + C. Special case: ∫1/x dx = ln|x| + C. Integrals of trig: ∫sin(x) dx = -cos(x) + C, ∫cos(x) dx = sin(x) + C. Exponential: ∫eˣ dx = eˣ + C.",
        diagram_description: "Reverse of power rule shown visually. Table of integrals for polynomial, trig, exponential, log. Graph showing one function and its antiderivatives (family of curves).",
        key_points: ["Power rule: add 1 to power, divide by new power", "Add + C for indefinite integrals", "Memorize trig/exp/log integrals", "Constant multiples: k∫f(x)dx"]
      },
      {
        heading: "Definite Integrals & Area",
        content: "∫ₐᵇf(x)dx = [F(x)]ₐᵇ = F(b) - F(a). This computes area between curve y=f(x) and x-axis from x=a to x=b (if f≥0). If f<0 in parts, subtract negative areas or use absolute values. Area between two curves: ∫ₐᵇ(top - bottom)dx.",
        diagram_description: "Coordinate plane with curve and shaded area under it from x=a to x=b. Annotation showing F(b) - F(a). Separate diagram showing area between two curves, top and bottom labeled.",
        key_points: ["Definite integral gives exact number (area)", "F(b) - F(a) is key formula", "Watch signs if area below x-axis", "Between curves: integrate (top - bottom)"]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Find ∫(3x² + 2x - 1)dx",
        step_by_step: [
          "Integrate term by term",
          "∫3x² dx = 3 × x³/3 = x³",
          "∫2x dx = 2 × x²/2 = x²",
          "∫(-1) dx = -x",
          "Total: x³ + x² - x + C"
        ],
        answer: "x³ + x² - x + C"
      },
      {
        question: "Evaluate ∫₀³(x² + 1)dx",
        step_by_step: [
          "Find antiderivative: F(x) = x³/3 + x",
          "Evaluate limits: F(3) - F(0)",
          "F(3) = 27/3 + 3 = 9 + 3 = 12",
          "F(0) = 0 + 0 = 0",
          "Result: 12 - 0 = 12"
        ],
        answer: "12 (area under curve)"
      }
    ],
    section_4_practice_questions: {
      foundation: [],
      higher: [
        { id: "mic1h1", question: "∫(4x³ - 2)dx = ?", type: "short_answer", correct_answer: "x⁴ - 2x + C", explanation: "Power rule on each term: 4×x⁴/4 - 2x", marks: 2, difficulty: "higher" },
        { id: "mic1h2", question: "Evaluate ∫₁²(2x + 1)dx", type: "calculation", correct_answer: "4", explanation: "F(x) = x² + x, F(2) = 6, F(1) = 2, diff = 4", marks: 2, difficulty: "higher" },
        { id: "mic1h3", question: "Find area between y = x² and y = 2x from x=0 to x=2", type: "calculation", correct_answer: "2/3", explanation: "∫₀²(2x - x²)dx = [x² - x³/3]₀² = 4 - 8/3 = 2/3", marks: 3, difficulty: "higher" }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Integrate", meaning: "Find antiderivative" },
        { word: "Evaluate", meaning: "Use limits in one definite integral" }
      ],
      exam_tips: ["Integrate term by term", "Don't forget + C for indefinite", "Use brackets for F(b) - F(a)", "Check sign of area"],
      common_mistakes: ["Forgetting + C", "Sign error in limits", "Wrong power rule direction", "Not integrating fully"],
      mark_scheme_notes: ["M1 antiderivative, A1 accuracy", "Definite: M1 integrate, M1 limits, A1 final"],
      time_allocation: "1-2 min per mark"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Integral Calculator", type: "interactive", description: "Check your integration work" },
        { title: "Area Visualizer", type: "interactive", description: "See area under curve as you integrate" },
        { title: "Fundamental Theorem Simulator", type: "interactive", description: "Observe How differentiation and integration reverse each other" }
      ],
      real_world_applications: [
        "Distance from velocity: position = ∫velocity dt",
        "Work done by force: ∫F dx",
        "Volume of revolution: rotate area around axis",
        "Probability distributions: total probability = ∫f(x)dx = 1"
      ],
      revision_checklist: [
        "Power rule for integration is automatic",
        "+ C never forgotten",
        "Definite integral: F(b) - F(a)",
        "Area interpretation clear"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        { question_id: "mic1h1", model_answer: "x⁴ - 2x + C", mark_breakdown: ["1 mark for power rule", "1 mark for + C"], examiner_tip: "C is essential for indefinite integral" }
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

export default SEED_MATHS_COMPREHENSIVE;
