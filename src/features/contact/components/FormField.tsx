import { useId } from 'react'
import { cn } from '../../../lib/cn'
import { useContactDraftStore } from '../draft-store'
import type { ContactField } from '../schema'

type FormFieldProps = {
  field: ContactField
  label: string
  maxLength: number
  error?: string | undefined
  optional?: boolean
  multiline?: boolean
  type?: 'text' | 'email'
  autoComplete?: string
}

export function FormField({
  field,
  label,
  maxLength,
  error,
  optional = false,
  multiline = false,
  type = 'text',
  autoComplete,
}: FormFieldProps) {
  const id = useId()
  const errorId = `${id}-error`
  const value = useContactDraftStore((state) => state[field])
  const setField = useContactDraftStore((state) => state.setField)

  const controlProps = {
    id,
    name: field,
    value,
    maxLength,
    required: !optional,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: cn(
      'mt-2 block w-full rounded-xl border bg-paper px-4 py-3 text-base transition-colors',
      error ? 'border-danger' : 'border-line hover:border-ink-soft',
    ),
  }

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}{' '}
        {optional ? (
          <span className="font-normal text-ink-soft">(facultatif)</span>
        ) : (
          // Visual cue only: the field itself is announced as required (required attribute).
          <span aria-hidden="true" className="text-accent-ink">
            *
          </span>
        )}
      </label>

      {multiline ? (
        <textarea
          {...controlProps}
          rows={6}
          onChange={(event) => setField(field, event.target.value)}
        />
      ) : (
        <input
          {...controlProps}
          type={type}
          autoComplete={autoComplete}
          onChange={(event) => setField(field, event.target.value)}
        />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
