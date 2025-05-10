import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const technicalSkills = skills.filter(skill => skill.type === 'technical');
  const generalSkills = skills.filter(skill => skill.type === 'general');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4 text-dark-900 dark:text-white"
        >
          Mes compétences
        </motion.h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div 
            className="bg-white dark:bg-dark-900 p-8 rounded-lg shadow-card dark:shadow-card-dark"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">
              Compétences techniques
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                  }}
                  className="flex flex-col items-center p-4 bg-gray-100 dark:bg-dark-700 rounded-lg transition-colors"
                >
                  {skill.icon && (
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 mb-2"
                    />
                  )}
                  <span className="text-sm text-gray-800 dark:text-gray-200 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* General Skills */}
          <motion.div 
            className="bg-white dark:bg-dark-900 p-8 rounded-lg shadow-card dark:shadow-card-dark"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">
              Compétences générales
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {generalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                  }}
                  className="px-4 py-2 bg-gray-100 dark:bg-dark-700 rounded-md text-gray-800 dark:text-gray-200 transition-colors"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;