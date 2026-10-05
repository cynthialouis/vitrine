import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Period } from './Period'

describe('Period', () => {
  it('renders both bounds as machine-readable dates', () => {
    render(<Period start="2020-09" end="2023-02" />)
    expect(screen.getByText('septembre 2020')).toHaveAttribute('datetime', '2020-09')
    expect(screen.getByText('février 2023')).toHaveAttribute('datetime', '2023-02')
  })

  it('labels an ongoing period as current', () => {
    render(<Period start="2023-03" end={null} />)
    expect(screen.getByText(/aujourd’hui/)).toBeInTheDocument()
  })
})
