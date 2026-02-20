"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MOCK_EXAMS } from "@/data/seed-exams";
import { MockExam } from "@/types";

export default function ExamPage() {
    const params = useParams();
    const examId = params.examId as string;
    const exam = MOCK_EXAMS.find((e) => e.id === examId);

    const [status, setStatus] = useState<"start" | "in_progress" | "review" | "submitted">("start");
    const [timeLeft, setTimeLeft] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Initialise timer
    useEffect(() => {
        if (exam && status === "in_progress") {
            setTimeLeft(exam.duration * 60);
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setStatus("submitted"); // Auto-submit
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [status, exam]);

    if (!exam) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Exam not found</h1>
                <Link href="/exams" className="btn-primary">← Back to Exams</Link>
            </div>
        );
    }

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const handleStart = () => {
        setStatus("in_progress");
    };

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = () => {
        if (confirm("Are you sure you want to submit your exam? You cannot change answers after submitting.")) {
            setStatus("submitted");
        }
    };

    // Render Start Screen
    if (status === "start") {
        return (
            <div className="container py-20 max-w-2xl text-center">
                <div className="glass-card p-10 fade-in-up">
                    <div className="text-6xl mb-6">📝</div>
                    <h1 className="text-3xl font-bold mb-4">{exam.title}</h1>
                    <div className="grid grid-cols-3 gap-4 mb-8 text-sm">
                        <div className="bg-[var(--bg)] p-3 rounded-xl">
                            <span className="block font-bold text-lg">{exam.duration}m</span>
                            <span className="opacity-70">Duration</span>
                        </div>
                        <div className="bg-[var(--bg)] p-3 rounded-xl">
                            <span className="block font-bold text-lg">{exam.marks}</span>
                            <span className="opacity-70">Total Marks</span>
                        </div>
                        <div className="bg-[var(--bg)] p-3 rounded-xl">
                            <span className="block font-bold text-lg">{exam.questionCount}</span>
                            <span className="opacity-70">Questions</span>
                        </div>
                    </div>

                    <div className="text-left space-y-3 mb-8 bg-[rgba(245,158,11,0.1)] p-6 rounded-xl border border-amber-500/20">
                        <h3 className="font-bold text-amber-500 flex items-center gap-2">
                            ⚠️ Important Instructions
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
                            <li>The timer starts immediately when you click Start.</li>
                            <li>You can navigate between questions freely.</li>
                            <li>Your answers are not saved if you close the browser.</li>
                            <li>Calculators are {exam.title.toLowerCase().includes("non-calculator") ? "NOT allowed" : "allowed"} for this paper.</li>
                        </ul>
                    </div>

                    <button onClick={handleStart} className="btn-primary w-full py-4 text-lg font-bold shadow-lg shadow-[var(--primary)]/20">
                        Start Exam Now
                    </button>
                    <Link href="/exams" className="block mt-4 text-sm hover:underline opacity-60">Cancel</Link>
                </div>
            </div>
        );
    }

    // Render Submitted Screen
    if (status === "submitted") {
        return (
            <div className="container py-20 max-w-2xl text-center">
                <div className="glass-card p-10 fade-in-up">
                    <div className="text-6xl mb-6">✅</div>
                    <h1 className="text-3xl font-bold mb-2">Exam Submitted!</h1>
                    <p className="mb-8 opacity-80">Great effort! Your exam has been completed.</p>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-xl mb-8">
                        <h3 className="font-bold text-emerald-500 mb-2">Self-Assessment</h3>
                        <p className="text-sm">Since this is an open-answer exam, automatic grading is limited. Review your answers against the mark scheme provided in the Topics section.</p>
                    </div>

                    <Link href="/exams" className="btn-primary w-full py-3">Return to Exam Hub</Link>
                </div>
            </div>
        );
    }

    // Render In Progress
    const currentQuestion = exam.questions[currentQuestionIndex];
    const isFirst = currentQuestionIndex === 0;
    const isLast = currentQuestionIndex === exam.questions.length - 1;

    return (
        <div className="min-h-screen pb-20">
            {/* Exam Header */}
            <div className="sticky top-0 z-40 bg-[var(--bg-card)] border-b border-[var(--border)] backdrop-blur-xl">
                <div className="container h-16 flex items-center justify-between">
                    <div className="font-bold truncate max-w-[200px] sm:max-w-md">
                        {exam.title}
                    </div>
                    <div className={`font-mono font-bold text-xl px-4 py-1 rounded-lg ${timeLeft < 300 ? "bg-red-500/10 text-red-500 animate-pulse" : "bg-[var(--bg)]"}`}>
                        {formatTime(timeLeft)}
                    </div>
                </div>
            </div>

            {/* Question Area */}
            <div className="container py-8 max-w-3xl">
                {/* Progress Bar */}
                <div className="w-full h-2 bg-[var(--bg)] rounded-full mb-8 overflow-hidden">
                    <div
                        className="h-full bg-[var(--primary)] transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / exam.questions.length) * 100}%` }}
                    />
                </div>

                <div className="glass-card p-6 md:p-10 min-h-[400px] flex flex-col relative">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-sm font-bold opacity-60">Question {currentQuestionIndex + 1} of {exam.questions.length}</span>
                        <span className="text-sm font-bold bg-[var(--bg)] px-2 py-1 rounded">[{currentQuestion.marks} marks]</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
                        <span className="mr-3 opacity-50">{currentQuestion.number})</span>
                        {currentQuestion.question}
                    </h2>

                    {/* Answer Input */}
                    <div className="mt-auto">
                        {currentQuestion.type === "multiple_choice" ? (
                            <div className="space-y-3">
                                {currentQuestion.options?.map((opt, i) => (
                                    <label
                                        key={i}
                                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${answers[currentQuestion.id] === opt ? "border-[var(--primary)] bg-[var(--primary)]/10" : "border-[var(--border)] hover:bg-[var(--bg)]"}`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${answers[currentQuestion.id] === opt ? "border-[var(--primary)]" : "border-gray-400"}`}>
                                            {answers[currentQuestion.id] === opt && <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />}
                                        </div>
                                        <input
                                            type="radio"
                                            name={currentQuestion.id}
                                            value={opt}
                                            checked={answers[currentQuestion.id] === opt}
                                            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                                            className="hidden"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        ) : currentQuestion.type === "long_answer" ? (
                            <textarea
                                className="w-full h-64 p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] focus:border-[var(--primary)] outline-none resize-none"
                                placeholder="Type your answer here..."
                                value={answers[currentQuestion.id] || ""}
                                onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                            />
                        ) : (
                            <input
                                type="text"
                                className="w-full p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] focus:border-[var(--primary)] outline-none"
                                placeholder="Your answer..."
                                value={answers[currentQuestion.id] || ""}
                                onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                            />
                        )}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                        disabled={isFirst}
                        className="px-6 py-3 rounded-lg font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--bg)] transition-colors"
                    >
                        ← Previous
                    </button>

                    {isLast ? (
                        <button
                            onClick={handleSubmit}
                            className="btn-primary px-8 py-3 bg-red-500 hover:bg-red-600 border-red-500"
                        >
                            Finish & Submit Exam
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                            className="btn-primary px-8 py-3"
                        >
                            Next Question →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
