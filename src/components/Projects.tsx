import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 4, projects.length));
  };

  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-dark-900 dark:text-white">
          Mes projets
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-card dark:shadow-card-dark hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark-800 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Démo
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-dark-600 dark:text-gray-300 hover:underline"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <button
              onClick={showMoreProjects}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md transition duration-300"
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;