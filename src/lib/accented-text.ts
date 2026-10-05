export type AccentedText = {
  before: string
  accent: string
  after?: string
}

export function toPlainText({ before, accent, after }: AccentedText): string {
  return [before, accent, after].filter(Boolean).join(' ')
}
