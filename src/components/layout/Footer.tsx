import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-[var(--border)] py-16 bg-[var(--bg-card)]">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                            <span className="text-2xl">🎓</span>
                            <span className="gradient-text">GCSE Mastery Hub</span>
                        </Link>
                        <p className="text-sm opacity-60 leading-relaxed">
                            The ultimate interactive learning platform for GCSE Year 10. Master your subjects, track your progress, and ace your exams.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm opacity-70">
                            <li><Link href="/subjects" className="hover:text-[var(--primary)] transition-colors">Subjects</Link></li>
                            <li><Link href="/quiz" className="hover:text-[var(--primary)] transition-colors">Quizzes</Link></li>
                            <li><Link href="/exams" className="hover:text-[var(--primary)] transition-colors">Exam Simulator</Link></li>
                            <li><Link href="/leaderboard" className="hover:text-[var(--primary)] transition-colors">Leaderboard</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm opacity-70">
                            <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm opacity-70">
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Study Tips</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Past Papers</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Community</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
                    <div>© {new Date().getFullYear()} GCSE Mastery Hub. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-white transition-colors">TikTok</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
