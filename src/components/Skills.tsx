'use client';

import { useState } from 'react';
import { skillCategories } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './Skills.module.css';

export default function Skills() {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section 
      id="skills" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <h2>My <span className={styles.accent}>Skills</span></h2>
      <div className={styles.skillsContainer}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={skillIndex}
                  categoryIndex={categoryIndex}
                  isVisible={isVisible}
                  isHovered={hoveredSkill === skill.name}
                  onHover={setHoveredSkill}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
  categoryIndex,
  isVisible,
  isHovered,
  onHover,
}: {
  skill: { name: string; level: number };
  index: number;
  categoryIndex: number;
  isVisible: boolean;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}) {
  return (
    <div
      className={`${styles.skillCard} ${isVisible ? styles.visible : ''} ${
        isHovered ? styles.hovered : ''
      }`}
      style={{
        animationDelay: `${categoryIndex * 0.2 + index * 0.1}s`,
      }}
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={styles.cardInner}>
        <div className={styles.iconWrapper}>
          <span className={styles.skillIcon}>⚡</span>
        </div>
        <h4 className={styles.skillName}>{skill.name}</h4>
        <div className={styles.skillIndicator}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                i < Math.ceil(skill.level / 20) ? styles.active : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 