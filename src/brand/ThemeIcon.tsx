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

/** قمر — من brand-package/svg/icons-sheet (Stroke 7 · Round) */
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
      <path
        {...stroke}
        d="M62 16a22 22 0 0 0-22 22c0 3 .6 5.8 1.6 8.4L16 72v8h12l4-8h8l4-8h8l3-6a22 22 0 1 0 7-42z"
      />
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
