"use client";
import Link from "next/link";
import { SUBJECTS } from "@/lib/constants";
import { useAppStore } from "@/lib/store";
import { useMounted } from "@/lib/hooks";
import { SEED_QUIZZES } from "@/data/seed-quizzes";

// Import ALL seed data
import { SEED_TOPICS_MISSING_CORE } from "@/data/seed-topics-missing-core";
import { SEED_TOPICS } from "@/data/seed-topics";
import { SEED_TOPICS_PART2 } from "@/data/seed-topics-2";
import { SEED_TOPICS_PART3 } from "@/data/seed-topics-3";
import { SEED_TOPICS_PART4 } from "@/data/seed-topics-4";
import { SEED_TOPICS_PART5 } from "@/data/seed-topics-5";
import { SEED_TOPICS_COMPUTER_SCIENCE_EXTENDED } from "@/data/seed-topics-computer-science-extended";
import { SEED_TOPICS_ENGLISH_EXTENDED } from "@/data/seed-topics-english-extended";
import { SEED_TOPICS_FRENCH_EXTENDED } from "@/data/seed-topics-french-extended";
import { SEED_TOPICS_GEOGRAPHY_EXTENDED } from "@/data/seed-topics-geography-extended";
import { SEED_TOPICS_HUMANITIES_EXTENDED } from "@/data/seed-topics-humanities-extended";
import { SEED_TOPICS_RELIGIOUS_STUDIES_EXTENDED } from "@/data/seed-topics-religious-studies-extended";
import { SEED_TOPICS_SCIENCES_EXTENDED } from "@/data/seed-topics-sciences-extended";
import { SEED_MATHS_COMPREHENSIVE } from "@/data/seed-topics-maths-comprehensive";
import { SEED_MATHS_EXTENDED_2 } from "@/data/seed-topics-maths-extended-2";
import { SEED_MATHS_EXTENDED_3 } from "@/data/seed-topics-maths-extended-3";
import { SEED_MATHS_EXTENDED } from "@/data/seed-topics-maths-extended";

import { TOPIC_MANIFEST } from "@/lib/content";
import { AdSlot } from "@/components/ads/AdSlot";
import { StreakBanner } from "@/components/gamification/StreakBanner";

const ALL_TOPICS = [
    ...SEED_TOPICS_MISSING_CORE,
    ...SEED_TOPICS,
    ...SEED_TOPICS_PART2,
    ...SEED_TOPICS_PART3,
    ...SEED_TOPICS_PART4,
    ...SEED_TOPICS_PART5,
    ...SEED_TOPICS_COMPUTER_SCIENCE_EXTENDED,
    ...SEED_TOPICS_ENGLISH_EXTENDED,
    ...SEED_TOPICS_FRENCH_EXTENDED,
    ...SEED_TOPICS_GEOGRAPHY_EXTENDED,
    ...SEED_TOPICS_HUMANITIES_EXTENDED,
    ...SEED_TOPICS_RELIGIOUS_STUDIES_EXTENDED,
    ...SEED_TOPICS_SCIENCES_EXTENDED,
    ...SEED_MATHS_COMPREHENSIVE,
    ...SEED_MATHS_EXTENDED_2,
    ...SEED_MATHS_EXTENDED_3,
    ...SEED_MATHS_EXTENDED
];

