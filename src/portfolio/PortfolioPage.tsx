import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSequentialTypewriter } from '../hooks/useSequentialTypewriter'
import { useReveal } from '../hooks/useReveal'
import { subscribeScrollDirection } from '../scrollDirection'
import type { ProjectEntry, SkillLevel } from '../content'
import { getPortfolio } from '../locale/portfolioBundle'
import { getUi } from '../locale/uiStrings'
import { LocaleToggle } from '../locale/LocaleToggle'
import { useLocale } from '../locale/useLocale'
import {
  brandLogoMonochromeDark,
  resolveBrandLogoSrc,
} from '../theme/resolveBrandLogo'
import { ThemeToggle } from '../theme/ThemeToggle'
import { useTheme } from '../theme/useTheme'
import { BrandIcon, resolveBrandIcon } from '../brand/BrandIcon'
import { SignalMark } from '../brand/SignalMark'
import { ProjectDetailModal } from './ProjectDetailModal'
import { ProjectTag } from './ProjectTag'
import { ScrollProgress } from './ScrollProgress'
import { SectionHead } from './SectionHead'
import { StatCard } from './StatCard'
import { renderInlineBold } from '../renderInlineBold'

function RevealSection({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  const { ref, visible, enterFromUp } = useReveal<HTMLElement>()
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal${enterFromUp ? ' reveal--from-up' : ''}${visible ? ' reveal--in' : ''} ${className}`.trim()}
    >
      {children}
    </section>
  )
}

const NAV_DRAWER_BP = 900

export function PortfolioPage() {
  const { theme } = useTheme()
  const { locale } = useLocale()
  const location = useLocation()
  const ui = useMemo(() => getUi(locale), [locale])
  const p = useMemo(() => getPortfolio(locale), [locale])
  const [navOpen, setNavOpen] = useState(false)
  const [projectDetail, setProjectDetail] = useState<ProjectEntry | null>(
    null,
  )

  useEffect(() => subscribeScrollDirection(), [])

  const closeNav = useCallback(() => setNavOpen(false), [])

  useEffect(() => {
    if (!navOpen) return
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') closeNav()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navOpen, closeNav])

  useEffect(() => {
    if (!navOpen) return
    const onResize = () => {
      if (window.innerWidth > NAV_DRAWER_BP) closeNav()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [navOpen, closeNav])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  useLayoutEffect(() => {
    if (location.hash !== '#contact') return
    const el = document.getElementById('contact')
    if (!el) return
    el.scrollIntoView({ block: 'start' })
  }, [location.pathname, location.hash])

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

  const heroTypingLines = useMemo(
    () => [p.site.name, p.site.title, p.site.tagline],
    [p.site.name, p.site.title, p.site.tagline],
  )
  const heroTyping = useSequentialTypewriter(heroTypingLines, {
    msPerChar: 22,
    linePause: 260,
    startDelay: 420,
  })

  const brandSplit = useMemo(() => {
    const s = p.site.fullName.trim()
    const m = /\s+/.exec(s)
    if (!m || m.index === 0) return { first: s, rest: '' as const }
    return {
      first: s.slice(0, m.index),
      rest: s.slice(m.index + m[0].length).trim(),
    }
  }, [p.site.fullName])

  return (
    <>
      <a className="skip-link" href="#intro">
        {ui.skipLink}
      </a>

      <div className="bg-mesh" aria-hidden />
      <ScrollProgress />

      {navOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label={ui.navMenuClose}
          onClick={closeNav}
        />
      ) : null}

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="#intro">
            <SignalMark className="brand__mark brand__mark--pulse" />
            <span className="brand__text">
              <span className="brand__given">{brandSplit.first}</span>
              {brandSplit.rest ? (
                <span className="brand__family">{brandSplit.rest}</span>
              ) : null}
            </span>
          </a>
          <div className="site-header__tray">
            <div className="header-tools">
              <button
                type="button"
                className="nav-toggle"
                aria-expanded={navOpen}
                aria-controls="site-nav"
                onClick={() => setNavOpen((v) => !v)}
                aria-label={navOpen ? ui.navMenuClose : ui.navMenuOpen}
              >
                <span className="nav-toggle__bar" aria-hidden />
                <span className="nav-toggle__bar" aria-hidden />
                <span className="nav-toggle__bar" aria-hidden />
              </button>
              <LocaleToggle />
              <ThemeToggle />
            </div>
            <nav
              id="site-nav"
              className={`nav${navOpen ? ' nav--open' : ''}`}
              aria-label={ui.navAria}
            >
              <ul>
                {ui.nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} onClick={closeNav}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div
                className="nav-drawer-services"
                role="region"
                aria-labelledby="nav-drawer-services-heading"
              >
                <Link
                  id="nav-drawer-services-heading"
                  className="btn btn--primary nav-drawer-services__heading-btn"
                  to="/services"
                  onClick={closeNav}
                >
                  {ui.navDrawerServicesTitle}
                </Link>
                <p className="nav-drawer-services__blurb">
                  {ui.navDrawerServicesBlurb}
                </p>
                <Link
                  className="nav-drawer-services__cta"
                  to="/#contact"
                  onClick={closeNav}
                >
                  {ui.navDrawerServicesCta}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="intro" className="hero shell">
          <p className="hero__hello hero-intro-enter">
            <span className="wave" aria-hidden>
              👋
            </span>{' '}
            {ui.heroHello}
          </p>
          <h1 className="hero__name">
            {renderInlineBold(heroTyping.lines[0] ?? '')}
            {!heroTyping.done && heroTyping.cursorLine === 0 ? (
              <span className="type-cursor" aria-hidden>
                |
              </span>
            ) : null}
          </h1>
          <p className="hero__title">
            {renderInlineBold(heroTyping.lines[1] ?? '')}
            {!heroTyping.done && heroTyping.cursorLine === 1 ? (
              <span className="type-cursor" aria-hidden>
                |
              </span>
            ) : null}
          </p>
          <p className="hero__tagline">
            {renderInlineBold(heroTyping.lines[2] ?? '')}
            {!heroTyping.done && heroTyping.cursorLine === 2 ? (
              <span className="type-cursor" aria-hidden>
                |
              </span>
            ) : null}
          </p>
          <div className="hero__actions hero-intro-enter hero-intro-enter--d1">
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
          <ul
            className="stat-row hero-intro-enter hero-intro-enter--d2"
            aria-label={ui.statRowAria}
          >
            {p.stats.map((s, i) => (
              <StatCard
                key={s.label}
                icon={s.icon}
                value={s.value}
                label={s.label}
                index={i}
              />
            ))}
          </ul>
        </section>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <SectionHead
            id="about"
            index="01"
            kicker={ui.aboutKicker}
            title={ui.aboutTitle}
          />
          <div className="prose">
            {p.aboutParagraphs.map((para, i) => (
              <p key={`about-${i}`}>{renderInlineBold(para)}</p>
            ))}
          </div>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <SectionHead
            id="education"
            index="02"
            kicker={ui.educationKicker}
            title={ui.educationTitle}
          />
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
                      className={
                        'edu-card__logo' +
                        (brandLogoMonochromeDark(item.logo, theme)
                          ? ' brand-logo--mono-dark'
                          : '')
                      }
                      src={resolveBrandLogoSrc(item.logo, theme)}
                      alt={item.logo.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                <span className="edu-card__range">{item.range}</span>
                <h3 className="edu-card__title">
                  {renderInlineBold(item.title)}
                </h3>
                {item.org ? (
                  <p className="edu-card__org">{renderInlineBold(item.org)}</p>
                ) : null}
                <p
                  className={
                    item.meta
                      ? 'edu-card__meta'
                      : 'edu-card__meta edu-card__meta--placeholder'
                  }
                  aria-hidden={item.meta ? undefined : true}
                >
                  {item.meta
                    ? renderInlineBold(item.meta)
                    : '\u00a0'}
                </p>
                {item.highlights?.length ? (
                  <ul className="edu-card__list">
                    {item.highlights.map((line, i) => (
                      <li key={i}>{renderInlineBold(line)}</li>
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
          <SectionHead
            id="journey"
            index="03"
            kicker={ui.journeyKicker}
            title={ui.journeyTitle}
          />
          <ol className="timeline">
            {p.journey.map((item) => (
              <li key={`${item.range}-${item.org}`} className="timeline__item">
                <span className="timeline__range">{item.range}</span>
                <div className="timeline__body">
                  {item.logo ? (
                    <div className="timeline__logo-wrap">
                      <img
                        key={`${theme}-${resolveBrandLogoSrc(item.logo, theme)}`}
                        className={
                          'timeline__logo' +
                          (brandLogoMonochromeDark(item.logo, theme)
                            ? ' brand-logo--mono-dark'
                            : '')
                        }
                        src={resolveBrandLogoSrc(item.logo, theme)}
                        alt={item.logo.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : null}
                  <h3 className="timeline__role">
                    {renderInlineBold(item.role)}
                  </h3>
                  <p className="timeline__org">{renderInlineBold(item.org)}</p>
                  <p className="timeline__summary">
                    {renderInlineBold(item.summary)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <SectionHead
            id="volunteering"
            index="04"
            kicker={ui.volunteerKicker}
            title={ui.volunteerTitle}
          />
          <ol className="timeline timeline--volunteer">
            {p.volunteering.map((item) => (
              <li
                key={`${item.range}-${item.role}-${item.org}`}
                className="timeline__item"
              >
                <span className="timeline__range">{item.range}</span>
                <div className="timeline__body">
                  {item.logo ? (
                    <div className="timeline__logo-wrap">
                      <img
                        key={`${theme}-${resolveBrandLogoSrc(item.logo, theme)}`}
                        className={
                          'timeline__logo' +
                          (brandLogoMonochromeDark(item.logo, theme)
                            ? ' brand-logo--mono-dark'
                            : '')
                        }
                        src={resolveBrandLogoSrc(item.logo, theme)}
                        alt={item.logo.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : null}
                  <h3 className="timeline__role">
                    {renderInlineBold(item.role)}
                  </h3>
                  <p className="timeline__org">{renderInlineBold(item.org)}</p>
                  <p className="timeline__summary">
                    {renderInlineBold(item.summary)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <SectionHead
            id="skills"
            index="05"
            kicker={ui.skillsKicker}
            title={ui.skillsTitle}
          />
          <div className="skill-grid">
            {p.skillGroups.map((group) => {
              const brandIcon = resolveBrandIcon(group.icon)
              return (
              <article key={group.title} className="skill-card">
                <header className="skill-card__head">
                  <span className="skill-card__icon" aria-hidden>
                    {brandIcon ? (
                      <BrandIcon name={brandIcon} size={26} />
                    ) : (
                      group.icon
                    )}
                  </span>
                  <h3>{renderInlineBold(group.title)}</h3>
                </header>
                <ul className="skill-list">
                  {group.skills.map((sk) => (
                    <li key={sk.name}>
                      <span className="skill-list__name">
                        {renderInlineBold(sk.name)}
                      </span>
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
              )
            })}
          </div>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section">
          <SectionHead
            id="projects"
            index="06"
            kicker={ui.projectsKicker}
            title={ui.projectsTitle}
          />
          <div className="project-grid">
            {p.projects.map((proj) => {
              const hasGallery = Boolean(proj.gallery?.length)
              return (
                <article
                  key={proj.title}
                  className={
                    'project-card' + (hasGallery ? ' project-card--detail' : '')
                  }
                  {...(hasGallery
                    ? {
                        role: 'button' as const,
                        tabIndex: 0,
                        onClick: () => setProjectDetail(proj),
                        onKeyDown: (e: ReactKeyboardEvent) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setProjectDetail(proj)
                          }
                        },
                      }
                    : {})}
                >
                  <div
                    className={
                      'project-card__visual' +
                      (proj.coverSrc ? ' project-card__visual--cover' : '')
                    }
                    style={
                      proj.coverSrc
                        ? {
                            backgroundImage: `url("${proj.coverSrc}")`,
                          }
                        : undefined
                    }
                    aria-hidden
                  />
                  <span className="project-card__badge">
                    {renderInlineBold(proj.badge)}
                  </span>
                  <h3 className="project-card__title">
                    {hasGallery ? (
                      <span className="project-card__title-text">
                        {renderInlineBold(proj.title)}
                      </span>
                    ) : (
                      <a
                        href={proj.href}
                        {...(proj.href.startsWith('http')
                          ? {
                              target: '_blank',
                              rel: 'noreferrer noopener',
                            }
                          : {})}
                      >
                        {renderInlineBold(proj.title)}
                      </a>
                    )}
                  </h3>
                  <p className="project-card__summary">
                    {renderInlineBold(proj.summary)}
                  </p>
                  <ul className="tag-row">
                    {proj.tags.map((t) => (
                      <ProjectTag key={t} label={t} />
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </RevealSection>

        <div className="shell">
          <div className="rule" aria-hidden />
        </div>

        <RevealSection className="shell section section--contact" id="contact">
          <SectionHead
            index="07"
            kicker={ui.contactKicker}
            title={ui.contactTitle}
          />
          <p className="lede">{renderInlineBold(ui.contactLede)}</p>
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
            <div className="contact-stack">
              <a className="contact-mail" href={`mailto:${p.site.email}`}>
                <span className="contact-mail__label">{ui.contactMailLabel}</span>
                <span className="contact-mail__value">{p.site.email}</span>
              </a>
              <a
                className="contact-mail"
                href={`tel:${p.site.phone.tel}`}
              >
                <span className="contact-mail__label">
                  {ui.contactPhoneLabel}
                </span>
                <span className="contact-mail__value" dir="ltr">
                  {p.site.phone.display}
                </span>
              </a>
              <a
                className="btn btn--ghost contact-whatsapp"
                href={p.site.whatsapp.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className="contact-whatsapp__icon"
                  width={22}
                  height={22}
                  aria-hidden
                >
                  <use href="/icons.svg#portfolio-whatsapp-icon" />
                </svg>
                {ui.contactWhatsappLabel}
              </a>
            </div>
            <ul className="social-list">
              {p.site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener">
                    <svg
                      className="social-list__icon"
                      width={32}
                      height={32}
                      aria-hidden
                    >
                      <use href={`/icons.svg#${s.iconId}`} />
                    </svg>
                    <span className="social-list__text">
                      <span className="social-list__label">{s.label}</span>
                      <span className="social-list__handle">{s.handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>
      </main>

      <footer className="site-footer shell">
        <SignalMark className="site-footer__mark" />
        <p>
          © {new Date().getFullYear()}. {renderInlineBold(ui.footerLine)}
        </p>
      </footer>

      {projectDetail ? (
        <ProjectDetailModal
          project={projectDetail}
          ui={ui}
          onClose={() => setProjectDetail(null)}
        />
      ) : null}
    </>
  )
}
