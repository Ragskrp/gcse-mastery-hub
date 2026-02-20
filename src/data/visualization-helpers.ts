// ================================================
// VISUALIZATION HELPERS FOR EDUCATIONAL CONTENT
// ================================================
// This file provides reusable visualization descriptions, diagrams, and asset references
// to support interactive learning across all subjects

export interface VisualizationAsset {
    id: string;
    type: "diagram" | "chart" | "animation" | "interactive" | "image" | "video";
    title: string;
    description: string;
    subject: string;
    topic_reference: string;
    embed_code?: string;
    external_url?: string;
    svg_markup?: string;
    learning_objective: string;
}

// ================================================
// MATHS VISUALIZATIONS
// ================================================

export const MATHS_VISUALIZATIONS: VisualizationAsset[] = [
    // Functions & Graphs
    {
        id: "viz_maths_linear_graph_1",
        type: "interactive",
        title: "Linear Graph Explorer - Gradient & Y-Intercept",
        description: "Interactive coordinate grid showing line y=2x+3. Use sliders to adjust gradient and y-intercept in real-time. Shows rise/run triangle, parallel/perpendicular examples.",
        subject: "maths",
        topic_reference: "edexcel_maths_functions_graphs",
        learning_objective: "Understand gradient, y-intercept, and line equations through interactive exploration",
        external_url: "https://www.desmos.com/calculator"
    },
    {
        id: "viz_maths_quadratic_parabola",
        type: "interactive",
        title: "Quadratic Function Visualizer",
        description: "Plot parabolas by entering coefficients a, b, c in y=ax²+bx+c. Shows vertex, roots, axis of symmetry, and variations with positive/negative a values.",
        subject: "maths",
        topic_reference: "edexcel_maths_quadratics",
        learning_objective: "Visualize how coefficients affect parabola shape and position",
        external_url: "https://www.geogebra.org/graphing"
    },
    {
        id: "viz_maths_trig_unit_circle",
        type: "interactive",
        title: "Unit Circle & Trigonometry Explorer",
        description: "Animated unit circle showing sin(θ), cos(θ), tan(θ) as angle rotates. Displays coordinates, ratios, and reference triangles. Includes real-world angle problems.",
        subject: "maths",
        topic_reference: "edexcel_maths_trigonometry",
        learning_objective: "Understand trigonometric ratios through circle geometry and animation",
        external_url: "https://www.geogebra.org/m/eNJWqpYA"
    },
    {
        id: "viz_maths_circle_properties",
        type: "diagram",
        title: "Circle Properties & Theorems",
        description: "Annotated diagrams showing: circumference, area, arcs, sectors, angles at center vs circumference, inscribed angle theorem, tangent properties, cyclic quadrilaterals.",
        subject: "maths",
        topic_reference: "edexcel_maths_circles",
        learning_objective: "Visualize circle theorems and properties",
        svg_markup: "<!-- SVG circle diagram with labeled parts and formulas -->"
    },
    {
        id: "viz_maths_transformation_explorer",
        type: "interactive",
        title: "2D Transformations Visualizer",
        description: "Step-by-step animation showing reflection, rotation, translation, and enlargement. Enter shape coordinates and transformation parameters to see results in real-time.",
        subject: "maths",
        topic_reference: "edexcel_maths_transformations",
        learning_objective: "Understand geometric transformations through interactive visualization",
        external_url: "https://www.geogebra.org/m/C7Gw65mH"
    },
    {
        id: "viz_maths_right_triangle_solver",
        type: "interactive",
        title: "Right Triangle SOHCAHTOA Solver",
        description: "Enter any two values (sides or angles) of right triangle. Shows all missing sides/angles, draws scaled diagram, displays SOHCAHTOA ratios, real-world applications.",
        subject: "maths",
        topic_reference: "edexcel_maths_trigonometry",
        learning_objective: "Solve right triangles using trigonometric ratios",
        external_url: "https://www.geogebra.org/m/TnfYD5x9"
    },
    {
        id: "viz_maths_ratio_proportion",
        type: "interactive",
        title: "Ratio & Proportion Scale Model",
        description: "Visual scale modeling - represents ratios as proportional rectangles. Shows equivalent ratios, real-world scale problems (maps, models, recipes), percentage increase/decrease.",
        subject: "maths",
        topic_reference: "edexcel_maths_ratio",
        learning_objective: "Understand ratios and proportions through visual representation",
        external_url: "https://www.geogebra.org/m/MstQVJAp"
    },
    {
        id: "viz_maths_probability_tree",
        type: "interactive",
        title: "Probability Tree Diagram Builder",
        description: "Construct probability trees for single/compound events. Adjust branch probabilities and see calculations update. Shows independent/dependent events visually.",
        subject: "maths",
        topic_reference: "edexcel_maths_probability",
        learning_objective: "Visualize and calculate compound probabilities",
        external_url: "https://www.geogebra.org/m/YdZFqJsX"
    }
];

