"use client";
import Link from "next/link";
import { SEED_QUIZZES } from "@/data/seed-quizzes";
import { SUBJECTS } from "@/lib/constants";

export default function QuizListPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                        ❓ All <span className="gradient-text">Quizzes</span>
                    </h1>
                    <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                        Test your knowledge across all subjects with instant feedback
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SEED_QUIZZES.map((quiz, i) => {
                        const sub = SUBJECTS.find((s) => s.id === quiz.subject);
                        return (
                            <Link key={quiz.id} href={`/quiz/${quiz.id}`} className="glass-card group p-6 fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl">{sub?.icon || "📝"}</span>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: sub?.color }}>{sub?.name}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">{quiz.title}</h3>
                                <div className="flex items-center gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
                                    <span>❓ {quiz.questions.length} Qs</span>
                                    <span>⏱️ {quiz.time_limit} min</span>
                                    <span>🎯 {quiz.passing_score}%</span>
                                </div>
                                <div className="mt-3 text-xs font-semibold" style={{ color: sub?.color }}>
                                    {quiz.exam_board.toUpperCase()} · {quiz.difficulty}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
