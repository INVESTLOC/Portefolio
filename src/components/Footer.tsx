import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-100 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300">
              © {year} Gilles-Christ Hounkanrin. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-white dark:bg-dark-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-primary-600 dark:text-primary-400"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;