"use client"

import { motion } from "framer-motion"
import type { PortfolioData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SplineScene from "@/components/spline-scene"

interface ContactSectionProps {
  data: PortfolioData
}

export default function ContactSection({ data }: ContactSectionProps) {
  const { contact, cvUrl } = data

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
    <section id="contact" className="relative min-h-screen w-full py-20 flex items-center justify-center overflow-hidden">
      {/* Full-screen Spline background */}
      <SplineScene
        scene="https://prod.spline.design/tJ8iMUOzO6VssVjL/scene.splinecode"
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
          Get In Touch
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {contact.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <item.icon className="w-8 h-8 text-white" />
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-white/90 hover:text-white transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white/90">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Button
            asChild
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-3 text-lg font-semibold"
          >
            <a href={cvUrl} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
