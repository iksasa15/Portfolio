import type { BrandLogo } from '../content'
import type { Theme } from './themeContext'

/** في الوضع الليلي يُفضّل `srcDark` إن وُجد (مثل شعار كاوست الأبيض). */
export function resolveBrandLogoSrc(logo: BrandLogo, theme: Theme): string {
  if (theme === 'dark' && logo.srcDark) return logo.srcDark
  return logo.src
}
