"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const sections = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "contact", name: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      } py-4 px-8`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#hero"
          onClick={() => scrollToSection("hero")}
          className="text-white text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {portfolioData.name.split(" ")[0]}
        </motion.a>
        <ul className="flex items-center space-x-6">
          {sections.map((section) => (
            <motion.li
              key={section.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + sections.indexOf(section) * 0.1, duration: 0.3 }}
            >
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section.id)
                }}
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200"
              >
                {section.name}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + sections.length * 0.1, duration: 0.3 }}
          >
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white text-white hover:bg-white hover:text-black transition-colors duration-300 bg-transparent"
            >
              <a href={portfolioData.cvUrl} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  )
}
