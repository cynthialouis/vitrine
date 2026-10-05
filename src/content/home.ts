export type HomeContent = {
  hero: {
    title: { before: string; accent: string; after: string }
  }
  experiences: {
    description: string
  }
}

export const home: HomeContent = {
  hero: {
    title: { before: 'Lorem ipsum', accent: 'dolor', after: 'sit amet, consectetur adipiscing.' },
  },
  experiences: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.',
  },
}
