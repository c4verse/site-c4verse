import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import VisionSection from '../components/VisionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessSection from '../components/ProcessSection';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Simplified scroll setup for debugging
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Add event listeners to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-c4-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <VisionSection />
        <TestimonialsSection />
        <ProcessSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
