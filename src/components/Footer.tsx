import { PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            © 2026 {PROFILE.name}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
            {PROFILE.degree} · {PROFILE.university}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
          <a
            href="#about"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            Projects
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