// ================================================
// SCIENCE VISUALIZATIONS
// ================================================

export const SCIENCE_VISUALIZATIONS: VisualizationAsset[] = [
    {
        id: "viz_sci_cell_structure",
        type: "interactive",
        title: "3D Cell Structure Explorer",
        description: "Interactive 3D model of plant/animal cells with labeled organelles. Zoom, rotate, highlight individual structures and their functions. Animations show processes like mitosis.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_bio_cell_biology",
        learning_objective: "Learn cell organelles and their functions through 3D visualization",
        external_url: "https://cellsciencebycourtney.com/cell-explorer"
    },
    {
        id: "viz_sci_dna_structure",
        type: "interactive",
        title: "DNA Double Helix Model",
        description: "Animated DNA structure showing base pairs, sugar-phosphate backbone, replication process. Drag to unwind helix, highlight nucleotide components.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_bio_inheritance",
        learning_objective: "Understand DNA structure and replication at molecular level",
        external_url: "https://www.:biology-online.org/dna-animation"
    },
    {
        id: "viz_sci_periodic_table",
        type: "interactive",
        title: "Interactive Periodic Table with Orbital Viewer",
        description: "Clickable periodic table. Each element shows: atomic structure, electron configuration, orbitals visualization, properties, uses, reactivity patterns.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_chem_atomic",
        learning_objective: "Explore atomic structure and periodic patterns",
        external_url: "https://www.ptable.com"
    },
    {
        id: "viz_sci_molecular_shapes",
        type: "interactive",
        title: "3D Molecular Structure Builder",
        description: "Build molecules with drag-and-drop atoms. Visualize VSEPR theory, molecular geometry, bonding angles. Shows ionic vs covalent bonding animations.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_chem_bonding",
        learning_objective: "Understand molecular bonding and geometry",
        external_url: "https://www.jsmol.org"
    },
    {
        id: "viz_sci_ecosystem_web",
        type: "interactive",
        title: "Food Web & Energy Flow Simulator",
        description: "Interactive ecosystem showing predator-prey relationships, energy transfer, trophic levels. Add/remove species to see cascading effects. 10% energy rule visualization.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_bio_ecology",
        learning_objective: "Understand ecosystem dynamics and energy flow",
        external_url: "https://www.pbs.org/wgbh/nova/nature/food-web-game"
    },
    {
        id: "viz_sci_circuit_simulator",
        type: "interactive",
        title: "Electronic Circuit Simulator",
        description: "Build circuits with resistors, capacitors, inductors, batteries. Measure voltage, current, power. Shows component effects in series/parallel. Short circuit warning.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_phys_electricity",
        learning_objective: "Understand circuit behavior and electrical quantities",
        external_url: "https://www.falstad.com/circuit"
    },
    {
        id: "viz_sci_wave_simulator",
        type: "interactive",
        title: "Wave Properties Interactive Simulator",
        description: "Animate waves showing amplitude, wavelength, frequency, period. Demonstrate interference, diffraction, refraction, standing waves. Change speed, frequency in real-time.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_phys_waves",
        learning_objective: "Understand wave properties through interactive simulation",
        external_url: "https://www.geogebra.org/m/bPUHkXMC"
    },
    {
        id: "viz_sci_forces_vectors",
        type: "interactive",
        title: "Forces & Vector Diagram Tool",
        description: "Construct force diagrams with vector arrows. Shows resultant forces, equilibrium conditions, animations of motion with different force combinations.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_phys_forces",
        learning_objective: "Visualize forces as vectors and calculate resultants",
        external_url: "https://www.geogebra.org/m/dwHXZWG7"
    },
    {
        id: "viz_sci_particle_motion",
        type: "animation",
        title: "Kinetic Theory & Particle Motion",
        description: "Animate particle behavior in solids, liquids, gases. Show how temperature affects particle motion, explaining diffusion, osmosis, gas pressure, phase changes.",
        subject: "combined_science",
        topic_reference: "aqa_combined_science_phys_particle_model",
        learning_objective: "Understand particle behavior and kinetic theory",
        external_url: "https://www.bbc.co.uk/bitesize/guides/zhy6f82"
    }
];

