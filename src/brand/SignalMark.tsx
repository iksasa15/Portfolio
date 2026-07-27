type SignalMarkProps = {
  className?: string
  title?: string
}

/** Approved mark 1c — الإشارة (two offset bars + node). */
export function SignalMark({ className = 'brand__mark', title }: SignalMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      width={28}
      height={28}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <rect
        x="16"
        y="30"
        width="44"
        height="12"
        rx="6"
        fill="var(--mark-bar)"
      />
      <rect
        x="36"
        y="54"
        width="44"
        height="12"
        rx="6"
        fill="var(--mark-light)"
      />
      <circle cx="74" cy="36" r="7" fill="var(--mark-light)" />
    </svg>
  )
}
