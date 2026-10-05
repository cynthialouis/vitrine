import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, MemoryRouter, RouterProvider, type RouteObject } from 'react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Layout } from '../../app/Layout'
import { paths } from '../../app/paths'
import { UnexpectedErrorPage } from './UnexpectedErrorPage'

function FailingPage(): never {
  throw new Error('Render failure')
}

const failingRoutes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [{ ErrorBoundary: UnexpectedErrorPage, children: [{ index: true, Component: FailingPage }] }],
  },
]

describe('UnexpectedErrorPage', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

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

  it('replaces a failing page while keeping the layout', async () => {
    // React and React Router log caught render errors: expected here, so kept out of the output.
    vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    render(<RouterProvider router={createMemoryRouter(failingRoutes)} />)

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Oops, une erreur est survenue.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
