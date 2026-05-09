import Link from "next/link";

const GUIDES = [
  {
    id: "how-to-revise-gcse-maths",
    title: "How to Revise for GCSE Maths: The Ultimate Guide 2024",
    excerpt: "Mastering GCSE Maths isn't about memorizing formulas—it's about understanding concepts and relentless practice. Learn the techniques used by top students.",
    category: "Maths",
    readTime: "8 min",
    icon: "📐"
  },
  {
    id: "science-practical-skills",
    title: "AQA Science: Mastering Required Practicals",
    excerpt: "Over 15% of your science grade comes from practical knowledge. Here is how to nail the questions on titration, electrolysis, and more.",
    category: "Science",
    readTime: "12 min",
    icon: "🧪"
  },
  {
    id: "english-lit-essay-structure",
    title: "Grade 9 Essay Structure for English Literature",
    excerpt: "Stop writing 'PEEL' paragraphs and start writing conceptualized responses. We show you how to link language, structure, and context seamlessly.",
    category: "English",
    readTime: "10 min",
    icon: "✍️"
  },
  {
    id: "overcoming-exam-anxiety",
    title: "Overcoming Exam Anxiety: A Student's Manual",
    excerpt: "The psychological side of GCSEs is just as important as the academic. Learn breathing techniques and scheduling tips to stay calm under pressure.",
    category: "Wellbeing",
    readTime: "6 min",
    icon: "🧘"
  }
];

export default function GuidesPage() {
  return (
    <div className="py-20 container">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Expert <span className="gradient-text">Study Guides</span></h1>
        <p className="text-xl opacity-70">Deep-dive articles and strategy guides to help you achieve Grade 9s across all subjects.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {GUIDES.map((guide) => (
          <Link key={guide.id} href={`/guides/${guide.id}`} className="glass-card p-8 group hover:border-[var(--primary)] transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl">{guide.icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest opacity-40">{guide.category} · {guide.readTime} read</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors">{guide.title}</h2>
            <p className="opacity-60 mb-6 leading-relaxed">{guide.excerpt}</p>
            <span className="text-[var(--primary)] font-bold flex items-center gap-2">
              Read Full Guide <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        ))}
      </div>

      {/* High-value SEO Content Section */}
      <div className="mt-24 glass-card p-12 prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Why Our Guides Are Different</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Written by Examiners</h3>
            <p className="text-sm opacity-70">Our content isn&apos;t just generic advice. Every guide is written or reviewed by former GCSE examiners who know exactly what the mark schemes are looking for.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Updated for 2024</h3>
            <p className="text-sm opacity-70">The curriculum changes, and so do we. All our guides are updated for the latest AQA and Edexcel specification changes for the current academic year.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Evidence-Based</h3>
            <p className="text-sm opacity-70">We use active recall and spaced repetition principles in our strategy guides, ensuring your revision time is actually effective.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
