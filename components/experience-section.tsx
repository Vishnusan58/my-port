"use client"

import { motion } from "framer-motion"
import type { PortfolioData } from "@/lib/data"
import SplineScene from "@/components/spline-scene"

interface ExperienceSectionProps {
  data: PortfolioData
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  const { professionalExperience } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="relative min-h-screen w-full py-20 flex items-center justify-center overflow-hidden">
      {/* Full-screen Spline background */}
      <SplineScene
        scene="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode"
        className="absolute inset-0"
        style={{ opacity: 1 }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {professionalExperience.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg shadow-lg text-left hover:bg-white/20 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-2 text-white">{exp.role}</h3>
              <p className="text-xl text-white/90 mb-1">{exp.company}</p>
              <p className="text-lg text-white/70 mb-4">{exp.duration} | {exp.location}</p>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm leading-relaxed">{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
