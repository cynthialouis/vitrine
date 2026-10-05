import { isRouteErrorResponse, useRouteError } from 'react-router'
import { NotFoundPage } from '../pages/errors/NotFoundPage'
import { UnexpectedErrorPage } from '../pages/errors/UnexpectedErrorPage'

export function RouteErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />
  }

  return <UnexpectedErrorPage />
}

/** Last-resort boundary, used when the layout itself fails to render. */
export function RootErrorBoundary() {
  return (
    <main>
      <RouteErrorBoundary />
    </main>
  )
}
