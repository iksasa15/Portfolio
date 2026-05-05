import { createContext } from 'react'

export type Locale = 'ar' | 'en'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export const LOCALE_STORAGE_KEY = 'portfolio-locale'
