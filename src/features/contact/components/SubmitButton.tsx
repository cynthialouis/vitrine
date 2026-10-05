import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-highlight hover:text-ink disabled:cursor-progress disabled:opacity-70 disabled:hover:bg-ink disabled:hover:text-paper"
    >
      {pending ? 'Envoi…' : 'Envoyer le message'}
    </button>
  )
}
