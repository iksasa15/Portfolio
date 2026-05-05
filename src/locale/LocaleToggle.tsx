import { useLocale } from './useLocale'

export function LocaleToggle() {
  const { locale, toggleLocale } = useLocale()
  const isEn = locale === 'en'

  return (
    <button
      type="button"
      className="locale-toggle"
      onClick={toggleLocale}
      aria-pressed={isEn}
      aria-label={
        isEn ? 'Switch interface to Arabic' : 'تبديل الواجهة إلى الإنجليزية'
      }
      title={isEn ? 'العربية' : 'English'}
    >
      <span className="locale-toggle__text">{isEn ? 'عربي' : 'EN'}</span>
    </button>
  )
}
