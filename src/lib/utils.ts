import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// XP needed to reach each level (1-50)
export function xpForLevel(level: number): number {
    return Math.floor(100 * Math.pow(1.15, level - 1));
}

export function getLevelFromXP(xp: number): number {
    let level = 1;
    let totalXP = 0;
    while (level < 50) {
        totalXP += xpForLevel(level);
        if (xp < totalXP) return level;
        level++;
    }
    return 50;
}

export function getXPProgress(xp: number): { current: number; needed: number; percentage: number } {
    const level = getLevelFromXP(xp);
    let xpBefore = 0;
    for (let i = 1; i < level; i++) {
        xpBefore += xpForLevel(i);
    }
    const currentLevelXP = xp - xpBefore;
    const neededXP = xpForLevel(level);
    return {
        current: currentLevelXP,
        needed: neededXP,
        percentage: Math.min((currentLevelXP / neededXP) * 100, 100),
    };
}

// Streak multiplier
export function getStreakMultiplier(streak: number): number {
    if (streak >= 30) return 3.0;
    if (streak >= 14) return 2.0;
    if (streak >= 7) return 1.5;
    if (streak >= 3) return 1.25;
    return 1.0;
}

// Coin rewards
export const COIN_REWARDS = {
    TOPIC_COMPLETE: 10,
    QUIZ_PASS: 50,
    STREAK_BONUS: 100,
    FIRST_LOGIN: 25,
    PERFECT_SCORE: 200,
    DAILY_LOGIN: 5,
} as const;

// XP rewards
export const XP_REWARDS = {
    TOPIC_VIEW: 5,
    TOPIC_COMPLETE: 25,
    QUIZ_COMPLETE: 15,
    QUIZ_PASS: 30,
    PERFECT_QUIZ: 100,
    DAILY_LOGIN: 10,
} as const;

// Format numbers nicely
export function formatNumber(num: number): string {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
}

// Time formatting
export function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Subject slug helpers
export function subjectToSlug(subject: string): string {
    return subject.replace(/_/g, "-");
}

export function slugToSubject(slug: string): string {
    return slug.replace(/-/g, "_");
}

// Grade from percentage
export function getGradeFromPercentage(percentage: number): number {
    if (percentage >= 95) return 9;
    if (percentage >= 85) return 8;
    if (percentage >= 75) return 7;
    if (percentage >= 65) return 6;
    if (percentage >= 55) return 5;
    if (percentage >= 45) return 4;
    if (percentage >= 35) return 3;
    if (percentage >= 25) return 2;
    return 1;
}
