import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { profile } from './content/profile'

describe('App', () => {
  it('renders the home page through the browser router', async () => {
    render(<App />)
    expect(await screen.findByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
  })
})
