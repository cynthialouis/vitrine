import type { ReactNode } from 'react'

type SectionHeadingProps = {
  id: string
  title: ReactNode
  description: string
}

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-4xl font-medium tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-soft">{description}</p>
    </div>
  )
}
