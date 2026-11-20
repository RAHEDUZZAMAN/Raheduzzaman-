export interface SkillItem {
  name: string;
  category: 'languages' | 'web-tools';
  context: string;
  shortCode: string;
}

export interface ProjectItem {
  id: 'sms' | 'compiler';
  title: string;
  subtitle: string;
  stackLabel: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  githubUrl: string;
  demoLabel: string;
}

export interface AcademicFocusItem {
  index: string;
  title: string;
  summary: string;
}

export const PROFILE = {
  name: 'Md Rahed Uzzaman',
  tagline: 'Aspiring Software Engineer & Cricket Tech Enthusiast',
  university: 'Daffodil International University (DIU)',
  degree: 'BSc in Computer Science & Engineering',
  email: 'rahed242-15-596@diu.edu.bd',
  github: 'https://github.com/rahed-uzzaman',
  linkedin: 'https://www.linkedin.com/in/md-rahed-uzzaman',
  location: 'Dhaka, Bangladesh',
  heroImage: '/assets/aistudio/image_1a47c7f8.png',
  heroBio:
    'Computer Science & Engineering undergraduate at Daffodil International University building dependable backend architectures, compiler toolchains, and exploring precision sports telemetry—informed by hands-on experience as a fast-bowling cricket all-rounder and football striker.',
};

export const SPORTS_PROFILE = [
  {
    sport: 'Cricket',
    role: 'Fast Bowler & Top-Order / All-Round Batter',
    summary:
      'Active pace bowler with reliable stroke-play and batting depth, bringing on-field seam, bounce, and match-tempo intuition to cricket analytics and ICC-grade sports tech.',
  },
  {
    sport: 'Football',
    role: 'Striker (Center Forward)',
    summary:
      'Sharp attacking striker focused on off-the-ball movement, finishing under pressure, and high-tempo team coordination.',
  },
];

export const HIGHLIGHTS = [
  {
    label: 'Institution',
    value: 'Daffodil International University',
    detail: 'BSc in Computer Science & Engineering',
  },
  {
    label: 'Core Focus',
    value: 'Systems, DBMS & Compilers',
    detail: 'Software Engineering to 8086 Architecture',
  },
  {
    label: 'Athletics & Tech',
    value: 'Cricket & Football Player',
    detail: 'Fast Bowler & Batter · Football Striker',
  },
];

export const ACADEMIC_FOCUS: AcademicFocusItem[] = [
  {
    index: '01.',
    title: 'Software Engineering',
    summary:
      'Structured SDLC practices, modular backend design, requirements modeling, and maintainable web architecture.',
  },
  {
    index: '02.',
    title: 'Database Management Systems',
    summary:
      'Relational schema normalization, SQL query optimization, and transactional data integrity with MySQL.',
  },
  {
    index: '03.',
    title: 'Compiler Design',
    summary:
      'Finite-state lexical scanning, context-free grammars, and syntax-directed parsing built with Flex, Bison, and GCC.',
  },
  {
    index: '04.',
    title: 'Microprocessors & Assembly',
    summary:
      'Low-level hardware-software interface, register addressing modes, and interrupt routines in 8086 Assembly.',
  },
];

export const SKILLS: SkillItem[] = [
  // Languages
  {
    name: 'C',
    category: 'languages',
    context: 'Systems programming & memory fundamentals',
    shortCode: 'C',
  },
  {
    name: 'C++',
    category: 'languages',
    context: 'Data structures & algorithmic problem solving',
    shortCode: 'C++',
  },
  {
    name: 'PHP',
    category: 'languages',
    context: 'Server-side modules & CRUD web workflows',
    shortCode: 'PHP',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    context: 'Interactive interfaces & client-side logic',
    shortCode: 'JS',
  },
  {
    name: '8086 Assembly',
    category: 'languages',
    context: 'Microprocessor registers & low-level routines',
    shortCode: 'ASM',
  },
  {
    name: 'SQL',
    category: 'languages',
    context: 'Relational queries, joins & schema design',
    shortCode: 'SQL',
  },
  // Web & Tools
  {
    name: 'HTML5',
    category: 'web-tools',
    context: 'Semantic document structure & accessibility',
    shortCode: 'H5',
  },
  {
    name: 'CSS3',
    category: 'web-tools',
    context: 'Responsive layouts, grid & modern styling',
    shortCode: 'C3',
  },
  {
    name: 'MySQL',
    category: 'web-tools',
    context: 'Normalized tables & relational persistence',
    shortCode: 'DB',
  },
  {
    name: 'XAMPP',
    category: 'web-tools',
    context: 'Local Apache, MariaDB & PHP runtime stack',
    shortCode: 'XA',
  },
  {
    name: 'Git',
    category: 'web-tools',
    context: 'Branching workflows & commit history control',
    shortCode: 'GIT',
  },
  {
    name: 'GitHub',
    category: 'web-tools',
    context: 'Remote repositories & collaborative reviews',
    shortCode: 'GH',
  },
  {
    name: 'VS Code',
    category: 'web-tools',
    context: 'Primary IDE, debugging & toolchain setup',
    shortCode: 'VS',
  },
  {
    name: 'Flex & Bison',
    category: 'web-tools',
    context: 'Lexical analyzers & LALR grammar parsers',
    shortCode: 'FB',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sms',
    title: 'Student Management System (SMS)',
    subtitle: 'Attendance Management Module',
    stackLabel: 'PHP · MySQL · XAMPP · HTML5 · CSS3',
    description:
      'Engineered the core Attendance Management Module for an academic Student Management System. Provides streamlined workflows to add daily student attendance entries, list and filter structured class logs, and safely delete records backed by a normalized MySQL relational schema.',
    highlights: [
      'Implemented Create, List, and Delete attendance operations with server-side PHP validation.',
      'Designed normalized MySQL tables linking student IDs, course codes, and dated attendance states.',
      'Deployed and tested locally on Apache & MariaDB via XAMPP with clean tabular reporting.',
    ],
    imageSrc: '/src/assets/images/project_sms_interface_1795184892156.jpg',
    imageAlt: 'Student Management System attendance management tabular interface preview',
    githubUrl: 'https://github.com/rahed-uzzaman/student-management-system',
    demoLabel: 'Live Demo',
  },
  {
    id: 'compiler',
    title: 'Compiler & Lexical Analyzer Lab Projects',
    subtitle: 'Lexical Scanning & Syntax Parsing Suite',
    stackLabel: 'Flex · Bison · GCC · C',
    description:
      'A collection of compiler construction lab implementations covering deterministic finite-automata lexical tokenization in Flex and context-free grammar parsing in Bison, compiled into native executables using GCC.',
    highlights: [
      'Built custom Flex (.l) specifications to recognize keywords, identifiers, operators, and numeric literals.',
      'Authored Bison (.y) grammar rules with operator precedence and clear syntax error diagnostics.',
      'Compiled and benchmarked native C scanner-parser pipelines with GCC.',
    ],
    imageSrc: '/src/assets/images/project_compiler_lexer_1795184893758.jpg',
    imageAlt: 'Compiler lexical analyzer token stream and syntax tree visualization',
    githubUrl: 'https://github.com/rahed-uzzaman/compiler-lab-flex-bison',
    demoLabel: 'Live Demo',
  },
];
