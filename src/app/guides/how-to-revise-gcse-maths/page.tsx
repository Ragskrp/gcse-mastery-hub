import Link from "next/link";

export default function MathsGuidePage() {
  return (
    <div className="py-20 container max-w-3xl">
      <Link href="/guides" className="text-[var(--primary)] mb-8 inline-block hover:underline">← Back to Guides</Link>

      <article className="prose prose-invert prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">How to Revise for GCSE Maths: The Ultimate Guide 2024</h1>

        <p className="lead opacity-80 text-xl mb-12">
          GCSE Maths is often the most feared subject for students, yet it is arguably the most predictable. Unlike English or History, there are no &quot;hidden&quot; interpretations. A question either has a correct answer or it doesn&apos;t.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">1. Understand the Specification (AQA vs Edexcel)</h2>
        <p>
          While both boards cover similar content, the style of questions differs. Edexcel tends to have more &quot;straightforward&quot; wording, while AQA often uses more context-based, &quot;wordy&quot; questions. Knowing which board you are sitting is the first step in tailoring your practice.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">2. Active Recall: The Power of Practice Papers</h2>
        <p>
          Reading through a textbook is the least effective way to study maths. You must do the maths. Research shows that <strong>active recall</strong>—forcing your brain to retrieve information—is the only way to build long-term retention.
        </p>
        <ul className="space-y-4">
          <li><strong>Phase 1:</strong> Topic-specific practice. Master one area at a time (e.g., Algebra, Geometry).</li>
          <li><strong>Phase 2:</strong> Mixed practice. This is where most students fail. In the exam, questions aren&apos;t labeled by topic. You need to identify what the question is asking for.</li>
          <li><strong>Phase 3:</strong> Timed papers. Learn to manage your 1 minute per mark.</li>
        </ul>

        <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)] my-12">
          <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">Expert Secret: The &apos;Red-Amber-Green&apos; Method</h3>
          <p className="text-sm opacity-80 mb-0">
            Go through your specification. Mark topics you are confident in as Green, those you find tricky as Amber, and those you have no clue about as Red. Focus 80% of your time on Red topics. It sounds obvious, but humans naturally want to practice what they are already good at. Resist that urge!
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">3. Use the &apos;Mark Scheme Mindset&apos;</h2>
        <p>
          Examiners have a specific list of &quot;method marks&quot; they can give. Even if your final answer is wrong, you can often get 3 out of 4 marks if your working is clear.
          <em> Tip: Always write down the formula you are using before plugging in numbers.</em>
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>
        <p>
          Consistency beats intensity. 30 minutes of maths practice every single day for three months is infinitely more effective than a 10-hour cram session the night before the exam. Start now.
        </p>
      </article>

      <div className="mt-16 pt-12 border-t border-[var(--border)]">
        <h3 className="text-2xl font-bold mb-6 text-center">Ready to start practicing?</h3>
        <div className="flex justify-center gap-4">
          <Link href="/subjects/edexcel/maths" className="btn-primary">Go to Maths Topics</Link>
          <Link href="/quiz" className="btn-secondary">Take a Maths Quiz</Link>
        </div>
      </div>
    </div>
  );
}
