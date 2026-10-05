import { formatDate, type IsoDate } from '../../lib/format-date'

type PeriodProps = {
  start: IsoDate
  end: IsoDate | null
}

export function Period({ start, end }: PeriodProps) {
  if (start === end) {
    return (
      <p className="text-sm font-medium tabular-nums first-letter:uppercase">
        <time dateTime={start}>{formatDate(start)}</time>
      </p>
    )
  }

  return (
    <p className="text-sm font-medium tabular-nums first-letter:uppercase">
      <time dateTime={start}>{formatDate(start)}</time>
      {' – '}
      {end ? <time dateTime={end}>{formatDate(end)}</time> : 'aujourd’hui'}
    </p>
  )
}
