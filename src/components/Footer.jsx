export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-[var(--accent)]">✦</span>
          <span className="font-bold tracking-tight">Prajjwal Rajput</span>
        </div>

        <p className="text-sm text-[var(--fg-muted)]">
          Designed &amp; Built by Prajjwal Rajput. © {year}
        </p>

        <div className="flex items-center gap-6 text-sm font-medium text-[var(--fg-muted)]">
          <a href="https://github.com/Prajjwal2507" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/prajjwal-rajput" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/prajjwal_rajput" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
