import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import TechStackSection from '@/components/TechStackSection';
import CurrentlyLearningSection from '@/components/CurrentlyLearningSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="min-w-0 overflow-x-clip bg-background">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TechStackSection />
        <CurrentlyLearningSection />
        <WorkExperienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}


