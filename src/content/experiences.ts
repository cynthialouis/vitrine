import type { IsoMonth } from '../lib/format-month'

export type Mission = string | { title: string; items: readonly string[] }

export type Experience = {
  id: string
  role: string
  company?: string
  location?: string
  start: IsoMonth
  end: IsoMonth | null
  missions?: readonly Mission[]
  stack?: readonly string[]
}

export const experiences: readonly Experience[] = [
  {
    id: 'experience-1',
    role: 'Lorem ipsum dolor',
    company: 'Sit Amet',
    location: 'Consectetur',
    start: '2023-03',
    end: null,
    missions: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      {
        title: 'Duis aute irure dolor in reprehenderit',
        items: ['Velit esse cillum dolore.', 'Excepteur sint occaecat cupidatat non proident.'],
      },
    ],
    stack: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
  },
  {
    id: 'experience-2',
    role: 'Adipiscing elit',
    start: '2020-09',
    end: '2023-02',
    missions: [
      'Cras mattis consectetur purus sit amet fermentum.',
      'Nullam quis risus eget urna mollis ornare vel eu leo.',
    ],
    stack: ['Lorem', 'Ipsum', 'Dolor', 'Sit'],
  },
  {
    id: 'experience-3',
    role: 'Magna aliqua',
    company: 'Ut Labore',
    start: '2018-09',
    end: '2020-08',
  },
]
