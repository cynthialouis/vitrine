import type { ContactMessage } from './schema'

export type ContactMessageSender = (message: ContactMessage) => Promise<void>

/** Submits the message to Netlify Forms (form declared in public/__forms.html). */
export const sendContactMessage: ContactMessageSender = async (message) => {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'form-name': 'contact', ...message }),
    signal: AbortSignal.timeout(10_000),
  })

  if (!response.ok) {
    throw new Error(`Contact form submission failed with status ${response.status}`)
  }
}
