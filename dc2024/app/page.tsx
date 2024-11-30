import Image from "next/image";
import styles from "./page.module.css";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero/Hero";
import Merch from "./components/Merch/Merch";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Divider from "./components/Divider/Divider";
import EventTentative from "./components/EventTentative/EventTentative";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import Committee from "./components/Committee/Committee";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
// import LiveStats from "./components/LiveStats/LiveStats";
import Sponsors from "./components/Sponsors/Sponsors";

export default function Home() {
  return (
    <main className="mx-4">
      <Hero />
      <EventTentative />
      {/* <LiveStats /> */}
      {/* <LeaderBoard /> */}
      <Committee />
      <Sponsors />
      <Merch />
      <FAQ />
      <Footer />
    </main>
  );
}