"use client";

import React, { useState } from "react";
import styles from "./Committee.module.css";

interface CommitteeMember {
  name: string;
  role: string;
  image: string;
  category: string;
}

const Committee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("High Committee");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    "High Committee",
    "Head of Departments",
    "Contest Protocol",
    "Logistics",
    "Multimedia",
    "Publicity",
    "Technical",
    "Program and Protocol",
    "Sponsorship and Public Relations",
  ];

  const committeeMembers: CommitteeMember[] = [
    {
      name: "Su Hui San",
      role: "Director",
      image: "/images/D.jpg",
      category: "High Committee",
    },
    {
      name: "Sayyid Syamil Bin Syed Mohamed",
      role: "Vice Director 1",
      image: "/images/Vice_D1.jpg",
      category: "High Committee",
    },
    {
      name: "Koay Khoon Lyn",
      role: "Vice Director 2",
      image: "/images/Vice_D2.jpg",
      category: "High Committee",
    },
    {
      name: "Serena Wong Binti Jeffry Wong",
      role: "Secretary",
      image: "/images/Sec.jpg",
      category: "High Committee",
    },
    {
      name: "Ade Aiman Arief Shamsuri",
      role: "Vice Secretary",
      image: "/images/Vice_Sec.jpg",
      category: "High Committee",
    },
    {
      name: "Laila Nahwah Binti Mohd Rostam",
      role: "Treasurer",
      image: "/images/Treasurer.jpg",
      category: "High Committee",
    },
    {
      name: "Cheu Zi Yuan",
      role: "Vice Treasurer",
      image: "/images/Vice_T.jpg",
      category: "High Committee",
    },
    {
      name: "Head of Departments",
      role: "",
      image: "/images/HoDs.jpg",
      category: "Head of Departments",
    },
    // {
    //   "name": "Tan Shi Han (in dark blue t-shirt with words)",
    //   "role": "Head of Contest Protocol",
    //   "image": "/images/HoDs.jpg",
    //   "category": "Contest Protocol"
    // },
    // {
    //   "name": "Lim Jian Chuen (in black t-shirt, red jacket tied at waist)",
    //   "role": "Head of Logistics",
    //   "image": "/images/HoDs.jpg",
    //   "category": "Logistics"
    // },
    // {
    //   "name": "Terrence Cheng (in white t-shirt, hands in pockets)",
    //   "role": "Head of Multimedia",
    //   "image": "/images/HoDs.jpg",
    //   "category": "Multimedia"
    // },
    // {
    //   "name": "Muhammad Afique Raihan (in green dragon shirt, arms crossed)",
    //   "role": "Head of Publicity",
    //   "image": "/images/HoDs.jpg",
    //   "category": "Publicity"
    // },
    // {
    //   "name": "Ahmed Awelkair (in blue t-shirt, glasses, arms crossed)",
    //   "role": "Head of Technical",
    //   "image": "/images/HoDs.jpg",
    //   "category": "Technical"
    // },
    // {
    //   "name": "Lee Lik Shen (in black hoodie, yellow-patterned pants)",
    //   "role": "Head of Program and Protocol",
    //   "image": "/images/HoDs.jpg",
    //   "category": "Program and Protocol"
    // },
    // {
    //   "name": "Shaarani Navaratnam (in purple t-shirt, jeans, arms crossed)",
    //   "role": "Head of Sponsorship and Public Relations",
    //   "image": "/images/HoDs.jpg",
    //   "category": "Sponsorship and Public Relations"
    // },
    {
      name: "Tan Shi Han & Committee Members",
      role: "",
      image: "/images/C_CP.jpg",
      category: "Contest Protocol",
    },
    {
      name: "Lim Jian Chuen & Committee Members",
      role: "",
      image: "/images/C_L.jpg",
      category: "Logistics",
    },
    {
      name: "Terrence Cheng & Committee Members",
      role: "",
      image: "/images/C_M.jpg",
      category: "Multimedia",
    },
    {
      name: "Muhammad Afique & Committee Members",
      role: "",
      image: "/images/C_P.jpg",
      category: "Publicity",
    },
    {
      name: "Ahmed Awelkair & Committee Members",
      role: "",
      image: "/images/C_T.jpg",
      category: "Technical",
    },
    {
      name: "Lee Lik Shen & Committee Members",
      role: "",
      image: "/images/C_P&P.jpg",
      category: "Program and Protocol",
    },
    {
      name: "Shaarani Navaratnam & Committee Members",
      role: "",
      image: "/images/C_SPR.jpg",
      category: "Sponsorship and Public Relations",
    },
  ];

  const filteredMembers = committeeMembers.filter(
    (member) => member.category === activeCategory
  );

  // Function to go to the previous member
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredMembers.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next member
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="Committee">
      <div className={styles.container}>
        <h1 className={styles.heading}>THE PEOPLE BEHIND DEAN'S CUP 2024</h1>
        <h3 className={styles.title + " text-gray-500"}>
          Please Slide the Menu for More Departments
        </h3>

        <div className={styles.categoriesWrapper}>
          <div className={styles.categories}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  activeCategory === category ? styles.active : ""
                }`}
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
            
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {filteredMembers.map((item) => (
            <div className={styles.memberCard + " max-w-60"}>
                  <div className={styles.imageContainer}>
                    {/* <button onClick={handlePrevious} className={`${styles.arrowButton} ${styles.arrowLeft}`}>◀</button> */}
                    <img
                      src={item?.image}
                      alt={item?.name}
                    />
                    {/* <button onClick={handleNext} className={`${styles.arrowButton} ${styles.arrowRight}`}>▶</button> */}
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{item?.name}</h3>
                    <p>{item?.role}</p>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;
