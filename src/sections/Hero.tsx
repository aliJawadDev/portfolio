
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, phrases } from '../data/profile'

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let delay = isDeleting ? 35 : 75

    if (!isDeleting && displayText === currentPhrase) {
      delay = 1600
    } else if (isDeleting && displayText === '') {
      delay = 350
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setIsDeleting(true)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1))
      } else {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1))
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex])

  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center py-28"
    >
      <motion.div
        className="glass max-w-2xl rounded-3xl p-10 md:p-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm tracking-wide text-accent">
          Hello, I am
        </p>

        <h1 className="mt-3 min-h-[2.4em] text-4xl font-medium tracking-tight md:text-6xl">
          <span className="text-ink">{displayText}</span>
          <span
            className="ml-1 inline-block animate-pulse text-accent"
            aria-hidden="true"
          >
            |
          </span>
        </h1>

        <p className="mt-4 text-ink/70">{profile.intro}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/12 px-3 py-1 text-xs text-ink/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#experience"
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-night transition hover:brightness-110"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 px-5 py-2.5 text-sm text-ink transition hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}
