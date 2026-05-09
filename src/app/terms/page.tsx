import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="py-20 container max-w-4xl">
      <div className="glass-card p-8 md:p-12">
        <h1 className="text-4xl font-extrabold mb-4 gradient-text">Terms of Service</h1>
        <p className="text-sm opacity-60 mb-8 italic">Last updated: May 20, 2024</p>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using GCSE Mastery Hub (&quot;the Website&quot;), you agree to be bound by these Terms of Service and all applicable laws and regulations.
              If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">2. Educational Disclaimer</h2>
            <p className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-amber-200">
              <strong>Important:</strong> All content on GCSE Mastery Hub is provided for general educational purposes only.
              While we strive for accuracy, we do not guarantee the completeness or reliability of the information.
              Our materials are not a replacement for official textbooks or teacher guidance.
              We are not responsible for any specific exam results or academic outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">3. Intellectual Property</h2>
            <p>
              The content, features, and functionality of this Website are owned by GCSE Mastery Hub and are protected by international copyright, trademark, and other intellectual property laws.
              You are granted a limited, non-exclusive license to use the Website for personal, non-commercial study purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">4. User Conduct</h2>
            <p>You agree not to use the Website in any way that causes, or may cause, damage to the Website or impairment of the availability or accessibility of the Website.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>No automated data collection (scraping) without written consent.</li>
              <li>No use of the Website to transmit or send unsolicited commercial communications (spam).</li>
              <li>No unauthorized access to our servers or backend systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">5. Revisions and Errata</h2>
            <p>
              The materials appearing on the Website could include technical, typographical, or photographic errors.
              We do not warrant that any of the materials on its website are accurate, complete, or current.
              We may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall GCSE Mastery Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2 mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              <Link href="mailto:support@gcsemasteryhub.com" className="text-[var(--primary)] hover:underline font-bold">support@gcsemasteryhub.com</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
