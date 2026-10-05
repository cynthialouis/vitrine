import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { experiences } from '../../content/experiences'
import { ExperiencesSection } from './ExperiencesSection'

describe('ExperiencesSection', () => {
  it('is exposed as a named region', () => {
    render(<ExperiencesSection />)
    expect(screen.getByRole('region', { name: 'Mes expériences' })).toBeInTheDocument()
  })

  it('renders every experience as an article titled by its role', () => {
    render(<ExperiencesSection />)
    const articles = screen.getAllByRole('article')

    expect(articles).toHaveLength(experiences.length)
    experiences.forEach((experience, index) => {
      const article = articles[index]
      if (!article) throw new Error(`Missing article for ${experience.id}`)
      expect(within(article).getByRole('heading', { level: 3, name: experience.role })).toBeInTheDocument()
    })
  })

  it('renders a stack list only for experiences that have one', () => {
    render(<ExperiencesSection />)
    const experiencesWithStack = experiences.filter(({ stack }) => stack && stack.length > 0)

    expect(screen.queryAllByRole('list', { name: 'Stack et outils' })).toHaveLength(
      experiencesWithStack.length,
    )
  })
})
