import { Period } from '../../components/ui/Period'
import type { Education } from '../../content/education'

type EducationItemProps = {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  const { degree, school, location, start, end, description } = education

  return (
    <article className="grid gap-x-8 gap-y-4 py-10 lg:grid-cols-12">
      <div className="lg:col-span-8 lg:col-start-5">
        <h3 className="text-2xl font-medium tracking-tight text-balance">{degree}</h3>
        <p className="mt-1 font-medium text-accent-ink">{school}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-ink-soft">{description}</p>
      </div>

      <div className="row-start-1 lg:col-span-4 lg:col-start-1">
        <Period start={start} end={end} />
        <p className="mt-1 text-sm text-ink-soft">{location}</p>
      </div>
    </article>
  )
}
