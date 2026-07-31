import { useEffect, useState, type CSSProperties } from 'react'
import { useCountUp } from '../hooks/useCountUp'
import { BrandIcon, resolveBrandIcon } from '../brand/BrandIcon'

type StatCardProps = {
  icon: string
  value: string
  label: string
  index: number
}

/** بطاقة إحصائية — تظهر مع الهيرو مباشرة، والعدّ يبدأ بعد تأخير قصير (مو بعد اكتمال الكتابة) */
export function StatCard({ icon, value, label, index }: StatCardProps) {
  const [ready, setReady] = useState(false)
  const display = useCountUp(value, ready)
  const brandIcon = resolveBrandIcon(icon)
  const live = index === 0

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = reduced ? 0 : 520 + index * 70
    const id = window.setTimeout(() => setReady(true), delay)
    return () => window.clearTimeout(id)
  }, [index])

  return (
    <li
      className={`stat-card stat-card--in${live ? ' stat-card--signal' : ''}`}
      style={{ '--i': index } as CSSProperties}
    >
      <span className="stat-card__icon" aria-hidden>
        {brandIcon ? <BrandIcon name={brandIcon} size={28} /> : icon}
      </span>
      <span className="stat-card__value">{display}</span>
      <span className="stat-card__label">{label}</span>
    </li>
  )
}
