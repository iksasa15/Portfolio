import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  ThemeContext,
  type Theme,
  type ThemeContextValue,
  type ThemePreference,
} from './themeContext'

const STORAGE_KEY = 'portfolio-theme'

const THEME_COLOR = {
  dark: '#0B0D10',
  light: '#F2F4F6',
} as const

function readStoredPreference(): ThemePreference | null {
  if (typeof window === 'undefined') return null
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'light' || v === 'dark' || v === 'system') return v
  } catch {
    /* ignore */
  }
  return null
}

function systemIsDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function getInitialPreference(): ThemePreference {
  return readStoredPreference() ?? 'system'
}

function effectiveTheme(
  preference: ThemePreference,
  systemDark: boolean,
): Theme {
  return preference === 'system'
    ? systemDark
      ? 'dark'
      : 'light'
    : preference
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] =
    useState<ThemePreference>(getInitialPreference)
  const [systemDark, setSystemDark] = useState(() =>
    typeof window !== 'undefined' ? systemIsDark() : false,
  )

  const theme = useMemo(
    () => effectiveTheme(preference, systemDark),
    [preference, systemDark],
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, preference)
    } catch {
      /* ignore */
    }
    const meta = document.getElementById(
      'theme-color-meta',
    ) as HTMLMetaElement | null
    if (meta) {
      meta.content = THEME_COLOR[theme]
    }
  }, [theme, preference])

  useEffect(() => {
    if (preference !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setSystemDark(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [preference])

  const setThemeSafe = useCallback((t: Theme) => setPreference(t), [])

  const toggleTheme = useCallback(() => {
    setPreference((p) => {
      if (p === 'system') {
        const cur = systemIsDark() ? 'dark' : 'light'
        return cur === 'dark' ? 'light' : 'dark'
      }
      return p === 'dark' ? 'light' : 'dark'
    })
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, preference, setTheme: setThemeSafe, toggleTheme }),
    [theme, preference, setThemeSafe, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}
