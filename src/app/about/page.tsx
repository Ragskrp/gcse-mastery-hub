export default function AboutPage() {
  return (
    <div className="py-20 container max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">About <span className="gradient-text">GCSE Mastery Hub</span></h1>
        <p className="text-xl opacity-70">Empowering every student to achieve their full potential.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            We believe that high-quality education should be accessible to everyone, regardless of their background. GCSE Mastery Hub was created to provide premium, interactive revision materials for Year 10 students—completely free of charge.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            By combining deep subject expertise with modern gamification techniques, we make studying less of a chore and more of an achievement.
          </p>
        </div>
        <div className="glass-card p-10 flex items-center justify-center text-8xl">
          🎓
        </div>
      </div>

      <div className="bg-[var(--bg-card)] rounded-3xl p-12 border border-[var(--border)]">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-bold mb-2">Curriculum Aligned</h3>
            <p className="text-sm opacity-70">Strictly following AQA and Edexcel specifications.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="font-bold mb-2">AI-Powered</h3>
            <p className="text-sm opacity-70">Smart tutoring and adaptive learning paths.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="font-bold mb-2">Always Free</h3>
            <p className="text-sm opacity-70">Our core mission is accessibility for all students.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
