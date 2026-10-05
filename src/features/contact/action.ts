import type { ContactMessageSender } from './send-contact-message'
import { contactSchema, toFieldErrors, type ContactFieldErrors } from './schema'

export type ContactFormState =
  | { status: 'idle' }
  | { status: 'invalid'; errors: ContactFieldErrors }
  | { status: 'failed' }
  | { status: 'sent' }

export const initialContactFormState: ContactFormState = { status: 'idle' }

type ContactActionDependencies = {
  send: ContactMessageSender
  onSent: () => void
}

export function createContactAction({ send, onSent }: ContactActionDependencies) {
  return async function contactAction(
    _previousState: ContactFormState,
    formData: FormData,
  ): Promise<ContactFormState> {
    const result = contactSchema.safeParse(Object.fromEntries(formData))

    if (!result.success) {
      return { status: 'invalid', errors: toFieldErrors(result.error) }
    }

    try {
      await send(result.data)
    } catch {
      return { status: 'failed' }
    }

    onSent()
    return { status: 'sent' }
  }
}
