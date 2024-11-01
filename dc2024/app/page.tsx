import Image from "next/image";
import styles from "./page.module.css";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero/Hero";
import Merch from "./components/Merch/Merch";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Divider from "./components/Divider/Divider";

export default function Home() {
  return (
    <main className="mx-4">
      <Hero />
      <Merch/>
      <FAQ/>

      <Divider/>
      
      <Footer/>
    </main>
  );
}
