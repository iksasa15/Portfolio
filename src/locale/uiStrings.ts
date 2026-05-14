import type { Locale } from './localeContext'

/** بطاقة عرض خدمة (موقع / تطبيق) */
export type ServiceOfferingCard = {
  title: string
  details: string
  durationLabel: string
  duration: string
  priceLabel: string
  priceNote: string
}

export type RefundPolicySection = {
  title: string
  paragraphs: string[]
}

export type Ui = {
  skipLink: string
  navAria: string
  navMenuOpen: string
  navMenuClose: string
  nav: { id: string; label: string }[]
  navDrawerServicesTitle: string
  /** سطر قصير تحت زر «خدماتي» في قائمة الموبايل */
  navDrawerServicesBlurb: string
  navDrawerServicesCta: string
  servicesPageBack: string
  servicesOfferingWeb: ServiceOfferingCard
  servicesOfferingApp: ServiceOfferingCard
  servicesRefundsLink: string
  servicesWhatsappCta: string
  refundsPageTitle: string
  refundsPageBack: string
  /** مقدمة رسمية تحت عنوان الصفحة (اختياري للعرض) */
  refundsPagePreamble: string
  refundsSections: RefundPolicySection[]
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
  volunteerKicker: string
  volunteerTitle: string
  skillsKicker: string
  skillsTitle: string
  projectsKicker: string
  projectsTitle: string
  projectDetailClose: string
  projectDetailPrev: string
  projectDetailNext: string
  projectDetailOpenLink: string
  contactKicker: string
  contactTitle: string
  contactLede: string
  contactCvLabel: string
  contactCvHint: string
  contactMailLabel: string
  contactPhoneLabel: string
  contactWhatsappLabel: string
  footerLine: string
  levelExpert: string
  levelAdvanced: string
  levelIntermediate: string
}

const ar: Ui = {
  skipLink: 'تخطّي للمحتوى',
  navAria: 'أجزاء الصفحة',
  navMenuOpen: 'فتح قائمة الأقسام',
  navMenuClose: 'إغلاق القائمة',
  nav: [
    { id: 'intro', label: 'البداية' },
    { id: 'about', label: 'عني' },
    { id: 'education', label: 'دراستي' },
    { id: 'journey', label: 'شغلي' },
    { id: 'volunteering', label: 'تطوعي' },
    { id: 'skills', label: 'مهاراتي' },
    { id: 'projects', label: 'مشاريعي' },
    { id: 'contact', label: 'تواصل' },
  ],
  navDrawerServicesTitle: 'خدماتي',
  navDrawerServicesBlurb:
    'تفاصيل الخدمة والمدة والسعر نحددهم سوا بعد ما نتواصل.',
  navDrawerServicesCta: 'تواصل للتفاصيل',
  servicesPageBack: 'الرئيسية',
  servicesOfferingWeb: {
    title: 'بناء موقع',
    details:
      'موقع يعكس هويتك أو مشروعك: هيكل صفحات، واجهة مرتبة، أداء زين، وتجربة استخدام واضحة على الجوال والكمبيوتر. نقدر نضيف نماذج تواصل، مدونة بسيطة، أو ربط بخدمات خارجية حسب احتياجك.',
    durationLabel: 'المدة',
    duration:
      'تختلف حسب حجم المشروع؛ بعد ما نثبت النطاق والمحتوى أعطيك تقدير زمني واضح (غالباً من أسابيع قليلة لمشاريع متوسطة).',
    priceLabel: 'السعر',
    priceNote: 'يُحدَّد بعد التواصل—أبغى أفهم النطاق عشان أعطيك عرض عادل وشفاف.',
  },
  servicesOfferingApp: {
    title: 'بناء تطبيق',
    details:
      'تطبيق ويب أو موبايل (حسب ما نتفق): شاشات أساسية، تسجيل دخول إن لزم، لوحة بسيطة، وربط بخلفية أو API حسب المشروع. نمشي على مراحل: نموذج أولي ثم تطوير وتسليم تدريجي.',
    durationLabel: 'المدة',
    duration:
      'الأغلب يكون أطول من المواقع البسيطة؛ المدة تُحدَّد بعد جلسة تجميع متطلبات وتقسيم المراحل.',
    priceLabel: 'السعر',
    priceNote: 'يُحدَّد بعد التواصل—حسب التعقيد، التكاملات، والصيانة المطلوبة.',
  },
  servicesRefundsLink: 'أساسيات الاسترجاع',
  servicesWhatsappCta: 'تواصل واتساب',
  refundsPageTitle: 'أساسيات الاسترجاع',
  refundsPageBack: 'رجوع للخدمات',
  refundsCard1Title: 'قبل الدفع وبداية العمل',
  refundsCard1Body:
    'أي التزام مالي يكون بعد ما نتفق كتابةً على النطاق، المراحل، وما يدخل ضمن التسليم. إذا انسحبت قبل ما أبدأ تنفيذ يدوّن في العقد، نلتزم بما اتفقنا عليه من استرجاع جزئي أو كامل حسب مرحلة المشروع. أي دفعة مقدّمة قد تخصم منها تكاليف جاهزية (مثل نطاقات، اشتراكات خارجية) إذا صارت فعلاً.',
  refundsCard2Title: 'أثناء التنفيذ وبعد التسليم',
  refundsCard2Body:
    'بعد البدء بالتنفيذ، الاسترجاع يكون حسب ما هو مكتوب في الاتفاق: مراحل تسليم، فرص تعديل محددة، ومدة تسليم نهائي. بعد اعتماد التسليم النهائي، التعديلات الكبيرة تعتبر نطاقاً جديداً. أي نزاع نحاول نحله بالتواصل أولاً؛ واللي يثبت كتابةً هو المعتمد.',
  statRowAria: 'أرقام على السريع',
  heroHello: 'هلا، أنا',
  heroCtaWork: 'من أعمالي',
  heroCtaContact: 'كلمّني',
  aboutKicker: 'عني',
  aboutTitle: 'كلمتين عني',
  educationKicker: 'الدراسة',
  educationTitle: 'شهاداتي',
  journeyKicker: 'شغلي',
  journeyTitle: 'وين اشتغلت',
  volunteerKicker: 'عطاء',
  volunteerTitle: 'خبرات تطوعية',
  skillsKicker: 'المهارات',
  skillsTitle: 'شطارتي التقنية',
  projectsKicker: 'المشاريع',
  projectsTitle: 'مشاريعي',
  projectDetailClose: 'إغلاق',
  projectDetailPrev: 'السابق',
  projectDetailNext: 'التالي',
  projectDetailOpenLink: 'فتح الرابط',
  contactKicker: 'تواصل',
  contactTitle: 'ياليت نتواصل',
  contactLede: 'تقدر ترسل على الإيميل أو تتابعني بالمنصات تحت.',
  contactCvLabel: 'السيرة',
  contactCvHint: 'ملف PDF',
  contactMailLabel: 'الإيميل',
  contactPhoneLabel: 'الجوال',
  contactWhatsappLabel: 'واتساب',
  footerLine: 'صُنع بحب من **أحمد الحربـي**',
  levelExpert: 'قوي',
  levelAdvanced: 'زين',
  levelIntermediate: 'عادي',
}

