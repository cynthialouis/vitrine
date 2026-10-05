type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

export type IsoMonth = `${number}-${Month}`

const monthFormatter = new Intl.DateTimeFormat('fr-FR', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export function formatMonth(value: IsoMonth): string {
  return monthFormatter.format(new Date(`${value}-01T00:00:00Z`))
}
