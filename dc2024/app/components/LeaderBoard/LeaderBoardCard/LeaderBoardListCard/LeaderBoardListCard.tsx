import React from "react";
import styles from "./LeaderBoardListCard.module.css";

interface LeaderBoardListCardProps {
  playerName: string;
  department: string;
  rank: number;
  score: number;
}

const LeaderBoardListCard: React.FC<LeaderBoardListCardProps> = ({ playerName, department,  rank, score }) => {
  return (
    <div className={styles.listCard}>
      <span className={styles.rank}>{rank}.</span>
      <img src={`/images/DC24_${department}_LOGO.png`} className={styles.departmentImage} alt={department}/>
      <span>{playerName}</span>
    </div>
  );
};

export default LeaderBoardListCard;
