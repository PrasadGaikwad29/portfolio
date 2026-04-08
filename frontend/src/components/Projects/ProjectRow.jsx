import React, { useRef, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

// Netflix-style horizontal scrollable row with arrow buttons
const ProjectRow = memo(function ProjectRow({ title, projects, cardSize }) {
  const scrollRef = useRef(null)

  const scroll = useCallback((direction) => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -360 : 360
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }, [])

  return (
    <div className="mb-12">
      {/* Row Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-5"
      >
        <span className="h-5 w-1 bg-accent rounded-sm" />
        <h3 className="font-body font-medium text-white text-lg tracking-wide">{title}</h3>
        {/* <span className="font-body text-xs text-netflix-gray ml-1">
          ({projects.length} projects)
        </span> */}
      </motion.div>

      {/* Scroll wrapper — relative for arrow buttons */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-3 bg-black/80 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/10 hover:scale-110"
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Fade edge — left */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-netflix-dark to-transparent z-10 pointer-events-none" />

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="scroll-container"
          role="list"
          aria-label={`${title} projects list`}
        >
          {projects.map((project) => (
            <div key={project.id} role="listitem">
              <ProjectCard project={project} size={cardSize} />
            </div>
          ))}
        </div>

        {/* Fade edge — right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-netflix-dark to-transparent z-10 pointer-events-none" />

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-3 bg-black/80 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/10 hover:scale-110"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  )
})

export default ProjectRow
