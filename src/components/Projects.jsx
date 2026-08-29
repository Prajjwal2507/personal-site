import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const PROJECTS = [
  {
    title: "Real-Time Healthcare Coordination",
    description: "A production-grade platform managing hospital bed availability and resource allocation across departments in real-time. Designed to handle high-concurrency updates with zero data loss.",
    tech: ["Node.js", "Redis Pub/Sub", "React", "MongoDB"],
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Collaborative Code Workspace",
    description: "A room-based environment featuring synchronized code editing, cursor presence, and role-based access control. Built for seamless team collaboration with minimal latency.",
    tech: ["WebSockets", "React", "Express", "Monaco Editor"],
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Distributed Task Queue",
    description: "A lightweight, fault-tolerant job processing system with delayed execution and automatic retries, built entirely from scratch to understand message broker internals.",
    tech: ["Go", "Redis", "gRPC", "Docker"],
    link: "https://github.com/yourusername/project3",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="section-label">Selected Work</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
            Focus on <span className="gradient-text">impact.</span>
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block card p-8 md:p-10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="md:flex justify-between items-start gap-12">
                  <div className="flex-1 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[var(--fg-muted)] leading-relaxed max-w-2xl">
                      {p.description}
                    </p>
                  </div>

                  <div className="shrink-0 md:w-64">
                    <p className="text-xs font-mono text-[var(--fg-dim)] uppercase tracking-widest mb-3">
                      Technologies
                    </p>
                    <ul className="space-y-2">
                      {p.tech.map((t) => (
                        <li key={t} className="text-sm font-medium flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-50" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
