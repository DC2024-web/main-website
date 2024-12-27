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
    Bowling: [
      { id: "1", name: "CST", department: "CST", position: 1, score: 99 },
      { id: "2", name: "SE", department: "SE", position: 2, score: 89 },
      { id: "3", name: "IS", department: "IS", position: 3, score: 79 }
    ],
    Badminton: [
      { id: "1", name: "CST Team A", department: "CST", position: 1, score: 99 },
      { id: "2", name: "AI Team A", department: "AI", position: 2, score: 89 },
      { id: "3", name: "SE Team A", department: "SE", position: 3, score: 79 }
    ],
    "Basketball 3x3 Male": [
      { id: "1", name: "AI Team A", department: "AI", position: 1, score: 99 },
      { id: "2", name: "CST Team A", department: "CST", position: 2, score: 89 },
      { id: "3", name: "IS Team B", department: "IS", position: 3, score: 79 }
    ],
    "Basketball 3x3 Female": [
      { id: "1", name: "IS Team A", department: "IS", position: 1, score: 99 },
      { id: "2", name: "AI Team B", department: "AI", position: 2, score: 89 },
      { id: "3", name: "CST Team B", department: "CST", position: 3, score: 79 }
    ],
    "Captain Ball": [
      { id: "1", name: "IS Team B", department: "IS", position: 1, score: 99 },
      { id: "2", name: "IS Team A", department: "IS", position: 2, score: 89 },
      { id: "3", name: "AI Team A", department: "AI", position: 3, score: 79 }
    ],
    "Kayak Male": [
      { id: "1", name: "IS", department: "IS", position: 1, score: 99 },
      { id: "2", name: "SE", department: "SE", position: 2, score: 89 },
      { id: "3", name: "CST", department: "CST", position: 3, score: 79 }
    ],
    "Kayak Female": [
      { id: "1", name: "IS", department: "IS", position: 1, score: 99 },
      { id: "2", name: "CST", department: "CST", position: 2, score: 89 },
      { id: "3", name: "CST", department: "CST", position: 3, score: 79 }
    ],
    // "Fifa": [
    //   { id: "1", name: "AI", department: "AI", position: 1, score: 99 },
    //   { id: "2", name: "SE", department: "SE", position: 2, score: 89 },
    //   { id: "3", name: "SE", department: "SE", position: 3, score: 79 }
    // ],
    "Dodgeball": [
      { id: "1", name: "IS Team B", department: "IS", position: 1, score: 99 },
      { id: "2", name: "IS Team A", department: "IS", position: 2, score: 89 },
      { id: "3", name: "AI Team A", department: "AI", position: 3, score: 79 }
    ],
    Frisbee: [
      { id: "1", name: "AI Team A", department: "AI", position: 1, score: 99 },
      { id: "2", name: "CST Team A", department: "CST", position: 2, score: 89 },
      { id: "3", name: "SE Team B", department: "SE", position: 3, score: 79 }
    ],
    // Futsal: [
    //   { id: "1", name: "SE Team B", department: "SE", position: 1, score: 99 },
    //   { id: "2", name: "AI Team B", department: "AI", position: 2, score: 89 },
    //   { id: "3", name: "IS Team A", department: "IS", position: 3, score: 79 }
    // ],
    "Chess Male": [
      { id: "1", name: "AI", department: "AI", position: 1, score: 90 },
      { id: "2", name: "SE", department: "SE", position: 2, score: 80 },
      { id: "3", name: "CST", department: "CST", position: 3, score: 70 }
    ],
    "Chess Female": [
      { id: "1", name: "CST", department: "CST", position: 1, score: 90 },
      { id: "2", name: "SE", department: "SE", position: 2, score: 80 },
      { id: "3", name: "SE", department: "SE", position: 3, score: 70 }
    ],
    "Coding League": [
      { id: "1", name: "IS Team A", department: "IS", position: 1, score: 99 },
      { id: "2", name: "AI Team B", department: "AI", position: 2, score: 89 },
      { id: "3", name: "SE Team A", department: "SE", position: 3, score: 79 }
    ],
    "Pingpong Male": [
      { id: "1", name: "CST", department: "CST", position: 1, score: 90 },
      { id: "2", name: "IS", department: "IS", position: 2, score: 80 },
      { id: "3", name: "AI", department: "AI", position: 3, score: 70 }
    ],
    "Pingpong Female": [
      { id: "1", name: "AI Team 2", department: "AI", position: 1, score: 90 },
      { id: "2", name: "IS Team 1", department: "IS", position: 2, score: 80 },
      { id: "3", name: "SE Team 1", department: "SE", position: 3, score: 70 }
    ],
    "Tug of War Male": [
      { id: "1", name: "AI", department: "AI", position: 1, score: 99 },
      { id: "2", name: "IS", department: "IS", position: 2, score: 89 },
      { id: "3", name: "SE", department: "SE", position: 3, score: 79 }
    ],
    "Tug of War Female": [
      { id: "1", name: "SE", department: "SE", position: 1, score: 99 },
      { id: "2", name: "AI", department: "AI", position: 2, score: 89 },
      { id: "3", name: "IS", department: "IS", position: 3, score: 79 }
    ],
    Volleyball: [
      { id: "1", name: "CST Team B", department: "CST", position: 1, score: 99 },
      { id: "2", name: "AI Team C", department: "AI", position: 2, score: 89 },
      { id: "3", name: "AI Team A", department: "AI", position: 3, score: 79 }
    ],
    Valorant: [
      { id: "1", name: "SE Team B", department: "SE", position: 1, score: 99 },
      { id: "2", name: "AI Team B", department: "AI", position: 2, score: 89 },
      { id: "3", name: "IS Team A", department: "IS", position: 3, score: 79 }
    ],
    MLBB: [
      { id: "1", name: "SE Team A", department: "SE", position: 1, score: 99 },
      { id: "2", name: "CST Team A", department: "CST", position: 2, score: 89 },
      { id: "3", name: "AI Team A", department: "AI", position: 3, score: 79 }
    ],
    "Mario Kart": [
      { id: "1", name: "AI", department: "AI", position: 1, score: 99 },
      { id: "2", name: "CST", department: "CST", position: 2, score: 89 },
      { id: "3", name: "SE", department: "SE", position: 3, score: 79 }
    ],
    "Spoon Pong": [
      { id: "1", name: "IS Team A", department: "IS", position: 1, score: 99 },
      { id: "2", name: "SE Team B", department: "SE", position: 2, score: 89 },
      { id: "3", name: "AI Team A", department: "AI", position: 3, score: 79 }
    ],
    "Sugar Hunt": [
      { id: "1", name: "CST", department: "CST", position: 1, score: 99 },
      { id: "2", name: "AI", department: "AI", position: 2, score: 89 },
      { id: "3", name: "IS", department: "IS", position: 3, score: 79 }
    ],
    "Sponge Water Relay": [
      { id: "1", name: "CST Team A", department: "CST", position: 1, score: 99 },
      { id: "2", name: "SE Team B", department: "SE", position: 2, score: 89 },
      { id: "3", name: "CST Team B", department: "CST", position: 3, score: 79 }
    ]
  }
  );

  const [chosenSport, setChosenSport] = useState<string>("Badminton");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleSportChange = (sport: string) => {
    setChosenSport(sport);
    setShowDropdown(false);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.cardTop}>
          <div className={styles.titleSection}>
            <p className={styles.cardTitle}>{chosenSport}</p>
            <span className={styles.burger}
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              ☰
            </span>
            <div className={styles.dropdownContainer}>
              {showDropdown && (
                <div className={styles.dropdown}>
                  {
                    Object.keys(competitions).map((sport: string) => (
                      <div
                        key={sport}
                        className={styles.dropdownItem}
                        onClick={() => handleSportChange(sport)}
                      >
                        {sport}
                      </div>
                    ))
                  }
                </div>
              )}
            </div>
          </div>

          <div className={styles.rankingImageBoxes}>
            {/* Second Place */}
            <div className={`${styles.rankingImageBoxSecond} ${styles.rankingBox}`}>
              <div className={styles.rankCircle}>2</div>
              <img
                src={`/images/DC24_${competitions[chosenSport][1].department}_LOGO.png`}
                alt={competitions[chosenSport][1].department}
              />
              <p className={styles.rankingTitle}>{competitions[chosenSport][1].name}</p>
            </div>

            {/* First Place */}
            <div className={`${styles.rankingImageBoxFirst} ${styles.rankingBox}`}>
              <div className={styles.rankCircle}>1</div>
              <img
                src={`/images/DC24_${competitions[chosenSport][0].department}_LOGO.png`}
                alt={competitions[chosenSport][0].department}
              />
              <p className={styles.rankingTitle}>{competitions[chosenSport][0].name}</p>
            </div>

            {/* Third Place */}
            <div className={`${styles.rankingImageBoxThird} ${styles.rankingBox}`}>
              <div className={styles.rankCircle}>3</div>
              <img
                src={`/images/DC24_${competitions[chosenSport][2].department}_LOGO.png`}
                alt={competitions[chosenSport][2].department}
              />
              <p className={styles.rankingTitle}>
                {competitions[chosenSport][2].name}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cardBottom}>
          {/* loop over remaining players in chosencompetition (after top 3) and display by passing prop to LeaderBoardListCard */}
          {competitions[chosenSport].slice(3).map((player, ind) => (
            <LeaderBoardListCard
              key={player.id}
              playerName={player.name}
              department={player.department}
              rank={player.position}
              score={player.score}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderBoardCard;
