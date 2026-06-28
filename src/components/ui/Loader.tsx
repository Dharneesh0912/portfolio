 
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 1, ease: 'easeInOut' },
          }}
        >
          <div className="text-center">
            <motion.div
              className="relative w-24 h-24 mx-auto mb-8"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="absolute inset-0 border-4 border-accent/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent" />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Creative Studio
            </motion.h1>
            <motion.p
              className="text-muted mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Loading experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}