'use client';

// EventTentative.tsx
import React from 'react';
import EventCard from './EventCard';
import styles from './EventTentative.module.css';

const eventDetails = [
  { title: '3pm-5pm (Friday)', department: 'Bowling', date: '6 Dec' },
  { title: '7pm-9pm (Wednesday)', department: 'Badminton, Volleyball', date: '11 Dec' },
  { title: '7pm-9pm (Thursday)', department: 'Badminton (Cont.), Volleyball (Cont.)', date: '12 Dec' },
  { title: '6pm-9pm (Friday)', department: 'Mobile Legend Bang Bang, Valorant', date: '13 Dec' },
  { title: '7:30am-1pm (Saturday)', department: 'Captain ball, Badminton (Cont.), Volleyball (Cont.), Tug of War, Ping Pong, Telematch (Sukaneka) - Spoon Pong, Sugar Hunt, Water Sponge Relay', date: '14 Dec' },
  { title: '3pm-7pm (Saturday)', department: 'Badminton (Cont.), Volleyball (Cont.), 3x3 Basketball, Futsal', date: '14 Dec' },
  { title: '7:30am-12pm (Sunday)', department: 'Kayak', date: '15 Dec' },
  { title: '7:30am-1:30pm (Sunday)', department: 'Dodgeball, Frisbee, FC25, MLBB (Finals)', date: '15 Dec' },
  { title: '8am-1pm (Sunday)', department: 'Valorant (Finals), Typing Speed', date: '15 Dec' },
  { title: '8:30am-12pm (Sunday)', department: 'Chess, Mario Kart, Coding League', date: '15 Dec' },
  { title: '3pm-5:30pm (Sunday)', department: 'Closing Ceremony', date: '15 Dec' },
];

const EventTentative: React.FC = () => {
  const handleCheckSchedule = () => {
    const upcomingEventsSection = document.getElementById('Upcoming Events');
    upcomingEventsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="Event Tentative" className={styles.section}>
      <h1 className={styles.sectionTitle}>EVENT TENTATIVE</h1>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {eventDetails.map((event, index) => (
            <EventCard 
              key={index} 
              title={event.title} 
              department={event.department} 
              date={event.date} 
            />
          ))}
        </div>
        {/* <div className={styles.buttonContainer}>
          <button 
            className={styles.fullScheduleButton}
            onClick={handleCheckSchedule}
          >
            Check the Full Schedule
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default EventTentative;