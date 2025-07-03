"use client"

import { motion } from "framer-motion"
import type { PortfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image" // Import Image component

interface ProjectsSectionProps {
  data: PortfolioData
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  const { projects } = data

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="min-h-screen w-full py-20 flex items-center justify-center bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between border-gray-300 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  <p className="text-md text-gray-600">
                    {project.category} | {project.duration}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-left text-gray-800 text-lg mb-4">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">Technologies:</p>
                    <p className="text-sm text-gray-600">{project.technologies.join(", ")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
