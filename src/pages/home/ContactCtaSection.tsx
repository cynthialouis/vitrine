import { Link } from 'react-router'
import { paths } from '../../app/paths'
import { Container } from '../../components/ui/Container'
import { ArrowDownIcon } from '../../components/ui/icons/ArrowDownIcon'
import { Serif } from '../../components/ui/Serif'
import { home } from '../../content/home'

export function ContactCtaSection() {
  return (
    <section aria-labelledby="contact-cta-title" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-highlight to-paper px-6 py-16 ring-1 ring-ink/5 sm:px-12 sm:py-20">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

          <div className="relative max-w-2xl">
            <h2 id="contact-cta-title" className="text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              Un projet en <Serif>tête</Serif>&nbsp;?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-soft">
              {home.contactCta.description}
            </p>

            <Link
              to={paths.contact}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              Me contacter
              <ArrowDownIcon className="size-4 -rotate-90 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
