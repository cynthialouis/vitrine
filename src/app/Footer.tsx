import { Link } from 'react-router'
import { Container } from '../components/ui/Container'
import { ArrowDownIcon } from '../components/ui/icons/ArrowDownIcon'
import { LinkedInIcon } from '../components/ui/icons/LinkedInIcon'
import { Serif } from '../components/ui/Serif'
import { profile } from '../content/profile'
import { paths } from './paths'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p>
            © {currentYear} {profile.name}
          </p>
          <p>
            Conçu et développé <Serif>with love</Serif> avec React, TypeScript et Tailwind CSS
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 self-start sm:self-auto">
          <Link to={paths.contact} className="-my-2 inline-flex py-2 font-medium transition-colors hover:text-ink">
            Contact
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="-my-2 inline-flex items-center gap-2 py-2 font-medium transition-colors hover:text-ink"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn{' '}
            <span className="sr-only">(nouvel onglet)</span>
          </a>
          <a
            href="#top"
            className="group -my-2 inline-flex items-center gap-2 py-2 font-medium transition-colors hover:text-ink"
          >
            Retour en haut
            <ArrowDownIcon className="size-4 rotate-180 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
