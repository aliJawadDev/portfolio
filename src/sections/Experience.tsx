import GlassCard from '../components/GlassCard'
import Section from '../components/Section'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have worked">
      <div className="space-y-5">
        {experience.map((e) => (
          <GlassCard key={e.title + e.period}>
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-medium">{e.title}</h3>
                <p className="text-sm text-accent">
                  {e.org} · {e.place}
                </p>
              </div>
              <p className="text-sm text-ink/60">{e.period}</p>
            </div>
            <ul className="mt-5 space-y-2.5 text-ink/75">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
