import { Fragment, type ReactNode } from 'react'

let boldKeySeq = 0

/** يحوّل `**نص**` إلى `<strong>` — يُستخدم في عني، المشاريع، التعليم، وغيرها. */
export function renderInlineBold(text: string): ReactNode {
  const re = /\*\*([\s\S]*?)\*\*/g
  const nodes: ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    nodes.push(<strong key={`ib-${boldKeySeq++}`}>{m[1]}</strong>)
    last = m.index + m[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes.length ? <Fragment>{nodes}</Fragment> : text
}
