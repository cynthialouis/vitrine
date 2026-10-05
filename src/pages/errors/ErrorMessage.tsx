import type { ReactNode } from 'react'
import { Container } from '../../components/ui/Container'
import { profile } from '../../content/profile'

type ErrorMessageProps = {
  documentTitle: string
  eyebrow: string
  title: ReactNode
  description?: string
  actions: ReactNode
}

export function ErrorMessage({ documentTitle, eyebrow, title, description, actions }: ErrorMessageProps) {
  return (
    <>
      <title>{`${documentTitle} · ${profile.name}`}</title>
      <meta name="robots" content="noindex" />

      <section aria-labelledby="error-title" className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

        <Container className="relative py-24 sm:py-32">
          <p className="text-sm font-medium tracking-widest text-accent-ink uppercase">{eyebrow}</p>
          <h1
            id="error-title"
            className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl xl:text-6xl"
          >
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-3">{actions}</div>
        </Container>
      </section>
    </>
  )
}
