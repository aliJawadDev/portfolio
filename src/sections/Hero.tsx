import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

import { profile, phrases } from '../data/profile'
import GlassCard from '../components/GlassCard'

const terminalCode = `// A little about me
const myself = {
  focus: 'IoT & Software',
  builds: 'Real-world ideas',
  mindset: 'Everything is possible',
  approach: 'Structured problem solving'
}

// My engineering approach
const problemSolving = {
  step1: 'Identify the inputs',
  step2: 'Process the data',
  step3: 'Deliver the results'
}`

export default function Hero() {
  // Main heading typing effect
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!phrases.length) return

    const currentPhrase = phrases[phraseIndex]
    const finishedTyping = !isDeleting && displayText === currentPhrase
    const finishedDeleting = isDeleting && displayText === ''

    const delay = finishedTyping
      ? 1600
      : finishedDeleting
        ? 350
        : isDeleting
          ? 35
          : 75

    const timeout = window.setTimeout(() => {
      if (finishedTyping) {
        setIsDeleting(true)
      } else if (finishedDeleting) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1))
      } else {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1))
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex])

  // Type the entire terminal source code, character by character
  const [typedCode, setTypedCode] = useState('')
  const [terminalComplete, setTerminalComplete] = useState(false)

  useEffect(() => {
    let index = 0
    let timer: number

    const typeCharacter = () => {
      index += 1
      setTypedCode(terminalCode.slice(0, index))

      if (index < terminalCode.length) {
        timer = window.setTimeout(typeCharacter, 28)
      } else {
        setTerminalComplete(true)
      }
    }

    timer = window.setTimeout(typeCharacter, 500)

    return () => window.clearTimeout(timer)
  }, [])

  // Syntax highlighting for the visible terminal text
  const renderCodeLine = (line: string) => {
    const trimmed = line.trim()

    if (trimmed.startsWith('//')) {
      return <span className="text-ink/40">{line}</span>
    }

    const declarationMatch = line.match(
      /^(\s*)(const)(\s+)(myself|problemSolving)(\s*=\s*\{)?$/,
    )

    if (declarationMatch) {
      return (
        <>
          {declarationMatch[1]}
          <span className="text-purple-300">{declarationMatch[2]}</span>
          {declarationMatch[3]}
          <span className="text-sky-300">{declarationMatch[4]}</span>
          {declarationMatch[5]}
        </>
      )
    }

    const propertyMatch = line.match(/^(\s*)(\w+)(:)(.*)$/)

    if (propertyMatch) {
      const [, indentation, property, colon, rest] = propertyMatch
      const stringMatch = rest.match(/^(\s*)('.*?')(,?)$/)

      return (
        <>
          {indentation}
          <span className="text-accent">{property}</span>
          {colon}
          {stringMatch ? (
            <>
              {stringMatch[1]}
              <span className="text-emerald-300">
                {stringMatch[2]}
              </span>
              {stringMatch[3]}
            </>
          ) : (
            rest
          )}
        </>
      )
    }

    return <span className="text-ink/80">{line}</span>
  }

  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center gap-8 py-28"
    >
      {/* Main two-column hero */}
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Introduction */}
        <GlassCard className="max-w-2xl">
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
        </GlassCard>

        {/* Developer terminal */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <GlassCard noPadding  className="relative overflow-hidden rounded-2xl border border-white/10">
            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex select-none gap-1.5">
                {[
                  {
                    color: 'bg-red-400',
                    symbol: '×',
                    label: 'Close',
                  },
                  {
                    color: 'bg-yellow-400',
                    symbol: '−',
                    label: 'Minimize',
                  },
                  {
                    color: 'bg-green-400',
                    symbol: '+',
                    label: 'Zoom',
                  },
                ].map(({ color, symbol, label }) => (
                  <span
                    key={label}
                    aria-label={label}
                    className={`group/dot flex h-3 w-3 items-center justify-center rounded-full ${color} transition-shadow duration-200 hover:shadow-[0_0_8px_currentColor]`}
                  >
                    <span className="scale-0 text-[9px] font-bold leading-none text-black/70 transition-transform duration-150 group-hover/dot:scale-100">
                      {symbol}
                    </span>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs text-ink/50">
                <Terminal size={14} />
                <span>developer.tsx</span>
              </div>

              <span className="w-10" aria-hidden="true" />
            </div>

            {/* Full source-code typing effect */}
            <div className="p-5 sm:p-6">
              <div className="min-h-[360px] overflow-x-auto">
                <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-6 sm:text-sm">
                  <code>
                    {typedCode.split('\n').map((line, index, lines) => (
                      <span key={index}>
                        {renderCodeLine(line)}
                        {index < lines.length - 1 ? '\n' : ''}
                      </span>
                    ))}

                    {!terminalComplete && (
                      <span className="animate-pulse text-accent">▍</span>
                    )}
                  </code>
                </pre>
              </div>

              {/* Terminal status */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                <span className="text-ink/40">
                  {terminalComplete
                    ? 'All objects loaded'
                    : 'Writing code...'}
                </span>

                <span className="flex items-center gap-2 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  {terminalComplete ? 'Ready' : 'Typing'}
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section >
  )
}