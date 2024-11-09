'use client';

import React, { useState } from 'react';
import styles from './Committee.module.css';

interface CommitteeMember {
    name: string;
    role: string;
    image: string;
}

const Committee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('High Committee');
  
  const categories = ['High Committee', 'Contest Protocol', 'Logistics', 'Multimedia', 'Publicity', 
    'Technical', 'Program and Protocol', 'Sponsorship and Public Relations'
  ];
  
  const committeeMembers: CommitteeMember[] = [
    {
      name: 'Su Hui San',
      role: 'Director',
      image: '/images/D.jpg', // Update this path to match where you stored the image
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
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Committee;