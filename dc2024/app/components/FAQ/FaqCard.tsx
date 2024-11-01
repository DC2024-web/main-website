import React from "react";
import styles from "./FAQ.module.css";

interface props {
  faq: {
    open: boolean;
    question: string;
    answer: string;
  };
  index: number;
  toggleFAQ: any;
}
const FAQ = ({ faq, index, toggleFAQ }: props) => {
  return (
    <div
    className={`${styles.faq} ${faq.open ? styles.faqOpen : ""}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={styles.faqQuestion}>{faq.question}</div>
      <div className={styles.faqAnswer}>{faq.answer}</div>
    </div>
  );
};

export default FAQ;
