import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Serif } from '../../components/ui/Serif'
import { certifications, education } from '../../content/education'
import { home } from '../../content/home'
import { CertificationCard } from './CertificationCard'
import { EducationItem } from './EducationItem'

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="border-t border-line bg-surface py-20 sm:py-28"
    >
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

        <section aria-labelledby="certifications-title" className="mt-16 sm:mt-20">
          <h3 id="certifications-title" className="text-3xl font-medium tracking-tight">
            Mes <Serif>certifications</Serif>
          </h3>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <li key={certification.id}>
                <CertificationCard certification={certification} />
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </section>
  )
}
