// File: UpcomingEvents/EventCard.tsx
import React from 'react';
import styles from './EventCard.module.css';

type EventCardProps = {
  title: string;
  departments: string;
  date: string;
  time: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, departments, date, time }) => {
  return (
    <div className={styles.card}>
      <div className={styles.infoSection}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.departments}>{departments}</p>
      </div>
      <div className={styles.dateSection}>
        <h2 className={styles.date}>{date}</h2>
        <p className={styles.time}>{time}</p>
      </div>
      <button className={styles.venueButton}>SEE VENUE</button>
    </div>
  );
};

export default EventCard;