// ================================================
// ENGLISH VISUALIZATIONS
// ================================================

export const ENGLISH_VISUALIZATIONS: VisualizationAsset[] = [
    {
        id: "viz_english_text_analysis_tool",
        type: "interactive",
        title: "Literary Text Annotator & Analysis Tool",
        description: "Upload or paste text passages. Highlight techniques (metaphor, alliteration, etc), add notes, track themes across entire text. Generates analysis reports.",
        subject: "english_literature",
        topic_reference: "aqa_english_literature_lit_poetry_anthology",
        learning_objective: "Systematically analyze literary texts and identify techniques",
        external_url: "https://www.genius.com"
    },
    {
        id: "viz_english_narrative_timeline",
        type: "diagram",
        title: "Narrative Structure Timeline",
        description: "Visual timeline of key plot events showing exposition, rising action, climax, falling action, resolution. Marks character development arcs and thematic turning points.",
        subject: "english_literature",
        topic_reference: "aqa_english_literature_lit_shakespeare",
        learning_objective: "Understand narrative structure and plot development",
        embed_code: "<!-- SVG timeline with colored arcs for story structure -->"
    },
    {
        id: "viz_english_character_web",
        type: "interactive",
        title: "Character Relationship & Development Web",
        description: "Node-graph showing character relationships, interactions, and development arcs. Color-coding shows allegiances, conflicts, and character transformation over story.",
        subject: "english_literature",
        topic_reference: "aqa_english_literature_lit_modern",
        learning_objective: "Track complex character interactions and development",
        external_url: "https://www.writing-analysis-tools.io"
    },
    {
        id: "viz_english_rhetorical_appeals",
        type: "interactive",
        title: "Rhetorical Devices & Persuasion Analyzer",
        description: "Interactive guide to ethos, pathos, logos. Identify devices in provided texts (allusion, metaphor, rhetorical questions, etc). Color-coded by persuasive technique.",
        subject: "english_language",
        topic_reference: "aqa_english_language_lang_viewpoint_reading",
        learning_objective: "Recognize persuasive techniques and rhetorical devices",
        external_url: "https://www.rhetorical-analysis-guide.com"
    },
    {
        id: "viz_english_writing_framework",
        type: "interactive",
        title: "Creative Writing Framework & Checklist",
        description: "Step-by-step guide for creative writing. Input story elements, get structure suggestions. Checklist for description, dialogue, pacing, and exam requirements.",
        subject: "english_language",
        topic_reference: "aqa_english_language_lang_creative_writing",
        learning_objective: "Develop structured, high-quality creative writing",
        external_url: "https://www.writing-framework.com"
    }
];

// ================================================
// HISTORY VISUALIZATIONS
// ================================================

export const HISTORY_VISUALIZATIONS: VisualizationAsset[] = [
    {
        id: "viz_history_timeline_events",
        type: "interactive",
        title: "Historical Timeline Interactive Explorer",
        description: "Zoomable timeline from 1500-2000. Click events for details, images, context. Color-coded by theme (wars, social, technology). Compare parallel events across regions.",
        subject: "history",
        topic_reference: "aqa_history_hist_elizabeth",
        learning_objective: "Understand historical chronology and cause-effect relationships",
        external_url: "https://www.timetoast.com"
    },
    {
        id: "viz_history_political_map",
        type: "interactive",
        title: "Historical Political Maps & Territory Evolution",
        description: "Animated maps showing territorial changes, political boundaries from 1500-2000. Play through time to see empires rise/fall, wars, colonization, independence movements.",
        subject: "history",
        topic_reference: "aqa_history_hist_america",
        learning_objective: "Visualize geopolitical changes and territorial conflicts",
        external_url: "https://www.historyandmaps.com/geopolitical-simulator"
    },
    {
        id: "viz_history_cause_effect_diagram",
        type: "diagram",
        title: "Cause & Effect Network Diagram",
        description: "Mind map showing causes, events, and consequences of historical events (e.g., WW1, Industrial Revolution). Color-coded by causal chain and significance.",
        subject: "history",
        topic_reference: "aqa_history_hist_germany",
        learning_objective: "Understand complex causal relationships in history",
        embed_code: "<!-- SVG cause-effect network diagram -->"
    },
    {
        id: "viz_history_social_change_index",
        type: "chart",
        title: "Social & Economic Change Index",
        description: "Comparative charts showing population, urbanization, literacy, wealth distribution over time periods. Shows correlation with historical events.",
        subject: "history",
        topic_reference: "aqa_history_hist_medicine",
        learning_objective: "Understand long-term social and economic trends",
        external_url: "https://www.gapminder.org"
    }
];

