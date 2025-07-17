
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import MissionVision from '../components/MissionVision';
import WhyC4Verse from '../components/WhyC4Verse';
import CorePillars from '../components/CorePillars';
import TeamSection from '../components/TeamSection';
import AboutCTA from '../components/AboutCTA';

const About = () => {
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
        <AboutHero />
        <MissionVision />
        <WhyC4Verse />
        <CorePillars />
        <TeamSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
