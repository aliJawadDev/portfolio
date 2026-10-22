
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type TrailPoint = {
  id: number
  x: number
  y: number
}

export default function CursorEffects() {
  const [trail, setTrail] = useState<TrailPoint[]>([])

  useEffect(() => {
    let id = 0
    let lastPoint = 0

    const handleMove = (event: MouseEvent) => {
      const now = performance.now()

      if (now - lastPoint < 18) return
      lastPoint = now

      const point: TrailPoint = {
        id: id++,
        x: event.clientX,
        y: event.clientY,
      }

      setTrail((current) => [...current.slice(-12), point])
    }

    window.addEventListener('mousemove', handleMove)

    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {trail.map((point) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 0.15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onAnimationComplete={() =>
            setTrail((current) =>
              current.filter((item) => item.id !== point.id),
            )
          }
          className="absolute rounded-full"
          style={{
            left: point.x,
            top: point.y,
            width: 22,
            height: 22,
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(147,197,253,0.8) 0%, rgba(96,165,250,0.35) 35%, transparent 75%)',
            filter: 'blur(5px)',
            boxShadow: '0 0 14px 5px rgba(59,130,246,0.18)',
          }}
        />
      ))}
    </div>
  )
}
