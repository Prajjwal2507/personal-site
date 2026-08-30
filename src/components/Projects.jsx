import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  {
    id: "pigeon",
    title: "Pigeon",
    subtitle: "Real-Time Chat App & FastMCP Server",
    short:
      "Sub-100ms MERN chat platform with a FastMCP server that exposes chat tools to LLM agents.",
    image: "/projects/pigeon.png",
    accent: "from-cyan-500/30 to-blue-500/30",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "FastMCP",
      "Zustand",
      "Cloudinary",
      "JWT",
    ],
    github: "https://github.com/Prajjwal2507/chat-app-mcp-server",
    live: "https://chat.prajjwal-rajput.dev",
    featured: true,
    overview:
      "Full-stack real-time chat platform with private 1-to-1 messaging, live presence tracking, and an MCP server integration for LLM agents. Built on the MERN stack with Socket.io for low-latency communication and a Python FastMCP server that exposes chat operations as tools for Claude Desktop.",
    highlights: [
      {
        title: "Real-Time Communication",
        body: "Engineered a Socket.io WebSocket layer with per-socket JWT auth middleware for sub-100ms message delivery, typing indicators, and real-time online/offline presence broadcasting.",
      },
      {
        title: "Agentic Tool Integration (FastMCP)",
        body: "Authored and deployed a Python FastMCP server exposing all 9 REST backend endpoints as LLM tools, allowing Claude Desktop to perform authenticated chat workflows autonomously.",
      },
      {
        title: "Security & Infrastructure",
        body: "Integrated Arcjet rate limiting and bot protection, Cloudinary media uploads, Mailtrap transactional emails, and JWT authentication via httpOnly secure cookies.",
      },
      {
        title: "State Management & UI",
        body: "Structured client state with Zustand for normalized chat and auth stores, paired with Tailwind CSS and DaisyUI for a mobile-responsive interface.",
      },
    ],
  },
  {
    id: "anyquery-ai",
    title: "AnyQuery AI",
    subtitle: "Multimodal Retrieval-Augmented Generation Platform",
    short:
      "Full-stack RAG app that answers questions over YouTube transcripts and PDFs in under 3s.",
    image: "/projects/anyquery.png",
    accent: "from-purple-500/30 to-pink-500/30",
    tech: [
      "Next.js",
      "FastAPI",
      "LangChain",
      "FAISS",
      "Google Gemini",
      "Hugging Face",
      "Tailwind CSS",
    ],
    github: "https://github.com/Prajjwal2507/RAG-ai",
    live: "https://queryai-eight.vercel.app",
    overview:
      "A full-stack Retrieval-Augmented Generation application that answers complex questions over YouTube transcripts and PDF documents, delivering grounded Gemini responses end-to-end in under 3 seconds.",
    highlights: [
      {
        title: "Ingestion & Vector Pipeline",
        body: "Implemented text extraction with recursive character chunking (1,000 chars, 200 overlap), local all-MiniLM-L6-v2 384-dim embeddings, and FAISS top-k=4 similarity search across 1,000+ chunks per document.",
      },
      {
        title: "Grounded LLM Responses",
        body: "Wired retrieved context into Google Gemini prompts with structured system instructions to keep answers grounded and hallucination-resistant.",
      },
      {
        title: "Frontend & Chat UI",
        body: "Developed a responsive chat interface supporting automatic transcript language selection, PDF uploads, real-time processing states, API error handling, and live Markdown-rendered responses.",
      },
    ],
  },
  {
    id: "primenext",
    title: "PrimeNext",
    subtitle: "Full-Stack PERN SaaS & E-Commerce Platform",
    short:
      "Type-safe PERN e-commerce platform with Polar payments, Stream video/chat, and Sentry tracing.",
    image: "/projects/primenext.png",
    accent: "from-emerald-500/30 to-teal-500/30",
    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Polar",
      "Stream SDK",
      "Sentry",
      "Clerk",
    ],
    github: "https://github.com/Prajjwal2507/E-Commerce-Platform",
    live: "https://primenext-store.onrender.com",
    overview:
      "A modern full-stack e-commerce and merchant management platform with integrated payment pipelines, customer support streaming, and end-to-end observability.",
    highlights: [
      {
        title: "Architecture & Backend",
        body: "Built an Express.js API in TypeScript backed by serverless Neon PostgreSQL via Drizzle ORM, enforcing strict runtime validation with Zod.",
      },
      {
        title: "Payments & Live Support",
        body: "Integrated the Polar API with webhooks for checkout management, and Stream SDK for threaded support chat and peer-to-peer video calling.",
      },
      {
        title: "State & Reliability",
        body: "Managed asynchronous state with TanStack Query and Zustand; integrated Sentry for end-to-end exception tracing and ImageKit for CDN asset delivery.",
      },
    ],
  },
  {
    id: "productify",
    title: "Productify",
    subtitle: "Full-Stack Product Management Platform",
    short:
      "Secure inventory management with end-to-end type safety from Postgres schema to client.",
    image: "/projects/productify.png",
    accent: "from-amber-500/30 to-orange-500/30",
    tech: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Clerk",
      "TanStack Query",
      "Tailwind CSS",
    ],
    github: "https://github.com/Prajjwal2507/productify",
    live: "https://productify.prajjwal-rajput.dev",
    overview:
      "A secure product inventory management application supporting end-to-end CRUD operations, engineered around strict type safety and modern caching patterns.",
    highlights: [
      {
        title: "Type Safety & Data Flow",
        body: "Engineered a decoupled TypeScript/Express backend with Drizzle ORM to maintain type consistency from database schema all the way to client consumers.",
      },
      {
        title: "Auth & State",
        body: "Secured API endpoints with the Clerk Express SDK and handled asynchronous caching plus optimistic updates via TanStack Query.",
      },
    ],
  },
  {
    id: "leetcode-tracker",
    title: "LeetCode Telegram Tracker",
    subtitle: "Automated Stat Notification Tool",
    short:
      "Lightweight automation that pipes LeetCode stats to Telegram as formatted reports.",
    image: "/projects/leetcode-tracker.png",
    accent: "from-rose-500/30 to-red-500/30",
    tech: [
      "JavaScript",
      "Telegram Bot API",
      "LeetCode Public API",
      "AllOrigins Proxy",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/Prajjwal2507/Leetcode-stalker",
    live: null,
    overview:
      "A lightweight automation utility that fetches LeetCode user statistics and dispatches formatted difficulty-breakdown reports to Telegram.",
    highlights: [
      {
        title: "API Integration",
        body: "Routed requests through a CORS proxy to query competitive programming metrics, formatted responses into Telegram Markdown, and triggered automated bot notifications.",
      },
    ],
  },
];

