import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '../../content/profile'
import { ContactPage } from './ContactPage'

describe('ContactPage', () => {
  it('sets the document title', () => {
    render(<ContactPage />)
    expect(document.title).toBe(`Contact · ${profile.name}`)
  })

  it('introduces the page with a single level-one heading', () => {
    render(<ContactPage />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contactez-moi')
    expect(screen.getByText('Un premier contact suffit pour démarrer.')).toBeInTheDocument()
  })

  it('offers the email address as an alternative to the form', () => {
    render(<ContactPage />)

    expect(screen.getByText('Vous préférez l’email ?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute(
      'href',
      `mailto:${profile.email}`,
    )
  })

  it('renders the contact form', () => {
    render(<ContactPage />)
    expect(screen.getByRole('button', { name: 'Envoyer le message' })).toBeInTheDocument()
  })
})
