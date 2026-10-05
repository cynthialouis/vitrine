import { Fragment, useId } from 'react'
import { profile } from '../../content/profile'

type TokenProps = {
  children: string
}

function Keyword({ children }: TokenProps) {
  return <span className="text-code-keyword">{children}</span>
}

function Str({ children }: TokenProps) {
  return <span className="text-code-string">&apos;{children}&apos;</span>
}

function Punct({ children }: TokenProps) {
  return <span className="text-code-muted">{children}</span>
}

export function CodeCard() {
  const captionId = useId()
  const summary = `${profile.name}, ${profile.role.toLowerCase()} basée à ${profile.location}. Stack : ${profile.stack.join(', ')}.`

  return (
    <figure
      aria-labelledby={captionId}
      className="overflow-hidden rounded-2xl bg-code-bg shadow-2xl ring-1 shadow-ink/10 ring-ink/5"
    >
      <figcaption id={captionId} className="sr-only">{summary}</figcaption>
      <div aria-hidden="true">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="size-3 rounded-full bg-white/15" />
          <span className="size-3 rounded-full bg-white/15" />
          <span className="size-3 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-xs text-code-muted">profile.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 sm:p-6 sm:text-sm sm:leading-7 text-code-text">
          <code>
            <Keyword>const</Keyword> freelance <Punct>=</Punct> <Punct>{'{'}</Punct>
            {'\n  '}name<Punct>:</Punct> <Str>{profile.name}</Str>
            <Punct>,</Punct>
            {'\n  '}role<Punct>:</Punct> <Str>{profile.role}</Str>
            <Punct>,</Punct>
            {'\n  '}basedIn<Punct>:</Punct> <Str>{profile.location}</Str>
            <Punct>,</Punct>
            {'\n  '}stack<Punct>:</Punct> <Punct>[</Punct>
            {profile.stack.map((item) => (
              <Fragment key={item}>
                {'\n    '}
                <Str>{item}</Str>
                <Punct>,</Punct>
              </Fragment>
            ))}
            {'\n  '}
            <Punct>],</Punct>
            {'\n'}
            <Punct>{'}'}</Punct> <Keyword>satisfies</Keyword> Developer
          </code>
        </pre>
      </div>
    </figure>
  )
}
