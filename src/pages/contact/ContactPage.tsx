import { Container } from '../../components/ui/Container'
import { Serif } from '../../components/ui/Serif'
import { contact } from '../../content/contact'
import { profile } from '../../content/profile'
import { ContactForm } from '../../features/contact/components/ContactForm'
import { toPlainText } from '../../lib/accented-text'

export function ContactPage() {
  return (
    <>
      <title>{`Contact · ${profile.name}`}</title>
      <meta
        name="description"
        content={`Contactez ${profile.name}, ${toPlainText(profile.role).toLowerCase()}. ${contact.intro}`}
      />

      <section aria-labelledby="contact-title" className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

        <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h1 id="contact-title" className="text-4xl font-medium tracking-tight text-balance sm:text-5xl xl:text-6xl">
              Contactez-<Serif>moi</Serif>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-pretty text-ink-soft">
              {contact.intro}
            </p>

            <p className="mt-10 text-ink-soft">{contact.emailLead}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-block text-lg font-medium underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {profile.email}
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
