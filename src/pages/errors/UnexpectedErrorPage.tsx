import { Link } from 'react-router'
import { paths } from '../../app/paths'
import { buttonVariants } from '../../components/ui/button-variants'
import { Serif } from '../../components/ui/Serif'
import { ErrorMessage } from './ErrorMessage'

type UnexpectedErrorPageProps = {
  onReload?: () => void
}

function reloadPage() {
  window.location.reload()
}

export function UnexpectedErrorPage({ onReload = reloadPage }: UnexpectedErrorPageProps) {
  return (
    <ErrorMessage
      documentTitle="Erreur"
      eyebrow="Erreur inattendue"
      title={
        <>
          <Serif>Oops</Serif>, une erreur est survenue.
        </>
      }
      description="Merci de rafraîchir la page ou de retourner sur la page d’accueil."
      actions={
        <>
          <button type="button" onClick={onReload} className={buttonVariants.primary}>
            Rafraîchir la page
          </button>
          <Link to={paths.home} className={buttonVariants.secondary}>
            Retour à l’accueil
          </Link>
        </>
      }
    />
  )
}
