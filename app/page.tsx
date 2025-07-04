"use client"
import { portfolioData } from "@/lib/data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UnifiedPortfolio from "@/components/unified-portfolio"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <UnifiedPortfolio data={portfolioData} />
      </main>
      <Footer />
    </div>
  )
}
