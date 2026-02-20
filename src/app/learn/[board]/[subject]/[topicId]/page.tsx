"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SEED_TOPICS } from "@/data/seed-topics";
import { SEED_TOPICS_PART2 } from "@/data/seed-topics-2";
import { SEED_TOPICS_PART3 } from "@/data/seed-topics-3";
import { SEED_TOPICS_PART4 } from "@/data/seed-topics-4";
import { SEED_TOPICS_PART5 } from "@/data/seed-topics-5";
import { SEED_MATHS_EXTENDED } from "@/data/seed-topics-maths-extended";
import { SEED_TOPICS_ENGLISH_EXTENDED } from "@/data/seed-topics-english-extended";
import { SEED_TOPICS_HUMANITIES_EXTENDED } from "@/data/seed-topics-humanities-extended";
import { SEED_TOPICS_SCIENCES_EXTENDED } from "@/data/seed-topics-sciences-extended";
import { SEED_TOPICS_FRENCH_EXTENDED } from "@/data/seed-topics-french-extended";
import { SEED_TOPICS_RELIGIOUS_STUDIES_EXTENDED } from "@/data/seed-topics-religious-studies-extended";
import { SEED_TOPICS_GEOGRAPHY_EXTENDED } from "@/data/seed-topics-geography-extended";
import { SEED_TOPICS_COMPUTER_SCIENCE_EXTENDED } from "@/data/seed-topics-computer-science-extended";
import { useAppStore } from "@/lib/store";
import { COIN_REWARDS, XP_REWARDS } from "@/lib/utils";
import { Topic } from "@/types";

const ALL_TOPICS = [...SEED_TOPICS, ...SEED_TOPICS_PART2, ...SEED_TOPICS_PART3, ...SEED_TOPICS_PART4, ...SEED_TOPICS_PART5, ...SEED_MATHS_EXTENDED, ...SEED_TOPICS_ENGLISH_EXTENDED, ...SEED_TOPICS_HUMANITIES_EXTENDED, ...SEED_TOPICS_SCIENCES_EXTENDED, ...SEED_TOPICS_FRENCH_EXTENDED, ...SEED_TOPICS_RELIGIOUS_STUDIES_EXTENDED, ...SEED_TOPICS_GEOGRAPHY_EXTENDED, ...SEED_TOPICS_COMPUTER_SCIENCE_EXTENDED];

// Helper to determine if we should fall back to seed data (development mode) or use JSON fetch
const USE_STATIC_JSON = true;

import { getTopicById } from "@/lib/content";
import { useEffect } from "react";

const SECTION_LABELS = [
    { num: 1, label: "Key Concepts", icon: "🔑" },
    { num: 2, label: "Detailed Explanations", icon: "📖" },
    { num: 3, label: "Worked Examples", icon: "✏️" },
    { num: 4, label: "Practice Questions", icon: "❓" },
    { num: 5, label: "Exam Guidance", icon: "🎯" },
    { num: 6, label: "Additional Resources", icon: "📚" },
    { num: 7, label: "Assessment Answers", icon: "✅" },
];

