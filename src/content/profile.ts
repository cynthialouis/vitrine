import type { AccentedText } from '../lib/accented-text'

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
}

export type Profile = {
  name: string
  role: AccentedText
  stack: readonly string[]
  photo?: Photo
}

export const profile: Profile = {
  name: 'Cynthia LOUIS',
  role: { before: 'Développeuse web', accent: 'freelance' },
  stack: ['Vue.js', 'React', 'JavaScript', 'TypeScript'],
}
