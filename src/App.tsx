import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectDemoModal } from './components/ProjectDemoModal';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  const [activeDemoProject, setActiveDemoProject] =
    useState<ProjectItem | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('rahed-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('rahed-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen relative bg-zinc-50 text-zinc-900 dark:bg-[#050507] dark:text-zinc-100 transition-colors duration-200">
        {/* Subtle ambient atmospheric backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
        >
          <div className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full bg-emerald-500/8 dark:bg-emerald-500/10 blur-3xl" />
          <div className="absolute top-[40%] -left-40 w-[440px] h-[440px] rounded-full bg-zinc-300/30 dark:bg-emerald-950/20 blur-3xl" />
        </div>

        <Navbar />

        <main>
          <HeroSection isDark={isDark} onToggleTheme={toggleTheme} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection onOpenDemo={setActiveDemoProject} />
          <ContactSection />
        </main>

        <Footer />

        <ThemeToggle
          isDark={isDark}
          onToggle={toggleTheme}
          variant="floating"
        />

        <ProjectDemoModal
          project={activeDemoProject}
          onClose={() => setActiveDemoProject(null)}
        />
      </div>
    </MotionConfig>
  );
}
