import type { AccentedText } from '../../lib/accented-text'
import { Serif } from './Serif'

type AccentedProps = {
  text: AccentedText
}

export function Accented({ text: { before, accent, after } }: AccentedProps) {
  return (
    <>
      {before} <Serif>{accent}</Serif>
      {after && ` ${after}`}
    </>
  )
}
