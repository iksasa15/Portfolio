import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../content'
import type { ServiceOfferingCard } from '../locale/uiStrings'
import { getUi } from '../locale/uiStrings'
import { useLocale } from '../locale/useLocale'

function ServiceCard({ card }: { card: ServiceOfferingCard }) {
  return (
    <article className="svc-card">
      <h2 className="svc-card__title">{card.title}</h2>
      <p className="svc-card__details">{card.details}</p>
      <dl className="svc-card__facts">
        <div className="svc-card__fact">
          <dt>{card.durationLabel}</dt>
          <dd>{card.duration}</dd>
        </div>
        <div className="svc-card__fact">
          <dt>{card.priceLabel}</dt>
          <dd>{card.priceNote}</dd>
        </div>
      </dl>
    </article>
  )
}

export function ServicesPage() {
  const { locale } = useLocale()
  const ui = useMemo(() => getUi(locale), [locale])

  useEffect(() => {
    const portfolioTitle =
      locale === 'en' ? 'Ahmed Alharbi — Portfolio' : 'أحمد الحربـي — ملفي'
    document.title =
      locale === 'en'
        ? 'Services — Ahmed Alharbi — Portfolio'
        : 'خدماتي — أحمد الحربـي — ملفي'
    return () => {
      document.title = portfolioTitle
    }
  }, [locale])

  return (
    <>
      <a className="skip-link" href="#services-main">
        {ui.skipLink}
      </a>
      <div className="bg-mesh" aria-hidden />
      <main id="services-main" className="services-page">
        <div className="shell section services-page__inner">
          <div className="services-page__toolbar">
            <Link className="btn btn--ghost" to="/">
              {ui.servicesPageBack}
            </Link>
          </div>
          <h1 className="section-title services-page__heading">
            {ui.navDrawerServicesTitle}
          </h1>
          <div className="services-page__grid">
            <ServiceCard card={ui.servicesOfferingWeb} />
            <ServiceCard card={ui.servicesOfferingApp} />
          </div>
          <div className="services-page__actions">
            <Link className="btn btn--ghost" to="/refunds">
              {ui.servicesRefundsLink}
            </Link>
            <a
              className="btn btn--primary contact-whatsapp services-page__whatsapp"
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="contact-whatsapp__icon"
                width="20"
                height="20"
                aria-hidden
              >
                <use href="/icons.svg#portfolio-whatsapp-icon" />
              </svg>
              {ui.servicesWhatsappCta}
            </a>
            <Link className="btn btn--ghost" to="/#contact">
              {ui.navDrawerServicesCta}
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
