import type { RouteObject } from 'react-router'
import { NotFoundPage } from '../pages/errors/NotFoundPage'
import { UnexpectedErrorPage } from '../pages/errors/UnexpectedErrorPage'
import { HomePage } from '../pages/home/HomePage'
import { Layout } from './Layout'
import { paths } from './paths'
import { RootErrorBoundary } from './RootErrorBoundary'

export const routes: RouteObject[] = [
  {
    path: paths.home,
    Component: Layout,
    ErrorBoundary: RootErrorBoundary,
    // Nothing to show while a lazy page loads on first visit (avoids a React Router warning).
    HydrateFallback: () => null,
    children: [
      {
        // Pathless route: a failing page is replaced by the error while the layout stays.
        ErrorBoundary: UnexpectedErrorPage,
        children: [
          { index: true, Component: HomePage },
          {
            path: paths.contact,
            lazy: async () => {
              const { ContactPage } = await import('../pages/contact/ContactPage')
              return { Component: ContactPage }
            },
          },
          { path: '*', Component: NotFoundPage },
        ],
      },
    ],
  },
]
