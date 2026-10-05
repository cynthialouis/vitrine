import { Container } from '../../components/ui/Container'
import { ArrowDownIcon } from '../../components/ui/icons/ArrowDownIcon'
import { Serif } from '../../components/ui/Serif'
import { home } from '../../content/home'
import { profile } from '../../content/profile'
import { CodeCard } from './CodeCard'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 -right-40 size-glow rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid gap-16 pt-12 pb-20 sm:pt-20 lg:grid-cols-12 lg:items-center lg:pb-28">
        <div className="min-w-0 lg:col-span-7">
          <h1 id="hero-title" className="text-hero font-medium text-balance">
            {home.hero.title.before} <Serif>{home.hero.title.accent}</Serif> {home.hero.title.after}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
            Je suis <strong className="font-medium text-ink">{profile.name}</strong>,{' '}
            {profile.role.toLowerCase()} basée à {profile.location}. {profile.pitch}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#experiences"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-highlight hover:text-ink"
            >
              Découvrir mon parcours
              <ArrowDownIcon className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-y-0.5" />
            </a>
            <a
              href="#education"
              className="inline-flex items-center rounded-full border border-line px-6 py-3.5 font-medium transition-colors hover:border-ink"
            >
              Voir mes formations
            </a>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <CodeCard />
        </div>
      </Container>
    </section>
  )
}
