"use client"

import { motion } from "framer-motion"
import Image from "next/image" // Import Image component
import type { PortfolioData } from "@/lib/data"

interface AboutSectionProps {
  data: PortfolioData
}

export default function AboutSection({ data }: AboutSectionProps) {
  const { name, education, profilePicture } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="min-h-screen w-full py-20 flex items-center justify-center bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {profilePicture && (
            <motion.div variants={itemVariants} className="mb-8">
              <Image
                src={profilePicture || "/placeholder.svg"}
                alt={`${name}'s profile picture`}
                width={200}
                height={200}
                className="rounded-full mx-auto object-cover border-4 border-gray-200 shadow-lg"
              />
            </motion.div>
          )}
          <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed">
            Hello! I'm <span className="font-semibold">{name}</span>, a passionate AI and Data Science enthusiast based
            in Chennai. My journey involves exploring the depths of Large Language Models (LLMs), vector databases, and
            advanced AI techniques to build intelligent and impactful solutions.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed">
            I thrive on transforming complex data into actionable insights and developing cutting-edge applications that
            leverage the power of Artificial Intelligence.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-3xl font-bold mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-4">
                <p className="text-xl font-semibold">{edu.institution}</p>
                <p className="text-lg text-gray-700">{edu.degree}</p>
                <p className="text-md text-gray-600">
                  {edu.duration} | {edu.location}
                </p>
                {edu.details.map((detail, i) => (
                  <p key={i} className="text-md text-gray-600">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
