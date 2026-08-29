import { FadeIn } from "./FadeIn";

const STATS = [
  { value: "400+", label: "LeetCode Problems Solved" },
  { value: "1.53M+", label: "Devices Impacted @ Barco" },
  { value: "8.01", label: "CGPA · B.Tech CSE" },
];

const FACTS = [
  { label: "Based in", value: "Noida, India · IST" },
  { label: "Role", value: "SWE Intern @ Barco (MX Team)" },
  { label: "Studying", value: "B.Tech CSE, JSSATE Noida" },
  { label: "Available from", value: "Dec 2026" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="section-label">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 max-w-2xl">
            Engineering with <span className="gradient-text">intent.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div
            className="mb-12 rounded-2xl border p-5 md:p-6 flex flex-wrap gap-x-8 gap-y-4"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
          >
            {FACTS.map((f) => (
              <div key={f.label} className="min-w-[160px]">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--fg-dim)] mb-1">
                  {f.label}
                </p>
                <p className="text-sm font-medium text-[var(--fg)]">{f.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="md:col-span-7 space-y-6 text-[var(--fg-muted)] leading-relaxed">
            <FadeIn delay={0.1}>
              <p>
                I'm a final-year B.Tech Computer Science student and a Full-Stack Engineer focused on the intersection of scalable web infrastructure and autonomous agent architectures. My core expertise covers the full software lifecycle—engineering type-safe backends in TypeScript/Express/PostgreSQL (Drizzle ORM) and Node.js/MongoDB, paired with modern React 19 interfaces.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p>
                Beyond traditional full-stack work, I design and deploy Agentic AI systems using LangChain, LangGraph, and the Model Context Protocol (MCP)—building stateful, multi-agent workflows capable of tool invocation, autonomous reasoning, and structured task execution.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                I'm currently a Software Engineering Intern on Barco's MX Team (ClickShare & XMS Cloud). I shipped a production Universal Web QR Scanner supporting onboarding for 1.53M+ ClickShare devices across 500+ global companies, and I'm now building an internal MCP server for the XMS Cloud portal so our users can drive it directly from AI agents like Claude and Copilot. I'm also an avid competitive programmer with 400+ problems solved on LeetCode.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-6">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.2 + i * 0.1}>
                <div className="card p-6 text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-2">{stat.value}</p>
                  <p className="text-sm font-mono text-[var(--fg-muted)]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
