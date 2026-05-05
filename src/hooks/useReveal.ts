import { useEffect, useRef, useState } from 'react'
import { getScrollDirection } from '../scrollDirection'

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)
  const [enterFromUp, setEnterFromUp] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setEnterFromUp(getScrollDirection() === 'up')
          setVisible(true)
          obs.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -6% 0px',
        threshold: 0.08,
        ...options,
      },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, visible, enterFromUp }
}
