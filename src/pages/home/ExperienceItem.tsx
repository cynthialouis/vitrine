import { Period } from '../../components/ui/Period'
import type { Experience, Mission } from '../../content/experiences'

type ExperienceItemProps = {
  experience: Experience
}

const bulletClassName =
  'relative pl-6 leading-relaxed text-pretty before:absolute before:top-3 before:left-0 before:h-px before:w-3 before:bg-accent'

function missionKey(mission: Mission): string {
  return typeof mission === 'string' ? mission : mission.title
}

function MissionContent({ mission }: { mission: Mission }) {
  if (typeof mission === 'string') {
    return mission
  }

  return (
    <>
      {mission.title}
      <ul className="mt-2 space-y-1.5 text-ink-soft">
        {mission.items.map((item) => (
          <li key={item} className={bulletClassName}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { role, company, location, start, end, missions, stack } = experience

  return (
    <article className="grid gap-x-8 gap-y-4 py-10 lg:grid-cols-12">
      <div className="lg:col-span-8 lg:col-start-5">
        <h3 className="text-2xl font-medium tracking-tight text-balance">{role}</h3>
        {company && <p className="mt-1 font-medium text-accent-ink">{company}</p>}

        {missions && missions.length > 0 && (
          <ul className="mt-5 max-w-2xl space-y-2">
            {missions.map((mission) => (
              <li key={missionKey(mission)} className={bulletClassName}>
                <MissionContent mission={mission} />
              </li>
            ))}
          </ul>
        )}

        {stack && stack.length > 0 && (
          <ul aria-label="Stack et outils" className="mt-6 flex flex-wrap gap-2">
            {stack.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft"
              >
                {tool}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="row-start-1 lg:col-span-4 lg:col-start-1">
        <Period start={start} end={end} />
        {location && <p className="mt-1 text-sm text-ink-soft">{location}</p>}
      </div>
    </article>
  )
}
