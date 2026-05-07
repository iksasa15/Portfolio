import { useCallback, useEffect, useRef, useState } from 'react'
import type { ProjectEntry } from '../content'
import type { Ui } from '../locale/uiStrings'
import { renderInlineBold } from '../renderInlineBold'

export function ProjectDetailModal({
  project,
  ui,
  onClose,
}: {
  project: ProjectEntry | null
  ui: Ui
  onClose: () => void
}) {
  const [index, setIndex] = useState(0)
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef<number | null>(null)

  const gallery = project?.gallery ?? []
  const len = gallery.length

  useEffect(() => {
    setIndex(0)
  }, [project?.title])

  useEffect(() => {
    if (!project) return
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (len <= 1) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        setIndex((i) => (i + 1) % len)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setIndex((i) => (i - 1 + len) % len)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, len, onClose])

  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  const goPrev = useCallback(() => {
    if (len <= 1) return
    setIndex((i) => (i - 1 + len) % len)
  }, [len])

  const goNext = useCallback(() => {
    if (len <= 1) return
    setIndex((i) => (i + 1) % len)
  }, [len])

  if (!project || !len) return null

  const bodyText = project.detail ?? project.summary
  const showExternal =
    project.href.startsWith('http') && project.href !== '#'

  return (
    <div
      className="project-modal"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="project-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="project-modal__head">
          <h2 id="project-modal-title" className="project-modal__title">
            {renderInlineBold(project.title)}
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label={ui.projectDetailClose}
          >
            ×
          </button>
        </div>

        <div className="project-modal__body">
          <div className="project-modal__prose">
            {renderInlineBold(bodyText)}
          </div>

          <div className="project-modal__carousel-wrap">
            <div
              className="project-modal__carousel"
              onTouchStart={(e) => {
                touchStartX.current = e.changedTouches[0]?.clientX ?? null
              }}
              onTouchEnd={(e) => {
                const start = touchStartX.current
                touchStartX.current = null
                if (start == null || len <= 1) return
                const end = e.changedTouches[0]?.clientX
                if (end == null) return
                const dx = end - start
                if (dx > 50) goPrev()
                else if (dx < -50) goNext()
              }}
            >
              <img
                className="project-modal__img"
                src={gallery[index]?.src}
                alt={gallery[index]?.alt ?? ''}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-modal__nav">
              <button
                type="button"
                className="project-modal__arrow"
                onClick={goPrev}
                disabled={len <= 1}
                aria-label={ui.projectDetailPrev}
              >
                ‹
              </button>
              <span className="project-modal__counter" aria-live="polite">
                {index + 1} / {len}
              </span>
              <button
                type="button"
                className="project-modal__arrow"
                onClick={goNext}
                disabled={len <= 1}
                aria-label={ui.projectDetailNext}
              >
                ›
              </button>
            </div>
          </div>

          {showExternal ? (
            <p className="project-modal__actions">
              <a
                className="btn btn--ghost project-modal__link"
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {ui.projectDetailOpenLink}
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
