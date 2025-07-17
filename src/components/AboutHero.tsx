
import React from 'react';
import { Sparkles, Zap, Globe, Brain } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-c4-accent/30 to-c4-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-c4-primary/20 to-c4-accent/30 rounded-full blur-3xl"></div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-c4-primary to-c4-accent rounded-2xl shadow-2xl transform rotate-12 hover:rotate-45 hover:scale-110 transition-all duration-700 opacity-60"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        >
          <div className="flex items-center justify-center h-full">
            <Brain className="w-8 h-8 text-white" />
          </div>
        </div>

        <div 
          className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-tr from-c4-accent to-c4-secondary rounded-full shadow-lg hover:scale-125 transition-all duration-600 opacity-60"
          style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}
        >
          <div className="flex items-center justify-center h-full">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        <div 
          className="absolute top-1/2 left-20 w-10 h-10 bg-c4-primary/50 transform rotate-45 shadow-md hover:rotate-90 transition-all duration-500 opacity-60"
          style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '4s' }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-bold text-foreground mb-6 animate-fade-in">
          About{' '}
          <span className="bg-gradient-to-r from-c4-primary to-c4-accent bg-clip-text text-transparent">
            C4Verse
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-roboto leading-relaxed animate-fade-in">
          A vision-driven creative ecosystem uniting AI, automation, and community.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
