"use client";
import { useState } from "react";
import Link from "next/link";
import { useAppStore } from "@/lib/store";
import { SUBJECTS } from "@/lib/constants";

import { MOCK_EXAMS } from "@/data/seed-exams";

export default function ExamsPage() {
    const { user } = useAppStore();
    const [selectedSubject, setSelectedSubject] = useState<string>("all");

    const filteredExams = selectedSubject === "all"
        ? MOCK_EXAMS
        : MOCK_EXAMS.filter(e => e.subject === selectedSubject);

    return (
        <div className="py-12 md:py-20">
            <div className="container">
                <div className="text-center mb-16 fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        <span className="gradient-text">Exam Simulator</span> 📝
                    </h1>
                    <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto">
                        Practice with past papers under timed conditions. The best way to prepare for the real thing.
                    </p>
                </div>

                {/* Subject Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <button
                        onClick={() => setSelectedSubject("all")}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedSubject === "all" ? "bg-white text-black" : "glass-card hover:bg-white/10"}`}
                    >
                        All Subjects
                    </button>
                    {SUBJECTS.map((sub) => (
                        <button
                            key={sub.id}
                            onClick={() => setSelectedSubject(sub.id)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${selectedSubject === sub.id ? "bg-[var(--primary)] text-white" : "glass-card hover:bg-white/10"}`}
                        >
                            <span>{sub.icon}</span>
                            {sub.name}
                        </button>
                    ))}
                </div>

                {/* Exam Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
                    {filteredExams.map((exam) => (
                        <div key={exam.id} className="glass-card p-6 flex flex-col hover:border-[var(--primary)] transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/10 text-white/80">
                                    {exam.year}
                                </span>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${exam.difficulty === "higher" ? "bg-purple-500/20 text-purple-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                                    {exam.difficulty.charAt(0).toUpperCase() + exam.difficulty.slice(1)}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                                {exam.title}
                            </h3>

                            <div className="grid grid-cols-3 gap-2 mb-6 text-center text-sm">
                                <div className="bg-[var(--bg)] p-2 rounded-lg">
                                    <div className="font-bold">{exam.duration}m</div>
                                    <div className="text-[10px] opacity-70">Duration</div>
                                </div>
                                <div className="bg-[var(--bg)] p-2 rounded-lg">
                                    <div className="font-bold">{exam.marks}</div>
                                    <div className="text-[10px] opacity-70">Marks</div>
                                </div>
                                <div className="bg-[var(--bg)] p-2 rounded-lg">
                                    <div className="font-bold">{exam.questionCount}</div>
                                    <div className="text-[10px] opacity-70">Questions</div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Link href={`/exams/${exam.id}`} className="w-full btn-primary text-sm py-3 block text-center">
                                    Start Mock Exam
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredExams.length === 0 && (
                    <div className="text-center py-20 opacity-50">
                        <div className="text-4xl mb-4">🔍</div>
                        <p>No exams found for this subject yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
