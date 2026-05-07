/** English portfolio copy — mirrors `src/content.ts` */

import type {
  JourneyEntry,
  ProjectEntry,
  ProjectGalleryImage,
  SkillLevel,
} from '../content'

export const site = {
  name: 'Ahmed Alharbi',
  fullName: 'Ahmed Alharbi',
  title: 'AI Engineer',
  tagline:
    'I design and ship production AI: connecting **large language models** to real workflows, building **computer vision** you can rely on, and running **automation** driven by data from the first input.',
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
      iconId: 'portfolio-linkedin-icon' as const,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/iksasa15',
      handle: 'iksasa15',
      iconId: 'portfolio-github-icon' as const,
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
  "**Ahmed Alharbi** — **AI engineer**, **B.Sc. Computer Science** from the **University of Tabuk** with a **4.50/5.0** GPA (**2025**). I focus on **AI that actually runs in the real world**: integrating **large language models** with live systems, designing clear **vision-and-data paths**, and building **automation** grounded in data and business rules so services are faster, sharper, and less error-prone.",
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

/** Volunteer track — same order as journey: newest first, start of path at bottom */
export const volunteering: JourneyEntry[] = [
  {
    range: '1444 — 1445 AH',
    role: 'Head of the content committee',
    org: 'Google Developer Student Club — University of Tabuk',
    summary:
      'Leading the content team, coordinating visual and written output, and aligning work with club goals and the Deanship of Student Affairs.',
  },
  {
    range: '1444 AH',
    role: 'Assistant head of the content committee',
    org: 'Google Developer Student Club — University of Tabuk',
    summary:
      'Supporting the committee lead on planning and delivery; workshops such as English-skills development and the Visual 23 challenge; promos and content (e.g. travel club).',
  },
  {
    range: '1443 AH — start of the path',
    role: 'Content committee member',
    org: 'Google Developer Student Club — University of Tabuk',
    summary:
      'Content, design, and editing; attending events and meetings; on-the-ground execution for club activities.',
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

const maeenGalleryEn: ProjectGalleryImage[] = [
  {
    src: '/projects/maeen/01-gesture-fist.png',
    alt: 'Maeen — hand skeleton tracking with main phrases and quick responses (closed fist)',
  },
  {
    src: '/projects/maeen/02-gesture-four-fingers.png',
    alt: 'Maeen — four-finger gesture with legal sentence output in the top bar',
  },
  {
    src: '/projects/maeen/03-gesture-index.png',
    alt: 'Maeen — index-only gesture with beneficiary intro sentence',
  },
  {
    src: '/projects/maeen/04-mobile-chat.png',
    alt: 'Maeen — mobile smart assistant chat and voice UI',
  },
  {
    src: '/projects/maeen/05-mobile-form.png',
    alt: 'Maeen — profile form with accessibility controls and voice input',
  },
  {
    src: '/projects/maeen/06-mobile-judgments.png',
    alt: 'Maeen — judgments list and ruling text for beneficiaries',
  },
  {
    src: '/projects/maeen/07-award.png',
    alt: 'Maeen — 2nd place trophy and prize check, Judicial Intelligence Hackathon',
  },
]

const aynGalleryEn: ProjectGalleryImage[] = [
  {
    src: '/projects/ayn/01-dashboard-kpi.png',
    alt: 'Ayn — data quality KPI dashboard, end-of-analysis report, and charts',
  },
  {
    src: '/projects/ayn/02-data-grid.png',
    alt: 'Ayn — data grid with error/warning highlighting and per-row confidence',
  },
  {
    src: '/projects/ayn/03-details-modal.png',
    alt: 'Ayn — row detail modal with issues, suggestions, rules and AI context',
  },
  {
    src: '/projects/ayn/04-analysis-insights.png',
    alt: 'Ayn — top field/message repetition, interpretations, and practical suggestions',
  },
  {
    src: '/projects/ayn/05-alerts-grid.png',
    alt: 'Ayn — filterable alerts grid by severity and alert type',
  },
  {
    src: '/projects/ayn/06-form-demographic.png',
    alt: 'Ayn — demographic form with real-time rule validation',
  },
  {
    src: '/projects/ayn/07-realtime-verify.png',
    alt: 'Ayn — real-time verification summary with LLM narrative and rule violations',
  },
  {
    src: '/projects/ayn/08-form-economic.png',
    alt: 'Ayn — operational/economic fields with contradiction and salary/hours checks',
  },
  {
    src: '/projects/ayn/09-award-check-gastat.png',
    alt: 'Ayn — 2nd place ceremonial check, UN World Data Forum Riyadh & GASTAT',
  },
  {
    src: '/projects/ayn/10-team-award.png',
    alt: 'Ayn — team with award check at the data forum',
  },
]

export const projects: ProjectEntry[] = [
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
      '**Second place** on the winners’ podium at the **Data Innovation Hackathon** organized by the **General Authority for Statistics**, among **132 teams**. The idea: **Ayn** improves **data quality at the source** by combining **AI**, **large language models**, and **business rules** so validation happens **as data is entered**, not only in a later phase.',
    detail:
      '**Ayn** is a **data-quality-at-capture** platform: KPI dashboards, color-coded grids, **filterable alerts**, and **analysis reports** with LLM-assisted narrative alongside a **business-rules layer**. It supports **real-time validation** on forms (demographic and economic) with clear issue text and suggestions, plus a **row detail** view for deep review. The project placed **2nd** at the GASTAT hackathon and is tied to recognition at the **UN World Data Forum** in Riyadh.',
    tags: ['LLMs', 'Data quality', 'Arabic NLP'],
    href: 'https://www.linkedin.com/posts/ahmed014x_%D8%A8%D9%81%D8%B6%D9%84-%D8%A7%D9%84%D9%84%D9%87-%D9%88%D8%AA%D9%88%D9%81%D9%8A%D9%82%D9%87-%D8%A7%D8%B3%D8%B7%D8%A7%D8%B9-%D9%81%D8%B1%D9%8A%D9%82%D9%86%D8%A7-%D8%A7%D8%B9%D8%AA%D9%84%D8%A7%D8%A1-%D9%85%D9%86%D8%B5%D8%A9-activity-7452363902543204352-Kw0C',
    coverSrc: '/projects/ayn/cover.png',
    gallery: aynGalleryEn,
  },
  {
    title: 'Maeen (معين) | AI-Powered Multi-Modal Legal Interface',
    badge: '2nd place — Judicial Intelligence Hackathon',
    summary:
      'An award-winning solution that humanizes judicial workflows through zero-touch interaction: computer vision for gestures and speech-to-text / NLP for voice, lowering cognitive load and making services faster and more inclusive for older adults and people with disabilities.',
    detail:
      '**Maeen** is a multi-modal legal interface that placed **2nd** at the **Judicial Intelligence Hackathon** (Board of Grievances). It combines **hand-gesture tracking** (pose-to-phrase mapping), **voice and conversational AI**, and **mobile** flows for beneficiaries—smart chat, voice-enabled forms, and **judgments** review with ruling text—plus **accessibility** controls (text scaling, simplified interaction).',
    tags: ['Computer Vision', 'NLP', 'Accessibility'],
    href: 'https://www.linkedin.com/posts/ahmed014x_aevaepaeraetaewaeuabraeyaeraepaejabraepaesaeqaeeaepaej-ugcPost-7425600028704083968-Rug_',
    coverSrc: '/projects/maeen/cover.png',
    gallery: maeenGalleryEn,
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
    title: 'Guardians | Immersive strategy vs. desertification',
    badge: 'Savvy Games Incubator · Game development',
    summary:
      '**Guardians** is an immersive **strategy** game that puts the **planet’s future** in your hands. The world stands on the brink of a **barren wasteland**; players must battle the **encroaching sands of desertification** before the last green life is gone. Built on the **Unity engine** with **C#**—scenes, gameplay systems, 3D assets, and UI.',
    tags: ['Unity', 'C#', 'Game dev'],
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
