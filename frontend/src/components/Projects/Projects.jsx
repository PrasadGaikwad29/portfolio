import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useSectionObserver } from '../../hooks/useSectionObserver'
import { mainProjects, miniProjects } from '../../utils/projectsData'
import ProjectRow from './ProjectRow'

function Projects() {
  const sectionRef = useSectionObserver('projects')
  const { ref: animRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  // Memoize so arrays aren't recreated on every render
  const memoMainProjects = useMemo(() => mainProjects, [])
  const memoMiniProjects = useMemo(() => miniProjects, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24"
      aria-label="Projects showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={animRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title mb-16">Projects</h2>

          {/* Main Projects Row */}
          <ProjectRow
            title="Main Projects"
            projects={memoMainProjects}
            cardSize="large"
          />

          {/* Mini Projects Row */}
          <ProjectRow
            title="Mini Projects"
            projects={memoMiniProjects}
            cardSize="normal"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
