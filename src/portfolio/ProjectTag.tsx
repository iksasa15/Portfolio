function emojiForTag(label: string): string | null {
  const raw = label.trim()
  const lower = raw.toLowerCase()

  if (lower === 'flutter') return '📱'
  if (lower === 'firebase') return '🔥'
  if (lower.includes('chatgpt') || lower.includes('gpt')) return '🤖'

  if (lower === 'computer vision' || raw === 'رؤية حاسوبية') return '👁️'
  if (lower === 'nlp') return '💬'
  if (lower === 'accessibility' || raw === 'إمكانية الوصول') return '♿'

  if (lower === 'azure') return '☁️'

  if (lower === 'saas') return '🏢'
  if (lower === 'analytics' || raw === 'تحليلات') return '📊'
  if (lower === 'cloud' || raw === 'سحابة') return '☁️'

  if (lower.includes('yolo')) return '🎯'
  if (lower === 'edge ai' || raw === 'حافة') return '⚡'

  if (lower === 'archive' || raw === 'أرشفة') return '📚'
  if (lower === 'heritage' || raw === 'تراث') return '🏛️'
  if (lower === 'web' || raw === 'ويب') return '🌐'

  if (lower === 'routing' || raw === 'توجيه') return '🛣️'
  if (lower === 'optimization' || raw === 'تحسين') return '📈'

  if (lower === 'react') return '⚛️'
  if (lower === 'typescript') return '📘'
  if (lower === 'vite') return '⚡'
  if (lower.includes('next.js') || lower === 'next') return '▲'
  if (lower === 'i18n') return '🌍'
  if (lower === 'seo') return '🔍'
  if (lower === 'pwa') return '📲'
  if (lower === 'a11y') return '♿'

  return null
}

export function ProjectTag({ label }: { label: string }) {
  const emoji = emojiForTag(label)
  if (!emoji) {
    return <li className="tag-row__item tag-row__item--plain">{label}</li>
  }
  return (
    <li className="tag-row__item tag-row__item--plain">
      <span className="tag-row__emoji" aria-hidden>
        {emoji}
      </span>
      {label}
    </li>
  )
}
