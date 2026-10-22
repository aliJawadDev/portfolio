
import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import Section from '../components/Section'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [emailProvider, setEmailProvider] = useState<'gmail' | 'outlook'>('gmail')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit: React.ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault()

    const params = new URLSearchParams({
      to: profile.email,
      subject: form.subject,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    })

    const url =
      emailProvider === 'gmail'
        ? `https://mail.google.com/mail/?view=cm&fs=1&${params}`
        : `https://outlook.office.com/mail/deeplink/compose?${params}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const fieldClass =
    'w-full rounded-xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-accent/60 focus:ring-1 focus:ring-accent/20'

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Introduction */}
        <GlassCard className="flex flex-col justify-between !p-7 sm:!p-9">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Open to opportunities
            </span>

            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Have a project
              <br />
              in mind?
            </h3>

            <p className="mt-4 text-sm leading-7 text-ink/60">
              I'm interested in internships, working-student roles, and
              projects involving automotive software, embedded systems,
              and IoT. If you have an opportunity or an idea, I'd love to
              hear from you.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/35">
                Based in
              </p>
              <p className="mt-1 text-sm text-ink/80">{profile.location}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/35">
                Email me directly
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 inline-block break-all text-sm text-accent transition hover:text-ink"
              >
                {profile.email} ↗
              </a>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink/65 transition hover:text-accent"
            >
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </GlassCard>

        {/* Contact form */}
        <GlassCard className="!p-6 sm:!p-9">
          <div className="mb-7">
            <p className="font-mono text-xs tracking-widest text-accent/70">
              SEND A MESSAGE
            </p>
            <h3 className="mt-2 text-xl font-semibold text-ink">
              Let's start a conversation.
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs text-ink/65"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs text-ink/65"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs text-ink/65"
              >
                What is this about?
              </label>
              <input
                id="contact-subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Internship, collaboration, project..."
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs text-ink/65"
              >
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a little about what you have in mind..."
                className={`${fieldClass} min-h-36 resize-y`}
              />
            </div>

            <div>
              <label className="mb-3 block text-xs text-ink/65">
                Choose how to send your message
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setEmailProvider('gmail')}
                  className={`rounded-xl border px-4 py-3 text-sm transition ${emailProvider === 'gmail'
                    ? 'border-accent/60 bg-accent/10 text-ink'
                    : 'border-white/10 text-ink/60 hover:bg-white/5'
                    }`}
                >
                  <span className="block font-medium">Gmail</span>
                  <span className="mt-1 block text-xs opacity-60">Google Mail</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEmailProvider('outlook')}
                  className={`rounded-xl border px-4 py-3 text-sm transition ${emailProvider === 'outlook'
                    ? 'border-accent/60 bg-accent/10 text-ink'
                    : 'border-white/10 text-ink/60 hover:bg-white/5'
                    }`}
                >
                  <span className="block font-medium">Outlook</span>
                  <span className="mt-1 block text-xs opacity-60">Microsoft Mail</span>
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-night transition hover:brightness-110 sm:w-auto"
            >
              Prepare message <span aria-hidden="true">↗</span>
            </motion.button>

            <p className="text-xs leading-5 text-ink/35">
              Submitting opens your default email application with your
              message prepared. Nothing is sent automatically.
            </p>
          </form>
        </GlassCard>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-xs text-ink/35 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <p>Designed with intention. Built with curiosity.</p>
      </div>
    </Section>
  )
}