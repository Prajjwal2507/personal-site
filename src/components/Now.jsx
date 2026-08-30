import { FadeIn } from "./FadeIn";

const LAST_UPDATED = "August 2026";

const ITEMS = [
  {
    label: "Shipping",
    text:
      "An internal MCP server for Barco's XMS Cloud portal — letting our users drive the portal directly from AI agents (Claude, Copilot) via typed tools instead of clicking through the UI.",
  },
  {
    label: "Building",
    text:
      "A LangGraph workflow around the same MCP tools that turns natural-language ops requests into safe, checkpointed multi-step actions across ClickShare fleets.",
  },
  {
    label: "Learning",
    text:
      "MCP transport internals (stdio vs. HTTP+SSE), LangGraph checkpointing, and Postgres row-level security patterns for multi-tenant tool APIs.",
  },
  {
    label: "Open to",
    text:
      "SDE / Full-Stack / AI Engineer full-time roles for 2027 grads. Also open to interesting freelance / OSS collaborations.",
  },
];

export default function Now() {
  return (
    <section id="now" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <p className="section-label">/ now</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                What I'm on <span className="gradient-text">right now.</span>
              </h2>
              <p className="text-[var(--fg-muted)] leading-relaxed mb-4 max-w-sm">
                A snapshot of what has my attention this month. Inspired by{" "}
                <a
                  href="https://nownownow.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted hover:text-[var(--accent)]"
                >
                  the /now page movement
                </a>
                .
              </p>
              <p className="text-xs font-mono text-[var(--fg-dim)] mb-6">
                Last updated · {LAST_UPDATED}
              </p>
              <a
                href="https://linkedin.com/in/prajjawal-rajput"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Follow along on LinkedIn ↗
              </a>
            </FadeIn>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
            {ITEMS.map((item, i) => (
              <FadeIn key={item.label} delay={0.1 + i * 0.08}>
                <div className="card h-full p-6">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
                    {item.label}
                  </p>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                    {item.text}
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
