import type { ComponentProps } from 'react'

type ArrowDownIconProps = ComponentProps<'svg'>

export function ArrowDownIcon(props: ArrowDownIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" />
    </svg>
  )
}
