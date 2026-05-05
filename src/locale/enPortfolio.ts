/** English portfolio copy — mirrors `src/content.ts` */

import type { JourneyEntry, SkillLevel } from '../content'

export const site = {
  name: 'Ahmed Alharbi',
  fullName: 'Ahmed Alharbi',
  title: 'AI Engineer',
  tagline:
    'I take AI systems into production: wiring large language models, building computer vision pipelines, and activating data-backed automation.',
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
  { icon: '🚀', value: '8+', label: 'Completed projects' },
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
  "I'm **Ahmed Alharbi**, an **AI engineer** and a **B.Sc. Computer Science** graduate from the **University of Tabuk** (**4.50/5.0 GPA**, class of **2025**). I **take AI systems into production**: **wiring large language models**, **building computer vision pipelines**, and **activating data-backed automation**.",
]

export const journey = [
  {
    range: 'Feb 2026 — Present',
    role: 'The Garage Incubator Program',
    org: 'The Garage',
    summary:
      'Building a dedicated drone platform in the incubator, running AI workflows on it from idea through UX and scale.',
  },
  {
    range: 'Sep 2025 — Dec 2025',
    role: 'Savvy Incubator Program',
    org: 'Savvy Games',
    summary:
      'Incubator work on product narrative and technical integration in games and digital platforms, including development of the **Guardians** game.',
  },
  {
    range: 'Jun 2024 — Aug 2024',
    role: 'AI Specialist (Intern)',
    org: 'Ministry of Health',
    summary:
      'Hands-on work on medical imaging and health records, supporting systems that enable AI workflows.',
  },
]

/** Volunteer track — same shape as `journey`; Google DSC content-committee ladder */
export const volunteering: JourneyEntry[] = [
  {
    range: '1443 AH — start of the path',
    role: 'Content committee member',
    org: 'Google Developer Student Club — University of Tabuk',
    summary:
      'Content, design, and editing; attending events and meetings; on-the-ground execution for club activities.',
  },
  {
    range: '1444 AH',
    role: 'Assistant head of the content committee',
    org: 'Google Developer Student Club — University of Tabuk',
    summary:
      'Supporting the committee lead on planning and delivery; workshops such as English-skills development and the Visual 23 challenge; promos and content (e.g. travel club).',
  },
  {
    range: '1444 — 1445 AH',
    role: 'Head of the content committee',
    org: 'Google Developer Student Club — University of Tabuk',
    summary:
      'Leading the content team, coordinating visual and written output, and aligning work with club goals and the Deanship of Student Affairs.',
  },
]

export const skillGroups: {
  title: string
  icon: string
  skills: { name: string; level: SkillLevel }[]
}[] = [
  {
    title: 'AI & data',
    icon: '🧠',
    skills: [
      { name: 'Python', level: 'expert' as const },
      { name: 'LLMs & API integration', level: 'advanced' as const },
      { name: 'Computer vision', level: 'advanced' as const },
      { name: 'Machine & deep learning', level: 'expert' as const },
      { name: 'Data prep & pipelines', level: 'expert' as const },
    ],
  },
  {
    title: 'Web development',
    icon: '💻',
    skills: [
      { name: 'React / TypeScript', level: 'expert' as const },
      { name: 'Vite & modern tooling', level: 'advanced' as const },
      { name: 'Web performance', level: 'advanced' as const },
      { name: 'REST APIs', level: 'advanced' as const },
    ],
  },
  {
    title: 'Mobile development',
    icon: '📱',
    skills: [
      { name: 'Flutter', level: 'advanced' as const },
      { name: 'Swift', level: 'advanced' as const },
    ],
  },
  {
    title: 'User experience',
    icon: '🎨',
    skills: [
      { name: 'Design systems', level: 'expert' as const },
      { name: 'Interactive prototypes', level: 'expert' as const },
    ],
  },
  {
    title: 'Tools & day-to-day',
    icon: '⚙️',
    skills: [
      { name: 'Git / CI', level: 'advanced' as const },
      { name: 'CLI & Linux', level: 'advanced' as const },
      { name: 'Docker / containers', level: 'intermediate' as const },
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
    title: 'Ayn (عين) | An intelligent eye on your data quality',
    badge: '2nd place — Data Innovation Hackathon · General Authority for Statistics',
    summary:
      'By God’s grace, **second place** on the winners’ podium at the **Data Innovation Hackathon** organized by the **General Authority for Statistics**, among **132 teams**. **Ayn** is a smart platform for **data quality at the source**: it combines **AI** and **large language models** with **business rules** to surface logical and semantic inconsistencies; **live forms** analyze input in real time with alerts and a **confidence score** per record; and bulk **Excel / CSV** upload scans rows for cross-field conflicts—turning validation from a **“late step”** into a **“live”** part of the workflow.',
    tags: ['LLMs', 'Data quality', 'Arabic NLP'],
    href: '#',
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
      'AI-driven EMS concept focused on cutting response times: CV and NLP on calls and patient data, AML for precise caller location, and data links across Seha, Tawakkalna, and EMS so paramedics get context fast—including workflows for peak demand and accessibility for disability reporting. Stack: Microsoft Azure; partners: SRCA, MOH, and related national entities.',
    tags: ['Azure', 'Computer Vision', 'NLP'],
    href: '#',
  },
  {
    title: 'Atqinha | Smart physical therapy at home',
    badge: 'Capstone — Tuwaiq Academy · Mobile app',
    summary:
      'Capstone project at **Tuwaiq Academy**: a mobile app that helps patients do PT exercises correctly at home using the phone camera—pose estimation and real-time correction with computer vision, a customized ChatGPT-based assistant for guidance, and periodic performance reports for physicians. Cross-platform Flutter with Firebase backend.',
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
    badge: 'Top 15 — Absher hackathon · Tuwaiq Academy',
    summary:
      '**Top 15** project at the **Absher** hackathon with **Tuwaiq Academy**, on the **critical security** track: autonomous drone swarms with flexible formations, dual ground/aerial scanning, YOLOv8 threat classification (weapons, sharp objects, explosives, bags), and spatial change detection vs. a stored visual footprint. Edge AI on a ground station; unified digital alerts with GPS, imagery, and threat levels for command centers.',
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
    badge: 'Athka U Hackathon — Sdaya',
    summary:
      'Smart emergency response recommendations that combine live traffic, hospital load, ambulance availability, patient location, and optimized routing to improve allocation—shorter travel, better satisfaction, and higher survival outcomes.',
    tags: ['Routing', 'Optimization', 'Azure'],
    href: '#',
  },
]

export const enPortfolio = {
  site,
  stats,
  education,
  aboutParagraphs,
  journey,
  volunteering,
  skillGroups,
  projects,
}
