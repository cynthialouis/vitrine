import { UnexpectedErrorPage } from '../pages/errors/UnexpectedErrorPage'

/** Last-resort boundary, used when the layout itself fails to render. */
export function RootErrorBoundary() {
  return (
    <main>
      <UnexpectedErrorPage />
    </main>
  )
}
