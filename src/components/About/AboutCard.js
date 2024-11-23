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
              <SlArrowRight /> Playing indie games
            </li>
            <li className="about-activity">
              <SlArrowRight /> Watching sci-fi and fantasy movies
            </li>
            <li className="about-activity">
              <SlArrowRight /> Recharging in nature
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
