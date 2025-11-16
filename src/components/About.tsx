'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './About.module.css';

export default function About() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section 
      id="about" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <h2>About <span className={styles.accent}>Me</span></h2>
      <div className={styles.aboutContent}>
        <p>
          I&apos;m a passionate developer with expertise in building modern web applications
          and designing scalable cloud infrastructure. With a strong foundation in both
          frontend and backend technologies, I create seamless user experiences backed
          by robust architectures.
        </p>
        <p>
          My journey in tech has led me to work with cutting-edge technologies like
          React, Next.js, Node.js, and various cloud platforms including AWS, Azure,
          and Google Cloud. I believe in writing clean, maintainable code and following
          best practices.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
          to open-source projects, or sharing knowledge with the developer community.
        </p>
      </div>
    </section>
  );
}