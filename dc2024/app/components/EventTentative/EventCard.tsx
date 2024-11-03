import React from 'react';
import styles from './EventCard.module.css';

interface EventCardProps {
  title: string;
  department: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, department, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.department}>{department}</p>
      </div>
      <div className={styles.dateContainer}>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default EventCard;