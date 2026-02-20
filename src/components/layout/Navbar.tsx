"use client";
import Link from "next/link";
import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { formatNumber } from "@/lib/utils";
import { useMounted } from "@/lib/hooks";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { user, isAuthenticated, darkMode, toggleDarkMode } = useAppStore();
    const mounted = useMounted();

    // Prevent hydration mismatch for theme/user data
    if (!mounted) {
        return (
            <header className="sticky top-0 z-50 border-b" style={{ background: "var(--bg-card)", backdropFilter: "blur(20px)", borderColor: "var(--border)" }}>
                <div className="container flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                        <span className="text-2xl">🎓</span>
                        <span className="gradient-text hidden sm:inline">GCSE Mastery Hub</span>
                        <span className="gradient-text sm:hidden">GMH</span>
                    </Link>
                </div>
            </header>
        );
    }

    return (
        <header
            className="sticky top-0 z-50 border-b"
            style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(20px)",
                borderColor: "var(--border)",
            }}
        >
            <div className="container flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                    <span className="text-2xl">🎓</span>
                    <span className="gradient-text hidden sm:inline">GCSE Mastery Hub</span>
                    <span className="gradient-text sm:hidden">GMH</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                    <Link href="/subjects" className="hover:text-[var(--primary)] transition-colors">Subjects</Link>
                    <Link href="/quiz" className="hover:text-[var(--primary)] transition-colors">Quizzes</Link>
                    <Link href="/exams" className="hover:text-[var(--primary)] transition-colors">Exams</Link>
                    <Link href="/my-progress" className="hover:text-[var(--primary)] transition-colors">Progress</Link>
                    <Link href="/profile" className="hover:text-[var(--primary)] transition-colors">Profile</Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {isAuthenticated && user && (
                        <div className="hidden sm:flex items-center gap-3 text-sm">
                            <span className="flex items-center gap-1" title="Coins">
                                <span className="text-yellow-500">🪙</span>
                                <span className="font-semibold">{formatNumber(user.profile.coins)}</span>
                            </span>
                            <span className="flex items-center gap-1" title="XP">
                                <span className="text-purple-500">⚡</span>
                                <span className="font-semibold">{formatNumber(user.profile.xp)}</span>
                            </span>
                            {user.streaks.currentStreak > 0 && (
                                <span className="flex items-center gap-1 streak-fire" title={`${user.streaks.currentStreak} day streak!`}>
                                    <span>🔥</span>
                                    <span className="font-bold">{user.streaks.currentStreak}</span>
                                </span>
                            )}
                        </div>
                    )}

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg transition-colors hover:bg-[var(--border)]"
                        aria-label="Toggle dark mode"
                        id="dark-mode-toggle"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-[var(--border)] transition-colors"
                        aria-label="Toggle menu"
                        id="mobile-menu-toggle"
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>

                    {/* Auth Button */}
                    {!isAuthenticated && (
                        <Link href="/login" className="btn-primary text-sm hidden md:inline-flex">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    className="md:hidden border-t fade-in-up"
                    style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
                >
                    <nav className="container py-4 flex flex-col gap-3">
                        <Link
                            href="/subjects"
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 rounded-lg hover:bg-[var(--border)] transition-colors font-medium"
                        >
                            📚 Subjects
                        </Link>
                        <Link
                            href="/quiz"
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 rounded-lg hover:bg-[var(--border)] transition-colors font-medium"
                        >
                            ❓ Quizzes
                        </Link>
                        <Link
                            href="/exams"
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 rounded-lg hover:bg-[var(--border)] transition-colors font-medium"
                        >
                            📝 Exams
                        </Link>
                        <Link
                            href="/my-progress"
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 rounded-lg hover:bg-[var(--border)] transition-colors font-medium"
                        >
                            📊 My Progress
                        </Link>
                        <Link
                            href="/profile"
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 rounded-lg hover:bg-[var(--border)] transition-colors font-medium"
                        >
                            👤 Profile
                        </Link>
                        {isAuthenticated && user && (
                            <div className="flex items-center gap-4 py-2 px-3 text-sm" style={{ color: "var(--text-muted)" }}>
                                <span>🪙 {user.profile.coins}</span>
                                <span>⚡ {user.profile.xp} XP</span>
                                <span>🔥 {user.streaks.currentStreak} day streak</span>
                            </div>
                        )}
                        {!isAuthenticated && (
                            <Link href="/login" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>
                                Sign In
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
