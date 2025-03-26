import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Import your project images
import park from "../../Assets/Projects/park.png"; // Make sure this path is correct
import app from "../../Assets/Projects/app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* Use a single Row for all projects */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Markdown Application"
              description="Markdown is a lightweight markup language for formatting text in a simple and readable way, easily converted to HTML."
              ghLink="https://github.com/Firoz-Thapa/Markdown_Application"
              demoLink="https://mdapplication.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={park}
              isBlog={false}
              title="Smart Parking System"
              description="This concept of parking system helps to solve the problem of shortage of parking spaces in the urban areas."
              ghLink="https://github.com/Firoz-Thapa/Smart_Parking_System"
              demoLink="https://youtu.be/o6_VvFoCMSw?si=hwANspzobGcCektt"
            />
          </Col>
          {/* Add more ProjectCards here if needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
