import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('joins class names with a single space', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('ignores falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b')
  })
})
