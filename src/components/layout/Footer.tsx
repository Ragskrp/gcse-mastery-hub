import Link from "next/link";

export function Footer() {
    return (
        <footer
            className="border-t py-8 mt-16"
            style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
        >
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 font-bold text-lg mb-3">
                            <span>🎓</span>
                            <span className="gradient-text">GCSE Mastery Hub</span>
                        </div>
                        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                            Free GCSE revision for Year 10 students. AQA & Edexcel subjects with gamification and AI-powered learning.
                        </p>
                    </div>

                    {/* Subjects */}
                    <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                            Subjects
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/subjects/aqa/combined-science" className="hover:text-[var(--primary)] transition-colors">Combined Science</Link></li>
                            <li><Link href="/subjects/edexcel/maths" className="hover:text-[var(--primary)] transition-colors">Maths</Link></li>
                            <li><Link href="/subjects/aqa/english-literature" className="hover:text-[var(--primary)] transition-colors">English Literature</Link></li>
                            <li><Link href="/subjects/aqa/history" className="hover:text-[var(--primary)] transition-colors">History</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/quiz" className="hover:text-[var(--primary)] transition-colors">Quizzes</Link></li>
                            <li><Link href="/my-progress" className="hover:text-[var(--primary)] transition-colors">My Progress</Link></li>
                            <li><Link href="/profile" className="hover:text-[var(--primary)] transition-colors">Profile & Shop</Link></li>
                            <li><Link href="/admin" className="hover:text-[var(--primary)] transition-colors">Admin CMS</Link></li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                            Built With
                        </h4>
                        <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                            <li>Next.js 15 + TypeScript</li>
                            <li>Tailwind CSS + Framer Motion</li>
                            <li>Firebase + Zustand</li>
                            <li>100% Free to Use</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                    <p>© {new Date().getFullYear()} GCSE Mastery Hub. Made with 💜 for GCSE students everywhere.</p>
                </div>
            </div>
        </footer>
    );
}
