// Sponsors.tsx
'use client';

import React, { useState } from 'react';
import styles from './Sponsors.module.css';

interface Sponsor {
  logo: string;
  name: string;
  description: string;
}

const sponsorsData: Sponsor[] = [
  {
    logo: '/path/to/logo1.png',
    name: 'Universiti Malaya',
    description:
      "Our sponsor is a leading tech company that supports innovation and growth. Their commitment to the Dean's Cup shows their dedication to encouraging talent and teamwork in our community. We're grateful for their support!",
  },
  // Add more sponsors as needed
];

const Sponsors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSponsor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsorsData.length);
  };

  const prevSponsor = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sponsorsData.length - 1 : prevIndex - 1
    );
  };

  const currentSponsor = sponsorsData[currentIndex];

  return (
    <section id="Sponsors">
    <div className={styles.sponsors}>
      <h2 className={styles.sponsorsTitle}>OUR SPONSORS</h2>
      <p>
        We extend our heartfelt thanks to our sponsors for their generous support of the Dean's Cup. Your contributions have made this event possible, and we are truly grateful for your commitment to our faculty and the spirit of competition. Thank you for being a part of this journey!
      </p>
      <div className={styles.sponsorCard}>
        <img
          src={currentSponsor.logo}
          alt={currentSponsor.name}
          className={styles.sponsorLogo}
        />
        <h3 className={styles.sponsorName}>{currentSponsor.name}</h3>
        <p className={styles.sponsorDescription}>{currentSponsor.description}</p>
      </div>
      <div className={styles.carouselControls}>
        <button className={styles.controlButton} onClick={prevSponsor}>
          &#8249;
        </button>
        <button className={styles.controlButton} onClick={nextSponsor}>
          &#8250;
        </button>
      </div>
    </div>
    </section>
  );
};

export default Sponsors;