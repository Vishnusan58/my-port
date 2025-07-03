"use client"

import { motion } from "framer-motion"
import type { PortfolioData } from "@/lib/data"

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
    <section id="experience" className="min-h-screen w-full py-20 flex items-center justify-center bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
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
            <motion.div key={index} variants={itemVariants} className="bg-gray-900 p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-3xl font-bold mb-2">{exp.role}</h3>
              <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
              <p className="text-lg text-gray-400 mb-4">
                {exp.duration} | {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 text-lg">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
