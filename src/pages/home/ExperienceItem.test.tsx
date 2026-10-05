import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { Experience } from '../../content/experiences'
import { ExperienceItem } from './ExperienceItem'

const minimalExperience: Experience = {
  id: 'minimal',
  role: 'Role only',
  start: '2020-01',
  end: '2021-01',
}

describe('ExperienceItem', () => {
  it('renders only the role and the period when details are missing', () => {
    render(<ExperienceItem experience={minimalExperience} />)

    expect(screen.getByRole('heading', { level: 3, name: 'Role only' })).toBeInTheDocument()
    expect(screen.getByText('janvier 2020')).toBeInTheDocument()
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('renders the company and the location when provided', () => {
    render(
      <ExperienceItem
        experience={{ ...minimalExperience, company: 'Acme', location: 'Nantes' }}
      />,
    )

    expect(screen.getByText('Acme')).toBeInTheDocument()
    expect(screen.getByText('Nantes')).toBeInTheDocument()
  })

  it('renders grouped missions as a nested list', () => {
    render(
      <ExperienceItem
        experience={{
          ...minimalExperience,
          missions: ['Standalone mission', { title: 'Grouped mission', items: ['Step one', 'Step two'] }],
        }}
      />,
    )

    const [missions] = screen.getAllByRole('list')
    if (!missions) throw new Error('Missing missions list')
    const topLevelItems = within(missions).getAllByRole('listitem').filter(
      (item) => item.parentElement === missions,
    )
    expect(topLevelItems).toHaveLength(2)

    const groupedItem = topLevelItems[1]
    if (!groupedItem) throw new Error('Missing grouped mission')
    expect(groupedItem).toHaveTextContent('Grouped mission')
    expect(within(groupedItem).getAllByRole('listitem')).toHaveLength(2)
  })

  it('labels the stack list', () => {
    render(<ExperienceItem experience={{ ...minimalExperience, stack: ['Vue.js', 'Tailwind CSS'] }} />)

    const stack = screen.getByRole('list', { name: 'Stack et outils' })
    expect(within(stack).getAllByRole('listitem')).toHaveLength(2)
  })
})
