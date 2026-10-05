import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { profile } from '../content/profile'
import { Footer } from './Footer'
import { paths } from './paths'

describe('Footer', () => {
  it('is exposed as the contentinfo landmark', () => {
    render(<Footer />, { wrapper: MemoryRouter })
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('shows the copyright with the current year and the developer name', () => {
    render(<Footer />, { wrapper: MemoryRouter })
    expect(
      screen.getByText(`© ${new Date().getFullYear()} ${profile.name}`),
    ).toBeInTheDocument()
  })

  it('credits the technologies used to build the site', () => {
    render(<Footer />, { wrapper: MemoryRouter })
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Conçu et développé with love avec React, TypeScript et Tailwind CSS',
    )
  })

  it('links back to the top of the page', () => {
    render(<Footer />, { wrapper: MemoryRouter })
    expect(screen.getByRole('link', { name: 'Retour en haut' })).toHaveAttribute('href', '#top')
  })

  it('links to the contact page', () => {
    render(<Footer />, { wrapper: MemoryRouter })
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', paths.contact)
  })
})
