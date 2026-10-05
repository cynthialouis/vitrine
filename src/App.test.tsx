import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the banner before the main landmark', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    const main = screen.getByRole('main')

    expect(banner.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('renders the home page inside the main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
