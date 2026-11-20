import { motion } from 'motion/react';
import { GraduationCap, Globe2, Trophy } from 'lucide-react';
import { ACADEMIC_FOCUS, PROFILE, SPORTS_PROFILE } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
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
            About &amp; Education
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50"
            style={{ textWrap: 'balance' }}
          >
            Grounded in computer science fundamentals, driven by real-world systems and competitive sports.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Education & Aspirations Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Education Card */}
            <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/50 glass-panel p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {PROFILE.degree}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {PROFILE.university}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                Building a strong theoretical and practical foundation across software architecture, relational database design, compiler construction, and microprocessor-level engineering.
              </p>
            </div>

            {/* Future Aspirations Card */}
            <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/50 glass-panel p-6 sm:p-7 space-y-5">
              <h3 className="font-display text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Future Aspirations
              </h3>

              <div className="flex items-start gap-3.5">
                <Globe2
                  className="w-5 h-5 text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    European Master&apos;s Programs
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Preparing for graduate studies (MSc) in Europe focused on scalable distributed software engineering and applied systems research.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3.5">
                <Trophy
                  className="w-5 h-5 text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Sports Technology &amp; Cricket Analytics (ICC)
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Passionate about combining software engineering with cricket telemetry—ball-tracking data pipelines, match analytics, and next-generation officiating tools aligned with ICC standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic Focus Areas Grid */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {ACADEMIC_FOCUS.map((item) => (
              <div
                key={item.index}
                className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/50 glass-panel p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
                    {item.index}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.summary}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Athletics & Sports Profile */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/50 glass-panel p-6 sm:p-7"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
            <div>
              <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                Beyond the Terminal
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-zinc-950 dark:text-zinc-50">
                On the Pitch &amp; Football Field
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              All-round athlete competing in cricket &amp; football
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {SPORTS_PROFILE.map((item) => (
              <div
                key={item.sport}
                className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-950/50 p-5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-display text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {item.sport}
                  </h4>
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    {item.role}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
