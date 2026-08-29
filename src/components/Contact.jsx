import { useState } from "react";
import { FadeIn } from "./FadeIn";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="section-label">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Let's build something <span className="gradient-text">extraordinary.</span>
          </h2>
          <p className="text-[var(--fg-muted)] max-w-xl mx-auto mb-16 leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="card p-8 md:p-12 max-w-2xl mx-auto text-left relative overflow-hidden">
            {/* Success state overlay */}
            {status === "success" && (
              <div className="absolute inset-0 z-10 bg-[var(--surface)]/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-soft)] flex items-center justify-center mb-6 text-[var(--accent)]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                <p className="text-[var(--fg-muted)] mb-8">I'll get back to you as soon as possible.</p>
                <button onClick={() => setStatus("idle")} className="btn-ghost">
                  Send Another
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--fg-muted)] mb-2">Name</label>
                  <input type="text" required className="input" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--fg-muted)] mb-2">Email</label>
                  <input type="email" required className="input" placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--fg-muted)] mb-2">Message</label>
                <textarea required rows={5} className="input resize-none" placeholder="Hello, I'd like to talk about..." />
              </div>
              <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center">
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
