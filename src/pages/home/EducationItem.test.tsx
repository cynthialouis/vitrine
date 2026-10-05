import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { Education } from '../../content/education'
import { EducationItem } from './EducationItem'

const minimalEducation: Education = {
  id: 'minimal',
  degree: 'Degree only',
  school: 'School',
  start: '2008',
  end: '2008',
}

const educationWithModules: Education = {
  ...minimalEducation,
  modules: [
    { title: 'First module', topics: ['Topic A', 'Topic B'] },
    { title: 'Second module', topics: ['Topic C'] },
  ],
}

describe('EducationItem', () => {
  it('renders the degree, the school and the period', () => {
    render(<EducationItem education={minimalEducation} />)

    expect(screen.getByRole('heading', { level: 3, name: 'Degree only' })).toBeInTheDocument()
    expect(screen.getByText('School')).toBeInTheDocument()
    expect(screen.getByText('2008')).toHaveAttribute('datetime', '2008')
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
