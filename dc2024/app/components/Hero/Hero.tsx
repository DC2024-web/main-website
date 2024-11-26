import React from 'react';
import { Button, Row, Tooltip } from 'reactstrap';
import styles from './Hero.module.css';
import ViewResourcesButton from './ViewResourcesButton';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  const numberData = [
    {amount: 500, title: 'Hours of Experience'},
    {amount: 100, title: 'Page Visits'},
    {amount: 15, title: 'Leader of Projects'},
  ];

  const textData = {
    description: "The Dean’s Cup is the ultimate showdown where four departments — Artificial Intelligence, Computer System and Technology, Information Systems and Software Engineering — come together to compete in a series of exciting sports and activities. This event is more than just a battle; it’s a celebration of teamwork, skill, and the vibrant spirit of our faculty. Each department will put forth their best efforts, showcasing their talents and determination to claim victory. Who will emerge as the champion? Let the games begin!"
  }

  return (
    <section id="Home">
        <div className={`container ${styles.homeContainer}`}>
            <div className="d-flex flex-wrap row">
                <div className="col-12 col-md-6">
                    <div className={styles.WhoAmIContainer}>
                        <h1 className="text-white font-light">
                            Departments Collide: Who Will Rise in the <span className='font-bold'>Dean's Cup</span>?
                        </h1>
                        <p className={styles.personalDescription}>
                            {textData.description}
                        </p>
                        {/* Add the CountdownTimer here */}
                        <div className="my-4">
                            <h3 className="text-white mb-3">Time Remaining</h3>
                            <CountdownTimer />
                        </div>
                        <div className="d-flex flex-row justify-content-start align-items-center button-container">
                            <ViewResourcesButton title="See Who's Winning" link={"https://dc24.vercel.app/leaderboard"}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src="/images/hero-image.jpg" alt="Hero Image" className='rounded'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="d-flex flex-wrap justify-content-evenly align-items-center">
                        {/* Row below */}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default Hero;