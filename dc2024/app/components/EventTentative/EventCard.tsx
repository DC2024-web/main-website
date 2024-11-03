import React from 'react';
import styles from './EventCard.module.css';

interface EventCardProps {
  title: string;
  department: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, department, date }) => {
  // Assuming date comes in as "DD Nov" format
  const [day, month] = date.split(' ');
  
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.department}>{department}</p>
      </div>
      <div className={styles.dateContainer}>
        <div className={styles.date}>
          <div>{day}</div>
          <div>{month}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;