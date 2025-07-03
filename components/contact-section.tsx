"use client"

import { motion } from "framer-motion"
import type { PortfolioData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button" // Import Button

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
    <section id="contact" className="min-h-screen w-full py-20 flex items-center justify-center bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
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
              <Card className="h-full border-gray-300 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <item.icon className="h-10 w-10 mb-4 text-gray-800" />
                  <p className="text-xl font-semibold mb-2">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-gray-700">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12"
        >
          <Button
            asChild
            className="rounded-full px-8 py-6 text-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
          >
            <a href={cvUrl} target="_blank" rel="noopener noreferrer">
              Download My CV
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
