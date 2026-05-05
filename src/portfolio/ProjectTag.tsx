type Brand = 'flutter' | 'firebase' | 'openai'

function detectBrand(tag: string): Brand | null {
  const s = tag.trim().toLowerCase()
  if (s === 'flutter') return 'flutter'
  if (s === 'firebase') return 'firebase'
  if (s.includes('chatgpt') || s.includes('gpt')) return 'openai'
  return null
}

/** إيموجي ملوّن (يظهر بخط Apple Color Emoji على آيفون/ماك) */
const brandEmoji: Record<Brand, string> = {
  flutter: '📱',
  firebase: '🔥',
  openai: '🤖',
}

export function ProjectTag({ label }: { label: string }) {
  const brand = detectBrand(label)
  if (!brand) {
    return <li className="tag-row__item tag-row__item--plain">{label}</li>
  }
  return (
    <li className="tag-row__item tag-row__item--plain">
      <span className="tag-row__emoji" aria-hidden>
        {brandEmoji[brand]}
      </span>
      {label}
    </li>
  )
}
