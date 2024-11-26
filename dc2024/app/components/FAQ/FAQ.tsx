'use client'
import React, { useState } from 'react'
import FaqCard from './FaqCard';
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Who are eligible to join this competition?",
      answer:
        "Any student or lecturer from UM or outside of UM.",
      open: true
    },
    {
      question: "How to join this competition?",
      answer: "Visit Our Instagram page: https://www.instagram.com/deanscupfcsit/",
      open: false
    },
    {
      question:
        "Are you able to join Dean's Cup Competitions if you are a committe member?",
      answer: "Yes.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
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
