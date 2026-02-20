"use client";
import { useState } from "react";
import Link from "next/link";
import { useAppStore, DEFAULT_USER } from "@/lib/store";
import { GIRL_AVATARS } from "@/lib/avatars";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState(GIRL_AVATARS[0].emoji);
    const { setUser, isAuthenticated } = useAppStore();

    if (isAuthenticated) {
        return (
            <div className="py-20 container max-w-lg text-center">
                <div className="glass-card p-10">
                    <span className="text-5xl block mb-4">✅</span>
                    <h1 className="text-2xl font-bold mb-3">You&apos;re Already Signed In</h1>
                    <div className="flex gap-3 justify-center mt-6">
                        <Link href="/profile" className="btn-primary">View Profile</Link>
                        <Link href="/subjects" className="btn-secondary">Start Learning</Link>
                    </div>
                </div>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Demo login — username only with selected avatar
        setUser({
            ...DEFAULT_USER,
            uid: `user_${Date.now()}`,
            profile: {
                ...DEFAULT_USER.profile,
                name: username || "Student",
                email: `${username.toLowerCase().replace(/\s+/g, "")}@gcse.hub`,
                avatar: selectedAvatar,
                decorations: [],
                coins: 100,
                xp: 0,
                joined_at: new Date().toISOString(),
            },
        });
    };

    return (
        <div className="py-16 md:py-24">
            <div className="container max-w-md">
                <div className="glass-card p-8 md:p-10">
                    <div className="text-center mb-8">
                        <span className="text-4xl block mb-3">🎓</span>
                        <h1 className="text-2xl font-extrabold mb-1">Welcome to GCSE Hub</h1>
                        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                            Enter your username to get started
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-sm font-medium mb-1.5 block">Username</label>
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                placeholder="Enter your username"
                                required
                                className="w-full p-3 rounded-xl text-sm" 
                                style={{ border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)" }} 
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block">Choose Your Avatar (All 20 available at Level 1)</label>
                            <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto p-2 rounded-lg" style={{ background: "var(--bg-card)" }}>
                                {GIRL_AVATARS.map((avatar) => (
                                    <button
                                        key={avatar.id}
                                        type="button"
                                        onClick={() => setSelectedAvatar(avatar.emoji)}
                                        className={`p-2 rounded-lg text-2xl transition-all ${
                                            selectedAvatar === avatar.emoji
                                                ? "ring-2 scale-110"
                                                : ""
                                        }`}
                                        style={{
                                            background: selectedAvatar === avatar.emoji ? "var(--primary)" : "var(--bg)",
                                            ringColor: "var(--primary)",
                                            color: "var(--text)"
                                        }}
                                        title={avatar.name}
                                    >
                                        {avatar.emoji}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs mt-2 opacity-70">Selected: {selectedAvatar} {GIRL_AVATARS.find(a => a.emoji === selectedAvatar)?.name}</p>
                        </div>

                        <button type="submit" className="btn-primary w-full justify-center py-3 text-base">
                            Sign In 🚀
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
