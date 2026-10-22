import { motion } from 'framer-motion'
import { nav, profile } from '../data/profile'

export default function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="glass flex items-center gap-1 rounded-full px-3 py-2">
        <a href="#top" className="px-3 text-sm font-medium text-ink">
          {profile.name}
        </a>
        <span className="mx-1 hidden h-4 w-px bg-white/15 md:block" />
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="hidden rounded-full px-3 py-1.5 text-sm text-ink/70 transition hover:bg-white/5 hover:text-ink md:block"
          >
            {n.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