export default function HomePage() {
  const { user } = useAppStore();
  const mounted = useMounted();

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-mesh relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <StreakBanner />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 fade-in-up" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="pulse-dot"></span>
              <span>100% Free — No subscription required</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 fade-in-up" style={{ animationDelay: "0.1s" }}>
              Master Your{" "}
              <span className="gradient-text">GCSEs</span>
              <br />
              with Confidence
            </h1>

            <p className="text-lg md:text-xl mb-8 fade-in-up" style={{ animationDelay: "0.2s", color: "var(--text-muted)" }}>
              Interactive lessons, smart quizzes, and gamified learning for Year 10.
              Covering AQA & Edexcel subjects — all completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/subjects" className="btn-primary text-base px-8 py-3.5 justify-center">
                🚀 Start Learning
              </Link>
              <Link href="/quiz" className="btn-secondary text-base px-8 py-3.5 justify-center">
                ❓ Try a Quiz
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 fade-in-up" style={{ animationDelay: "0.4s" }}>
              {[
                { label: "Subjects", value: "8", icon: "📚" },
                { label: "Topics", value: "40+", icon: "📝" },
                { label: "Quizzes", value: "30+", icon: "❓" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-primary)" }} />
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-secondary)" }} />
      </section>

      {/* ===== RECOMMENDED SECTION ===== */}
      <section className="py-16 bg-[var(--bg)]">
        <div className="container">
          <AdSlot slot="home_top_banner" />
        </div>
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">✨ Recommended <span className="gradient-text">for You</span></h2>
              <p className="opacity-70">Based on popular GCSE topics this week</p>
            </div>
            <Link href="/subjects" className="hidden sm:block text-[var(--primary)] font-bold hover:underline">
              View All Topics →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOPIC_MANIFEST.filter(t => ["edexcel_maths_differentiation_basics", "aqa_science_cell_biology", "aqa_computer_science_ai_machine_learning"].includes(t.id)).map((topic) => (
              <Link
                key={topic.id}
                href={`/learn/${topic.exam_board}/${topic.subject.replace(/_/g, "-")}/${topic.id}`}
                className="glass-card p-6 border-l-4 border-l-[var(--primary)] group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2 block">
                  {topic.subject.replace(/_/g, " ")} · {topic.exam_board.toUpperCase()}
                </span>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {topic.topic_title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--primary)]">
                  <span>Start Learning</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUBJECTS GRID ===== */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Subject</span>
            </h2>
            <p className="text-base" style={{ color: "var(--text-muted)" }}>
              8 GCSE subjects with comprehensive Year 10 content
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SUBJECTS.map((subject, index) => {
              const subjectTopics = ALL_TOPICS.filter((t) => t.subject === subject.id && t.exam_board === subject.board);
              const completedCount = subjectTopics.filter(t => user?.progress[t.id]?.completed).length;
              const progressPercent = subjectTopics.length > 0 ? Math.round((completedCount / subjectTopics.length) * 100) : 0;

              return (
                <Link
                  key={subject.id}
                  href={`/subjects/${subject.board}/${subject.id.replace(/_/g, "-")}`}
                  className="glass-card group p-5 fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  id={`subject-card-${subject.id}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110 subject-gradient-${subject.id}`}
                    style={{ color: "white" }}
                  >
                    {subject.icon}
                  </div>
                  <h3 className="font-bold text-base mb-1">{subject.name}</h3>
                  <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                    {subject.board.toUpperCase()} · {subjectTopics.length} topics
                  </p>
                  <div className="progress-bar">
                    {mounted && user && (
                      <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
                    )}
                  </div>
                  <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                    {mounted && user ? progressPercent : 0}% complete
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED QUIZZES ===== */}
      <section className="py-16" style={{ background: "var(--bg-card)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              🧪 Featured <span className="gradient-text">Quizzes</span>
            </h2>
            <p style={{ color: "var(--text-muted)" }}>Test your knowledge with instant feedback</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEED_QUIZZES.slice(0, 6).map((quiz, i) => {
              const subjectMeta = SUBJECTS.find((s) => s.id === quiz.subject);
              return (
                <Link
                  key={quiz.id}
                  href={`/quiz/${quiz.id}`}
                  className="glass-card p-5 fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  id={`quiz-card-${quiz.id}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{subjectMeta?.icon || "📝"}</span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ background: subjectMeta?.color }}
                    >
                      {subjectMeta?.name}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2">{quiz.title}</h3>
                  <div className="flex items-center gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span>❓ {quiz.questions.length} Qs</span>
                    <span>⏱️ {quiz.time_limit} min</span>
                    <span>🎯 {quiz.passing_score}% to pass</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/quiz" className="btn-secondary">
              View All Quizzes →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MOCK EXAMS ===== */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              📝 Exam <span className="gradient-text">Simulator</span>
            </h2>
            <p style={{ color: "var(--text-muted)" }}>Practice under timed conditions with past papers</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="glass-card p-8 max-w-2xl text-center">
              <div className="text-5xl mb-6">⏱️</div>
              <h3 className="text-2xl font-bold mb-4">Real Exam Conditions</h3>
              <p className="mb-8" style={{ color: "var(--text-muted)" }}>
                Sit full-length mock exams for Maths, Science, and English.
                Our simulator includes a countdown timer, mark schemes, and realistic question formats.
              </p>
              <Link href="/exams" className="btn-primary px-8 py-3 w-full md:w-auto">
                Enter Exam Hall 🚪
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16 bg-[var(--bg-card)]/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="opacity-70">Everything you need to know about GCSE Mastery Hub</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is GCSE Mastery Hub really free?",
                a: "Yes, 100%. Our mission is to make high-quality GCSE revision accessible to everyone. We monetize through non-intrusive advertisements to keep the lights on, but we will never charge students for our core educational content."
              },
              {
                q: "Which exam boards do you cover?",
                a: "Currently, we provide comprehensive coverage for AQA and Edexcel, which are the most common boards in the UK. Our content is mapped specifically to their 2024 specifications."
              },
              {
                q: "Can I use this on my phone?",
                a: "Absolutely. GCSE Mastery Hub is a Progressive Web App (PWA). You can 'Add to Home Screen' on your iPhone or Android device, and it will function just like a native app, including offline access to many features."
              },
              {
                q: "Do I need to create an account to learn?",
                a: "No, you can browse all our topics and guides without an account. However, creating a free account allows you to save your progress, earn XP, climb the leaderboard, and unlock special achievements."
              },
              {
                q: "How often is the content updated?",
                a: "Our team of educators and examiners reviews and updates the content every term to ensure it reflects the latest examiner reports and curriculum changes."
              }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-[var(--primary)]">Q:</span> {faq.q}
                </h3>
                <p className="opacity-70 text-sm leading-relaxed">
                  <span className="font-bold text-[var(--primary)]">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AdSlot slot="home_middle_rectangle" />
        </div>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Students <span className="gradient-text">Love Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎮",
                title: "Gamified Learning",
                desc: "Earn coins, XP, and badges as you learn. Unlock themes, avatars, and climb the leaderboard!",
              },
              {
                icon: "🧠",
                title: "Smart Quizzes",
                desc: "Adaptive quizzes that focus on your weak areas. Spaced repetition ensures you remember everything.",
              },
              {
                icon: "📱",
                title: "Mobile Perfect",
                desc: "Study anywhere with our PWA. Works offline, installs like an app, and looks stunning on any device.",
              },
              {
                icon: "📊",
                title: "Track Progress",
                desc: "See exactly where you stand. Grade predictions, completion rates, and study time analytics.",
              },
              {
                icon: "🔬",
                title: "Real GCSE Content",
                desc: "7-section topic format matching your exam board specification. Worked examples and exam tips included.",
              },
              {
                icon: "🆓",
                title: "100% Free Forever",
                desc: "No subscriptions, no paywalls. Every feature and all content is completely free for every student.",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card p-6 text-center fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16">
        <div className="container">
          <div
            className="rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
            style={{ background: "var(--gradient-primary)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ace Your GCSEs?</h2>
            <p className="text-lg mb-8 opacity-90">Join thousands of students already using GCSE Mastery Hub to boost their grades.</p>
            <Link href="/subjects" className="inline-block bg-white text-[#667eea] font-bold px-8 py-3.5 rounded-xl hover:bg-opacity-90 transition-all hover:scale-105">
              Start Learning Now — It&apos;s Free! 🚀
            </Link>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white opacity-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
