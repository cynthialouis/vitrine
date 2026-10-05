type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

export type IsoYear = `${number}`
export type IsoMonth = `${number}-${Month}`
export type IsoDate = IsoYear | IsoMonth

const isoYearPattern = /^\d{4}$/

const monthFormatter = new Intl.DateTimeFormat('fr-FR', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export function formatDate(value: IsoDate): string {
  if (isoYearPattern.test(value)) {
    return value
  }

  return monthFormatter.format(new Date(`${value}-01T00:00:00Z`))
}
