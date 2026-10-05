import { beforeEach, describe, expect, it } from 'vitest'
import { contactDraftStorageKey, emptyContactDraft, useContactDraftStore } from './draft-store'

describe('useContactDraftStore', () => {
  beforeEach(() => {
    localStorage.clear()
    useContactDraftStore.setState(emptyContactDraft)
  })

  it('updates a single field', () => {
    useContactDraftStore.getState().setField('name', 'Ada')

    expect(useContactDraftStore.getState()).toMatchObject({ ...emptyContactDraft, name: 'Ada' })
  })

  it('persists only the field values in local storage', () => {
    useContactDraftStore.getState().setField('message', 'Un projet')

    const stored: unknown = JSON.parse(localStorage.getItem(contactDraftStorageKey) ?? 'null')
    expect(stored).toEqual({ state: { ...emptyContactDraft, message: 'Un projet' }, version: 1 })
  })

  it('restores a saved draft', async () => {
    localStorage.setItem(
      contactDraftStorageKey,
      JSON.stringify({ state: { ...emptyContactDraft, email: 'ada@example.com' }, version: 1 }),
    )

    await useContactDraftStore.persist.rehydrate()

    expect(useContactDraftStore.getState().email).toBe('ada@example.com')
  })

  it('clears the draft', () => {
    useContactDraftStore.getState().setField('name', 'Ada')
    useContactDraftStore.getState().clear()

    expect(useContactDraftStore.getState()).toMatchObject(emptyContactDraft)
  })
})
