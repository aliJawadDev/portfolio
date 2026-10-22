
import GlassCard from '../components/GlassCard'
import Section from '../components/Section'
import { about, mindset } from '../data/profile'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Different problems. Same way of thinking."
    >
      {/* About me and stats */}
      <div className="grid gap-5 md:grid-cols-5">
        <GlassCard className="md:col-span-3">
          <div className="space-y-4 text-ink/75">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 gap-5 md:col-span-2">
          {about.stats.map((stat, index) => (
            <GlassCard
              key={stat.label}
              delay={0.08 * index}
              className="flex flex-col justify-center p-6"
            >
              <div className="text-3xl font-medium text-accent">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-ink/70">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Problem-solving mindset */}
      <div className="mt-16">
        <GlassCard >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How I Approach Problems
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Every problem has a flow.
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Whether I&apos;m building software, working with connected
            devices, or processing data, I break complex problems
            into three steps: understand the input, process the
            data, and deliver the output.
          </p>
        </GlassCard>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {mindset.map((item, index) => (
            <GlassCard
              key={item.step}
              delay={index * 0.12}
              className="group border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-widest text-accent">
                  STEP {item.step}
                </span>

                <span className="text-2xl text-accent/70 transition-transform duration-300 group-hover:scale-110">
                  {index === 0 ? '↓' : index === 1 ? '⟳' : '↗'}
                </span>
              </div>

              <h4 className="mt-6 text-xl font-medium text-ink">
                {item.title}
              </h4>

              <p className="mt-2 text-sm font-medium text-ink/90">
                {item.question}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-6 text-center text-sm text-accent">
          Different systems. Different challenges. One way of thinking.
        </GlassCard>
      </div>
    </Section >
  )
}
