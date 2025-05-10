import React, { useState, useRef } from 'react';
import { personalInfo } from '../data/personalInfo';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'validating' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    setStatus('validating');
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Veuillez remplir tous les champs.');
      return;
    }

    // Validation d'email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Veuillez entrer une adresse email valide.');
      return;
    }

    // Préparer le sujet et le corps de l'email
    const subject = `Nouveau message via Christ_Folio`;
    const body = `
Bonjour,

${formData.name} (${formData.email}) vous a envoyé un message depuis Christ_Folio.

Message:
${formData.message}

    `;

    // Créer l'URL mailto avec les paramètres encodés
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouvrir l'application email de l'utilisateur dans une nouvelle fenêtre/onglet
    const mailWindow = window.open(mailtoUrl, '_blank');
    
    // Attendre que l'utilisateur ferme la fenêtre ou retourne à l'application
    // Note: Cette partie est limitée car JavaScript ne peut pas détecter quand l'utilisateur a envoyé l'email
    
    // Afficher un message de succès et réinitialiser le formulaire
    setFormData({ name: '', email: '', message: '' });
    setStatus('success');
    
    // Réinitialiser le statut après quelques secondes
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    
    // Réinitialiser l'état d'erreur quand l'utilisateur commence à taper
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4 text-dark-900 dark:text-white"
        >
          Contactez-moi
        </motion.h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-900 p-8 rounded-lg shadow-card dark:shadow-card-dark"
          >
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">
              Informations de contact
            </h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-6 w-6 mr-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-dark-800 dark:text-white mb-1">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-6 w-6 mr-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-dark-800 dark:text-white mb-1">Téléphone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-6 w-6 mr-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-dark-800 dark:text-white mb-1">Localisation</h4>
                  <p className="text-gray-700 dark:text-gray-300">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-dark-800 dark:text-white mb-4">Réseaux sociaux</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/christh2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-6 w-6 text-dark-900 dark:text-white" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6 text-dark-900 dark:text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-900 p-8 rounded-lg shadow-card dark:shadow-card-dark"
          >
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">
              Envoyez-moi un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom
                </label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                Envoyer
              </button>

              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  {errorMessage}
                </p>
              )}
              
              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center mt-2">
                  Merci ! Votre message est prêt à être envoyé.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;