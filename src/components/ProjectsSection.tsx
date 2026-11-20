import { motion } from 'motion/react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onOpenDemo: (project: ProjectItem) => void;
}

export function ProjectsSection({ onOpenDemo }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            Featured Projects
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50"
            style={{ textWrap: 'balance' }}
          >
            Practical database engineering and compiler construction labs.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/50 glass-panel overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Visual */}
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950">
                  <ResilientImage
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7">
                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {project.stackLabel}
                  </p>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Actions */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenDemo(project)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  <span>{project.demoLabel}</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
