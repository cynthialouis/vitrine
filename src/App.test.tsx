import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the home page inside the main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
