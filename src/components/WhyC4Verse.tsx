
import React from 'react';
import { Brain, Users, Layers, Shield } from 'lucide-react';

const WhyC4Verse = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "Cutting-edge AI solutions that transform creative workflows"
    },
    {
      icon: Users,
      title: "Creator-Centered Design",
      description: "Built by creators, for creators - understanding your unique needs"
    },
    {
      icon: Layers,
      title: "Scalable & Modular",
      description: "Solutions that grow with your business and adapt to your requirements"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Open processes and honest communication in everything we do"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
            Why C4Verse?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            What makes us different in the creative technology landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group border border-border hover:z-10 relative"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-c4-primary to-c4-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-poppins font-semibold text-card-foreground mb-2 group-hover:text-c4-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-roboto text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyC4Verse;
