import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Firoz Thapa </span>
            from <span className="purple"> Finland.</span>
            <br />
            I am a dedicated IT student passionate about software development and
            emerging technologies, skilled in creating applications and solving
            coding challenges, with a focus on teamwork and continuous learning.
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Firoz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
