import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    
    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
    
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 style={{ fontSize: "2.4em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px" }}
            className="about-img"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img src={laptopImg} alt="about" className="img-fluid floating" />
          </Col>
        </Row>
        
        {/* Education Section */}
        <div data-aos="fade-up">
          <h1 className="project-heading">
            My <strong className="purple">Education </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={12} className="education-card" data-aos="zoom-in-up" data-aos-delay="200">
              <EducationCard 
                degree="Bachelor of Information Technology"
                institution="LAB University of Applied Sciences, Finland"
                duration="2022 - 2025"
                description="Focusing on software development, web technologies, and cloud computing."
              />
            </Col>
          </Row>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>
          <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

// New Education Card Component
function EducationCard({ degree, institution, duration, description }) {
  return (
    <div className="education-card-view">
      <h3 className="education-degree animated-text">{degree}</h3>
      <p className="education-institution">{institution}</p>
      <p className="education-duration">{duration}</p>
      <p className="education-description">{description}</p>
    </div>
  );
}

export default About;