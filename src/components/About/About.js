import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css"; // IMPORTANT: Import the CSS file

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

        {/* Work Experience Section */}
        <div data-aos="fade-up">
          <h1 className="project-heading">
            My <strong className="purple">Work Experience </strong>
          </h1>
          <div className="experience-timeline">
            <ExperienceItem 
              position="Front-End Developer"
              company="Lan4AI"
              location="Remote"
              duration="February 2025 – Present"
              description={[
                "Improved UX and optimized performance for AI-based products",
                "Diagnosed and resolved front-end issues using TypeScript and React.js"
              ]}
              technologies={["TypeScript", "React.js"]}
              isLatest={true}
            />
            
            <ExperienceItem 
              position="Thesis Worker"
              company="LAB University of Applied Sciences"
              location="Finland"
              duration="November 2024 – April 2025"
              description={[
                "Developed a MERN stack Personal Study Plan web application for Department of Mechanical Engineering"
              ]}
              technologies={["MongoDB", "Express.js", "React", "Node.js"]}
            />
            
            <ExperienceItem 
              position="Summer Intern"
              company="LAB University of Applied Sciences"
              location="Lappeenranta, Finland"
              duration="May 2024 – August 2024"
              description={[
                "Built React.js markdown documentation tool with automated testing workflows",
                "Implemented CI/CD pipelines for streamlined deployment"
              ]}
              technologies={["React.js", "JavaScript", "CI/CD", "Docker", "Node.js"]}
            />
            
            <ExperienceItem 
              position="LUMA Assistant"
              company="LUT University"
              location="Lappeenranta, Finland"
              duration="February 2023 – January 2024"
              description={[
                "Delivered technology workshops and developed educational materials for K–12 students",
                "Improved workshop content based on faculty feedback"
              ]}
              technologies={["Educational Technology", "Workshop Development"]}
            />
          </div>
        </div>
        
        {/* Education Section */}
        <div data-aos="fade-up">
          <h1 className="project-heading">
            My <strong className="purple">Education </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={12} className="education-card" data-aos="zoom-in-up" data-aos-delay="200">
              <EducationCard 
                degree="Bachelor of Industrial Information Technology"
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

// Professional Experience Item Component
function ExperienceItem({ position, company, location, duration, description, technologies, isLatest }) {
  return (
    <div className={`experience-item ${isLatest ? 'latest' : ''}`} data-aos="fade-up" data-aos-delay="200">
      <div className="experience-date">
        <span className="duration">{duration}</span>
      </div>
      <div className="experience-content">
        <div className="experience-header">
          <h3 className="position-title">{position}</h3>
          <div className="company-info">
            <span className="company-name">{company}</span>
            <span className="location">{location}</span>
          </div>
        </div>
        <div className="experience-description">
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="tech-stack">
          <span className="tech-label">Technologies:</span>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Education Card Component
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