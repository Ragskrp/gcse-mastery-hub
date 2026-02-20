import { Topic } from "@/types";

export const SEED_TOPICS_COMPUTER_SCIENCE_EXTENDED: Topic[] = [
  {
    id: "aqa_computer_science_ai_machine_learning",
    exam_board: "aqa",
    subject: "computer_science",
    topic_title: "Artificial Intelligence & Machine Learning",
    topic_number: "7",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Explore AI fundamentals: machine learning algorithms, neural networks, deep learning, supervised/unsupervised learning, practical applications (recognition, prediction), ethical concerns (bias, privacy, autonomy).",
      key_terms: [
        { term: "Machine Learning", definition: "Algorithms learning patterns from data without explicit programming", importance: "Powers modern AI applications across industries" },
        { term: "Neural Network", definition: "Computational model inspired by biological neurons; layers of interconnected nodes", importance: "Foundation of deep learning; enables complex pattern recognition" },
        { term: "Training Data", definition: "Dataset used to teach algorithms patterns and make predictions", importance: "Quality/quantity directly impacts model performance; bias in data causes model bias" },
        { term: "Overfitting", definition: "Model memorizing training data rather than learning generalizable patterns", importance: "Common problem limiting model effectiveness on new data" }
      ],
      learning_objectives: [
        "Understand machine learning algorithms and approaches",
        "Explain neural networks and deep learning",
        "Analyze AI applications in real-world systems",
        "Evaluate ethical challenges (bias, privacy, job displacement)",
        "Discuss AI safety and alignment concerns",
        "Consider future of AI in society"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Machine Learning: Types and Algorithms",
        content: "Supervised learning: trained on labeled data to predict outputs (classification, regression). Examples: email spam detection, medical diagnosis. Unsupervised learning: finds patterns in unlabeled data (clustering, dimensionality reduction). Examples: customer segmentation, anomaly detection. Reinforcement learning: learns through rewards/penalties; agents optimize behavior. Examples: game AI, robotics. Common algorithms: decision trees, random forests, support vector machines, k-means clustering. Deep learning: neural networks with many layers enabling complex pattern recognition. Trade-offs: simpler algorithms interpretable but less accurate; complex models accurate but 'black box'.",
        key_points: [
          "Supervised vs unsupervised vs reinforcement learning approaches",
          "Different algorithms suit different problems",
          "Deep learning powerful but less interpretable",
          "Training requires substantial clean data",
          "Computational cost increases with model complexity"
        ]
      },
      {
        heading: "Neural Networks & Deep Learning",
        content: "Neural networks mimic brain structure: neurons connected in layers (input, hidden, output). Weights adjusted during training to minimize prediction error. Activation functions enable non-linear learning. Backpropagation algorithm enables efficient training. Deep learning: networks with many hidden layers. Convolutional neural networks (CNNs): effective for image recognition; use filters to detect features. Recurrent neural networks (RNNs): process sequential data; maintain memory of previous inputs. Transformers: newest architecture enabling self-attention; powers GPT, other language models. Limitations: require massive data, computational power, training time; vulnerable to adversarial examples.",
        key_points: [
          "Neural networks learn by adjusting connection weights",
          "Deep learning enables complex pattern recognition",
          "Different architectures suited for different data types",
          "Training computationally expensive (GPU/TPUs valuable)",
          "Models vulnerable to adversarial attacks"
        ]
      },
      {
        heading: "AI Ethics: Bias, Privacy, and Impact",
        content: "Algorithmic bias: training data reflects human biases (gender, race, wealth) → models perpetuate/amplify discrimination in hiring, lending, criminal justice. Privacy concerns: training data collection, model extraction attacks, surveillance applications. Job displacement: automation replacing workers, economically disruptive. Autonomy: AI making decisions affecting humans (medical diagnosis, criminal sentencing, military targeting) raises responsibility questions. Alignment problem: advanced AI systems pursuing goals misaligned with human values could cause harm. Current governance weak: tech companies largely self-regulate; governments struggling with regulation; little international coordination.",
        key_points: [
          "Training data bias causes discriminatory AI systems",
          "Data privacy increasingly violated for model training",
          "Economic disruption from automation inadequately addressed",
          "AI decision-making raises accountability questions",
          "Governance gaps enable harmful AI development"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Analyze how bias in training data leads to discriminatory AI systems. Give a specific example.",
        step_by_step: [
          "Historical bias: training data reflects past discrimination (e.g., criminal justice data from discriminatory enforcement)",
          "Representation bias: underrepresented groups in training data poorly recognized by model",
          "Amazon hiring algorithm case: trained on historical hiring data showing male bias; algorithm perpetuated discrimination",
          "Criminal risk assessment: COMPAS system showed racial bias in predicting recidivism",
          "Face recognition: performs worse on dark-skinned individuals due to training data composition",
          "Impact: discriminatory decisions in hiring, lending, criminal justice affect real lives"
        ],
        answer: "Algorithmic bias emerges when training data reflects historical discrimination or lacks representation. Amazon's hiring algorithm learned from 10 years of hiring predominantly male technical workers; system penalized female applicants' resumes using female-coded words. Criminal risk assessment systems trained on data from biased enforcement showed racial disparities. Face recognition performs worse on dark-skinned faces because training datasets overrepresented light-skinned individuals. These systems automate discrimination at scale, affecting millions. Solutions require: diverse training data, bias auditing, fairness metrics, regular model monitoring, human oversight, representation of affected communities in AI development. Technical solutions alone insufficient - requires addressing that discrimination exists and intentionally counteracting it."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question: "Distinguish between supervised and unsupervised machine learning.",
          type: "short_answer",
          correct_answer: "Supervised: trained on labeled data to predict outputs (classification/regression). Unsupervised: finds patterns in unlabeled data (clustering, dimensionality reduction).",
          explanation: "Foundational distinction in machine learning approaches.",
          marks: 3,
          difficulty: "foundation"
        },
        {
          id: "pq2",
          question: "What is overfitting? Why is it problematic?",
          type: "short_answer",
          correct_answer: "Model memorizing training data rather than learning generalizable patterns. Problematic because: performs poorly on new data; defeats purpose of prediction/classification.",
          explanation: "Common practical problem in model development.",
          marks: 2,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question: "Evaluate the ethical concerns raised by AI/machine learning systems currently deployed.",
          type: "essay",
          correct_answer: "Concerns: algorithmic bias in hiring/lending/criminal justice; privacy violations; job displacement; autonomous decision-making without accountability; alignment risks. Governance inadequate to address these. Requires transparency, fairness metrics, affected community input, regulation.",
          explanation: "Tests critical evaluation of real-world AI impacts.",
          marks: 7,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Explain", meaning: "Describe how algorithms work; mechanisms underlying AI systems" },
        { word: "Analyze", meaning: "Examine causes of AI bias and discrimination; impacts" },
        { word: "Evaluate", meaning: "Judge effectiveness of solutions; assess governance approaches" }
      ],
      exam_tips: [
        "Use specific real-world AI system examples",
        "Distinguish between technical limitations and ethical concerns",
        "Connect algorithms to practical harms/benefits",
        "Consider both opportunities and risks"
      ],
      common_mistakes: [
        "Treating AI as objective/neutral when human value choices embedded",
        "Oversimplifying technical concepts",
        "Ignoring historical context of discrimination"
      ],
      mark_scheme_notes: ["Rewards specific examples and critical thinking about impacts"],
      time_allocation: "Complex topics deserve planning time"
    },
    section_6_additional_resources: {
      resources: [
        { title: "TensorFlow Tutorials", type: "interactive", url: "https://www.tensorflow.org", description: "Hands-on machine learning framework learning" },
        { title: "AI Ethics Resources", type: "article", url: "https://www.aieticsinstitute.org", description: "Research and resources on AI ethics challenges" },
        { title: "Weapons of Math Destruction", type: "article", description: "Analysis of discriminatory algorithms in real systems" }
      ],
      further_reading: [
        "Research specific biased AI systems and remediation efforts",
        "Study different neural network architectures and applications",
        "Investigate AI governance proposals globally"
      ],
      revision_checklist: [
        "Can you explain supervised/unsupervised/reinforcement learning?",
        "Do you understand how neural networks learn?",
        "Can you analyze algorithmic bias mechanisms?",
        "Do you know real-world AI system examples and impacts?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer: "Supervised learning: algorithms trained on labeled data pairs (input-output examples) to learn mapping function, used for classification/regression predictions. Unsupervised learning: algorithms find hidden patterns in unlabeled data through clustering or dimensionality reduction."
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
    id: "aqa_computer_science_cybersecurity_cryptography",
    exam_board: "aqa",
    subject: "computer_science",
    topic_title: "Cybersecurity & Cryptography",
    topic_number: "8",
    tier_level: "higher",
    section_1_key_concepts: {
      overview: "Examine cybersecurity threats and defenses: malware, social engineering, data breaches, encryption methods, authentication, network security, governance frameworks, cybersecurity careers.",
      key_terms: [
        { term: "Encryption", definition: "Encoding data so only authorized parties with key can read", importance: "Essential for data protection in transit and storage" },
        { term: "Malware", definition: "Malicious software designed to damage systems or steal data", importance: "Major cybersecurity threat; includes viruses, trojans, ransomware" },
        { term: "Social Engineering", meaning: "Manipulating people to divulge sensitive information", importance: "Often more effective than technical attacks; exploits human psychology" },
        { term: "Zero-Day Vulnerability", definition: "Unknown security flaw; software developers unaware beforehand", importance: "Particularly dangerous; no patch exists before attacks occur" }
      ],
      learning_objectives: [
        "Understand major cybersecurity threats",
        "Explain encryption and cryptographic techniques",
        "Analyze vulnerabilities in systems and networks",
        "Evaluate cybersecurity defense strategies",
        "Discuss emerging security challenges (AI-powered attacks, IoT vulnerabilities)",
        "Understand cybersecurity careers and ethical hacking"
      ]
    },
    section_2_detailed_explanations: [
      {
        heading: "Cybersecurity Threats & Attack Types",
        content: "Malware: viruses (replicate, cause damage), trojans (hide malicious intent), ransomware (encrypt files, demand payment), spyware (steal information). Social engineering: phishing (fake emails), pretexting (fake identity), baiting (enticing downloads). Network attacks: DDoS (flood servers, cause outages), man-in-middle (intercept communications), brute force (guess passwords). Data breaches: causing loss/theft of sensitive information. Supply chain attacks: compromising vendors to attack larger targets. Ransomware particularly destructive: hospitals, governments, businesses hit; payments fund criminal organizations. Attack sophistication increasing; traditional firewalls insufficient.",
        key_points: [
          "Multiple threat types exploit technical and human vulnerabilities",
          "Social engineering often most effective attack vector",
          "Ransomware particularly dangerous and common",
          "Supply chain attacks hard to defend against",
          "Cybersecurity increasingly important for infrastructure"
        ]
      },
      {
        heading: "Encryption & Cryptography",
        content: "Symmetric encryption: same key for encryption/decryption (AES, DES). Fast but key distribution problematic. Asymmetric encryption: public key (encryption) and private key (decryption); solves key distribution but slower. RSA widely used; security depends on factorization difficulty. Hash functions: convert input to fixed-length output; used for passwords and integrity verification. Digital signatures: ensure message authenticity and non-repudiation. Perfect encryption mathematically impossible to break, but implementation vulnerabilities exist. Quantum computing threatens RSA (would quickly factor large numbers); post-quantum cryptography being developed.",
        key_points: [
          "Encryption protocols essential for data protection",
          "Symmetric vs asymmetric encryption trade-offs",
          "Hash functions for data integrity",
          "Digital signatures enable authentication",
          "Quantum computing poses future threat"
        ]
      },
      {
        heading: "Cybersecurity Defenses & Governance",
        content: "Firewalls: filter network traffic based on rules. Intrusion detection/prevention systems: monitor for attacks. Multi-factor authentication: stronger password protection. Regular patching: fixes known vulnerabilities. Employee training: reduces social engineering success. Incident response plans: minimize damage when breaches occur. Regulations (GDPR, CCPA) require data protection; companies face penalties for breaches. Cybersecurity skills shortage: demand vastly exceeds supply. Ethical hacking (penetration testing) helping organizations identify vulnerabilities. International coordination weak; cybercrime prosecution difficult across borders.",
        key_points: [
          "Layered defenses more effective than single solution",
          "Technical measures insufficient without human factors",
          "Regulatory pressure increasing cybersecurity investment",
          "Cybersecurity skilled workforce highly valuable",
          "International coordination needed for effective response"
        ]
      }
    ],
    section_3_worked_examples: [
      {
        question: "Analyze why social engineering is often more effective than technical attacks.",
        step_by_step: [
          "Technical defenses strong: encryption, firewalls, intrusion detection",
          "Human element weakest link: psychology drives behavior more than logic",
          "Phishing examples: appearing legitimate, urgency/threat motivating clicks",
          "No technical solution detects social engineering perfectly",
          "Attackers craft messages exploiting human psychology and trust",
          "Security awareness training helps but imperfect",
          "Conclude: holistic security must address both technical and human factors"
        ],
        answer: "Social engineering succeeds because humans are irrationally influenced psychology; attackers exploit trust, urgency, authority. Phishing emails appearing from trusted sources with urgent requests bypass technical defenses - legitimate-looking messages lead victims to reveal passwords or download malware. Technical controls (firewalls, encryption) cannot stop someone willingly entering credentials into fake login page. No technical solution perfectly detects social engineering; attackers constantly adapt pretexts. Defense requires: employee training (recognizing phishing techniques); multi-factor authentication (fewer credentials to steal); technical controls (email filtering, suspicious link detection); organizational culture (reporting suspicious activity). Effective security bridges technical and human factors."
      }
    ],
    section_4_practice_questions: {
      foundation: [
        {
          id: "pq1",
          question: "Explain the difference between symmetric and asymmetric encryption.",
          type: "short_answer",
          correct_answer: "Symmetric: same key for encryption/decryption; fast but key distribution difficult. Asymmetric: different keys (public for encryption, private for decryption); solves key distribution but slower.",
          explanation: "Fundamental cryptography concept.",
          marks: 3,
          difficulty: "foundation"
        }
      ],
      higher: [
        {
          id: "hq1",
          question: "Evaluate cybersecurity governance approaches. What makes regulation effective?",
          type: "essay",
          correct_answer: "GDPR/CCPA creating accountability; companies investing more in security. Challenges: regulations lag technology; enforcement inconsistent; small companies struggling with compliance. Effective regulation: clear standards, reasonable timelines for compliance, meaningful penalties, international coordination.",
          explanation: "Tests understanding of governance challenges.",
          marks: 6,
          difficulty: "higher"
        }
      ]
    },
    section_5_exam_guidance: {
      command_words: [
        { word: "Explain", meaning: "Describe how cryptography and security controls work" },
        { word: "Analyze", meaning: "Identify vulnerabilities; examine why attacks succeed" }
      ],
      exam_tips: [
        "Use specific attack/defense examples",
        "Balance technical and human security factors",
        "Reference real-world incidents and responses"
      ],
      common_mistakes: [
        "Treating security as purely technical problem",
        "Oversimplifying complex cryptographic concepts",
        "Ignoring human vulnerability factors"
      ],
      mark_scheme_notes: ["Rewards specific examples and holistic thinking"],
      time_allocation: "Plan responses for complex security topics"
    },
    section_6_additional_resources: {
      resources: [
        { title: "Cybersecurity Courses", type: "article", url: "https://www.coursera.org", description: "Online courses in cybersecurity and cryptography" },
        { title: "OWASP Top 10", type: "article", url: "https://owasp.org", description: "Most critical web application security risks" }
      ],
      further_reading: [
        "Research specific high-profile cybersecurity breaches",
        "Study cryptographic algorithms and their vulnerabilities",
        "Investigate cybersecurity careers and certifications"
      ],
      revision_checklist: [
        "Can you explain major threat types?",
        "Do you understand symmetric/asymmetric encryption?",
        "Can you identify cybersecurity defenses?",
        "Do you know why social engineering succeeds?"
      ]
    },
    section_7_assessment_answers: {
      answers: [
        {
          question_id: "pq1",
          model_answer: "Symmetric encryption uses same key for encryption and decryption (fast, suitable for bulk data). Asymmetric uses different keys: public key for encryption, private key for decryption (solves key distribution but slower). Asymmetric enables digital signatures and authentication."
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
