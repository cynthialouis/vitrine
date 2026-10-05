export type HomeContent = {
  hero: {
    title: { before: string; accent: string; after: string }
  }
  experiences: {
    description: string
  }
  education: {
    description: string
  }
}

export const home: HomeContent = {
  hero: {
    title: { before: 'Lorem ipsum', accent: 'dolor', after: 'sit amet, consectetur adipiscing.' },
  },
  experiences: {
    description: 'Des années à construire des interfaces qui servent.',
  },
  education: {
    description: 'Un parcours construit pas à pas.',
  },
}
