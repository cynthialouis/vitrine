import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider, type RouteObject } from 'react-router'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Layout } from './Layout'
import { RouteErrorBoundary } from './RouteErrorBoundary'

function FailingPage(): never {
  throw new Error('Render failure')
}

const failingRoutes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [{ ErrorBoundary: RouteErrorBoundary, children: [{ index: true, Component: FailingPage }] }],
  },
]

describe('RouteErrorBoundary', () => {
  beforeEach(() => {
    // React and React Router log caught render errors: expected here, so kept out of the output.
    vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('replaces a failing page with the error message while keeping the layout', async () => {
    render(<RouterProvider router={createMemoryRouter(failingRoutes)} />)

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Oops, une erreur est survenue.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
