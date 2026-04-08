import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useSectionObserver } from '../../hooks/useSectionObserver'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiRedis,
  SiGit, SiDocker, SiPostman, SiVercel, SiGithub, SiMysql, SiRender,
} from 'react-icons/si'

const techGroups = [
  {
    label: "Frontend",
    color: "#61DAFB",
    techs: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    ],
  },
  {
    label: "Backend",
    color: "#68A063",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: SiMysql, color: "#DC382D" },
    ],
  },
  {
    label: "Tools & DevOps",
    color: "#F05033",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05033" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Render", icon: SiRender, color: "#ffffff" },
    ],
  },
];

// Individual tech icon card — memoized to avoid re-renders
const TechCard = memo(function TechCard({ tech, index }) {
  const Icon = tech.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="flex flex-col items-center gap-2 p-4 glass rounded-xl cursor-default group transition-all duration-300"
    >
      <Icon
        size={36}
        style={{ color: tech.color }}
        className="transition-transform duration-300 group-hover:scale-110"
        aria-label={tech.name}
      />
      <span className="font-body text-xs text-netflix-gray group-hover:text-white transition-colors tracking-wide">
        {tech.name}
      </span>
    </motion.div>
  )
})

function TechStack() {
  const sectionRef = useSectionObserver('techstack')
  const { ref: animRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="techstack"
      ref={sectionRef}
      className="py-24"
      aria-label="Technology stack"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={animRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title mb-16">Tech Stack</h2>

          <div className="space-y-12">
            {techGroups.map((group) => (
              <div key={group.label}>
                {/* Group label */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="h-px w-8"
                    style={{ backgroundColor: group.color }}
                  />
                  <span
                    className="font-body text-xs tracking-[0.25em] uppercase font-medium"
                    style={{ color: group.color }}
                  >
                    {group.label}
                  </span>
                </div>

                {/* Tech grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {group.techs.map((tech, i) => (
                    <TechCard key={tech.name} tech={tech} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