const en: Ui = {
  skipLink: 'Skip to content',
  navAria: 'Page sections',
  navMenuOpen: 'Open section menu',
  navMenuClose: 'Close menu',
  nav: [
    { id: 'intro', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'journey', label: 'Work' },
    { id: 'volunteering', label: 'Volunteering' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  navDrawerServicesTitle: 'Services',
  navDrawerServicesBlurb:
    'Scope, timeline, and pricing are agreed after we talk through your needs.',
  navDrawerServicesCta: 'Contact for details',
  servicesPageBack: 'Home',
  servicesOfferingWeb: {
    title: 'Website build',
    details:
      'A site that reflects your brand or product: clear page structure, tidy UI, solid performance, and a good experience on mobile and desktop. We can add contact forms, a simple blog, or integrations depending on scope.',
    durationLabel: 'Timeline',
    duration:
      'Depends on project size; once scope and content are clear, you get a straightforward estimate (often a few weeks for medium-sized sites).',
    priceLabel: 'Pricing',
    priceNote:
      'Quoted after we talk—I need to understand scope to give a fair, transparent offer.',
  },
  servicesOfferingApp: {
    title: 'App build',
    details:
      'Web or mobile app (as agreed): core screens, optional sign-in, a simple admin area, and backend/API wiring where needed. Phased delivery: prototype first, then build and incremental handoff.',
    durationLabel: 'Timeline',
    duration:
      'Usually longer than a simple site; set after a requirements session and milestone breakdown.',
    priceLabel: 'Pricing',
    priceNote:
      'Quoted after we talk—depends on complexity, integrations, and ongoing maintenance needs.',
  },
  servicesRefundsLink: 'Refund basics',
  servicesWhatsappCta: 'Message on WhatsApp',
  refundsPageTitle: 'Refund basics',
  refundsPageBack: 'Back to services',
  refundsCard1Title: 'Before payment and kickoff',
  refundsCard1Body:
    'Any payment follows a written agreement on scope, milestones, and what counts as delivery. If you withdraw before work starts as defined in the contract, we follow the partial or full refund terms we agreed. Upfront costs may exclude already-incurred items (domains, third-party subscriptions) when they are truly spent.',
  refundsCard2Title: 'During delivery and after handoff',
  refundsCard2Body:
    'After work begins, refunds follow the written agreement: delivery milestones, a bounded number of revision rounds, and a final acceptance window. After final sign-off, larger changes are treated as new scope. Disputes: we try to resolve through communication first; the written agreement is what counts.',
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
  volunteerKicker: 'Giving back',
  volunteerTitle: 'Volunteer experience',
  skillsKicker: 'Skills',
  skillsTitle: 'Technical strengths',
  projectsKicker: 'Projects',
  projectsTitle: 'Selected projects',
  projectDetailClose: 'Close',
  projectDetailPrev: 'Previous',
  projectDetailNext: 'Next',
  projectDetailOpenLink: 'Open link',
  contactKicker: 'Contact',
  contactTitle: 'Let’s connect',
  contactLede: 'Email me or follow the links below.',
  contactCvLabel: 'Résumé',
  contactCvHint: 'PDF file',
  contactMailLabel: 'Email',
  contactPhoneLabel: 'Phone',
  contactWhatsappLabel: 'WhatsApp',
  footerLine: 'Made with love by **Ahmed Alharbi**',
  levelExpert: 'Strong',
  levelAdvanced: 'Solid',
  levelIntermediate: 'Familiar',
}

const byLocale: Record<Locale, Ui> = { ar, en }

export function getUi(locale: Locale): Ui {
  return byLocale[locale]
}
