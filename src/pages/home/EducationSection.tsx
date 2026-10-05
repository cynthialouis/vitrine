import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Serif } from '../../components/ui/Serif'
import { education } from '../../content/education'
import { home } from '../../content/home'
import { EducationItem } from './EducationItem'

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="education-title"
          title={
            <>
              Mes <Serif>formations</Serif>
            </>
          }
          description={home.education.description}
        />

        <ol className="mt-12 divide-y divide-line border-y border-line sm:mt-16">
          {education.map((item) => (
            <li key={item.id}>
              <EducationItem education={item} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
