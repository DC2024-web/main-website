import React from "react";
import styles from "./LeaderBoardCard.module.css";
import LeaderBoardListCard from "./LeaderBoardListCard/LeaderBoardListCard";

const LeaderBoardCard: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.cardTop}>
          <div className={styles.titleSection}>
            <p className={styles.cardTitle}>Badminton</p>
            <span className={styles.burger}>☰</span>
          </div>

          <div className={styles.rankingImageBoxes}>

            <div className={`${styles.rankingImageBoxSecond} ${styles.rankingBox}`}>
              <img src="lol" alt="B"/>
              <p className={styles.rankingTitle}>B</p>
            </div>

            <div className={`${styles.rankingImageBoxFirst} ${styles.rankingBox}`}>
              <img src="lol" alt="A"/>
              <p className={styles.rankingTitle}>A</p>
            </div>

            <div className={`${styles.rankingImageBoxThird} ${styles.rankingBox}`}>
              <img src="lol" alt="C"/>
              <p className={styles.rankingTitle}>C</p>
            </div>

          </div>
          
        </div>
        <div className={styles.cardBottom}>
          <LeaderBoardListCard />
          <LeaderBoardListCard />
          <LeaderBoardListCard />
          <LeaderBoardListCard />
          <LeaderBoardListCard />
        </div>
      </div>
    </section>
  );
};

export default LeaderBoardCard;
