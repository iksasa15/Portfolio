import { ThemeIconDark, ThemeIconLight } from '../brand/ThemeIcon'
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
  const title = isEn
    ? isDark
      ? 'Light mode'
      : 'Dark mode'
    : isDark
      ? 'مظهر فاتح'
      : 'مظهر غامق'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={ariaLabel}
      title={title}
    >
      {isDark ? <ThemeIconLight /> : <ThemeIconDark />}
    </button>
  )
}
