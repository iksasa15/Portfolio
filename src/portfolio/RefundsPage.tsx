import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getUi } from '../locale/uiStrings'
import { useLocale } from '../locale/useLocale'

export function RefundsPage() {
  const { locale } = useLocale()
  const ui = useMemo(() => getUi(locale), [locale])

  useEffect(() => {
    const portfolioTitle =
      locale === 'en' ? 'Ahmed Alharbi — Portfolio' : 'أحمد الحربـي — ملفي'
    document.title =
      locale === 'en'
        ? `${ui.refundsPageTitle} — Ahmed Alharbi — Portfolio`
        : `${ui.refundsPageTitle} — أحمد الحربـي — ملفي`
    return () => {
      document.title = portfolioTitle
    }
  }, [locale, ui.refundsPageTitle])

  return (
    <>
      <a className="skip-link" href="#refunds-main">
        {ui.skipLink}
      </a>
      <div className="bg-mesh" aria-hidden />
      <main id="refunds-main" className="services-page refunds-page">
        <div className="shell section services-page__inner">
          <div className="services-page__toolbar">
            <Link className="btn btn--ghost" to="/services">
              {ui.refundsPageBack}
            </Link>
          </div>
          <h1 className="section-title services-page__heading">
            {ui.refundsPageTitle}
          </h1>
          <div className="services-page__grid refunds-page__grid">
            <article className="svc-card">
              <h2 className="svc-card__title">{ui.refundsCard1Title}</h2>
              <p className="svc-card__body">{ui.refundsCard1Body}</p>
            </article>
            <article className="svc-card">
              <h2 className="svc-card__title">{ui.refundsCard2Title}</h2>
              <p className="svc-card__body">{ui.refundsCard2Body}</p>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
