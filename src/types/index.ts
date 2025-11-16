export interface Project {
  id: number;
  title: string;
  category: 'web' | 'cloud';
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}