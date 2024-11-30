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
      { id: "1", name: "Siti Zainab", department: "SE", position: 1, score: 100 },
      { id: "2", name: "Kamal Ahmad", department: "AI", position: 2, score: 90 },
      { id: "3", name: "Laila Nordin", department: "CST", position: 3, score: 80 },
      { id: "4", name: "Nabila Yasmin", department: "IS", position: 4, score: 70 },
      { id: "5", name: "Rahim Ali", department: "CST", position: 5, score: 60 },
      { id: "6", name: "Farah Aminah", department: "SE", position: 6, score: 50 }
    ],
    Basketball: [
      { id: "1", name: "Usman Hafiz", department: "IS", position: 1, score: 95 },
      { id: "2", name: "Hafiz Zulkifli", department: "SE", position: 2, score: 85 },
      { id: "3", name: "Ali Rahman", department: "AI", position: 3, score: 75 },
      { id: "4", name: "Fatimah Nabilah", department: "IS", position: 4, score: 65 },
      { id: "5", name: "Kamal Ibrahim", department: "SE", position: 5, score: 55 },
      { id: "6", name: "Nur Farhana", department: "CST", position: 6, score: 45 },
      { id: "7", name: "Ahmad Razali", department: "AI", position: 7, score: 35 }
    ],
    Frisbee: [
      { id: "1", name: "Hana Rahimah", department: "AI", position: 1, score: 88 },
      { id: "2", name: "Nabila Yasmin", department: "CST", position: 2, score: 78 },
      { id: "3", name: "Rahim Shafiq", department: "SE", position: 3, score: 68 },
      { id: "4", name: "Kamal Bukhari", department: "CST", position: 4, score: 58 },
      { id: "5", name: "Nur Hafizah", department: "IS", position: 5, score: 48 }
    ],
    Futsal: [
      { id: "1", name: "Zainab Aliyah", department: "SE", position: 1, score: 100 },
      { id: "2", name: "Laila Mahirah", department: "IS", position: 2, score: 90 },
      { id: "3", name: "Hafiz Saiful", department: "CST", position: 3, score: 80 },
      { id: "4", name: "Nurul Amin", department: "AI", position: 4, score: 70 },
      { id: "5", name: "Azman Iqbal", department: "CST", position: 5, score: 60 },
      { id: "6", name: "Siti Aisyah", department: "IS", position: 6, score: 50 },
      { id: "7", name: "Farhan Aiman", department: "AI", position: 7, score: 40 }
    ],
    Chess: [
      { id: "1", name: "Ali Zaki", department: "AI", position: 1, score: 90 },
      { id: "2", name: "Fatimah Aina", department: "SE", position: 2, score: 80 },
      { id: "3", name: "Rahim Hadi", department: "IS", position: 3, score: 70 },
      { id: "4", name: "Ibrahim Hakim", department: "CST", position: 4, score: 60 }
    ],
    "Coding League": [
      { id: "1", name: "Mohammed Najib Yahya Alsharafi", department: "AI", position: 1, score: 98 },
      { id: "2", name: "Nurul Azlan", department: "AI", position: 2, score: 88 },
      { id: "3", name: "Zainab Rania", department: "IS", position: 3, score: 78 },
      { id: "4", name: "Azman Irfan", department: "SE", position: 4, score: 68 },
      { id: "5", name: "Ahmad Hanif", department: "SE", position: 5, score: 58 },
      { id: "6", name: "Usman Fadhil", department: "CST", position: 1, score: 50 }
    ],
    Kayak: [
      { id: "1", name: "Ahmad Yazid", department: "AI", position: 1, score: 93 },
      { id: "2", name: "Fatimah Rania", department: "IS", position: 2, score: 83 },
      { id: "3", name: "Siti Nazirah", department: "SE", position: 3, score: 73 },
      { id: "4", name: "Farah Nadhirah", department: "CST", position: 4, score: 63 }
    ],
    Pingpong: [
      { id: "1", name: "Ibrahim Rahman", department: "AI", position: 1, score: 95 },
      { id: "2", name: "Rahim Dani", department: "CST", position: 2, score: 85 },
      { id: "3", name: "Farah Safiya", department: "SE", position: 3, score: 75 },
      { id: "4", name: "Usman Ridwan", department: "IS", position: 4, score: 65 }
    ],
    "Tug of War": [
      { id: "1", name: "Ahmad Razali", department: "CST", position: 1, score: 100 },
      { id: "2", name: "Ali Reza", department: "IS", position: 2, score: 90 },
      { id: "3", name: "Hafiz Shahril", department: "AI", position: 3, score: 80 },
      { id: "4", name: "Kamal Arif", department: "SE", position: 4, score: 70 },
      { id: "5", name: "Laila Daniyah", department: "CST", position: 5, score: 60 }
    ],
    Volleyball: [
      { id: "1", name: "Nurul Huda", department: "IS", position: 1, score: 96 },
      { id: "2", name: "Hana Arina", department: "CST", position: 2, score: 86 },
      { id: "3", name: "Ali Mikhail", department: "AI", position: 3, score: 76 },
      { id: "4", name: "Fatimah Nazimah", department: "SE", position: 4, score: 66 }
    ],
    Valorant: [
      { id: "1", name: "Hafiz Afiq", department: "SE", position: 1, score: 99 },
      { id: "2", name: "Rahim Arif", department: "AI", position: 2, score: 89 },
      { id: "3", name: "Siti Maisarah", department: "CST", position: 3, score: 79 },
      { id: "4", name: "Ibrahim Khalid", department: "IS", position: 4, score: 69 },
      { id: "5", name: "Nabila Azmi", department: "CST", position: 5, score: 59 }
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
