import { describe, expect, it } from 'vitest'
import { contactLimits, contactSchema, toFieldErrors } from './schema'

const validMessage = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  company: '',
  message: 'Refonte de notre site vitrine en React.',
}

function errorsFor(input: Record<string, string>) {
  const result = contactSchema.safeParse(input)
  if (result.success) throw new Error('Expected validation to fail')
  return toFieldErrors(result.error)
}

describe('contactSchema', () => {
  it('accepts a valid message and trims every field', () => {
    const result = contactSchema.safeParse({
      ...validMessage,
      name: '  Ada Lovelace  ',
      company: '  Analytical Engines ',
    })

    expect(result.success && result.data).toEqual({
      ...validMessage,
      company: 'Analytical Engines',
    })
  })

  it('accepts an empty company since it is optional', () => {
    expect(contactSchema.safeParse(validMessage).success).toBe(true)
  })

  it('requires a name, an email and a message', () => {
    expect(errorsFor({ name: ' ', email: '', company: '', message: '' })).toEqual({
      name: 'Indiquez votre nom.',
      email: 'Indiquez votre adresse email.',
      message: `Décrivez votre projet en quelques phrases (${contactLimits.messageMin} caractères minimum).`,
    })
  })

  it('rejects an invalid email', () => {
    expect(errorsFor({ ...validMessage, email: 'ada@' })).toEqual({
      email: 'Indiquez une adresse email valide, par exemple nom@domaine.fr.',
    })
  })

  it('enforces the message length bounds', () => {
    expect(errorsFor({ ...validMessage, message: 'Trop court' })).toHaveProperty('message')
    expect(
      errorsFor({ ...validMessage, message: 'a'.repeat(contactLimits.messageMax + 1) }),
    ).toHaveProperty('message')
  })

  it('enforces the name and company maximum lengths', () => {
    expect(
      errorsFor({
        ...validMessage,
        name: 'a'.repeat(contactLimits.name + 1),
        company: 'a'.repeat(contactLimits.company + 1),
      }),
    ).toEqual({
      name: `Votre nom ne doit pas dépasser ${contactLimits.name} caractères.`,
      company: `Le nom de l’entreprise ne doit pas dépasser ${contactLimits.company} caractères.`,
    })
  })
})
