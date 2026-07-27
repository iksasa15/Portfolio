type SignalOrnamentProps = {
  className?: string
}

/**
 * نمط الإشارة — زخرفة الزوايا من دليل الهوية
 * (شرطتان متزحزحتان + عقد)
 */
export function SignalOrnament({ className = 'signal-ornament' }: SignalOrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 242 108"
      width={121}
      height={54}
      aria-hidden
      focusable="false"
    >
      <rect width="110" height="20" rx="10" fill="var(--mark-bar)" />
      <circle cx="132" cy="10" r="10" fill="var(--mark-light)" />
      <rect
        x="50"
        y="44"
        width="110"
        height="20"
        rx="10"
        fill="var(--ornament-muted)"
      />
      <rect
        x="100"
        y="88"
        width="110"
        height="20"
        rx="10"
        fill="var(--ornament-muted)"
      />
      <circle cx="232" cy="98" r="10" fill="var(--mark-bar)" />
    </svg>
  )
}
