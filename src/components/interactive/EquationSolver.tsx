
import React, { useState } from 'react';

export function EquationSolver() {
    const [leftSide, setLeftSide] = useState(12); // e.g. 2x + 4
    const [rightSide, setRightSide] = useState(12); // e.g. 12
    const [xValue, setXValue] = useState(4); // Solution x = 4
    const [steps, setSteps] = useState<string[]>([]);
    const [solved, setSolved] = useState(false);

    // Simplified: 2x + 4 = 12
    // Steps needed: Subtract 4, then Divide by 2

    const handleOperation = (op: string) => {
        if (solved) return;

        if (op === "subtract_4") {
            setLeftSide(prev => prev - 4);
            setRightSide(prev => prev - 4);
            setSteps(prev => [...prev, "Subtract 4 from both sides: 2x = 8"]);
        }
        if (op === "divide_2") {
            if (leftSide === 8 && rightSide === 8) { // Only allow if first step done
                setLeftSide(prev => prev / 2);
                setRightSide(prev => prev / 2);
                setSteps(prev => [...prev, "Divide both sides by 2: x = 4"]);
                setSolved(true);
            }
        }
    };

    const reset = () => {
        setLeftSide(12);
        setRightSide(12);
        setSteps([]);
        setSolved(false);
    };

    return (
        <div className="border border-white/20 rounded-xl p-6 bg-black/20 backdrop-blur-sm my-6">
            <h4 className="text-lg font-bold mb-4">⚖️ Balance the Scales: Solve 2x + 4 = 12</h4>

            <div className="flex items-center justify-center gap-8 mb-8 text-2xl font-mono">
                <div className="bg-indigo-500/20 p-4 rounded-lg border border-indigo-500/50 min-w-[100px] text-center">
                    {steps.length === 0 ? "2x + 4" : steps.length === 1 ? "2x" : "x"}
                </div>
                <div className="text-gray-400">=</div>
                <div className="bg-emerald-500/20 p-4 rounded-lg border border-emerald-500/50 min-w-[100px] text-center">
                    {steps.length === 0 ? "12" : steps.length === 1 ? "8" : "4"}
                </div>
            </div>

            <div className="flex gap-4 justify-center mb-6">
                <button
                    onClick={() => handleOperation("subtract_4")}
                    disabled={steps.length > 0}
                    className="px-4 py-2 bg-[var(--primary)] rounded text-sm hover:opacity-90 disabled:opacity-50"
                >
                    Subtract 4
                </button>
                <button
                    onClick={() => handleOperation("divide_2")}
                    disabled={steps.length !== 1}
                    className="px-4 py-2 bg-[var(--primary)] rounded text-sm hover:opacity-90 disabled:opacity-50"
                >
                    Divide by 2
                </button>
                <button onClick={reset} className="px-4 py-2 bg-gray-600 rounded text-sm hover:opacity-90">
                    Reset
                </button>
            </div>

            <div className="space-y-2 bg-black/30 p-4 rounded-lg">
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Equation History</div>
                {steps.length === 0 && <div className="text-sm italic text-gray-500">Apply an operation to solve for x...</div>}
                {steps.map((step, i) => (
                    <div key={i} className="text-sm font-mono text-emerald-400">✓ {step}</div>
                ))}
                {solved && <div className="text-lg font-bold text-center mt-4 animate-bounce">🎉 Solved! x = 4</div>}
            </div>
        </div>
    );
}
