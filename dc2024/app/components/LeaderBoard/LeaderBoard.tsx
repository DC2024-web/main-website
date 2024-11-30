import React from "react";
import LeaderBoardCard from "./LeaderBoardCard/LeaderBoardCard";
import styles from "./LeaderBoard.module.css";


const LeaderBoard: React.FC = () => {
  return (
    <section id="LeaderBoard" className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.heading}>LEADERBOARD</h3>
        <p>Who's on top? Check the live leaderboard and see who's leading the pack!</p>
        <LeaderBoardCard />
      </div>
    </section>
  )
}

export default LeaderBoard;