import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Serif } from '../../components/ui/Serif'
import { experiences } from '../../content/experiences'
import { ExperienceItem } from './ExperienceItem'

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      aria-labelledby="experiences-title"
      className="border-y border-line bg-sunken py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="experiences-title"
          title={
            <>
              Mes <Serif>expériences</Serif>
            </>
          }
          description="Des années à construire des interfaces qui servent."
        />

        <ol className="mt-12 divide-y divide-line border-y border-line sm:mt-16">
          {experiences.map((experience) => (
            <li key={experience.id}>
              <ExperienceItem experience={experience} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
