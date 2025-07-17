import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';

const CTABanner = () => {
  const { theme = 'light' } = useTheme();
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Glass background with 3D border effect */}
      <div className="absolute inset-4 bg-gradient-to-r from-c4-primary/10 to-c4-accent/10 backdrop-blur-sm border border-c4-primary/20 shadow-2xl shadow-c4-primary/10 rounded-2xl"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-c4-primary/5 rounded-full -translate-y-48 translate-x-48 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-c4-accent/5 rounded-full translate-y-32 -translate-x-40 blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6">
          Ready to Transform Your Content & Business?
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-roboto">
          Join thousands of creators and businesses already accelerating their growth with C4Verse
        </p>
        
        <div className="flex flex-col gap-4 justify-center items-center">
          <Link to="/contact">
            <button
              className={`bg-c4-primary px-8 py-4 rounded-lg font-roboto font-semibold hover:bg-c4-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-c4-primary/25 border border-c4-primary/30 ${
                theme === 'dark' ? 'text-white' : 'text-primary-foreground'
              }`}
            >
              Get Your Free Consultation
            </button>
          </Link>
          <button 
            onClick={scrollToServices}
            className="border-2 border-c4-primary text-c4-primary px-5 py-2 rounded-md font-roboto font-normal text-base hover:bg-c4-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105 mt-2 backdrop-blur-sm"
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
