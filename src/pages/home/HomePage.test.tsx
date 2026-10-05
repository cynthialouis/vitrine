import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { home } from '../../content/home'
import { profile } from '../../content/profile'
import { toPlainText } from '../../lib/accented-text'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('sets the document title', () => {
    render(<HomePage />)
    expect(document.title).toBe(`${profile.name} · ${toPlainText(profile.role)}`)
  })

  it('renders a single level-one heading', () => {
    render(<HomePage />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('introduces the developer with her name, role and pitch', () => {
    render(<HomePage />)
    const hero = screen.getByRole('region', { name: profile.name })

    expect(within(hero).getByRole('heading', { level: 1 })).toHaveTextContent(profile.name)
    expect(hero).toHaveTextContent(toPlainText(profile.role))
    expect(hero).toHaveTextContent(toPlainText(home.hero.description))
  })

  it('does not expose the role as a section heading', () => {
    render(<HomePage />)
    expect(
      screen.queryByRole('heading', { name: toPlainText(profile.role) }),
    ).not.toBeInTheDocument()
  })

  it('uses the hero description as meta description', () => {
    render(<HomePage />)
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      toPlainText(home.hero.description),
    )
  })

  it('links the hero call to action to the experiences section', () => {
    render(<HomePage />)
    const link = screen.getByRole('link', { name: 'Découvrir mon parcours' })
    const target = screen.getByRole('region', { name: 'Mes expériences' })
    expect(link).toHaveAttribute('href', `#${target.id}`)
  })

  it('links the secondary call to action to the education section', () => {
    render(<HomePage />)
    const link = screen.getByRole('link', { name: 'Voir mes formations' })
    const target = screen.getByRole('region', { name: 'Mes formations' })
    expect(link).toHaveAttribute('href', `#${target.id}`)
  })
})
