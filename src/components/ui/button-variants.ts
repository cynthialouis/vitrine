export const buttonVariants = {
  primary:
    'group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-highlight hover:text-ink',
  secondary:
    'inline-flex items-center rounded-full border border-line px-6 py-3.5 font-medium transition-colors hover:border-ink',
} as const satisfies Record<string, string>

export type ButtonVariant = keyof typeof buttonVariants
