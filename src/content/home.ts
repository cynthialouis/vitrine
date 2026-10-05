export type HomeContent = {
  hero: {
    title: { before: string; accent: string; after: string }
  }
}

export const home: HomeContent = {
  hero: {
    title: { before: 'Lorem ipsum', accent: 'dolor', after: 'sit amet, consectetur adipiscing.' },
  },
}
