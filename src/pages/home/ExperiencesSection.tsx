import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Serif } from '../../components/ui/Serif'
import { experiences } from '../../content/experiences'
import { home } from '../../content/home'
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
          description={home.experiences.description}
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
