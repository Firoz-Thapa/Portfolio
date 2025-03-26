import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,  // Visual Studio Code
  SiPostman,           // Postman
  SiSlack,             // Slack
  SiNetlify,           // Netlify
  SiLinux,             // Linux
} from "react-icons/si"; // Importing necessary icons

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Updated Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" /> {/* Linux Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code" /> {/* VSCode Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" /> {/* Postman Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack" /> {/* Slack Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify title="Netlify" /> {/* Netlify Icon */}
      </Col>
    </Row>
  );
}

export default Toolstack;
