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
            name: 'Drinho',
            description: "Since its inception in 1980, Drinho has steadily earned itself a dominant place in the Soya Bean Milk and Asian Drinks markets of Malaysia. All Drinho Asian Drinks are preservative-free, non-carbonated and certified halal.",
            logo: 'images/Drinho_Logo.png'
        },
        {
            name: 'SixtyEight ESports',
            description: "SixtyEight Esports is a gaming console rental service established in November 2022 in the Klang Valley, Malaysia, which transformed from a physical gaming center to a flexible rental business in June 2023. The company provides PlayStation 4 and PS5 console rentals for personal and corporate customers, offering affordable pricing, convenient delivery options including Cash on Delivery and pickup from their Cheras and Wangsa Maju locations, and a diverse game library covering multiple genres across the Klang Valley region.",
            logo: 'images/68ESports_Logo.jpg'
        },
        {
            name: 'Oromeo Marketing Sdn. Bhd. (7Days)',
            description: "7Days is a global brand of packaged baked goods, best known for its filled croissants, offering a variety of sweet and savory options for convenient snacking. Originally established in 1991 by the Greek company Chipita, it became part of Mondelēz International in 2022. In Malaysia, 7Days products are distributed by Oromeo Marketing Sdn Bhd, which actively promotes the brand locally, including initiatives like celebrating National Croissant Month.",
            logo: 'images/7Days_Logo.jpg'
        }, 
        {
            name: 'GPR Food Sdn. Bhd.',
            description: "GPR Food Sdn. Bhd. is a Malaysian confectionery manufacturer specializing in cookies, shortbread, chocolate-coated treats, and traditional layer cakes, blending homemade recipes with modern manufacturing techniques. Established over 20 years ago and exporting to more than 38 countries, including Japan, the USA, and the Middle East, GPR focuses on meeting customer-specific requirements for product and packaging. Renowned for high-quality and competitively priced offerings, the company employs stringent quality assurance processes and operates GPR Mart & Cafe to enhance its consumer reach. It aims to maintain its position as a global leader in premium confectionery innovation..",
            logo: 'images/GPRFood_Logo.jpg'
        }, 
        {
            name: 'Papaprint',
            description: "PapaPrint is a Malaysian-based company specializing in customized apparel and accessories. They offer a range of products, including personalized t-shirts, hoodies, and tote bags, catering to both individual and corporate clients. With a focus on quality and customer satisfaction, PapaPrint provides tailored solutions for various printing needs. ",
            logo: 'images/Papaprint_Logo.jpeg'
        }, 
        {
            name: 'VellarSocks',
            description: "VellarSocks is a brand specializing in high-performance sports socks designed to enhance stability and comfort during workouts. Their grip-enhancing socks are crafted to provide superior traction, allowing athletes to unleash their potential with confidence and maintain focus. Perfect for various fitness activities, VellarSocks help elevate performance and ensure a stable foundation for every move.",
            logo: 'images/Vellarsocks.jpeg'
        }, 
        {
            name: 'vida Malaysia',
            description: "Vida is a Malaysian brand specializing in sparkling or carbonated drinks, offering a variety of flavors such as orange, lemon, pink guava, and blackcurrant. The brand emphasizes providing high-quality beverages that contribute to a healthy lifestyle. Vida Malaysia's products are available through various retailers, including Watsons Malaysia.",
            logo: 'images/vidaMalaysia.png'
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
                <h1 className={styles.heading}>OUR SPONSORS</h1>
                <h3 className={`${styles.title} text-gray-500`}>We extend our heartfelt thanks to our sponsors for their generous support of the Dean's Cup. Your contributions have made this event possible, and we are truly grateful for your commitment to our faculty and the spirit of competition. Thank you for being a part of this journey!</h3>
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