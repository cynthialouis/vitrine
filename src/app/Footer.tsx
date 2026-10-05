import { Container } from '../components/ui/Container'
import { ArrowDownIcon } from '../components/ui/icons/ArrowDownIcon'
import { Serif } from '../components/ui/Serif'
import { profile } from '../content/profile'

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

        <a
          href="#top"
          className="group inline-flex items-center gap-2 self-start font-medium transition-colors hover:text-ink sm:self-auto"
        >
          Retour en haut
          <ArrowDownIcon className="size-4 rotate-180 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5" />
        </a>
      </Container>
    </footer>
  )
}
