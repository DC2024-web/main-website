import React from "react";
import styles from "./LiveStats.module.css";
import StatsCard from "./StatsCard/StatsCard";


const LiveStats: React.FC = () => {
  return (
    <section id="LiveStats" className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>LIVE <strong>STATS</strong></h3>
        <div className={styles.scoreboards}>
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </div>
    </section>
  )
}

export default LiveStats;