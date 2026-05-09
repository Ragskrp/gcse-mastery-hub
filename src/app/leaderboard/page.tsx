"use client";
import { useAppStore } from "@/lib/store";
import { formatNumber } from "@/lib/utils";
import { LeaderboardEntry } from "@/types";

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
    { userId: "1", rank: 1, name: "Alex J.", avatar: "👨‍🎓", xp: 12500, level: 25, streak: 42 },
    { userId: "2", rank: 2, name: "Sarah M.", avatar: "👩‍🔬", xp: 11200, level: 23, streak: 15 },
    { userId: "3", rank: 3, name: "Brinda", avatar: "👧", xp: 10800, level: 22, streak: 30 },
    { userId: "4", rank: 4, name: "David L.", avatar: "👨‍💻", xp: 9500, level: 20, streak: 7 },
    { userId: "5", rank: 5, name: "Emma W.", avatar: "👩‍🎨", xp: 8900, level: 19, streak: 12 },
    { userId: "6", rank: 6, name: "Chris T.", avatar: "👨‍🚀", xp: 7200, level: 15, streak: 5 },
    { userId: "7", rank: 7, name: "Olivia P.", avatar: "👩‍🏫", xp: 6800, level: 14, streak: 20 },
    { userId: "8", rank: 8, name: "Ryan G.", avatar: "🦸‍♂️", xp: 5400, level: 12, streak: 3 },
];

export default function LeaderboardPage() {
    const { user } = useAppStore();

    // If real user has more XP than someone, we could inject them, but let's stick to mock for now
    // as it's a "market leading" demo.

    return (
        <div className="py-12 md:py-20">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        🏆 Global <span className="gradient-text">Leaderboard</span>
                    </h1>
                    <p className="text-lg opacity-70">
                        See how you rank against students across the country
                    </p>
                </div>

                <div className="glass-card overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b font-bold text-sm opacity-60 bg-[var(--bg)]">
                        <div className="col-span-2 text-center">Rank</div>
                        <div className="col-span-5">Student</div>
                        <div className="col-span-3 text-center">XP</div>
                        <div className="col-span-2 text-center">Level</div>
                    </div>

                    <div className="divide-y divide-[var(--border)]">
                        {MOCK_LEADERBOARD.map((entry) => {
                            const isUser = user?.profile.name === entry.name;

                            return (
                                <div
                                    key={entry.userId}
                                    className={`grid grid-cols-12 gap-4 p-5 items-center transition-colors ${isUser ? "bg-[var(--primary)]/5" : "hover:bg-[var(--bg)]"}`}
                                >
                                    <div className="col-span-2 text-center">
                                        {entry.rank === 1 && <span className="text-2xl">🥇</span>}
                                        {entry.rank === 2 && <span className="text-2xl">🥈</span>}
                                        {entry.rank === 3 && <span className="text-2xl">🥉</span>}
                                        {entry.rank > 3 && <span className="font-bold opacity-60">#{entry.rank}</span>}
                                    </div>
                                    <div className="col-span-5 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--bg)] flex items-center justify-center text-xl shadow-inner">
                                            {entry.avatar}
                                        </div>
                                        <div>
                                            <div className="font-bold flex items-center gap-2">
                                                {entry.name}
                                                {isUser && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--primary)] text-white">YOU</span>}
                                            </div>
                                            <div className="text-xs opacity-60 flex items-center gap-1">
                                                🔥 {entry.streak} day streak
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-3 text-center">
                                        <div className="font-bold text-[var(--primary)]">{formatNumber(entry.xp)}</div>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <div className="w-8 h-8 rounded-lg bg-[var(--border)] flex items-center justify-center text-xs font-bold mx-auto">
                                            {entry.level}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 p-8 glass-card text-center bg-gradient-to-br from-[var(--primary)]/10 to-transparent">
                    <h3 className="text-xl font-bold mb-2">Want to climb the ranks? 🚀</h3>
                    <p className="opacity-70 mb-6 max-w-lg mx-auto">
                        Complete topics, pass quizzes with high scores, and maintain your daily streak to earn more XP and move up the leaderboard.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="btn-primary">View Study Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
