import { Link, NavLink } from 'react-router'
import { Container } from '../components/ui/Container'
import { profile } from '../content/profile'
import { cn } from '../lib/cn'
import { paths } from './paths'

export function Header() {
  return (
    <header id="top" className="border-b border-line">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to={paths.home} className="flex items-center gap-2.5 font-medium tracking-tight">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.name}
        </Link>

        <nav aria-label="Navigation principale">
          <NavLink
            to={paths.contact}
            className={({ isActive }) =>
              cn(
                'inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line hover:border-ink',
              )
            }
          >
            Contact
          </NavLink>
        </nav>
      </Container>
    </header>
  )
}
