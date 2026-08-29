import { FadeIn, StaggerParent, StaggerItem } from "./FadeIn";

const CATEGORIES = [
  {
    title: "Frontend Engineering",
    desc: "Crafting fluid, responsive, and accessible user interfaces.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"],
  },
  {
    title: "Backend Architecture",
    desc: "Designing scalable APIs and robust data models.",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Methodologies",
    desc: "Streamlining workflows and ensuring code quality.",
    skills: ["Git", "Docker", "CI/CD", "System Design", "Agile"],
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
      </div>
    </section>
  );
}
