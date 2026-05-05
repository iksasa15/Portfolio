import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { useReveal } from '../hooks/useReveal'
import type { SkillLevel } from '../content'
import { getPortfolio } from '../locale/portfolioBundle'
import { getUi } from '../locale/uiStrings'
import { LocaleToggle } from '../locale/LocaleToggle'
import { useLocale } from '../locale/useLocale'
import { resolveBrandLogoSrc } from '../theme/resolveBrandLogo'
import { ThemeToggle } from '../theme/ThemeToggle'
import { useTheme } from '../theme/useTheme'
import { ProjectTag } from './ProjectTag'

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
  const { locale } = useLocale()
  const ui = useMemo(() => getUi(locale), [locale])
  const p = useMemo(() => getPortfolio(locale), [locale])

  const levelLabel = (level: SkillLevel) => {
    switch (level) {
      case 'expert':
        return ui.levelExpert
      case 'advanced':
        return ui.levelAdvanced
      default:
        return ui.levelIntermediate
    }
  }

  return (
    <>
      <a className="skip-link" href="#intro">
        {ui.skipLink}
      </a>

      <div className="bg-mesh" aria-hidden />

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="#intro">
            <span className="brand__mark" aria-hidden>
              {p.site.name.replace(/\s/g, '').charAt(0)}
            </span>
            <span className="brand__text">{p.site.fullName}</span>
          </a>
          <div className="site-header__tray">
            <nav className="nav" aria-label={ui.navAria}>
              <ul>
                {ui.nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header-tools">
              <LocaleToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="intro" className="hero shell">
          <p className="hero__hello">
            <span className="wave" aria-hidden>
              👋
            </span>{' '}
            {ui.heroHello}
          </p>
          <h1 className="hero__name">{p.site.name}</h1>
          <p className="hero__title">{p.site.title}</p>
          <p className="hero__tagline">{p.site.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              {ui.heroCtaWork}
            </a>
            <a className="btn btn--ghost" href="#contact">
              {ui.heroCtaContact}
            </a>
            <a
              className="btn btn--ghost"
              href={p.site.cv.href}
              download={p.site.cv.downloadFileName}
            >
              {p.site.cv.label}
            </a>
          </div>
          <ul className="stat-row" aria-label={ui.statRowAria}>
            {p.stats.map((s) => (
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
            {ui.aboutKicker}
          </p>
          <h2 className="section-title">{ui.aboutTitle}</h2>
          <div className="prose">
            {p.aboutParagraphs.map((para, i) => (
              <p key={`about-${i}`}>{para}</p>
            ))}
          </div>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <p className="kicker" id="education">
            {ui.educationKicker}
          </p>
          <h2 className="section-title">{ui.educationTitle}</h2>
          <div className="edu-grid">
            {p.education.map((item) => (
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
                <p
                  className={
                    item.meta
                      ? 'edu-card__meta'
                      : 'edu-card__meta edu-card__meta--placeholder'
                  }
                  aria-hidden={item.meta ? undefined : true}
                >
                  {item.meta ?? '\u00a0'}
                </p>
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
            {ui.journeyKicker}
          </p>
          <h2 className="section-title">{ui.journeyTitle}</h2>
          <ol className="timeline">
            {p.journey.map((item) => (
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
            {ui.skillsKicker}
          </p>
          <h2 className="section-title">{ui.skillsTitle}</h2>
          <div className="skill-grid">
            {p.skillGroups.map((group) => (
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
            {ui.projectsKicker}
          </p>
          <h2 className="section-title">{ui.projectsTitle}</h2>
          <p className="lede">{ui.projectsLede}</p>
          <div className="project-grid">
            {p.projects.map((proj) => (
              <article key={proj.title} className="project-card">
                <div className="project-card__visual" aria-hidden />
                <span className="project-card__badge">{proj.badge}</span>
                <h3 className="project-card__title">
                  <a
                    href={proj.href}
                    {...(proj.href.startsWith('http')
                      ? {
                          target: '_blank',
                          rel: 'noreferrer noopener',
                        }
                      : {})}
                  >
                    {proj.title}
                  </a>
                </h3>
                <p className="project-card__summary">{proj.summary}</p>
                <ul className="tag-row">
                  {proj.tags.map((t) => (
                    <ProjectTag key={t} label={t} />
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
          <p className="kicker">{ui.contactKicker}</p>
          <h2 className="section-title">{ui.contactTitle}</h2>
          <p className="lede">{ui.contactLede}</p>
          <div className="contact-panel">
            <a
              className="contact-cv"
              href={p.site.cv.href}
              download={p.site.cv.downloadFileName}
            >
              <span className="contact-cv__label">{ui.contactCvLabel}</span>
              <span className="contact-cv__value">{p.site.cv.label}</span>
              <span className="contact-cv__hint">{ui.contactCvHint}</span>
            </a>
            <a className="contact-mail" href={`mailto:${p.site.email}`}>
              <span className="contact-mail__label">{ui.contactMailLabel}</span>
              <span className="contact-mail__value">{p.site.email}</span>
            </a>
            <ul className="social-list">
              {p.site.social.map((s) => (
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
          © {new Date().getFullYear()} {p.site.name}. {ui.footerLine}
        </p>
      </footer>
    </>
  )
}
