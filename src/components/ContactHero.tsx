
import React from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-c4-accent/20 to-c4-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-c4-primary/15 to-c4-accent/20 rounded-full blur-3xl"></div>
      </div>

      {/* 3D Contact Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mail Element */}
        <div 
          className="absolute top-1/4 left-1/6 w-16 h-16 bg-gradient-to-br from-c4-primary to-c4-accent rounded-2xl shadow-2xl transform rotate-12 hover:rotate-45 hover:scale-110 transition-all duration-700 opacity-60"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        >
          <div className="flex items-center justify-center h-full">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Phone Element */}
        <div 
          className="absolute top-1/3 right-1/5 w-14 h-14 bg-gradient-to-bl from-c4-accent to-c4-secondary rounded-full shadow-2xl transform -rotate-12 hover:rotate-12 hover:scale-125 transition-all duration-800 opacity-60"
          style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}
        >
          <div className="flex items-center justify-center h-full">
            <Phone className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Message Element */}
        <div 
          className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-tr from-c4-secondary to-c4-primary rounded-xl shadow-2xl transform rotate-45 hover:-rotate-12 hover:scale-105 transition-all duration-600 opacity-60"
          style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '4s' }}
        >
          <div className="flex items-center justify-center h-full">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Send Element */}
        <div 
          className="absolute top-2/3 right-1/3 w-10 h-10 bg-gradient-to-r from-c4-primary to-c4-accent rounded-lg shadow-lg transform rotate-12 hover:rotate-45 hover:scale-110 transition-all duration-500 opacity-60"
          style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}
        >
          <div className="flex items-center justify-center h-full">
            <Send className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Additional small elements */}
        <div 
          className="absolute top-1/2 left-2/3 w-8 h-8 bg-c4-accent/70 rounded-full shadow-lg"
          style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '3s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/6 w-6 h-6 bg-c4-primary/60 rounded-full shadow-lg"
          style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '5s' }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-6">
          Get in Touch
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-roboto leading-relaxed">
          Ready to transform your creative vision into reality? Let's discuss how C4Verse can accelerate your growth.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
