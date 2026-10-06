import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { certifications, degrees } from '../../content/education'
import { EducationSection } from './EducationSection'

describe('EducationSection', () => {
  it('is exposed as a named region', () => {
    render(<EducationSection />)
    expect(screen.getByRole('region', { name: 'Mes formations' })).toBeInTheDocument()
  })

  it.each([
    { group: 'Diplômes', entries: degrees },
    { group: 'Certifications', entries: certifications },
  ])('lists the $group under their own heading, in content order', ({ group, entries }) => {
    render(<EducationSection />)

    expect(screen.getByRole('heading', { level: 3, name: group })).toBeInTheDocument()

    const articles = within(screen.getByRole('list', { name: group })).getAllByRole('article')
    expect(articles).toHaveLength(entries.length)
    entries.forEach((item, index) => {
      const article = articles[index]
      if (!article) throw new Error(`Missing article for ${item.id}`)
      expect(within(article).getByRole('heading', { level: 4 })).toHaveTextContent(item.title)
      expect(within(article).getByText(item.organization)).toBeInTheDocument()
    })
  })
})
