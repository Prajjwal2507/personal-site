import { FadeIn, StaggerParent, StaggerItem } from "./FadeIn";

const CATEGORIES = [
  {
    title: "Agentic AI & LLMs",
    desc: "Building stateful multi-agent workflows and standardized AI tool interfaces.",
    skills: ["LangGraph", "LangChain", "MCP / FastMCP", "Autonomous Agents", "FAISS", "Hugging Face"],
  },
  {
    title: "Full-Stack Engineering",
    desc: "Shipping type-safe MERN & PERN products with modern React interfaces.",
    skills: ["React 19", "TypeScript", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind CSS"],
  },
  {
    title: "Data, Infra & Real-Time",
    desc: "Databases, ORMs, WebSockets, auth and observability across the stack.",
    skills: ["PostgreSQL (Neon)", "MongoDB", "Drizzle ORM", "Prisma", "Socket.io", "Clerk", "Sentry", "JWT"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl bg-[var(--surface-2)]/30 rounded-3xl -z-10 mx-6 hidden md:block" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <p className="section-label">Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              A refined <span className="gradient-text">toolset.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerParent className="grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className="card h-full p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] mb-8 flex-1 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerParent>

        <FadeIn delay={0.2} className="mt-10">
          <div
            className="rounded-2xl border p-5 md:p-6 flex flex-wrap items-center gap-3"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] mr-2">
              Currently exploring
            </p>
            {[
              "Rust",
              "WebAssembly",
              "LangGraph checkpointing",
              "MCP transports",
              "Postgres RLS",
            ].map((s) => (
              <span key={s} className="badge">{s}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
