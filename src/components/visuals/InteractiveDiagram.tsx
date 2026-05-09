"use client";
import { motion } from "framer-motion";

interface InteractiveDiagramProps {
  type: "atomic" | "oscillator" | "geometry" | "none";
  label?: string;
}

export function InteractiveDiagram({ type, label }: InteractiveDiagramProps) {
  if (type === "none") return null;

  return (
    <div className="my-8 glass-card p-6 border-2 border-[var(--primary)]/30 overflow-hidden relative min-h-[300px] flex items-center justify-center bg-black/20">
      <div className="absolute top-4 left-6">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary)]">Interactive Simulation</span>
        {label && <h4 className="text-sm font-bold opacity-70 mt-1">{label}</h4>}
      </div>

      {type === "atomic" && <AtomicModel />}
      {type === "oscillator" && <OscillatorWave />}
      {type === "geometry" && <GeometryExplorer />}

      <div className="absolute bottom-4 right-6 opacity-30 text-[10px] italic">
        Powered by GMH-Visual Engine v2.0
      </div>
    </div>
  );
}

function AtomicModel() {
  return (
    <div className="relative w-48 h-48">
      {/* Nucleus */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)] z-10 flex items-center justify-center text-[8px] font-bold text-white"
      >
        N12
      </motion.div>

      {/* Orbits */}
      <div className="absolute top-0 left-0 w-full h-full border border-dashed border-white/20 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-white/20 rounded-full" />

      {/* Electrons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
      </motion.div>
    </div>
  );
}

function OscillatorWave() {
  return (
    <div className="w-full flex items-center justify-center h-32">
      <div className="flex gap-1 items-end">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: [20, 80, 20] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            className="w-2 bg-gradient-to-t from-[var(--primary)] to-cyan-400 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}

function GeometryExplorer() {
  return (
    <div className="relative w-48 h-48">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="w-full h-full border-4 border-[var(--primary)] flex items-center justify-center"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      >
        <div className="bg-white/20 w-8 h-8 rounded-full" />
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-mono text-[10px] text-[var(--primary)] opacity-50">
        θ = 60°
      </div>
    </div>
  );
}
