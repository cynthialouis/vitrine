import { Container } from '../../components/ui/Container'
import { LinkedInIcon } from '../../components/ui/icons/LinkedInIcon'
import { Serif } from '../../components/ui/Serif'
import { profile } from '../../content/profile'
import { ContactForm } from '../../features/contact/components/ContactForm'

export function ContactPage() {
  return (
    <>
      <title>{`Contact · ${profile.name}`}</title>
      <meta
        name="description"
        content={`Contactez ${profile.name}, ${profile.role.toLowerCase()}. Un premier contact suffit pour démarrer.`}
      />

      <section aria-labelledby="contact-title" className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

        <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h1 id="contact-title" className="text-4xl font-medium tracking-tight text-balance sm:text-5xl xl:text-6xl">
              Contactez-<Serif>moi</Serif>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-pretty text-ink-soft">
              Un premier contact suffit pour démarrer.
            </p>

            <p className="mt-10 text-ink-soft">Vous préférez l’email ?</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-block text-lg font-medium underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {profile.email}
            </a>

            <p className="mt-8 text-ink-soft">Ou échangeons sur LinkedIn</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-lg font-medium underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
            >
              <LinkedInIcon className="size-5 shrink-0" />
              {profile.linkedin.replace(/^https:\/\/www\./, '')}{' '}
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
