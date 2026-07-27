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

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Inline brand icons (Stroke 7 · Round) — avoids broken external <use> refs. */
function IconPaths({ name }: { name: BrandIconName }) {
  switch (name) {
    case 'brand-code':
      return (
        <path
          {...stroke}
          d="M34 30 16 48l18 18M62 30l18 18-18 18"
        />
      )
    case 'brand-network':
      return (
        <>
          <circle cx="26" cy="48" r="8" {...stroke} />
          <circle cx="70" cy="26" r="8" {...stroke} />
          <circle cx="70" cy="70" r="8" {...stroke} />
          <path {...stroke} d="M33 44l30-14M33 52l30 14" />
        </>
      )
    case 'brand-database':
      return (
        <>
          <ellipse cx="48" cy="26" rx="26" ry="10" {...stroke} />
          <path
            {...stroke}
            d="M22 26v44c0 5.5 11.6 10 26 10s26-4.5 26-10V26M22 48c0 5.5 11.6 10 26 10s26-4.5 26-10"
          />
        </>
      )
    case 'brand-target':
      return (
        <>
          <rect x="18" y="18" width="60" height="60" rx="12" {...stroke} />
          <path {...stroke} d="M48 6v12M48 78v12M6 48h12M78 48h12" />
          <circle cx="48" cy="48" r="9" fill="var(--accent)" stroke="none" />
        </>
      )
    case 'brand-bars':
      return (
        <>
          <path {...stroke} d="M16 72V50M36 72V38M56 72V26M76 72V54" />
          <circle cx="76" cy="42" r="6" fill="var(--accent)" stroke="none" />
        </>
      )
    case 'brand-bolt':
      return <path {...stroke} d="M56 14L28 54h16l-4 28 28-40H52z" />
    case 'brand-terminal':
      return (
        <>
          <rect x="14" y="18" width="68" height="52" rx="10" {...stroke} />
          <path {...stroke} d="M28 34l10 10-10 10M48 56h20" />
        </>
      )
    case 'brand-pin':
      return (
        <path
          {...stroke}
          d="M48 84s-30-17-30-40a17 17 0 0 1 30-11 17 17 0 0 1 30 11c0 23-30 40-30 40z"
        />
      )
    case 'brand-signal':
      return (
        <>
          <path
            {...stroke}
            d="M40 58L20 78M46 20a30 30 0 0 1 30 30M46 34a16 16 0 0 1 16 16"
          />
          <circle cx="44" cy="52" r="8" fill="var(--accent)" stroke="none" />
        </>
      )
    case 'brand-cloud':
      return (
        <>
          <path
            {...stroke}
            d="M30 40a18 18 0 0 1 36-4 16 16 0 0 1 2 32H32a15 15 0 0 1-2-28z"
          />
          <path
            d="M48 50v20M48 50l-8 8M48 50l8 8"
            fill="none"
            stroke="var(--accent)"
            strokeWidth={7}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    case 'brand-focus':
      return (
        <>
          <circle cx="48" cy="48" r="32" {...stroke} />
          <circle cx="48" cy="48" r="18" {...stroke} />
          <circle cx="48" cy="48" r="5" fill="var(--accent)" stroke="none" />
        </>
      )
    case 'brand-pulse':
      return (
        <>
          <path
            {...stroke}
            d="M14 48h14l8-20 12 40 10-28 6 8h18"
          />
          <circle cx="82" cy="48" r="5" fill="var(--accent)" stroke="none" />
        </>
      )
  }
}

export function BrandIcon({
  name,
  className = 'brand-icon',
  size = 28,
}: BrandIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      width={size}
      height={size}
      aria-hidden
      focusable="false"
    >
      <IconPaths name={name} />
    </svg>
  )
}
