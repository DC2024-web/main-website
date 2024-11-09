'use client';

import React, { useState } from 'react';
import styles from './Committee.module.css';

interface CommitteeMember {
    name: string;
    role: string;
    image: string;
    category: string;
}

const Committee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('High Committee');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['High Committee', 'Contest Protocol', 'Logistics', 'Multimedia', 'Publicity', 
    'Technical', 'Program and Protocol', 'Sponsorship and Public Relations'
  ];

  const committeeMembers: CommitteeMember[] = [
    {
      name: 'Su Hui San',
      role: 'Director',
      image: '/images/D.jpg',
      category: 'High Committee'
    },
    {
      name: 'Sayyid Syamil bin Syed Mohamed',
      role: 'Vice Director 1',
      image: '/images/Vice_D1.jpg',
      category: 'High Committee'
    },
    {
      name: 'Koay Khoon Lyn',
      role: 'Vice_D2',
      image: '/images/Vice_D2.jpg',
      category: 'High Committee'
    },
    {
        name: 'Serena Wong binti Jeffry Wong',
        role: 'Secretary',
        image: '/images/Sec.jpg',
        category: 'High Committee'
      }, 
      {
        name: 'Ade Aiman Arief Shamsuri',
        role: 'Vice Secretary',
        image: '/images/Vice_Sec.jpg',
        category: 'High Committee'
      }, 
      {
        name: 'Laila Nahwah binti Mohd Rostam',
        role: 'Treasurer',
        image: '/images/Treasurer.jpg',
        category: 'High Committee'
      }, 
      {
        name: 'Cheu Zi Yuan',
        role: 'Vice Treasurer',
        image: '/images/Drinho_Poster.jpg',
        category: 'High Committee'
      }
      
    // Add more committee members here
  ];

  const filteredMembers = committeeMembers.filter(
    member => member.category === activeCategory
  );

  // Function to go to the previous member
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredMembers.length - 1 : prevIndex - 1));
  };

  // Function to go to the next member
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredMembers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="Committee">
      <div className={styles.container}>
        <h1 className={styles.title}>THE PEOPLE BEHIND DEAN'S CUP 2024</h1>
        
        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0); // Reset index when changing category
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.memberCard}>
          <div className={styles.imageContainer}>
            <button onClick={handlePrevious} className={`${styles.arrowButton} ${styles.arrowLeft}`}>◀</button>
            
            <img src={filteredMembers[currentIndex].image} alt={filteredMembers[currentIndex].name} />
            
            <button onClick={handleNext} className={`${styles.arrowButton} ${styles.arrowRight}`}>▶</button>
          </div>
          <div className={styles.memberInfo}>
            <h3>{filteredMembers[currentIndex].name}</h3>
            <p>{filteredMembers[currentIndex].role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
