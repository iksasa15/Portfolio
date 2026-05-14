import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { renderInlineBold } from '../renderInlineBold'
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
          <p className="refunds-page__preamble">
            {renderInlineBold(ui.refundsPagePreamble)}
          </p>
          <div className="refunds-page__sections">
            {ui.refundsSections.map((section, i) => (
              <article key={`refund-sec-${i}`} className="svc-card refunds-page__card">
                <h2 className="svc-card__title">{section.title}</h2>
                <div className="refunds-page__card-body">
                  {section.paragraphs.map((para, j) => (
                    <p key={`refund-sec-${i}-p-${j}`} className="svc-card__body">
                      {renderInlineBold(para)}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
