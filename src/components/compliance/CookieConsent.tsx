"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useMounted } from "@/lib/hooks";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const mounted = useMounted();

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    if (!mounted || !isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 fade-in-up">
            <div className="container max-w-5xl">
                <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border-[var(--primary)]/30 bg-black/80 backdrop-blur-2xl">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                            🍪 Cookie Settings
                        </h3>
                        <p className="text-sm opacity-80 leading-relaxed">
                            We use cookies to enhance your learning experience, analyze traffic, and serve personalized advertisements through Google AdSense.
                            By clicking &quot;Accept All&quot;, you consent to our use of cookies as described in our{" "}
                            <Link href="/privacy" className="text-[var(--primary)] hover:underline font-semibold">Privacy Policy</Link>.
                        </p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <button
                            onClick={accept}
                            className="btn-primary px-8 py-3 whitespace-nowrap"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
