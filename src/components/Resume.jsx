import { FadeIn } from "./FadeIn";

const TIMELINE = [
  {
    type: "Experience",
    date: "Jun 2026 – Nov 2026",
    title: "Software Engineering Intern — MX Team (ClickShare & XMS Cloud)",
    org: "Barco Electronic Systems Pvt. Ltd. · Noida",
    orgUrl: "https://www.barco.com",
    desc: "Currently building an internal Model Context Protocol (MCP) server for the XMS Cloud portal, exposing portal actions as typed tools so end users can operate Barco fleets directly through AI agents like Claude and Copilot. Earlier in the internship, shipped a Universal Web QR Scanner in Angular/TypeScript from POC to production behind a feature flag, supporting onboarding of 1.53M+ ClickShare units across 500+ global companies. Cut scan latency from 4s+ to under 1s using a hybrid BarcodeDetector + zxing-wasm pipeline serving 253+ scans/day. Raised Notification Manager test coverage from 64% to 99% with Mocha.",
  },
  {
    type: "Education",
    date: "Oct 2023 – Present",
    title: "B.Tech in Computer Science and Engineering",
    org: "JSS Academy of Technical Education, Noida · CGPA 8.01",
    orgUrl: "https://www.jssaten.ac.in",
    desc: "Coursework and self-study focused on data structures, algorithms, distributed systems, databases and full-stack web engineering. Active competitive programmer alongside academics.",
  },
  {
    type: "Achievements",
    date: "2023 – Present",
    title: "400+ LeetCode · 600+ Total DSA Problems",
    org: "Competitive Programming",
    orgUrl: "https://leetcode.com/prajjwal_rajput",
    desc: "Solved 400+ problems on LeetCode and 600+ across competitive programming platforms covering Arrays, Trees, Graphs, Dynamic Programming, and Backtracking. Live stats are wired into the Metrics section of this site.",
  },
  {
    type: "Education",
    date: "Apr 2021 – May 2022",
    title: "Class XII (PCM — 91%)",
    org: "Modern Era Public School, Bijnor, UP",
    orgUrl: null,
    desc: "Higher secondary education with a specialization in Physics, Chemistry and Mathematics.",
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
                  {item.orgUrl ? (
                    <a
                      href={item.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--accent-2)] text-sm font-medium mb-4 hover:underline decoration-dotted"
                    >
                      {item.org} <span className="text-xs">↗</span>
                    </a>
                  ) : (
                    <p className="text-[var(--accent-2)] text-sm font-medium mb-4">{item.org}</p>
                  )}
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
