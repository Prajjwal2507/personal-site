import { FadeIn } from "./FadeIn";

const STATS = [
  { value: "1000+", label: "DSA Problems Solved" },
  { value: "1.53M+", label: "Devices Impacted @ Barco" },
  { value: "8.01", label: "CGPA · B.Tech CSE" },
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
