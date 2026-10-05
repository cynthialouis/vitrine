import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { paths } from '../../app/paths'
import { profile } from '../../content/profile'
import { HomePage } from './HomePage'

const heroDescription = 'Je conçois des interfaces web soignées et faciles à maintenir.'

describe('HomePage', () => {
  it('sets the document title', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    expect(document.title).toBe(`${profile.name} · ${profile.role}`)
  })

  it('renders a single level-one heading', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('introduces the developer with her name, role and pitch', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    const hero = screen.getByRole('region', { name: profile.name })

    expect(within(hero).getByRole('heading', { level: 1 })).toHaveTextContent(profile.name)
    expect(hero).toHaveTextContent(profile.role)
    expect(hero).toHaveTextContent(heroDescription)
  })

  it('does not expose the role as a section heading', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    expect(
      screen.queryByRole('heading', { name: profile.role }),
    ).not.toBeInTheDocument()
  })

  it('uses the hero description as meta description', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      heroDescription,
    )
  })

  it('links the hero call to action to the experiences section', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    const link = screen.getByRole('link', { name: 'Découvrir mon parcours' })
    const target = screen.getByRole('region', { name: 'Mes expériences' })
    expect(link).toHaveAttribute('href', `#${target.id}`)
  })

  it('links the secondary call to action to the education section', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    const link = screen.getByRole('link', { name: 'Voir mes formations' })
    const target = screen.getByRole('region', { name: 'Mes formations' })
    expect(link).toHaveAttribute('href', `#${target.id}`)
  })

  it('ends with a call to action leading to the contact page', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    const section = screen.getByRole('region', { name: 'Un projet en tête\u00a0?' })

    expect(section).toHaveTextContent('Racontez-moi votre besoin et je vous réponds rapidement.')
    expect(within(section).getByRole('link', { name: 'Me contacter' })).toHaveAttribute(
      'href',
      paths.contact,
    )
  })
})
