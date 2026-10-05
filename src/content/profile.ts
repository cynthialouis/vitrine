export type Profile = {
  name: string
  role: string
  location: string
  pitch: string
  stack: readonly string[]
}

export const profile: Profile = {
  name: 'Lorem Ipsum',
  role: 'Dolor sit amet',
  location: 'Consectetur',
  pitch:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
  stack: ['Lorem', 'Ipsum', 'Dolor'],
}
