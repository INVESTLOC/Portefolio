import { PersonalInfo } from '../types';
import profilePicture from '../assets/Portfolio_pp.png';

export const personalInfo: PersonalInfo = {
  name: 'Gilles-Christ Hounkanrin',
  title: 'Étudiant en expertise informatique',
  email: 'christ.hounkanrin@epitech.eu',
  phone: '+229 96664734',
  location: 'Cotonou, Bénin',
  bio: 'Je suis passionné par la robotique et l\'intelligence artificielle...',
  github: 'https://github.com/christh2',
  linkedin: 'https://www.linkedin.com/in/gilles-christ-hounkanrin/',
  profilePicture,
  languages: [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Débutant' }
  ]
};
