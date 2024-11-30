'use client'
import React, { useState } from 'react'
import FaqCard from './FaqCard';
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Dean's Cup 2024?",
      answer: "Dean’s Cup 2024 is an annual program organized by the Universiti Malaya Computer Science Association (PEKOM) at the Faculty of Computer Science and Information Technology (FSKTM). The program aims to strengthen relationships among students, lecturers, and staff at FSKTM.",
      open: true
    },
    {
      question: "What is the purpose of Dean's Cup?",
      answer: "The program fosters teamwork, leadership, creativity, and communication skills among students, lecturers, and staff, while also promoting a healthy and cheerful lifestyle.",
      open: false
    },
    {
      question: "What are the categories of games in Dean's Cup?",
      answer: "The four categories are sports, e-sports, indoor games (casual games), and computer programming.",
      open: false
    },
    {
      question: "Which departments are involved in Dean's Cup?",
      answer: "The participating departments are Artificial Intelligence, Software Engineering, Information Systems, and Computer Systems and Technology.",
      open: false
    },
    {
      question: "How does Dean's Cup promote leadership among students?",
      answer: "Students are given the opportunity to manage the preparation and implementation of Dean's Cup, enhancing their leadership skills.",
      open: false
    },
    {
      question: "How to join this competition?",
      answer: "Visit our Instagram page: https://www.instagram.com/deanscupfcsit/",
      open: false
    },
    {
      question: "Who can participate in Dean's Cup?",
      answer: "Students, lecturers, and staff from all departments at FSKTM are encouraged to participate.",
      open: false
    },
    {
      question: "How does Dean's Cup encourage teamwork?",
      answer: "Participants from various departments collaborate to plan and execute activities, enhancing their teamwork skills.",
      open: false
    },
    {
      question: "How does the program contribute to creativity?",
      answer: "Participants are encouraged to design diverse and engaging activities, fostering creativity among students, lecturers, and staff.",
      open: false
    },
    {
      question: "Where can I get updates about Dean's Cup?",
      answer: "Follow us on our official Instagram page: https://www.instagram.com/deanscupfcsit/",
      open: false
    }
  ]);

  interface Faq {
    question: string;
    answer: string;
    open: boolean;
  }

  const toggleFAQ = (index: number): void => {
    setFaqs(
      faqs.map((faq: Faq, i: number) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section id="FAQs">
      <h1 className='text-center text-white'>FAQS</h1>
      <div className={styles.faqs}>
        {faqs.map((faq, index) => (
          <FaqCard faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  )
}

export default FAQ
