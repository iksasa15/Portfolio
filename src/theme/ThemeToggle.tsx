import { useLocale } from '../locale/useLocale'
import { useTheme } from './useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { locale } = useLocale()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const ariaLabel = isDark
    ? isEn
      ? 'Switch to light mode'
      : 'حوّل للوضع الفاتح'
    : isEn
      ? 'Switch to dark mode'
      : 'حوّل للوضع الغامق'
  const title = isDark ? (isEn ? 'Light mode' : 'وضع فاتح') : isEn ? 'Dark mode' : 'وضع غامق'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={ariaLabel}
      title={title}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  )
}

function IconSun() {
  return (
    <svg
      className="theme-toggle__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg
      className="theme-toggle__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
