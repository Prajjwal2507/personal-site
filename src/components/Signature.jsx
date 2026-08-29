import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const CODE_LINES = [
  { text: "from fastmcp import FastMCP", color: "keyword" },
  { text: "from pigeon_api import chat, contacts", color: "keyword" },
  { text: "" },
  { text: "mcp = FastMCP(\"pigeon-chat\")", color: "code" },
  { text: "" },
  { text: "@mcp.tool()", color: "decorator" },
  { text: "async def send_message(", color: "code" },
  { text: "    recipient_id: str,", color: "code" },
  { text: "    text: str,", color: "code" },
  { text: ") -> dict:", color: "code" },
  {
    text: "    \"\"\"Send a chat message as the authenticated user.\"\"\"",
    color: "comment",
  },
  { text: "    await chat.authorize()", color: "code" },
  { text: "    return await chat.send(recipient_id, text)", color: "code" },
];

const COLOR_MAP = {
  keyword: "var(--accent)",
  decorator: "var(--accent-2, var(--accent))",
  comment: "var(--fg-dim)",
  code: "var(--fg-muted)",
};

const PILLARS = [
  {
    title: "Stateful multi-agent graphs",
    body:
      "LangGraph workflows with explicit routing, cycles, retries, and checkpointing — not free-form prompt chains.",
  },
  {
    title: "Standardized tool interfaces (MCP)",
    body:
      "FastMCP servers that expose real REST backends as first-class LLM tools, secured with the same auth as the web client.",
  },
  {
    title: "End-to-end type safety",
    body:
      "Zod / Pydantic at every boundary — from Postgres schema (Drizzle) through the API to typed React components.",
  },
];

export default function Signature() {
  return (
    <section id="signature" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: intro + pillars */}
          <div className="lg:col-span-6">
            <FadeIn>
              <p className="section-label">Signature</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Building the <span className="gradient-text">agentic</span> layer of the web.
              </h2>
              <p className="text-[var(--fg-muted)] leading-relaxed mb-10 max-w-xl">
                Most portfolios ship CRUD apps. My focus sits one layer above:
                giving LLMs safe, standardized ways to <em>use</em> real production
                systems — via LangGraph orchestration and Model Context Protocol
                (MCP) servers that expose typed tools.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {PILLARS.map((p, i) => (
                <FadeIn key={p.title} delay={0.1 + i * 0.08}>
                  <div
                    className="pl-4 border-l-2"
                    style={{ borderColor: "var(--accent)" }}
                  >
                    <h3 className="font-bold mb-1">{p.title}</h3>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: code snippet */}
          <FadeIn delay={0.2} className="lg:col-span-6">
            <div className="card overflow-hidden">
              {/* Fake window chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <span className="ml-3 text-xs font-mono text-[var(--fg-dim)]">
                  pigeon_mcp_server.py
                </span>
              </div>

              {/* Code */}
              <div className="p-5 md:p-6 overflow-x-auto">
                <pre className="text-[13px] md:text-sm font-mono leading-relaxed">
                  {CODE_LINES.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.35 }}
                      style={{ color: COLOR_MAP[line.color] || "var(--fg-muted)" }}
                    >
                      {line.text || "\u00A0"}
                    </motion.div>
                  ))}
                </pre>
              </div>

              {/* Footer note */}
              <div
                className="px-5 md:px-6 py-3 border-t text-xs font-mono flex items-center justify-between"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg-dim)",
                }}
              >
                <span>1 tool · 9 total in pigeon-mcp</span>
                <span className="text-[var(--accent)]">Claude Desktop ready</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
