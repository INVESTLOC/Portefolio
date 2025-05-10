export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  type: 'technical' | 'general';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github: string;
  linkedin: string;
  profilePicture: string;
  languages: Language[];
}