// ================================================
// BUSINESS VISUALIZATIONS
// ================================================

export const BUSINESS_VISUALIZATIONS: VisualizationAsset[] = [
    {
        id: "viz_business_budget_calculator",
        type: "interactive",
        title: "Business Budget & Break-Even Analyzer",
        description: "Input revenue, costs, profit margins. Calculates break-even point, margin of safety, cash flow forecasts. Generates visual charts of financial scenarios.",
        subject: "business",
        topic_reference: "aqa_business_bus_finance",
        learning_objective: "Understand financial planning and break-even analysis",
        external_url: "https://www.spreadsheet-calculator.io"
    },
    {
        id: "viz_business_market_segmentation",
        type: "interactive",
        title: "Market Segmentation & Targeting Tool",
        description: "Create demographic, psychographic, geographic segments. Visualize target audience profiles, market size analysis, positioning maps for product strategies.",
        subject: "business",
        topic_reference: "aqa_business_bus_marketing",
        learning_objective: "Develop market segmentation and targeting strategies",
        external_url: "https://www.marketing-segmentation-tool.com"
    },
    {
        id: "viz_business_org_chart",
        type: "diagram",
        title: "Organizational Structure & Hierarchy Chart",
        description: "Customizable org charts showing different structures: hierarchical, matrix, flat. Illustrates reporting lines, departments, communication flows for different business types.",
        subject: "business",
        topic_reference: "aqa_business_bus_hr",
        learning_objective: "Understand organizational structures and chain of command",
        embed_code: "<!-- SVG organizational chart builder -->"
    },
    {
        id: "viz_business_supply_chain",
        type: "interactive",
        title: "Supply Chain & Operations Optimizer",
        description: "Model production stages, inventory levels, distribution networks. Show how supply chain decisions affect efficiency, costs, customer satisfaction.",
        subject: "business",
        topic_reference: "aqa_business_bus_operations",
        learning_objective: "Understand supply chain management and operations efficiency",
        external_url: "https://www.supply-chain-simulator.io"
    },
    {
        id: "viz_business_swot_canvas",
        type: "interactive",
        title: "SWOT Analysis & Business Model Canvas",
        description: "Fill in SWOT matrix and business model canvas. Generates strategic insights, identifies key strengths to leverage and weaknesses to address.",
        subject: "business",
        topic_reference: "aqa_business_bus_real_world",
        learning_objective: "Conduct strategic business analysis",
        external_url: "https://www.business-canvas-tool.io"
    }
];

// ================================================
// GEOGRAPHY VISUALIZATIONS
// ================================================

export const GEOGRAPHY_VISUALIZATIONS: VisualizationAsset[] = [
    {
        id: "viz_geography_satellite_maps",
        type: "interactive",
        title: "Satellite Maps & GIS Explorer",
        description: "Explore Google Earth Pro, USGS maps for case study locations. See urban sprawl, coastal erosion, deforestation. Toggle between satellite, terrain, street views.",
        subject: "geography",
        topic_reference: "aqa_geography_geo_urban_issues",
        learning_objective: "Analyse real-world geographical features using satellite imagery",
        external_url: "https://www.google.com/earth"
    },
    {
        id: "viz_geography_climate_data",
        type: "interactive",
        title: "Climate & Weather Data Visualizer",
        description: "Explore temperature, precipitation, climate zones globally. Compare climates, analyze climate change trends, biome distribution patterns.",
        subject: "geography",
        topic_reference: "aqa_geography_geo_living_world",
        learning_objective: "Understand global climate patterns and biomes",
        external_url: "https://www.climate-and-earth-data.org"
    },
    {
        id: "viz_geography_coastal_processes",
        type: "animation",
        title: "Coastal Processes & Erosion Animator",
        description: "Animated illustrations of wave erosion, deposition, longshore drift, sea-level rise. Shows landform development over decades with interactive controls.",
        subject: "geography",
        topic_reference: "aqa_geography_geo_natural_hazards",
        learning_objective: "Understand coastal geomorphological processes",
        external_url: "https://www.bbc.co.uk/bitesize/guides/z34ttfr"
    },
    {
        id: "viz_geography_resource_distribution",
        type: "interactive",
        title: "Global Resource Distribution Map",
        description: "Interactive map showing mineral deposits, oil fields, water resources, renewable energy potential by country. Compare resource wealth to economic development.",
        subject: "geography",
        topic_reference: "aqa_geography_geo_resource_management",
        learning_objective: "Analyse global resource distribution and economic geography",
        external_url: "https://www.resource-data-explorer.com"
    }
];

