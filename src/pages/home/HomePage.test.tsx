import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { home } from '../../content/home'
import { profile } from '../../content/profile'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('sets the document title', () => {
    render(<HomePage />)
    expect(document.title).toBe(`${profile.name} · ${profile.role}`)
  })

  it('renders a single level-one heading', () => {
    render(<HomePage />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('introduces the developer in the hero section', () => {
    render(<HomePage />)
    const { before, accent, after } = home.hero.title
    const hero = screen.getByRole('region', { name: `${before} ${accent} ${after}` })
    expect(hero).toHaveTextContent(profile.name)
  })

  it('links the hero call to action to the experiences section', () => {
    render(<HomePage />)
    const link = screen.getByRole('link', { name: 'Découvrir mon parcours' })
    const target = screen.getByRole('region', { name: 'Mes expériences' })
    expect(link).toHaveAttribute('href', `#${target.id}`)
  })

  it('exposes the decorative code card through an accessible summary', () => {
    render(<HomePage />)
    const card = screen.getByRole('figure', { name: new RegExp(profile.name) })
    expect(card).toHaveAccessibleName(expect.stringContaining(profile.stack.join(', ')))
  })
})
