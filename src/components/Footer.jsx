export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent)]">✦</span>
            <span className="font-bold tracking-tight">Prajjwal Rajput</span>
          </div>

          <p className="text-sm text-[var(--fg-muted)] text-center">
            Designed &amp; Built by Prajjwal Rajput. © {year}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-[var(--fg-muted)]">
            <a href="https://github.com/Prajjwal2507" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/prajjwal-rajput" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/prajjwal_rajput" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">LeetCode</a>
            <a href="https://x.com/Prajjwal2507" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">X / Twitter</a>
            <a href="https://instagram.com/prajjwal_rajput_kataria" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
            <a href="mailto:prajjwalrajput2507@gmail.com" className="hover:text-[var(--accent)] transition-colors">Email</a>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs font-mono text-[var(--fg-dim)]">
            Built with React · Tailwind CSS · Framer Motion · Vercel
          </p>
          <p className="text-xs font-mono text-[var(--fg-dim)]">
            Shipping from Noida, IN · IST
          </p>
        </div>
      </div>
    </footer>
  );
}
