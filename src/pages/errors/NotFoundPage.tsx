import { Link } from 'react-router'
import { paths } from '../../app/paths'
import { buttonVariants } from '../../components/ui/button-variants'
import { Serif } from '../../components/ui/Serif'
import { ErrorMessage } from './ErrorMessage'

export function NotFoundPage() {
  return (
    <ErrorMessage
      documentTitle="Page introuvable"
      eyebrow="Erreur 404"
      title={
        <>
          <Serif>Oops</Serif>, cette page n’existe pas.
        </>
      }
      actions={
        <>
          <Link to={paths.home} className={buttonVariants.primary}>
            Retour à l’accueil
          </Link>
          <Link to={paths.contact} className={buttonVariants.secondary}>
            Me contacter
          </Link>
        </>
      }
    />
  )
}
