
import React, { useState } from 'react';

export function FractionWall() {
    return (
        <div className="border border-white/20 rounded-xl p-6 bg-black/20 backdrop-blur-sm my-6">
            <h4 className="text-lg font-bold mb-4">🖐️ Interactive Fraction Wall</h4>
            <div className="space-y-2">
                {/* 1 Whole */}
                <div className="w-full bg-blue-500 h-10 rounded flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">1</div>

                {/* Halves */}
                <div className="flex gap-2">
                    {[1, 2].map((_, i) => (
                        <div key={i} className="flex-1 bg-emerald-500 h-10 rounded flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:opacity-90 transition">1/2</div>
                    ))}
                </div>

                {/* Thirds */}
                <div className="flex gap-2">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex-1 bg-purple-500 h-10 rounded flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:opacity-90 transition">1/3</div>
                    ))}
                </div>

                {/* Quarters */}
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="flex-1 bg-amber-500 h-10 rounded flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:opacity-90 transition">1/4</div>
                    ))}
                </div>
                {/* Fifths */}
                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <div key={i} className="flex-1 bg-rose-500 h-10 rounded flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:opacity-90 transition">1/5</div>
                    ))}
                </div>
            </div>
            <p className="text-xs text-center mt-3 opacity-70">Click bars to see equivalence (Coming soon: Highlighting logic)</p>
        </div>
    );
}
