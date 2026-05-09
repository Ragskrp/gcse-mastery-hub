export default function TermsPage() {
  return (
    <div className="py-20 container max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none space-y-6 opacity-80">
        <p>Welcome to GCSE Mastery Hub. By using our website, you agree to the following terms.</p>
        <section>
          <h2 className="text-2xl font-bold text-white">1. Use of Content</h2>
          <p>All content provided on GCSE Mastery Hub is for educational purposes only. You may not reproduce or distribute our content without prior written permission.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">2. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">3. Limitation of Liability</h2>
          <p>GCSE Mastery Hub is provided &quot;as is&quot; without any warranties. We are not liable for any academic results or consequences of using our platform.</p>
        </section>
      </div>
    </div>
  );
}
