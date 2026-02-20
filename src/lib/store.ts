"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserData, QuizAttempt } from "@/types";
import { getLevelFromXP } from "@/lib/utils";

interface AppState {
    // User
    user: UserData | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    darkMode: boolean;

    // Actions
    setUser: (user: UserData | null) => void;
    setLoading: (loading: boolean) => void;
    toggleDarkMode: () => void;
    addCoins: (amount: number) => void;
    addXP: (amount: number) => void;
    completeSection: (topicId: string, sectionIndex: number) => void;
    completeTopic: (topicId: string, score: number) => void;
    addBadge: (badgeId: string) => void;
    purchaseItem: (itemId: string, cost: number) => void;
    updateStreak: () => void;
    addQuizAttempt: (attempt: QuizAttempt) => void;
    logout: () => void;
    setAvatar: (avatarEmoji: string) => void;
    addDecoration: (decorationId: string) => void;
    removeDecoration: (decorationId: string) => void;
}

const DEFAULT_USER: UserData = {
    uid: "",
    profile: {
        name: "Brinda",
        email: "",
        avatar: "�",
        decorations: [],
        coins: 100,
        xp: 0,
        level: 1,
        theme: "default",
        joined_at: new Date().toISOString(),
    },
    progress: {},
    streaks: {
        currentStreak: 0,
        bestStreak: 0,
        lastActiveDate: "",
        streakMultiplier: 1.0,
    },
    badges: ["first_login"],
    purchased_items: [],
    quiz_history: [],
};

export const useAppStore = create<AppState>()(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            isLoading: true,
            darkMode: true,

            setUser: (user) =>
                set({ user, isAuthenticated: !!user, isLoading: false }),

            setLoading: (isLoading) => set({ isLoading }),

            toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

            addCoins: (amount) =>
                set((state) => {
                    if (!state.user) return state;
                    return {
                        user: {
                            ...state.user,
                            profile: {
                                ...state.user.profile,
                                coins: state.user.profile.coins + amount,
                            },
                        },
                    };
                }),

            addXP: (amount) =>
                set((state) => {
                    if (!state.user) return state;
                    const newXP = state.user.profile.xp + amount;
                    const newLevel = getLevelFromXP(newXP);
                    return {
                        user: {
                            ...state.user,
                            profile: {
                                ...state.user.profile,
                                xp: newXP,
                                level: newLevel,
                            },
                        },
                    };
                }),

            completeSection: (topicId, sectionIndex) =>
                set((state) => {
                    if (!state.user) return state;
                    const current = state.user.progress[topicId] || {
                        completed: false,
                        score: 0,
                        timeSpent: 0,
                        lastAccessed: new Date().toISOString(),
                        sectionsCompleted: [],
                    };
                    const sectionsCompleted = current.sectionsCompleted.includes(sectionIndex)
                        ? current.sectionsCompleted
                        : [...current.sectionsCompleted, sectionIndex];
                    return {
                        user: {
                            ...state.user,
                            progress: {
                                ...state.user.progress,
                                [topicId]: {
                                    ...current,
                                    sectionsCompleted,
                                    lastAccessed: new Date().toISOString(),
                                },
                            },
                        },
                    };
                }),

            completeTopic: (topicId, score) =>
                set((state) => {
                    if (!state.user) return state;
                    const current = state.user.progress[topicId] || {
                        completed: false,
                        score: 0,
                        timeSpent: 0,
                        lastAccessed: new Date().toISOString(),
                        sectionsCompleted: [],
                    };
                    return {
                        user: {
                            ...state.user,
                            progress: {
                                ...state.user.progress,
                                [topicId]: {
                                    ...current,
                                    completed: true,
                                    score: Math.max(current.score, score),
                                    lastAccessed: new Date().toISOString(),
                                },
                            },
                        },
                    };
                }),

            addBadge: (badgeId) =>
                set((state) => {
                    if (!state.user || state.user.badges.includes(badgeId)) return state;
                    return {
                        user: {
                            ...state.user,
                            badges: [...state.user.badges, badgeId],
                        },
                    };
                }),

            purchaseItem: (itemId, cost) =>
                set((state) => {
                    if (!state.user) return state;
                    if (state.user.profile.coins < cost) return state;
                    if (state.user.purchased_items.includes(itemId)) return state;
                    return {
                        user: {
                            ...state.user,
                            profile: {
                                ...state.user.profile,
                                coins: state.user.profile.coins - cost,
                            },
                            purchased_items: [...state.user.purchased_items, itemId],
                        },
                    };
                }),

            updateStreak: () =>
                set((state) => {
                    if (!state.user) return state;
                    const today = new Date().toISOString().split("T")[0];
                    const lastActive = state.user.streaks.lastActiveDate;

                    if (lastActive === today) return state;

                    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
                    const newStreak = lastActive === yesterday
                        ? state.user.streaks.currentStreak + 1
                        : 1;

                    let multiplier = 1.0;
                    if (newStreak >= 30) multiplier = 3.0;
                    else if (newStreak >= 14) multiplier = 2.0;
                    else if (newStreak >= 7) multiplier = 1.5;
                    else if (newStreak >= 3) multiplier = 1.25;

                    return {
                        user: {
                            ...state.user,
                            streaks: {
                                currentStreak: newStreak,
                                bestStreak: Math.max(state.user.streaks.bestStreak, newStreak),
                                lastActiveDate: today,
                                streakMultiplier: multiplier,
                            },
                        },
                    };
                }),

            addQuizAttempt: (attempt) =>
                set((state) => {
                    if (!state.user) return state;
                    return {
                        user: {
                            ...state.user,
                            quiz_history: [...state.user.quiz_history, attempt],
                        },
                    };
                }),

            logout: () =>
                set({
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                }),

            setAvatar: (avatarEmoji) =>
                set((state) => {
                    if (!state.user) return state;
                    return {
                        user: {
                            ...state.user,
                            profile: {
                                ...state.user.profile,
                                avatar: avatarEmoji,
                            },
                        },
                    };
                }),

            addDecoration: (decorationId) =>
                set((state) => {
                    if (!state.user) return state;
                    const decorations = state.user.profile.decorations || [];
                    if (decorations.includes(decorationId)) return state;
                    return {
                        user: {
                            ...state.user,
                            profile: {
                                ...state.user.profile,
                                decorations: [...decorations, decorationId],
                            },
                        },
                    };
                }),

            removeDecoration: (decorationId) =>
                set((state) => {
                    if (!state.user) return state;
                    const decorations = state.user.profile.decorations || [];
                    return {
                        user: {
                            ...state.user,
                            profile: {
                                ...state.user.profile,
                                decorations: decorations.filter((d) => d !== decorationId),
                            },
                        },
                    };
                }),
        }),
        {
            name: "gcse-mastery-hub-store",
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                darkMode: state.darkMode,
            }),
        }
    )
);

export { DEFAULT_USER };
