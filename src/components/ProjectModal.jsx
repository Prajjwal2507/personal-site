import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero image */}
            <div className={`relative h-56 md:h-72 overflow-hidden bg-gradient-to-br ${project.accent}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-10">
              <p className="section-label mb-3">{project.subtitle}</p>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
                {project.title}
              </h3>

              <p className="text-[var(--fg-muted)] leading-relaxed mb-10">
                {project.overview}
              </p>

              {project.highlights?.length > 0 && (
                <>
                  <p className="text-xs font-mono text-[var(--fg-dim)] uppercase tracking-widest mb-4">
                    Highlights
                  </p>
                  <div className="space-y-5 mb-10">
                    {project.highlights.map((h) => (
                      <div
                        key={h.title}
                        className="pl-4 border-l-2"
                        style={{ borderColor: "var(--accent)" }}
                      >
                        <h4 className="font-bold mb-1">{h.title}</h4>
                        <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                          {h.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <p className="text-xs font-mono text-[var(--fg-dim)] uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex items-center gap-2"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
