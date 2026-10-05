import { describe, expect, it } from 'vitest'
import { getInitials } from './get-initials'

describe('getInitials', () => {
  it('returns the uppercased first letter of each part of the name', () => {
    expect(getInitials('Cynthia LOUIS')).toBe('CL')
    expect(getInitials('ada lovelace')).toBe('AL')
  })

  it('ignores extra whitespace', () => {
    expect(getInitials('  Grace   Hopper ')).toBe('GH')
  })
})