export default function TopicPage() {
    const params = useParams();
    const topicId = params.topicId as string;
    const [openSections, setOpenSections] = useState<number[]>([1]);
    const { completeSection, completeTopic, addCoins, addXP } = useAppStore();

    // State for Async Loading
    const [topic, setTopic] = useState<Topic | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            // 1. Try to find in seed files first (fastest for now)
            const seedTopic = ALL_TOPICS.find((t) => t.id === topicId);

            if (seedTopic) {
                setTopic(seedTopic);
                setLoading(false);
                return;
            }

            // 2. If not in seed, try to fetch from JSON (for future scalability)
            const fetched = await getTopicById(topicId);
            if (fetched) {
                setTopic(fetched);
            }
            setLoading(false);
        }
        load();
    }, [topicId]);

    if (loading) {
        return <div className="py-20 text-center container">Loading topic...</div>;
    }

    if (!topic) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
                <Link href="/subjects" className="btn-primary">← Back to Subjects</Link>
            </div>
        );
    }

    const toggleSection = (num: number) => {
        setOpenSections((prev) =>
            prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
        );
        completeSection(topic.id, num);
    };

    const handleComplete = () => {
        completeTopic(topic.id, 100);
        addCoins(COIN_REWARDS.TOPIC_COMPLETE);
        addXP(XP_REWARDS.TOPIC_COMPLETE);
        alert(`🎉 Topic Complete! +${COIN_REWARDS.TOPIC_COMPLETE} coins, +${XP_REWARDS.TOPIC_COMPLETE} XP`);
    };

    return (
        <div className="py-10 md:py-16">
            <div className="container max-w-4xl">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: "var(--text-muted)" }}>
                    <Link href="/subjects" className="hover:text-[var(--primary)] transition-colors">Subjects</Link>
                    <span>/</span>
                    <Link href={`/subjects/${topic.exam_board}/${topic.subject.replace(/_/g, "-")}`} className="hover:text-[var(--primary)] transition-colors">
                        {topic.subject.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Link>
                    <span>/</span>
                    <span>{topic.topic_title}</span>
                </div>

                {/* Header */}
                <div className="mb-8">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3" style={{ background: "rgba(102,126,234,0.1)", color: "var(--primary)" }}>
                        {topic.exam_board.toUpperCase()} · {topic.topic_number} · {topic.tier_level === "both" ? "Foundation & Higher" : topic.tier_level}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{topic.topic_title}</h1>
                    <p style={{ color: "var(--text-muted)" }}>{topic.section_1_key_concepts.overview}</p>
                </div>

                {/* 7 Sections */}
                <div className="space-y-3">
                    {SECTION_LABELS.map(({ num, label, icon }) => (
                        <div key={num} className="section-accordion fade-in-up" style={{ animationDelay: `${num * 0.05}s` }}>
                            <div className="section-header" onClick={() => toggleSection(num)}>
                                <span className="text-xl">{icon}</span>
                                <span className="flex-1">Section {num}: {label}</span>
                                <span className="text-lg transition-transform" style={{ transform: openSections.includes(num) ? "rotate(180deg)" : "rotate(0)" }}>
                                    ▼
                                </span>
                            </div>
                            {openSections.includes(num) && (
                                <div className="section-content fade-in-up">
                                    {renderSection(topic, num)}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Complete Button */}
                <div className="text-center mt-10">
                    <button onClick={handleComplete} className="btn-primary text-base px-10 py-3.5">
                        ✅ Mark Topic Complete — Earn {COIN_REWARDS.TOPIC_COMPLETE} Coins & {XP_REWARDS.TOPIC_COMPLETE} XP
                    </button>
                </div>
            </div>
        </div>
    );
}

function renderSection(topic: Topic, num: number) {
    switch (num) {
        case 1:
            return <Section1 data={topic.section_1_key_concepts} />;
        case 2:
            return <Section2 data={topic.section_2_detailed_explanations} />;
        case 3:
            return <Section3 data={topic.section_3_worked_examples} />;
        case 4:
            return <Section4 data={topic.section_4_practice_questions} />;
        case 5:
            return <Section5 data={topic.section_5_exam_guidance} />;
        case 6:
            return <Section6 data={topic.section_6_additional_resources} />;
        case 7:
            return <Section7 data={topic.section_7_assessment_answers} />;
        default:
            return null;
    }
}

function Section1({ data }: { data: Topic["section_1_key_concepts"] }) {
    return (
        <div>
            <h4 className="font-bold mb-3">📋 Learning Objectives</h4>
            <ul className="list-disc pl-5 space-y-1 mb-6" style={{ color: "var(--text-muted)" }}>
                {data.learning_objectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
            <h4 className="font-bold mb-3">📝 Key Terms</h4>
            <div className="space-y-3">
                {data.key_terms.map((term, i) => (
                    <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(102,126,234,0.05)", border: "1px solid var(--border)" }}>
                        <div className="font-semibold text-[var(--primary)]">{term.term}</div>
                        <div className="text-sm" style={{ color: "var(--text-muted)" }}>{term.definition}</div>
                        <div className="text-xs mt-1 italic" style={{ color: "var(--text-muted)" }}>Why it matters: {term.importance}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

import { NumberLine } from "@/components/interactive/NumberLine";
import { FractionWall } from "@/components/interactive/FractionWall";
import { EquationSolver } from "@/components/interactive/EquationSolver";
import { AngleExplorer } from "@/components/interactive/AngleExplorer";

function Section2({ data }: { data: (Topic["section_2_detailed_explanations"][0] | { type: "component", name: string })[] }) {
    if (!data) return null;

    return (
        <div className="space-y-6">
            {data.map((item, i) => {
                // Check if it's an interactive component
                if ("type" in item && item.type === "component") {
                    if (item.name === "NumberLine") return <NumberLine key={i} />;
                    if (item.name === "FractionWall") return <FractionWall key={i} />;
                    if (item.name === "EquationSolver") return <EquationSolver key={i} />;
                    if (item.name === "AngleExplorer") return <AngleExplorer key={i} />;
                    return null;
                }

                // Otherwise render standard text content
                const exp = item as Topic["section_2_detailed_explanations"][0];
                return (
                    <div key={i}>
                        <h4 className="font-bold text-lg mb-2">{exp.heading}</h4>
                        <p className="mb-3 whitespace-pre-wrap" style={{ color: "var(--text-muted)" }}>{exp.content}</p>
                        {exp.key_points && (
                            <div className="p-4 rounded-xl" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}>
                                <div className="font-semibold text-sm mb-2" style={{ color: "#10b981" }}>✅ Key Points</div>
                                <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: "var(--text-muted)" }}>
                                    {exp.key_points.map((kp, j) => <li key={j}>{kp}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function Section3({ data }: { data: Topic["section_3_worked_examples"] }) {
    return (
        <div className="space-y-6">
            {data.map((ex, i) => (
                <div key={i} className="p-5 rounded-xl" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)" }}>
                    <h4 className="font-bold mb-3">📐 {ex.question}</h4>
                    <div className="space-y-2 mb-3">
                        {ex.step_by_step.map((step, j) => (
                            <div key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                                <span className="font-bold text-[var(--primary)] min-w-[28px]">Step {j + 1}:</span>
                                <span>{step}</span>
                            </div>
                        ))}
                    </div>
                    <div className="font-bold p-3 rounded-lg" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                        Answer: {ex.answer}
                    </div>
                    {ex.common_mistakes && (
                        <div className="mt-3 text-sm" style={{ color: "#ef4444" }}>
                            ⚠️ Common mistakes: {ex.common_mistakes.join("; ")}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function Section4({ data }: { data: Topic["section_4_practice_questions"] }) {
    const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});
    const allQuestions = [...data.foundation, ...data.higher];

    return (
        <div className="space-y-4">
            {allQuestions.map((q) => (
                <div key={q.id} className="p-4 rounded-xl" style={{ border: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white ${q.difficulty === "higher" ? "bg-purple-600" : "bg-emerald-600"}`}>
                            {q.difficulty}
                        </span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>{q.marks} mark{q.marks > 1 ? "s" : ""}</span>
                    </div>
                    <p className="font-medium mb-3">{q.question}</p>
                    {q.options && (
                        <div className="space-y-2 mb-3">
                            {q.options.map((opt, i) => (
                                <div key={i} className="answer-option text-sm">{String.fromCharCode(65 + i)}) {opt}</div>
                            ))}
                        </div>
                    )}
                    <button
                        onClick={() => setShowAnswers((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
                        className="text-sm font-semibold text-[var(--primary)] hover:underline"
                    >
                        {showAnswers[q.id] ? "Hide Answer" : "Show Answer"}
                    </button>
                    {showAnswers[q.id] && (
                        <div className="mt-3 p-3 rounded-lg text-sm" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}>
                            <div className="font-semibold" style={{ color: "#10b981" }}>Answer: {q.correct_answer}</div>
                            <div className="mt-1" style={{ color: "var(--text-muted)" }}>{q.explanation}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function Section5({ data }: { data: Topic["section_5_exam_guidance"] }) {
    return (
        <div className="space-y-6">
            <div>
                <h4 className="font-bold mb-3">📝 Command Words</h4>
                <div className="space-y-2">
                    {data.command_words.map((cw, i) => (
                        <div key={i} className="p-3 rounded-lg" style={{ border: "1px solid var(--border)" }}>
                            <span className="font-bold text-[var(--primary)]">{cw.word}:</span>{" "}
                            <span style={{ color: "var(--text-muted)" }}>{cw.meaning}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-3">💡 Exam Tips</h4>
                <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--text-muted)" }}>
                    {data.exam_tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-3">⚠️ Common Mistakes</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: "#ef4444" }}>
                    {data.common_mistakes.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "rgba(102,126,234,0.05)", border: "1px solid var(--border)" }}>
                <span className="font-semibold">⏰ Time Allocation: </span>
                <span style={{ color: "var(--text-muted)" }}>{data.time_allocation}</span>
            </div>
        </div>
    );
}

function Section6({ data }: { data: Topic["section_6_additional_resources"] }) {
    return (
        <div className="space-y-6">
            <div>
                <h4 className="font-bold mb-3">🔗 Resources</h4>
                <div className="space-y-2">
                    {data.resources.map((r, i) => (
                        <div key={i} className="p-3 rounded-lg flex items-center gap-3" style={{ border: "1px solid var(--border)" }}>
                            <span className="text-xl">{r.type === "video" ? "🎬" : r.type === "interactive" ? "🎮" : r.type === "worksheet" ? "📄" : "📰"}</span>
                            <div>
                                <div className="font-semibold text-sm">{r.title}</div>
                                <div className="text-xs" style={{ color: "var(--text-muted)" }}>{r.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-3">✅ Revision Checklist</h4>
                <div className="space-y-2">
                    {data.revision_checklist.map((item, i) => (
                        <label key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[rgba(102,126,234,0.05)] cursor-pointer transition-colors">
                            <input type="checkbox" className="w-4 h-4 accent-[var(--primary)]" />
                            <span className="text-sm">{item}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Section7({ data }: { data: Topic["section_7_assessment_answers"] }) {
    return (
        <div className="space-y-6">
            <div>
                <h4 className="font-bold mb-3">📊 Grade Boundaries</h4>
                <div className="grid grid-cols-4 gap-3 text-center text-sm">
                    {Object.entries(data.grade_boundaries).map(([grade, score]) => (
                        <div key={grade} className="p-3 rounded-xl" style={{ border: "1px solid var(--border)" }}>
                            <div className="font-bold text-lg gradient-text">{grade.replace("grade_", "Grade ")}</div>
                            <div style={{ color: "var(--text-muted)" }}>{score}%+</div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-3">📝 Model Answers</h4>
                <div className="space-y-4">
                    {data.answers.map((a, i) => (
                        <div key={i} className="p-4 rounded-xl" style={{ border: "1px solid var(--border)" }}>
                            <p className="font-medium mb-2" style={{ color: "#10b981" }}>Model Answer:</p>
                            <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>{a.model_answer}</p>
                            <div className="text-xs space-y-1 mb-2" style={{ color: "var(--text-muted)" }}>
                                {a.mark_breakdown.map((m, j) => <div key={j}>• {m}</div>)}
                            </div>
                            <div className="text-xs italic p-2 rounded-lg" style={{ background: "rgba(245,158,11,0.05)", color: "#f59e0b" }}>
                                💡 Examiner tip: {a.examiner_tip}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
