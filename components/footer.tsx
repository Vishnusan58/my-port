"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/data"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-black text-white py-8 text-center border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">Designed and Built with ❤️ by Vishnu S</p>
      </div>
    </motion.footer>
  )
}
