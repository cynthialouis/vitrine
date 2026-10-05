import { Fragment } from 'react'
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
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl bg-code-bg shadow-2xl ring-1 shadow-ink/20 ring-ink/5"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-xs text-code-muted">profile.ts</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-code-text">
        <code>
          <Keyword>const</Keyword> freelance <Punct>=</Punct> <Punct>{'{'}</Punct>
          {'\n  '}name<Punct>:</Punct> <Str>{profile.name}</Str>
          <Punct>,</Punct>
          {'\n  '}role<Punct>:</Punct> <Str>{profile.role}</Str>
          <Punct>,</Punct>
          {'\n  '}stack<Punct>:</Punct> <Punct>[</Punct>
          {profile.stack.map((tool) => (
            <Fragment key={tool}>
              {'\n    '}
              <Str>{tool}</Str>
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
  )
}
