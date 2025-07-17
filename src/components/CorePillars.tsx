
import React from 'react';
import { Lightbulb, Users, Handshake, Zap, Award } from 'lucide-react';

const CorePillars = () => {
  const pillars = [
    { icon: Lightbulb, name: "Creativity", color: "from-c4-primary to-c4-accent" },
    { icon: Users, name: "Community", color: "from-c4-accent to-c4-secondary" },
    { icon: Handshake, name: "Collaboration", color: "from-c4-secondary to-c4-primary" },
    { icon: Zap, name: "Automation", color: "from-c4-primary to-c4-secondary" },
    { icon: Award, name: "Excellence", color: "from-c4-accent to-c4-primary" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
            Core Pillars
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            The fundamental values that drive everything we do
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 py-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${pillar.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-rotate-3 transform`}>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-poppins font-semibold text-lg">
                    {pillar.name}
                  </h3>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
