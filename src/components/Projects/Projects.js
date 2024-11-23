import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/spectra.gif";
import emotion from "../../Assets/Projects/praxsim.gif";
import editor from "../../Assets/Projects/praxsim.gif";
import chatify from "../../Assets/Projects/tourcreator.gif";
import suicide from "../../Assets/Projects/doitxr.gif";
import bitsOfCode from "../../Assets/Projects/puravidaparadise.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Creations </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Immerso Tour Creator"
              description="A web platform built with Next.js, Django, and AWS. It enables tourism and edtech companies to create promotional and educational tours that can be published on the Immerso platform or embedded in websites."
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="DoitXR LMS"
              description="An LMS platform built with Next.js and Firebase, serving thousands of corporate students. It offers immersive, interactive educational content that enhances corporate training experiences."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pura Vida Paradise"
              description="An AR treasure hunt built with React.js and Mind.ar for the Britt Shop at Juan Santamaría Airport. Customers explore the store, finding hidden animals that reveal promotions and rewards."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PBS Showroom"
              description="A Mixed Reality experience for Meta Quest 3 using Unreal Engine and hand tracking. Users explore portals that transport them to immersive virtual spaces, each telling a unique story about the PBS brand."           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Spectra AR"
              description="A real-scale architecture visualization tool created with Unity and Niantic Lightship. Users can place digital buildings on real-world sites using iPad and iPhone, interact with designs, and customize materials."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Praxsim Surgery Simulator"
              description="A laparoscopic surgery simulator for Meta Quest 2 developed with Unity. It uses Obi SoftBody to simulate realistic tissue physics, providing an immersive training tool for surgeons."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
