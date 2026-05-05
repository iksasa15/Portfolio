import type { Locale } from './localeContext'

type Ui = {
  skipLink: string
  navAria: string
  nav: { id: string; label: string }[]
  statRowAria: string
  heroHello: string
  heroCtaWork: string
  heroCtaContact: string
  aboutKicker: string
  aboutTitle: string
  educationKicker: string
  educationTitle: string
  journeyKicker: string
  journeyTitle: string
  skillsKicker: string
  skillsTitle: string
  projectsKicker: string
  projectsTitle: string
  projectsLede: string
  contactKicker: string
  contactTitle: string
  contactLede: string
  contactCvLabel: string
  contactCvHint: string
  contactMailLabel: string
  footerLine: string
  levelExpert: string
  levelAdvanced: string
  levelIntermediate: string
}

const ar: Ui = {
  skipLink: 'تخطّي للمحتوى',
  navAria: 'أجزاء الصفحة',
  nav: [
    { id: 'intro', label: 'البداية' },
    { id: 'about', label: 'عني' },
    { id: 'education', label: 'دراستي' },
    { id: 'journey', label: 'شغلي' },
    { id: 'skills', label: 'مهاراتي' },
    { id: 'projects', label: 'مشاريعي' },
    { id: 'contact', label: 'تواصل' },
  ],
  statRowAria: 'أرقام على السريع',
  heroHello: 'هلا، أنا',
  heroCtaWork: 'من أعمالي',
  heroCtaContact: 'كلمّني',
  aboutKicker: 'عني',
  aboutTitle: 'كلمتين عني',
  educationKicker: 'الدراسة',
  educationTitle: 'شهاداتي ودوراتي',
  journeyKicker: 'شغلي',
  journeyTitle: 'وين شتغلت',
  skillsKicker: 'المهارات',
  skillsTitle: 'شطارتي التقنية',
  projectsKicker: 'المشاريع',
  projectsTitle: 'مشاريعي',
  projectsLede:
    'كل بطاقة فيها وسم تقني، وتقرى بسرعة على الجوال والشاشة الكبيرة.',
  contactKicker: 'تواصل',
  contactTitle: 'ياليت نتواصل',
  contactLede: 'تقدر ترسل على الإيميل أو تتابعني بالمنصات تحت.',
  contactCvLabel: 'السيرة',
  contactCvHint: 'ملف PDF',
  contactMailLabel: 'الإيميل',
  footerLine:
    'التصميم هادئ شوي ولونه كحلي مع لمسة خفيفة.',
  levelExpert: 'قوي',
  levelAdvanced: 'زين',
  levelIntermediate: 'عادي',
}

const en: Ui = {
  skipLink: 'Skip to content',
  navAria: 'Page sections',
  nav: [
    { id: 'intro', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'journey', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  statRowAria: 'Quick stats',
  heroHello: 'Hi, I’m',
  heroCtaWork: 'View work',
  heroCtaContact: 'Contact me',
  aboutKicker: 'About',
  aboutTitle: 'A few words',
  educationKicker: 'Education',
  educationTitle: 'Degrees & programs',
  journeyKicker: 'Experience',
  journeyTitle: 'Where I’ve worked',
  skillsKicker: 'Skills',
  skillsTitle: 'Technical strengths',
  projectsKicker: 'Projects',
  projectsTitle: 'Selected projects',
  projectsLede:
    'Each card has tech tags and reads well on phones and large screens.',
  contactKicker: 'Contact',
  contactTitle: 'Let’s connect',
  contactLede: 'Email me or follow the links below.',
  contactCvLabel: 'Résumé',
  contactCvHint: 'PDF file',
  contactMailLabel: 'Email',
  footerLine: 'Quiet layout in deep navy with subtle accents.',
  levelExpert: 'Strong',
  levelAdvanced: 'Solid',
  levelIntermediate: 'Familiar',
}

const byLocale: Record<Locale, Ui> = { ar, en }

export function getUi(locale: Locale): Ui {
  return byLocale[locale]
}
