import { useEffect } from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import CVSection from '@/components/portfolio/CVSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import PersonalSection from '@/components/portfolio/PersonalSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CVSection />
        <ProjectsSection />
        <PersonalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;