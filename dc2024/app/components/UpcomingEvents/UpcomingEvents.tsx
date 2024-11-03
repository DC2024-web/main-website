// File: UpcomingEvents/UpcomingEvents.tsx
import React from 'react';
import EventCard from './EventCard';
import styles from './UpcomingEvents.module.css';

const eventList = [
  { title: 'OPENING CEREMONY', departments: 'All Departments', date: '19 Nov', time: '1pm - 2pm' },
  { title: 'BADMINTON', departments: 'CS vs IS', date: '22 Nov', time: '2pm - 3pm' },
  { title: 'TUG OF WAR', departments: 'CSN vs SE', date: '24 Nov', time: '3pm - 4pm' },
  { title: 'SPRINT', departments: 'MC vs AI', date: '25 Nov', time: '5pm - 6pm' },
  { title: 'CLOSING CEREMONY', departments: 'All Departments', date: '28 Nov', time: '6pm - 7pm' },
];

const UpcomingEvents: React.FC = () => {
  return (
    <section id="Upcoming Events">
    <div className={styles.container}>
      <h2 className={styles.heading}>SCHEDULE</h2>
      {eventList.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          departments={event.departments}
          date={event.date}
          time={event.time}
        />
      ))}
    </div>
    </section>
  );
};

export default UpcomingEvents;