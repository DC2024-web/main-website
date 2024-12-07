'use client'
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import styles from "./Navbar.module.css";
import Divider from "../Divider/Divider";

interface MainNavbarProps { }

const MainNavbar: React.FC<MainNavbarProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [hideNavbar, setHideNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleTabClick = (tabName: string): void => {
    setActiveTab(tabName);
    const section = document.getElementById(tabName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (isOpen) {
      // If the navbar is expanded, do not hide it
      return;
    }
  
    const currentScrollY = window.scrollY;
    if (currentScrollY > scrollY) {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const toggle = () => {
    console.log('Toggle clicked, current state:', isOpen); // For debugging
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="transparent" 
      dark expand="md" 
      className={`${styles.mainNavbar} mx-2 ${hideNavbar && !isOpen ? styles.navbarHidden : ""}`}>
        <NavbarBrand href="/" className={`${styles.brand} me-auto mt-3`}>
            <div className="sm:ms-5">
            <p className="d-flex flex-row text-white font-light align-items-center">
              <img src="images/DC2024_LOGO.png" alt="" className={styles.DC24Logo}/>
              DEAN'S CUP &nbsp;
              <span className="font-bold"> 2024</span>
            </p>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" pills>
            {[
              "Home",
              "Event Tentative",
              "Committee",
              "Sponsors",        
              // "Live Stats",
              // "Leaderboard",
              "View Merch",
              "FAQs",
            ].map((item) => (
              <NavItem key={item}>
                <NavLink
                  href="#"
                  className={` ${activeTab === item ? styles.activetab : "text-white"}`}
                  onClick={() => handleTabClick(item)}
                >
                  {item}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
      <Divider />
    </div>
  );
};

export default MainNavbar;
