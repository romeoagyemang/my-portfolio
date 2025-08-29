import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-black z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            DevSnowden
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                  activeSection === item ? 'text-blue-600 font-medium' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/romeoagyemang" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-gray-900 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/romeo-agyemang-1396ba358" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-gray-900 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="mailto:agyemangromeo74@gmail.com"
               className="text-white hover:text-gray-900 transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 pt-3 border-t border-gray-100">
                <a href="https://github.com/romeoagyemang" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/romeo-agyemang-1396ba358" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:agyemangromeo74@gmail.com"
                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;