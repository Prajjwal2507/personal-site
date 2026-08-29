import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";

const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const bg = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--accent-glow), transparent 80%)`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Interactive mouse glow */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none hidden md:block" style={{ background: bg }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="text-left order-2 md:order-1">
          <FadeIn delay={0.1}>
            <div className="badge mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Currently @ Barco · Open to Full-Time (2026 grad)
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Architecting web platforms and <span className="gradient-text italic">autonomous AI systems.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-[var(--fg-muted)] mb-10 leading-relaxed font-light">
              Full-Stack & Agentic AI Engineer specializing in MERN/PERN stacks, LangGraph multi-agent workflows, and Model Context Protocol (MCP) integrations.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => go("#projects")} className="btn-primary w-full sm:w-auto justify-center">
                View Work
              </button>
              <button onClick={() => go("#contact")} className="btn-ghost w-full sm:w-auto justify-center">
                Contact Me
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <button
              onClick={() => go("#signature")}
              className="mt-8 group inline-flex items-center gap-3 text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <span className="font-mono text-xs uppercase tracking-widest">Now</span>
              <span>Shipping the XMS Cloud MCP server @ Barco</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </FadeIn>
        </div>

        {/* Image / Avatar */}
        <FadeIn delay={0.5} className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full md:rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl">
            <img 
              src="/profile-light.png" 
              alt="Prajjwal Rajput (Light Mode)" 
              className="object-cover w-full h-full light-img"
            />
            <img 
              src="/profile-dark.png" 
              alt="Prajjwal Rajput (Dark Mode)" 
              className="object-cover w-full h-full dark-img"
            />
            {/* Optional tint overlay to blend image with theme */}
            <div className="absolute inset-0 bg-[var(--accent)] mix-blend-overlay opacity-10" />
          </div>
        </FadeIn>

      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => go("#signature")}
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg leading-none"
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
  );
}
