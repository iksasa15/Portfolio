import type { CSSProperties } from 'react'
import { useCountUp } from '../hooks/useCountUp'
import { BrandIcon, resolveBrandIcon } from '../brand/BrandIcon'

type StatCardProps = {
  icon: string
  value: string
  label: string
  index: number
  active: boolean
}

export function StatCard({ icon, value, label, index, active }: StatCardProps) {
  const display = useCountUp(value, active)
  const brandIcon = resolveBrandIcon(icon)
  const live = index === 0

  return (
    <li
      className={`stat-card${live ? ' stat-card--signal' : ''}${active ? ' stat-card--in' : ''}`}
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
