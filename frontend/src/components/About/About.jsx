import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useSectionObserver } from '../../hooks/useSectionObserver'

function About() {
  const sectionRef = useSectionObserver('about')
  const { ref: animRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative"
      aria-label="About me"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-netflix-dark via-black/50 to-netflix-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={animRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left — Text */}
          <div>
            <motion.p
              variants={itemVariants}
              className="section-subtitle"
            >
              Get to know me
            </motion.p>
            <motion.h2 variants={itemVariants} className="section-title">
              About Me
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-netflix-gray/90 font-body leading-relaxed"
            >
              <p>
                I’m a{" "}
                <span className="text-white font-medium">
                  Full Stack MERN Developer
                </span>{" "}
                who turns caffeine, bugs, and questionable life decisions into
                fully functional web applications.
              </p>

              <p>
                I build{" "}
                <span className="text-white font-medium">
                  end-to-end systems
                </span>{" "}
                — from designing scalable APIs with{" "}
                <span className="text-white font-medium">
                  Node.js & Express
                </span>{" "}
                to crafting responsive, high-performance UIs in{" "}
                <span className="text-white font-medium">React</span>. Not just
                pretty interfaces, but applications that actually work in
                production.
              </p>

              <p>
                I’ve wrestled with{" "}
                <span className="text-white font-medium">CORS</span>, survived
                deployment bugs, debugged things that made no sense at 2 AM —
                and somehow made it all work.
              </p>

              <p>
                When I’m not coding, I’m either leveling up my system design
                skills, exploring new technologies, or convincing myself{" "}
                <span className="text-white font-medium">
                  “just one more feature”
                </span>{" "}
                won’t take 3 hours.
              </p>

              <p>
                Currently looking for opportunities where I can{" "}
                <span className="text-white font-medium">
                  learn, build, break, fix, and ship real products
                </span>
                .
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 flex gap-4">
              <a
                href="https://onedrive.live.com/?viewid=1d8f2b9c%2Db817%2D49cf%2D917c%2D99ac7a0bbd42&username=prasadgaikwad099%40gmail%2Ecom&id=%2Fpersonal%2F1f26b2f43d4ecf63%2FDocuments%2FPrasadGaikwadResume%2Epdf&parent=%2Fpersonal%2F1f26b2f43d4ecf63%2FDocuments"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/prasadGaikwad29"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Visit GitHub profile"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right — Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: "💻",
                title: "Frontend",
                desc: "React, JavaScript, Tailwind, Framer Motion",
              },
              {
                icon: "⚙️",
                title: "Backend",
                desc: "Node.js, Express, REST APIs",
              },
              { icon: "🗄️", title: "Database", desc: "MongoDB, Mongoose, SQL" },
              {
                icon: "🚀",
                title: "DevOps",
                desc: "Docker, Git, Vercel, Render",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ scale: 1.03, borderColor: "rgba(229,9,20,0.5)" }}
                className="glass rounded-lg p-5 transition-all duration-300 cursor-default"
              >
                <span
                  className="text-2xl mb-3 block"
                  role="img"
                  aria-label={card.title}
                >
                  {card.icon}
                </span>
                <h3 className="font-body font-medium text-white text-sm mb-1">
                  {card.title}
                </h3>
                <p className="font-body text-xs text-netflix-gray/80 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About
