import type { AccentedText } from '../lib/accented-text'

export type HomeContent = {
  hero: {
    description: AccentedText
  }
  experiences: {
    description: string
  }
  education: {
    description: string
  }
  contactCta: {
    description: string
  }
}

export const home: HomeContent = {
  hero: {
    description: {
      before: 'Je conçois des interfaces web',
      accent: 'soignées',
      after: 'et faciles à maintenir.',
    },
  },
  experiences: {
    description: 'Des années à construire des interfaces qui servent.',
  },
  education: {
    description: 'Un parcours construit pas à pas.',
  },
  contactCta: {
    description: 'Racontez-moi votre besoin et je vous réponds rapidement.',
  },
}
