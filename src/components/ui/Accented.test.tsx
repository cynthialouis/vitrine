import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Accented } from './Accented'

describe('Accented', () => {
  it('emphasizes the accent and keeps the sentence readable', () => {
    const { container } = render(
      <p>
        <Accented text={{ before: 'Des interfaces', accent: 'soignées', after: 'et sobres.' }} />
      </p>,
    )

    expect(screen.getByText('soignées').tagName).toBe('EM')
    expect(container).toHaveTextContent('Des interfaces soignées et sobres.')
  })
})
