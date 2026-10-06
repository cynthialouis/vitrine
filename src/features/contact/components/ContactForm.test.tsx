import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { profile } from '../../../content/profile'
import { emptyContactDraft, useContactDraftStore } from '../draft-store'
import { ContactForm } from './ContactForm'

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByRole('textbox', { name: 'Nom' }), 'Ada Lovelace')
  await user.type(screen.getByRole('textbox', { name: 'Email' }), 'ada@example.com')
  await user.type(screen.getByRole('textbox', { name: 'Votre projet' }), 'Refonte de notre site vitrine en React.')
}

describe('ContactForm', () => {
  beforeEach(() => {
    localStorage.clear()
    useContactDraftStore.setState(emptyContactDraft)
  })

  it('marks the company field as optional', () => {
    render(<ContactForm />)

    expect(screen.getByRole('textbox', { name: 'Entreprise (facultatif)' })).not.toBeRequired()
    expect(screen.getByRole('textbox', { name: 'Nom' })).toBeRequired()
  })

  it('reports errors, links them to their fields and focuses the first invalid field', async () => {
    const user = userEvent.setup()
    const send = vi.fn()
    render(<ContactForm send={send} />)

    await user.click(screen.getByRole('button', { name: 'Envoyer le message' }))

    expect(await screen.findByRole('alert')).toHaveTextContent('Le formulaire contient 3 erreurs.')
    const nameField = screen.getByRole('textbox', { name: 'Nom' })
    expect(nameField).toHaveFocus()
    expect(nameField).toBeInvalid()
    expect(nameField).toHaveAccessibleDescription('Indiquez votre nom.')
    expect(send).not.toHaveBeenCalled()
  })

  it('keeps the typed values after a failed validation', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: 'Nom' }), 'Ada')
    await user.click(screen.getByRole('button', { name: 'Envoyer le message' }))

    await screen.findByRole('alert')
    expect(screen.getByRole('textbox', { name: 'Nom' })).toHaveValue('Ada')
  })

  it('saves the draft as the user types and restores it on the next render', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<ContactForm />)

    await user.type(screen.getByRole('textbox', { name: 'Votre projet' }), 'Un site vitrine')
    unmount()
    render(<ContactForm />)

    expect(screen.getByRole('textbox', { name: 'Votre projet' })).toHaveValue('Un site vitrine')
  })

  it('informs about the use of personal data', () => {
    render(<ContactForm />)
    expect(
      screen.getByText('RGPD : Vos informations ne me servent qu’à vous répondre.'),
    ).toBeInTheDocument()
  })

  it('marks required fields with an asterisk hidden from assistive technologies', () => {
    render(<ContactForm />)

    const nameField = screen.getByRole('textbox', { name: 'Nom' })
    expect(nameField).toBeRequired()
    expect(screen.getByText('Nom').parentElement).toHaveTextContent('Nom *')
  })

  it('shows a pending state while sending, keeps the focus and blocks resubmission', async () => {
    const user = userEvent.setup()
    let resolveSending = () => {}
    const send = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveSending = resolve
        }),
    )
    render(<ContactForm send={send} />)

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Envoyer le message' }))

    const pendingButton = await screen.findByRole('button', { name: 'Envoi…' })
    expect(pendingButton).toHaveAttribute('aria-disabled', 'true')
    expect(pendingButton).toHaveFocus()

    await user.click(pendingButton)
    expect(send).toHaveBeenCalledOnce()

    resolveSending()
    expect(await screen.findByRole('button', { name: 'Envoyer le message' })).toHaveAttribute(
      'aria-disabled',
      'false',
    )
  })

  it('confirms the delivery and clears the draft once the message is sent', async () => {
    const user = userEvent.setup()
    const send = vi.fn().mockResolvedValue(undefined)
    render(<ContactForm send={send} />)

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Envoyer le message' }))

    expect(await screen.findByText(
        'Merci, votre message a bien été envoyé. Je reviens vers vous rapidement.',
      )).toBeInTheDocument()
    expect(send).toHaveBeenCalledWith({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      company: '',
      message: 'Refonte de notre site vitrine en React.',
    })
    expect(screen.getByRole('textbox', { name: 'Nom' })).toHaveValue('')
    expect(useContactDraftStore.getState()).toMatchObject(emptyContactDraft)
  })

  it('offers the direct email as a fallback when sending fails', async () => {
    const user = userEvent.setup()
    render(<ContactForm send={() => Promise.reject(new Error('Network error'))} />)

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Envoyer le message' }))

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('L’envoi n’a pas abouti.')
    expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute(
      'href',
      `mailto:${profile.email}`,
    )
    expect(screen.getByRole('textbox', { name: 'Nom' })).toHaveValue('Ada Lovelace')
  })
})
