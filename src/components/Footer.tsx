import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, MessageCircle, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Handler for Home link: navigates to / and scrolls to top
  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  // Handler for Services link: navigates to / and scrolls to #services
  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-muted border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and company info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-c4-primary to-c4-accent rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">C4</span>
              </div>
              <span className="font-poppins font-semibold text-xl text-foreground">C4Verse</span>
            </div>
            <p className="text-muted-foreground font-roboto leading-relaxed max-w-md">
              Empowering creators with AI-driven innovation. Unite AI tools, community collaboration, 
              and expert services to elevate content and business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" onClick={handleHomeClick} className="text-muted-foreground hover:text-c4-accent transition-colors duration-200 font-roboto">Home</a></li>
              <li><a href="/services" onClick={handleServicesClick} className="text-muted-foreground hover:text-c4-accent transition-colors duration-200 font-roboto">Services</a></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200 font-roboto">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200 font-roboto">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200 font-roboto">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200 font-roboto">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200 font-roboto">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200">
              <MessageCircle size={20} />
            </a>
            <a href="mailto:contact@c4verse.com" className="text-muted-foreground hover:text-c4-accent transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-muted-foreground/70 font-roboto text-sm">
            © 2025 C4Verse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
