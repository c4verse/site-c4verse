import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';

  // Handler for Services link: navigates to / and scrolls to #services
  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <header className="bg-c4-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-c4-primary to-c4-secondary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">C4</span>
              </div>
              <span className="font-poppins font-semibold text-xl text-c4-text">C4Verse</span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a href="#home" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Home</a>
                <a href="#services" onClick={handleServicesClick} className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Services</a>
                <Link to="/about" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">About</Link>
                <Link to="/contact" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Contact</Link>
              </>
            ) : isAboutPage ? (
              <>
                <Link to="/" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Home</Link>
                <a href="/#services" onClick={handleServicesClick} className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Services</a>
                <Link to="/contact" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Contact</Link>
              </>
            ) : isContactPage ? (
              <>
                <Link to="/" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Home</Link>
                <a href="/#services" onClick={handleServicesClick} className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Services</a>
                <Link to="/about" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">About</Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Home</Link>
                <a href="/#services" onClick={handleServicesClick} className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Services</a>
                <Link to="/about" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">About</Link>
                <Link to="/contact" className="text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Contact</Link>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-c4-text hover:text-c4-primary transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-c4-background border-t border-border">
              {isHomePage ? (
                <>
                  <a href="#home" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Home</a>
                  <a href="#services" onClick={handleServicesClick} className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Services</a>
                  <Link to="/about" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">About</Link>
                  <Link to="/contact" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Contact</Link>
                </>
              ) : isAboutPage ? (
                <>
                  <Link to="/" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Home</Link>
                  <a href="/#services" onClick={handleServicesClick} className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Services</a>
                  <Link to="/contact" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Contact</Link>
                </>
              ) : isContactPage ? (
                <>
                  <Link to="/" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Home</Link>
                  <a href="/#services" onClick={handleServicesClick} className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Services</a>
                  <Link to="/about" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">About</Link>
                </>
              ) : (
                <>
                  <Link to="/" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Home</Link>
                  <a href="/#services" onClick={handleServicesClick} className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Services</a>
                  <Link to="/about" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">About</Link>
                  <Link to="/contact" className="block px-3 py-2 text-c4-text hover:text-c4-primary transition-colors duration-200 font-roboto">Contact</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
