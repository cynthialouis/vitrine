import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { profile } from '../content/profile'
import { Header } from './Header'
import { paths } from './paths'

describe('Header', () => {
  it('is exposed as the banner landmark', () => {
    render(<Header />, { wrapper: MemoryRouter })
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('displays the developer name without making it a heading', () => {
    render(<Header />, { wrapper: MemoryRouter })
    expect(screen.getByRole('banner')).toHaveTextContent(profile.name)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it('links the name to the home page', () => {
    render(<Header />, { wrapper: MemoryRouter })
    expect(screen.getByRole('link', { name: profile.name })).toHaveAttribute('href', paths.home)
  })

  it('links to the contact page from the main navigation', () => {
    render(<Header />, { wrapper: MemoryRouter })
    const navigation = screen.getByRole('navigation', { name: 'Navigation principale' })
    expect(within(navigation).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      paths.contact,
    )
  })
})
