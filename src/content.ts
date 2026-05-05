/** عدّل هذا الملف ليتوافق مع معلوماتك — محتوى تجريبي جاهز للاستبدال */

export const site = {
  name: 'أحمد الحربي',
  fullName: 'أحمد الحربي',
  title: 'مطوّر واجهات ومنتجات رقمية',
  tagline:
    'أحوّل الأفكار إلى تجارب ويب سريعة وواضحة، بمزيج من التصميم والهندسة والاهتمام بالتفاصيل.',
  email: 'hello@example.com',
  /** ملف السيرة في `public/` — نُسخ من مسارك المحلي */
  cv: {
    href: '/ahmed-n-alharbi-cv.pdf',
    downloadFileName: 'Ahmed-Alharbi-CV.pdf',
    label: 'تحميل السيرة الذاتية (PDF)',
  },
  social: [
    { label: 'تويتر / X', href: 'https://x.com/', handle: '@username' },
    { label: 'لينكدإن', href: 'https://linkedin.com/', handle: 'in/username' },
    { label: 'جيت هاب', href: 'https://github.com/', handle: 'username' },
  ],
}

export const stats = [
  { icon: '⏱️', value: '5+', label: 'سنوات خبرة' },
  { icon: '🚀', value: '24+', label: 'مشروع مُسلَّم' },
  { icon: '🏆', value: '8+', label: 'شراكات ومبادرات' },
]

export const aboutParagraphs = [
  'أعمل على بناء واجهات حديثة وتجارب مستخدم متسقة عبر الأجهزة، مع اهتمام خاص بالأداء وإمكانية الوصول.',
  'أؤمن أن الوضوح أهم من الزخرفة: تخطيط هادئ، نصوص قابلة للمسح، وتفاعلات خفيفة تدعم القراءة لا تشتتها.',
]

export const journey = [
  {
    range: '2024 — الآن',
    role: 'قائد تقني / مطوّر واجهات',
    org: 'استوديو منتج رقمي',
  },
  {
    range: '2021 — 2024',
    role: 'مطوّر واجهات أمامية',
    org: 'شركة برمجيات',
  },
  {
    range: '2019 — 2021',
    role: 'مصمم واجهات ومطوّر',
    org: 'عمل حر ومشاريع تعاونية',
  },
]

export type SkillLevel = 'expert' | 'advanced' | 'intermediate'

export const skillGroups: {
  title: string
  icon: string
  skills: { name: string; level: SkillLevel }[]
}[] = [
  {
    title: 'تطوير الويب',
    icon: '💻',
    skills: [
      { name: 'React / TypeScript', level: 'expert' },
      { name: 'أداء الويب', level: 'advanced' },
      { name: 'واجهات برمجية REST', level: 'advanced' },
    ],
  },
  {
    title: 'تجربة المستخدم',
    icon: '🎨',
    skills: [
      { name: 'أنظمة تصميم', level: 'advanced' },
      { name: 'نماذج تفاعلية', level: 'intermediate' },
    ],
  },
  {
    title: 'أدوات وعمليات',
    icon: '⚙️',
    skills: [
      { name: 'Git / CI', level: 'advanced' },
      { name: 'اختبارات', level: 'intermediate' },
    ],
  },
]

export const projects = [
  {
    title: 'منصة تعاون فريق',
    badge: 'منتج',
    summary: 'لوحة تحكم، صلاحيات، وإشعارات فورية — بناء مع التركيز على السرعة والوضوح.',
    tags: ['React', 'TypeScript', 'Vite'],
    href: '#',
  },
  {
    title: 'موقع مؤسسي متعدد اللغات',
    badge: 'واجهات',
    summary: 'هيكلة محتوى، RTL/LTR، وتحسين لـ Core Web Vitals.',
    tags: ['Next.js', 'i18n', 'SEO'],
    href: '#',
  },
  {
    title: 'تطبيق ويب تعليمي',
    badge: 'تجربة',
    summary: 'مسارات تعلم، تتبع تقدّم، وتصميم متجاوب كامل.',
    tags: ['PWA', 'A11y'],
    href: '#',
  },
]
