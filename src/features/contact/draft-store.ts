import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ContactField } from './schema'

export type ContactDraft = Record<ContactField, string>

type ContactDraftStore = ContactDraft & {
  setField: (field: ContactField, value: string) => void
  clear: () => void
}

export const emptyContactDraft: ContactDraft = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export const contactDraftStorageKey = 'contact-draft'

export const useContactDraftStore = create<ContactDraftStore>()(
  persist(
    (set) => ({
      ...emptyContactDraft,
      setField: (field, value) => set({ [field]: value }),
      clear: () => set(emptyContactDraft),
    }),
    { name: contactDraftStorageKey },
  ),
)
