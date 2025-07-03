"use client"
import { portfolioData } from "@/lib/data"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar" // Import Navbar
import Footer from "@/components/footer" // Import Footer

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <ExperienceSection data={portfolioData} />
        <ProjectsSection data={portfolioData} />
        <SkillsSection data={portfolioData} />
        <ContactSection data={portfolioData} />
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  )
}
