"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SUBJECTS } from "@/lib/constants";
import { useAppStore } from "@/lib/store";
import { SEED_QUIZZES } from "@/data/seed-quizzes";
import { TOPIC_MANIFEST } from "@/lib/content";

// We now use TOPIC_MANIFEST as the source of truth for the curriculum structure.
// The content itself is loaded dynamically on the topic page.
const ALL_TOPICS = TOPIC_MANIFEST;

export default function SubjectPage() {
    const params = useParams();
    const board = params.board as string;
    const subjectSlug = params.subject as string;
    const subjectId = subjectSlug?.replace(/-/g, "_");

    const subject = SUBJECTS.find((s) => s.id === subjectId && s.board === board);
    const topics = ALL_TOPICS.filter((t) => t.subject === subjectId && t.exam_board === board);
    const quizzes = SEED_QUIZZES.filter((q) => q.subject === subjectId && q.exam_board === board);

    const { user } = useAppStore();

    if (!subject) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Subject not found</h1>
                <Link href="/subjects" className="btn-primary">← Back to Subjects</Link>
            </div>
        );
    }

    // Calculate Progress
    const completedCount = topics.filter(t => user?.progress[t.id]?.completed).length;
    const progressPercent = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;

    return (
        <div className="py-12 md:py-20">
            <div className="container">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <Link href="/subjects" className="text-sm mb-6 inline-flex items-center gap-1 hover:text-[var(--primary)] transition-colors font-medium opacity-70 hover:opacity-100">
                        ← All Subjects
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mt-2">
                        <div
                            className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg subject-gradient-${subject.id}`}
                            style={{ color: "white" }}
                        >
                            {subject.icon}
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{subject.name}</h1>
                            <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                                {subject.board.toUpperCase()} · Year 10 · {topics.length} topics available
                            </p>
                        </div>
                    </div>
                </div>

                {/* Overall Progress */}
                <div className="glass-card p-8 mb-16 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-xl">Your Mastery</h3>
                            <span className="text-lg font-bold gradient-text">{progressPercent}%</span>
                        </div>
                        <div className="progress-bar h-3 mb-3">
                            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
                        </div>
                        <p className="text-sm font-medium opacity-80">
                            {progressPercent === 100 ? "🎉 Amazing! You've mastered this subject!" : "Complete topics and quizzes to increase your mastery level"}
                        </p>
                    </div>
                    {/* Background decoration for progress card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                </div>

                {/* Topics */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl font-bold">📖 Topics</h2>
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border)] opacity-70">{topics.length}</span>
                    </div>

                    {topics.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {topics.map((topic, i) => (
                                <Link
                                    key={topic.id}
                                    href={`/learn/${topic.exam_board}/${topic.subject.replace(/_/g, "-")}/${topic.id}`}
                                    className="glass-card group p-6 fade-in-up flex flex-col h-full hover:border-[var(--primary)] transition-colors"
                                    style={{ animationDelay: `${i * 0.05}s` }}
                                    id={`topic-card-${topic.id}`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(102,126,234,0.1)", color: "var(--primary)" }}>
                                            {topic.topic_number}
                                        </span>
                                        {user?.progress[topic.id]?.completed && (
                                            <span className="text-emerald-500 text-lg">✅</span>
                                        )}
                                    </div>

                                    <h3 className="font-bold text-xl mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                                        {topic.topic_title}
                                    </h3>

                                    <p className="text-sm mb-6 flex-grow line-clamp-3 opacity-80">
                                        {/* @ts-ignore - Manifest items might be missing full content structure */}
                                        {topic.section_1_key_concepts?.overview || "Click to view this topic."}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs opacity-70">
                                        <span className="flex items-center gap-1">
                                            {/* @ts-ignore */}
                                            📝 {topic.section_1_key_concepts?.learning_objectives?.length || 0} objectives
                                        </span>
                                        <span className="uppercase font-semibold tracking-wider text-[10px]">
                                            {topic.tier_level === "both" ? "F & H" : topic.tier_level}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card p-12 text-center opacity-70">
                            <div className="text-4xl mb-4">🏗️</div>
                            <h3 className="text-xl font-bold mb-2">Topics coming soon</h3>
                            <p>We&apos;re building comprehensive content for this subject.</p>
                        </div>
                    )}
                </div>

                {/* Quizzes */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl font-bold">❓ Quizzes</h2>
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border)] opacity-70">{quizzes.length}</span>
                    </div>

                    {quizzes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {quizzes.map((quiz, i) => (
                                <Link
                                    key={quiz.id}
                                    href={`/quiz/${quiz.id}`}
                                    className="glass-card group p-6 fade-in-up flex flex-col h-full hover:border-[var(--primary)] transition-colors"
                                    style={{ animationDelay: `${i * 0.05}s` }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md">
                                            ❓
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${quiz.difficulty === 'foundation' ? 'bg-emerald-500/10 text-emerald-600' : quiz.difficulty === 'higher' ? 'bg-purple-500/10 text-purple-600' : 'bg-blue-500/10 text-blue-600'}`}>
                                            {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">
                                        {quiz.title}
                                    </h3>

                                    <div className="mt-auto grid grid-cols-3 gap-2 text-center text-xs opacity-70 pt-4 border-t border-[var(--border)]">
                                        <div className="bg-[var(--bg)] p-1 rounded">
                                            <div className="font-bold">{quiz.questions.length}</div>
                                            <div>Qs</div>
                                        </div>
                                        <div className="bg-[var(--bg)] p-1 rounded">
                                            <div className="font-bold">{quiz.time_limit}m</div>
                                            <div>Time</div>
                                        </div>
                                        <div className="bg-[var(--bg)] p-1 rounded">
                                            <div className="font-bold">{quiz.passing_score}%</div>
                                            <div>Pass</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card p-12 text-center opacity-70">
                            <div className="text-4xl mb-4">🏗️</div>
                            <h3 className="text-xl font-bold mb-2">Quizzes coming soon</h3>
                            <p>Check back for quizzes on this subject.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
