import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  // aria-disabled instead of disabled: a disabled button drops the keyboard focus to <body>.
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-highlight hover:text-ink aria-disabled:cursor-progress aria-disabled:opacity-70 aria-disabled:hover:bg-ink aria-disabled:hover:text-paper"
    >
      {pending ? 'Envoi…' : 'Envoyer le message'}
    </button>
  )
}
