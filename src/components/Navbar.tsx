import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Github, Linkedin } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ 
  href, 
  children,
  onClick 
}) => {
  return (
    <a 
      href={href} 
      className="hover:text-primary-600 dark:hover:text-primary-300 px-4 py-2 transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-dark-900 shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold text-dark-900 dark:text-white transition-colors duration-300"
        >
          Christ_Folio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink href="#about">À propos</NavLink>
          <NavLink href="#skills">Compétences</NavLink>
          <NavLink href="#projects">Projets</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          
          <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-primary-300" />
            ) : (
              <Moon className="h-5 w-5 text-dark-600" />
            )}
          </button>
          
          <div className="flex items-center space-x-2 ml-2">
            <a 
              href="https://github.com/christh2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300"
            >
              <Github className="h-5 w-5 text-dark-900 dark:text-white" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5 text-dark-900 dark:text-white" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-primary-300" />
            ) : (
              <Moon className="h-5 w-5 text-dark-600" />
            )}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-dark-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-dark-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-dark-900 shadow-lg md:hidden z-50 animate-fade-in">
            <nav className="flex flex-col py-4">
              <NavLink href="#about" onClick={closeMobileMenu}>À propos</NavLink>
              <NavLink href="#skills" onClick={closeMobileMenu}>Compétences</NavLink>
              <NavLink href="#projects" onClick={closeMobileMenu}>Projets</NavLink>
              <NavLink href="#contact" onClick={closeMobileMenu}>Contact</NavLink>
              
              <div className="flex items-center space-x-4 px-4 py-4">
                <a 
                  href="https://github.com/christh2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300"
                >
                  <Github className="h-5 w-5 text-dark-900 dark:text-white" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-dark-900 dark:text-white" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;