export type Photo = {
  src: string
  alt: string
  width: number
  height: number
}

export type Profile = {
  name: string
  role: string
  email: string
  linkedin: string
  stack: readonly string[]
  photo?: Photo
}

export const profile: Profile = {
  name: 'Cynthia LOUIS',
  role: 'Développeuse web freelance',
  email: 'cynthialouis.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cynthia-louis',
  stack: ['Vue.js', 'React', 'JavaScript', 'TypeScript'],
}
