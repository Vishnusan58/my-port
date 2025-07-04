"use client";

import SplineScene from "@/components/spline-scene";
import { motion } from "framer-motion";
import type { PortfolioData } from "@/lib/data";

interface HeroSectionProps {
  data: PortfolioData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { name, tagline } = data;

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Full-screen Spline background */}
      <SplineScene
        scene="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode"
        className="absolute inset-0"
        style={{ opacity: 1 }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-4"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl max-w-2xl"
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
}
