import { z } from 'zod'

export const contactLimits = {
  name: 100,
  company: 100,
  messageMin: 20,
  messageMax: 2000,
} as const

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Indiquez votre nom.')
    .max(contactLimits.name, `Votre nom ne doit pas dépasser ${contactLimits.name} caractères.`),
  email: z
    .string()
    .trim()
    .min(1, 'Indiquez votre adresse email.')
    .pipe(z.email('Indiquez une adresse email valide, par exemple nom@domaine.fr.')),
  company: z
    .string()
    .trim()
    .max(
      contactLimits.company,
      `Le nom de l’entreprise ne doit pas dépasser ${contactLimits.company} caractères.`,
    ),
  message: z
    .string()
    .trim()
    .min(
      contactLimits.messageMin,
      `Décrivez votre projet en quelques phrases (${contactLimits.messageMin} caractères minimum).`,
    )
    .max(
      contactLimits.messageMax,
      `Votre message ne doit pas dépasser ${contactLimits.messageMax} caractères.`,
    ),
})

export type ContactMessage = z.infer<typeof contactSchema>
export type ContactField = keyof ContactMessage
export type ContactFieldErrors = Partial<Record<ContactField, string>>

export const contactFields = ['name', 'email', 'company', 'message'] as const satisfies readonly ContactField[]

export function toFieldErrors(error: z.ZodError<ContactMessage>): ContactFieldErrors {
  const { fieldErrors } = z.flattenError(error)
  const errors: ContactFieldErrors = {}

  for (const field of contactFields) {
    const [firstMessage] = fieldErrors[field] ?? []
    if (firstMessage) {
      errors[field] = firstMessage
    }
  }

  return errors
}
