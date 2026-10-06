import { Period } from '../../components/ui/Period'
import { ArrowDownIcon } from '../../components/ui/icons/ArrowDownIcon'
import type { Education } from '../../content/education'

type EducationItemProps = {
  education: Education
}

const bulletClassName =
  'relative pl-6 leading-relaxed text-pretty before:absolute before:top-3 before:left-0 before:h-px before:w-3 before:bg-accent'

export function EducationItem({ education }: EducationItemProps) {
  const { title, organization, location, period, modules } = education

  return (
    <article className="grid gap-x-8 gap-y-4 py-6 lg:grid-cols-12">
      <div className="lg:col-span-8 lg:col-start-5">
        <h4 className="text-2xl font-medium tracking-tight text-balance">{title}</h4>
        <p className="mt-1 font-medium text-accent-ink">{organization}</p>

        {modules && modules.length > 0 && (
          <>
            <ul aria-label="Modules" className="mt-5 max-w-2xl space-y-2">
              {modules.map(({ title: moduleTitle }) => (
                <li key={moduleTitle} className={bulletClassName}>
                  {moduleTitle}
                </li>
              ))}
            </ul>

            <details className="group mt-6 max-w-2xl">
              <summary className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-ink">
                <span className="group-open:hidden">Voir le programme</span>
                <span className="hidden group-open:inline">Masquer le programme</span>
                <ArrowDownIcon className="size-3.5 motion-safe:transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-6 space-y-6">
                {modules.map(({ title: moduleTitle, topics }) => (
                  <div key={moduleTitle}>
                    <p className="font-medium">{moduleTitle}</p>
                    <ul className="mt-2 space-y-1.5 text-ink-soft">
                      {topics.map((topic) => (
                        <li key={topic} className={bulletClassName}>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </>
        )}
      </div>

      {(period || location) && (
        <div className="row-start-1 lg:col-span-4 lg:col-start-1">
          {period && <Period start={period.start} end={period.end} />}
          {location && <p className="mt-1 text-sm text-ink-soft">{location}</p>}
        </div>
      )}
    </article>
  )
}
