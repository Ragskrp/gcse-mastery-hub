"use client";
import { useAppStore } from "@/lib/store";
import { motion } from "framer-motion";

export function StreakBanner() {
    const { user } = useAppStore();

    if (!user || user.streaks.currentStreak === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-4 rounded-full inline-flex items-center gap-2 shadow-lg shadow-orange-500/20 mb-6"
        >
            <span className="text-xl">🔥</span>
            <span className="font-bold text-sm">{user.streaks.currentStreak} Day Streak!</span>
            <span className="text-[10px] opacity-80 uppercase tracking-widest font-black ml-2">Keep it going</span>
        </motion.div>
    );
}
