import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  LocaleContext,
  LOCALE_STORAGE_KEY,
  type Locale,
} from './localeContext'

function readStoredLocale(): Locale | null {
  try {
    const v = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (v === 'en' || v === 'ar') return v
  } catch {
    /* ignore */
  }
  return null
}

function getInitialLocale(): Locale {
  return readStoredLocale() ?? 'ar'
}

function applyDocumentLocale(locale: Locale) {
  const root = document.documentElement
  if (locale === 'en') {
    root.lang = 'en'
    root.dir = 'ltr'
    document.title = 'Ahmed Alharbi — Portfolio'
  } else {
    root.lang = 'ar'
    root.dir = 'rtl'
    document.title = 'أحمد الحربـي — ملفي'
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    applyDocumentLocale(next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'ar' ? 'en' : 'ar')
  }, [locale, setLocale])

  useEffect(() => {
    applyDocumentLocale(locale)
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}
