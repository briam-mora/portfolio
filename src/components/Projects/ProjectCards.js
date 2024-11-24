import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="project-card-img"
      />
      <Card.Body className="d-flex flex-column">
        {/* Title */}
        <Card.Title className="purple">{props.title}</Card.Title>

        {/* Client, Industry, and Role */}
        <div className="project-details">
          {props.client && (
            <Card.Text style={{ marginBottom: 0 }}>
              <strong>Client:</strong> {props.client}
            </Card.Text>
          )}
          {props.industry && (
            <Card.Text style={{ marginBottom: 0 }}>
              <strong>Industry:</strong> {props.industry}
            </Card.Text>
          )}
          {props.role && (
            <Card.Text style={{ marginBottom: "1em" }}>
              <strong>Role:</strong> {props.role}
            </Card.Text>
          )}
        </div>

        {/* Description */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Buttons */}
        <div className="mt-auto">
          {props.youtubeLink && (
            <Button
              variant="primary"
              href={props.youtubeLink}
              target="_blank"
              className="project-button"
            >
              <BsYoutube /> &nbsp; YouTube
            </Button>
          )}
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="project-button"
            >
              <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-button"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
