import { describe, expect, it } from 'vitest'
import { formatDate } from './format-date'

describe('formatDate', () => {
  it('formats an ISO month in French', () => {
    expect(formatDate('2023-03')).toBe('mars 2023')
  })

  it('does not shift to the previous month across time zones', () => {
    expect(formatDate('2024-01')).toBe('janvier 2024')
  })

  it('returns an ISO year unchanged', () => {
    expect(formatDate('2016')).toBe('2016')
  })
})
