import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ProjectRow — displays a project as a full-width table row.
 * Expands on hover to reveal the description.
 */
export function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      className="group"
      style={{ borderBottom: "1px solid var(--border-subtle)" }}
    >
      <div className="flex items-start justify-between gap-6 py-7 cursor-default">
        {/* Index + title */}
        <div className="flex items-start gap-6 flex-1 min-w-0">
          <span
            className="shrink-0 font-mono text-xs tracking-widest mt-1"
            style={{ color: "var(--accent)", width: "2rem" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0 flex-1">
            <motion.h3
              animate={{ color: open ? "var(--accent)" : "var(--fg)" }}
              transition={{ duration: 0.15 }}
              className="font-bold leading-tight mb-2"
              style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}
            >
              {project.title}
            </motion.h3>

            {/* Expandable description */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm leading-relaxed overflow-hidden"
                  style={{ color: "var(--muted-fg)" }}
                >
                  {project.description}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-0.5 tracking-wide"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    color: "var(--muted-fg)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Year + link arrow */}
        <div className="flex items-center gap-5 shrink-0 pt-1">
          <span className="font-mono text-xs hidden sm:block" style={{ color: "var(--muted-fg)" }}>
            {project.year}
          </span>

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-xs px-3 py-1.5 transition-all duration-150"
                style={{
                  border: "1px solid var(--border-subtle)",
                  color: "var(--muted-fg)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--muted-fg)";
                }}
              >
                GH ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-xs px-3 py-1.5 transition-all duration-150"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Live ↗
              </a>
            )}
          </div>

          {/* Animated arrow */}
          <motion.span
            animate={{
              x: open ? 4 : 0,
              y: open ? -4 : 0,
              color: open ? "var(--accent)" : "var(--muted-fg)",
            }}
            transition={{ duration: 0.15 }}
            className="text-xl hidden sm:block"
          >
            ↗
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
