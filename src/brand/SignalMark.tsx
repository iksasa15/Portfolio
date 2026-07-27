import { useTheme } from '../theme/useTheme'

type SignalMarkProps = {
  className?: string
  title?: string
  size?: number
}

/**
 * رمز الإشارة من brand-package:
 * - داكن: logo-mark.svg (تركواز + أبيض)
 * - فاتح: logo-mark-on-light.svg (تركواز + ليل)
 */
export function SignalMark({
  className = 'brand__mark',
  title = 'احمد الحربي',
  size = 28,
}: SignalMarkProps) {
  const { theme } = useTheme()
  const src =
    theme === 'light'
      ? '/brand/logo-mark-on-light.svg'
      : '/brand/logo-mark.svg'

  return (
    <img
      className={className}
      src={src}
      width={size}
      height={size}
      alt=""
      title={title}
      decoding="async"
      draggable={false}
    />
  )
}
