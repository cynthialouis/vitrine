import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
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
      setField: (field, value) =>
        set(() => {
          const update: Partial<ContactDraft> = {}
          update[field] = value
          return update
        }),
      clear: () => set(emptyContactDraft),
    }),
    {
      name: contactDraftStorageKey,
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ name, email, company, message }): ContactDraft => ({
        name,
        email,
        company,
        message,
      }),
    },
  ),
)
