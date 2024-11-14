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
      name: 'Sayyid Syamil Bin Syed Mohamed',
      role: 'Vice Director 1',
      image: '/images/Vice_D1.jpg',
      category: 'High Committee'
    },
    {
      name: 'Koay Khoon Lyn',
      role: 'Vice Director 2',
      image: '/images/Vice_D2.jpg',
      category: 'High Committee'
    },
    {
      name: 'Serena Wong Binti Jeffry Wong',
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
      name: 'Laila Nahwah Binti Mohd Rostam',
      role: 'Treasurer',
      image: '/images/Treasurer.jpg',
      category: 'High Committee'
    }, 
    {
      name: 'Cheu Zi Yuan',
      role: 'Vice Treasurer',
      image: '/images/Drinho_Poster.jpg',
      category: 'High Committee'
    },
    {
      name: 'Tan Shi Han',
      role: 'Head of Department (HOD)',
      image: '/images/HoD_CP.jpg',
      category: 'Contest Protocol'
    },
    {
      name: 'Lim Jian Chuen',
      role: 'Head of Department (HOD)',
      image: '/images/HoD_L.jpg',
      category: 'Logistics'
    },
    {
      name: 'Terrence Cheng',
      role: 'Head of Department (HOD)',
      image: '/images/HoD_M&P.jpg',
      category: 'Multimedia'
    },
    {
      name: 'Muhammad Aifique Raihan Bin Ruwaidi',
      role: 'Head of Department (HOD)',
      image: '/images/HoD_M&P.jpg',
      category: 'Publicity'
    },
    {
      name: 'Ahmed Awelkair Ahmed Abdalla',
      role: 'Head of Department (HOD)',
      image: '/images/HoD_T.jpg',
      category: 'Technical'
    },
    {
      name: 'Lee Lik Shen',
      role: 'Head of Department (HOD)',
      image: '/images/HoD_P&P.jpg',
      category: 'Program and Protocol'
    },
    {
      name: 'Shaarani Navaratnam',
      role: 'Head of Department (HOD)',
      image: '/images/HoD_SPR.jpg',
      category: 'Sponsorship and Public Relations'
    }, 
    {
      name: 'Committee Members',
      role: '',
      image: '/images/C_CP.jpg',
      category: 'Contest Protocol'
    }, 
    {
      name: 'Committee Members',
      role: '',
      image: '/images/C_L.jpg',
      category: 'Logistics'
    }, 
    {
      name: 'Committee Members',
      role: '',
      image: '/images/C_M&P.jpg',
      category: 'Multimedia'
    }, 
    {
      name: 'Committee Members',
      role: '',
      image: '/images/C_M&P.jpg',
      category: 'Publicity'
    },
    {
      name: 'Committee Members',
      role: '',
      image: '/images/C_T.jpg',
      category: 'Technical'
    },
    {
      name: 'Committee Members',
      role: '',
      image: '/images/C_P&P.jpg',
      category: 'Program and Protocol'
    }, 
    {
      name: 'Committee Members',
      role: '',
      image: '/images/C_SPR.jpg',
      category: 'Sponsorship and Public Relations'
    }
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
        <h2 className={styles.title}>Please Slide the Menu for More Departments</h2>
        
        <div className={styles.categoriesWrapper}>
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
        </div>

        <div className={styles.memberCard}>
          <div className={styles.imageContainer}>
            <button onClick={handlePrevious} className={`${styles.arrowButton} ${styles.arrowLeft}`}>◀</button>
            
            <img src={filteredMembers[currentIndex]?.image} alt={filteredMembers[currentIndex]?.name} />
            
            <button onClick={handleNext} className={`${styles.arrowButton} ${styles.arrowRight}`}>▶</button>
          </div>
          <div className={styles.memberInfo}>
            <h3>{filteredMembers[currentIndex]?.name}</h3>
            <p>{filteredMembers[currentIndex]?.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;