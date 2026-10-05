import type { RouteObject } from 'react-router'
import { HomePage } from '../pages/home/HomePage'
import { Layout } from './Layout'
import { paths } from './paths'

export const routes: RouteObject[] = [
  {
    path: paths.home,
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: paths.contact,
        lazy: async () => {
          const { ContactPage } = await import('../pages/contact/ContactPage')
          return { Component: ContactPage }
        },
      },
    ],
  },
]
