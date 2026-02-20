"use client";
import Link from "next/link";
import { useAppStore } from "@/lib/store";
import { SUBJECTS } from "@/lib/constants";
import { getXPProgress, formatNumber, getGradeFromPercentage } from "@/lib/utils";

export default function MyProgressPage() {
    const { user, isAuthenticated } = useAppStore();

    if (!isAuthenticated || !user) {
        return (
            <div className="py-20 container max-w-lg text-center">
                <div className="glass-card p-10">
                    <span className="text-5xl block mb-4">📊</span>
                    <h1 className="text-2xl font-bold mb-3">Sign In to Track Progress</h1>
                    <Link href="/login" className="btn-primary mt-4 inline-block">Sign In</Link>
                </div>
            </div>
        );
    }

    const xpProg = getXPProgress(user.profile.xp);
    const completedTopics = Object.values(user.progress).filter((p) => p.completed).length;
    const totalTopics = Object.keys(user.progress).length;
    const avgScore = user.quiz_history.length > 0 ? Math.round(user.quiz_history.reduce((a, q) => a + q.percentage, 0) / user.quiz_history.length) : 0;

    return (
        <div className="py-10 md:py-16">
            <div className="container max-w-5xl">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-8">📊 My <span className="gradient-text">Progress</span></h1>

                {/* Overview Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    <div className="glass-card p-5 text-center"><div className="text-3xl font-bold gradient-text">{user.profile.level}</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Level</p></div>
                    <div className="glass-card p-5 text-center"><div className="text-3xl font-bold text-yellow-500">{formatNumber(user.profile.coins)}</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Coins</p></div>
                    <div className="glass-card p-5 text-center"><div className="text-3xl font-bold text-emerald-500">{completedTopics}</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Topics Done</p></div>
                    <div className="glass-card p-5 text-center"><div className="text-3xl font-bold text-purple-500">{avgScore}%</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Avg Quiz</p></div>
                </div>

                {/* XP Bar */}
                <div className="glass-card p-6 mb-10">
                    <div className="flex justify-between mb-2"><span className="font-bold">Level {user.profile.level}</span><span className="text-sm" style={{ color: "var(--text-muted)" }}>{formatNumber(user.profile.xp)} XP total</span></div>
                    <div className="progress-bar" style={{ height: "12px" }}><div className="progress-fill" style={{ width: `${xpProg.percentage}%` }} /></div>
                    <div className="flex justify-between mt-1 text-xs" style={{ color: "var(--text-muted)" }}><span>{xpProg.current} XP</span><span>{xpProg.needed} XP needed</span></div>
                </div>

                {/* Subject Progress */}
                <h2 className="text-xl font-bold mb-5">📚 Subject Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {SUBJECTS.map((sub) => (
                        <Link key={sub.id} href={`/subjects/${sub.board}/${sub.id.replace(/_/g, "-")}`} className="glass-card p-5 group">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">{sub.icon}</span>
                                <div className="flex-1">
                                    <div className="font-bold group-hover:text-[var(--primary)] transition-colors">{sub.name}</div>
                                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{sub.board.toUpperCase()}</div>
                                </div>
                            </div>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: "0%" }} /></div>
                            <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>0% complete</p>
                        </Link>
                    ))}
                </div>

                {/* Recent Quiz History */}
                {user.quiz_history.length > 0 && (
                    <>
                        <h2 className="text-xl font-bold mb-5">📝 Recent Quizzes</h2>
                        <div className="space-y-3">
                            {user.quiz_history.slice(-5).reverse().map((attempt, i) => (
                                <div key={i} className="glass-card p-4 flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-sm">{attempt.quiz_id}</div>
                                        <div className="text-xs" style={{ color: "var(--text-muted)" }}>{new Date(attempt.completed_at).toLocaleDateString()}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`font-bold ${attempt.percentage >= 70 ? "text-emerald-500" : "text-red-500"}`}>{attempt.percentage}%</div>
                                        <div className="text-xs" style={{ color: "var(--text-muted)" }}>Grade {getGradeFromPercentage(attempt.percentage)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Grade Prediction */}
                <div className="glass-card p-8 mt-10 text-center" style={{ background: "var(--gradient-primary)", color: "white" }}>
                    <h3 className="text-xl font-bold mb-2">🎯 Predicted Grade</h3>
                    <div className="text-6xl font-extrabold my-3">{avgScore > 0 ? getGradeFromPercentage(avgScore) : "?"}</div>
                    <p className="opacity-80">Based on your quiz performance. Keep studying to improve!</p>
                </div>
            </div>
        </div>
    );
}
