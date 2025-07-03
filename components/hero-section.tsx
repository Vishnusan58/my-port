"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import type { PortfolioData } from "@/lib/data"
import SphereBackground from "@/components/sphere-background"

interface HeroSectionProps {
  data: PortfolioData
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { name, tagline } = data

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center bg-black text-white overflow-hidden"
    >
      <SphereBackground />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">{name}</h1>
        <p className="text-xl md:text-3xl text-gray-300 max-w-2xl mb-8">{tagline}</p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-black transition-colors duration-300 bg-transparent"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Work <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <ArrowDown className="h-8 w-8 text-white" />
          <span className="text-sm text-white mt-2">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
