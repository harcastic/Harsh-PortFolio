'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './ProjectsNavbar.module.css';

export default function ProjectsNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Harcastic
        </Link>

        <div className={styles.navMenu}>
          <Link href="/#projects" className={styles.navLink}>
            Home
          </Link>
          
          <a 
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToTop();
            }}
            className={styles.navLink}
          >
            top
          </a>
        </div>
      </nav>
    </header>
  );
}
