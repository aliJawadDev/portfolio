import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import Section from '../components/Section'
import { skills } from '../data/profile'
import { Code2 } from 'lucide-react'
const categoryNumbers = ['01', '02', '03', '04', '05', '06']

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="max-w-md text-sm leading-6 text-ink/60">
          Technologies, tools, and concepts I use to build things and solve
          problems.
        </p>

        <span className="shrink-0 font-mono text-xs tracking-widest text-accent/80">
          {String(skills.length).padStart(2, '0')} CATEGORIES
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <GlassCard
            key={s.group}
            delay={0.08 * (i % 3)}
            className="group relative overflow-hidden !p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
          >
            <div className="mb-6 flex items-start justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-accent/70">
                /{categoryNumbers[i % categoryNumbers.length]}
              </span>

              <motion.span
                className="text-ink/30 transition-colors duration-300 group-hover:text-accent"
                whileHover={{ rotate: 45, scale: 1.15 }}
                transition={{ duration: 0.25 }}
              >
                <Code2 size={20} strokeWidth={1.5} aria-hidden="true" />
              </motion.span>
            </div>

            <h3 className="text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
              {s.group}
            </h3>

            <div className="my-4 h-px w-full bg-gradient-to-r from-accent/40 via-white/10 to-transparent" />

            <div className="flex flex-wrap gap-2">
              {s.items.map((item, j) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.04 * j }}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-ink/70 transition-all duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-ink"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-accent/[0.06] blur-3xl transition-all duration-500 group-hover:bg-accent/[0.14]" />
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}