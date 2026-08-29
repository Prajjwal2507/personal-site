import { FadeIn } from "./FadeIn";

const TIMELINE = [
  {
    type: "Education",
    date: "2022 – 2026",
    title: "B.Tech in Computer Science",
    org: "University Name",
    desc: "Specialized in distributed systems and advanced data structures. Led the algorithmic coding club.",
  },
  {
    type: "Experience",
    date: "Summer 2025",
    title: "Backend Engineering Intern",
    org: "Tech Company",
    desc: "Architected scalable microservices using Node.js and Redis, reducing API response times by 40%.",
  },
  {
    type: "Open Source",
    date: "2024",
    title: "Core Contributor",
    org: "Major OSS Project",
    desc: "Optimized data parsing pipelines and improved TypeScript typings across the core library.",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 relative">
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-l from-[var(--surface-2)]/40 to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <FadeIn>
                <p className="section-label">Journey</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  Experience &amp; <span className="gradient-text">education.</span>
                </h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-10">
                  A timeline of my academic background and professional experience building software.
                </p>
                <a href="/resume.pdf" download className="btn-ghost">
                  Download Full Resume
                </a>
              </FadeIn>
            </div>
          </div>

          <div className="md:col-span-7 space-y-12">
            {TIMELINE.map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group relative pl-8 md:pl-10">
                  {/* Timeline line & dot */}
                  <div className="absolute left-0 top-2 bottom-[-3rem] w-px bg-[var(--border)] group-last:bottom-0" />
                  <div className="absolute left-[-4px] top-2.5 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />

                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="badge">{item.type}</span>
                    <span className="text-sm font-mono text-[var(--fg-dim)]">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-[var(--accent-2)] text-sm font-medium mb-4">{item.org}</p>
                  <p className="text-[var(--fg-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
