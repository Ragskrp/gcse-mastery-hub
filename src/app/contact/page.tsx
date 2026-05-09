export default function ContactPage() {
  return (
    <div className="py-20 container max-w-2xl">
      <div className="glass-card p-10">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="opacity-70 mb-8">Have a question, feedback, or need help with the platform? We&apos;re here to help.</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">Name</label>
            <input type="text" className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl p-3 outline-none focus:border-[var(--primary)]" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input type="email" className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl p-3 outline-none focus:border-[var(--primary)]" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl p-3 h-32 outline-none focus:border-[var(--primary)] resize-none" placeholder="How can we help?"></textarea>
          </div>
          <button type="button" className="btn-primary w-full py-4 text-lg font-bold">
            Send Message ✉️
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-sm opacity-60">
          General inquiries: hello@gcsemasteryhub.com<br />
          Support: support@gcsemasteryhub.com
        </div>
      </div>
    </div>
  );
}
