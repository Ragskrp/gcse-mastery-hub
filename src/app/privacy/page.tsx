import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="py-20 container max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none space-y-6 opacity-80">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <section>
          <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
          <p>Welcome to GCSE Mastery Hub. We respect your privacy and are committed to protecting your personal data.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">2. Data We Collect</h2>
          <p>We collect minimal data to provide our services, including your name, email, and study progress. We do not sell your personal data to third parties.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">3. Cookies and Advertising</h2>
          <p>We use cookies to improve your experience. We partner with Google AdSense to serve advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites.</p>
          <p>Users may opt out of personalized advertising by visiting <Link href="https://www.google.com/settings/ads" className="text-[var(--primary)] hover:underline">Google Ad Settings</Link>.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">4. Contact Us</h2>
          <p>If you have questions about this policy, please contact us at privacy@gcsemasteryhub.com.</p>
        </section>
      </div>
    </div>
  );
}
