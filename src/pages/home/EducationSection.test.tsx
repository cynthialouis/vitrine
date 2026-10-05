import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { education } from '../../content/education'
import { EducationSection } from './EducationSection'

describe('EducationSection', () => {
  it('is exposed as a named region', () => {
    render(<EducationSection />)
    expect(screen.getByRole('region', { name: 'Mes formations' })).toBeInTheDocument()
  })

  it('renders every entry as an article titled in content order', () => {
    render(<EducationSection />)
    const articles = screen.getAllByRole('article')

    expect(articles).toHaveLength(education.length)
    education.forEach((item, index) => {
      const article = articles[index]
      if (!article) throw new Error(`Missing article for ${item.id}`)
      expect(within(article).getByRole('heading', { level: 3 })).toHaveTextContent(item.title)
      expect(within(article).getByText(item.organization)).toBeInTheDocument()
    })
  })
})
