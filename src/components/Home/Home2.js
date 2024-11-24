import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vr.png";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My programming journey began with a passion for game development and problem-solving. With over five years of professional experience, I have developed expertise in technologies like
              <br />
              <b className="purple"> React.js, Node.js, and Unity.</b>
              <br />
              <br />
              I specialize in building
              <b className="purple"> interactive web and mobile applications, </b>
              with a strong focus on
              <br />
              <b className="purple"> XR (Extended Reality) and Artificial Intelligence.</b>
              <br />
              <br />
              Whether leading teams or crafting solutions hands-on, I am inspired by the intersection of technology and creativity, constantly pushing the boundaries to deliver transformative, future-ready platforms.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/briammora/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/briam_mora"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