function FeaturedCard({ project, onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group w-full text-left card overflow-hidden relative"
    >
      {/* Featured ribbon */}
      <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
        <span
          className="px-2.5 md:px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest shadow-lg"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--btn-fg, #fff)",
          }}
        >
          ✦ Featured
        </span>
      </div>

      <div className="md:grid md:grid-cols-5 md:min-h-[320px]">
        <div className="p-8 pt-14 md:p-10 md:pt-10 md:col-span-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-mono text-[var(--fg-dim)] uppercase tracking-widest">
                {project.subtitle}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            <p className="text-[var(--fg-muted)] leading-relaxed mb-6 max-w-xl">
              {project.short}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.tech.slice(0, 6).map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
            {project.tech.length > 6 && (
              <span className="text-xs font-mono text-[var(--fg-dim)]">
                +{project.tech.length - 6}
              </span>
            )}
            <span className="ml-auto hidden md:inline text-sm font-mono text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
              View details ↗
            </span>
          </div>
        </div>

        <div
          className={`relative md:col-span-2 h-56 md:h-auto min-h-[240px] overflow-hidden bg-gradient-to-br ${project.accent}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </motion.button>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group w-full h-full text-left card overflow-hidden flex flex-col"
    >
      <div
        className={`relative h-40 md:h-44 overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-[10px] font-mono text-[var(--fg-dim)] uppercase tracking-widest mb-2">
          {project.subtitle}
        </p>
        <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-5 flex-1">
          {project.short}
        </p>

        <div className="flex flex-wrap items-center gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded border text-[var(--fg-muted)]"
              style={{ borderColor: "var(--border)" }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] font-mono text-[var(--fg-dim)]">
              +{project.tech.length - 4}
            </span>
          )}
          <span className="ml-auto text-xs font-mono text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
            ↗
          </span>
        </div>
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(null);
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);
  const openProject = PROJECTS.find((p) => p.id === openId) || null;

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="section-label">Selected Work</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
            Focus on <span className="gradient-text">impact.</span>
          </h2>
        </FadeIn>

        {featured && (
          <FadeIn>
            <FeaturedCard
              project={featured}
              onOpen={() => setOpenId(featured.id)}
            />
          </FadeIn>
        )}

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {others.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} onOpen={() => setOpenId(p.id)} />
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
    </section>
  );
}
