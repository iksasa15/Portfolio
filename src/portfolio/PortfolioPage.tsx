import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import { resolveBrandLogoSrc } from '../theme/resolveBrandLogo'
import { ThemeToggle } from '../theme/ThemeToggle'
import { useTheme } from '../theme/useTheme'
import {
  aboutParagraphs,
  education,
  journey,
  projects,
  site,
  skillGroups,
  stats,
  type SkillLevel,
} from '../content'

const nav = [
  { id: 'intro', label: 'المقدمة' },
  { id: 'about', label: 'نبذة' },
  { id: 'education', label: 'التعليم' },
  { id: 'journey', label: 'المسيرة' },
  { id: 'skills', label: 'المهارات' },
  { id: 'projects', label: 'المشاريع' },
  { id: 'contact', label: 'تواصل' },
]

function levelLabel(level: SkillLevel): string {
  switch (level) {
    case 'expert':
      return 'خبير'
    case 'advanced':
      return 'متقدم'
    default:
      return 'متوسط'
  }
}

function RevealSection({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  const { ref, visible } = useReveal<HTMLElement>()
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${visible ? 'reveal--in' : ''} ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export function PortfolioPage() {
  const { theme } = useTheme()

  return (
    <>
      <a className="skip-link" href="#intro">
        تخطي إلى المحتوى
      </a>

      <div className="bg-mesh" aria-hidden />

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="#intro">
            <span className="brand__mark" aria-hidden>
              {site.name.replace(/\s/g, '').charAt(0)}
            </span>
            <span className="brand__text">{site.fullName}</span>
          </a>
          <div className="site-header__tray">
            <nav className="nav" aria-label="أقسام الصفحة">
              <ul>
                {nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section id="intro" className="hero shell">
          <p className="hero__hello">
            <span className="wave" aria-hidden>
              👋
            </span>{' '}
            مرحباً، أنا
          </p>
          <h1 className="hero__name">{site.name}</h1>
          <p className="hero__title">{site.title}</p>
          <p className="hero__tagline">{site.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              أعمال مختارة
            </a>
            <a className="btn btn--ghost" href="#contact">
              تواصل
            </a>
            <a
              className="btn btn--ghost"
              href={site.cv.href}
              download={site.cv.downloadFileName}
            >
              {site.cv.label}
            </a>
          </div>
          <ul className="stat-row" aria-label="أرقام سريعة">
            {stats.map((s) => (
              <li key={s.label} className="stat-card">
                <span className="stat-card__icon" aria-hidden>
                  {s.icon}
                </span>
                <span className="stat-card__value">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <p className="kicker" id="about">
            عنّي
          </p>
          <h2 className="section-title">قصة مختصرة</h2>
          <div className="prose">
            {aboutParagraphs.map((p, i) => (
              <p key={`about-${i}`}>{p}</p>
            ))}
          </div>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <p className="kicker" id="education">
            التعليم
          </p>
          <h2 className="section-title">مؤهلات وتدريب</h2>
          <p className="lede">
            درجة الجامعة وزمالة كاوست ومعسكر طويق — كما وردت في السيرة الذاتية.
          </p>
          <div className="edu-grid">
            {education.map((item) => (
              <article
                key={`${item.range}-${item.title}`}
                className="edu-card"
              >
                {item.logo ? (
                  <div className="edu-card__logo-wrap">
                    <img
                      key={`${theme}-${resolveBrandLogoSrc(item.logo, theme)}`}
                      className="edu-card__logo"
                      src={resolveBrandLogoSrc(item.logo, theme)}
                      alt={item.logo.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                <span className="edu-card__range">{item.range}</span>
                <h3 className="edu-card__title">{item.title}</h3>
                {item.org ? (
                  <p className="edu-card__org">{item.org}</p>
                ) : null}
                {item.meta ? (
                  <p className="edu-card__meta">{item.meta}</p>
                ) : null}
                {item.highlights?.length ? (
                  <ul className="edu-card__list">
                    {item.highlights.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <p className="kicker" id="journey">
            المسيرة
          </p>
          <h2 className="section-title">محطات في الطريق</h2>
          <ol className="timeline">
            {journey.map((item) => (
              <li key={item.range} className="timeline__item">
                <span className="timeline__range">{item.range}</span>
                <div className="timeline__body">
                  {item.logo ? (
                    <div className="timeline__logo-wrap">
                      <img
                        key={`${theme}-${resolveBrandLogoSrc(item.logo, theme)}`}
                        className="timeline__logo"
                        src={resolveBrandLogoSrc(item.logo, theme)}
                        alt={item.logo.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : null}
                  <h3 className="timeline__role">{item.role}</h3>
                  <p className="timeline__org">{item.org}</p>
                </div>
              </li>
            ))}
          </ol>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <p className="kicker" id="skills">
            المهارات
          </p>
          <h2 className="section-title">خريطة خبرات</h2>
          <p className="lede">
            مجموعات مهارات مع مستوى تقريبي — مستوحى من فكرة «شجرة المهارات»
            بعرض أوضح للقراءة.
          </p>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <header className="skill-card__head">
                  <span className="skill-card__icon" aria-hidden>
                    {group.icon}
                  </span>
                  <h3>{group.title}</h3>
                </header>
                <ul className="skill-list">
                  {group.skills.map((sk) => (
                    <li key={sk.name}>
                      <span className="skill-list__name">{sk.name}</span>
                      <span
                        className={`skill-pill skill-pill--${sk.level}`}
                        title={levelLabel(sk.level)}
                      >
                        <span className="skill-pill__dots" aria-hidden>
                          <span />
                          <span />
                          <span />
                        </span>
                        {levelLabel(sk.level)}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <p className="kicker" id="projects">
            المشاريع
          </p>
          <h2 className="section-title">مشاريع مميزة</h2>
          <p className="lede">
            بطاقات مختصرة مع وسوم تقنية — سريعة القراءة على الجوال والشاشات
            العريضة.
          </p>
          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.title} className="project-card">
                <div className="project-card__visual" aria-hidden />
                <span className="project-card__badge">{p.badge}</span>
                <h3 className="project-card__title">
                  <a href={p.href}>{p.title}</a>
                </h3>
                <p className="project-card__summary">{p.summary}</p>
                <ul className="tag-row">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section section--contact" id="contact">
          <p className="kicker">تواصل</p>
          <h2 className="section-title">خلّينا على تواصل</h2>
          <p className="lede">
            يمكنك مراسلتي مباشرة أو متابعة أعمالي على المنصات التالية.
          </p>
          <div className="contact-panel">
            <a
              className="contact-cv"
              href={site.cv.href}
              download={site.cv.downloadFileName}
            >
              <span className="contact-cv__label">سيرة ذاتية</span>
              <span className="contact-cv__value">{site.cv.label}</span>
              <span className="contact-cv__hint">ملف PDF</span>
            </a>
            <a className="contact-mail" href={`mailto:${site.email}`}>
              <span className="contact-mail__label">بريد</span>
              <span className="contact-mail__value">{site.email}</span>
            </a>
            <ul className="social-list">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener">
                    <span className="social-list__label">{s.label}</span>
                    <span className="social-list__handle">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>
      </main>

      <footer className="site-footer shell">
        <p>
          © {new Date().getFullYear()} {site.name}. صُمِّم بدمج تجربة تحريرية
          هادئة مع طاقة بصرية خفيفة.
        </p>
      </footer>
    </>
  )
}
