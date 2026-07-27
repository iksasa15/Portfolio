const BRAND_ICONS = [
  'brand-code',
  'brand-network',
  'brand-database',
  'brand-target',
  'brand-bars',
  'brand-bolt',
  'brand-terminal',
  'brand-pin',
  'brand-signal',
  'brand-cloud',
  'brand-focus',
  'brand-pulse',
] as const

export type BrandIconName = (typeof BRAND_ICONS)[number]

/** Map emoji / loose labels from content → brand stroke icons. */
export function resolveBrandIcon(icon: string): BrandIconName | null {
  const raw = icon.trim()
  const lower = raw.toLowerCase()

  if (raw === '🧠' || lower.includes('ai') || lower.includes('ml'))
    return 'brand-network'
  if (raw === '💻' || lower.includes('web') || lower.includes('code'))
    return 'brand-code'
  if (raw === '📱' || lower.includes('mobile') || lower.includes('app'))
    return 'brand-signal'
  if (raw === '🎨' || lower.includes('design') || lower.includes('ui'))
    return 'brand-focus'
  if (raw === '⚙️' || lower.includes('tool') || lower.includes('devops'))
    return 'brand-terminal'
  if (raw === '🎓') return 'brand-target'
  if (raw === '🚀') return 'brand-bolt'
  if (raw === '🏆') return 'brand-bars'
  if (raw === '🤝') return 'brand-pulse'
  if (lower.includes('cloud') || lower.includes('data')) return 'brand-cloud'
  if (lower.includes('db') || lower.includes('database')) return 'brand-database'
  if (lower.includes('map') || lower.includes('location')) return 'brand-pin'

  if ((BRAND_ICONS as readonly string[]).includes(raw)) {
    return raw as BrandIconName
  }

  return null
}

type BrandIconProps = {
  name: BrandIconName
  className?: string
  size?: number
}

export function BrandIcon({
  name,
  className = 'brand-icon',
  size = 28,
}: BrandIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      aria-hidden
      focusable="false"
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}
