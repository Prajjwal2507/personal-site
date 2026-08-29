const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: 16,
  height: 16,
  "aria-hidden": true,
};

const GithubIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.37-1.848 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.005.006A6.03 6.03 0 0011.72 24a6.03 6.03 0 004.028-1.646l2.34-2.236a1.548 1.548 0 00-.014-2.19 1.545 1.545 0 00-2.16-.008l-2.372 2.271a2.985 2.985 0 01-3.867-.161l-.008-.007-4.263-4.156a2.982 2.982 0 010-4.244l4.281-4.194c.026-.026.052-.05.078-.076a2.983 2.983 0 013.799.11l.03.028 2.377 2.256a1.545 1.545 0 002.174-.05 1.548 1.548 0 00-.02-2.156L15.842.463A1.375 1.375 0 0014.494 0h-1.011zm-.386 12.86h9.767c.849 0 1.537.688 1.537 1.537 0 .849-.688 1.53-1.537 1.53h-9.767c-.849 0-1.537-.681-1.537-1.53 0-.849.688-1.537 1.537-1.537z" />
  </svg>
);

const XIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const MailIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const SOCIALS = [
  { label: "GitHub",    href: "https://github.com/Prajjwal2507",                    Icon: GithubIcon,    external: true },
  { label: "LinkedIn",  href: "https://linkedin.com/in/prajjawal-rajput",            Icon: LinkedInIcon,  external: true },
  { label: "LeetCode",  href: "https://leetcode.com/prajjwal_rajput",                Icon: LeetCodeIcon,  external: true },
  { label: "X",         href: "https://x.com/Prajjwal2507",                          Icon: XIcon,         external: true },
  { label: "Instagram", href: "https://instagram.com/prajjwal_rajput_kataria",       Icon: InstagramIcon, external: true },
  { label: "Email",     href: "mailto:prajjwalrajput2507@gmail.com",                 Icon: MailIcon,      external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent)]">✦</span>
            <span className="font-bold tracking-tight">Prajjawal Rajput</span>
          </div>

          <p className="text-sm text-[var(--fg-muted)] text-center">
            Designed &amp; Built by Prajjawal Rajput. © {year}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm font-medium">
            {SOCIALS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex items-center gap-1.5 text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
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
