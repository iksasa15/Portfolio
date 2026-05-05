/** Last vertical scroll direction for scroll-reveal entrance */
let lastScrollY = 0
let scrollDirection: 'down' | 'up' = 'down'

export function getScrollDirection(): 'down' | 'up' {
  return scrollDirection
}

export function subscribeScrollDirection(): () => void {
  if (typeof window === 'undefined') return () => {}
  lastScrollY = window.scrollY
  const onScroll = () => {
    const y = window.scrollY
    if (y > lastScrollY) scrollDirection = 'down'
    else if (y < lastScrollY) scrollDirection = 'up'
    lastScrollY = y
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}