// ================================================
// COMPUTER SCIENCE VISUALIZATIONS
// ================================================

export const COMPUTER_SCIENCE_VISUALIZATIONS: VisualizationAsset[] = [
    {
        id: "viz_cs_algorithm_animator",
        type: "interactive",
        title: "Algorithm Visualizer & Step Debugger",
        description: "Animate sorting algorithms (bubble sort, quicksort, merge sort), search algorithms (binary search), and graph algorithms. Step through execution, see Big O complexity.",
        subject: "computer_science",
        topic_reference: "aqa_computer_science_cs_algorithms",
        learning_objective: "Understand algorithm efficiency and behavior through visualization",
        external_url: "https://www.visualgo.net"
    },
    {
        id: "viz_cs_code_playground",
        type: "interactive",
        title: "Browser-Based Code Editor & Executor",
        description: "Write and run Python, JavaScript code in browser. Real-time debugging, output visualization, variable watchers. Pre-loaded tutorials and exercises.",
        subject: "computer_science",
        topic_reference: "aqa_computer_science_cs_programming",
        learning_objective: "Practice programming with immediate visual feedback",
        external_url: "https://www.repl.it"
    },
    {
        id: "viz_cs_binary_converter",
        type: "interactive",
        title: "Binary, Hex, ASCII Converter & Visualizer",
        description: "Interactively convert between number bases, show bit representation, ASCII/Unicode, floating point encoding. Includes practice problems and quizzes.",
        subject: "computer_science",
        topic_reference: "aqa_computer_science_cs_data_rep",
        learning_objective: "Understand data representation at binary level",
        external_url: "https://www.converter-tools.io/binary"
    },
    {
        id: "viz_cs_network_simulator",
        type: "interactive",
        title: "Network Topology & Data Flow Simulator",
        description: "Design networks (LAN, WAN, WiFi), simulate packet routing, show OSI layer model, demonstrate protocols (TCP/IP, DNS). Interactive packet tracking.",
        subject: "computer_science",
        topic_reference: "aqa_computer_science_cs_networks",
        learning_objective: "Understand network architecture and data transmission",
        external_url: "https://www.cisco.com/packet-tracer"
    },
    {
        id: "viz_cs_database_designer",
        type: "interactive",
        title: "Relational Database Designer & SQL Executor",
        description: "Create database schemas visually, define tables/relationships, write and execute SQL queries. Shows query results, execution plans, normalization guides.",
        subject: "computer_science",
        topic_reference: "aqa_computer_science_cs_relational_db",
        learning_objective: "Design and query relational databases",
        external_url: "https://www.dbdiagram.io"
    },
    {
        id: "viz_cs_encryption_visualizer",
        type: "interactive",
        title: "Encryption & Cyber Security Visualizer",
        description: "Demonstrate Caesar cipher, RSA encryption, hash functions. Show how data is encrypted, why strong passwords matter, malware prevention techniques.",
        subject: "computer_science",
        topic_reference: "aqa_computer_science_cs_cyber_security",
        learning_objective: "Understand cryptography and security principles",
        external_url: "https://www.cryptography-visualizer.io"
    }
];

// ================================================
// HELPER FUNCTION: Get visualizations by subject
// ================================================

export function getVisualizationsBySubject(subject: string): VisualizationAsset[] {
    switch (subject) {
        case "maths":
            return MATHS_VISUALIZATIONS;
        case "combined_science":
            return SCIENCE_VISUALIZATIONS;
        case "english_literature":
        case "english_language":
            return ENGLISH_VISUALIZATIONS;
        case "history":
            return HISTORY_VISUALIZATIONS;
        case "business":
            return BUSINESS_VISUALIZATIONS;
        case "geography":
            return GEOGRAPHY_VISUALIZATIONS;
        case "computer_science":
            return COMPUTER_SCIENCE_VISUALIZATIONS;
        default:
            return [];
    }
}

export function getVisualizationByTopic(topicId: string): VisualizationAsset[] {
    const allViz = [
        ...MATHS_VISUALIZATIONS,
        ...SCIENCE_VISUALIZATIONS,
        ...ENGLISH_VISUALIZATIONS,
        ...HISTORY_VISUALIZATIONS,
        ...BUSINESS_VISUALIZATIONS,
        ...GEOGRAPHY_VISUALIZATIONS,
        ...COMPUTER_SCIENCE_VISUALIZATIONS,
    ];
    return allViz.filter(v => v.topic_reference === topicId);
}
