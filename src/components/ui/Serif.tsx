import type { ReactNode } from 'react'

type SerifProps = {
  children: ReactNode
}

export function Serif({ children }: SerifProps) {
  return <em className="font-serif font-normal tracking-normal">{children}</em>
}
