import React from "react";
import Card from "react-bootstrap/Card";
import { SlArrowRight } from "react-icons/sl";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Briam Mora </span>
            from <span className="purple"> Costa Rica.</span>
            <br />
            <br />
            Beyond coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <SlArrowRight /> Playing new indie games with fresh and creative concepts
            </li>
            <li className="about-activity">
              <SlArrowRight /> Watching sci-fi and fantasy movies that ignite my imagination
            </li>
            <li className="about-activity">
              <SlArrowRight /> Recharging in nature to clear my mind and find inspiration
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
