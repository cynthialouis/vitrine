import type { RouteObject } from 'react-router'
import { NotFoundPage } from '../pages/errors/NotFoundPage'
import { HomePage } from '../pages/home/HomePage'
import { Layout } from './Layout'
import { paths } from './paths'
import { RootErrorBoundary, RouteErrorBoundary } from './RouteErrorBoundary'

export const routes: RouteObject[] = [
  {
    path: paths.home,
    Component: Layout,
    ErrorBoundary: RootErrorBoundary,
    children: [
      {
        // Pathless route: a failing page is replaced by the error while the layout stays.
        ErrorBoundary: RouteErrorBoundary,
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
