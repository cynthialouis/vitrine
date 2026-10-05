import { afterEach, describe, expect, it, vi } from 'vitest'
import { sendContactMessage } from './send-contact-message'

const message = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  company: '',
  message: 'Refonte de notre site vitrine en React.',
}

describe('sendContactMessage', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('posts the message as a Netlify form submission', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    await sendContactMessage(message)

    expect(fetchMock).toHaveBeenCalledWith(
      '/',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }),
    )
    const [, init] = fetchMock.mock.calls[0] ?? []
    expect(Object.fromEntries(new URLSearchParams(String(init?.body)))).toEqual({
      'form-name': 'contact',
      ...message,
    })
  })

  it('fails when Netlify rejects the submission', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 404 })))

    await expect(sendContactMessage(message)).rejects.toThrow('status 404')
  })

  it('fails when the network is unavailable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')))

    await expect(sendContactMessage(message)).rejects.toThrow('Failed to fetch')
  })
})
