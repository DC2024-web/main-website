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

interface MainNavbarProps {}

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

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="transparent"
        dark
        expand="md-auto"  // Ensure expand is set to "md"
        className={`${styles.mainNavbar} mx-2 ${hideNavbar ? styles.navbarHidden : ""}`}
      >
        <NavbarBrand href="/" className={`${styles.brand} me-auto mt-3`}>
          <div className="ms-5">
            <p className="text-white font-light">
              DEAN'S CUP
              <span className="font-bold"> 2024</span>
            </p>
          </div>
        </NavbarBrand>

        {/* This section is always responsive */}
        <Nav className="me-auto" pills>
          <NavItem>
            <NavLink
              href="/"
              className={` ${activeTab === "Home" ? styles.activetab : "text-white"}`}
              onClick={() => handleTabClick("Home")}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={` ${activeTab === "Event Tentative" ? styles.activetab : "text-white"}`}
              onClick={() => handleTabClick("Event Tentative")}
            >
              Event Tentative
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={` ${activeTab === "Committee" ? styles.activetab : "text-white"}`}
              onClick={() => handleTabClick("Committee")}
            >
              Committee
            </NavLink>
          </NavItem>
        </Nav>

        {/* This is the toggle and collapse section for smaller screens */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills className="flex-column">
            {[
              "Sponsors",
              "Upcoming Events",
              "Live Stats",
              "Leaderboard",
              "Buy Merch",
              "Faqs"
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
