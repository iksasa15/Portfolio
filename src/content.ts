/** عدّل هذا الملف ليتوافق مع معلوماتك — محتوى تجريبي جاهز للاستبدال */

export const site = {
  name: 'أحمد الحربي',
  fullName: 'أحمد الحربي',
  title: 'مهندس ذكاء اصطناعي',
  tagline:
    'أبني وأطلق أنظمة ذكاء اصطناعي للإنتاج — تكامل نماذج لغوية كبيرة، رؤية حاسوبية، وأتمزة مدعومة بالبيانات.',
  email: 'ahmednalharbii@gmail.com',
  /** ملف السيرة في `public/` — نُسخ من مسارك المحلي */
  cv: {
    href: '/ahmed-n-alharbi-cv.pdf',
    downloadFileName: 'Ahmed-Alharbi-CV.pdf',
    label: 'تحميل السيرة الذاتية (PDF)',
  },
  social: [
    {
      label: 'لينكدإن',
      href: 'https://linkedin.com/in/ahmed014x',
      handle: 'in/ahmed014x',
    },
    {
      label: 'جيت هاب',
      href: 'https://github.com/iksasa15',
      handle: 'iksasa15',
    },
  ],
}

export const stats = [
  { icon: '🎓', value: '٤٫٥٠', label: 'المعدل التراكمي /٥' },
  { icon: '🚀', value: '7+', label: 'مشاريع بارزة' },
  { icon: '🏆', value: '2', label: 'برامج تدريب متقدم' },
]

export type BrandLogo = {
  /** الوضع النهاري أو الافتراضي */
  src: string
  alt: string
  /** الوضع الليلي (مثل شعار أبيض على خلفية داكنة) */
  srcDark?: string
}

export type EducationEntry = {
  range: string
  title: string
  org?: string
  /** سطر ثانوي مثل المعدل */
  meta?: string
  highlights?: string[]
  /** شعار الجهة — ملفات في `public/logos/` */
  logo?: BrandLogo
}

/** من قسم EDUCATION & TRAINING في السيرة */
export const education: EducationEntry[] = [
  {
    range: 'تخرّج ٢٠٢٥',
    title: 'بكالوريوس علوم الحاسب',
    meta: 'المعدل التراكمي ٤٫٥٠ من ٥٫٠',
    logo: {
      src: '/logos/degree.svg',
      alt: 'أيقونة تخرّج',
    },
  },
  {
    range: 'أكتوبر ٢٠٢٤ — يناير ٢٠٢٥',
    title: 'برنامج زمالة تخصص ذكاء اصطناعي',
    org: 'جامعة الملك عبدالله للعلوم والتقنية (كاوست)',
    logo: {
      src: '/logos/kaust.svg',
      srcDark: '/logos/kaust-white.svg',
      alt: 'شعار جامعة الملك عبدالله للعلوم والتقنية كاوست',
    },
    highlights: [
      'بناء وتحسين خوارزميات أساسية في الذكاء الاصطناعي باستخدام الإحصاء والتفاضل والتكامل المتقدم.',
      'معالجة مجموعات نصية واسعة النطاق ببايثون لتغذية نماذج معالجة اللغات الطبيعية بجودة عالية.',
      'خفض العبء الحسابي عبر تحسين كفاءة الخوارزميات في مسارات معالجة البيانات.',
    ],
  },
  {
    range: 'أكتوبر ٢٠٢٥ — ديسمبر ٢٠٢٥',
    title: 'معسكر علوم البيانات والذكاء الاصطناعي',
    org: 'أكاديمية طويق',
    logo: {
      src: '/logos/tuwaiq-dark.png',
      srcDark: '/logos/tuwaiq.png',
      alt: 'شعار أكاديمية طويق',
    },
    highlights: [
      'إدارة دورة حياة البيانات من الجمع الخام إلى نشر معماريات التعلم العميق.',
      'بناء حلول مستقلة مدعومة بنماذج لغوية كبيرة مع تحسين تدفقات البيانات لأتمزة المهام على نطاق واسع.',
      'دمج نماذج ذكاء اصطناعي معقدة في تطبيقات عبر واجهات REST مع ضمان صحة البيانات وموثوقيتها.',
    ],
  },
]

export const aboutParagraphs = [
  'أحمد الحربي مهندس ذكاء اصطناعي، حاصل على بكالوريوس علوم الحاسب بمعدل تراكمي ٤٫٥٠ من ٥٫٠ (تخرّج ٢٠٢٥). أعمل على تصميم وبناء ونشر أنظمة ذكاء اصطناعي جاهزة للإنتاج، مع تركيز على تكامل النماذج اللغوية الكبيرة، مسارات الرؤية الحاسوبية، والأتمزة المبنية على البيانات؛ وأحوّل متطلبات العمل إلى منتجات قابلة للتوسّع والاعتماد.',
  'خبرة تطبيقية في معالجة مجموعات نصية كبيرة، تحسين كفاءة الخوارزميات، ودمج نماذج معقدة في تطبيقات عبر واجهات REST مع مراعاة صحة البيانات وموثوقيتها. من الأمثلة على الأثر القابل للقياس: هندسة خوارزمية تحسين مكانية ببايثون أدّت إلى خفض زمن استجابة واجهة برمجية في سيناريو حقيقي بنحو ٧٥–٨٥٪، مما حسّن الإنتاجية وتجربة الاستخدام.',
  'تدربت في وزارة الصحة كأخصائي ذكاء اصطناعي (متدرب) على تحسين مسارات بيانات التصوير الطبي والسجلات باستخدام الرؤية الحاسوبية ومعالجة اللغات الطبيعية؛ وأنجزت مشاريع متنوعة تشمل كشف تهديدات في الزمن الحقيقي، تطبيقات صحية بالرؤية الحاسوبية، تحليلات تعلم مخصصة عبر نماذج لغوية، وأتمزة تشغيلية. أكملت برنامج زمالة تخصص ذكاء اصطناعي في كاوست، ومعسكر علوم البيانات والذكاء الاصطناعي في أكاديمية طويق.',
]

export type JourneyEntry = {
  range: string
  role: string
  org: string
  logo?: BrandLogo
}

export const journey: JourneyEntry[] = [
  {
    range: 'يونيو ٢٠٢٤ — أغسطس ٢٠٢٤',
    role: 'أخصائي ذكاء اصطناعي (متدرب)',
    org: 'وزارة الصحة',
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
