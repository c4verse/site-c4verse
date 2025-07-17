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
    // Smooth scroll behavior for anchor links
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

    // Smooth scroll on wheel event for section-by-section scrolling
    let isScrolling = false;
    const sections = ['#home', '#services', '#vision', '#testimonials', '#process'];
    let currentSectionIndex = 0;

    const handleWheelScroll = (e: WheelEvent) => {
      // Only enable section-by-section scrolling on desktop
      if (window.innerWidth < 1024) return;
      
      if (isScrolling) return;
      
      e.preventDefault();
      isScrolling = true;

      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scroll down
        currentSectionIndex++;
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        // Scroll up
        currentSectionIndex--;
      }

      const targetSection = document.querySelector(sections[currentSectionIndex]);
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }

      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    // Update current section index based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((selector, index) => {
        const element = document.querySelector(selector) as HTMLElement;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSectionIndex = index;
          }
        }
      });
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Add scroll listeners
    window.addEventListener('wheel', handleWheelScroll, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });

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
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('wheel', handleWheelScroll);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
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
