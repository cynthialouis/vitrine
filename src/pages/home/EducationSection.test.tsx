import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { certifications, education } from '../../content/education'
import { formatMonth } from '../../lib/format-month'
import { EducationSection } from './EducationSection'

describe('EducationSection', () => {
  it('is exposed as a named region', () => {
    render(<EducationSection />)
    expect(screen.getByRole('region', { name: 'Mes formations' })).toBeInTheDocument()
  })

  it('renders every degree as a level-three heading', () => {
    render(<EducationSection />)
    education.forEach((item) => {
      expect(screen.getByRole('heading', { level: 3, name: item.degree })).toBeInTheDocument()
    })
  })

  it('renders certifications in a nested sub-section', () => {
    render(<EducationSection />)
    const educationRegion = screen.getByRole('region', { name: 'Mes formations' })
    const certificationsRegion = within(educationRegion).getByRole('region', {
      name: 'Mes certifications',
    })

    expect(within(certificationsRegion).getAllByRole('heading', { level: 4 })).toHaveLength(
      certifications.length,
    )
  })

  it('shows the issuer and the machine-readable date of each certification', () => {
    render(<EducationSection />)
    const certificationsRegion = screen.getByRole('region', { name: 'Mes certifications' })
    const cards = within(certificationsRegion).getAllByRole('article')

    certifications.forEach((certification, index) => {
      const card = cards[index]
      if (!card) throw new Error(`Missing card for ${certification.id}`)

      expect(within(card).getByText(certification.issuer)).toBeInTheDocument()
      expect(within(card).getByText(formatMonth(certification.issuedOn))).toHaveAttribute(
        'datetime',
        certification.issuedOn,
      )
    })
  })
})
