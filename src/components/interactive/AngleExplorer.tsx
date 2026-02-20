
import React, { useState } from 'react';

export function AngleExplorer() {
    const [mode, setMode] = useState<"triangle" | "straight_line" | "parallel">("triangle");
    const [angle1, setAngle1] = useState(60);
    const [angle2, setAngle2] = useState(60);

    const angle3 = mode === "triangle" ? 180 - angle1 - angle2 : 0;
    const straightLineResult = 180 - angle1;
    const parallelResult = angle1; // Corresponding/Alternate are equal

    return (
        <div className="border border-white/20 rounded-xl p-6 bg-black/20 backdrop-blur-sm my-6">
            <h4 className="text-lg font-bold mb-4">📐 Interactive Angle Explorer</h4>

            <div className="flex gap-2 mb-6 text-sm">
                <button
                    onClick={() => setMode("triangle")}
                    className={`px-3 py-1 rounded-lg border transition ${mode === "triangle" ? "bg-[var(--primary)] border-[var(--primary)]" : "border-white/20 hover:bg-white/10"}`}
                >
                    Triangle Sum
                </button>
                <button
                    onClick={() => setMode("straight_line")}
                    className={`px-3 py-1 rounded-lg border transition ${mode === "straight_line" ? "bg-[var(--primary)] border-[var(--primary)]" : "border-white/20 hover:bg-white/10"}`}
                >
                    Straight Line
                </button>
                <button
                    onClick={() => setMode("parallel")}
                    className={`px-3 py-1 rounded-lg border transition ${mode === "parallel" ? "bg-[var(--primary)] border-[var(--primary)]" : "border-white/20 hover:bg-white/10"}`}
                >
                    Parallel Lines (Z/F)
                </button>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-6 flex flex-col items-center justify-center min-h-[200px]">
                {mode === "triangle" && (
                    <div className="text-center">
                        <div className="mb-4 text-4xl">🔺</div>
                        <div className="text-xl font-mono">
                            {angle1}° + {angle2}° + <span className="text-[var(--primary)] font-bold">{Math.max(0, angle3)}°</span> = 180°
                        </div>
                        <p className="text-sm mt-2 opacity-70">Angles in a triangle always add to 180°.</p>
                    </div>
                )}
                {mode === "straight_line" && (
                    <div className="text-center">
                        <div className="mb-4 text-4xl">📏</div>
                        <div className="text-xl font-mono">
                            {angle1}° + <span className="text-[var(--primary)] font-bold">{straightLineResult}°</span> = 180°
                        </div>
                        <p className="text-sm mt-2 opacity-70">Angles on a straight line add to 180°.</p>
                    </div>
                )}
                {mode === "parallel" && (
                    <div className="text-center">
                        <div className="mb-4 text-4xl">🛤️</div>
                        <div className="text-xl font-mono">
                            Angle A = {angle1}° <br />
                            Alternate Angle B = <span className="text-[var(--primary)] font-bold">{parallelResult}°</span>
                        </div>
                        <p className="text-sm mt-2 opacity-70">Alternate (Z) angles are EQUAL.</p>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                <div>
                    <label className="text-xs uppercase font-bold opacity-70 mb-1 block">Adjust Angle 1: {angle1}°</label>
                    <input
                        type="range"
                        min="10"
                        max={mode === "triangle" ? "100" : "170"}
                        value={angle1}
                        onChange={(e) => setAngle1(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
                {mode === "triangle" && (
                    <div>
                        <label className="text-xs uppercase font-bold opacity-70 mb-1 block">Adjust Angle 2: {angle2}°</label>
                        <input
                            type="range"
                            min="10"
                            max={170 - angle1}
                            value={angle2}
                            onChange={(e) => setAngle2(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
