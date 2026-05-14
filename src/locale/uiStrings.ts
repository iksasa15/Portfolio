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
  servicesRefundsLink: 'ساسيات الاسترجاع',
  servicesWhatsappCta: 'تواصل واتساب',
  refundsPageTitle: 'ساسيات الاسترجاع',
  refundsPageBack: 'رجوع للخدمات',
  refundsPagePreamble:
    'تُعدُّ الوثيقة التالية إطاراً عامًّا يُبيِّن أسس التعامل في شأن الاسترجاع والانسحاب والقبول، ويُراعى أن أي اتفاق مكتوب مُوقَّع أو مُوافَق عليه صراحةً بين الطرفين يَسبق هذه الوثيقة عند التعارض، ويُستَدْرَك به ما لم يُذكر هنا.',
  refundsSections: [
    {
      title: 'المادة الأولى: النطاق والتعريفات',
      paragraphs: [
        'تسري أحكام هذه الوثيقة على خدمات تطوير المواقع الإلكترونية أو التطبيقات أو ما يُماثلها من أعمال تقنية يتم الاتفاق عليها بين الطرفين، ويُقصد بالعميل: الطرف الطالب للخدمة، وبمقدِّم الخدمة: من ينفِّذ العمل المُتفَق عليه.',
        'يُقصد بالاتفاق المكتوب: عرض الأسعار أو الملحقات أو الرسائل الإلكترونية أو المحادثات المُثبَّتة التي تُبيِّن النطاق والتسليمات والأجور والمراحل بشكل يُمكن الرجوع إليها، على أن يُفضَّل دوماً توثيق الالتزامات في وثيقة واحدة واضحة.',
        'يُقصد بالتسليم: تقديم المخرجات المتفق عليها وفق الصيغة المحددة (مثل: رابط تجريبي، مستودع برمجي، ملفات قابلة للتنزيل)، ويُقصد بالقبول: إقرار العميل صراحةً باستلام المخرجات أو سلوك يُفهم منه القبول وفق ما يُبيِّنه الاتفاق.',
      ],
    },
    {
      title: 'المادة الثانية: الأجور والدفعات وارتباطها بالمراحل',
      paragraphs: [
        'لا تُستحقُّ أية دفعة إلا بعد بيان مبررها في الاتفاق المكتوب، ويُستحسن ربط الدفعات بمراحل تسليم جزئية يُعرَف فيها المنتج الوسيط أو النتيجة القابلة للمراجعة في كل مرحلة.',
        'إذا تطلّب العمل شراء تراخيص أو نطاقات أو اشتراكات لدى أطراف ثالثة، فتُسدَّد تلك التكاليف وفق ما يتفق عليه، ولا تُعدُّ من الأجور المستردة إذا كانت قد صُرفت فعلاً باسم العميل أو للمشروع ولا يمكن إلغاؤها وفق سياسات المزوّد الخارجي.',
        'أي تأخير في سداد الدفعة المستحقة عند إتمام مرحلة يمنح مقدِّم الخدمة الحقّ في تعليق العمل بعد إشعار كتابي مع مهلة معقولة، دون إخلال بحقوق الطرفين الناشئة عن الاتفاق.',
      ],
    },
    {
      title: 'المادة الثالثة: الانسحاب والاسترجاع قبل مباشرة التنفيذ وأثناءه',
      paragraphs: [
        'إذا انسحب العميل قبل أن يبدأ مقدِّم الخدمة التنفيذ الفعلي للمرحلة الأولى وفق تعريف البدء في الاتفاق، فتُعالَج أي مبالغ مدفوعة وفق نسب أو شروط يُحددها الاتفاق المكتوب؛ فإن لم يُحدد، فَيُراعى ما تم إنجازه من تخطيط أو جاهزية لا رجعة فيها.',
        'إذا انسحب العميل بعد البدء في تنفيذ مرحلة، فلا يستحق استرجاع كامل المبلغ إلا إذا نص الاتفاق على ذلك صراحةً؛ وإلا فَيُقتطع من المبلغ ما يقابل العمل المنجز والتكاليف المثبتة، على أن يُقدَّم تفصيل معقول للعميل عند الطلب.',
        'لا يُعدُّ تأخر العميل في تزويد المحتوى أو الموافقات أو بيانات الاختبار مبرِّراً لإلزام مقدِّم الخدمة بتمديد المهل دون اتفاق، ولا يُنشئ ذلك وحده حقاً في الاسترجاع الكامل ما لم يُنص على خلاف ذلك.',
      ],
    },
    {
      title: 'المادة الرابعة: التسليم والقبول النهائي والمراجعة',
      paragraphs: [
        'يُسلَّم العمل للمراجعة وفق المدد والجولات المنصوص عليها؛ وإذا انقضت المهلة دون اعتراض مُبيَّن كتابياً وفق آلية الاعتراض في الاتفاق، يُفهم من ذلك قبولاً للتسليم المرحلي أو النهائي حسب ما ورد.',
        'بعد الإعلان عن التسليم النهائي وفق معايير القبول المتفق عليها، يُعدُّ العمل مقبولاً إذا لم يُبدِ العميل خلال المهلة المحددة اعتراضاً مُسبَّباً يتعلق بخللٍ يخالف المتفق عليه، ولا يشمل ذلك طلبات تحسين ذوقي أو توسيع نطاق غير مذكور في الاتفاق.',
      ],
    },
    {
      title: 'المادة الخامسة: حالات لا يجوز فيها الاسترجاع أو تُقتصر المعالجة',
      paragraphs: [
        'لا يجوز استرجاع أجور العمل الذي تم تسليمه ومقبوله نهائياً وفق المادة الرابعة، إلا إذا ثبت خللٌ جوهريٌ يخالف الاتفاق ولم يُعالَج خلال مهلة معقولة بعد إشعار كتابي.',
        'لا تُستردُّ خدمات أداءت بالكامل لصالح العميل ولا رجعة فيها (مثل: استشارات مُنفَّذة، جلسات تدريب مُكتملة، تراخيص فُعِّلت نهائياً)، وكذلك التعديلات التي وافق عليها العميل صراحةً بعد عرضها.',
        'يُستثنى من الاسترجاع ما نشأ عن إخلال العميل بالتزاماته الجوهرية، مثل إساءة استخدام المخرجات أو مخالفة شروط الاستخدام المُعلنة، إذا وُجدت.',
      ],
    },
    {
      title: 'المادة السادسة: نسب الاسترجاع الإرشادية بحسب آخر مرحلة',
      paragraphs: [
        'تُحسب النسب التالية من **صافي المبالغ المدفوعة** المخصّصة للمشروع، بعد طرح ما لا يُسترد من التكاليف الخارجية وفق المادة الثانية، عند انسحاب العميل وطلب الاسترجاع، **ما لم ينص الاتفاق المكتوب على نسب أو آلية مختلفة**.',
        '**قبل مباشرة التنفيذ الفعلي للمرحلة الأولى** (وفق تعريفها في الاتفاق): يُسترد **٨٠٪** (ثمانون في المائة) من ذلك الصافي.',
        '**بعد إتمام المرحلة الأولى واعتمادها، وقبل اعتماد المرحلة الثانية** (أو قبل استحقاق دفعة المرحلة الثانية—أيهما يسبق وفق الاتفاق): يُسترد **٥٠٪** (خمسون في المائة) من صافي المبلغ المتبقي بعد احتساب أجور المرحلة الأولى المستحقة.',
        '**بعد إتمام المرحلة الثانية واعتمادها، وقبل اعتماد التسليم النهائي أو المرحلة الختامية**: يُسترد **٣٠٪** (ثلاثون في المائة) من صافي المبلغ المتبقي بعد احتساب أجور المرحلتين الأولى والثانية.',
        '**بعد إتمام مرحلة ثالثة أو ما يعادلها من التقدّم المتفق عليه، وقبل القبول النهائي للمشروع**: يُسترد **١٥٪** (خمسة عشر في المائة) فقط من صافي المبالغ المخصّصة لتسليمات لاحقة لم يُستحقُّ أجرُها بعد.',
        '**بعد القبول النهائي أو اعتبار التسليم مقبولاً وفق المادة الرابعة**: لا تُطبَّق نسب هذه المادة؛ ويُرجع إلى المادة الخامسة والسابعة.',
      ],
    },
    {
      title: 'المادة السابعة: تسوية المنازعات والإشعارات',
      paragraphs: [
        'يُرجّح حلُّ أي خلاف بالتشاور والمراسلات الكتابية، ويُفضَّل تحديد قناة رسمية للإشعارات (البريد الإلكتروني أو نظام تذاكر) ومدة الردِّ المتوقعة.',
        'في حال تعذّر التوصل إلى حل، يُراعى ما يُنص عليه في الاتفاق من اختصاص قضائي أو تحكيم؛ فإن لم يُنص، فَيُطبَّق النظام المعمول به في المملكة العربية السعودية فيما لا يتعارض مع الاتفاق المكتوب.',
        'تُحدَّث هذه الوثيقة من وقت لآخر؛ وتُراعى نسخة التاريخ الأحدث على الموقع، مع بقاء الاتفاقات المُبرمة سارية على وفق نصوصها وقت الإبرام ما لم يُتفق على خلاف ذلك.',
      ],
    },
  ],
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
  refundsPageTitle: 'Refund policy',
  refundsPageBack: 'Back to services',
  refundsPagePreamble:
    'The following document sets out a general framework for refunds, withdrawal, and acceptance. Any written agreement expressly approved by both parties shall prevail in the event of inconsistency with this document, and the agreement shall supplement any matter not addressed herein.',
  refundsSections: [
    {
      title: 'Article I — Scope and definitions',
      paragraphs: [
        'These provisions apply to website development, application development, and comparable technical services agreed between the parties. “Client” means the party requesting the service; “service provider” means the party performing the agreed work.',
        '“Written agreement” means a quotation, addendum, email, or other durable record that clearly states scope, deliverables, fees, and milestones. Commitments should preferably be consolidated in a single written instrument.',
        '“Delivery” means furnishing agreed outputs in the agreed form (for example: a staging URL, a source repository, or downloadable files). “Acceptance” means the client’s express acknowledgement of receipt or conduct that constitutes acceptance as defined in the agreement.',
      ],
    },
    {
      title: 'Article II — Fees, payments, and milestone linkage',
      paragraphs: [
        'No payment shall become due unless its basis is stated in the written agreement. Payments should, where practicable, be tied to partial deliverables so that each stage produces a reviewable outcome.',
        'If the work requires licences, domains, or subscriptions from third parties, those costs shall be handled as agreed. Amounts already paid to third parties on behalf of the project are generally non-refundable if they cannot be reversed under the external provider’s policies.',
        'If a milestone-linked instalment is late, the service provider may suspend work after written notice and a reasonable cure period, without prejudice to rights arising under the agreement.',
      ],
    },
    {
      title: 'Article III — Withdrawal and refunds before and during performance',
      paragraphs: [
        'If the client withdraws before the service provider begins actual performance of the first stage as defined in the agreement, any amounts paid shall be handled according to percentages or conditions stated in writing; if silent, non-recoverable planning or preparatory work already performed shall be taken into account.',
        'If the client withdraws after performance has begun, a full refund applies only if the agreement expressly provides for it; otherwise, the amount shall be reduced by the value of completed work and substantiated costs, with a reasonable breakdown available on request.',
        'Delays by the client in supplying content, approvals, or test data do not, by themselves, oblige unlimited extensions unless agreed, nor do they automatically entitle the client to a full refund unless the agreement states otherwise.',
      ],
    },
    {
      title: 'Article IV — Delivery, review, and final acceptance',
      paragraphs: [
        'Work shall be submitted for review according to agreed timelines and revision rounds. If the review period elapses without a written objection following the agreement’s objection procedure, the relevant deliverable shall be deemed accepted as applicable.',
        'After final delivery against agreed acceptance criteria, the deliverable shall be deemed accepted if the client does not raise a substantiated objection within the agreed window concerning a defect that violates the agreement. Cosmetic preferences or scope expansion not covered by the agreement are excluded.',
      ],
    },
    {
      title: 'Article V — Non-refundable or limited-recourse situations',
      paragraphs: [
        'Fees for work that has been delivered and finally accepted under Article IV are not refundable, except where a material breach of the agreement is proven and not remedied within a reasonable period after written notice.',
        'Services fully rendered that are inherently non-reversible (for example: completed consultations, completed training sessions, or permanently activated licences), and changes expressly approved by the client after demonstration, are not subject to refund.',
        'Matters arising from the client’s material breach, including misuse of deliverables or violation of published acceptable-use terms where applicable, are excluded from refund remedies.',
      ],
    },
    {
      title: 'Article VI — Indicative refund percentages by last completed stage',
      paragraphs: [
        'The percentages below apply to the **net amounts paid** for the project after deducting non-refundable third-party costs under Article II, when the client withdraws and requests a refund, **unless the written agreement specifies different percentages or a different method**.',
        '**Before actual performance of Stage 1 begins** (as defined in the agreement): **80%** of that net amount is refundable.',
        '**After Stage 1 is completed and accepted, and before Stage 2 is accepted** (or before the Stage 2 instalment becomes due—whichever comes first under the agreement): **50%** of the remaining net balance is refundable after deducting fees earned for Stage 1.',
        '**After Stage 2 is completed and accepted, and before final acceptance or the closing milestone**: **30%** of the remaining net balance is refundable after deducting fees earned for Stages 1 and 2.',
        '**After a third stage or equivalent agreed progress, and before final project acceptance**: **15%** only of the net amount allocated to later deliverables whose fees have not yet accrued.',
        '**After final acceptance or deemed acceptance under Article IV**: these percentages do not apply; refer to Articles V and VII.',
      ],
    },
    {
      title: 'Article VII — Dispute resolution and notices',
      paragraphs: [
        'Disputes should first be addressed through consultation and written correspondence. The parties should designate a formal notice channel (email or ticketing) and reasonable response times.',
        'If no resolution is reached, any forum selection or arbitration clause in the agreement shall control; if none exists, the laws of the Kingdom of Saudi Arabia shall apply to the extent they do not conflict with the written agreement.',
        'This document may be updated from time to time; the latest version published on the site should be observed, while agreements executed earlier remain governed by their text at execution unless otherwise agreed.',
      ],
    },
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
