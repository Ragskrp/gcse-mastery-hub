"use client";
import { useState } from "react";

export default function AdminPage() {
    const [jsonInput, setJsonInput] = useState("");
    const [importResult, setImportResult] = useState<{ success: boolean; message: string } | null>(null);

    const handleImport = () => {
        try {
            const data = JSON.parse(jsonInput);
            const count = Array.isArray(data) ? data.length : 1;
            setImportResult({ success: true, message: `✅ Successfully parsed ${count} item(s). In production, this would upload to Firestore.` });
        } catch {
            setImportResult({ success: false, message: "❌ Invalid JSON. Please check your input." });
        }
    };

    return (
        <div className="py-10 md:py-16">
            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">⚙️ Admin <span className="gradient-text">CMS</span></h1>
                <p className="mb-8" style={{ color: "var(--text-muted)" }}>Upload content, manage users, and view analytics.</p>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    <div className="glass-card p-5 text-center"><div className="text-2xl font-bold gradient-text">8</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Topics</p></div>
                    <div className="glass-card p-5 text-center"><div className="text-2xl font-bold gradient-text">8</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Quizzes</p></div>
                    <div className="glass-card p-5 text-center"><div className="text-2xl font-bold gradient-text">0</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Users</p></div>
                    <div className="glass-card p-5 text-center"><div className="text-2xl font-bold gradient-text">0</div><p className="text-sm" style={{ color: "var(--text-muted)" }}>Views Today</p></div>
                </div>

                {/* JSON Import */}
                <div className="glass-card p-8 mb-8">
                    <h2 className="text-xl font-bold mb-2">📦 JSON Content Import</h2>
                    <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Paste your GCSE content JSON (topics or quizzes) below. Supports bulk import of 100+ items at once.</p>
                    <textarea
                        value={jsonInput}
                        onChange={(e) => setJsonInput(e.target.value)}
                        placeholder='[{"id": "topic_id", "topic_title": "My Topic", ...}]'
                        rows={12}
                        className="w-full p-4 rounded-xl text-sm font-mono"
                        style={{ border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)", resize: "vertical" }}
                    />
                    <div className="flex items-center gap-4 mt-4">
                        <button onClick={handleImport} className="btn-primary">🚀 Import Content</button>
                        <button onClick={() => { setJsonInput(""); setImportResult(null); }} className="btn-secondary">Clear</button>
                    </div>
                    {importResult && (
                        <div className={`mt-4 p-4 rounded-xl text-sm ${importResult.success ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"}`}>
                            {importResult.message}
                        </div>
                    )}
                </div>

                {/* File Upload */}
                <div className="glass-card p-8">
                    <h2 className="text-xl font-bold mb-2">📁 Drag & Drop Upload</h2>
                    <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Upload .json files directly. Supports the 7-section topic format.</p>
                    <div
                        className="border-2 border-dashed rounded-2xl p-12 text-center transition-colors hover:border-[var(--primary)]"
                        style={{ borderColor: "var(--border)" }}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            const file = e.dataTransfer.files[0];
                            if (file && file.name.endsWith(".json")) {
                                const reader = new FileReader();
                                reader.onload = (ev) => setJsonInput(ev.target?.result as string);
                                reader.readAsText(file);
                            }
                        }}
                    >
                        <span className="text-4xl block mb-3">📄</span>
                        <p className="font-semibold">Drop your .json file here</p>
                        <p className="text-sm" style={{ color: "var(--text-muted)" }}>or paste JSON in the box above</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
