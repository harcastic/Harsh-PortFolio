'use client';

import { useEffect, useState } from 'react';
import { skillCategories } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './Skills.module.css';

export default function Skills() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section 
      id="skills" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <h2>My <span className={styles.accent}>Skills</span></h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <SkillCategory 
            key={category.title} 
            category={category} 
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}

function SkillCategory({ 
  category, 
  index, 
  isVisible 
}: { 
  category: { title: string; skills: { name: string; level: number }[] }; 
  index: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`${styles.skillCategory} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h3>{category.title}</h3>
      {category.skills.map((skill, skillIndex) => (
        <SkillBar 
          key={skill.name} 
          skill={skill} 
          isVisible={isVisible}
          delay={skillIndex * 0.15}
        />
      ))}
    </div>
  );
}

function SkillBar({ 
  skill, 
  isVisible,
  delay 
}: { 
  skill: { name: string; level: number }; 
  isVisible: boolean;
  delay: number;
}) {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Start animation after delay
    const startTimeout = setTimeout(() => {
      // Animate the number counting
      const duration = 1500; // 1.5 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = skill.level / steps;
      const stepDuration = duration / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(increment * step, skill.level);
        setDisplayLevel(Math.round(current));

        if (step >= steps) {
          clearInterval(timer);
          setDisplayLevel(skill.level); // Ensure we end at exact value
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [isVisible, skill.level, delay]);

  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>
          {displayLevel}%
        </span>
      </div>
      <div className={styles.skillBar}>
        <div 
          className={`${styles.skillProgress} ${isVisible ? styles.fill : ''}`}
          style={{ 
            '--skill-level': `${skill.level}%`,
            animationDelay: `${delay}s`
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
} 