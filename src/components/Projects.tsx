'use client';

import { useState } from 'react';
import { Project } from '@/types';
import { projects } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './Projects.module.css';

type FilterType = 'all' | 'web' | 'cloud';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const { elementRef, isVisible } = useIntersectionObserver();

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section 
      id="projects" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <h2>My <span className={styles.accent}>Projects</span></h2>
      
      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button
          className={`${styles.filterBtn} ${activeFilter === 'web' ? styles.active : ''}`}
          onClick={() => setActiveFilter('web')}
        >
          <span>💻</span> Web
        </button>
        <button
          className={`${styles.filterBtn} ${activeFilter === 'cloud' ? styles.active : ''}`}
          onClick={() => setActiveFilter('cloud')}
        >
          <span>☁️</span> Cloud
        </button>
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div 
      className={styles.projectCard}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.projectImage}>
        <img src={project.image} alt={project.title} />
        <div className={styles.projectOverlay}>
          <div className={styles.projectLinks}>
            {project.githubUrl && (
              <a href={project.githubUrl} className={styles.projectLink} title="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} className={styles.projectLink} title="Live Demo" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <span className={`${styles.projectCategory} ${styles[`category${project.category.charAt(0).toUpperCase() + project.category.slice(1)}`]}`}>
            {project.category}
          </span>
        </div>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.techTags}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <ul className={styles.projectFeatures}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}