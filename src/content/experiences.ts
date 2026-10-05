import type { IsoMonth } from '../lib/format-month'

export type Experience = {
  id: string
  role: string
  company: string
  contract: 'Freelance' | 'CDI' | 'Alternance'
  location: string
  start: IsoMonth
  end: IsoMonth | null
  summary: string
  highlights: readonly string[]
  stack: readonly string[]
}

export const experiences: readonly Experience[] = [
  {
    id: 'experience-1',
    role: 'Lorem ipsum dolor',
    company: 'Sit Amet',
    contract: 'Freelance',
    location: 'Consectetur',
    start: '2023-03',
    end: null,
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    highlights: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    ],
    stack: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
  },
  {
    id: 'experience-2',
    role: 'Adipiscing elit',
    company: 'Sed Tempor',
    contract: 'CDI',
    location: 'Eiusmod',
    start: '2020-09',
    end: '2023-02',
    summary: 'Integer posuere erat a ante venenatis dapibus, posuere velit aliquet.',
    highlights: [
      'Cras mattis consectetur purus sit amet fermentum.',
      'Nullam quis risus eget urna mollis ornare vel eu leo.',
      'Vestibulum id ligula porta felis euismod semper.',
    ],
    stack: ['Lorem', 'Ipsum', 'Dolor', 'Sit'],
  },
  {
    id: 'experience-3',
    role: 'Magna aliqua',
    company: 'Ut Labore',
    contract: 'Alternance',
    location: 'Veniam',
    start: '2018-09',
    end: '2020-08',
    summary: 'Donec ullamcorper nulla non metus auctor fringilla.',
    highlights: [
      'Aenean lacinia bibendum nulla sed consectetur.',
      'Etiam porta sem malesuada magna mollis euismod.',
    ],
    stack: ['Lorem', 'Ipsum', 'Dolor'],
  },
]
