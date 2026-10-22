import GlassCard from '../components/GlassCard'
import Section from '../components/Section'
import { education, languages } from '../data/profile'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I learn">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <GlassCard key={e.title} delay={0.08 * i}>
            <p className="text-sm text-ink/60">{e.period}</p>
            <h3 className="mt-1 text-xl font-medium">{e.title}</h3>
            <p className="text-sm text-accent">{e.org}</p>
            <p className="mt-4 text-ink/75">{e.detail}</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mt-5 p-6">
        <h3 className="text-base font-medium">Languages</h3>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {languages.map((l) => (
            <div key={l.name}>
              <span className="text-ink">{l.name}</span>
              <span className="ml-2 text-sm text-ink/60">{l.level}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </Section>
  )
}
