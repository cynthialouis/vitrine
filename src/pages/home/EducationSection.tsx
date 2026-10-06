import type { ReactNode } from 'react'
import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Serif } from '../../components/ui/Serif'
import { certifications, degrees } from '../../content/education'
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
          description="Un parcours construit pas à pas."
        />

        <EducationGroup id="degrees-title" title="Diplômes" className="mt-12 sm:mt-16">
          {degrees.map((item) => (
            <li key={item.id}>
              <EducationItem education={item} />
            </li>
          ))}
        </EducationGroup>

        <EducationGroup id="certifications-title" title="Certifications" className="mt-16">
          {certifications.map((item) => (
            <li key={item.id}>
              <EducationItem education={item} />
            </li>
          ))}
        </EducationGroup>
      </Container>
    </section>
  )
}

type EducationGroupProps = {
  id: string
  title: string
  className: string
  children: ReactNode
}

function EducationGroup({ id, title, className, children }: EducationGroupProps) {
  return (
    <div className={className}>
      <h3 id={id} className="text-sm font-medium tracking-widest text-ink-soft uppercase">
        {title}
      </h3>
      <ol aria-labelledby={id} className="mt-4 divide-y divide-line border-y border-line">
        {children}
      </ol>
    </div>
  )
}
