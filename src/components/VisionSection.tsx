
import React from 'react';
import { Zap, Users, TrendingUp, Lightbulb, Target, Rocket } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VisionSection = () => {
  const values = [
    {
      icon: Zap,
      title: "AI-First Automation",
      description: "Leverage cutting-edge AI to automate workflows and accelerate innovation."
    },
    {
      icon: Users,
      title: "Community-Powered Growth",
      description: "Harness the collective power of creators and experts in our ecosystem."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Build sustainable growth with tools that scale with your ambitions."
    }
  ];

  return (
    <section id="vision" className="py-16 lg:py-24 bg-muted relative overflow-hidden">
      {/* 3D Floating Elements for Vision Section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Element 1 - Diamond */}
        <div 
          className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-tr from-c4-primary to-c4-accent transform rotate-45 shadow-lg hover:rotate-90 hover:scale-125 transition-all duration-1000 ease-out opacity-60"
          style={{ animation: 'float 10s ease-in-out infinite' }}
        >
          <div className="flex items-center justify-center h-full transform -rotate-45">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Floating Element 2 - Hexagon */}
        <div 
          className="absolute top-1/3 right-16 w-16 h-16 bg-gradient-to-bl from-c4-accent to-c4-secondary shadow-xl hover:scale-110 hover:rotate-12 transition-all duration-1200 ease-out opacity-60"
          style={{ 
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            animation: 'float 12s ease-in-out infinite',
            animationDelay: '3s'
          }}
        >
          <div className="flex items-center justify-center h-full">
            <Target className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Floating Element 3 - Triangle */}
        <div 
          className="absolute bottom-20 left-1/4 w-14 h-14 bg-gradient-to-t from-c4-secondary to-c4-primary shadow-lg hover:scale-105 hover:-rotate-12 transition-all duration-900 ease-out opacity-60"
          style={{ 
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '6s'
          }}
        >
          <div className="flex items-center justify-center h-full pt-2">
            <Rocket className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Additional organic shapes */}
        <div 
          className="absolute top-1/2 left-1/2 w-10 h-10 bg-c4-accent/40 rounded-full shadow-md hover:scale-110 transition-all duration-700 ease-out"
          style={{ animation: 'float 14s ease-in-out infinite', animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-c4-primary/50 transform rotate-45 shadow-md hover:rotate-90 transition-all duration-800 ease-out"
          style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '5s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-c4-text mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-roboto leading-relaxed">
            At C4Verse, we envision a world where creativity meets intelligence. Our mission is to accelerate innovation 
            through AI-powered automation, fostering collaboration between talented creators and forward-thinking businesses. 
            We believe in building trust through transparency, delivering scalable solutions that grow with our community, 
            and creating an ecosystem where every creator can thrive.
          </p>
        </div>

        <div className="relative py-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full select-none"
          >
            <CarouselContent className="py-2">
              {values.map((value, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 py-2">
                  <div className="text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 h-full hover:z-10 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-c4-primary to-c4-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-poppins font-semibold text-c4-text mb-3">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-roboto leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
