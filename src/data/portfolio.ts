import { Project, SkillCategory, ContactInfo } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Jharkhand Tourism',
    category: 'web',
    description: 'A tourism website developed for the Jharkhand Government to promote the state’s culture, heritage, and natural attractions.',
    image: '/Tourism.png',
    technologies: ['Html', 'CSS' ,'JavaScript', 'EJS'],
    features: ['Real-time weather updates','Eco-friendly travel suggestions', 'Itinerary Planner', 'AI-Assistant', ],
    githubUrl: 'https://github.com/harcastic/Jharkhand-Tourism',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Cloud Deck - CI/CD Pipeline Solution',
    category: 'cloud',
    description: 'Automate deployment with Docker and Jenkins on AWS',
    image: '/ciCD.png',
    technologies: ['Flask ','MySQL', 'Docker Compose', 'Jenkins', 'GitHub', 'AWS EC2'],
    features: ['Automated testing', 'Blue-green deployments', 'real cloud deployments'],
    githubUrl: 'https://github.com/harcastic/two-tier-flask-app.git',
  },
  {
    id: 3,
    title: 'Airbnb Clone',
    category: 'web',
    description: 'Working clone of Airbnb with features like - cart listing to deleting',
    image: '/airbnb.png',
    technologies: ['HTML','EJS','JavaScript', 'Node.js', 'MongoDb'],
    features: ['MongoDb for cart and listing storage','Real-time change in database' ],
    githubUrl: 'https://github.com/harcastic/Airbnb-clone',
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
    title: 'Music player',
    category: 'web',
    description: 'Dashboard for Music player',  
    image: '/music-player.png',
    technologies: ['Reactjs', 'Nodejs', 'Express'],
    features: ['Data visualization', 'Multiple platform integration'],
    githubUrl: 'https://github.com/harcastic/Music_Player',
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'AWS Serverless Architecture',
    category: 'cloud',
    description: 'Microservices architecture using AWS Lambda and API Gateway',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    technologies: ['AWS Lambda', 'DynamoDB', 'Python'],
    features: ['Auto-scaling infrastructure', 'Cost-optimized solution'],
    githubUrl: 'https://github.com/yourusername',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Terraform', level: 70 },
    ],
  },

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
  }
  
];

export const contactInfo: ContactInfo = {
  email: 'harsh.raj2274@gmail.com',
  location: 'Bihar, India',
};