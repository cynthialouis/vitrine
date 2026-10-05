import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '../content/profile'
import { Header } from './Header'

describe('Header', () => {
  it('is exposed as the banner landmark', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('displays the developer name without making it a heading', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toHaveTextContent(profile.name)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})
