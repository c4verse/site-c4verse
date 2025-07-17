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
