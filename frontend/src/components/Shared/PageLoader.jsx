import React from 'react'
import { motion } from 'framer-motion'

function PageLoader() {
  return (
    <div
      className="min-h-screen bg-netflix-dark flex flex-col items-center justify-center gap-6"
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Animated logo */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="font-sans text-4xl text-accent tracking-widest"
      >
        Prasad Gaikwad
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default PageLoader
