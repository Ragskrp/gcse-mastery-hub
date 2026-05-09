"use client";
import { motion } from "framer-motion";

interface HeroVisualProps {
  subject: string;
  image?: string;
}

export function HeroVisual({ subject, image }: HeroVisualProps) {
  // Fallback high-quality abstract images from Unsplash if specific image isn't provided
  const fallbacks: Record<string, string> = {
    maths: "https://images.unsplash.com/photo-1509228468518-180dd48219d8?auto=format&fit=crop&w=1200&q=80",
    combined_science: "https://images.unsplash.com/photo-1532187875605-2fe358a3d198?auto=format&fit=crop&w=1200&q=80",
    english_literature: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    history: "https://images.unsplash.com/photo-1461360346954-717af9235a80?auto=format&fit=crop&w=1200&q=80",
    business: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    french: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    religious_studies: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
    geography: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    computer_science: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  };

  const imageUrl = image || fallbacks[subject] || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl"
    >
      <img
        src={imageUrl}
        alt={subject}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-8 left-8 right-8">
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="glass-card p-4 inline-block border-l-4 border-[var(--primary)]"
         >
           <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Visual Learning Experience</span>
           <div className="flex items-center gap-2 mt-1">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
             <span className="text-xs font-bold uppercase tracking-tight">HD Content Active</span>
           </div>
         </motion.div>
      </div>
    </motion.div>
  );
}
