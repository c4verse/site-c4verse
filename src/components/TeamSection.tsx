
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Altamash Suleman",
      role: "Founder & CEO",
      quote: "Technology that empowers creativity",
      avatar: "AS"
    },
    {
      name: "Altahan Rauf",
      role: "Head of AI Development",
      quote: "Building the future of content creation",
      avatar: "AR"
    },
    {
      name: "???",
      role: "Co-Founder & CTO",
      quote: "Innovation through collaboration",
      avatar: "??"
    },
    {
      name: "namee?",
      role: "Creative Director",
      quote: "Where art meets artificial intelligence",
      avatar: "??"
    },
    {
      name: "????",
      role: "Business Development Lead",
      quote: "Connecting creators with opportunities",
      avatar: "??"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            The passionate individuals driving C4Verse forward
          </p>
        </div>

        <div className="relative py-4">
          <Carousel className="w-full select-none">
            <CarouselContent className="-ml-2 md:-ml-4 py-2 select-none">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 py-2 select-none">
                  <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 h-full border border-border hover:z-10 relative select-none">
                    <div className="text-center select-none">
                      <div className="w-20 h-20 bg-gradient-to-br from-c4-primary to-c4-accent rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 select-none">
                        <span className="text-white font-poppins font-bold text-xl select-none">
                          {member.avatar}
                        </span>
                      </div>
                      
                      <h3 className="font-poppins font-bold text-xl text-card-foreground mb-2 select-none">
                        {member.name}
                      </h3>
                      
                      <p className="text-c4-primary font-roboto font-medium mb-4 select-none">
                        {member.role}
                      </p>
                      
                      <blockquote className="text-muted-foreground font-roboto italic select-none">
                        "{member.quote}"
                      </blockquote>
                    </div>
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

export default TeamSection;
