import { useEffect, useState } from 'react'

type Options = {
  msPerChar?: number
  linePause?: number
  startDelay?: number
}

/**
 * يكتب أسطراً متعددة بالتتابع (مثل الاسم → المسمى → السطر التعريفي).
 * مع `prefers-reduced-motion: reduce` يُعرض النص كاملاً فوراً.
 */
export function useSequentialTypewriter(
  lines: readonly string[],
  options: Options = {},
) {
  const msPerChar = options.msPerChar ?? 22
  const linePause = options.linePause ?? 240
  const startDelay = options.startDelay ?? 380

  const [out, setOut] = useState<string[]>(() => lines.map(() => ''))
  const [done, setDone] = useState(false)
  const [cursorLine, setCursorLine] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || lines.length === 0) {
      setOut([...lines])
      setDone(true)
      return
    }

    setOut(lines.map(() => ''))
    setDone(false)
    setCursorLine(0)

    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const schedule = (fn: () => void, ms: number) => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
    }

    let lineIdx = 0
    let charIdx = 0

    const tick = () => {
      if (cancelled) return
      const line = lines[lineIdx]
      if (charIdx < line.length) {
        charIdx += 1
        setOut((prev) => {
          const next = [...prev]
          next[lineIdx] = line.slice(0, charIdx)
          return next
        })
        setCursorLine(lineIdx)
        schedule(tick, msPerChar)
      } else if (lineIdx < lines.length - 1) {
        lineIdx += 1
        charIdx = 0
        schedule(tick, linePause)
      } else {
        setDone(true)
      }
    }

    schedule(tick, startDelay)

    return () => {
      cancelled = true
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [lines, msPerChar, linePause, startDelay])

  return { lines: out, done, cursorLine }
}
