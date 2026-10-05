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
      expect(within(article).getByRole('heading', { level: 3 })).toHaveTextContent(experience.role)
      expect(within(article).getByText(experience.company)).toBeInTheDocument()
    })
  })

  it('lists the technologies used for each experience', () => {
    render(<ExperiencesSection />)
    const stacks = screen.getAllByRole('list', { name: 'Technologies utilisées' })

    experiences.forEach((experience, index) => {
      const stack = stacks[index]
      if (!stack) throw new Error(`Missing stack for ${experience.id}`)
      expect(within(stack).getAllByRole('listitem')).toHaveLength(experience.stack.length)
    })
  })
})
