'use client';

import React, { useState } from 'react';
import styles from './Sponsors.module.css';

interface Sponsor {
    name: string;
    description: string;
    logo: string;
}

const Sponsors: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sponsors: Sponsor[] = [
        {
            name: 'Universiti Malaya',
            description: "Our sponsor is a leading tech company that supports innovation and growth. Their commitment to the Dean's Cup shows their dedication to encouraging talent and teamwork in our community.",
            logo: '/path/to/logo1.png'
        },
        {
            name: 'Tech Innovators',
            description: "Empowering growth through technology, Tech Innovators has played a crucial role in the success of the Dean's Cup 2024.",
            logo: '/path/to/logo2.png'
        },
        {
            name: 'Global Enterprises',
            description: "A proud partner of the Dean's Cup, Global Enterprises fosters innovation, teamwork, and excellence.",
            logo: '/path/to/logo3.png'
        }
    ];

    // Navigation handlers
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? sponsors.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1));
    };

    const currentSponsor = sponsors[currentIndex];

    return (
        <section id="Sponsors">
            <div className={styles.container}>
                <h1 className={styles.title}>OUR SPONSORS</h1>
                <h2 className={styles.title}>We extend our heartfelt thanks to our sponsors for their generous support of the Dean’s Cup. Your contributions have made this event possible, and we are truly grateful for your commitment to our faculty and the spirit of competition. Thank you for being a part of this journey!</h2>
                <div className={styles.carouselWrapper}>
                    <button onClick={handlePrevious} className={`${styles.arrowButton} ${styles.arrowLeft}`}>◀</button>
                    <div className={styles.sponsorCard}>
                        <div className={styles.imageContainer}>
                            <img src={currentSponsor.logo} alt={currentSponsor.name} />
                        </div>
                        <div className={styles.sponsorInfo}>
                            <h3>{currentSponsor.name}</h3>
                            <p>{currentSponsor.description}</p>
                        </div>
                    </div>
                    <button onClick={handleNext} className={`${styles.arrowButton} ${styles.arrowRight}`}>▶</button>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;