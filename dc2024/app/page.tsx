import Image from "next/image";
import styles from "./page.module.css";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="mx-4">
      <Hero />
    </main>
  );
}
