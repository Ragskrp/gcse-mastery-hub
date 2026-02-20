
import React, { useState } from 'react';

export function NumberLine({ min = -10, max = 10 }) {
    const [value, setValue] = useState(0);

    return (
        <div className="border border-white/20 rounded-xl p-6 bg-black/20 backdrop-blur-sm my-6">
            <h4 className="text-lg font-bold mb-4">📏 Interactive Number Line ({value})</h4>
            <div className="relative pt-6 pb-2">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs mt-2 px-1 opacity-70">
                    <span>{min}</span>
                    <span>{max}</span>
                </div>
            </div>
            <p className="text-sm mt-4 text-center">
                The number <strong>{value}</strong> is {value > 0 ? "positive" : value < 0 ? "negative" : "zero"}.
                {value !== 0 && (
                    <span> Its distance from zero (magnitude) is <strong>{Math.abs(value)}</strong>.</span>
                )}
            </p>
        </div>
    );
}
