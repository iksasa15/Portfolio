type ThemeIconProps = {
  className?: string
  size?: number
}

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** هلال — من دليل الهوية «وضع داكن» (Stroke 7 · Round + عقدة تركواز) */
export function ThemeIconDark({
  className = 'theme-toggle__icon',
  size = 20,
}: ThemeIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      width={size}
      height={size}
      aria-hidden
      focusable="false"
    >
      <path {...stroke} d="M42 14a26 26 0 1 0 40 40 30 30 0 1 1-40-40z" />
      <circle cx="70" cy="24" r="5" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

/** شمس — نفس لغة الهوية (Stroke 7 · Round + عقدة تركواز) */
export function ThemeIconLight({
  className = 'theme-toggle__icon',
  size = 20,
}: ThemeIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      width={size}
      height={size}
      aria-hidden
      focusable="false"
    >
      <circle cx="48" cy="48" r="16" {...stroke} />
      <path {...stroke} d="M48 6v12M48 78v12M6 48h12M78 48h12" />
      <circle cx="48" cy="48" r="7" fill="var(--accent)" stroke="none" />
    </svg>
  )
}
