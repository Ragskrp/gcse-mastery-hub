import Link from "next/link";

export default function PrivacyPage() {
  const currentDomain = "gcsemasteryhub.com";

  return (
    <div className="py-20 container max-w-4xl">
      <div className="glass-card p-8 md:p-12">
        <h1 className="text-4xl font-extrabold mb-4 gradient-text">Privacy Policy</h1>
        <p className="text-sm opacity-60 mb-8 italic">Last updated: May 20, 2024</p>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">1. Introduction</h2>
            <p>
              Welcome to GCSE Mastery Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>{currentDomain}</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <p>We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, and profile preferences.</li>
                <li><strong>Usage Data:</strong> We automatically collect certain information when you visit, use, or navigate the Website (like IP address, browser characteristics, operating system, and referral URLs).</li>
                <li><strong>Progress Data:</strong> Information about topics completed, quiz scores, and achievements.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">3. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To provide and manage the educational services.</li>
              <li>To send administrative information to you.</li>
              <li>To protect our Services and for fraud prevention.</li>
              <li>To display personalized advertisements via Google AdSense.</li>
            </ul>
          </section>

          <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Google AdSense and Cookies</h2>
            <div className="space-y-4">
              <p>We use Google AdSense to publish advertisements on this website. When you view or click on an ad, a cookie will be set to help better provide advertisements that may be of interest to you on this and other websites.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites.</li>
                <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
                <li>Users may opt out of personalized advertising by visiting <Link href="https://www.google.com/settings/ads" className="text-[var(--primary)] hover:underline">Ads Settings</Link>.</li>
              </ul>
              <p className="text-sm italic">Note: We have no access to or control over these cookies that are used by third-party advertisers.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">5. Third-Party Websites</h2>
            <p>The Website may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services, or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">6. Your Privacy Rights (GDPR/CCPA)</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your personal information. To exercise these rights, please contact us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">7. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at:
              <br />
              <Link href="mailto:legal@gcsemasteryhub.com" className="text-[var(--primary)] hover:underline font-bold">legal@gcsemasteryhub.com</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
