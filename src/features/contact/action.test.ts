import { describe, expect, it, vi } from 'vitest'
import { createContactAction, initialContactFormState } from './action'

function toFormData(values: Record<string, string>): FormData {
  const formData = new FormData()
  for (const [key, value] of Object.entries(values)) {
    formData.set(key, value)
  }
  return formData
}

const validValues = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  company: '',
  message: 'Refonte de notre site vitrine en React.',
}

describe('createContactAction', () => {
  it('returns field errors without sending when the input is invalid', async () => {
    const send = vi.fn().mockResolvedValue(undefined)
    const onSent = vi.fn()
    const action = createContactAction({ send, onSent })

    const state = await action(initialContactFormState, toFormData({ ...validValues, email: '' }))

    expect(state).toEqual({ status: 'invalid', errors: { email: 'Indiquez votre adresse email.' } })
    expect(send).not.toHaveBeenCalled()
    expect(onSent).not.toHaveBeenCalled()
  })

  it('sends the validated message and notifies on success', async () => {
    const send = vi.fn().mockResolvedValue(undefined)
    const onSent = vi.fn()
    const action = createContactAction({ send, onSent })

    const state = await action(initialContactFormState, toFormData(validValues))

    expect(state).toEqual({ status: 'sent' })
    expect(send).toHaveBeenCalledWith(validValues)
    expect(onSent).toHaveBeenCalledOnce()
  })

  it('reports a failure without notifying when sending rejects', async () => {
    const send = vi.fn().mockRejectedValue(new Error('Network error'))
    const onSent = vi.fn()
    const action = createContactAction({ send, onSent })

    const state = await action(initialContactFormState, toFormData(validValues))

    expect(state).toEqual({ status: 'failed' })
    expect(onSent).not.toHaveBeenCalled()
  })
})
