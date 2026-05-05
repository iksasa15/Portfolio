/** English portfolio copy — mirrors `src/content.ts` */

import type { SkillLevel } from '../content'

export const site = {
  name: 'Ahmed Alharbi',
  fullName: 'Ahmed Alharbi',
  title: 'AI Engineer',
  tagline:
    'I build production-ready AI systems—LLM integration, computer vision pipelines, and automation grounded in real data.',
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
  { icon: '🚀', value: '8+', label: 'Notable projects' },
  { icon: '🏆', value: '8+', label: 'Awards' },
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
  "I'm Ahmed Alharbi, an AI engineer and a B.Sc. Computer Science graduate from the University of Tabuk (4.50/5.0 GPA, class of 2025). I design, ship, and run production AI—LLMs, computer vision, and data-backed automation.",
  'MoH internship on imaging and records; the KAUST AI specialization fellowship and the Data Science & AI bootcamp at Tuwaiq Academy. From my project work: NextEd, Maeen (judicial intelligence), NIDAA for EMS, Atqinha for PT—plus security, analytics, and hackathon builds. Measured: a Python spatial optimization cut API latency roughly 75–85% in a real deployment.',
]

export const journey = [
  {
    range: 'Feb 2026 — Present',
    role: 'The Garage Incubator Program',
    org: 'The Garage',
  },
  {
    range: 'Sep 2025 — Dec 2025',
    role: 'Savvy Incubator Program',
    org: 'Savvy Games',
  },
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
    title: 'Maeen (معين) | AI-Powered Multi-Modal Legal Interface',
    badge: '2nd place — Judicial Intelligence Hackathon',
    summary:
      'An award-winning solution that humanizes judicial workflows through zero-touch interaction: computer vision for gestures and speech-to-text / NLP for voice, lowering cognitive load and making services faster and more inclusive for older adults and people with disabilities.',
    tags: ['Computer Vision', 'NLP', 'Accessibility'],
    href: '#',
  },
  {
    title: 'NIDAA: AI-Powered EMS & Dispatch Optimization',
    badge: 'Emergency Science & Safety Hackathon',
    summary:
      'AI-driven EMS concept focused on cutting response times: CV and NLP on calls and patient data, AML for precise caller location, and data links across Seha, Tawakkalna, and EMS so paramedics get context fast—including workflows for peak demand and accessibility for disability reporting. Stack: Microsoft Azure; partners: SRCA, MOH, SDAIA (collaboration context).',
    tags: ['Azure', 'Computer Vision', 'NLP'],
    href: '#',
  },
  {
    title: 'Atqinha | Smart physical therapy at home',
    badge: 'Mobile app',
    summary:
      'Helps patients do PT exercises correctly at home using the phone camera: pose estimation and real-time correction with computer vision, a customized ChatGPT-based assistant for guidance, and periodic performance reports for physicians. Cross-platform Flutter with Firebase backend.',
    tags: ['Flutter', 'Firebase', 'ChatGPT API'],
    href: '#',
  },
  {
    title: 'Maydan (الميدان) | Smart theatre management',
    badge: 'SaaS',
    summary:
      'A cloud platform that bridges art and operations: automated scheduling across people, budgets, and venues; analytics to cut “show failure” risk and revenue leakage; and audience and pricing insights to grow sustainable cultural institutions—data-driven theatre management.',
    tags: ['SaaS', 'Analytics', 'Cloud'],
    href: '#',
  },
  {
    title: 'RASD (منظومة رصد) | Drone swarm security & AI',
    badge: 'Critical infrastructure',
    summary:
      'Autonomous drone swarms with flexible formations, dual ground/aerial scanning, YOLOv8 threat classification (weapons, sharp objects, explosives, bags), and spatial change detection vs. a stored visual footprint. Edge AI on a ground station; unified digital alerts with GPS, imagery, and threat levels for command centers.',
    tags: ['YOLOv8', 'Computer Vision', 'Edge AI'],
    href: '#',
  },
  {
    title: 'Midhal | A digital memory for Saudi identity',
    badge: 'Platform',
    summary:
      'An integrated platform to collect and archive Saudi history—folk tales, rare documents, archaeological sites, and cultural change—through a modern, interactive experience for researchers and future generations.',
    tags: ['Archive', 'Heritage', 'Web'],
    href: '#',
  },
  {
    title: 'AI medical resource allocation & emergency routing',
    badge: 'SDAIA Athka U Hackathon',
    summary:
      'Smart emergency response recommendations that combine live traffic, hospital load, ambulance availability, patient location, and optimized routing to improve allocation—shorter travel, better satisfaction, and higher survival outcomes.',
    tags: ['Routing', 'Optimization', 'SDAIA'],
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
