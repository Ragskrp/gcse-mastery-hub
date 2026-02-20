"use client";
import { useAppStore, DEFAULT_USER } from "@/lib/store";
import { BADGES, SHOP_ITEMS } from "@/lib/constants";
import { getXPProgress, formatNumber } from "@/lib/utils";
import { GIRL_AVATARS, DECORATIONS, getUnlockedAvatars, getUnlockedDecorations } from "@/lib/avatars";
import { useState } from "react";

export default function ProfilePage() {
    const { user, isAuthenticated, setUser, addCoins, purchaseItem, setAvatar, addDecoration, removeDecoration } = useAppStore();
    const [tab, setTab] = useState<"stats" | "customize" | "badges" | "shop">("stats");
    const [showAvatarGrid, setShowAvatarGrid] = useState(false);

    // Quick demo login
    if (!isAuthenticated || !user) {
        return (
            <div className="py-20 container max-w-lg text-center">
                <div className="glass-card p-10">
                    <span className="text-5xl block mb-4">👤</span>
                    <h1 className="text-2xl font-bold mb-3">Sign In to View Profile</h1>
                    <p className="mb-6" style={{ color: "var(--text-muted)" }}>Track your progress, earn badges, and unlock rewards.</p>
                    <button onClick={() => setUser({ ...DEFAULT_USER, uid: "demo", profile: { ...DEFAULT_USER.profile, name: "Demo Student", email: "demo@gcse.hub", coins: 500, xp: 250 }, badges: ["first_login", "first_topic"] })} className="btn-primary text-base px-8 py-3">
                        🚀 Quick Demo Login
                    </button>
                </div>
            </div>
        );
    }

    const xpProg = getXPProgress(user.profile.xp);
    const earnedBadges = BADGES.filter((b) => user.badges.includes(b.id));
    const lockedBadges = BADGES.filter((b) => !user.badges.includes(b.id));

    return (
        <div className="py-10 md:py-16">
            <div className="container max-w-4xl">
                {/* Profile Header */}
                <div className="glass-card p-8 mb-8 text-center">
                    <div className="text-6xl mb-3 relative inline-block">
                        {user.profile.avatar}
                        {user.profile.decorations && user.profile.decorations.map((decoId) => {
                            const deco = DECORATIONS.find(d => d.id === decoId);
                            if (!deco) return null;
                            const positions: Record<string, string> = {
                                "top": "absolute -top-3 right-0 text-2xl",
                                "bottom": "absolute -bottom-3 right-0 text-2xl",
                                "left": "absolute top-1/2 -left-4 text-2xl",
                                "right": "absolute top-1/2 -right-4 text-2xl"
                            };
                            return (
                                <div key={decoId} className={positions[deco.position]}>
                                    {deco.emoji}
                                </div>
                            );
                        })}
                    </div>
                    <h1 className="text-2xl font-extrabold mb-1">{user.profile.name}</h1>
                    <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Level {user.profile.level} · Member since {new Date(user.profile.joined_at).toLocaleDateString()}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                        <div className="p-3 rounded-xl" style={{ border: "1px solid var(--border)" }}><div className="text-xl font-bold text-yellow-500">🪙 {formatNumber(user.profile.coins)}</div><div className="text-xs" style={{ color: "var(--text-muted)" }}>Coins</div></div>
                        <div className="p-3 rounded-xl" style={{ border: "1px solid var(--border)" }}><div className="text-xl font-bold text-purple-500">⚡ {formatNumber(user.profile.xp)}</div><div className="text-xs" style={{ color: "var(--text-muted)" }}>XP</div></div>
                        <div className="p-3 rounded-xl" style={{ border: "1px solid var(--border)" }}><div className="text-xl font-bold streak-fire">🔥 {user.streaks.currentStreak}</div><div className="text-xs" style={{ color: "var(--text-muted)" }}>Streak</div></div>
                        <div className="p-3 rounded-xl" style={{ border: "1px solid var(--border)" }}><div className="text-xl font-bold text-emerald-500">🏆 {earnedBadges.length}</div><div className="text-xs" style={{ color: "var(--text-muted)" }}>Badges</div></div>
                    </div>
                    {/* XP Progress */}
                    <div className="max-w-md mx-auto">
                        <div className="flex justify-between text-xs mb-1" style={{ color: "var(--text-muted)" }}><span>Level {user.profile.level}</span><span>{Math.round(xpProg.percentage)}%</span></div>
                        <div className="progress-bar"><div className="progress-fill" style={{ width: `${xpProg.percentage}%` }} /></div>
                        <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{xpProg.current}/{xpProg.needed} XP to Level {user.profile.level + 1}</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6 flex-wrap">
                    {(["stats", "customize", "badges", "shop"] as const).map((t) => (
                        <button key={t} onClick={() => setTab(t)} className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${tab === t ? "text-white shadow-lg" : ""}`}
                            style={tab === t ? { background: "var(--gradient-primary)" } : { border: "1px solid var(--border)" }}>
                            {t === "stats" ? "📊 Stats" : t === "customize" ? "✨ Avatar" : t === "badges" ? "🏅 Badges" : "🛍️ Shop"}
                        </button>
                    ))}
                </div>

                {/* Customize Tab */}
                {tab === "customize" && (
                    <div className="space-y-6 fade-in-up">
                        {/* Avatar Selection */}
                        <div className="glass-card p-8">
                            <h3 className="font-bold text-lg mb-6">🎨 Choose Your Avatar</h3>
                            <div className="flex items-center justify-center mb-8">
                                <div className="text-8xl animate-pulse">{user.profile.avatar}</div>
                            </div>
                            <div className="grid grid-cols-5 gap-3 max-h-64 overflow-y-auto p-4 rounded-lg" style={{ background: "var(--bg-card)" }}>
                                {getUnlockedAvatars(user.profile.level).map((avatar) => (
                                    <button
                                        key={avatar.id}
                                        onClick={() => setAvatar(avatar.emoji)}
                                        className={`p-3 rounded-lg text-3xl transition-all hover:scale-110 ${
                                            user.profile.avatar === avatar.emoji ? "ring-2 scale-110" : ""
                                        }`}
                                        style={{
                                            background: user.profile.avatar === avatar.emoji ? "var(--primary)" : "var(--bg)",
                                        }}
                                        title={`${avatar.name} - Level ${avatar.unlockedAtLevel}`}
                                    >
                                        {avatar.emoji}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs mt-4 opacity-70">💡 Unlock more avatars by reaching higher levels! Current: Level {user.profile.level}</p>
                        </div>

                        {/* Decorations */}
                        <div className="glass-card p-8">
                            <h3 className="font-bold text-lg mb-6">✨ Avatar Decorations (Level 5+)</h3>
                            {user.profile.level < 5 ? (
                                <div className="text-center p-8 opacity-70">
                                    <p className="text-sm mb-2">🔒 Decorations unlock at Level 5</p>
                                    <p className="text-xs">You're at Level {user.profile.level}. {5 - user.profile.level} more levels to go!</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="p-6 rounded-lg text-center" style={{ background: "var(--bg-card)" }}>
                                        <div className="text-6xl relative inline-block">
                                            {user.profile.avatar}
                                            {user.profile.decorations && user.profile.decorations.map((decoId, idx) => {
                                                const deco = DECORATIONS.find(d => d.id === decoId);
                                                if (!deco) return null;
                                                const positions: Record<string, string> = {
                                                    "top": "-top-2 -right-2 text-2xl",
                                                    "bottom": "-bottom-2 -right-2 text-2xl",
                                                    "left": "-left-4 top-1/2 text-2xl",
                                                    "right": "-right-4 top-1/2 text-2xl"
                                                };
                                                return (
                                                    <div key={decoId} className={`absolute ${positions[deco.position]}`}>
                                                        {deco.emoji}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        {getUnlockedDecorations(user.profile.level).map((deco) => {
                                            const isSelected = user.profile.decorations?.includes(deco.id);
                                            return (
                                                <button
                                                    key={deco.id}
                                                    onClick={() => {
                                                        if (isSelected) {
                                                            removeDecoration(deco.id);
                                                        } else {
                                                            addDecoration(deco.id);
                                                        }
                                                    }}
                                                    className={`p-3 rounded-lg text-center transition-all hover:scale-105 ${
                                                        isSelected ? "ring-2" : ""
                                                    }`}
                                                    style={{
                                                        background: isSelected ? "var(--primary)" : "var(--bg)",
                                                    }}
                                                    title={`${deco.name} - Level ${deco.unlockedAtLevel}`}
                                                >
                                                    <div className="text-2xl mb-1">{deco.emoji}</div>
                                                    <div className="text-xs font-semibold">{deco.name}</div>
                                                    {isSelected && <div className="text-xs mt-1">✓ Active</div>}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Stats Tab */}
                {tab === "stats" && (
                    <div className="space-y-4 fade-in-up">
                        <div className="glass-card p-6">
                            <h3 className="font-bold mb-4">📊 Learning Stats</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div><div className="text-2xl font-bold gradient-text">{Object.keys(user.progress).length}</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Topics Started</p></div>
                                <div><div className="text-2xl font-bold gradient-text">{Object.values(user.progress).filter((p) => p.completed).length}</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Topics Completed</p></div>
                                <div><div className="text-2xl font-bold gradient-text">{user.quiz_history.length}</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Quizzes Taken</p></div>
                                <div><div className="text-2xl font-bold gradient-text">{user.quiz_history.length > 0 ? Math.round(user.quiz_history.reduce((a, q) => a + q.percentage, 0) / user.quiz_history.length) : 0}%</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Avg Quiz Score</p></div>
                                <div><div className="text-2xl font-bold gradient-text">{user.streaks.bestStreak}</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Best Streak</p></div>
                                <div><div className="text-2xl font-bold gradient-text">{user.streaks.streakMultiplier}x</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Multiplier</p></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Badges Tab */}
                {tab === "badges" && (
                    <div className="fade-in-up">
                        <h3 className="font-bold mb-4">🏅 Earned ({earnedBadges.length})</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                            {earnedBadges.map((b) => (
                                <div key={b.id} className={`glass-card p-4 text-center rarity-${b.rarity}`}>
                                    <span className="text-3xl block mb-2">{b.icon}</span>
                                    <div className="font-bold text-sm">{b.name}</div>
                                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{b.description}</div>
                                </div>
                            ))}
                        </div>
                        <h3 className="font-bold mb-4" style={{ color: "var(--text-muted)" }}>🔒 Locked ({lockedBadges.length})</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {lockedBadges.map((b) => (
                                <div key={b.id} className="glass-card p-4 text-center opacity-50">
                                    <span className="text-3xl block mb-2 grayscale">🔒</span>
                                    <div className="font-bold text-sm">{b.name}</div>
                                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{b.requirement}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Shop Tab */}
                {tab === "shop" && (
                    <div className="fade-in-up">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold">🛍️ Shop</h3>
                            <span className="text-sm font-semibold">🪙 {formatNumber(user.profile.coins)} coins available</span>
                        </div>
                        <h4 className="font-semibold mb-3">🎨 Themes</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                            {SHOP_ITEMS.filter((i) => i.type === "theme").map((item) => {
                                const owned = user.purchased_items.includes(item.id);
                                const canAfford = user.profile.coins >= item.price;
                                return (
                                    <div key={item.id} className={`glass-card p-4 text-center rarity-${item.rarity}`}>
                                        <span className="text-3xl block mb-2">{item.preview}</span>
                                        <div className="font-bold text-sm">{item.name}</div>
                                        <div className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{item.description}</div>
                                        {owned ? (
                                            <span className="text-xs font-bold text-emerald-500">✅ Owned</span>
                                        ) : (
                                            <button disabled={!canAfford} onClick={() => purchaseItem(item.id, item.price)}
                                                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${canAfford ? "btn-primary text-xs py-1.5 px-3" : "opacity-40 cursor-not-allowed"}`}
                                                style={!canAfford ? { background: "var(--border)" } : {}}>
                                                🪙 {item.price}
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <h4 className="font-semibold mb-3">👤 Avatars</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {SHOP_ITEMS.filter((i) => i.type === "avatar").map((item) => {
                                const owned = user.purchased_items.includes(item.id);
                                const canAfford = user.profile.coins >= item.price;
                                return (
                                    <div key={item.id} className={`glass-card p-4 text-center rarity-${item.rarity}`}>
                                        <span className="text-3xl block mb-2">{item.preview}</span>
                                        <div className="font-bold text-sm">{item.name}</div>
                                        <div className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{item.description}</div>
                                        {owned ? (
                                            <span className="text-xs font-bold text-emerald-500">✅ Owned</span>
                                        ) : (
                                            <button disabled={!canAfford} onClick={() => purchaseItem(item.id, item.price)}
                                                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${canAfford ? "btn-primary text-xs py-1.5 px-3" : "opacity-40 cursor-not-allowed"}`}
                                                style={!canAfford ? { background: "var(--border)" } : {}}>
                                                🪙 {item.price}
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
