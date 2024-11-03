import React from 'react';
import EventCard from './EventCard';
import styles from './EventTentative.module.css'; // Assuming you have a CSS module for the overall styling

const eventDetails = [
  { title: 'Opening Ceremony', department: 'All Departments', date: '19 Nov' },
  { title: 'Badminton', department: 'CS vs IS', date: '22 Nov' },
  { title: 'Tug of War', department: 'CSN vs SE', date: '24 Nov' },
  { title: 'Sprint', department: 'MC vs AI', date: '25 Nov' },
  { title: 'Closing Ceremony', department: 'All Departments', date: '28 Nov' },
];

const EventTentative: React.FC = () => {
  return (
    <section id="Event Tentative">
    <div className={styles.container}>
      {eventDetails.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          department={event.department}
          date={event.date}
        />
      ))}
      <button className={styles.fullScheduleButton}>Check the Full Schedule</button>
    </div>
    </section>
  );
};

export default EventTentative;