"use client";

import { use, useState } from "react";
import styles from "./LeaderBoardCard.module.css";
import LeaderBoardListCard from "./LeaderBoardListCard/LeaderBoardListCard";

const LeaderBoardCard: React.FC = () => {
  type Competitions = {
    [key: string]: { id: string; name: string; department: string; position: number; score: number }[];
  }
  // replace with server side fetching of data
  const [competitions, setCompetitions] = useState<Competitions>({
    Badminton: [
      { id: "1", name: "Ahmad", department: "SE", position: 1, score: 100 },
      { id: "2", name: "Siti", department: "AI", position: 2, score: 80 },
      { id: "3", name: "Ali", department: "CST", position: 3, score: 60 },
      { id: "4", name: "Fatimah", department: "IS", position: 4, score: 40 },
      { id: "2", name: "Siti", department: "AI", position: 5, score: 30 },
      { id: "3", name: "Ali", department: "CST", position: 6, score: 20 },
      { id: "4", name: "Fatimah", department: "IS", position: 7, score: 10 }
    ],
    TableTennis: [
      { id: "1", name: "Azman", department: "SE", position: 1, score: 100 },
      { id: "2", name: "Nurul", department: "AI", position: 2, score: 80 },
      { id: "3", name: "Hafiz", department: "CST", position: 3, score: 60 },
      { id: "4", name: "Zainab", department: "IS", position: 4, score: 40 }
    ]
  });

  const [chosenSport, setChosenSport] = useState<string>("Badminton");

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.cardTop}>
          <div className={styles.titleSection}>
            <p className={styles.cardTitle}>{chosenSport}</p>
            <span className={styles.burger}>☰</span>
          </div>

          <div className={styles.rankingImageBoxes}>
            {/* Second Place */}
            <div className={`${styles.rankingImageBoxSecond} ${styles.rankingBox}`}>
              <div className={styles.rankCircle}>2</div> {/* Floating rank circle */}
              <img
                src={`/images/DC24_${competitions[chosenSport][1].department}_LOGO.png`}
                alt={competitions[chosenSport][1].department}
              />
              <p className={styles.rankingTitle}>{competitions[chosenSport][1].name}</p>
            </div>

            {/* First Place */}
            <div className={`${styles.rankingImageBoxFirst} ${styles.rankingBox}`}>
              <div className={styles.rankCircle}>1</div> {/* Floating rank circle */}
              <img
                src={`/images/DC24_${competitions[chosenSport][0].department}_LOGO.png`}
                alt={competitions[chosenSport][0].department}
              />
              <p className={styles.rankingTitle}>{competitions[chosenSport][0].name}</p>
            </div>

            {/* Third Place */}
            <div className={`${styles.rankingImageBoxThird} ${styles.rankingBox}`}>
              <div className={styles.rankCircle}>3</div> {/* Floating rank circle */}
              <img
                src={`/images/DC24_${competitions[chosenSport][2].department}_LOGO.png`}
                alt={competitions[chosenSport][2].department}
              />
              <p className={styles.rankingTitle}>{competitions[chosenSport][2].name}</p>
            </div>
          </div>


        </div>
        <div className={styles.cardBottom}>
          {/* loop over remaining players in chosencompetition (after top 3) and display by passing prop to LeaderBoardListCard */}
          {competitions[chosenSport].slice(3).map((player, ind) => (
            <LeaderBoardListCard key={player.id} playerName={player.name} department={player.department} rank={player.position} score={player.score} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderBoardCard;
