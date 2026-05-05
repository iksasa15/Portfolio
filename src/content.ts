/** عدّل المحتوى هنا — بالعامية الخليجية */

export const site = {
  name: 'أحمد الحربي',
  fullName: 'أحمد الحربي',
  title: 'مهندس ذكاء اصطناعي',
  tagline:
    'أشتغل أنظمة ذكاء اصطناعي وتنزل للإنتاج: أشبك موديلات لغوية كبيرة، أمسك موضوع الرؤية الحاسوبية، وألقّم أتمتة على البيانات.',
  email: 'ahmednalharbii@gmail.com',
  cv: {
    href: '/ahmed-n-alharbi-cv.pdf',
    downloadFileName: 'Ahmed-Alharbi-CV.pdf',
    label: 'نزّل السيرة (PDF)',
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
  { icon: '🎓', value: '٤٫٥٠', label: 'معدلي من ٥' },
  { icon: '🚀', value: '7+', label: 'مشاريع لافتة' },
  { icon: '🏆', value: '2', label: 'الجوائز' },
  { icon: '🤝', value: '٧٠٠+', label: 'ساعات التطوع' },
]

export type BrandLogo = {
  src: string
  alt: string
  srcDark?: string
}

export type EducationEntry = {
  range: string
  title: string
  org?: string
  meta?: string
  highlights?: string[]
  logo?: BrandLogo
}

export const education: EducationEntry[] = [
  {
    range: 'تخرّجت ٢٠٢٥',
    title: 'بكالوريوس علوم حاسب',
    org: 'جامعة تبوك',
    meta: 'معدلي ٤٫٥٠ من ٥',
    logo: {
      src: '/logos/tabuk-university.svg',
      srcDark: '/logos/tabuk-university-white.svg',
      alt: 'شعار جامعة تبوك',
    },
    highlights: [
      'مشيت على أساسيات علوم الحاسب من البرمجة والخوارزميات لين الشبكات والقواعد، وربطتها بمشاريع عملية من التصميم لين التسليم.',
      'صمّمت وبنيت أنظمة برمجية مع انتباه للأداء والتنظيم، وفهمت الأنظمة من الطبقة اللي تحت لين الواجهة.',
      'قوّيت أساس الرياضيات والخوارزميات عشان أمهّد لمسار الذكاء الاصطناعي وتعلّم آلي ومسارات بيانات.',
    ],
  },
  {
    range: 'أكتوبر ٢٠٢٤ — يناير ٢٠٢٥',
    title: 'زمالة تخصص ذكاء اصطناعي',
    org: 'جامعة الملك عبدالله للعلوم والتقنية (كاوست)',
    logo: {
      src: '/logos/kaust.svg',
      srcDark: '/logos/kaust-white.svg',
      alt: 'شعار كاوست',
    },
    highlights: [
      'بنيت وطوّرت خوارزميات أساسية للذكاء الاصطناعي مع إحصاء وتفاضل وتكامل على مستوى عالي.',
      'عالجت نصوص كثيرة وكبيرة ببايثون عشان أغذّي نماذج NLP بجودة عالية.',
      'خفّفت الحمل الحسابي لما حسّنت كفاءة الخوارزميات على مسارات البيانات.',
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
      'مشيت مع دورة حياة البيانات من أول ما تتجمّع لين ما نشرنا معماريات التعلم العميق.',
      'سويت حلول مستقلة مبنية على موديلات لغوية كبيرة، وحسّنت تدفّق البيانات عشان أتمتة المهام على نطاق واسع.',
      'شبّكت موديلات ذكاء اصطناعي معقّدة في تطبيقات عن طريق REST، مع انتباه لصحة البيانات وثباتها.',
    ],
  },
]

export const aboutParagraphs = [
  'أنا أحمد الحربي، مهندس ذكاء اصطناعي، متخرّج بكالوريوس علوم حاسب من جامعة تبوك ومعدلي ٤٫٥٠ من ٥ (تخرّجت ٢٠٢٥). أشتغل تصميم وبناء ونشر أنظمة ذكاء اصطناعي جاهزة للإنتاج، ومركّز على تكامل الموديلات اللغوية الكبيرة، مسارات الرؤية الحاسوبية، والأتمتة اللي تقوم على البيانات؛ وأحوّل اللي يبغونه في الشغل إلى منتج يتوسّع ويثبت.',
  'عندي خبرة يد على أرض الواقع: معالجة نصوص كبيرة، تحسين كفاءة الخوارزميات، ودمج موديلات معقّدة في تطبيقات عن طريق واجهات REST مع انتباه لصحة البيانات وثباتها. من اللي قيسناه: خوارزمية تحسين مكانية ببايثون خفّضت زمن استجابة API في سيناريو حقيقي تقريباً ٧٥–٨٥٪، وهذا رفع الإنتاجية وحسّن تجربة الاستخدام.',
  'تدربت في وزارة الصحة كأخصائي ذكاء اصطناعي (متدرب) على تحسين مسارات بيانات التصوير الطبي والسجلات بالرؤية الحاسوبية ومعالجة اللغات الطبيعية؛ وسويت مشاريع متنوعة منها كشف تهديدات لحظي، تطبيقات صحية بالرؤية الحاسوبية، تحليلات تعلّم مخصّصة مع موديلات لغوية، وأتمتة تشغيلية. خلصت زمالة تخصص ذكاء اصطناعي في كاوست، ومعسكر علوم البيانات والذكاء الاصطناعي في أكاديمية طويق.',
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
      { name: 'واجهات REST', level: 'advanced' },
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
    title: 'أدوات وشغل يومي',
    icon: '⚙️',
    skills: [
      { name: 'Git / CI', level: 'advanced' },
      { name: 'اختبارات', level: 'intermediate' },
    ],
  },
]

export const projects = [
  {
    title: 'NextEd: تعلّم ذكي لأداء متميز',
    badge: 'مشروع تخرج',
    summary:
      'منصة تعليمية بالذكاء الاصطناعي: تلخّص المحاضرات، وتولّد اختبارات وبطاقات مراجعة، وتدير المهام والجداول والتذكيرات، وتعرض إحصائيات وتقدّم دراسي. فوق كذا يحلّل الأداء من الدرجات ومعدّل إنجاز المهام، يبيّن الرؤى بصرياً، ويطلع خطة تحسين (مراجعة، وتوقيت، وتركيز على النقاط الضعيفة) عشان يرفع الدرجات بخطوات واضحة — يذاكر أذكى مو أصعب.',
    tags: ['Flutter', 'Firebase', 'ChatGPT API'],
    href: 'https://drive.google.com/file/d/1ZDMDpL59VROoyvq2PuEZwkGL3vOTa_qq/view',
  },
  {
    title: 'منصة تعاون فريق',
    badge: 'منتج',
    summary:
      'لوحة تحكم، صلاحيات، وإشعارات لحظية — مبني على سرعة ووضوح عشان الفريق يشتغل براحة.',
    tags: ['React', 'TypeScript', 'Vite'],
    href: '#',
  },
  {
    title: 'موقع مؤسسي متعدد اللغات',
    badge: 'واجهات',
    summary:
      'هيكلة محتوى، RTL/LTR، وتحسين Core Web Vitals عشان الصفحات تفتح زين وتقرأ زين.',
    tags: ['Next.js', 'i18n', 'SEO'],
    href: '#',
  },
  {
    title: 'تطبيق ويب تعليمي',
    badge: 'تجربة',
    summary: 'مسارات تعلّم، تتبّع تقدّم، وتصميم متجاوب يمشي على كل الشاشات.',
    tags: ['PWA', 'A11y'],
    href: '#',
  },
]
