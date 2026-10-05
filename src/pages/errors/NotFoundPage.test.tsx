import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { paths } from '../../app/paths'
import { profile } from '../../content/profile'
import { NotFoundPage } from './NotFoundPage'

describe('NotFoundPage', () => {
  it('explains that the page does not exist', () => {
    render(<NotFoundPage />, { wrapper: MemoryRouter })

    expect(screen.getByText('Erreur 404')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Oops, cette page n’existe pas.',
    )
  })

  it('is titled and kept out of search engines', () => {
    render(<NotFoundPage />, { wrapper: MemoryRouter })

    expect(document.title).toBe(`Page introuvable · ${profile.name}`)
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex')
  })

  it('leads back to the home page or to the contact page', () => {
    render(<NotFoundPage />, { wrapper: MemoryRouter })

    expect(screen.getByRole('link', { name: 'Retour à l’accueil' })).toHaveAttribute(
      'href',
      paths.home,
    )
    expect(screen.getByRole('link', { name: 'Me contacter' })).toHaveAttribute(
      'href',
      paths.contact,
    )
  })
})
