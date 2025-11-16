'use client';

import { useState } from 'react';
import styles from './Chatbot.module.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatbotTooltip}>Ask me anything! 💬</div>
      <button 
        className={styles.chatbotButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chatbot"
      >
        <div className={styles.chatbotPulse}></div>
        <span className={styles.chatbotBadge}>AI</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01"/>
        </svg>
      </button>

      <div className={`${styles.chatbotWindow} ${isOpen ? styles.active : ''}`}>
        <div className={styles.chatbotHeader}>
          <h3>🤖 AI Assistant</h3>
          <button className={styles.chatbotClose} onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>
        <div className={styles.chatbotContent}>
          <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ opacity: 0.3, marginBottom: '1rem' }}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <p>Chatbot integration ready!</p>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Connect your RAG bot here</p>
        </div>
      </div>
    </div>
  );
}