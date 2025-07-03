"use client"

import { motion } from "framer-motion"
import type { PortfolioData } from "@/lib/data"

interface SkillsSectionProps {
  data: PortfolioData
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  const { coreCompetencies, programmingLanguages, certifications } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="min-h-screen w-full py-20 flex items-center justify-center bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12"
        >
          Skills & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold mb-6">Core Competencies</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
              {coreCompetencies.map((skill, index) => (
                <motion.li key={index} variants={itemVariants}>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold mb-6">Programming & Technologies</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
              {programmingLanguages.map((lang, index) => (
                <motion.li key={index} variants={itemVariants}>
                  {lang}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-left"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Specializations & Certifications</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-200 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.li key={index} variants={itemVariants}>
                {cert}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
