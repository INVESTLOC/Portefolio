import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { education } from '../data/education';
import { experience } from '../data/experience';
import { Calendar, Briefcase, Book, Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4 text-dark-900 dark:text-white"
        >
          À propos de moi
        </motion.h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">
              Informations personnelles
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-5 w-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-5 w-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </motion.div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-medium mb-3 text-dark-800 dark:text-white">Langues</h4>
                <ul className="space-y-2">
                  {personalInfo.languages.map((language, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex justify-between text-gray-700 dark:text-gray-300"
                    >
                      <span>{language.name}</span>
                      <span className="text-primary-600 dark:text-primary-400">{language.level}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education & Experience */}
          <div>
            {/* Education */}
            <motion.div 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-dark-800 dark:text-white">
                <Book className="h-6 w-6 mr-2 text-primary-600 dark:text-primary-400" />
                Formation
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-dark-600"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                    <div className="mb-1 flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-dark-800 dark:text-white">{edu.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{edu.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-dark-800 dark:text-white">
                <Briefcase className="h-6 w-6 mr-2 text-primary-600 dark:text-primary-400" />
                Expérience
              </h3>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-dark-600"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                    <div className="mb-1 flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-dark-800 dark:text-white">{exp.position}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;