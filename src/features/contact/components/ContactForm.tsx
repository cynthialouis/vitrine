import { useActionState, useEffect, useRef } from 'react'
import { contact } from '../../../content/contact'
import { profile } from '../../../content/profile'
import { createContactAction, initialContactFormState } from '../action'
import { useContactDraftStore } from '../draft-store'
import { contactFields, contactLimits } from '../schema'
import { sendContactMessage, type ContactMessageSender } from '../send-contact-message'
import { FormField } from './FormField'
import { SubmitButton } from './SubmitButton'

type ContactFormProps = {
  send?: ContactMessageSender
}

function formatErrorCount(count: number): string {
  return count > 1 ? `Le formulaire contient ${count} erreurs.` : 'Le formulaire contient 1 erreur.'
}

export function ContactForm({ send = sendContactMessage }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const clearDraft = useContactDraftStore((state) => state.clear)
  const [state, formAction] = useActionState(
    createContactAction({ send, onSent: clearDraft }),
    initialContactFormState,
  )

  // Moving focus is a DOM side effect: it must run once the errors are rendered and linked.
  useEffect(() => {
    if (state.status !== 'invalid') return

    const firstInvalidField = contactFields.find((field) => state.errors[field])
    const element = firstInvalidField && formRef.current?.elements.namedItem(firstInvalidField)
    if (element instanceof HTMLElement) {
      element.focus()
    }
  }, [state])

  const errors = state.status === 'invalid' ? state.errors : {}

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8"
    >
      {state.status === 'invalid' && (
        <p role="alert" className="mb-6 rounded-xl bg-danger/10 px-4 py-3 text-sm font-medium text-danger">
          {formatErrorCount(Object.keys(errors).length)} Corrigez les champs signalés.
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          field="name"
          label="Nom"
          autoComplete="name"
          maxLength={contactLimits.name}
          error={errors.name}
        />
        <FormField
          field="email"
          label="Email"
          type="email"
          autoComplete="email"
          maxLength={254}
          error={errors.email}
        />
        <div className="sm:col-span-2">
          <FormField
            field="company"
            label="Entreprise"
            autoComplete="organization"
            optional
            maxLength={contactLimits.company}
            error={errors.company}
          />
        </div>
        <div className="sm:col-span-2">
          <FormField
            field="message"
            label="Votre projet"
            multiline
            maxLength={contactLimits.messageMax}
            error={errors.message}
          />
        </div>
      </div>

      <div aria-live="polite">
        {state.status === 'sent' && (
          <p className="mt-6 rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium text-accent-ink">
            {contact.successMessage}
          </p>
        )}
      </div>

      {state.status === 'failed' && (
        <p role="alert" className="mt-6 rounded-xl bg-danger/10 px-4 py-3 text-sm text-danger">
          L’envoi n’a pas abouti. Réessayez dans un instant ou écrivez-moi directement à{' '}
          <a href={`mailto:${profile.email}`} className="font-medium underline underline-offset-2">
            {profile.email}
          </a>
          .
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />
        <p className="text-xs text-ink-soft">Brouillon enregistré automatiquement.</p>
      </div>
    </form>
  )
}
