import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 lg:mb-0 lg:mr-16 w-64 h-64 relative"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-primary-700 shadow-lg">
              <img 
                src={personalInfo.profilePicture} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="lg:flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
                Bonjour, je suis
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-4">
                {personalInfo.name}
              </h1>
              <h3 className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-medium h-8">
                <Typewriter
                  options={{
                    strings: [
                      'Étudiant en expertise informatique',
                      'Développeur Frontend',
                      'Ingénieur logiciel'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              <Typewriter
                options={{
                  strings: [personalInfo.bio],
                  autoStart: true,
                  delay: 30,
                  cursor: '',
                  loop: false,
                }}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-moi
              </motion.a>
              <motion.a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 flex items-center border border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 text-gray-800 dark:text-white font-medium rounded-md shadow-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;