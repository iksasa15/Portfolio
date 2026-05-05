import { createContext } from 'react'

export type Theme = 'light' | 'dark'

export type ThemePreference = 'system' | Theme

export type ThemeContextValue = {
  theme: Theme
  preference: ThemePreference
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
