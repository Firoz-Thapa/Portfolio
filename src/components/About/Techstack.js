import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg"; 
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiTypescript, SiHtml5, SiCss3, SiMysql, SiPostgresql, SiAmazonaws, SiCsharp, SiMicrosoftazure } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp title="C#" /> {/* Proper C# icon */}
      </Col>

      {/* Frontend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS" />
      </Col>

      {/* Backend Development */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>

      {/* Database Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>

      {/* Cloud Services */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure title="Microsoft Azure" /> {/* Added Azure icon */}
      </Col>
    </Row>
  );
}

export default Techstack;