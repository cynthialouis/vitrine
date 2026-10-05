import { formatMonth, type IsoMonth } from '../../lib/format-month'

type PeriodProps = {
  start: IsoMonth
  end: IsoMonth | null
}

export function Period({ start, end }: PeriodProps) {
  return (
    <p className="text-sm font-medium tabular-nums first-letter:uppercase">
      <time dateTime={start}>{formatMonth(start)}</time>
      {' – '}
      {end ? <time dateTime={end}>{formatMonth(end)}</time> : 'aujourd’hui'}
    </p>
  )
}
