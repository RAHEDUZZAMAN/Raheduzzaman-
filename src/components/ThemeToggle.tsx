import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  variant?: 'inline' | 'floating';
}

export function ThemeToggle({
  isDark,
  onToggle,
  variant = 'inline',
}: ThemeToggleProps) {
  if (variant === 'floating') {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-11 h-11 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/85 dark:bg-zinc-900/85 glass-panel text-zinc-800 dark:text-zinc-200 shadow-lg hover:border-emerald-500/60 dark:hover:border-emerald-400/60 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-emerald-400" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4 text-emerald-700" aria-hidden="true" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 glass-panel text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
