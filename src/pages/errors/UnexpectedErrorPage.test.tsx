import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import { paths } from '../../app/paths'
import { UnexpectedErrorPage } from './UnexpectedErrorPage'

describe('UnexpectedErrorPage', () => {
  it('explains the error and how to recover', () => {
    render(<UnexpectedErrorPage />, { wrapper: MemoryRouter })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Oops, une erreur est survenue.',
    )
    expect(
      screen.getByText('Merci de rafraîchir la page ou de retourner sur la page d’accueil.'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Retour à l’accueil' })).toHaveAttribute(
      'href',
      paths.home,
    )
  })

  it('reloads the page on demand', async () => {
    const user = userEvent.setup()
    const onReload = vi.fn()
    render(<UnexpectedErrorPage onReload={onReload} />, { wrapper: MemoryRouter })

    await user.click(screen.getByRole('button', { name: 'Rafraîchir la page' }))

    expect(onReload).toHaveBeenCalledOnce()
  })
})
