// EventCard.tsx
import React from 'react';
import styles from './EventCard.module.css';

type EventCardProps = {
  title: string;
  departments: string;
  date: string;
  month: string;
  time: string;
};

const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  departments, 
  date, 
  month, 
  time 
}) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.infoSection}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.departments}>{departments}</p>
        </div>
        <div className={styles.dateSection}>
          <div className={styles.date}>{date}</div>
          <div className={styles.month}>{month}</div>
          <div className={styles.time}>{time}</div>
        </div>
      </div>
      <button className={styles.venueButton}>SEE VENUE</button>
    </div>
  );
};

export default EventCard;