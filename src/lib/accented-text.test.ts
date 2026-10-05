import { describe, expect, it } from 'vitest'
import { toPlainText } from './accented-text'

describe('toPlainText', () => {
  it('joins every part with a single space', () => {
    expect(toPlainText({ before: 'Des interfaces', accent: 'soignées', after: 'et sobres.' })).toBe(
      'Des interfaces soignées et sobres.',
    )
  })

  it('omits the missing trailing part', () => {
    expect(toPlainText({ before: 'Développeuse web', accent: 'freelance' })).toBe(
      'Développeuse web freelance',
    )
  })
})
