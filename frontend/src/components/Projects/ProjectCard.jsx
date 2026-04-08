import React, { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { HiExternalLink } from 'react-icons/hi'

// Lazy-loaded image with skeleton fallback
function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-full">
      {/* Skeleton shown while loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 skeleton rounded-t-xl" />
      )}
      {error ? (
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center rounded-t-xl">
          <span className="text-netflix-gray text-xs">No image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover rounded-t-xl transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}

// Single Project Card — memoized to avoid unnecessary re-renders
const ProjectCard = memo(function ProjectCard({ project, size = 'normal' }) {
  const isLarge = size === 'large'

  return (
    <motion.article
      whileHover={{ scale: 1.04, zIndex: 10 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative flex-shrink-0 rounded-xl overflow-hidden glass border border-white/5 group cursor-default ${
        isLarge ? 'w-80 h-56' : 'w-64 h-44'
      }`}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      {/* Project Image */}
      <div className={`w-full ${isLarge ? 'h-36' : 'h-24'} overflow-hidden`}>
        <LazyImage src={project.image} alt={`${project.title} screenshot`} />
      </div>

      {/* Always-visible info */}
      <div className="p-3">
        <h3 className="font-body font-medium text-white text-sm truncate">{project.title}</h3>
        <div className="flex flex-wrap gap-1 mt-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[10px] font-mono text-netflix-gray">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center gap-3 p-4"
      >
        <h3 className="font-body font-medium text-white text-sm text-center">{project.title}</h3>
        <p className="font-body text-xs text-netflix-gray/90 text-center line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-3 mt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-body bg-accent hover:bg-red-700 text-white px-3 py-1.5 rounded transition-colors"
            aria-label={`Live demo of ${project.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <HiExternalLink size={13} /> Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-body border border-white/30 hover:bg-white/10 text-white px-3 py-1.5 rounded transition-colors"
            aria-label={`GitHub repo of ${project.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <SiGithub size={12} /> Code
          </a>
        </div>
      </motion.div>
    </motion.article>
  )
})

export default ProjectCard
