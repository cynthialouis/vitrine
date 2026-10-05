import { Period } from '../../components/ui/Period'
import type { Experience } from '../../content/experiences'

type ExperienceItemProps = {
  experience: Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { role, company, contract, location, start, end, summary, highlights, stack } = experience

  return (
    <article className="grid gap-x-8 gap-y-4 py-10 lg:grid-cols-12">
      <div className="lg:col-span-8 lg:col-start-5">
        <h3 className="text-2xl font-medium tracking-tight">{role}</h3>
        <p className="mt-1 font-medium text-accent-ink">{company}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-ink-soft">{summary}</p>

        <ul className="mt-5 max-w-2xl space-y-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-6 leading-relaxed text-pretty before:absolute before:top-3 before:left-0 before:h-px before:w-3 before:bg-accent"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <ul aria-label="Technologies utilisées" className="mt-6 flex flex-wrap gap-2">
          {stack.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="row-start-1 lg:col-span-4 lg:col-start-1">
        <Period start={start} end={end} />
        <p className="mt-1 text-sm text-ink-soft">
          {contract} · {location}
        </p>
      </div>
    </article>
  )
}
