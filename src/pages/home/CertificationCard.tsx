import type { Certification } from '../../content/education'
import { formatMonth } from '../../lib/format-month'

type CertificationCardProps = {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const { name, issuer, issuedOn } = certification

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
      <span className="h-1 w-8 rounded-full bg-accent" aria-hidden="true" />
      <h4 className="mt-5 text-lg leading-snug font-medium text-balance">{name}</h4>
      <p className="mt-1 text-ink-soft">{issuer}</p>
      <p className="mt-auto pt-6 text-sm text-ink-soft">
        Obtenue en <time dateTime={issuedOn}>{formatMonth(issuedOn)}</time>
      </p>
    </article>
  )
}
