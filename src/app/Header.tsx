import { Container } from '../components/ui/Container'
import { profile } from '../content/profile'

export function Header() {
  return (
    <header className="border-b border-line">
      <Container className="flex h-16 items-center">
        <p className="flex items-center gap-2.5 font-medium tracking-tight">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.name}
        </p>
      </Container>
    </header>
  )
}
