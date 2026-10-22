
import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="relative z-10 scroll-mt-24 py-12"
      style={{
        display: 'block',
        visibility: 'visible',
        opacity: 1,
      }}
    >
      <div className="mb-10">
        <p className="text-sm tracking-wide text-accent">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>

      {children}
    </section>
  )
}
