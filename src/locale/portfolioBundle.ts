import {
  aboutParagraphs,
  education,
  journey,
  projects,
  site,
  skillGroups,
  stats,
} from '../content'
import type { Locale } from './localeContext'
import { enPortfolio } from './enPortfolio'

const arPortfolio = {
  site,
  stats,
  education,
  aboutParagraphs,
  journey,
  skillGroups,
  projects,
}

export type PortfolioBundle = typeof arPortfolio

export function getPortfolio(locale: Locale): PortfolioBundle {
  return locale === 'en' ? enPortfolio : arPortfolio
}
