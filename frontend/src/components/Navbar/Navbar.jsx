import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNavScrolled } from '../../store/slices/uiSlice'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const dispatch = useDispatch()
  const { activeSection, isNavScrolled } = useSelector((state) => state.ui)

  // Track scroll position to add background blur on scroll
  const handleScroll = useCallback(() => {
    dispatch(setNavScrolled(window.scrollY > 50))
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Smooth scroll to section
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isNavScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="font-sans text-2xl text-accent tracking-widest hover:text-red-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to home"
          >
            Prasad<span className="text-white">Gaikwad</span>
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`font-body text-sm tracking-wider transition-all duration-300 relative pb-1 ${
                      isActive
                        ? "text-white"
                        : "text-netflix-gray hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {/* Active underline indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Resume Button */}
          <a
            href="https://onedrive.live.com/?viewid=1d8f2b9c%2Db817%2D49cf%2D917c%2D99ac7a0bbd42&username=prasadgaikwad099%40gmail%2Ecom&id=%2Fpersonal%2F1f26b2f43d4ecf63%2FDocuments%2FPrasad%20Gaikwad%20%2D%20Full%20Stack%20Developer%2Epdf&parent=%2Fpersonal%2F1f26b2f43d4ecf63%2FDocuments"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary text-sm"
            aria-label="Open Resume PDF in new tab"
          >
            Resume
          </a>

          {/* Mobile menu — simple icon toggle */}
          <MobileMenu
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />
        </div>
      </div>
    </motion.nav>
  );
}

// Mobile Menu Component
function MobileMenu({ scrollToSection, activeSection }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-2"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <div className="w-6 space-y-1.5">
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-full bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-full bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-full bg-white"
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      scrollToSection(e, link.href);
                      setOpen(false);
                    }}
                    className={`block font-body text-sm tracking-wider py-2 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-accent"
                        : "text-netflix-gray"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://onedrive.live.com/?viewid=1d8f2b9c%2Db817%2D49cf%2D917c%2D99ac7a0bbd42&username=prasadgaikwad099%40gmail%2Ecom&id=%2Fpersonal%2F1f26b2f43d4ecf63%2FDocuments%2FPrasadGaikwadResume%2Epdf&parent=%2Fpersonal%2F1f26b2f43d4ecf63%2FDocuments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm inline-block"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default React.memo(Navbar)
