'use client';

import React, { useState } from 'react';
import styles from './Committee.module.css';

interface CommitteeMember {
    name: string;
    role: string;
    image: string;
    socialLinks: {
      instagram?: string;
      facebook?: string;
    };
  }

const Committee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('HICOM');
  
  const categories = ['High Committee', 'Contest Protocol', 'Logistics', 'Multimedia', 'Publicity', 
    'Technical', 'Program and Protocol', 'Sponsorship and Public Relations'
  ];
  
  const committeeMembers: CommitteeMember[] = [
    {
      name: 'James Bond',
      role: 'Leader',
      image: '/images/james-bond.jpg',
      socialLinks: {
        instagram: '#',
        facebook: '#'
      }
    },
    // Add more committee members here
  ];

  return (
    <section id="Committee" >
    <div className={styles.container}>
      <h1 className={styles.title}>THE PEOPLE BEHIND DEAN'S CUP 2024</h1>
      
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.membersGrid}>
        {committeeMembers.map((member) => (
          <div key={member.name} className={styles.memberCard}>
            <div className={styles.imageContainer}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className={styles.socialLinks}>
                {member.socialLinks.instagram && (
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.svg" alt="Instagram" />
                  </a>
                )}
                {member.socialLinks.facebook && (
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook.svg" alt="Facebook" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Committee;