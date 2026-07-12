import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkExperienceSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
