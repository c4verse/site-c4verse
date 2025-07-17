
import React from 'react';

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToProcess = () => {
    const processSection = document.querySelector('#process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-c4-accent/30 to-c4-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-c4-primary/20 to-c4-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center z-10 py-8 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-c4-text mb-4 sm:mb-6 leading-tight">
          Empowering{' '}
          <span className="bg-white/80 text-c4-primary px-4 py-1 rounded-2xl">
            Creators
          </span>{' '}
          with{' '}
          <span className="bg-white/80 text-c4-primary px-4 py-1 rounded-2xl">
            AI-Driven Innovation
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl lg:max-w-4xl mx-auto mb-6 sm:mb-8 font-roboto leading-relaxed px-2">
          Unite AI tools, community collaboration, and expert services to elevate content and business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
          <button 
            onClick={scrollToProcess}
            className="bg-c4-primary text-white px-8 py-4 rounded-lg font-roboto font-medium hover:bg-c4-primary/90 transition-all duration-200 w-full sm:w-auto"
          >
            Get Started
          </button>
          <button 
            onClick={scrollToServices}
            className="border-2 border-c4-primary text-c4-primary px-8 py-4 rounded-lg font-roboto font-medium hover:bg-c4-primary hover:text-white transition-all duration-200 w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
