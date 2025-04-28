import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }} data-aos="fade-right" data-aos-delay="200">
            Hello! I'm <span className="purple typewriter">Firoz Thapa</span>, currently based in 
            <span className="purple"> Finland</span>.
            <br /><br />
            I'm an IT professional with a passion for creating innovative solutions through code. 
            My journey in technology began with curiosity about how software shapes our world, and 
            it has developed into expertise across multiple programming languages and frameworks.
            <br /><br />
            What drives me is the challenge of solving complex problems and transforming ideas into 
            functional applications that make a difference.
          </p>
          
          {/* Activities and Quote section removed */}
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;