
import React, { useEffect, useState } from 'react';
import { Sparkles, Zap, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show3D, setShow3D] = useState(true);
  
  // Typewriter effect state
  const words = ['Creators', 'Brands', 'Startups', 'Businesses', 'Innovators', 'Entrepreneurs'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  // const [isPaused, setIsPaused] = useState(false); // REMOVE

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1600); // Pause after word is fully typed
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      // Hide 3D elements when scrolling past 200px
      setShow3D(currentScrollY < 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const { theme = 'light' } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-c4-accent/30 to-c4-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-c4-primary/20 to-c4-accent/30 rounded-full blur-3xl"></div>
      </div>

      {/* 3D Floating Elements - Hidden on mobile */}
      <div className={`absolute inset-0 transition-opacity duration-1000 hidden lg:block ${show3D ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Original Floating Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-c4-primary to-c4-accent rounded-2xl shadow-2xl animate-float"
        >
          <div className="flex items-center justify-center h-full">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>

        <div 
          className="absolute top-1/6 right-1/3 w-20 h-20 bg-gradient-to-bl from-c4-accent to-c4-secondary rounded-full shadow-2xl animate-float"
          style={{ animationDelay: '2s' }}
        >
          <div className="flex items-center justify-center h-full">
            <Zap className="w-10 h-10 text-white" />
          </div>
        </div>

        <div 
          className="absolute bottom-1/3 left-1/6 w-14 h-14 bg-gradient-to-tr from-c4-secondary to-c4-primary rounded-xl shadow-2xl animate-float"
          style={{ animationDelay: '4s' }}
        >
          <div className="flex items-center justify-center h-full">
            <Globe className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* New 3D Elements based on your screenshots */}
        {/* Element 1: Rounded square with gradient */}
        <div 
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-c4-primary via-c4-accent to-c4-secondary rounded-3xl shadow-2xl animate-smooth-float"
          style={{ animationDelay: '1s' }}
        >
          <div className="absolute inset-2 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
        </div>

        {/* Element 2: Circular element with inner glow */}
        <div 
          className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-c4-accent to-c4-primary rounded-full shadow-2xl animate-gentle-spin"
          style={{ animationDelay: '3s' }}
        >
          <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
          <div className="absolute inset-4 bg-white/40 rounded-full"></div>
        </div>

        {/* Additional smaller elements */}
        <div 
          className="absolute top-1/2 right-1/5 w-8 h-8 bg-c4-accent/70 rounded-full shadow-lg animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-c4-primary/60 rounded-full shadow-lg animate-float"
          style={{ animationDelay: '3s' }}
        ></div>
        <div 
          className="absolute top-3/4 left-1/5 w-10 h-10 bg-c4-secondary/80 rounded-lg shadow-lg transform rotate-45 animate-rotate-3d"
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center z-10 py-8 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-c4-text mb-4 sm:mb-6 animate-fade-in leading-tight">
          Empowering{' '}
          <span className="inline-block text-left">
            <span
              className={`inline-block px-4 py-1 rounded-2xl transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-c4-background/80 text-c4-primary'
                  : 'bg-white/80 text-c4-primary'
              }`}
              style={{ position: 'relative', zIndex: 2 }}
            >
              {currentText}
              <span className="animate-pulse text-c4-primary">|</span>
            </span>
          </span>{' '}
          with{' '}
          <span
            className={`inline-block px-4 py-1 rounded-2xl transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-c4-background/80 text-c4-primary'
                : 'bg-white/80 text-c4-primary'
            }`}
            style={{ position: 'relative', zIndex: 2 }}
          >
            AI-Driven Innovation
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl lg:max-w-4xl mx-auto mb-6 sm:mb-8 font-roboto leading-relaxed animate-fade-in px-2">
          Unite AI tools, community collaboration, and expert services to elevate content and business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-scale-in max-w-md sm:max-w-none mx-auto">
          <button 
            onClick={scrollToProcess}
            className="bg-c4-primary text-white px-8 py-4 rounded-lg font-roboto font-medium hover:bg-c4-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
          >
            Get Started
          </button>
          <button 
            onClick={scrollToServices}
            className="border-2 border-c4-primary text-c4-primary px-8 py-4 rounded-lg font-roboto font-medium hover:bg-c4-primary hover:text-white transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
