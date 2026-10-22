
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  noPadding?: boolean
}

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  noPadding = false,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cards = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[data-glass-glow-card]',
        ),
      )

      let nearestDistance = Infinity

      // Find the card whose rectangle is closest to the cursor.
      for (const card of cards) {
        const rect = card.getBoundingClientRect()
        const px = Math.max(
          rect.left,
          Math.min(event.clientX, rect.right),
        )
        const py = Math.max(
          rect.top,
          Math.min(event.clientY, rect.bottom),
        )
        const dx = event.clientX - px
        const dy = event.clientY - py
        const distance = dx * dx + dy * dy

        if (distance < nearestDistance) {
          nearestDistance = distance
        }
      }

      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()

      const mouseX = event.clientX
      const mouseY = event.clientY

      const closestX = Math.max(
        rect.left,
        Math.min(mouseX, rect.right),
      )
      const closestY = Math.max(
        rect.top,
        Math.min(mouseY, rect.bottom),
      )

      const dx = mouseX - closestX
      const dy = mouseY - closestY

      const distance = Math.sqrt(dx * dx + dy * dy)
      const activationDistance = 100

      setActive(distance <= activationDistance)

      if (distance > activationDistance) return

      const x = closestX - rect.left
      const y = closestY - rect.top

      setPointer({ x, y })
    }

    const handleMouseLeaveWindow = () => setActive(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeaveWindow)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener(
        'mouseleave',
        handleMouseLeaveWindow,
      )
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      data-glass-glow-card
      className={`glass relative rounded-3xl ${
        noPadding ? '' : 'p-8'
      } ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {/* Thin border-only highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 ease-out"
        style={{
          opacity: active ? 1 : 0,
          padding: '1.5px',
          background: `radial-gradient(
            120px circle at ${pointer.x}px ${pointer.y}px,
            rgba(124, 156, 255, 0.95) 0%,
            rgba(59, 75, 122, 0.75) 25%,
            transparent 70%
          )`,
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {children}
    </motion.div>
  )
}
