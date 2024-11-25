"use client";
import React from "react";
import Divider from "../Divider/Divider";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinAlt } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

const links = {
  linkedin:
    "https://www.linkedin.com/in/ahmed-awelkair-ahmed-abdalla-955116306/",
  instagram: "https://www.instagram.com/deanscupfcsit/",
  phonenumber: "tel:+601172358440",
  email: "mailto:ahmed.jimi.awelkeir@gmail.com",
  github: "https://github.com/a7m-1st",
  resources: "https://drive.google.com/drive/folders/1peJWYmRUyrRhd1a2nHtEZqzkEo1_9sEj?usp=sharing",
  threads: "https://www.threads.net/@a7m_1st",
  tiktok: "https://tiktok.com/@deanscupfcsit",
  youtube: "https://www.youtube.com/@pekomum"
};

const Footer = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };  

  return (
    <>
      <section id="Footer" />
      <Container>
        <Row className="d-flex my-3">
          <h1 className="text-white text-center">CONTACT US</h1>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-center gap-10">
            <img
              src="images/UM_LOGO.png"
              alt=""
              className="img-fluid w-1/4 md:w-1/6 h-20"
            />
            <img
              src="images/DC2024_LOGO.png"
              alt=""
              className="img-fluid w-1/5 md:w-1/6 h-20"
            />
            <img
              src="images/PEKOM_LOGO.png"
              alt=""
              className="img-fluid w-1/4 md:w-1/6 h-20"
            />
          </Col>
        </Row>
        <Row className="d-flex mt-3">
          <p className="text-center text-secondary">
            Made with 💙 by Dean's Cup Technical Team 2024
          </p>
          <small className="text-center text-secondary">
            ©DEAN'S CUP 2024. All rights reserved.
          </small>

          <div className="d-flex flex-row justify-content-center gap-5 my-2">
            <Link href={links.instagram}>
              <FontAwesomeIcon icon={faInstagram} color="white" />
            </Link>
            <Link href={links.tiktok}>
              <FontAwesomeIcon icon={faTiktok} color="white" />
            </Link>
            <Link href={links.youtube}>
              <FontAwesomeIcon icon={faYoutube} color="white" />
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
