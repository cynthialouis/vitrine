import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProfilePhoto } from './ProfilePhoto'

describe('ProfilePhoto', () => {
  it('shows decorative initials when no photo is provided', () => {
    render(<ProfilePhoto name="Cynthia LOUIS" />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.getByText('CL')).toBeInTheDocument()
  })

  it('renders the photo with its alternative text and a high fetch priority', () => {
    render(
      <ProfilePhoto
        name="Cynthia LOUIS"
        photo={{ src: '/portrait.avif', alt: 'Portrait de Cynthia LOUIS', width: 800, height: 1000 }}
      />,
    )

    const image = screen.getByRole('img', { name: 'Portrait de Cynthia LOUIS' })
    expect(image).toHaveAttribute('src', '/portrait.avif')
    expect(image).toHaveAttribute('fetchpriority', 'high')
  })
})
