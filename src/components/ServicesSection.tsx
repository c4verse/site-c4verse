
import React from 'react';
import { Camera, TrendingUp, Users, Sparkles, Network, Database, Briefcase, Code, Palette } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Content Production & Studio Services",
      description: "Professional content creation with AI-enhanced workflows and studio-quality production capabilities."
    },
    {
      icon: TrendingUp,
      title: "Marketing Intelligence & Lead Growth",
      description: "Data-driven marketing strategies and lead generation tools powered by advanced analytics."
    },
    {
      icon: Users,
      title: "Project & Client Experience Management",
      description: "Streamlined project workflows and exceptional client relationship management systems."
    },
    {
      icon: Sparkles,
      title: "AI Content Creation & Creative Tools",
      description: "Cutting-edge AI tools for automated content generation, editing, and creative enhancement."
    },
    {
      icon: Network,
      title: "Creator Network & Community Engagement",
      description: "Connect with talented creators and build thriving communities around your brand."
    },
    {
      icon: Database,
      title: "Platform Technology & Data Infrastructure",
      description: "Robust technology solutions and data management systems for scalable growth."
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and goals."
    },
    {
      icon: Palette,
      title: "Brand Identity & Design",
      description: "Complete brand identity packages including logo design, visual guidelines, and marketing materials."
    },
    {
      icon: Briefcase,
      title: "Business Strategy Consulting",
      description: "Strategic planning and business development services to accelerate your company's growth trajectory."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-c4-text mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            Comprehensive solutions designed to accelerate your creative and business growth
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
            <CarouselContent className="-ml-2 md:-ml-4 py-2">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group p-8 bg-card border border-border rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-c4-accent/50 h-full hover:z-10 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-c4-primary to-c4-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-poppins font-semibold text-c4-text mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-roboto leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <a href="#contact" className="text-c4-primary font-roboto font-medium hover:text-c4-accent transition-colors duration-200 inline-flex items-center">
                      Learn More 
                      <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
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

export default ServicesSection;
