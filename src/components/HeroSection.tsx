import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { HIGHLIGHTS, PROFILE } from '../data/portfolioData';
import { downloadFormattedCV } from '../utils/downloadCv';
import { ResilientImage } from './ResilientImage';
import { ThemeToggle } from './ThemeToggle';

interface HeroSectionProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function HeroSection({ isDark, onToggleTheme }: HeroSectionProps) {
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleDownloadCv = () => {
    downloadFormattedCV();
    setCvDownloaded(true);
    setTimeout(() => setCvDownloaded(false), 3000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section
      id="top"
      className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Split-screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  <span>{PROFILE.degree}</span>
                  <span aria-hidden="true" className="mx-2 text-zinc-400 dark:text-zinc-600">
                    ·
                  </span>
                  <span>{PROFILE.university}</span>
                </p>
                <ThemeToggle isDark={isDark} onToggle={onToggleTheme} variant="inline" />
              </div>

              <h1
                className="font-display font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.08]"
                style={{
                  fontSize: 'clamp(2.35rem, 4.2vw, 3.75rem)',
                  textWrap: 'balance',
                }}
              >
                {PROFILE.name}
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-medium text-emerald-700 dark:text-emerald-400 tracking-tight">
                {PROFILE.tagline}
              </p>

              <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
                {PROFILE.heroBio}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleDownloadCv}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/75 dark:bg-zinc-900/60 glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                >
                  {cvDownloaded ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <span>CV Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" aria-hidden="true" />
                      <span>Download CV</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links & Direct Academic Email */}
            <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <div className="inline-flex items-center gap-2 min-w-0">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="font-mono text-xs sm:text-sm truncate">
                    {PROFILE.email}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                >
                  {emailCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full aspect-square lg:aspect-auto rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/90 bg-zinc-100 dark:bg-zinc-900/60 shadow-sm min-h-[320px] sm:min-h-[380px]">
              <ResilientImage
                src={PROFILE.heroImage}
                alt="Portrait of Md Rahed Uzzaman in a navy suit at campus"
                fallbackTitle="Md Rahed Uzzaman"
                className="w-full h-full lg:h-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <p className="text-xs font-medium text-emerald-300">
                  DIU · CSE Undergraduate &amp; Athlete
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Software Engineering · Cricket Fast Bowler &amp; Batter · Football Striker
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Highlights Strip below the Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/45 glass-panel p-5"
            >
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {item.label}
              </p>
              <p className="mt-1.5 font-display text-base font-semibold text-zinc-950 dark:text-zinc-50">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
