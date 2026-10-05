import type { ContactMessage } from './schema'

export type ContactMessageSender = (message: ContactMessage) => Promise<void>

/**
 * Delivery is not wired to any service yet: failing explicitly lets the form
 * show its fallback (direct email) instead of pretending the message was sent.
 */
export const sendContactMessage: ContactMessageSender = () =>
  Promise.reject(new Error('Contact message delivery is not configured yet.'))
