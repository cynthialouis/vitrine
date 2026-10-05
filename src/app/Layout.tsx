import { Outlet, ScrollRestoration } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export const mainContentId = 'main-content'

export function Layout() {
  return (
    <>
      <a
        href={`#${mainContentId}`}
        className="sr-only rounded-full bg-ink px-5 py-3 font-medium text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Aller au contenu
      </a>
      <Header />
      <main id={mainContentId} tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
