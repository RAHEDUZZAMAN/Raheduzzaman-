import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Braces,
  Code2,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Layers,
  Server,
  Terminal,
  Wrench,
} from 'lucide-react';
import { SKILLS, SkillItem } from '../data/portfolioData';

type FilterTab = 'all' | 'languages' | 'web-tools';

function getSkillIcon(name: string) {
  switch (name) {
    case 'C':
    case 'C++':
      return <Code2 className="w-4 h-4" aria-hidden="true" />;
    case 'PHP':
      return <Server className="w-4 h-4" aria-hidden="true" />;
    case 'JavaScript':
      return <Braces className="w-4 h-4" aria-hidden="true" />;
    case '8086 Assembly':
      return <Cpu className="w-4 h-4" aria-hidden="true" />;
    case 'SQL':
    case 'MySQL':
      return <Database className="w-4 h-4" aria-hidden="true" />;
    case 'HTML5':
    case 'CSS3':
      return <Globe className="w-4 h-4" aria-hidden="true" />;
    case 'XAMPP':
      return <Layers className="w-4 h-4" aria-hidden="true" />;
    case 'Git':
      return <GitBranch className="w-4 h-4" aria-hidden="true" />;
    case 'GitHub':
      return <Github className="w-4 h-4" aria-hidden="true" />;
    case 'VS Code':
      return <FileCode2 className="w-4 h-4" aria-hidden="true" />;
    case 'Flex & Bison':
      return <Terminal className="w-4 h-4" aria-hidden="true" />;
    default:
      return <Wrench className="w-4 h-4" aria-hidden="true" />;
  }
}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: SkillItem[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-5">
        <h3 className="font-display text-lg font-semibold text-zinc-950 dark:text-zinc-50">
          {title}
        </h3>
        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
          {items.length} technologies
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((skill) => (
          <div
            key={skill.name}
            className="group rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/50 glass-panel p-4 sm:p-5 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-colors duration-150"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
                  {getSkillIcon(skill.name)}
                </div>
                <span className="font-display font-semibold text-zinc-950 dark:text-zinc-50 truncate">
                  {skill.name}
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 shrink-0">
                {skill.shortCode}
              </span>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {skill.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [filter, setFilter] = useState<FilterTab>('all');

  const languages = SKILLS.filter((s) => s.category === 'languages');
  const webTools = SKILLS.filter((s) => s.category === 'web-tools');

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Technical Stack
            </p>
            <h2
              className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50"
              style={{ textWrap: 'balance' }}
            >
              Languages, web technologies, and systems tooling.
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="inline-flex items-center gap-1 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/70 glass-panel self-start sm:self-auto"
          >
            {(
              [
                { id: 'all', label: 'All Skills' },
                { id: 'languages', label: 'Languages' },
                { id: 'web-tools', label: 'Web & Tools' },
              ] as const
            ).map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    active
                      ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-10 space-y-12">
          {(filter === 'all' || filter === 'languages') && (
            <SkillGroup title="Languages" items={languages} />
          )}
          {(filter === 'all' || filter === 'web-tools') && (
            <SkillGroup title="Web & Tools" items={webTools} />
          )}
        </div>
      </div>
    </section>
  );
}
