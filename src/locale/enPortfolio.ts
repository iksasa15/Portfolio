/** English portfolio copy — mirrors `src/content.ts` */

import type { SkillLevel } from '../content'

export const site = {
  name: 'Ahmed Alharbi',
  fullName: 'Ahmed Alharbi',
  title: 'AI Engineer',
  tagline:
    'I build AI systems that ship to production: large language model integration, computer vision pipelines, and data-driven automation.',
  email: 'ahmednalharbii@gmail.com',
  cv: {
    href: '/ahmed-n-alharbi-cv.pdf',
    downloadFileName: 'Ahmed-Alharbi-CV.pdf',
    label: 'Download CV (PDF)',
  },
  social: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ahmed014x',
      handle: 'in/ahmed014x',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/iksasa15',
      handle: 'iksasa15',
    },
  ],
}

export const stats = [
  { icon: '🎓', value: '4.50', label: 'GPA out of 5' },
  { icon: '🚀', value: '7+', label: 'Notable projects' },
  { icon: '🏆', value: '2', label: 'Awards' },
  { icon: '🤝', value: '700+', label: 'Volunteer hours' },
]

export const education = [
  {
    range: 'Graduated 2025',
    title: 'B.Sc. Computer Science',
    org: 'University of Tabuk',
    meta: 'GPA 4.50 / 5.0',
    logo: {
      src: '/logos/tabuk-university.svg',
      srcDark: '/logos/tabuk-university-white.svg',
      alt: 'University of Tabuk logo',
    },
    highlights: [
      'Completed the full computer science curriculum—from programming and algorithms to networks and databases—and tied theory to hands-on projects end to end.',
      'Designed and built practical software systems with attention to performance, structure, and UX, understanding stacks from low level to UI.',
      'Strengthened math and algorithms to prepare for AI, machine learning, and data pipelines.',
    ],
  },
  {
    range: 'Oct 2024 — Jan 2025',
    title: 'AI specialization fellowship',
    org: 'King Abdullah University of Science and Technology (KAUST)',
    logo: {
      src: '/logos/kaust.svg',
      srcDark: '/logos/kaust-white.svg',
      alt: 'KAUST logo',
    },
    highlights: [
      'Built and refined core AI algorithms with advanced probability and calculus.',
      'Processed large text corpora in Python to feed high-quality NLP models.',
      'Reduced compute load by improving algorithm efficiency on real data paths.',
    ],
  },
  {
    range: 'Oct 2025 — Dec 2025',
    title: 'Data science & AI bootcamp',
    org: 'Tuwaiq Academy',
    logo: {
      src: '/logos/tuwaiq-dark.png',
      srcDark: '/logos/tuwaiq.png',
      alt: 'Tuwaiq Academy logo',
    },
    highlights: [
      'Worked the data lifecycle from ingestion through deploying deep learning architectures.',
      'Shipped standalone LLM-based solutions and improved data flow for broad task automation.',
      'Integrated complex AI models into apps via REST with focus on data quality and reliability.',
    ],
  },
]

export const aboutParagraphs = [
  "I'm Ahmed Alharbi, an AI engineer and a B.Sc. Computer Science graduate from the University of Tabuk with a 4.50/5.0 GPA (class of 2025). I design, build, and deploy production-ready AI systems, focusing on large language model integration, computer vision, and data-backed automation—and I turn stakeholder needs into scalable, dependable products.",
  "Hands-on experience includes large-scale text processing, algorithm efficiency, and wiring complex models into apps through REST APIs with attention to data integrity and stability. Measured impact: a Python spatial optimization cut real-world API latency by roughly 75–85%, improving throughput and UX.",
  'I interned at the Ministry of Health as an AI specialist, improving imaging and record pipelines with computer vision and NLP; projects ranged from real-time threat detection and health CV apps to custom analytics with language models and ops automation. I completed the AI specialization fellowship at KAUST and the Data Science & AI bootcamp at Tuwaiq Academy.',
]

export const journey = [
  {
    range: 'Jun 2024 — Aug 2024',
    role: 'AI Specialist (Intern)',
    org: 'Ministry of Health',
  },
]

export const skillGroups: {
  title: string
  icon: string
  skills: { name: string; level: SkillLevel }[]
}[] = [
  {
    title: 'Web development',
    icon: '💻',
    skills: [
      { name: 'React / TypeScript', level: 'expert' as const },
      { name: 'Web performance', level: 'advanced' as const },
      { name: 'REST APIs', level: 'advanced' as const },
    ],
  },
  {
    title: 'User experience',
    icon: '🎨',
    skills: [
      { name: 'Design systems', level: 'advanced' as const },
      { name: 'Interactive prototypes', level: 'intermediate' as const },
    ],
  },
  {
    title: 'Tools & day-to-day',
    icon: '⚙️',
    skills: [
      { name: 'Git / CI', level: 'advanced' as const },
      { name: 'Testing', level: 'intermediate' as const },
    ],
  },
]

export const projects = [
  {
    title: 'NextEd: Smart Learning for Outstanding Performance',
    badge: 'Graduation project',
    summary:
      'NextEd is an AI learning platform that summarizes lectures, builds quizzes and flashcards, and handles tasks, calendars, reminders, and study analytics. It analyzes performance from grades and completion, visualizes insights, and proposes a tailored improvement plan—review cadence, pacing, and weak-spot focus—to raise scores with clear steps, so students study smarter, not harder.',
    tags: ['Flutter', 'Firebase', 'ChatGPT API'],
    href: 'https://drive.google.com/file/d/1ZDMDpL59VROoyvq2PuEZwkGL3vOTa_qq/view',
  },
  {
    title: 'Team collaboration platform',
    badge: 'Product',
    summary:
      'Dashboard, permissions, and real-time notifications—built for speed and clarity so teams can work smoothly.',
    tags: ['React', 'TypeScript', 'Vite'],
    href: '#',
  },
  {
    title: 'Multilingual corporate site',
    badge: 'Frontend',
    summary:
      'Content architecture, RTL/LTR, and Core Web Vitals tuning so pages load and read well everywhere.',
    tags: ['Next.js', 'i18n', 'SEO'],
    href: '#',
  },
  {
    title: 'Educational web app',
    badge: 'Experience',
    summary:
      'Learning paths, progress tracking, and responsive layouts across screen sizes.',
    tags: ['PWA', 'A11y'],
    href: '#',
  },
]

export const enPortfolio = {
  site,
  stats,
  education,
  aboutParagraphs,
  journey,
  skillGroups,
  projects,
}
