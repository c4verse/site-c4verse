
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aisha Khan",
      role: "Creative Director",
      company: "Digital Studios Inc.",
      content: "C4Verse transformed our workflow completely. Their AI dubbing and localization tools saved us weeks of work on our global campaign. The quality is exceptional and the team's expertise is unmatched.",
      avatar: "AK"
    },
    {
      name: "Omar Malik",
      role: "Marketing Manager",
      company: "Growth Tech Solutions",
      content: "The website audit from C4Verse pinpointed exactly what was bottlenecking our performance. Within a month of implementing their recommendations, we saw a 35% increase in organic traffic.",
      avatar: "OM"
    },
    {
      name: "Sara Ahmed",
      role: "Business Development Lead",
      company: "Scale Ventures",
      content: "Their lead generation suite made prospecting effortless. The AI-powered insights helped us identify high-value prospects and close deals 40% faster than our previous methods.",
      avatar: "SA"
    },
    {
      name: "Zara Hassan",
      role: "Content Creator",
      company: "Creative Hub",
      content: "The community aspect of C4Verse is incredible. I've collaborated with amazing creators and learned so much from the expert workshops. It's more than a platform - it's a creative family.",
      avatar: "ZH"
    },
    {
      name: "Ahmed Ali",
      role: "Startup Founder",
      company: "Tech Innovations",
      content: "From branding to scaling, C4Verse provided end-to-end support. Their AI tools helped us launch 3 months ahead of schedule, and the business insights were invaluable for our growth strategy.",
      avatar: "AA"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-c4-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            Discover how C4Verse has transformed businesses and accelerated growth
          </p>
        </div>

        <div className="max-w-6xl mx-auto py-4">
          <Carousel className="w-full select-none">
            <CarouselContent className="-ml-2 md:-ml-4 select-none py-2">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 select-none py-2">
                  <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 h-full select-none hover:z-10 relative">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-c4-primary to-c4-accent rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-poppins font-semibold select-none">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold text-c4-text select-none">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground font-roboto select-none">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-muted-foreground/80 font-roboto select-none">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <blockquote className="text-muted-foreground font-roboto leading-relaxed italic select-none">
                      "{testimonial.content}"
                    </blockquote>
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

export default TestimonialsSection;
