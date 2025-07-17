
import React from 'react';
import { Target, Eye, Rocket } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* 3D Background Element */}
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-br from-c4-accent to-c4-primary rounded-full shadow-xl opacity-20 hover:scale-110 transition-all duration-700"
        style={{ animation: 'float 12s ease-in-out infinite' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-4">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 hover:z-10 relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-c4-primary to-c4-accent rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground font-roboto leading-relaxed">
                To empower creators and businesses through trust-centric, AI-driven tools and services. 
                We bridge the gap between innovation and practicality, making advanced technology 
                accessible to everyone in the creative ecosystem.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 hover:z-10 relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-c4-accent to-c4-secondary rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground font-roboto leading-relaxed">
                To become the leading content-tech platform in Pakistan, MENA, and beyond. 
                We envision a world where creators can focus on what they do best while AI handles 
                the technical complexities.
              </p>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-c4-primary/20 to-c4-accent/20 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-c4-primary to-c4-accent rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Floating elements around the illustration */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-c4-accent rounded-full shadow-lg opacity-60"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              ></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-c4-primary rounded-full shadow-lg opacity-60"
                style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
