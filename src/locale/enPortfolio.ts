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
  phone: {
    display: '+966 54 096 6063',
    tel: '+966540966063',
  },
  whatsapp: {
    href: 'https://wa.me/966540966063',
  },
  cv: {
    href: '/ahmed-n-alharbi-cv.pdf',
    downloadFileName: 'Ahmed_N_Alharbi.pdf',
    label: 'Download CV (PDF)',
  },
  social: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ahmed014x',
      handle: 'ahmed014x',
      iconId: 'portfolio-linkedin-icon' as const,
    },
    {
      label: 'X',
      href: 'https://x.com/ahmed014x',
      handle: '@ahmed014x',
      iconId: 'portfolio-x-icon' as const,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ahmed014x/',
      handle: '@ahmed014x',
      iconId: 'portfolio-instagram-icon' as const,
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

const nextedGalleryEn: ProjectGalleryImage[] = Array.from(
  { length: 35 },
  (_, i) => ({
    src: `/projects/nexted/slide-${String(i + 1).padStart(2, '0')}.png`,
    alt: `NextEd — app UI screen (${i + 1} of 35)`,
  }),
)

const ATQINHA_SLIDE_COUNT = 14
const atqinhaGalleryEn: ProjectGalleryImage[] = Array.from(
  { length: ATQINHA_SLIDE_COUNT },
  (_, i) => ({
    src: `/projects/atqinha/slide-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Atqinha — image from the LinkedIn post on the bootcamp and project (${i + 1} of ${ATQINHA_SLIDE_COUNT})`,
  }),
)

const OPTIMUM_ALT_EN = [
  'Optimum — home dashboard, today’s plan, and quick stats',
  'Optimum — camera view with pose skeleton, joint angles, and live feedback',
  'Optimum — last session summary, smart alert, and advanced performance ring',
  'Optimum — exercise catalog with search and sport filters',
  'Optimum — exercise detail: benefits, steps, and common mistakes',
  'Optimum — record now or upload video flow',
  'Optimum — archive & growth plus player safety indicators',
  'Optimum — reports with movement notes and smart next-session tips',
] as const

const optimumGalleryEn: ProjectGalleryImage[] = OPTIMUM_ALT_EN.map((alt, i) => ({
  src: `/projects/optimum/slide-${String(i + 1).padStart(2, '0')}.png`,
  alt,
}))

const NIDAA_SLIDE_COUNT = 9
const nidaaGalleryEn: ProjectGalleryImage[] = Array.from(
  { length: NIDAA_SLIDE_COUNT },
  (_, i) => ({
    src: `/projects/nidaa/slide-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `NIDAA — image from the LinkedIn post (${i + 1} of ${NIDAA_SLIDE_COUNT})`,
  }),
)

const RASD_SLIDE_COUNT = 8
const rasdGalleryEn: ProjectGalleryImage[] = Array.from(
  { length: RASD_SLIDE_COUNT },
  (_, i) => ({
    src: `/projects/rasd/slide-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `RASD — image from the LinkedIn post (${i + 1} of ${RASD_SLIDE_COUNT})`,
  }),
)

const MAYDAN_ALT_EN = [
  'Maydan — landing page, search, and featured events',
  'Maydan — booking confirmation, order details, and digital tickets',
  'Maydan — checkout with order summary and buyer information',
  'Maydan — digital ticket, countdown, download and calendar actions',
  'Maydan — ticket & sales analytics, channels, and conversion KPIs',
  'Maydan — operations & staff efficiency and crowd heatmap',
  'Maydan — IoT asset health and preventive maintenance schedule',
  'Maydan — security module, violations, and fines log',
  'Maydan — live command center and emergency quick actions',
  'Maydan — executive overview, revenue trends, and show performance',
  'Maydan — AI decision center with sentiment and strategic recommendations',
  'Maydan — explore categories and about section',
  'Maydan — finance dashboard, budget vs actual, and break-even analysis',
] as const

const maydanGalleryEn: ProjectGalleryImage[] = MAYDAN_ALT_EN.map((alt, i) => ({
  src: `/projects/maydan/slide-${String(i + 1).padStart(2, '0')}.png`,
  alt,
}))

const MIDHAL_ALT_EN = [
  'Midhal — home hero, Saudi heritage positioning, and primary CTAs',
  'Midhal — navigation, hero, and start of the heritage discovery section',
  'Midhal — heritage discovery cards: proverbs, anthropology, mythology, and poetry',
  'Midhal — folk poems listing with a featured poet card',
  'Midhal — detail modal with portrait and long-form archival biography',
  'Midhal — interactive Leaflet map with a heritage site marker and popup',
] as const

const midhalGalleryEn: ProjectGalleryImage[] = MIDHAL_ALT_EN.map((alt, i) => ({
  src: `/projects/midhal/slide-${String(i + 1).padStart(2, '0')}.png`,
  alt,
}))

const MEDINMIND_ALT_EN = [
  'MedinMind Ai — title slide for AI-powered emergency medical resource allocation (SDAIA Athka U, Tabuk University, Azure)',
  'Objectives — dynamic resource allocation, faster critical response, saving lives',
  'Technology stack — Azure AI Services, Azure Database, Speech Services',
  'Pre-model analysis — urban/rural time, utilization, peak hours, idle time',
  'Post-model analysis — metrics after training',
  'Outcomes — survival, satisfaction, dynamic allocation, reduced travel distance',
  'Lean canvas — problem, solution, UVP, metrics, channels, segments',
  'Dispatcher UI — map with optimized ambulance route, distance and ETA summary',
] as const

const medinmindGalleryEn: ProjectGalleryImage[] = MEDINMIND_ALT_EN.map((alt, i) => ({
  src: `/projects/medinmind/slide-${String(i + 1).padStart(2, '0')}.png`,
  alt,
}))

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
    detail:
      '**NextEd** is a **graduation project** built with **Flutter**, **Firebase**, and **ChatGPT** for LLM-powered features. The screens below are exported from the app UI deck. The project was presented at the **4th International Conference on Computing and Information Technology** — see the linked post for context.',
    tags: ['Flutter', 'Firebase', 'ChatGPT API'],
    href: 'https://www.linkedin.com/posts/ahmed014x_%D8%B3%D8%B9%D8%AF%D8%AA-%D8%A8%D8%B9%D8%B1%D8%B6-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%AA%D8%AE%D8%B1%D8%AC%D9%8A-%D8%B6%D9%85%D9%86-%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%A4%D8%AA%D9%85%D8%B1%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D9%84%D9%84%D8%AD%D9%88%D8%B3%D8%A8%D8%A9%D9%88%D8%AA%D9%82%D9%86%D9%8A%D8%A9%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA-activity-7317561159111303169-ma34',
    coverSrc: '/projects/nexted/cover.png',
    gallery: nextedGalleryEn,
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
    detail:
      '**NIDAA** was shortlisted among the **top 10** projects in the **Emergency & Safety Sciences Hackathon** (Prince Sultan College for Emergency Medical Services), born from a **30-day coding challenge**. The team shipped an integrated **mobile app + dashboard** aimed at faster EMS response—the post highlights roughly **13 minutes down to 8**. The stack combines **Flutter & Firebase**, **generative AI** for triage and report generation, and a **pathfinding** approach for ambulance routing. Gallery images are from the **LinkedIn announcement**.',
    tags: ['Azure', 'Computer Vision', 'NLP'],
    href: 'https://www.linkedin.com/posts/ahmed014x_%D8%A7%D9%84%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%87-%D8%A8%D8%AE%D8%AA%D8%A7%D9%85-%D9%85%D9%83%D9%84%D9%84-%D8%A8%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%AD-%D8%B3%D8%B9%D8%AF%D8%AA-%D8%A8%D8%AA%D8%B1%D8%B4%D9%8A%D8%AD-activity-7426614569072152576-JtbG',
    coverSrc: '/projects/nidaa/cover.png',
    gallery: nidaaGalleryEn,
  },
  {
    title: 'Guardians | Immersive strategy vs. desertification',
    badge: 'Savvy Games Incubator · Game development',
    summary:
      '**Guardians** is an immersive **strategy** game that puts the **planet’s future** in your hands. The world stands on the brink of a **barren wasteland**; players must battle the **encroaching sands of desertification** before the last green life is gone. Built on the **Unity engine** with **C#**—scenes, gameplay systems, 3D assets, and UI.',
    detail:
      'Product narrative, mechanics overview, and visual pitch for **Guardians** are available as a hosted **PDF** deck—the project link opens the file in the browser.',
    tags: ['🎮 Unity', '🔷 C#', '🕹️ Game dev'],
    href: '/projects/guardians/Guardians-2.pdf',
    coverSrc: '/projects/guardians/cover.png',
  },
  {
    title: 'Atqinha | Smart physical therapy at home',
    badge: 'Capstone — Tuwaiq Academy · Mobile app',
    summary:
      'Capstone project at **Tuwaiq Academy**: a mobile app that helps patients do PT exercises correctly at home using the phone camera—pose estimation and real-time correction with computer vision, a customized ChatGPT-based assistant for guidance, and periodic performance reports for physicians. Cross-platform Flutter with Firebase backend.',
    detail:
      '**Atqinha** is the **Data Science & AI Bootcamp** capstone at **Tuwaiq Academy** (10 weeks). It targets **at-home physical therapy** with the phone camera: **pose estimation** and live correction, a **ChatGPT**-based guidance assistant, and **physician-facing reports**. The gallery images are exported from the **LinkedIn post** that describes the bootcamp journey, team, and technical pillars.',
    tags: ['Flutter', 'Firebase', 'ChatGPT API'],
    href: 'https://www.linkedin.com/posts/ahmed014x_%D8%A3%D8%AA%D8%B4%D8%B1%D9%81-%D8%A8%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%AA%D9%83%D9%85-%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%AE%D8%A8%D8%B1-%D8%A5%D8%AA%D9%85%D8%A7%D9%85%D9%8A-%D9%84%D9%85%D8%AA%D8%B7%D9%84%D8%A8%D8%A7%D8%AA-ugcPost-7409584346459918337-Q-ok',
    coverSrc: '/projects/atqinha/cover.png',
    gallery: atqinhaGalleryEn,
  },
  {
    title: 'Optimum | Smart sports app for player movement analysis',
    badge: 'Mobile app · Sports AI',
    summary:
      'A smart sports app that analyzes player movement with **computer vision** and **AI**—**real-time performance scoring**, **automatic detection of movement errors**, and **analytical reports** that help athletes improve with clear, data-backed feedback.',
    detail:
      '**Optimum** is an **RTL Arabic** mobile concept for athletic training: a **home** hub with daily plans and KPIs, a **camera** experience with pose estimation, joint angles, risk/tip readouts, **exercises** with search and rich drill pages, **reports** with movement observations and smart recommendations, plus **archive / progression** and **player safety** panels. Gallery screenshots are UI exports from the project.',
    tags: ['Computer Vision', 'AI', 'Mobile'],
    href: '#',
    coverSrc: '/projects/optimum/cover.png',
    gallery: optimumGalleryEn,
  },
  {
    title: 'Maydan (الميدان) | Smart theatre management',
    badge: 'SaaS',
    summary:
      'A cloud platform that bridges art and operations: automated scheduling across people, budgets, and venues; analytics to cut “show failure” risk and revenue leakage; and audience and pricing insights to grow sustainable cultural institutions—data-driven theatre management.',
    detail:
      '**Maydan** pairs a **public booking experience** (discover events, search, checkout, confirmation, digital tickets) with a dark **executive command center**—sales, finance, security, **IoT asset health**, operations, and an **AI decision center**. Gallery screenshots are high-fidelity UI exports from the project.',
    tags: ['SaaS', 'Analytics', 'Cloud'],
    href: '#',
    coverSrc: '/projects/maydan/cover.png',
    gallery: maydanGalleryEn,
  },
  {
    title: 'RASD (منظومة رصد) | Drone swarm security & AI',
    badge: 'Top 15 — Absher hackathon · Tuwaiq Academy',
    summary:
      '**Top 15** project at the **Absher** hackathon with **Tuwaiq Academy**, on the **critical security** track: autonomous drone swarms with flexible formations, dual ground/aerial scanning, YOLOv8 threat classification (weapons, sharp objects, explosives, bags), and spatial change detection vs. a stored visual footprint. Edge AI on a ground station; unified digital alerts with GPS, imagery, and threat levels for command centers.',
    detail:
      '**RASD** qualified for the **Absher Tuwaiq Hackathon** finals on the **critical security** track: drone-based perimeter security with **YOLOv8** for ground/aerial scanning and threat classification, ground-station processing, and unified **GPS**-tagged alerts. Gallery images are from the **LinkedIn** announcement.',
    tags: ['YOLOv8', 'Computer Vision', 'Edge AI'],
    href: 'https://www.linkedin.com/posts/ahmed014x_aevaepaeraepaetaewaeuabraelaeqaecaezabraefaewaeyaeq-activity-7405975907363950592-UODn',
    coverSrc: '/projects/rasd/cover.jpg',
    gallery: rasdGalleryEn,
  },
  {
    title: 'Midhal | A digital memory for Saudi identity',
    badge: 'Platform',
    summary:
      'An integrated platform to collect and archive Saudi history—folk tales, rare documents, archaeological sites, and cultural change—through a modern, interactive experience for researchers and future generations.',
    detail:
      '**Midhal** is an Arabic **RTL** heritage site: a **marketing home** for discovery, a **heritage grid** (proverbs, anthropology, mythology, poetry), **folk poems** with cards plus a **read-more modal** for long biographies, and an **interactive map** (Leaflet / OpenStreetMap) with pins and popups for historic places. Gallery shots are UI exports from the project.',
    tags: ['Archive', 'Heritage', 'Web'],
    href: '#',
    coverSrc: '/projects/midhal/cover.png',
    gallery: midhalGalleryEn,
  },
  {
    title: 'AI medical resource allocation & emergency routing',
    badge: 'Athka U Hackathon — Sdaya',
    summary:
      'Smart emergency response recommendations that combine live traffic, hospital load, ambulance availability, patient location, and optimized routing to improve allocation—shorter travel, better satisfaction, and higher survival outcomes.',
    detail:
      '**MedinMind Ai** for **SDAIA Athka U**: dynamic EMS resource allocation with **Azure AI** and **Azure Maps**, pre/post model analytics, outcome metrics, a lean-canvas narrative, and a **Dispatcher** prototype with map-based routing and ETA summaries. Gallery slides are from the pitch deck and demo UI.',
    tags: ['Routing', 'Optimization', 'Azure'],
    href: '#',
    coverSrc: '/projects/medinmind/cover.png',
    gallery: medinmindGalleryEn,
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
