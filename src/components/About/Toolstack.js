import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiNetlify,
  SiLinux,
  SiGithub,
  SiDocker,
  SiJira
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development Environment */}
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-delay="100">
        <SiLinux title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-delay="200">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      
      {/* Development Tools */}
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-delay="300">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-delay="400">
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-delay="500">
        <SiDocker title="Docker" />
      </Col>
      
      {/* Collaboration & Deployment */}
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-delay="600">
        <SiSlack title="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-delay="700">
        <SiJira title="Jira" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-delay="800">
        <SiNetlify title="Netlify" />
      </Col>
    </Row>
  );
}

export default Toolstack;