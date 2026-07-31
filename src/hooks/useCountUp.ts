import { useEffect, useRef, useState } from 'react'

function parseStatValue(raw: string): {
  prefix: string
  target: number
  decimals: number
  suffix: string
} {
  const m = raw.trim().match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)
  if (!m) return { prefix: '', target: 0, decimals: 0, suffix: raw }
  const num = m[2] ?? '0'
  const decimals = num.includes('.') ? (num.split('.')[1]?.length ?? 0) : 0
  return {
    prefix: m[1] ?? '',
    target: Number(num),
    decimals,
    suffix: m[3] ?? '',
  }
}

/** Count-up for hero stats — runs once when `active` becomes true. */
export function useCountUp(raw: string, active: boolean, durationMs = 1100) {
  const parsed = parseStatValue(raw)
  const [display, setDisplay] = useState(() =>
    active
      ? raw
      : `${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}`,
  )
  const started = useRef(false)

  useEffect(() => {
    if (!active || started.current) return
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplay(raw)
      started.current = true
      return
    }
    started.current = true
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      const value = parsed.target * eased
      setDisplay(
        `${parsed.prefix}${value.toFixed(parsed.decimals)}${parsed.suffix}`,
      )
      if (t < 1) frame = requestAnimationFrame(tick)
      else setDisplay(raw)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, durationMs, parsed.decimals, parsed.prefix, parsed.suffix, parsed.target, raw])

  return display
}
