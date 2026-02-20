"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { SEED_QUIZZES } from "@/data/seed-quizzes";
import { SUBJECTS } from "@/lib/constants";
import { useAppStore } from "@/lib/store";
import { formatTime, getGradeFromPercentage, COIN_REWARDS, XP_REWARDS } from "@/lib/utils";

type QuizState = "intro" | "active" | "review";

export default function QuizPage() {
    const params = useParams();
    const quizId = params.quizId as string;
    const quiz = SEED_QUIZZES.find((q) => q.id === quizId);
    const subject = SUBJECTS.find((s) => s.id === quiz?.subject);

    const [state, setState] = useState<QuizState>("intro");
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [timeLeft, setTimeLeft] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const { addCoins, addXP, addQuizAttempt } = useAppStore();

    const startQuiz = () => {
        setState("active");
        setTimeLeft((quiz?.time_limit || 10) * 60);
        setCurrentQ(0);
        setAnswers({});
    };

    const finishQuiz = useCallback(() => {
        setState("review");
        if (!quiz) return;
        const correct = quiz.questions.filter((q) => answers[q.id]?.toLowerCase().trim() === q.correct_answer.toLowerCase().trim()).length;
        const pct = Math.round((correct / quiz.questions.length) * 100);
        const passed = pct >= quiz.passing_score;
        if (passed) { addCoins(COIN_REWARDS.QUIZ_PASS); addXP(XP_REWARDS.QUIZ_PASS); }
        else { addXP(XP_REWARDS.QUIZ_COMPLETE); }
        if (pct === 100) { addCoins(COIN_REWARDS.PERFECT_SCORE); addXP(XP_REWARDS.PERFECT_QUIZ); }
        addQuizAttempt({
            quiz_id: quiz.id, user_id: "local", score: correct, percentage: pct,
            time_taken: (quiz.time_limit * 60) - timeLeft, completed_at: new Date().toISOString(),
            answers: quiz.questions.map((q) => ({
                question_id: q.id, user_answer: answers[q.id] || "", correct: answers[q.id]?.toLowerCase().trim() === q.correct_answer.toLowerCase().trim()
            }))
        });
    }, [quiz, answers, timeLeft, addCoins, addXP, addQuizAttempt]);

    useEffect(() => {
        if (state !== "active" || timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) { finishQuiz(); return 0; }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [state, timeLeft, finishQuiz]);

    if (!quiz) return <div className="container py-20 text-center"><h1 className="text-2xl font-bold mb-4">Quiz not found</h1><Link href="/quiz" className="btn-primary">← Back to Quizzes</Link></div>;

    const question = quiz.questions[currentQ];
    const totalCorrect = quiz.questions.filter((q) => answers[q.id]?.toLowerCase().trim() === q.correct_answer.toLowerCase().trim()).length;
    const percentage = Math.round((totalCorrect / quiz.questions.length) * 100);

    // INTRO
    if (state === "intro") return (
        <div className="py-16">
            <div className="container max-w-2xl text-center">
                <div className="glass-card p-10">
                    <span className="text-5xl mb-4 block">{subject?.icon || "❓"}</span>
                    <h1 className="text-3xl font-extrabold mb-2">{quiz.title}</h1>
                    <p className="mb-6" style={{ color: "var(--text-muted)" }}>{subject?.name} · {quiz.exam_board.toUpperCase()}</p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="p-4 rounded-xl" style={{ border: "1px solid var(--border)" }}><div className="text-2xl font-bold gradient-text">{quiz.questions.length}</div><div className="text-xs" style={{ color: "var(--text-muted)" }}>Questions</div></div>
                        <div className="p-4 rounded-xl" style={{ border: "1px solid var(--border)" }}><div className="text-2xl font-bold gradient-text">{quiz.time_limit}</div><div className="text-xs" style={{ color: "var(--text-muted)" }}>Minutes</div></div>
                        <div className="p-4 rounded-xl" style={{ border: "1px solid var(--border)" }}><div className="text-2xl font-bold gradient-text">{quiz.passing_score}%</div><div className="text-xs" style={{ color: "var(--text-muted)" }}>Pass Mark</div></div>
                    </div>
                    <button onClick={startQuiz} className="btn-primary text-lg px-12 py-4">🚀 Start Quiz</button>
                </div>
            </div>
        </div>
    );

    // REVIEW
    if (state === "review") return (
        <div className="py-16">
            <div className="container max-w-3xl">
                <div className="glass-card p-10 text-center mb-8">
                    <span className="text-5xl mb-4 block">{percentage >= quiz.passing_score ? "🎉" : "📝"}</span>
                    <h1 className="text-3xl font-extrabold mb-2">{percentage >= quiz.passing_score ? "You Passed!" : "Keep Practising!"}</h1>
                    <div className="text-6xl font-extrabold gradient-text my-4">{percentage}%</div>
                    <p style={{ color: "var(--text-muted)" }}>{totalCorrect}/{quiz.questions.length} correct · Grade {getGradeFromPercentage(percentage)}</p>
                    {percentage >= quiz.passing_score && <p className="text-sm mt-2" style={{ color: "#10b981" }}>+{COIN_REWARDS.QUIZ_PASS} coins · +{XP_REWARDS.QUIZ_PASS} XP</p>}
                    <div className="flex gap-4 justify-center mt-6">
                        <button onClick={() => { setState("intro"); setAnswers({}); }} className="btn-secondary">🔄 Retry</button>
                        <Link href="/quiz" className="btn-primary">← All Quizzes</Link>
                    </div>
                </div>
                <h2 className="text-xl font-bold mb-4">📝 Review Answers</h2>
                <div className="space-y-4">
                    {quiz.questions.map((q, i) => {
                        const userAns = answers[q.id] || "";
                        const isCorrect = userAns.toLowerCase().trim() === q.correct_answer.toLowerCase().trim();
                        return (
                            <div key={q.id} className={`p-5 rounded-xl border-2 ${isCorrect ? "border-emerald-500 bg-emerald-500/5" : "border-red-500 bg-red-500/5"}`}>
                                <div className="flex items-center gap-2 mb-2"><span>{isCorrect ? "✅" : "❌"}</span><span className="font-bold">Q{i + 1}: {q.question}</span></div>
                                {!isCorrect && <p className="text-sm mb-1"><span style={{ color: "#ef4444" }}>Your answer: {userAns || "(no answer)"}</span></p>}
                                <p className="text-sm" style={{ color: "#10b981" }}>Correct: {q.correct_answer}</p>
                                <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>{q.explanation}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    // ACTIVE
    return (
        <div className="py-8">
            <div className="container max-w-3xl">
                {/* Timer Bar */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>Q{currentQ + 1}/{quiz.questions.length}</span>
                    <span className={`text-lg font-bold ${timeLeft < 60 ? "text-red-500" : ""}`}>⏱️ {formatTime(timeLeft)}</span>
                </div>
                <div className="progress-bar mb-8"><div className="progress-fill" style={{ width: `${((currentQ + 1) / quiz.questions.length) * 100}%` }} /></div>

                {/* Question */}
                <div className="glass-card p-8 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white ${question.difficulty === "higher" ? "bg-purple-600" : "bg-emerald-600"}`}>{question.difficulty}</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>{question.marks} mark{question.marks > 1 ? "s" : ""}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-6">{question.question}</h2>

                    {question.type === "mcq" && question.options ? (
                        <div className="space-y-3">
                            {question.options.map((opt, i) => {
                                const selected = answers[question.id] === opt;
                                const isCorrect = showFeedback && opt === question.correct_answer;
                                const isWrong = showFeedback && selected && opt !== question.correct_answer;
                                return (
                                    <button key={i} onClick={() => { if (!showFeedback) setAnswers((a) => ({ ...a, [question.id]: opt })); }}
                                        className={`answer-option w-full text-left ${selected && !showFeedback ? "border-[var(--primary)] bg-[rgba(102,126,234,0.08)]" : ""} ${isCorrect ? "answer-correct" : ""} ${isWrong ? "answer-incorrect" : ""}`}>
                                        <span className="font-semibold mr-2">{String.fromCharCode(65 + i)})</span> {opt}
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <input type="text" placeholder="Type your answer..." value={answers[question.id] || ""}
                            onChange={(e) => setAnswers((a) => ({ ...a, [question.id]: e.target.value }))}
                            className="w-full p-4 rounded-xl text-base" style={{ border: "2px solid var(--border)", background: "var(--bg)", color: "var(--text)" }}
                        />
                    )}

                    {showFeedback && (
                        <div className="mt-4 p-4 rounded-xl fade-in-up" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}>
                            <p className="font-semibold text-sm" style={{ color: "#10b981" }}>✅ Correct answer: {question.correct_answer}</p>
                            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{question.explanation}</p>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                    <button onClick={() => { setCurrentQ((c) => Math.max(0, c - 1)); setShowFeedback(false); }}
                        disabled={currentQ === 0} className="btn-secondary disabled:opacity-40">← Previous</button>
                    <button onClick={() => setShowFeedback(!showFeedback)} className="text-sm font-semibold text-[var(--primary)] hover:underline">
                        {showFeedback ? "Hide" : "Check"} Answer
                    </button>
                    {currentQ < quiz.questions.length - 1 ? (
                        <button onClick={() => { setCurrentQ((c) => c + 1); setShowFeedback(false); }} className="btn-primary">Next →</button>
                    ) : (
                        <button onClick={finishQuiz} className="btn-primary bg-gradient-to-r from-emerald-500 to-teal-600">Finish Quiz ✅</button>
                    )}
                </div>
            </div>
        </div>
    );
}
