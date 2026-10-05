import { Accented } from '../../components/ui/Accented'
import { buttonVariants } from '../../components/ui/button-variants'
import { Container } from '../../components/ui/Container'
import { ArrowDownIcon } from '../../components/ui/icons/ArrowDownIcon'
import { home } from '../../content/home'
import { profile } from '../../content/profile'
import { CodeCard } from './CodeCard'
import { ProfilePhoto } from './ProfilePhoto'

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
          <hgroup>
            <h1 id="hero-title" className="text-hero font-medium text-balance">
              {profile.name}
            </h1>
            <p className="mt-4 text-3xl font-medium tracking-tight text-balance text-ink-soft sm:text-4xl">
              <Accented text={profile.role} />
            </p>
          </hgroup>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
            <Accented text={home.hero.description} />
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#experiences"
              className={buttonVariants.primary}
            >
              Découvrir mon parcours
              <ArrowDownIcon className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-y-0.5" />
            </a>
            <a
              href="#education"
              className={buttonVariants.secondary}
            >
              Voir mes formations
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm pb-40 lg:col-span-5 lg:mr-0">
          <ProfilePhoto name={profile.name} photo={profile.photo} />
          <div className="absolute bottom-0 -left-2 w-max sm:-left-12">
            <CodeCard />
          </div>
        </div>
      </Container>
    </section>
  )
}
