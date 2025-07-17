
import React from 'react';
import { MessageCircle, Sparkles, Users, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Tell Us Your Needs",
      description: "Share your vision and challenges with our expert team"
    },
    {
      icon: Sparkles,
      title: "Leverage AI Tools & Experts",
      description: "Access our suite of AI-powered tools and professional services"
    },
    {
      icon: Users,
      title: "Collaborate & Iterate",
      description: "Work together with our community to refine and perfect your project"
    },
    {
      icon: Rocket,
      title: "Launch & Scale",
      description: "Deploy your solution and scale with ongoing support and optimization"
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-c4-text mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            A simple, streamlined process to transform your creative vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-c4-primary to-c4-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <step.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block w-8 h-8 bg-c4-secondary rounded-full text-white font-poppins font-bold text-sm flex items-center justify-center mb-3 group-hover:scale-110 group-hover:animate-bounce transition-all duration-200">
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-poppins font-semibold text-c4-text mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground font-roboto leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-c4-primary to-c4-accent">
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-c4-accent rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
