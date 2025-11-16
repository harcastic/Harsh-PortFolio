import { Project, SkillCategory, ContactInfo } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    features: ['Real-time inventory updates', 'Secure payment processing'],
    githubUrl: 'https://github.com/yourusername',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'AWS Serverless Architecture',
    category: 'cloud',
    description: 'Microservices architecture using AWS Lambda and API Gateway',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    technologies: ['AWS Lambda', 'DynamoDB', 'Python'],
    features: ['Auto-scaling infrastructure', 'Cost-optimized solution'],
    githubUrl: 'https://github.com/yourusername',
  },
  {
    id: 3,
    title: 'Task Management App',
    category: 'web',
    description: 'Collaborative project management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io'],
    features: ['Real-time collaboration', 'Task assignments'],
    githubUrl: 'https://github.com/yourusername',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Multi-Cloud Infrastructure',
    category: 'cloud',
    description: 'Hybrid cloud solution spanning AWS and Azure',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    technologies: ['Terraform', 'Kubernetes', 'Docker'],
    features: ['Infrastructure as Code', 'High availability'],
    githubUrl: 'https://github.com/yourusername',
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    category: 'web',
    description: 'Analytics dashboard for social media metrics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'Express'],
    features: ['Data visualization', 'Multiple platform integration'],
    githubUrl: 'https://github.com/yourusername',
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'CI/CD Pipeline Solution',
    category: 'cloud',
    description: 'Automated deployment pipeline with comprehensive testing',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop',
    technologies: ['Jenkins', 'Docker', 'Kubernetes'],
    features: ['Automated testing', 'Blue-green deployments'],
    githubUrl: 'https://github.com/yourusername',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Terraform', level: 70 },
    ],
  },
];

export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  location: 'Your City, Country',
};