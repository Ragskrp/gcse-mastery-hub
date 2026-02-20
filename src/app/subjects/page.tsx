"use client";
import Link from "next/link";
import { SUBJECTS } from "@/lib/constants";

export default function SubjectsPage() {
    const aqaSubjects = SUBJECTS.filter((s) => s.board === "aqa");
    const edexcelSubjects = SUBJECTS.filter((s) => s.board === "edexcel");

    return (
        <div className="py-12 md:py-20">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                        All <span className="gradient-text">Subjects</span>
                    </h1>
                    <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                        8 GCSE subjects across AQA & Edexcel exam boards
                    </p>
                </div>

                {/* AQA Section */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-4 py-1.5 rounded-full text-sm font-bold text-white" style={{ background: "var(--gradient-primary)" }}>
                            AQA
                        </div>
                        <h2 className="text-xl font-bold">{aqaSubjects.length} Subjects</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {aqaSubjects.map((subject, i) => (
                            <Link
                                key={subject.id}
                                href={`/subjects/aqa/${subject.id.replace(/_/g, "-")}`}
                                className="glass-card group p-6 fade-in-up"
                                style={{ animationDelay: `${i * 0.05}s` }}
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110 subject-gradient-${subject.id}`}
                                    style={{ color: "white" }}
                                >
                                    {subject.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-1">{subject.name}</h3>
                                <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                                    {subject.description}
                                </p>
                                <div className="flex items-center justify-between text-sm" style={{ color: "var(--text-muted)" }}>
                                    <span>{subject.topicCount} topics</span>
                                    <span className="text-[var(--primary)] font-semibold group-hover:underline">
                                        View →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Edexcel Section */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-4 py-1.5 rounded-full text-sm font-bold text-white" style={{ background: "var(--gradient-secondary)" }}>
                            Edexcel
                        </div>
                        <h2 className="text-xl font-bold">{edexcelSubjects.length} Subjects</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {edexcelSubjects.map((subject, i) => (
                            <Link
                                key={subject.id}
                                href={`/subjects/edexcel/${subject.id.replace(/_/g, "-")}`}
                                className="glass-card group p-6 fade-in-up"
                                style={{ animationDelay: `${i * 0.05}s` }}
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110 subject-gradient-${subject.id}`}
                                    style={{ color: "white" }}
                                >
                                    {subject.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-1">{subject.name}</h3>
                                <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                                    {subject.description}
                                </p>
                                <div className="flex items-center justify-between text-sm" style={{ color: "var(--text-muted)" }}>
                                    <span>{subject.topicCount} topics</span>
                                    <span className="text-[var(--primary)] font-semibold group-hover:underline">
                                        View →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
