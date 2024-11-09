interface CommitteeMember {
    name: string;
    role: string;
    image: string;
    socialLinks: {
      instagram?: string;
      facebook?: string;
    };
  }

  import React, { useState } from 'react';
import styles from './Committee.module.css';

const Committee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('HICOM');
  
  const categories = ['HICOM', 'CONTEST PROTOCOL', 'LOGISTICS', 'TECHNICAL'];
  
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
  );
};

export default Committee;