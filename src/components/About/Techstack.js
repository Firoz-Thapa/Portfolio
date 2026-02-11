import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg"; 
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava, DiAngularSimple } from "react-icons/di";
import { SiTypescript, SiHtml5, SiCss3, SiMysql, SiPostgresql, SiAmazonaws, SiCsharp, SiMicrosoftazure } from "react-icons/si";

function Techstack() {
  const technologies = [
    // Programming Languages
    { id: "javascript", icon: DiJavascript1, name: "JavaScript", delay: "100" },
    { id: "typescript", icon: SiTypescript, name: "TypeScript", delay: "200" },
    { id: "python", icon: DiPython, name: "Python", delay: "300" },
    { id: "cpp", icon: CgCPlusPlus, name: "C++", delay: "400" },
    { id: "csharp", icon: SiCsharp, name: "C#", delay: "500" },
    { id: "java", icon: DiJava, name: "Java", delay: "600" },
    
    // Frontend Technologies
    { id: "react", icon: DiReact, name: "React.js", delay: "700" },
    { id: "angular", icon: DiAngularSimple, name: "Angular", delay: "800" },
    { id: "html5", icon: SiHtml5, name: "HTML5", delay: "900" },
    { id: "css3", icon: SiCss3, name: "CSS", delay: "1000" },
    
    // Backend Development
    { id: "nodejs", icon: DiNodejs, name: "Node.js", delay: "1100" },
    { id: "git", icon: DiGit, name: "Git", delay: "1200" },
    
    // Database Management
    { id: "mysql", icon: SiMysql, name: "MySQL", delay: "1300" },
    { id: "mongodb", icon: DiMongodb, name: "MongoDB", delay: "1400" },
    { id: "postgresql", icon: SiPostgresql, name: "PostgreSQL", delay: "1500" },
    
    // Cloud Services
    { id: "aws", icon: SiAmazonaws, name: "AWS", delay: "1600" },
    { id: "azure", icon: SiMicrosoftazure, name: "Microsoft Azure", delay: "1700" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return (
          <Col xs={4} md={2} key={tech.id} data-aos="flip-left" data-aos-delay={tech.delay} style={{ display: "flex", justifyContent: "center" }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Icon title={tech.name} />
                </div>
                <div className="flip-card-back">
                  {tech.name}
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;