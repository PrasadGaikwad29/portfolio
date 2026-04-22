import React from 'react'
import { motion } from 'framer-motion'
import { useSectionObserver } from '../../hooks/useSectionObserver'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function Hero() {
  const sectionRef = useSectionObserver('home')

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background — layered dark cinematic look */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229,9,20,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229,9,20,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Red glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-red-800/10 rounded-full blur-2xl" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark via-netflix-dark/80 to-netflix-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-netflix-dark/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Tag line */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-accent" />
            <span className="font-body text-sm tracking-[0.3em] text-accent uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-widest mb-4"
          >
            Prasad
            <br />
            <span className="text-gradient">Gaikwad</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-netflix-gray mb-4 max-w-xl leading-relaxed"
          >
            Building scalable, production-ready web applications with{" "}
            <span className="text-white font-medium">
              MongoDB · Express · React · Node
            </span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm text-netflix-gray/70 mb-10 tracking-widest"
          >
            {"> turning ideas into experiences, one commit at a time"}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("#projects")}
              className="btn-primary text-base flex items-center gap-2"
            >
              <span>▶</span> View Projects
            </button>
            <a
              href="https://onedrive.live.com/?viewid=1d8f2b9c%2Db817%2D49cf%2D917c%2D99ac7a0bbd42&username=prasadgaikwad099%40gmail%2Ecom&id=%2Fpersonal%2F1f26b2f43d4ecf63%2FDocuments%2FPrasad%20Gaikwad%20%2D%20Full%20Stack%20Developer%2Epdf&parent=%2Fpersonal%2F1f26b2f43d4ecf63%2FDocuments"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base"
            >
              Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-10 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: "15+", label: "Projects Built" },
              { value: "2+", label: "Year Experience" },
              { value: "10+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-sans text-3xl text-white tracking-widest">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-netflix-gray tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-body text-xs text-netflix-gray/50 tracking-widest uppercase"></span>
        <div />
      </motion.div>
    </section>
  );
}

export default Hero
