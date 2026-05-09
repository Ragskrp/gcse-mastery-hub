"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface ShareModalProps {
    title: string;
    text: string;
    url?: string;
    onClose: () => void;
}

export function ShareModal({ title, text, url = "https://gcsemasteryhub.com", onClose }: ShareModalProps) {
    const [copied, setCopied] = useState(false);

    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const fullText = `${text}\n\nCheck it out here: ${shareUrl}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fullText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareOnTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}`;
        window.open(twitterUrl, "_blank");
    };

    const shareOnWhatsApp = () => {
        const waUrl = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
        window.open(waUrl, "_blank");
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card w-full max-w-md p-8 relative overflow-hidden"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-xl opacity-50 hover:opacity-100">✕</button>

                <div className="text-center mb-6">
                    <div className="text-5xl mb-4">🚀</div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="opacity-70 text-sm mt-2">Spread the word and help your friends ace their GCSEs too!</p>
                </div>

                <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)] mb-6 text-sm italic opacity-80">
                    &quot;{text}&quot;
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <button onClick={shareOnTwitter} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 transition-colors">
                        <span className="text-2xl">𝕏</span>
                        <span className="text-[10px] font-bold">Twitter</span>
                    </button>
                    <button onClick={shareOnWhatsApp} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors">
                        <span className="text-2xl">💬</span>
                        <span className="text-[10px] font-bold">WhatsApp</span>
                    </button>
                    <button onClick={copyToClipboard} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-colors">
                        <span className="text-2xl">{copied ? "✅" : "🔗"}</span>
                        <span className="text-[10px] font-bold">{copied ? "Copied!" : "Copy Link"}</span>
                    </button>
                </div>

                <div className="text-center">
                    <button onClick={onClose} className="text-sm font-bold opacity-60 hover:opacity-100">Maybe later</button>
                </div>

                {/* Decorative background */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--primary)] rounded-full blur-3xl opacity-10 pointer-events-none" />
            </motion.div>
        </div>
    );
}
