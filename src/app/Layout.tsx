import { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export const mainContentId = 'main-content'

export function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const previousPathname = useRef(pathname)

  // Client-side navigation is silent for assistive technologies: moving focus to the new
  // content announces it. Skipped on first load and on in-page anchors (same pathname).
  useEffect(() => {
    if (previousPathname.current === pathname) return

    previousPathname.current = pathname
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <a
        href={`#${mainContentId}`}
        className="sr-only rounded-full bg-ink font-medium text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-5 focus:py-3"
      >
        Aller au contenu
      </a>
      <Header />
      <main ref={mainRef} id={mainContentId} tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
