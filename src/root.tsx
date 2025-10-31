import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import { Providers } from '@/components/Providers'
import CustomCursor from '@/components/CustomCursor'

export default function App() {
  return (
    <Providers>
      <CustomCursor />
      <Navbar />
      <main className="pt-14">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </Providers>
  )
}


