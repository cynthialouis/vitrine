import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { Education } from '../../content/education'
import { EducationItem } from './EducationItem'

const minimalEducation: Education = {
  id: 'minimal',
  title: 'Title only',
  organization: 'Organization',
}

const educationWithModules: Education = {
  ...minimalEducation,
  period: { start: '2015', end: '2016' },
  modules: [
    { title: 'First module', topics: ['Topic A', 'Topic B'] },
    { title: 'Second module', topics: ['Topic C'] },
  ],
}

describe('EducationItem', () => {
  it('renders the title and the organization', () => {
    render(<EducationItem education={minimalEducation} />)

    expect(screen.getByRole('heading', { level: 4, name: 'Title only' })).toBeInTheDocument()
    expect(screen.getByText('Organization')).toBeInTheDocument()
  })

  it('renders no date when the period is missing', () => {
    render(<EducationItem education={minimalEducation} />)
    expect(screen.queryByText(/\d{4}/)).not.toBeInTheDocument()
  })

  it('renders the period when provided', () => {
    render(<EducationItem education={educationWithModules} />)
    expect(screen.getByText('2015')).toHaveAttribute('datetime', '2015')
    expect(screen.getByText('2016')).toHaveAttribute('datetime', '2016')
  })

  it('renders no module list nor program toggle without modules', () => {
    render(<EducationItem education={minimalEducation} />)

    expect(screen.queryByRole('list')).not.toBeInTheDocument()
    expect(screen.queryByText('Voir le programme')).not.toBeInTheDocument()
  })

  it('lists the module titles', () => {
    render(<EducationItem education={educationWithModules} />)

    const modules = screen.getByRole('list', { name: 'Modules' })
    expect(within(modules).getAllByRole('listitem').map((item) => item.textContent)).toEqual([
      'First module',
      'Second module',
    ])
  })

  it('collapses the detailed program behind a disclosure, closed by default', () => {
    render(<EducationItem education={educationWithModules} />)

    const program = screen.getByRole('group')
    expect(program).not.toHaveAttribute('open')
    expect(within(program).getByText('Voir le programme')).toBeInTheDocument()
    expect(within(program).getByText('Topic A')).toBeInTheDocument()
    expect(within(program).getByText('Topic C')).toBeInTheDocument()
  })
})
