import type { IsoMonth } from '../lib/format-month'

export type Education = {
  id: string
  degree: string
  school: string
  location: string
  start: IsoMonth
  end: IsoMonth
  description: string
}

export type Certification = {
  id: string
  name: string
  issuer: string
  issuedOn: IsoMonth
}

export const education: readonly Education[] = [
  {
    id: 'education-1',
    degree: 'Lorem ipsum dolor sit amet',
    school: 'Consectetur Adipiscing',
    location: 'Elit',
    start: '2018-09',
    end: '2020-08',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'education-2',
    degree: 'Sed do eiusmod tempor',
    school: 'Incididunt Labore',
    location: 'Magna',
    start: '2016-09',
    end: '2018-06',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
]

export const certifications: readonly Certification[] = [
  {
    id: 'certification-1',
    name: 'Lorem ipsum dolor sit amet',
    issuer: 'Consectetur',
    issuedOn: '2024-04',
  },
  {
    id: 'certification-2',
    name: 'Adipiscing elit sed do',
    issuer: 'Eiusmod',
    issuedOn: '2022-05',
  },
  {
    id: 'certification-3',
    name: 'Tempor incididunt ut labore',
    issuer: 'Aliqua',
    issuedOn: '2021-11',
  },
]
