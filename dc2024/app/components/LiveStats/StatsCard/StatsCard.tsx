import React from "react";
import styles from "./StatsCard.module.css";


const StatsCard: React.FC = () => {
  return (
    <div className={styles.scoreboard}>
      <p className={styles.title}>TITLE</p>
      <div className={styles.scoreContainer}>
        <div className={styles.teamIconBox}>
          <div className={styles.teamIconBoxLeft}>
            <img src="image" alt="logo" />
          </div>
        </div>
        <div className={styles.score}>
          3 - 0
        </div>
        <div className={styles.teamIconBox}>
          <div className={styles.teamIconBoxRight}>
            <img src="image" alt="logo" />
          </div>
        </div>
      </div>
      <button className={styles.watchButton}>
        WATCH LIVE
      </button>
    </div>
  )
}

export default StatsCard;