import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { profile } from '../content/profile'
import { renderRoute } from '../test/render-route'
import { mainContentId } from './Layout'
import { paths } from './paths'

describe('routes', () => {
  it('renders the banner, main and contentinfo landmarks in order', async () => {
    renderRoute(paths.home)
    const banner = await screen.findByRole('banner')
    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo')

    expect(banner.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(main.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('offers a skip link to the main content', async () => {
    renderRoute(paths.home)
    const skipLink = await screen.findByRole('link', { name: 'Aller au contenu' })

    expect(skipLink).toHaveAttribute('href', `#${mainContentId}`)
    expect(screen.getByRole('main')).toHaveAttribute('id', mainContentId)
  })

  it('renders the home page at the root path', async () => {
    renderRoute(paths.home)
    expect(await screen.findByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
  })

  it('navigates to the contact page from the header and marks the link as current', async () => {
    const user = userEvent.setup()
    renderRoute(paths.home)

    const navigation = await screen.findByRole('navigation', { name: 'Navigation principale' })
    await user.click(within(navigation).getByRole('link', { name: 'Contact' }))

    expect(await screen.findByRole('heading', { level: 1, name: 'Contactez-moi' })).toBeInTheDocument()
    expect(within(navigation).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('navigates back home from the name in the header', async () => {
    const user = userEvent.setup()
    renderRoute(paths.contact)

    const banner = await screen.findByRole('banner')
    await screen.findByRole('heading', { level: 1, name: 'Contactez-moi' })
    await user.click(within(banner).getByRole('link', { name: profile.name }))

    expect(await screen.findByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
  })
})
