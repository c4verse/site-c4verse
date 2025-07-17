import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';
import ContactFormSection from '../components/ContactFormSection';
import { Toaster } from '@/components/ui/toaster';

const Contact = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-c4-background">
      <Header />
      <main>
        <ContactHero />
        <ContactFormSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Contact;
