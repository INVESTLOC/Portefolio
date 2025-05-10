import { Project } from '../types';
import gomoku from '../assets/gomoku.png';
import quoteGenerator from '../assets/citation.png';

export const projects: Project[] = [
  {
    id: 'gomoku-ai',
    title: 'Gomoku AI Game',
    description: 'Jeu de Gomoku en ligne avec IA Minimax. Implémentation d\'un algorithme d\'intelligence artificielle pour jouer contre l\'ordinateur.',
    image: gomoku,
    link: 'https://thunderous-lokum-eb3f5a.netlify.app/',
    github: 'https://github.com/christh2/B-AIA-500-COT-5-1-gomoku/',
    technologies: ['React', 'Tailwind CSS', 'Python']
  },
  {
    id: 'quote-generator',
    title: 'Quote Generator',
    description: 'Générateur de citations aléatoires depuis plusieurs API.',
    image: quoteGenerator,
    link: 'https://cerulean-parfait-e9f6d5.netlify.app/',
    github: 'https://github.com/christh2/Quotes-Generator',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
];