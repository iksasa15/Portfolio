type SectionHeadProps = {
  id?: string
  index: string
  kicker: string
  title: string
}

/** ترويسة قسم — نمط دليل الهوية: `01 · التسمية` + عنوان رئيسي */
export function SectionHead({ id, index, kicker, title }: SectionHeadProps) {
  return (
    <header className="section-head" id={id}>
      <p className="section-head__label">
        <span className="section-head__index">{index}</span>
        <span className="section-head__sep" aria-hidden>
          {' '}
          ·{' '}
        </span>
        <span>{kicker}</span>
      </p>
      <h2 className="section-head__title">{title}</h2>
      <span className="section-head__signal" aria-hidden />
    </header>
  )
}
