"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Topic } from "@/types";

interface VirtualTutorProps {
    topic: Topic;
}

export function VirtualTutor({ topic }: VirtualTutorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "assistant" | "user"; content: string }[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    role: "assistant",
                    content: `Hi! I'm your GCSE AI Tutor. I'm here to help you master "${topic.topic_title}". What can I explain for you?`,
                },
            ]);
        }
    }, [topic.topic_title, messages.length]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { role: "user" as const, content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate AI response based on topic content
        setTimeout(() => {
            let response = "That's a great question! Based on this topic, ";

            const lowerInput = input.toLowerCase();
            if (lowerInput.includes("example")) {
                response += `you should look at the Worked Examples section. For instance, ${topic.section_3_worked_examples[0]?.question || "we have several step-by-step guides there."}`;
            } else if (lowerInput.includes("exam") || lowerInput.includes("tip")) {
                response += `here's a tip: ${topic.section_5_exam_guidance.exam_tips[0] || "always show your working out to get partial marks!"}`;
            } else if (lowerInput.includes("hard") || lowerInput.includes("difficult")) {
                response += "don't worry! Try breaking it down into smaller steps. Have you checked the Key Terms section yet?";
            } else {
                response += `to understand ${topic.topic_title} better, remember that ${topic.section_1_key_concepts.key_terms[0]?.definition || "mastering the basics is key."}`;
            }

            setMessages((prev) => [...prev, { role: "assistant", content: response }]);
            setIsTyping(false);
        }, 1000);
    };

    const suggestAction = (action: string) => {
        setIsTyping(true);
        setTimeout(() => {
            let msg = "";
            if (action === "quiz") msg = `Ready to test your knowledge? Try the quiz for ${topic.subject.replace(/_/g, " ")}!`;
            if (action === "exam") msg = "Feeling confident? Why not try a full mock exam in the Exam Simulator?";
            setMessages(prev => [...prev, { role: "assistant", content: msg }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="glass-card mb-4 w-80 md:w-96 flex flex-col shadow-2xl overflow-hidden border-[var(--primary)]/30"
                        style={{ height: "450px" }}
                    >
                        {/* Header */}
                        <div className="p-4 bg-[var(--gradient-primary)] text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">🤖</span>
                                <span className="font-bold">AI Study Tutor</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">✕</button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--bg)]/50">
                            <div className="flex gap-2 mb-4">
                                <button onClick={() => suggestAction("quiz")} className="text-[10px] font-bold px-2 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 hover:bg-[var(--primary)]/20">❓ Suggest Quiz</button>
                                <button onClick={() => suggestAction("exam")} className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20 hover:bg-amber-500/20">📝 Try Mock Exam</button>
                            </div>
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                            m.role === "user"
                                                ? "bg-[var(--primary)] text-white rounded-tr-none"
                                                : "bg-[var(--bg-card)] border border-[var(--border)] rounded-tl-none text-[var(--text)]"
                                        }`}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[var(--bg-card)] border border-[var(--border)] p-3 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce" />
                                            <div className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                                            <div className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-card)]">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-[var(--bg)] border border-[var(--border)] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary)]"
                                />
                                <button
                                    onClick={handleSend}
                                    className="bg-[var(--primary)] text-white w-10 h-10 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity"
                                >
                                    ↗️
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl transition-all hover:scale-110 active:scale-95 ${
                    isOpen ? "bg-red-500 text-white rotate-90" : "bg-[var(--gradient-primary)] text-white"
                }`}
            >
                {isOpen ? "✕" : "🤖"}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" />
                )}
            </button>
        </div>
    );
}
