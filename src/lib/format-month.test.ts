import { describe, expect, it } from 'vitest'
import { formatMonth } from './format-month'

describe('formatMonth', () => {
  it('formats an ISO month in French', () => {
    expect(formatMonth('2023-03')).toBe('mars 2023')
  })

  it('does not shift to the previous month across time zones', () => {
    expect(formatMonth('2024-01')).toBe('janvier 2024')
  })
})
