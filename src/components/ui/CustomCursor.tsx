 
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(!!target.closest('a, button, .hover-effect'))
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', updateHover)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', updateHover)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-50"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      >
        <div className="w-full h-full border border-white/20 rounded-full" />
      </motion.div>
    </>
  )
}